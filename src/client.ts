import * as zlib from 'zlib';

import * as grpc from '@grpc/grpc-js';
import { Subject, Observable, Observer } from 'rxjs';
import { filter } from 'rxjs/operators';

import * as commonpb from './pb/commonpb/common_pb';
import * as sliverpb from './pb/sliverpb/sliver_pb';
import * as clientpb from './pb/clientpb/client_pb';
import * as rpcpb from './pb/rpcpb/services_grpc_pb';
import { Events } from './events';
import { SliverClientConfig } from './config';


const TIMEOUT = 30; // Default timeout in seconds
const Kb = 1024;
const Mb = 1024 * Kb;
const Gb = 1024 * Mb;

export async function gzip(data: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}

export async function gunzip(data: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    zlib.gunzip(data, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}


// Exported/simplified tunnel interfaces
export interface Tunnel {
  stdout: Observable<Buffer>
  stdin: Observer<Buffer>
}

export class InteractiveSession {

  private _rpc: rpcpb.SliverRPCClient;
  private _sessionId: number;
  private _tunnelStream: grpc.ClientDuplexStream<sliverpb.TunnelData, sliverpb.TunnelData>;

  constructor(rpc: rpcpb.SliverRPCClient,
    tunnelStream: grpc.ClientDuplexStream<sliverpb.TunnelData, sliverpb.TunnelData>,
    sessionId: number) {
    this._rpc = rpc;
    this._tunnelStream = tunnelStream;
    this._sessionId = sessionId;
  }

  private request(timeout: number): commonpb.Request {
    const req = new commonpb.Request();
    req.setSessionid(this._sessionId);
    req.setTimeout(timeout);
    return req;
  }

  private deadline(timeout = TIMEOUT) {
    return {
      'deadline': Date.now() + ((timeout + 1) * 1000)
    }
  }

  ping(nonce: number, timeout = TIMEOUT): Promise<sliverpb.Ping|undefined> {
    return new Promise((resolve, reject) => {
      const ping = new sliverpb.Ping();
      ping.setRequest(this.request(timeout))
      ping.setNonce(nonce)
      this._rpc.ping(ping, this.deadline(timeout), (err, pong) => {
        err ? reject(err) : resolve(pong);
      });
    });
  }

  ps(timeout = TIMEOUT): Promise<commonpb.Process[]|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.PsReq();
      req.setRequest(this.request(timeout));
      this._rpc.ps(req, this.deadline(timeout), (err, ps) => {
        err ? reject(err) : resolve(ps?.getProcessesList());
      });
    });
  }

  terminate(pid: number, timeout = TIMEOUT): Promise<sliverpb.Terminate|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.TerminateReq();
      req.setPid(pid);
      req.setRequest(this.request(timeout));
      this._rpc.terminate(req, this.deadline(timeout), (err, terminate) => {
        err ? reject(err) : resolve(terminate);
      });
    });
  }

  ifconfig(timeout = TIMEOUT): Promise<sliverpb.Ifconfig|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.IfconfigReq();
      req.setRequest(this.request(timeout));
      this._rpc.ifconfig(req, this.deadline(timeout), (err, ifconfig) => {
        err ? reject(err) : resolve(ifconfig);
      });
    });
  }

  netstat(timeout = TIMEOUT): Promise<sliverpb.Netstat|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.NetstatReq();
      req.setRequest(this.request(timeout));
      this._rpc.netstat(req, this.deadline(timeout), (err, netstat) => {
        err ? reject(err) : resolve(netstat);
      });
    });
  }

  ls(path = '.', timeout = TIMEOUT): Promise<sliverpb.Ls|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.LsReq();
      req.setPath(path);
      req.setRequest(this.request(timeout));
      this._rpc.ls(req, this.deadline(timeout), (err, ls) => {
        err ? reject(err) : resolve(ls);
      });
    });
  }

  cd(path: string, timeout = TIMEOUT): Promise<sliverpb.Pwd|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.CdReq();
      req.setPath(path);
      req.setRequest(this.request(timeout));
      this._rpc.cd(req, this.deadline(timeout), (err, pwd) => {
        err ? reject(err) : resolve(pwd);
      });
    });
  }

  pwd(timeout = TIMEOUT): Promise<sliverpb.Pwd|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.PwdReq();
      req.setRequest(this.request(timeout));
      this._rpc.pwd(req, this.deadline(timeout), (err, pwd) => {
        err ? reject(err) : resolve(pwd);
      });
    });
  }

  rm(path: string, timeout = TIMEOUT): Promise<sliverpb.Rm|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.RmReq();
      req.setPath(path);
      req.setRequest(this.request(timeout));
      this._rpc.rm(req, this.deadline(timeout), (err, rm) => {
        err ? reject(err) : resolve(rm);
      });
    });
  }

  mkdir(path: string, timeout = TIMEOUT): Promise<sliverpb.Mkdir|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.MkdirReq();
      req.setPath(path);
      req.setRequest(this.request(timeout));
      this._rpc.mkdir(req, this.deadline(timeout), (err, mkdir) => {
        err ? reject(err) : resolve(mkdir);
      });
    });
  }

  download(path: string, timeout = TIMEOUT): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.DownloadReq();
      req.setPath(path);
      req.setRequest(this.request(timeout));
      this._rpc.download(req, this.deadline(timeout), async (err, download) => {
        if (err || download === undefined) {
          return reject(err ? err : 'Null response');
        }
        let data = Buffer.from(download.getData());
        const encoder = download.getEncoder();
        if (encoder === 'gzip') {
          data = await gunzip(data);
        } else if (encoder !== '') {
          return reject(`Unsupported encoder ${encoder}`);
        }
        resolve(data);
      });
    });
  }

  private toUint8Array(buf: Buffer): Uint8Array {
    let arrayBuf = new ArrayBuffer(buf.length);
    let uint8Array = new Uint8Array(arrayBuf);
    for (let index = 0; index < buf.length; ++index) {
      uint8Array[index] = buf[index];
    }
    return uint8Array;
  }

  upload(path: string, data: Buffer, timeout = TIMEOUT): Promise<sliverpb.Upload|undefined> {
    return new Promise(async (resolve, reject) => {
      const req = new sliverpb.UploadReq();
      req.setPath(path);
      req.setEncoder('gzip');
      const payload = await gzip(data)
      req.setData(this.toUint8Array(payload));
      req.setRequest(this.request(timeout));
      this._rpc.upload(req, this.deadline(timeout), (err, upload) => {
        err ? reject(err) : resolve(upload);
      });
    });
  }

  processDump(pid: number, timeout = TIMEOUT): Promise<sliverpb.ProcessDump|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ProcessDumpReq();
      req.setPid(pid);
      req.setRequest(this.request(timeout));
      this._rpc.processDump(req, this.deadline(timeout), (err, procdump) => {
        err ? reject(err) : resolve(procdump);
      });
    });
  }

  runAs(userName: string, processName: string, args: string, timeout = TIMEOUT): Promise<sliverpb.RunAs|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.RunAsReq();
      req.setUsername(userName);
      req.setProcessname(processName);
      req.setArgs(args);
      req.setRequest(this.request(timeout));
      this._rpc.runAs(req, this.deadline(timeout), (err, runAs) => {
        err ? reject(err) : resolve(runAs);
      });
    });
  }

  impersonate(userName: string, timeout = TIMEOUT): Promise<sliverpb.Impersonate|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ImpersonateReq();
      req.setUsername(userName);
      req.setRequest(this.request(timeout));
      this._rpc.impersonate(req, this.deadline(timeout), (err, impersonate) => {
        err ? reject(err) : resolve(impersonate);
      });
    });
  }

  revToSelf(timeout = TIMEOUT): Promise<sliverpb.RevToSelf|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.RevToSelfReq();
      req.setRequest(this.request(timeout));
      this._rpc.revToSelf(req, this.deadline(timeout), (err, revToSelf) => {
        err ? reject(err) : resolve(revToSelf);
      });
    });
  }

  getSystem(hostingProcess: string, config: clientpb.ImplantConfig, timeout = TIMEOUT): Promise<sliverpb.GetSystem|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.GetSystemReq();
      req.setHostingprocess(hostingProcess);
      req.setConfig(config);
      req.setRequest(this.request(timeout));
      this._rpc.getSystem(req, this.deadline(timeout), (err, getSystem) => {
        err ? reject(err) : resolve(getSystem);
      });
    });
  }

  // 'shellcode' aka "task"
  executeShellcode(pid: number, shellcode: Buffer, encoder: string, rwx: boolean, timeout = TIMEOUT): Promise<sliverpb.Task|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.TaskReq();
      req.setEncoder(encoder);
      req.setRwxpages(rwx);
      req.setPid(pid);
      req.setData(shellcode);
      req.setRequest(this.request(timeout));
      this._rpc.task(req, this.deadline(timeout), (err, task) => {
        err ? reject(err) : resolve(task);
      });
    });
  }

  msf(payload: string, lhost: string, lport: number, encoder: string, iterations: number, timeout = TIMEOUT): Promise<void> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.MSFReq();
      req.setPayload(payload);
      req.setLhost(lhost);
      req.setLport(lport);
      req.setEncoder(encoder);
      req.setIterations(iterations);
      req.setRequest(this.request(timeout));
      this._rpc.msf(req, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  msfRemote(pid: number, payload: string, lhost: string, lport: number, encoder: string, iterations: number, timeout = TIMEOUT): Promise<void> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.MSFRemoteReq();
      req.setPid(pid);
      req.setPayload(payload);
      req.setLhost(lhost);
      req.setLport(lport);
      req.setEncoder(encoder);
      req.setIterations(iterations);
      req.setRequest(this.request(timeout));
      this._rpc.msf(req, (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  executeAssembly(assembly: Buffer, args: string, process: string, timeout = TIMEOUT): Promise<sliverpb.ExecuteAssembly|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ExecuteAssemblyReq();
      req.setAssembly(assembly);
      req.setArguments(args);
      req.setProcess(process);
      req.setRequest(this.request(timeout));
      this._rpc.executeAssembly(req, this.deadline(timeout), (err, executeAssembly) => {
        err ? reject(err) : resolve(executeAssembly);
      });
    });
  }

  migrate(pid: number, config: clientpb.ImplantConfig, timeout = TIMEOUT): Promise<sliverpb.Migrate|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.MigrateReq();
      req.setPid(pid);
      req.setConfig(config);
      req.setRequest(this.request(timeout));
      this._rpc.migrate(req, this.deadline(timeout), (err, migration) => {
        err ? reject(err) : resolve(migration);
      });
    });
  }

  execute(exe: string, args: string[], output: boolean, timeout = TIMEOUT): Promise<sliverpb.Execute|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ExecuteReq();
      req.setPath(exe);
      req.setArgsList(args);
      req.setOutput(output);
      req.setRequest(this.request(timeout));
      this._rpc.execute(req, this.deadline(timeout), (err, exec) => {
        err ? reject(err) : resolve(exec);
      });
    });
  }

  sideload(data: Buffer, processName: string, args: string, entryPoint: string, timeout = TIMEOUT): Promise<sliverpb.Sideload|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.SideloadReq();
      req.setData(data);
      req.setProcessname(processName);
      req.setArgs(args);
      req.setEntrypoint(entryPoint);
      req.setRequest(this.request(timeout));
      this._rpc.sideload(req, this.deadline(timeout), (err, exec) => {
        err ? reject(err) : resolve(exec);
      });
    });
  }

  spawnDLL(data: Buffer, entrypoint: string, processName: string, args: string, timeout = TIMEOUT): Promise<sliverpb.SpawnDll|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.InvokeSpawnDllReq();
      req.setData(data);
      req.setProcessname(processName);
      req.setArgs(args);
      req.setEntrypoint(entrypoint);
      req.setRequest(this.request(timeout));
      this._rpc.spawnDll(req, this.deadline(timeout), (err, dll) => {
        err ? reject(err) : resolve(dll);
      });
    });
  }

  screenshot(timeout = TIMEOUT): Promise<sliverpb.Screenshot|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ScreenshotReq();
      req.setRequest(this.request(timeout));
      this._rpc.screenshot(req, this.deadline(timeout), (err, screenshot) => {
        err ? reject(err) : resolve(screenshot);
      });
    });
  }

  shell(path: string, pty: boolean, timeout = TIMEOUT): Promise<Tunnel> {
    return new Promise((resolve, reject) => {

      const tunnel = new sliverpb.Tunnel();
      tunnel.setSessionid(this._sessionId);

      this._rpc.createTunnel(tunnel, (err, rpcTunnel) => {
        if (err || rpcTunnel === undefined) {
          return reject(err);
        }
        const tunnelId = rpcTunnel.getTunnelid();
        const tunnelData = new sliverpb.TunnelData();
        tunnelData.setSessionid(this._sessionId);
        tunnelData.setTunnelid(tunnelId);
        
        this._tunnelStream.write(tunnelData, () => {
          const req = new sliverpb.ShellReq();
          req.setTunnelid(tunnelId);
          req.setPath(path);
          req.setEnablepty(pty);
          req.setRequest(this.request(timeout));
          this._rpc.shell(req, (err, shell) => {
            if (err || shell === undefined) {
              return reject(err);
            }
            const stdout = new Observable<Buffer>(producer => {
              this._tunnelStream.on('data', (tunnelData: sliverpb.TunnelData) => {
                if (tunnelData.getTunnelid() !== tunnelId) {
                  return; // Data is from another tunnel
                }
                const isClosed = tunnelData.getClosed();
                if (isClosed) {
                  const drain = Buffer.from(tunnelData.getData_asU8());
                  if (drain.length) {
                    producer.next(drain);
                  }
                  producer.complete();
                } else {
                  producer.next(Buffer.from(tunnelData.getData_asU8()));
                }
              });
            });

            const stdin: Observer<Buffer> = {
              next: (raw: Buffer) => {
                const data = new sliverpb.TunnelData();
                data.setTunnelid(tunnelId);
                data.setSessionid(this._sessionId);
                data.setData(raw);
                this._tunnelStream.write(data);
              },
              complete: () => {
                this._rpc.closeTunnel(rpcTunnel, () => { });
              },
              error: () => {
                this._rpc.closeTunnel(rpcTunnel, () => { });
              },
            };
            resolve({ stdin: stdin, stdout: stdout });
          });
        }); // Bind tunnel
      });
    });
  }

}


export class SliverClient {

  private _config: SliverClientConfig;
  private _rpc: rpcpb.SliverRPCClient | null = null;
  private empty = new commonpb.Empty();

  private lootEventTypes: string[] = [Events.LootAddedEvent, Events.LootRemovedEvent];
  private _events: grpc.ClientReadableStream<clientpb.Event> | null = null;
  event$ = new Subject<clientpb.Event>();

  session$ = this.event$.pipe(filter(event => event.getSession() !== undefined));
  job$ = this.event$.pipe(filter(event => event.getJob() !== undefined));
  client$ = this.event$.pipe(filter(event => event.getClient() !== undefined));
  
  // Filter anything that doesn't match one of the loot event types
  loot$ = this.event$.pipe(filter(event => this.lootEventTypes.some(lootEventType => { 
    lootEventType === event.getEventtype() 
  })));

  private _tunnelStream: grpc.ClientDuplexStream<sliverpb.TunnelData, sliverpb.TunnelData> | null = null;

  constructor(config: SliverClientConfig) {
    this._config = config;
  }

  rpcHost(): string {
    return `${this._config.lhost}:${this._config.lport}`;
  }

  rpcCredentials(): grpc.ChannelCredentials {
    const ca = Buffer.from(this._config.ca_certificate);
    const privateKey = Buffer.from(this._config.private_key);
    const certificate = Buffer.from(this._config.certificate);
    
    return grpc.credentials.createSsl(ca, privateKey, certificate, {
      checkServerIdentity: () => undefined,
    });
  }

  get config(): SliverClientConfig {
    return this._config;
  }

  get rpc(): rpcpb.SliverRPCClient {
    if (this._rpc === null) {
      throw new Error('SliverRPCClient not connected');
    }
    return this._rpc;
  }

  get tunnelStream(): grpc.ClientDuplexStream<sliverpb.TunnelData, sliverpb.TunnelData> {
    if (this._tunnelStream === null) {
      throw new Error('SliverRPCClient not connected');
    }
    return this._tunnelStream;
  }

  get isConnected(): boolean {
    return this._rpc !== null;
  }

  connect(): Promise<SliverClient> {
    return new Promise((resolve, reject) => {

      const rpc = new rpcpb.SliverRPCClient(this.rpcHost(), this.rpcCredentials(), {
        'grpc.max_send_message_length': 2 * Gb,
        'grpc.max_receive_message_length': 2 * Gb,
      });
      rpc.getVersion(this.empty, (err) => {
        if (err) {
          return reject(err);
        }

        // RPC Client
        this._rpc = rpc;

        // Events streams
        this._events = this.rpc.events(this.empty);
        this._events?.on('data', event => { this.event$.next(event) });
        this._events?.on('error', err => { this.event$.error(err) });
        this._events?.on('end', () => { this.event$.complete() });

        // Tunnel streams
        this._tunnelStream = rpc.tunnelData();
        if (this._tunnelStream === undefined) {
          return reject('Failed to open tunnel data stream');
        }
        resolve(this);
      });
    });
  }

  async disconnect(): Promise<void> {
    if (this._events !== null) {
      this._events.on('error', () => { });
      this._events.cancel();
    }
    if (this._tunnelStream !== null) {
      this._tunnelStream.on('error', () => { });
      this._tunnelStream.cancel();
    }
    this.rpc.close();
    this._rpc = null;
  }

  private deadline(timeout: number) {
    return {
      'deadline': Date.now() + (timeout * 1000)
    }
  }

  // ---- Version ----

  getVersion(timeout = TIMEOUT): Promise<clientpb.Version|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.getVersion(this.empty, this.deadline(timeout), (err, version) => {
        err ? reject(err) : resolve(version);
      });
    })
  }

  // ---- Operators ----

  getOperators(timeout = TIMEOUT): Promise<clientpb.Operator[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.getOperators(this.empty, this.deadline(timeout), (err, operators) => {
        err ? reject(err) : resolve(operators?.getOperatorsList());
      });
    });
  }

  // ---- Sessions ----

  sessions(timeout = TIMEOUT): Promise<clientpb.Session[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.getSessions(this.empty, this.deadline(timeout), (err, sessions) => {
        err ? reject(err) : resolve(sessions?.getSessionsList());
      });
    });
  }

  async interactWith(session: clientpb.Session, timeout = TIMEOUT): Promise<InteractiveSession> {
    return new InteractiveSession(this.rpc, this.tunnelStream, session.getId());
  }

  async interact(sessionId: number, timeout = TIMEOUT): Promise<InteractiveSession> {
    return new InteractiveSession(this.rpc, this.tunnelStream, sessionId);
  }

  killSession(sessionId: number, timeout = TIMEOUT): Promise<void> {
    return new Promise((resolve, reject) => {
      const kill = new sliverpb.KillSessionReq();
      const req = new commonpb.Request();
      req.setSessionid(sessionId);
      req.setTimeout(timeout);
      kill.setRequest(req);
      this.rpc.killSession(kill, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  // ---- Jobs ----

  jobs(timeout = TIMEOUT): Promise<clientpb.Job[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.getJobs(this.empty, this.deadline(timeout), (err, jobs) => {
        err ? reject(err) : resolve(jobs?.getActiveList());
      });
    });
  }

  killJob(jobId: number, timeout = TIMEOUT): Promise<clientpb.KillJob|undefined> {
    return new Promise((resolve, reject) => {
      const kill = new clientpb.KillJobReq();
      kill.setId(jobId);
      this.rpc.killJob(kill, this.deadline(timeout), (err, killed) => {
        err ? reject(err) : resolve(killed);
      });
    });
  }

  // ---- Listeners ----

  startMTLSListener(host: string, port: number, persistent = false, timeout = TIMEOUT): Promise<clientpb.MTLSListener|undefined> {
    return new Promise((resolve, reject) => {
      const mtls = new clientpb.MTLSListenerReq();
      mtls.setHost(host);
      mtls.setPort(port);
      mtls.setPersistent(persistent);
      this.rpc.startMTLSListener(mtls, this.deadline(timeout), (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startDNSListener(domains: string[], canaries: boolean, host: string, port: number, persistent = false, timeout = TIMEOUT): Promise<clientpb.DNSListener|undefined> {
    return new Promise((resolve, reject) => {
      const dns = new clientpb.DNSListenerReq();
      dns.setDomainsList(domains);
      dns.setCanaries(canaries);
      dns.setHost(host);
      dns.setPort(port);
      dns.setPersistent(persistent);
      this.rpc.startDNSListener(dns, this.deadline(timeout), (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startHTTPListener(domain: string, host: string, port: number, website = '', persistent = false, timeout = TIMEOUT): Promise<clientpb.HTTPListener|undefined> {
    return new Promise((resolve, reject) => {
      const http = new clientpb.HTTPListenerReq();
      http.setDomain(domain);
      http.setHost(host);
      http.setPort(port);
      http.setSecure(false);
      http.setWebsite(website);
      http.setPersistent(persistent);
      this.rpc.startHTTPListener(http, this.deadline(timeout), (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startHTTPSListener(domain: string, host: string, port: number, acme = false, website = '',
    cert?: Buffer, key?: Buffer, persistent = false,  timeout = TIMEOUT): Promise<clientpb.HTTPListener|undefined> {
    return new Promise((resolve, reject) => {
      const https = new clientpb.HTTPListenerReq();
      https.setDomain(domain);
      https.setHost(host);
      https.setPort(port);
      https.setSecure(true);
      cert ? https.setCert(cert) : null;
      key ? https.setKey(key) : null;
      https.setAcme(acme);
      https.setWebsite(website);
      https.setPersistent(persistent);
      this.rpc.startHTTPSListener(https, this.deadline(timeout), (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startWGListener(port: number, nPort: number, keyPort: number, persistent = false, timeout = TIMEOUT): Promise<clientpb.WGListener|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.WGListenerReq();
      req.setPort(port);
      req.setNport(nPort);
      req.setKeyport(keyPort);
      req.setPersistent(persistent);
      this.rpc.startWGListener(req, this.deadline(timeout), (err, wgListener) => {
        err ? reject(err) : resolve(wgListener);
      });
    });
  }

  startTCPStagerListener(host: string, port: number, data: Buffer, persistent = false, timeout = TIMEOUT): Promise<clientpb.StagerListener|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.StagerListenerReq();
      req.setProtocol(clientpb.StageProtocol.TCP);
      req.setHost(host);
      req.setPort(port);
      req.setData(data);
      this.rpc.startTCPStagerListener(req, (err, tcpListener) => {
        err ? reject(err) : resolve(tcpListener);
      });
    });
  }

  startHTTPStagerListener(host: string, port: number, data: Buffer, timeout = TIMEOUT): Promise<clientpb.StagerListener|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.StagerListenerReq();
      req.setProtocol(clientpb.StageProtocol.HTTP);
      req.setHost(host);
      req.setPort(port);
      req.setData(data);
      this.rpc.startHTTPStagerListener(req, this.deadline(timeout), (err, httpListener) => {
        err ? reject(err) : resolve(httpListener);
      });
    });
  }

  startHTTPSStagerListener(host: string, port: number, data: Buffer, timeout = TIMEOUT): Promise<clientpb.StagerListener|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.StagerListenerReq();
      req.setProtocol(clientpb.StageProtocol.HTTPS);
      req.setHost(host);
      req.setPort(port);
      req.setData(data);
      this.rpc.startHTTPStagerListener(req, this.deadline(timeout), (err, httpsListener) => {
        err ? reject(err) : resolve(httpsListener);
      });
    });
  }

  // ---- Implants ----

  generate(config: clientpb.ImplantConfig, timeout = TIMEOUT): Promise<commonpb.File|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.GenerateReq();
      req.setConfig(config);
      this.rpc.generate(req, this.deadline(timeout), (err, generated) => {
        err ? reject(err) : resolve(generated?.getFile());
      });
    });
  }

  regenerate(name: string, timeout = TIMEOUT): Promise<commonpb.File|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.RegenerateReq();
      req.setImplantname(name);
      this.rpc.regenerate(req, this.deadline(timeout), (err, generated) => {
        err ? reject(err) : resolve(generated?.getFile());
      });
    });
  }

  implantBuilds(timeout = TIMEOUT): Promise<clientpb.ImplantBuilds|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.implantBuilds(this.empty, this.deadline(timeout), (err, builds) => {
        err ? reject(err) : resolve(builds);
      });
    });
  }

  deleteImplantBuild(name: string, timeout = TIMEOUT): Promise<void> {
    const delReq = new clientpb.DeleteReq();
    delReq.setName(name);
    return new Promise((resolve, reject) => {
      this.rpc.deleteImplantBuild(delReq, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  canaries(timeout = TIMEOUT): Promise<clientpb.DNSCanary[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.canaries(this.empty, this.deadline(timeout), (err, canaries) => {
        err ? reject(err) : resolve(canaries?.getCanariesList());
      });
    });
  }

  implantProfiles(timeout = TIMEOUT): Promise<clientpb.ImplantProfile[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.implantProfiles(this.empty, this.deadline(timeout), (err, profiles) => {
        err ? reject(err) : resolve(profiles?.getProfilesList());
      });
    });
  }

  saveImplantProfile(profile: clientpb.ImplantProfile, timeout = TIMEOUT): Promise<clientpb.ImplantProfile|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.saveImplantProfile(profile, this.deadline(timeout), (err, profile) => {
        err ? reject(err) : resolve(profile);
      });
    });
  }

  deleteImplantProfile(name: string, timeout = TIMEOUT): Promise<void> {
    const delReq = new clientpb.DeleteReq();
    delReq.setName(name);
    return new Promise((resolve, reject) => {
      this.rpc.deleteImplantProfile(delReq, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  // ---- Loot ----
  lootAll(timeout = TIMEOUT): Promise<clientpb.Loot[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.lootAll(this.empty, this.deadline(timeout), (err, loot) => {
        err ? reject(err) : resolve(loot?.getLootList());
      });
    });
  }

  lootAllOf(lootType: string, timeout = TIMEOUT): Promise<clientpb.Loot[]|undefined> {

    // There doesn't seem to be a good way to strongly type this parameter
    const loot = new clientpb.Loot();
    switch (lootType.toLowerCase()) {
      case 'c':
      case 'cred':
      case 'creds':
      case 'credential':
      case 'credentials':
        loot.setType(clientpb.LootType.LOOT_CREDENTIAL);
        break;

      case 'f':
      case 'file':
      case 'files':
        loot.setType(clientpb.LootType.LOOT_FILE);
        break;

      default:
        throw new Error(`Unknown loot type: ${lootType}`);
    }

    return new Promise((resolve, reject) => {
      this.rpc.lootAllOf(loot, this.deadline(timeout), (err, loot) => {
        err ? reject(err) : resolve(loot?.getLootList());
      });
    });
  }

  lootAdd(loot: clientpb.Loot, timeout = TIMEOUT): Promise<clientpb.Loot|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.lootAdd(loot, this.deadline(timeout), (err, loot) => {
        err ? reject(err) : resolve(loot);
      });
    });
  }

  lootUpdate(lootID: string, name: string, timeout = TIMEOUT): Promise<clientpb.Loot|undefined> {
    const loot = new clientpb.Loot();
    loot.setLootid(lootID);
    loot.setName(name);
    return new Promise((resolve, reject) => {
      this.rpc.lootUpdate(loot, this.deadline(timeout), (err, loot) => {
        err ? reject(err) : resolve(loot);
      });
    });
  }

  lootRemove(lootID: string, timeout = TIMEOUT): Promise<void> {
    const loot = new clientpb.Loot();
    loot.setLootid(lootID);
    return new Promise((resolve, reject) => {
      this.rpc.lootRm(loot, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  lootContent(lootID: string, timeout = TIMEOUT): Promise<clientpb.Loot|undefined> {
    const loot = new clientpb.Loot();
    loot.setLootid(lootID);
    return new Promise((resolve, reject) => {
      this.rpc.lootContent(loot, this.deadline(timeout), (err, loot) => {
        err ? reject(err) : resolve(loot);
      });
    });
  }

  // ---- Websites ----
  
  websites(timeout = TIMEOUT): Promise<clientpb.Website[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.websites(this.empty, this.deadline(timeout), (err, websites) => {
        err ? reject(err) : resolve(websites?.getWebsitesList());
      });
    });
  }

  website(name: string, timeout = TIMEOUT): Promise<clientpb.Website|undefined> {
    return new Promise((resolve, reject) => {
      const web = new clientpb.Website();
      web.setName(name);
      this.rpc.website(web, this.deadline(timeout), (err, website) => {
        err ? reject(err) : resolve(website);
      });
    });
  }

  websiteRemove(name: string, timeout = TIMEOUT): Promise<void> {
    return new Promise((resolve, reject) => {
      const web = new clientpb.Website();
      web.setName(name);
      this.rpc.websiteRemove(web, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  websiteAddContent(name: string, contents: Map<string, clientpb.WebContent>, timeout = TIMEOUT): Promise<clientpb.Website|undefined> {
    return new Promise((resolve, reject) => {
      const addContent = new clientpb.WebsiteAddContent();
      addContent.setName(name);
      contents.forEach((value, key) => {
        addContent.getContentsMap().set(key, value);
      });
      this.rpc.websiteAddContent(addContent, this.deadline(timeout), (err, website) => {
        err ? reject(err) : resolve(website);
      });
    });
  }

  websiteUpdateContent(name: string, contents: Map<string, clientpb.WebContent>, timeout = TIMEOUT): Promise<clientpb.Website|undefined> {
    return new Promise((resolve, reject) => {
      const addContent = new clientpb.WebsiteAddContent();
      addContent.setName(name);
      contents.forEach((value, key) => {
        addContent.getContentsMap().set(key, value);
      });
      this.rpc.websiteUpdateContent(addContent, this.deadline(timeout), (err, website) => {
        err ? reject(err) : resolve(website);
      });
    });
  }

  websiteRemoveContent(name: string, paths: string[], timeout = TIMEOUT): Promise<clientpb.Website|undefined> {
    return new Promise((resolve, reject) => {
      const rm = new clientpb.WebsiteRemoveContent();
      rm.setName(name);
      rm.setPathsList(paths);
      this.rpc.websiteRemoveContent(rm, this.deadline(timeout), (err, website) => {
        err ? reject(err) : resolve(website);
      });
    });
  }

}

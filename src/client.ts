import * as grpc from '@grpc/grpc-js';
import { Subject, Observable, Observer } from 'rxjs';
import { filter } from 'rxjs/operators';

import * as commonpb from './pb/commonpb/common_pb';
import * as sliverpb from './pb/sliverpb/sliver_pb';
import * as clientpb from './pb/clientpb/client_pb';
import * as rpcpb from './pb/rpcpb/services_grpc_pb';

import { SliverClientConfig } from './config';


const TIMEOUT = 30; // Default timeout in seconds
const Kb = 1024;
const Mb = 1024*Kb;
const Gb = 1024*Mb;

// Exported/simplified tunnel interfaces
export interface Tunnel {
  stdout: Observable<Buffer>
  stdin: Observer<Buffer>
}


export class InteractiveSession {

  private _rpc: rpcpb.SliverRPCClient;
  private _session: clientpb.Session;
  private _tunnelStream: grpc.ClientDuplexStream<sliverpb.TunnelData, sliverpb.TunnelData>;

  constructor(rpc: rpcpb.SliverRPCClient, 
              tunnelStream: grpc.ClientDuplexStream<sliverpb.TunnelData, sliverpb.TunnelData>,  
              session: clientpb.Session) {
    this._rpc = rpc;
    this._tunnelStream = tunnelStream;
    this._session = session;
  }

  ping(): Promise<sliverpb.Ping> {
    return new Promise((resolve, reject) => {
      const ping = new sliverpb.Ping();
      this._rpc.ping(ping, (err, pong) => {
        err ? reject(err) : resolve(pong);
      });
    });
  }

  private request(timeout: number): commonpb.Request {
    const req = new commonpb.Request();
    req.setSessionid(this._session.getId());
    req.setTimeout(timeout);
    return req;
  }

  ps(timeout = TIMEOUT): Promise<commonpb.Process[]> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.PsReq();
      req.setRequest(this.request(timeout));
      this._rpc.ps(req, (err, ps) => {
        err ? reject(err) : resolve(ps?.getProcessesList());
      });
    });
  }

  terminate(pid: number, timeout = TIMEOUT): Promise<sliverpb.Terminate> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.TerminateReq();
      req.setPid(pid);
      req.setRequest(this.request(timeout));
      this._rpc.terminate(req, (err, terminate) => {
        err ? reject(err) : resolve(terminate);
      });
    });
  }

  ifconfig(timeout = TIMEOUT): Promise<sliverpb.Ifconfig> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.IfconfigReq();
      req.setRequest(this.request(timeout));
      this._rpc.ifconfig(req, (err, ifconfig) => {
        err ? reject(err) : resolve(ifconfig);
      });
    }); 
  }

  netstat(timeout = TIMEOUT): Promise<sliverpb.Netstat> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.NetstatReq();
      req.setRequest(this.request(timeout));
      this._rpc.netstat(req, (err, netstat) => {
        err ? reject(err) : resolve(netstat);
      });
    });
  }

  ls(path = '.', timeout = TIMEOUT): Promise<sliverpb.Ls> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.LsReq();
      req.setPath(path);
      req.setRequest(this.request(timeout));
      this._rpc.ls(req, (err, ls) => {
        err ? reject(err) : resolve(ls);
      });
    });
  }

  cd(path: string, timeout = TIMEOUT): Promise<sliverpb.Pwd> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.CdReq();
      req.setPath(path);
      req.setRequest(this.request(timeout));
      this._rpc.cd(req, (err, pwd) => {
        err ? reject(err) : resolve(pwd);
      });
    });
  }

  pwd(timeout = TIMEOUT): Promise<sliverpb.Pwd> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.PwdReq();
      req.setRequest(this.request(timeout));
      this._rpc.pwd(req, (err, pwd) => {
        err ? reject(err) : resolve(pwd);
      });
    });
  }

  rm(path: string, timeout = TIMEOUT): Promise<sliverpb.Rm> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.RmReq();
      req.setPath(path);
      req.setRequest(this.request(timeout));
      this._rpc.rm(req, (err, rm) => {
        err ? reject(err) : resolve(rm);
      });
    });
  }

  mkdir(path: string, timeout = TIMEOUT): Promise<sliverpb.Mkdir> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.MkdirReq();
      req.setPath(path);
      req.setRequest(this.request(timeout));
      this._rpc.mkdir(req, (err, mkdir) => {
        err ? reject(err) : resolve(mkdir);
      });
    }); 
  }

  download(path: string, timeout = TIMEOUT): Promise<sliverpb.Download> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.DownloadReq();
      req.setPath(path);
      req.setRequest(this.request(timeout));
      this._rpc.download(req, (err, download) => {
        err ? reject(err) : resolve(download);
      });
    }); 
  }

  upload(path: string, encoder: string, data: Buffer, timeout = TIMEOUT): Promise<sliverpb.Upload> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.UploadReq();
      req.setPath(path);
      req.setEncoder(encoder);
      req.setData(data);
      req.setRequest(this.request(timeout));
      this._rpc.upload(req, (err, upload) => {
        err ? reject(err) : resolve(upload);
      });
    }); 
  }

  processDump(pid: number, timeout = TIMEOUT): Promise<sliverpb.ProcessDump> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ProcessDumpReq();
      req.setPid(pid);
      req.setRequest(this.request(timeout));
      this._rpc.processDump(req, (err, procdump) => {
        err ? reject(err) : resolve(procdump);
      });
    });
  }

  runAs(userName: string, processName: string, args: string, timeout = TIMEOUT): Promise<sliverpb.RunAs> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.RunAsReq();
      req.setUsername(userName);
      req.setProcessname(processName);
      req.setArgs(args);
      req.setRequest(this.request(timeout));
      this._rpc.runAs(req, (err, runAs) => {
        err ? reject(err) : resolve(runAs);
      });
    });
  }

  impersonate(userName: string, timeout = TIMEOUT): Promise<sliverpb.Impersonate> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ImpersonateReq();
      req.setUsername(userName);
      req.setRequest(this.request(timeout));
      this._rpc.impersonate(req, (err, impersonate) => {
        err ? reject(err) : resolve(impersonate);
      });
    });
  }

  revToSelf(timeout = TIMEOUT): Promise<sliverpb.RevToSelf> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.RevToSelfReq();
      req.setRequest(this.request(timeout));
      this._rpc.revToSelf(req, (err, revToSelf) => {
        err ? reject(err) : resolve(revToSelf);
      });
    });
  }

  getSystem(hostingProcess: string, config: clientpb.ImplantConfig, timeout = TIMEOUT): Promise<sliverpb.GetSystem> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.GetSystemReq();
      req.setHostingprocess(hostingProcess);
      req.setConfig(config);
      req.setRequest(this.request(timeout));
      this._rpc.getSystem(req, (err, getSystem) => {
        err ? reject(err) : resolve(getSystem);
      });
    });
  }

  task(pid: number, shellcode: Buffer, encoder: string, rwx: boolean, timeout = TIMEOUT): Promise<sliverpb.Task> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.TaskReq();
      req.setEncoder(encoder);
      req.setRwxpages(rwx);
      req.setPid(pid);
      req.setData(shellcode);
      req.setRequest(this.request(timeout));
      this._rpc.task(req, (err, task) => {
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
      this._rpc.msf(req, (err) => {
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

  executeAssembly(hostingDLL: Buffer, assembly: Buffer, args: string, process: string, 
                  AMSIBypass: boolean, timeout = TIMEOUT): Promise<sliverpb.ExecuteAssembly> {
    return new Promise((resolve, reject) => {
      const req = new sliverpb.ExecuteAssemblyReq();
      req.setHostingdll(hostingDLL);
      req.setAssembly(assembly);
      req.setArguments(args);
      req.setProcess(process);
      req.setAmsibypass(AMSIBypass);
      req.setRequest(this.request(timeout));
      this._rpc.executeAssembly(req, (err, executeAssembly) => {
        err ? reject(err) : resolve(executeAssembly);
      });
    });
  }

  migrate(pid: number, config: clientpb.ImplantConfig, timeout = TIMEOUT): Promise<sliverpb.Migrate> {
    return new Promise((resolve, reject) => { 
      const req = new clientpb.MigrateReq();
      req.setPid(pid);
      req.setConfig(config);
      req.setRequest(this.request(timeout));
      this._rpc.migrate(req, (err, migration) => {
        err ? reject(err) : resolve(migration);
      });
    });
  }

  execute(exe: string, args: string[], output: boolean, timeout = TIMEOUT): Promise<sliverpb.Execute> {
    return new Promise((resolve, reject) => { 
      const req = new sliverpb.ExecuteReq();
      req.setPath(exe);
      req.setArgsList(args);
      req.setOutput(output);
      req.setRequest(this.request(timeout));
      this._rpc.execute(req, (err, exec) => {
        err ? reject(err) : resolve(exec);
      });
    });
  }

  sideload(data: Buffer, processName: string, args: string, entryPoint: string, timeout = TIMEOUT): Promise<sliverpb.Sideload> {
    return new Promise((resolve, reject) => { 
      const req = new sliverpb.SideloadReq();
      req.setData(data);
      req.setProcessname(processName);
      req.setArgs(args);
      req.setEntrypoint(entryPoint);
      req.setRequest(this.request(timeout));
      this._rpc.sideload(req, (err, exec) => {
        err ? reject(err) : resolve(exec);
      });
    });
  }

  spawnDLL(data: Buffer, processName: string, offset: number, args: string, timeout = TIMEOUT): Promise<sliverpb.SpawnDll> {
    return new Promise((resolve, reject) => { 
      const req = new sliverpb.SpawnDllReq();
      req.setData(data);
      req.setProcessname(processName);
      req.setArgs(args);
      req.setOffset(offset);
      req.setRequest(this.request(timeout));
      this._rpc.spawnDll(req, (err, dll) => {
        err ? reject(err) : resolve(dll);
      });
    });
  }

  screenshot(timeout = TIMEOUT): Promise<sliverpb.Screenshot> {
    return new Promise((resolve, reject) => { 
      const req = new sliverpb.ScreenshotReq();
      req.setRequest(this.request(timeout));
      this._rpc.screenshot(req, (err, screenshot) => {
        err ? reject(err) : resolve(screenshot);
      });
    });
  }

  shell(path: string, pty: boolean, timeout = TIMEOUT): Promise<Tunnel> {
    return new Promise((resolve, reject) => {

      const tunnel = new sliverpb.Tunnel();
      tunnel.setSessionid(this._session.getId());
      this._rpc.createTunnel(tunnel, (err, rpcTunnel) => {
        if (err || rpcTunnel === undefined) {
          return reject(err);
        }
        const tunnelData = new sliverpb.TunnelData();
        tunnelData.setSessionid(this._session.getId());
        tunnelData.setTunnelid(rpcTunnel.getTunnelid());
        this._tunnelStream.write(tunnelData); // Bind tunnel
        const req = new sliverpb.ShellReq();
        req.setTunnelid(rpcTunnel.getTunnelid());
        req.setPath(path);
        req.setEnablepty(pty);
        req.setRequest(this.request(timeout));
        this._rpc.shell(req, (err, shell) => {
          if (err || shell === undefined) {
            return reject(err);
          }

          const stdout = new Observable<Buffer>(producer => {
            this._tunnelStream.on('data', (tunnelData: sliverpb.TunnelData) => {
              producer.next(Buffer.from(tunnelData.getData_asU8()));
            });
          });
          
          const stdin: Observer<Buffer> = {
            next: (raw: Buffer) => {
              const data = new sliverpb.TunnelData();
              data.setTunnelid(rpcTunnel.getTunnelid());
              data.setSessionid(this._session.getId());
              data.setData(raw);
              this._tunnelStream.write(data);
            },
            complete: () => { this._rpc.closeTunnel(rpcTunnel, () => {}) },
            error: (err) => {
              console.error(err);
              this._rpc.closeTunnel(rpcTunnel, () => {})
            },
          };

          resolve({stdin: stdin,  stdout: stdout});

        });
      });

    });
  }

}


export class SliverClient {

  private _config: SliverClientConfig;
  private _rpc: rpcpb.SliverRPCClient|null = null;
  private empty = new commonpb.Empty();

  private _events: grpc.ClientReadableStream<clientpb.Event>|null = null;
  event$ = new Subject<clientpb.Event>();

  session$ = this.event$.pipe(filter(event => event.getSession() !== undefined));
  job$ = this.event$.pipe(filter(event => event.getJob() !== undefined));
  client$ = this.event$.pipe(filter(event => event.getClient() !== undefined));

  private _tunnelStream: grpc.ClientDuplexStream<sliverpb.TunnelData, sliverpb.TunnelData>|null = null;

  constructor(config: SliverClientConfig) {
    this._config = config;
  }

  host(): string {
    return `${this._config.lhost}:${this._config.lport}`;
  }

  credentials(): grpc.ChannelCredentials {
    const ca = Buffer.from(this._config.ca_certificate);
    const privateKey = Buffer.from(this._config.private_key);
    const certificate = Buffer.from(this._config.certificate);
    return grpc.credentials.createSsl(ca, privateKey, certificate, {
      checkServerIdentity: () => undefined,
    });
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

      const rpc = new rpcpb.SliverRPCClient(this.host(), this.credentials(), {
        'grpc.max_send_message_length': 2*Gb,
        'grpc.max_receive_message_length': 2*Gb,
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
      this._events.on('error', () => {})
      this._events.cancel()
    }
    if (this._tunnelStream !== null) {
      this._tunnelStream.on('error', () => {})
      this._tunnelStream.cancel()
    }
    this.rpc.close()
    this._rpc = null
  }

  // ---- Version ----

  getVersion(): Promise<clientpb.Version> {
    return new Promise((resolve, reject) => {
      this.rpc.getVersion(this.empty, (err, version) => {
        err ? reject(err) : resolve(version);
      });
    })
  }

  // ---- Operators ----

  getOperators(): Promise<clientpb.Operator[]> {
    return new Promise((resolve, reject) => {
      this.rpc.getOperators(this.empty, (err, operators) => {
        err ? reject(err) : resolve(operators?.getOperatorsList());
      });
    });
  }

  // ---- Sessions ----

  sessions(): Promise<clientpb.Session[]> {
    return new Promise((resolve, reject) => {
      this.rpc.getSessions(this.empty, (err, sessions) => {
        err ? reject(err) : resolve(sessions?.getSessionsList());
      });
    });
  }

  async interact(session: clientpb.Session): Promise<InteractiveSession> {
    return new InteractiveSession(this.rpc, this.tunnelStream, session);
  }

  killSession(sessionId: number, timeout = TIMEOUT): Promise<void> {
    return new Promise((resolve, reject) => { 
      const kill = new sliverpb.KillSessionReq();
      const req = new commonpb.Request();
      req.setSessionid(sessionId);
      req.setTimeout(timeout);
      kill.setRequest(req);
      this.rpc.killSession(kill, (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  // ---- Jobs ----

  jobs(): Promise<clientpb.Job[]> {
    return new Promise((resolve, reject) => {
      this.rpc.getJobs(this.empty, (err, jobs) => {
        err ? reject(err) : resolve(jobs?.getActiveList());
      });
    });
  }

  killJob(jobId: number): Promise<clientpb.KillJob> {
    return new Promise((resolve, reject) => {
      const kill = new clientpb.KillJobReq();
      kill.setId(jobId);
      this.rpc.killJob(kill, (err, killed) => {
        err ? reject(err) : resolve(killed);
      });
    });
  }

  // ---- Listeners ----

  startMTLSListener(host: string, port: number): Promise<clientpb.MTLSListener> {
    return new Promise((resolve, reject) => {
      const mtls = new clientpb.MTLSListenerReq();
      mtls.setHost(host);
      mtls.setPort(port);
      this.rpc.startMTLSListener(mtls, (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startDNSListener(domains: string[], canaries: boolean, host: string, port: number): Promise<clientpb.DNSListener> {
    return new Promise((resolve, reject) => {
      const dns = new clientpb.DNSListenerReq();
      dns.setDomainsList(domains);
      dns.setCanaries(canaries);
      dns.setHost(host);
      dns.setPort(port);
      this.rpc.startDNSListener(dns, (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startHTTPListener(domain: string, host: string, port: number, website = ''): Promise<clientpb.HTTPListener> {
    return new Promise((resolve, reject) => {
      const http = new clientpb.HTTPListenerReq();
      http.setDomain(domain);
      http.setHost(host);
      http.setPort(port);
      http.setSecure(false);
      http.setWebsite(website);
      this.rpc.startHTTPListener(http, (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startHTTPSListener(domain: string, host: string, port: number, acme = false, website = '', 
                     cert?: Buffer, key?: Buffer): Promise<clientpb.HTTPListener> {
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
      this.rpc.startHTTPSListener(https, (err, listener) => {
        err ? reject(err) : resolve(listener);
      });
    });
  }

  startTCPStagerListener(host: string, port: number, data: Buffer): Promise<clientpb.StagerListener> {
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

  startHTTPStagerListener(host: string, port: number, data: Buffer): Promise<clientpb.StagerListener> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.StagerListenerReq();
      req.setProtocol(clientpb.StageProtocol.HTTP);
      req.setHost(host);
      req.setPort(port);
      req.setData(data);
      this.rpc.startHTTPStagerListener(req, (err, httpListener) => {
        err ? reject(err) : resolve(httpListener);
      });
    });
  }

  startHTTPSStagerListener(host: string, port: number, data: Buffer): Promise<clientpb.StagerListener> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.StagerListenerReq();
      req.setProtocol(clientpb.StageProtocol.HTTPS);
      req.setHost(host);
      req.setPort(port);
      req.setData(data);
      this.rpc.startHTTPStagerListener(req, (err, httpsListener) => {
        err ? reject(err) : resolve(httpsListener);
      });
    });
  }

  // ---- Implants ----

  generate(config: clientpb.ImplantConfig): Promise<commonpb.File> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.GenerateReq();
      req.setConfig(config);
      this.rpc.generate(req, (err, generated) => {
        err ? reject(err) : resolve(generated?.getFile());
      });
    });
  }

  regenerate(name: string): Promise<commonpb.File> {
    return new Promise((resolve, reject) => {
      const req = new clientpb.RegenerateReq();
      req.setImplantname(name);
      this.rpc.regenerate(req, (err, generated) => {
        err ? reject(err) : resolve(generated?.getFile());
      });
    });
  }

  implantBuilds(): Promise<clientpb.ImplantBuilds> {
    return new Promise((resolve, reject) => {
      this.rpc.implantBuilds(this.empty, (err, builds) => {
        err ? reject(err) : resolve(builds);
      });
    });
  }

  canaries(): Promise<clientpb.DNSCanary[]> {
    return new Promise((resolve, reject) => {
      this.rpc.canaries(this.empty, (err, canaries) => {
        err ? reject(err) : resolve(canaries?.getCanariesList());
      });
    });
  }

  implantProfiles(): Promise<clientpb.ImplantProfile[]> {
    return new Promise((resolve, reject) => {
      this.rpc.implantProfiles(this.empty, (err, profiles) => {
        err ? reject(err) : resolve(profiles?.getProfilesList());
      });
    });
  }

  saveImplantProfile(profile: clientpb.ImplantProfile): Promise<clientpb.ImplantProfile> {
    return new Promise((resolve, reject) => {
      this.rpc.saveImplantProfile(profile, (err, profile) => {
        err ? reject(err) : resolve(profile);
      });
    });
  }

  // ---- Websites ----
  websites(): Promise<clientpb.Website[]> {
    return new Promise((resolve, reject) => {
      this.rpc.websites(this.empty, (err, websites) => {
        err ? reject(err) : resolve(websites?.getWebsitesList());
      });
    });
  }

  website(name: string): Promise<clientpb.Website> {
    return new Promise((resolve, reject) => {
      const web = new clientpb.Website();
      web.setName(name);
      this.rpc.website(web, (err, website) => {
        err ? reject(err) : resolve(website);
      });
    });
  }

  websiteRemove(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const web = new clientpb.Website();
      web.setName(name);
      this.rpc.websiteRemove(web, (err) => {
        err ? reject(err) : resolve();
      });
    });
  }

  websiteAddContent(name: string, contents: Map<string, clientpb.WebContent>): Promise<clientpb.Website> {
    return new Promise((resolve, reject) => {
      const addContent = new clientpb.WebsiteAddContent();
      addContent.setName(name);
      contents.forEach((value, key) => {
        addContent.getContentsMap().set(key, value);
      });
      this.rpc.websiteAddContent(addContent, (err, website) => {
        err ? reject(err) : resolve(website);
      });
    });
  }

  websiteRemoveContent(name: string, paths: string[]): Promise<clientpb.Website> {
    return new Promise((resolve, reject) => {
      const rm = new clientpb.WebsiteRemoveContent();
      rm.setName(name);
      rm.setPathsList(paths);
      this.rpc.websiteRemoveContent(rm, (err, website) => {
        err ? reject(err) : resolve(website);
      });
    });
  }

}

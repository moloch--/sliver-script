// package: clientpb
// file: clientpb/client.proto

import * as jspb from "google-protobuf";
import * as commonpb_common_pb from "../commonpb/common_pb";

export class Version extends jspb.Message {
  getMajor(): number;
  setMajor(value: number): void;

  getMinor(): number;
  setMinor(value: number): void;

  getPatch(): number;
  setPatch(value: number): void;

  getCommit(): string;
  setCommit(value: string): void;

  getDirty(): boolean;
  setDirty(value: boolean): void;

  getCompiledat(): number;
  setCompiledat(value: number): void;

  getOs(): string;
  setOs(value: string): void;

  getArch(): string;
  setArch(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    major: number,
    minor: number,
    patch: number,
    commit: string,
    dirty: boolean,
    compiledat: number,
    os: string,
    arch: string,
  }
}

export class Session extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getHostname(): string;
  setHostname(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getUid(): string;
  setUid(value: string): void;

  getGid(): string;
  setGid(value: string): void;

  getOs(): string;
  setOs(value: string): void;

  getArch(): string;
  setArch(value: string): void;

  getTransport(): string;
  setTransport(value: string): void;

  getRemoteaddress(): string;
  setRemoteaddress(value: string): void;

  getPid(): number;
  setPid(value: number): void;

  getFilename(): string;
  setFilename(value: string): void;

  getLastcheckin(): string;
  setLastcheckin(value: string): void;

  getActivec2(): string;
  setActivec2(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getEvasion(): boolean;
  setEvasion(value: boolean): void;

  getIsdead(): boolean;
  setIsdead(value: boolean): void;

  getReconnectinterval(): number;
  setReconnectinterval(value: number): void;

  getProxyurl(): string;
  setProxyurl(value: string): void;

  getPollinterval(): number;
  setPollinterval(value: number): void;

  getBurned(): boolean;
  setBurned(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    id: number,
    name: string,
    hostname: string,
    uuid: string,
    username: string,
    uid: string,
    gid: string,
    os: string,
    arch: string,
    transport: string,
    remoteaddress: string,
    pid: number,
    filename: string,
    lastcheckin: string,
    activec2: string,
    version: string,
    evasion: boolean,
    isdead: boolean,
    reconnectinterval: number,
    proxyurl: string,
    pollinterval: number,
    burned: boolean,
  }
}

export class ImplantC2 extends jspb.Message {
  getPriority(): number;
  setPriority(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  getOptions(): string;
  setOptions(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImplantC2.AsObject;
  static toObject(includeInstance: boolean, msg: ImplantC2): ImplantC2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImplantC2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImplantC2;
  static deserializeBinaryFromReader(message: ImplantC2, reader: jspb.BinaryReader): ImplantC2;
}

export namespace ImplantC2 {
  export type AsObject = {
    priority: number,
    url: string,
    options: string,
  }
}

export class ImplantConfig extends jspb.Message {
  getGoos(): string;
  setGoos(value: string): void;

  getGoarch(): string;
  setGoarch(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCacert(): string;
  setCacert(value: string): void;

  getCert(): string;
  setCert(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getDebug(): boolean;
  setDebug(value: boolean): void;

  getEvasion(): boolean;
  setEvasion(value: boolean): void;

  getObfuscatesymbols(): boolean;
  setObfuscatesymbols(value: boolean): void;

  getWgimplantprivkey(): string;
  setWgimplantprivkey(value: string): void;

  getWgserverpubkey(): string;
  setWgserverpubkey(value: string): void;

  getWgpeertunip(): string;
  setWgpeertunip(value: string): void;

  getWgkeyexchangeport(): number;
  setWgkeyexchangeport(value: number): void;

  getWgtcpcommsport(): number;
  setWgtcpcommsport(value: number): void;

  getReconnectinterval(): number;
  setReconnectinterval(value: number): void;

  getMaxconnectionerrors(): number;
  setMaxconnectionerrors(value: number): void;

  getPollinterval(): number;
  setPollinterval(value: number): void;

  clearC2List(): void;
  getC2List(): Array<ImplantC2>;
  setC2List(value: Array<ImplantC2>): void;
  addC2(value?: ImplantC2, index?: number): ImplantC2;

  clearCanarydomainsList(): void;
  getCanarydomainsList(): Array<string>;
  setCanarydomainsList(value: Array<string>): void;
  addCanarydomains(value: string, index?: number): string;

  getLimitdomainjoined(): boolean;
  setLimitdomainjoined(value: boolean): void;

  getLimitdatetime(): string;
  setLimitdatetime(value: string): void;

  getLimithostname(): string;
  setLimithostname(value: string): void;

  getLimitusername(): string;
  setLimitusername(value: string): void;

  getLimitfileexists(): string;
  setLimitfileexists(value: string): void;

  getFormat(): OutputFormatMap[keyof OutputFormatMap];
  setFormat(value: OutputFormatMap[keyof OutputFormatMap]): void;

  getIssharedlib(): boolean;
  setIssharedlib(value: boolean): void;

  getFilename(): string;
  setFilename(value: string): void;

  getIsservice(): boolean;
  setIsservice(value: boolean): void;

  getIsshellcode(): boolean;
  setIsshellcode(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImplantConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ImplantConfig): ImplantConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImplantConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImplantConfig;
  static deserializeBinaryFromReader(message: ImplantConfig, reader: jspb.BinaryReader): ImplantConfig;
}

export namespace ImplantConfig {
  export type AsObject = {
    goos: string,
    goarch: string,
    name: string,
    cacert: string,
    cert: string,
    key: string,
    debug: boolean,
    evasion: boolean,
    obfuscatesymbols: boolean,
    wgimplantprivkey: string,
    wgserverpubkey: string,
    wgpeertunip: string,
    wgkeyexchangeport: number,
    wgtcpcommsport: number,
    reconnectinterval: number,
    maxconnectionerrors: number,
    pollinterval: number,
    c2List: Array<ImplantC2.AsObject>,
    canarydomainsList: Array<string>,
    limitdomainjoined: boolean,
    limitdatetime: string,
    limithostname: string,
    limitusername: string,
    limitfileexists: string,
    format: OutputFormatMap[keyof OutputFormatMap],
    issharedlib: boolean,
    filename: string,
    isservice: boolean,
    isshellcode: boolean,
  }
}

export class ImplantBuilds extends jspb.Message {
  getConfigsMap(): jspb.Map<string, ImplantConfig>;
  clearConfigsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImplantBuilds.AsObject;
  static toObject(includeInstance: boolean, msg: ImplantBuilds): ImplantBuilds.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImplantBuilds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImplantBuilds;
  static deserializeBinaryFromReader(message: ImplantBuilds, reader: jspb.BinaryReader): ImplantBuilds;
}

export namespace ImplantBuilds {
  export type AsObject = {
    configsMap: Array<[string, ImplantConfig.AsObject]>,
  }
}

export class CompilerTarget extends jspb.Message {
  getGoos(): string;
  setGoos(value: string): void;

  getGoarch(): string;
  setGoarch(value: string): void;

  getFormat(): OutputFormatMap[keyof OutputFormatMap];
  setFormat(value: OutputFormatMap[keyof OutputFormatMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompilerTarget.AsObject;
  static toObject(includeInstance: boolean, msg: CompilerTarget): CompilerTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompilerTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompilerTarget;
  static deserializeBinaryFromReader(message: CompilerTarget, reader: jspb.BinaryReader): CompilerTarget;
}

export namespace CompilerTarget {
  export type AsObject = {
    goos: string,
    goarch: string,
    format: OutputFormatMap[keyof OutputFormatMap],
  }
}

export class CrossCompiler extends jspb.Message {
  getTargetgoos(): string;
  setTargetgoos(value: string): void;

  getTargetgoarch(): string;
  setTargetgoarch(value: string): void;

  getCcpath(): string;
  setCcpath(value: string): void;

  getCxxpath(): string;
  setCxxpath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrossCompiler.AsObject;
  static toObject(includeInstance: boolean, msg: CrossCompiler): CrossCompiler.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CrossCompiler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrossCompiler;
  static deserializeBinaryFromReader(message: CrossCompiler, reader: jspb.BinaryReader): CrossCompiler;
}

export namespace CrossCompiler {
  export type AsObject = {
    targetgoos: string,
    targetgoarch: string,
    ccpath: string,
    cxxpath: string,
  }
}

export class Compiler extends jspb.Message {
  getGoos(): string;
  setGoos(value: string): void;

  getGoarch(): string;
  setGoarch(value: string): void;

  clearTargetsList(): void;
  getTargetsList(): Array<CompilerTarget>;
  setTargetsList(value: Array<CompilerTarget>): void;
  addTargets(value?: CompilerTarget, index?: number): CompilerTarget;

  clearCrosscompilersList(): void;
  getCrosscompilersList(): Array<CrossCompiler>;
  setCrosscompilersList(value: Array<CrossCompiler>): void;
  addCrosscompilers(value?: CrossCompiler, index?: number): CrossCompiler;

  clearUnsupportedtargetsList(): void;
  getUnsupportedtargetsList(): Array<CompilerTarget>;
  setUnsupportedtargetsList(value: Array<CompilerTarget>): void;
  addUnsupportedtargets(value?: CompilerTarget, index?: number): CompilerTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Compiler.AsObject;
  static toObject(includeInstance: boolean, msg: Compiler): Compiler.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Compiler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Compiler;
  static deserializeBinaryFromReader(message: Compiler, reader: jspb.BinaryReader): Compiler;
}

export namespace Compiler {
  export type AsObject = {
    goos: string,
    goarch: string,
    targetsList: Array<CompilerTarget.AsObject>,
    crosscompilersList: Array<CrossCompiler.AsObject>,
    unsupportedtargetsList: Array<CompilerTarget.AsObject>,
  }
}

export class DeleteReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReq): DeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReq;
  static deserializeBinaryFromReader(message: DeleteReq, reader: jspb.BinaryReader): DeleteReq;
}

export namespace DeleteReq {
  export type AsObject = {
    name: string,
  }
}

export class DNSCanary extends jspb.Message {
  getImplantname(): string;
  setImplantname(value: string): void;

  getDomain(): string;
  setDomain(value: string): void;

  getTriggered(): boolean;
  setTriggered(value: boolean): void;

  getFirsttriggered(): string;
  setFirsttriggered(value: string): void;

  getLatesttrigger(): string;
  setLatesttrigger(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DNSCanary.AsObject;
  static toObject(includeInstance: boolean, msg: DNSCanary): DNSCanary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DNSCanary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DNSCanary;
  static deserializeBinaryFromReader(message: DNSCanary, reader: jspb.BinaryReader): DNSCanary;
}

export namespace DNSCanary {
  export type AsObject = {
    implantname: string,
    domain: string,
    triggered: boolean,
    firsttriggered: string,
    latesttrigger: string,
    count: number,
  }
}

export class Canaries extends jspb.Message {
  clearCanariesList(): void;
  getCanariesList(): Array<DNSCanary>;
  setCanariesList(value: Array<DNSCanary>): void;
  addCanaries(value?: DNSCanary, index?: number): DNSCanary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Canaries.AsObject;
  static toObject(includeInstance: boolean, msg: Canaries): Canaries.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Canaries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Canaries;
  static deserializeBinaryFromReader(message: Canaries, reader: jspb.BinaryReader): Canaries;
}

export namespace Canaries {
  export type AsObject = {
    canariesList: Array<DNSCanary.AsObject>,
  }
}

export class UniqueWGIP extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniqueWGIP.AsObject;
  static toObject(includeInstance: boolean, msg: UniqueWGIP): UniqueWGIP.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UniqueWGIP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniqueWGIP;
  static deserializeBinaryFromReader(message: UniqueWGIP, reader: jspb.BinaryReader): UniqueWGIP;
}

export namespace UniqueWGIP {
  export type AsObject = {
    ip: string,
  }
}

export class ImplantProfile extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ImplantConfig | undefined;
  setConfig(value?: ImplantConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImplantProfile.AsObject;
  static toObject(includeInstance: boolean, msg: ImplantProfile): ImplantProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImplantProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImplantProfile;
  static deserializeBinaryFromReader(message: ImplantProfile, reader: jspb.BinaryReader): ImplantProfile;
}

export namespace ImplantProfile {
  export type AsObject = {
    name: string,
    config?: ImplantConfig.AsObject,
  }
}

export class ImplantProfiles extends jspb.Message {
  clearProfilesList(): void;
  getProfilesList(): Array<ImplantProfile>;
  setProfilesList(value: Array<ImplantProfile>): void;
  addProfiles(value?: ImplantProfile, index?: number): ImplantProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImplantProfiles.AsObject;
  static toObject(includeInstance: boolean, msg: ImplantProfiles): ImplantProfiles.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImplantProfiles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImplantProfiles;
  static deserializeBinaryFromReader(message: ImplantProfiles, reader: jspb.BinaryReader): ImplantProfiles;
}

export namespace ImplantProfiles {
  export type AsObject = {
    profilesList: Array<ImplantProfile.AsObject>,
  }
}

export class RegenerateReq extends jspb.Message {
  getImplantname(): string;
  setImplantname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegenerateReq.AsObject;
  static toObject(includeInstance: boolean, msg: RegenerateReq): RegenerateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegenerateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegenerateReq;
  static deserializeBinaryFromReader(message: RegenerateReq, reader: jspb.BinaryReader): RegenerateReq;
}

export namespace RegenerateReq {
  export type AsObject = {
    implantname: string,
  }
}

export class Job extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getProtocol(): string;
  setProtocol(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  clearDomainsList(): void;
  getDomainsList(): Array<string>;
  setDomainsList(value: Array<string>): void;
  addDomains(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    protocol: string,
    port: number,
    domainsList: Array<string>,
  }
}

export class Jobs extends jspb.Message {
  clearActiveList(): void;
  getActiveList(): Array<Job>;
  setActiveList(value: Array<Job>): void;
  addActive(value?: Job, index?: number): Job;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Jobs.AsObject;
  static toObject(includeInstance: boolean, msg: Jobs): Jobs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Jobs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Jobs;
  static deserializeBinaryFromReader(message: Jobs, reader: jspb.BinaryReader): Jobs;
}

export namespace Jobs {
  export type AsObject = {
    activeList: Array<Job.AsObject>,
  }
}

export class KillJobReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KillJobReq.AsObject;
  static toObject(includeInstance: boolean, msg: KillJobReq): KillJobReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KillJobReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KillJobReq;
  static deserializeBinaryFromReader(message: KillJobReq, reader: jspb.BinaryReader): KillJobReq;
}

export namespace KillJobReq {
  export type AsObject = {
    id: number,
  }
}

export class KillJob extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KillJob.AsObject;
  static toObject(includeInstance: boolean, msg: KillJob): KillJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KillJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KillJob;
  static deserializeBinaryFromReader(message: KillJob, reader: jspb.BinaryReader): KillJob;
}

export namespace KillJob {
  export type AsObject = {
    id: number,
    success: boolean,
  }
}

export class MTLSListenerReq extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MTLSListenerReq.AsObject;
  static toObject(includeInstance: boolean, msg: MTLSListenerReq): MTLSListenerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MTLSListenerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MTLSListenerReq;
  static deserializeBinaryFromReader(message: MTLSListenerReq, reader: jspb.BinaryReader): MTLSListenerReq;
}

export namespace MTLSListenerReq {
  export type AsObject = {
    host: string,
    port: number,
    persistent: boolean,
  }
}

export class MTLSListener extends jspb.Message {
  getJobid(): number;
  setJobid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MTLSListener.AsObject;
  static toObject(includeInstance: boolean, msg: MTLSListener): MTLSListener.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MTLSListener, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MTLSListener;
  static deserializeBinaryFromReader(message: MTLSListener, reader: jspb.BinaryReader): MTLSListener;
}

export namespace MTLSListener {
  export type AsObject = {
    jobid: number,
  }
}

export class WGListenerReq extends jspb.Message {
  getPort(): number;
  setPort(value: number): void;

  getTunip(): string;
  setTunip(value: string): void;

  getNport(): number;
  setNport(value: number): void;

  getKeyport(): number;
  setKeyport(value: number): void;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGListenerReq.AsObject;
  static toObject(includeInstance: boolean, msg: WGListenerReq): WGListenerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGListenerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGListenerReq;
  static deserializeBinaryFromReader(message: WGListenerReq, reader: jspb.BinaryReader): WGListenerReq;
}

export namespace WGListenerReq {
  export type AsObject = {
    port: number,
    tunip: string,
    nport: number,
    keyport: number,
    persistent: boolean,
  }
}

export class WGListener extends jspb.Message {
  getJobid(): number;
  setJobid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGListener.AsObject;
  static toObject(includeInstance: boolean, msg: WGListener): WGListener.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGListener, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGListener;
  static deserializeBinaryFromReader(message: WGListener, reader: jspb.BinaryReader): WGListener;
}

export namespace WGListener {
  export type AsObject = {
    jobid: number,
  }
}

export class DNSListenerReq extends jspb.Message {
  clearDomainsList(): void;
  getDomainsList(): Array<string>;
  setDomainsList(value: Array<string>): void;
  addDomains(value: string, index?: number): string;

  getCanaries(): boolean;
  setCanaries(value: boolean): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DNSListenerReq.AsObject;
  static toObject(includeInstance: boolean, msg: DNSListenerReq): DNSListenerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DNSListenerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DNSListenerReq;
  static deserializeBinaryFromReader(message: DNSListenerReq, reader: jspb.BinaryReader): DNSListenerReq;
}

export namespace DNSListenerReq {
  export type AsObject = {
    domainsList: Array<string>,
    canaries: boolean,
    host: string,
    port: number,
    persistent: boolean,
  }
}

export class DNSListener extends jspb.Message {
  getJobid(): number;
  setJobid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DNSListener.AsObject;
  static toObject(includeInstance: boolean, msg: DNSListener): DNSListener.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DNSListener, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DNSListener;
  static deserializeBinaryFromReader(message: DNSListener, reader: jspb.BinaryReader): DNSListener;
}

export namespace DNSListener {
  export type AsObject = {
    jobid: number,
  }
}

export class HTTPListenerReq extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getSecure(): boolean;
  setSecure(value: boolean): void;

  getWebsite(): string;
  setWebsite(value: string): void;

  getCert(): Uint8Array | string;
  getCert_asU8(): Uint8Array;
  getCert_asB64(): string;
  setCert(value: Uint8Array | string): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getAcme(): boolean;
  setAcme(value: boolean): void;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPListenerReq.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPListenerReq): HTTPListenerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPListenerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPListenerReq;
  static deserializeBinaryFromReader(message: HTTPListenerReq, reader: jspb.BinaryReader): HTTPListenerReq;
}

export namespace HTTPListenerReq {
  export type AsObject = {
    domain: string,
    host: string,
    port: number,
    secure: boolean,
    website: string,
    cert: Uint8Array | string,
    key: Uint8Array | string,
    acme: boolean,
    persistent: boolean,
  }
}

export class NamedPipesReq extends jspb.Message {
  getPipename(): string;
  setPipename(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamedPipesReq.AsObject;
  static toObject(includeInstance: boolean, msg: NamedPipesReq): NamedPipesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamedPipesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamedPipesReq;
  static deserializeBinaryFromReader(message: NamedPipesReq, reader: jspb.BinaryReader): NamedPipesReq;
}

export namespace NamedPipesReq {
  export type AsObject = {
    pipename: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class NamedPipes extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getErr(): string;
  setErr(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamedPipes.AsObject;
  static toObject(includeInstance: boolean, msg: NamedPipes): NamedPipes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamedPipes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamedPipes;
  static deserializeBinaryFromReader(message: NamedPipes, reader: jspb.BinaryReader): NamedPipes;
}

export namespace NamedPipes {
  export type AsObject = {
    success: boolean,
    err: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class TCPPivotReq extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TCPPivotReq.AsObject;
  static toObject(includeInstance: boolean, msg: TCPPivotReq): TCPPivotReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TCPPivotReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TCPPivotReq;
  static deserializeBinaryFromReader(message: TCPPivotReq, reader: jspb.BinaryReader): TCPPivotReq;
}

export namespace TCPPivotReq {
  export type AsObject = {
    address: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class TCPPivot extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getErr(): string;
  setErr(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TCPPivot.AsObject;
  static toObject(includeInstance: boolean, msg: TCPPivot): TCPPivot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TCPPivot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TCPPivot;
  static deserializeBinaryFromReader(message: TCPPivot, reader: jspb.BinaryReader): TCPPivot;
}

export namespace TCPPivot {
  export type AsObject = {
    success: boolean,
    err: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class HTTPListener extends jspb.Message {
  getJobid(): number;
  setJobid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPListener.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPListener): HTTPListener.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPListener, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPListener;
  static deserializeBinaryFromReader(message: HTTPListener, reader: jspb.BinaryReader): HTTPListener;
}

export namespace HTTPListener {
  export type AsObject = {
    jobid: number,
  }
}

export class Sessions extends jspb.Message {
  clearSessionsList(): void;
  getSessionsList(): Array<Session>;
  setSessionsList(value: Array<Session>): void;
  addSessions(value?: Session, index?: number): Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sessions.AsObject;
  static toObject(includeInstance: boolean, msg: Sessions): Sessions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sessions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sessions;
  static deserializeBinaryFromReader(message: Sessions, reader: jspb.BinaryReader): Sessions;
}

export namespace Sessions {
  export type AsObject = {
    sessionsList: Array<Session.AsObject>,
  }
}

export class UpdateSession extends jspb.Message {
  getSessionid(): number;
  setSessionid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getReconnectinterval(): number;
  setReconnectinterval(value: number): void;

  getPollinterval(): number;
  setPollinterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSession.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSession): UpdateSession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSession;
  static deserializeBinaryFromReader(message: UpdateSession, reader: jspb.BinaryReader): UpdateSession;
}

export namespace UpdateSession {
  export type AsObject = {
    sessionid: number,
    name: string,
    reconnectinterval: number,
    pollinterval: number,
  }
}

export class GenerateReq extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ImplantConfig | undefined;
  setConfig(value?: ImplantConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateReq.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateReq): GenerateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateReq;
  static deserializeBinaryFromReader(message: GenerateReq, reader: jspb.BinaryReader): GenerateReq;
}

export namespace GenerateReq {
  export type AsObject = {
    config?: ImplantConfig.AsObject,
  }
}

export class Generate extends jspb.Message {
  hasFile(): boolean;
  clearFile(): void;
  getFile(): commonpb_common_pb.File | undefined;
  setFile(value?: commonpb_common_pb.File): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Generate.AsObject;
  static toObject(includeInstance: boolean, msg: Generate): Generate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Generate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Generate;
  static deserializeBinaryFromReader(message: Generate, reader: jspb.BinaryReader): Generate;
}

export namespace Generate {
  export type AsObject = {
    file?: commonpb_common_pb.File.AsObject,
  }
}

export class MSFReq extends jspb.Message {
  getPayload(): string;
  setPayload(value: string): void;

  getLhost(): string;
  setLhost(value: string): void;

  getLport(): number;
  setLport(value: number): void;

  getEncoder(): string;
  setEncoder(value: string): void;

  getIterations(): number;
  setIterations(value: number): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MSFReq.AsObject;
  static toObject(includeInstance: boolean, msg: MSFReq): MSFReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MSFReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MSFReq;
  static deserializeBinaryFromReader(message: MSFReq, reader: jspb.BinaryReader): MSFReq;
}

export namespace MSFReq {
  export type AsObject = {
    payload: string,
    lhost: string,
    lport: number,
    encoder: string,
    iterations: number,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class MSFRemoteReq extends jspb.Message {
  getPayload(): string;
  setPayload(value: string): void;

  getLhost(): string;
  setLhost(value: string): void;

  getLport(): number;
  setLport(value: number): void;

  getEncoder(): string;
  setEncoder(value: string): void;

  getIterations(): number;
  setIterations(value: number): void;

  getPid(): number;
  setPid(value: number): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MSFRemoteReq.AsObject;
  static toObject(includeInstance: boolean, msg: MSFRemoteReq): MSFRemoteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MSFRemoteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MSFRemoteReq;
  static deserializeBinaryFromReader(message: MSFRemoteReq, reader: jspb.BinaryReader): MSFRemoteReq;
}

export namespace MSFRemoteReq {
  export type AsObject = {
    payload: string,
    lhost: string,
    lport: number,
    encoder: string,
    iterations: number,
    pid: number,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class StagerListenerReq extends jspb.Message {
  getProtocol(): StageProtocolMap[keyof StageProtocolMap];
  setProtocol(value: StageProtocolMap[keyof StageProtocolMap]): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getCert(): Uint8Array | string;
  getCert_asU8(): Uint8Array;
  getCert_asB64(): string;
  setCert(value: Uint8Array | string): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getAcme(): boolean;
  setAcme(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StagerListenerReq.AsObject;
  static toObject(includeInstance: boolean, msg: StagerListenerReq): StagerListenerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StagerListenerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StagerListenerReq;
  static deserializeBinaryFromReader(message: StagerListenerReq, reader: jspb.BinaryReader): StagerListenerReq;
}

export namespace StagerListenerReq {
  export type AsObject = {
    protocol: StageProtocolMap[keyof StageProtocolMap],
    host: string,
    port: number,
    data: Uint8Array | string,
    cert: Uint8Array | string,
    key: Uint8Array | string,
    acme: boolean,
  }
}

export class StagerListener extends jspb.Message {
  getJobid(): number;
  setJobid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StagerListener.AsObject;
  static toObject(includeInstance: boolean, msg: StagerListener): StagerListener.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StagerListener, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StagerListener;
  static deserializeBinaryFromReader(message: StagerListener, reader: jspb.BinaryReader): StagerListener;
}

export namespace StagerListener {
  export type AsObject = {
    jobid: number,
  }
}

export class ShellcodeRDIReq extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getFunctionname(): string;
  setFunctionname(value: string): void;

  getArguments(): string;
  setArguments(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShellcodeRDIReq.AsObject;
  static toObject(includeInstance: boolean, msg: ShellcodeRDIReq): ShellcodeRDIReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShellcodeRDIReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShellcodeRDIReq;
  static deserializeBinaryFromReader(message: ShellcodeRDIReq, reader: jspb.BinaryReader): ShellcodeRDIReq;
}

export namespace ShellcodeRDIReq {
  export type AsObject = {
    data: Uint8Array | string,
    functionname: string,
    arguments: string,
  }
}

export class ShellcodeRDI extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShellcodeRDI.AsObject;
  static toObject(includeInstance: boolean, msg: ShellcodeRDI): ShellcodeRDI.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShellcodeRDI, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShellcodeRDI;
  static deserializeBinaryFromReader(message: ShellcodeRDI, reader: jspb.BinaryReader): ShellcodeRDI;
}

export namespace ShellcodeRDI {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class MsfStagerReq extends jspb.Message {
  getArch(): string;
  setArch(value: string): void;

  getFormat(): string;
  setFormat(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getHost(): string;
  setHost(value: string): void;

  getOs(): string;
  setOs(value: string): void;

  getProtocol(): StageProtocolMap[keyof StageProtocolMap];
  setProtocol(value: StageProtocolMap[keyof StageProtocolMap]): void;

  clearBadcharsList(): void;
  getBadcharsList(): Array<string>;
  setBadcharsList(value: Array<string>): void;
  addBadchars(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsfStagerReq.AsObject;
  static toObject(includeInstance: boolean, msg: MsfStagerReq): MsfStagerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsfStagerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsfStagerReq;
  static deserializeBinaryFromReader(message: MsfStagerReq, reader: jspb.BinaryReader): MsfStagerReq;
}

export namespace MsfStagerReq {
  export type AsObject = {
    arch: string,
    format: string,
    port: number,
    host: string,
    os: string,
    protocol: StageProtocolMap[keyof StageProtocolMap],
    badcharsList: Array<string>,
  }
}

export class MsfStager extends jspb.Message {
  hasFile(): boolean;
  clearFile(): void;
  getFile(): commonpb_common_pb.File | undefined;
  setFile(value?: commonpb_common_pb.File): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsfStager.AsObject;
  static toObject(includeInstance: boolean, msg: MsfStager): MsfStager.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsfStager, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsfStager;
  static deserializeBinaryFromReader(message: MsfStager, reader: jspb.BinaryReader): MsfStager;
}

export namespace MsfStager {
  export type AsObject = {
    file?: commonpb_common_pb.File.AsObject,
  }
}

export class GetSystemReq extends jspb.Message {
  getHostingprocess(): string;
  setHostingprocess(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ImplantConfig | undefined;
  setConfig(value?: ImplantConfig): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystemReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystemReq): GetSystemReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSystemReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystemReq;
  static deserializeBinaryFromReader(message: GetSystemReq, reader: jspb.BinaryReader): GetSystemReq;
}

export namespace GetSystemReq {
  export type AsObject = {
    hostingprocess: string,
    config?: ImplantConfig.AsObject,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class MigrateReq extends jspb.Message {
  getPid(): number;
  setPid(value: number): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ImplantConfig | undefined;
  setConfig(value?: ImplantConfig): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MigrateReq.AsObject;
  static toObject(includeInstance: boolean, msg: MigrateReq): MigrateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MigrateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MigrateReq;
  static deserializeBinaryFromReader(message: MigrateReq, reader: jspb.BinaryReader): MigrateReq;
}

export namespace MigrateReq {
  export type AsObject = {
    pid: number,
    config?: ImplantConfig.AsObject,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class CreateTunnelReq extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTunnelReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTunnelReq): CreateTunnelReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTunnelReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTunnelReq;
  static deserializeBinaryFromReader(message: CreateTunnelReq, reader: jspb.BinaryReader): CreateTunnelReq;
}

export namespace CreateTunnelReq {
  export type AsObject = {
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class CreateTunnel extends jspb.Message {
  getSessionid(): number;
  setSessionid(value: number): void;

  getTunnelid(): string;
  setTunnelid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTunnel.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTunnel): CreateTunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTunnel;
  static deserializeBinaryFromReader(message: CreateTunnel, reader: jspb.BinaryReader): CreateTunnel;
}

export namespace CreateTunnel {
  export type AsObject = {
    sessionid: number,
    tunnelid: string,
  }
}

export class CloseTunnelReq extends jspb.Message {
  getTunnelid(): string;
  setTunnelid(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseTunnelReq.AsObject;
  static toObject(includeInstance: boolean, msg: CloseTunnelReq): CloseTunnelReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseTunnelReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseTunnelReq;
  static deserializeBinaryFromReader(message: CloseTunnelReq, reader: jspb.BinaryReader): CloseTunnelReq;
}

export namespace CloseTunnelReq {
  export type AsObject = {
    tunnelid: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Client extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasOperator(): boolean;
  clearOperator(): void;
  getOperator(): Operator | undefined;
  setOperator(value?: Operator): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Client.AsObject;
  static toObject(includeInstance: boolean, msg: Client): Client.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Client, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Client;
  static deserializeBinaryFromReader(message: Client, reader: jspb.BinaryReader): Client;
}

export namespace Client {
  export type AsObject = {
    id: number,
    name: string,
    operator?: Operator.AsObject,
  }
}

export class Event extends jspb.Message {
  getEventtype(): string;
  setEventtype(value: string): void;

  hasSession(): boolean;
  clearSession(): void;
  getSession(): Session | undefined;
  setSession(value?: Session): void;

  hasJob(): boolean;
  clearJob(): void;
  getJob(): Job | undefined;
  setJob(value?: Job): void;

  hasClient(): boolean;
  clearClient(): void;
  getClient(): Client | undefined;
  setClient(value?: Client): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getErr(): string;
  setErr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    eventtype: string,
    session?: Session.AsObject,
    job?: Job.AsObject,
    client?: Client.AsObject,
    data: Uint8Array | string,
    err: string,
  }
}

export class Operators extends jspb.Message {
  clearOperatorsList(): void;
  getOperatorsList(): Array<Operator>;
  setOperatorsList(value: Array<Operator>): void;
  addOperators(value?: Operator, index?: number): Operator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operators.AsObject;
  static toObject(includeInstance: boolean, msg: Operators): Operators.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Operators, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operators;
  static deserializeBinaryFromReader(message: Operators, reader: jspb.BinaryReader): Operators;
}

export namespace Operators {
  export type AsObject = {
    operatorsList: Array<Operator.AsObject>,
  }
}

export class Operator extends jspb.Message {
  getOnline(): boolean;
  setOnline(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operator.AsObject;
  static toObject(includeInstance: boolean, msg: Operator): Operator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Operator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operator;
  static deserializeBinaryFromReader(message: Operator, reader: jspb.BinaryReader): Operator;
}

export namespace Operator {
  export type AsObject = {
    online: boolean,
    name: string,
  }
}

export class WebContent extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getContenttype(): string;
  setContenttype(value: string): void;

  getSize(): string;
  setSize(value: string): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebContent.AsObject;
  static toObject(includeInstance: boolean, msg: WebContent): WebContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebContent;
  static deserializeBinaryFromReader(message: WebContent, reader: jspb.BinaryReader): WebContent;
}

export namespace WebContent {
  export type AsObject = {
    path: string,
    contenttype: string,
    size: string,
    content: Uint8Array | string,
  }
}

export class WebsiteAddContent extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getContentsMap(): jspb.Map<string, WebContent>;
  clearContentsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsiteAddContent.AsObject;
  static toObject(includeInstance: boolean, msg: WebsiteAddContent): WebsiteAddContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsiteAddContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsiteAddContent;
  static deserializeBinaryFromReader(message: WebsiteAddContent, reader: jspb.BinaryReader): WebsiteAddContent;
}

export namespace WebsiteAddContent {
  export type AsObject = {
    name: string,
    contentsMap: Array<[string, WebContent.AsObject]>,
  }
}

export class WebsiteRemoveContent extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearPathsList(): void;
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): void;
  addPaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsiteRemoveContent.AsObject;
  static toObject(includeInstance: boolean, msg: WebsiteRemoveContent): WebsiteRemoveContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebsiteRemoveContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsiteRemoveContent;
  static deserializeBinaryFromReader(message: WebsiteRemoveContent, reader: jspb.BinaryReader): WebsiteRemoveContent;
}

export namespace WebsiteRemoveContent {
  export type AsObject = {
    name: string,
    pathsList: Array<string>,
  }
}

export class Website extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getContentsMap(): jspb.Map<string, WebContent>;
  clearContentsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Website.AsObject;
  static toObject(includeInstance: boolean, msg: Website): Website.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Website, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Website;
  static deserializeBinaryFromReader(message: Website, reader: jspb.BinaryReader): Website;
}

export namespace Website {
  export type AsObject = {
    name: string,
    contentsMap: Array<[string, WebContent.AsObject]>,
  }
}

export class Websites extends jspb.Message {
  clearWebsitesList(): void;
  getWebsitesList(): Array<Website>;
  setWebsitesList(value: Array<Website>): void;
  addWebsites(value?: Website, index?: number): Website;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Websites.AsObject;
  static toObject(includeInstance: boolean, msg: Websites): Websites.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Websites, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Websites;
  static deserializeBinaryFromReader(message: Websites, reader: jspb.BinaryReader): Websites;
}

export namespace Websites {
  export type AsObject = {
    websitesList: Array<Website.AsObject>,
  }
}

export class WGClientConfig extends jspb.Message {
  getServerpubkey(): string;
  setServerpubkey(value: string): void;

  getClientprivatekey(): string;
  setClientprivatekey(value: string): void;

  getClientpubkey(): string;
  setClientpubkey(value: string): void;

  getClientip(): string;
  setClientip(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGClientConfig.AsObject;
  static toObject(includeInstance: boolean, msg: WGClientConfig): WGClientConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGClientConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGClientConfig;
  static deserializeBinaryFromReader(message: WGClientConfig, reader: jspb.BinaryReader): WGClientConfig;
}

export namespace WGClientConfig {
  export type AsObject = {
    serverpubkey: string,
    clientprivatekey: string,
    clientpubkey: string,
    clientip: string,
  }
}

export class Credential extends jspb.Message {
  getUser(): string;
  setUser(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getApikey(): string;
  setApikey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credential.AsObject;
  static toObject(includeInstance: boolean, msg: Credential): Credential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Credential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credential;
  static deserializeBinaryFromReader(message: Credential, reader: jspb.BinaryReader): Credential;
}

export namespace Credential {
  export type AsObject = {
    user: string,
    password: string,
    apikey: string,
  }
}

export class Loot extends jspb.Message {
  getType(): LootTypeMap[keyof LootTypeMap];
  setType(value: LootTypeMap[keyof LootTypeMap]): void;

  getLootid(): string;
  setLootid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCredentialtype(): CredentialTypeMap[keyof CredentialTypeMap];
  setCredentialtype(value: CredentialTypeMap[keyof CredentialTypeMap]): void;

  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  getFiletype(): FileTypeMap[keyof FileTypeMap];
  setFiletype(value: FileTypeMap[keyof FileTypeMap]): void;

  hasFile(): boolean;
  clearFile(): void;
  getFile(): commonpb_common_pb.File | undefined;
  setFile(value?: commonpb_common_pb.File): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Loot.AsObject;
  static toObject(includeInstance: boolean, msg: Loot): Loot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Loot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Loot;
  static deserializeBinaryFromReader(message: Loot, reader: jspb.BinaryReader): Loot;
}

export namespace Loot {
  export type AsObject = {
    type: LootTypeMap[keyof LootTypeMap],
    lootid: string,
    name: string,
    credentialtype: CredentialTypeMap[keyof CredentialTypeMap],
    credential?: Credential.AsObject,
    filetype: FileTypeMap[keyof FileTypeMap],
    file?: commonpb_common_pb.File.AsObject,
  }
}

export class AllLoot extends jspb.Message {
  clearLootList(): void;
  getLootList(): Array<Loot>;
  setLootList(value: Array<Loot>): void;
  addLoot(value?: Loot, index?: number): Loot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllLoot.AsObject;
  static toObject(includeInstance: boolean, msg: AllLoot): AllLoot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllLoot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllLoot;
  static deserializeBinaryFromReader(message: AllLoot, reader: jspb.BinaryReader): AllLoot;
}

export namespace AllLoot {
  export type AsObject = {
    lootList: Array<Loot.AsObject>,
  }
}

export interface OutputFormatMap {
  SHARED_LIB: 0;
  SHELLCODE: 1;
  EXECUTABLE: 2;
  SERVICE: 3;
}

export const OutputFormat: OutputFormatMap;

export interface StageProtocolMap {
  TCP: 0;
  HTTP: 1;
  HTTPS: 2;
}

export const StageProtocol: StageProtocolMap;

export interface LootTypeMap {
  LOOT_FILE: 0;
  LOOT_CREDENTIAL: 1;
}

export const LootType: LootTypeMap;

export interface CredentialTypeMap {
  NO_CREDENTIAL: 0;
  USER_PASSWORD: 1;
  API_KEY: 2;
  FILE: 3;
}

export const CredentialType: CredentialTypeMap;

export interface FileTypeMap {
  NO_FILE: 0;
  BINARY: 1;
  TEXT: 2;
}

export const FileType: FileTypeMap;


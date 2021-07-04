// package: sliverpb
// file: sliverpb/sliver.proto

import * as jspb from "google-protobuf";
import * as commonpb_common_pb from "../commonpb/common_pb";

export class Envelope extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getType(): number;
  setType(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getUnknownmessagetype(): boolean;
  setUnknownmessagetype(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Envelope.AsObject;
  static toObject(includeInstance: boolean, msg: Envelope): Envelope.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Envelope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Envelope;
  static deserializeBinaryFromReader(message: Envelope, reader: jspb.BinaryReader): Envelope;
}

export namespace Envelope {
  export type AsObject = {
    id: number,
    type: number,
    data: Uint8Array | string,
    unknownmessagetype: boolean,
  }
}

export class Register extends jspb.Message {
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

  getPid(): number;
  setPid(value: number): void;

  getFilename(): string;
  setFilename(value: string): void;

  getActivec2(): string;
  setActivec2(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getReconnectinterval(): number;
  setReconnectinterval(value: number): void;

  getProxyurl(): string;
  setProxyurl(value: string): void;

  getPollinterval(): number;
  setPollinterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Register.AsObject;
  static toObject(includeInstance: boolean, msg: Register): Register.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Register, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Register;
  static deserializeBinaryFromReader(message: Register, reader: jspb.BinaryReader): Register;
}

export namespace Register {
  export type AsObject = {
    name: string,
    hostname: string,
    uuid: string,
    username: string,
    uid: string,
    gid: string,
    os: string,
    arch: string,
    pid: number,
    filename: string,
    activec2: string,
    version: string,
    reconnectinterval: number,
    proxyurl: string,
    pollinterval: number,
  }
}

export class Ping extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ping.AsObject;
  static toObject(includeInstance: boolean, msg: Ping): Ping.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ping;
  static deserializeBinaryFromReader(message: Ping, reader: jspb.BinaryReader): Ping;
}

export namespace Ping {
  export type AsObject = {
    nonce: number,
    response?: commonpb_common_pb.Response.AsObject,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class KillSessionReq extends jspb.Message {
  getForce(): boolean;
  setForce(value: boolean): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KillSessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: KillSessionReq): KillSessionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KillSessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KillSessionReq;
  static deserializeBinaryFromReader(message: KillSessionReq, reader: jspb.BinaryReader): KillSessionReq;
}

export namespace KillSessionReq {
  export type AsObject = {
    force: boolean,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class PsReq extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PsReq.AsObject;
  static toObject(includeInstance: boolean, msg: PsReq): PsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PsReq;
  static deserializeBinaryFromReader(message: PsReq, reader: jspb.BinaryReader): PsReq;
}

export namespace PsReq {
  export type AsObject = {
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Ps extends jspb.Message {
  clearProcessesList(): void;
  getProcessesList(): Array<commonpb_common_pb.Process>;
  setProcessesList(value: Array<commonpb_common_pb.Process>): void;
  addProcesses(value?: commonpb_common_pb.Process, index?: number): commonpb_common_pb.Process;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ps.AsObject;
  static toObject(includeInstance: boolean, msg: Ps): Ps.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ps;
  static deserializeBinaryFromReader(message: Ps, reader: jspb.BinaryReader): Ps;
}

export namespace Ps {
  export type AsObject = {
    processesList: Array<commonpb_common_pb.Process.AsObject>,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class TerminateReq extends jspb.Message {
  getPid(): number;
  setPid(value: number): void;

  getForce(): boolean;
  setForce(value: boolean): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TerminateReq.AsObject;
  static toObject(includeInstance: boolean, msg: TerminateReq): TerminateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TerminateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TerminateReq;
  static deserializeBinaryFromReader(message: TerminateReq, reader: jspb.BinaryReader): TerminateReq;
}

export namespace TerminateReq {
  export type AsObject = {
    pid: number,
    force: boolean,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Terminate extends jspb.Message {
  getPid(): number;
  setPid(value: number): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Terminate.AsObject;
  static toObject(includeInstance: boolean, msg: Terminate): Terminate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Terminate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Terminate;
  static deserializeBinaryFromReader(message: Terminate, reader: jspb.BinaryReader): Terminate;
}

export namespace Terminate {
  export type AsObject = {
    pid: number,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class IfconfigReq extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IfconfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: IfconfigReq): IfconfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IfconfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IfconfigReq;
  static deserializeBinaryFromReader(message: IfconfigReq, reader: jspb.BinaryReader): IfconfigReq;
}

export namespace IfconfigReq {
  export type AsObject = {
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Ifconfig extends jspb.Message {
  clearNetinterfacesList(): void;
  getNetinterfacesList(): Array<NetInterface>;
  setNetinterfacesList(value: Array<NetInterface>): void;
  addNetinterfaces(value?: NetInterface, index?: number): NetInterface;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ifconfig.AsObject;
  static toObject(includeInstance: boolean, msg: Ifconfig): Ifconfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ifconfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ifconfig;
  static deserializeBinaryFromReader(message: Ifconfig, reader: jspb.BinaryReader): Ifconfig;
}

export namespace Ifconfig {
  export type AsObject = {
    netinterfacesList: Array<NetInterface.AsObject>,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class NetInterface extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getName(): string;
  setName(value: string): void;

  getMac(): string;
  setMac(value: string): void;

  clearIpaddressesList(): void;
  getIpaddressesList(): Array<string>;
  setIpaddressesList(value: Array<string>): void;
  addIpaddresses(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetInterface.AsObject;
  static toObject(includeInstance: boolean, msg: NetInterface): NetInterface.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetInterface, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetInterface;
  static deserializeBinaryFromReader(message: NetInterface, reader: jspb.BinaryReader): NetInterface;
}

export namespace NetInterface {
  export type AsObject = {
    index: number,
    name: string,
    mac: string,
    ipaddressesList: Array<string>,
  }
}

export class LsReq extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsReq.AsObject;
  static toObject(includeInstance: boolean, msg: LsReq): LsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsReq;
  static deserializeBinaryFromReader(message: LsReq, reader: jspb.BinaryReader): LsReq;
}

export namespace LsReq {
  export type AsObject = {
    path: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Ls extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getExists(): boolean;
  setExists(value: boolean): void;

  clearFilesList(): void;
  getFilesList(): Array<FileInfo>;
  setFilesList(value: Array<FileInfo>): void;
  addFiles(value?: FileInfo, index?: number): FileInfo;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ls.AsObject;
  static toObject(includeInstance: boolean, msg: Ls): Ls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ls;
  static deserializeBinaryFromReader(message: Ls, reader: jspb.BinaryReader): Ls;
}

export namespace Ls {
  export type AsObject = {
    path: string,
    exists: boolean,
    filesList: Array<FileInfo.AsObject>,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class FileInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIsdir(): boolean;
  setIsdir(value: boolean): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfo;
  static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
  export type AsObject = {
    name: string,
    isdir: boolean,
    size: number,
  }
}

export class CdReq extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdReq.AsObject;
  static toObject(includeInstance: boolean, msg: CdReq): CdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdReq;
  static deserializeBinaryFromReader(message: CdReq, reader: jspb.BinaryReader): CdReq;
}

export namespace CdReq {
  export type AsObject = {
    path: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class PwdReq extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PwdReq.AsObject;
  static toObject(includeInstance: boolean, msg: PwdReq): PwdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PwdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PwdReq;
  static deserializeBinaryFromReader(message: PwdReq, reader: jspb.BinaryReader): PwdReq;
}

export namespace PwdReq {
  export type AsObject = {
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Pwd extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pwd.AsObject;
  static toObject(includeInstance: boolean, msg: Pwd): Pwd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pwd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pwd;
  static deserializeBinaryFromReader(message: Pwd, reader: jspb.BinaryReader): Pwd;
}

export namespace Pwd {
  export type AsObject = {
    path: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class RmReq extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getRecursive(): boolean;
  setRecursive(value: boolean): void;

  getForce(): boolean;
  setForce(value: boolean): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RmReq.AsObject;
  static toObject(includeInstance: boolean, msg: RmReq): RmReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RmReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RmReq;
  static deserializeBinaryFromReader(message: RmReq, reader: jspb.BinaryReader): RmReq;
}

export namespace RmReq {
  export type AsObject = {
    path: string,
    recursive: boolean,
    force: boolean,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Rm extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rm.AsObject;
  static toObject(includeInstance: boolean, msg: Rm): Rm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Rm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rm;
  static deserializeBinaryFromReader(message: Rm, reader: jspb.BinaryReader): Rm;
}

export namespace Rm {
  export type AsObject = {
    path: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class MkdirReq extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MkdirReq.AsObject;
  static toObject(includeInstance: boolean, msg: MkdirReq): MkdirReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MkdirReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MkdirReq;
  static deserializeBinaryFromReader(message: MkdirReq, reader: jspb.BinaryReader): MkdirReq;
}

export namespace MkdirReq {
  export type AsObject = {
    path: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Mkdir extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mkdir.AsObject;
  static toObject(includeInstance: boolean, msg: Mkdir): Mkdir.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Mkdir, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mkdir;
  static deserializeBinaryFromReader(message: Mkdir, reader: jspb.BinaryReader): Mkdir;
}

export namespace Mkdir {
  export type AsObject = {
    path: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class DownloadReq extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadReq.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadReq): DownloadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadReq;
  static deserializeBinaryFromReader(message: DownloadReq, reader: jspb.BinaryReader): DownloadReq;
}

export namespace DownloadReq {
  export type AsObject = {
    path: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Download extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getEncoder(): string;
  setEncoder(value: string): void;

  getExists(): boolean;
  setExists(value: boolean): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Download.AsObject;
  static toObject(includeInstance: boolean, msg: Download): Download.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Download, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Download;
  static deserializeBinaryFromReader(message: Download, reader: jspb.BinaryReader): Download;
}

export namespace Download {
  export type AsObject = {
    path: string,
    encoder: string,
    exists: boolean,
    data: Uint8Array | string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class UploadReq extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getEncoder(): string;
  setEncoder(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadReq.AsObject;
  static toObject(includeInstance: boolean, msg: UploadReq): UploadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadReq;
  static deserializeBinaryFromReader(message: UploadReq, reader: jspb.BinaryReader): UploadReq;
}

export namespace UploadReq {
  export type AsObject = {
    path: string,
    encoder: string,
    data: Uint8Array | string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Upload extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Upload.AsObject;
  static toObject(includeInstance: boolean, msg: Upload): Upload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Upload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Upload;
  static deserializeBinaryFromReader(message: Upload, reader: jspb.BinaryReader): Upload;
}

export namespace Upload {
  export type AsObject = {
    path: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class ProcessDumpReq extends jspb.Message {
  getPid(): number;
  setPid(value: number): void;

  getTimeout(): number;
  setTimeout(value: number): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessDumpReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessDumpReq): ProcessDumpReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessDumpReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessDumpReq;
  static deserializeBinaryFromReader(message: ProcessDumpReq, reader: jspb.BinaryReader): ProcessDumpReq;
}

export namespace ProcessDumpReq {
  export type AsObject = {
    pid: number,
    timeout: number,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class ProcessDump extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessDump.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessDump): ProcessDump.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessDump, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessDump;
  static deserializeBinaryFromReader(message: ProcessDump, reader: jspb.BinaryReader): ProcessDump;
}

export namespace ProcessDump {
  export type AsObject = {
    data: Uint8Array | string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class RunAsReq extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getProcessname(): string;
  setProcessname(value: string): void;

  getArgs(): string;
  setArgs(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunAsReq.AsObject;
  static toObject(includeInstance: boolean, msg: RunAsReq): RunAsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunAsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunAsReq;
  static deserializeBinaryFromReader(message: RunAsReq, reader: jspb.BinaryReader): RunAsReq;
}

export namespace RunAsReq {
  export type AsObject = {
    username: string,
    processname: string,
    args: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class RunAs extends jspb.Message {
  getOutput(): string;
  setOutput(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunAs.AsObject;
  static toObject(includeInstance: boolean, msg: RunAs): RunAs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunAs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunAs;
  static deserializeBinaryFromReader(message: RunAs, reader: jspb.BinaryReader): RunAs;
}

export namespace RunAs {
  export type AsObject = {
    output: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class ImpersonateReq extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImpersonateReq.AsObject;
  static toObject(includeInstance: boolean, msg: ImpersonateReq): ImpersonateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImpersonateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImpersonateReq;
  static deserializeBinaryFromReader(message: ImpersonateReq, reader: jspb.BinaryReader): ImpersonateReq;
}

export namespace ImpersonateReq {
  export type AsObject = {
    username: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Impersonate extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Impersonate.AsObject;
  static toObject(includeInstance: boolean, msg: Impersonate): Impersonate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Impersonate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Impersonate;
  static deserializeBinaryFromReader(message: Impersonate, reader: jspb.BinaryReader): Impersonate;
}

export namespace Impersonate {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class RevToSelfReq extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevToSelfReq.AsObject;
  static toObject(includeInstance: boolean, msg: RevToSelfReq): RevToSelfReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevToSelfReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevToSelfReq;
  static deserializeBinaryFromReader(message: RevToSelfReq, reader: jspb.BinaryReader): RevToSelfReq;
}

export namespace RevToSelfReq {
  export type AsObject = {
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class RevToSelf extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevToSelf.AsObject;
  static toObject(includeInstance: boolean, msg: RevToSelf): RevToSelf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevToSelf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevToSelf;
  static deserializeBinaryFromReader(message: RevToSelf, reader: jspb.BinaryReader): RevToSelf;
}

export namespace RevToSelf {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class InvokeGetSystemReq extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getHostingprocess(): string;
  setHostingprocess(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeGetSystemReq.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeGetSystemReq): InvokeGetSystemReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvokeGetSystemReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeGetSystemReq;
  static deserializeBinaryFromReader(message: InvokeGetSystemReq, reader: jspb.BinaryReader): InvokeGetSystemReq;
}

export namespace InvokeGetSystemReq {
  export type AsObject = {
    data: Uint8Array | string,
    hostingprocess: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class GetSystem extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystem.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystem): GetSystem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystem;
  static deserializeBinaryFromReader(message: GetSystem, reader: jspb.BinaryReader): GetSystem;
}

export namespace GetSystem {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class MakeTokenReq extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getDomain(): string;
  setDomain(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakeTokenReq.AsObject;
  static toObject(includeInstance: boolean, msg: MakeTokenReq): MakeTokenReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MakeTokenReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakeTokenReq;
  static deserializeBinaryFromReader(message: MakeTokenReq, reader: jspb.BinaryReader): MakeTokenReq;
}

export namespace MakeTokenReq {
  export type AsObject = {
    username: string,
    password: string,
    domain: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class MakeToken extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakeToken.AsObject;
  static toObject(includeInstance: boolean, msg: MakeToken): MakeToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MakeToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakeToken;
  static deserializeBinaryFromReader(message: MakeToken, reader: jspb.BinaryReader): MakeToken;
}

export namespace MakeToken {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class TaskReq extends jspb.Message {
  getEncoder(): string;
  setEncoder(value: string): void;

  getRwxpages(): boolean;
  setRwxpages(value: boolean): void;

  getPid(): number;
  setPid(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskReq.AsObject;
  static toObject(includeInstance: boolean, msg: TaskReq): TaskReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskReq;
  static deserializeBinaryFromReader(message: TaskReq, reader: jspb.BinaryReader): TaskReq;
}

export namespace TaskReq {
  export type AsObject = {
    encoder: string,
    rwxpages: boolean,
    pid: number,
    data: Uint8Array | string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Task extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class ExecuteAssemblyReq extends jspb.Message {
  getAssembly(): Uint8Array | string;
  getAssembly_asU8(): Uint8Array;
  getAssembly_asB64(): string;
  setAssembly(value: Uint8Array | string): void;

  getArguments(): string;
  setArguments(value: string): void;

  getProcess(): string;
  setProcess(value: string): void;

  getIsdll(): boolean;
  setIsdll(value: boolean): void;

  getArch(): string;
  setArch(value: string): void;

  getClassname(): string;
  setClassname(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  getAppdomain(): string;
  setAppdomain(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAssemblyReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAssemblyReq): ExecuteAssemblyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAssemblyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAssemblyReq;
  static deserializeBinaryFromReader(message: ExecuteAssemblyReq, reader: jspb.BinaryReader): ExecuteAssemblyReq;
}

export namespace ExecuteAssemblyReq {
  export type AsObject = {
    assembly: Uint8Array | string,
    arguments: string,
    process: string,
    isdll: boolean,
    arch: string,
    classname: string,
    method: string,
    appdomain: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class InvokeExecuteAssemblyReq extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getProcess(): string;
  setProcess(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeExecuteAssemblyReq.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeExecuteAssemblyReq): InvokeExecuteAssemblyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvokeExecuteAssemblyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeExecuteAssemblyReq;
  static deserializeBinaryFromReader(message: InvokeExecuteAssemblyReq, reader: jspb.BinaryReader): InvokeExecuteAssemblyReq;
}

export namespace InvokeExecuteAssemblyReq {
  export type AsObject = {
    data: Uint8Array | string,
    process: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class ExecuteAssembly extends jspb.Message {
  getOutput(): Uint8Array | string;
  getOutput_asU8(): Uint8Array;
  getOutput_asB64(): string;
  setOutput(value: Uint8Array | string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteAssembly.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteAssembly): ExecuteAssembly.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteAssembly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteAssembly;
  static deserializeBinaryFromReader(message: ExecuteAssembly, reader: jspb.BinaryReader): ExecuteAssembly;
}

export namespace ExecuteAssembly {
  export type AsObject = {
    output: Uint8Array | string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class InvokeMigrateReq extends jspb.Message {
  getPid(): number;
  setPid(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeMigrateReq.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeMigrateReq): InvokeMigrateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvokeMigrateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeMigrateReq;
  static deserializeBinaryFromReader(message: InvokeMigrateReq, reader: jspb.BinaryReader): InvokeMigrateReq;
}

export namespace InvokeMigrateReq {
  export type AsObject = {
    pid: number,
    data: Uint8Array | string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Migrate extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Migrate.AsObject;
  static toObject(includeInstance: boolean, msg: Migrate): Migrate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Migrate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Migrate;
  static deserializeBinaryFromReader(message: Migrate, reader: jspb.BinaryReader): Migrate;
}

export namespace Migrate {
  export type AsObject = {
    success: boolean,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class ExecuteReq extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  getOutput(): boolean;
  setOutput(value: boolean): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteReq): ExecuteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteReq;
  static deserializeBinaryFromReader(message: ExecuteReq, reader: jspb.BinaryReader): ExecuteReq;
}

export namespace ExecuteReq {
  export type AsObject = {
    path: string,
    argsList: Array<string>,
    output: boolean,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class ExecuteTokenReq extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  getOutput(): boolean;
  setOutput(value: boolean): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteTokenReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteTokenReq): ExecuteTokenReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteTokenReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteTokenReq;
  static deserializeBinaryFromReader(message: ExecuteTokenReq, reader: jspb.BinaryReader): ExecuteTokenReq;
}

export namespace ExecuteTokenReq {
  export type AsObject = {
    path: string,
    argsList: Array<string>,
    output: boolean,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Execute extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Execute.AsObject;
  static toObject(includeInstance: boolean, msg: Execute): Execute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Execute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Execute;
  static deserializeBinaryFromReader(message: Execute, reader: jspb.BinaryReader): Execute;
}

export namespace Execute {
  export type AsObject = {
    result: string,
    status: number,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class SideloadReq extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getProcessname(): string;
  setProcessname(value: string): void;

  getArgs(): string;
  setArgs(value: string): void;

  getEntrypoint(): string;
  setEntrypoint(value: string): void;

  getKill(): boolean;
  setKill(value: boolean): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SideloadReq.AsObject;
  static toObject(includeInstance: boolean, msg: SideloadReq): SideloadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SideloadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SideloadReq;
  static deserializeBinaryFromReader(message: SideloadReq, reader: jspb.BinaryReader): SideloadReq;
}

export namespace SideloadReq {
  export type AsObject = {
    data: Uint8Array | string,
    processname: string,
    args: string,
    entrypoint: string,
    kill: boolean,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Sideload extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sideload.AsObject;
  static toObject(includeInstance: boolean, msg: Sideload): Sideload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sideload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sideload;
  static deserializeBinaryFromReader(message: Sideload, reader: jspb.BinaryReader): Sideload;
}

export namespace Sideload {
  export type AsObject = {
    result: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class InvokeSpawnDllReq extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getProcessname(): string;
  setProcessname(value: string): void;

  getArgs(): string;
  setArgs(value: string): void;

  getEntrypoint(): string;
  setEntrypoint(value: string): void;

  getKill(): boolean;
  setKill(value: boolean): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeSpawnDllReq.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeSpawnDllReq): InvokeSpawnDllReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvokeSpawnDllReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeSpawnDllReq;
  static deserializeBinaryFromReader(message: InvokeSpawnDllReq, reader: jspb.BinaryReader): InvokeSpawnDllReq;
}

export namespace InvokeSpawnDllReq {
  export type AsObject = {
    data: Uint8Array | string,
    processname: string,
    args: string,
    entrypoint: string,
    kill: boolean,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class SpawnDllReq extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getProcessname(): string;
  setProcessname(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getArgs(): string;
  setArgs(value: string): void;

  getKill(): boolean;
  setKill(value: boolean): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpawnDllReq.AsObject;
  static toObject(includeInstance: boolean, msg: SpawnDllReq): SpawnDllReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpawnDllReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpawnDllReq;
  static deserializeBinaryFromReader(message: SpawnDllReq, reader: jspb.BinaryReader): SpawnDllReq;
}

export namespace SpawnDllReq {
  export type AsObject = {
    data: Uint8Array | string,
    processname: string,
    offset: number,
    args: string,
    kill: boolean,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class SpawnDll extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpawnDll.AsObject;
  static toObject(includeInstance: boolean, msg: SpawnDll): SpawnDll.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpawnDll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpawnDll;
  static deserializeBinaryFromReader(message: SpawnDll, reader: jspb.BinaryReader): SpawnDll;
}

export namespace SpawnDll {
  export type AsObject = {
    result: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class NetstatReq extends jspb.Message {
  getTcp(): boolean;
  setTcp(value: boolean): void;

  getUdp(): boolean;
  setUdp(value: boolean): void;

  getIp4(): boolean;
  setIp4(value: boolean): void;

  getIp6(): boolean;
  setIp6(value: boolean): void;

  getListening(): boolean;
  setListening(value: boolean): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetstatReq.AsObject;
  static toObject(includeInstance: boolean, msg: NetstatReq): NetstatReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetstatReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetstatReq;
  static deserializeBinaryFromReader(message: NetstatReq, reader: jspb.BinaryReader): NetstatReq;
}

export namespace NetstatReq {
  export type AsObject = {
    tcp: boolean,
    udp: boolean,
    ip4: boolean,
    ip6: boolean,
    listening: boolean,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class SockTabEntry extends jspb.Message {
  hasLocaladdr(): boolean;
  clearLocaladdr(): void;
  getLocaladdr(): SockTabEntry.SockAddr | undefined;
  setLocaladdr(value?: SockTabEntry.SockAddr): void;

  hasRemoteaddr(): boolean;
  clearRemoteaddr(): void;
  getRemoteaddr(): SockTabEntry.SockAddr | undefined;
  setRemoteaddr(value?: SockTabEntry.SockAddr): void;

  getSkstate(): string;
  setSkstate(value: string): void;

  getUid(): number;
  setUid(value: number): void;

  hasProcess(): boolean;
  clearProcess(): void;
  getProcess(): commonpb_common_pb.Process | undefined;
  setProcess(value?: commonpb_common_pb.Process): void;

  getProtocol(): string;
  setProtocol(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SockTabEntry.AsObject;
  static toObject(includeInstance: boolean, msg: SockTabEntry): SockTabEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SockTabEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SockTabEntry;
  static deserializeBinaryFromReader(message: SockTabEntry, reader: jspb.BinaryReader): SockTabEntry;
}

export namespace SockTabEntry {
  export type AsObject = {
    localaddr?: SockTabEntry.SockAddr.AsObject,
    remoteaddr?: SockTabEntry.SockAddr.AsObject,
    skstate: string,
    uid: number,
    process?: commonpb_common_pb.Process.AsObject,
    protocol: string,
  }

  export class SockAddr extends jspb.Message {
    getIp(): string;
    setIp(value: string): void;

    getPort(): number;
    setPort(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SockAddr.AsObject;
    static toObject(includeInstance: boolean, msg: SockAddr): SockAddr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SockAddr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SockAddr;
    static deserializeBinaryFromReader(message: SockAddr, reader: jspb.BinaryReader): SockAddr;
  }

  export namespace SockAddr {
    export type AsObject = {
      ip: string,
      port: number,
    }
  }
}

export class Netstat extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<SockTabEntry>;
  setEntriesList(value: Array<SockTabEntry>): void;
  addEntries(value?: SockTabEntry, index?: number): SockTabEntry;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Netstat.AsObject;
  static toObject(includeInstance: boolean, msg: Netstat): Netstat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Netstat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Netstat;
  static deserializeBinaryFromReader(message: Netstat, reader: jspb.BinaryReader): Netstat;
}

export namespace Netstat {
  export type AsObject = {
    entriesList: Array<SockTabEntry.AsObject>,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class EnvReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnvReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnvReq): EnvReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnvReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnvReq;
  static deserializeBinaryFromReader(message: EnvReq, reader: jspb.BinaryReader): EnvReq;
}

export namespace EnvReq {
  export type AsObject = {
    name: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class EnvInfo extends jspb.Message {
  clearVariablesList(): void;
  getVariablesList(): Array<commonpb_common_pb.EnvVar>;
  setVariablesList(value: Array<commonpb_common_pb.EnvVar>): void;
  addVariables(value?: commonpb_common_pb.EnvVar, index?: number): commonpb_common_pb.EnvVar;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnvInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EnvInfo): EnvInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnvInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnvInfo;
  static deserializeBinaryFromReader(message: EnvInfo, reader: jspb.BinaryReader): EnvInfo;
}

export namespace EnvInfo {
  export type AsObject = {
    variablesList: Array<commonpb_common_pb.EnvVar.AsObject>,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class SetEnvReq extends jspb.Message {
  hasVariable(): boolean;
  clearVariable(): void;
  getVariable(): commonpb_common_pb.EnvVar | undefined;
  setVariable(value?: commonpb_common_pb.EnvVar): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetEnvReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetEnvReq): SetEnvReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetEnvReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetEnvReq;
  static deserializeBinaryFromReader(message: SetEnvReq, reader: jspb.BinaryReader): SetEnvReq;
}

export namespace SetEnvReq {
  export type AsObject = {
    variable?: commonpb_common_pb.EnvVar.AsObject,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class SetEnv extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetEnv.AsObject;
  static toObject(includeInstance: boolean, msg: SetEnv): SetEnv.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetEnv, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetEnv;
  static deserializeBinaryFromReader(message: SetEnv, reader: jspb.BinaryReader): SetEnv;
}

export namespace SetEnv {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class UnsetEnvReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsetEnvReq.AsObject;
  static toObject(includeInstance: boolean, msg: UnsetEnvReq): UnsetEnvReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsetEnvReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsetEnvReq;
  static deserializeBinaryFromReader(message: UnsetEnvReq, reader: jspb.BinaryReader): UnsetEnvReq;
}

export namespace UnsetEnvReq {
  export type AsObject = {
    name: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class UnsetEnv extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsetEnv.AsObject;
  static toObject(includeInstance: boolean, msg: UnsetEnv): UnsetEnv.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsetEnv, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsetEnv;
  static deserializeBinaryFromReader(message: UnsetEnv, reader: jspb.BinaryReader): UnsetEnv;
}

export namespace UnsetEnv {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class DNSSessionInit extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DNSSessionInit.AsObject;
  static toObject(includeInstance: boolean, msg: DNSSessionInit): DNSSessionInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DNSSessionInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DNSSessionInit;
  static deserializeBinaryFromReader(message: DNSSessionInit, reader: jspb.BinaryReader): DNSSessionInit;
}

export namespace DNSSessionInit {
  export type AsObject = {
    key: Uint8Array | string,
  }
}

export class DNSPoll extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<DNSBlockHeader>;
  setBlocksList(value: Array<DNSBlockHeader>): void;
  addBlocks(value?: DNSBlockHeader, index?: number): DNSBlockHeader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DNSPoll.AsObject;
  static toObject(includeInstance: boolean, msg: DNSPoll): DNSPoll.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DNSPoll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DNSPoll;
  static deserializeBinaryFromReader(message: DNSPoll, reader: jspb.BinaryReader): DNSPoll;
}

export namespace DNSPoll {
  export type AsObject = {
    blocksList: Array<DNSBlockHeader.AsObject>,
  }
}

export class DNSBlockHeader extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DNSBlockHeader.AsObject;
  static toObject(includeInstance: boolean, msg: DNSBlockHeader): DNSBlockHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DNSBlockHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DNSBlockHeader;
  static deserializeBinaryFromReader(message: DNSBlockHeader, reader: jspb.BinaryReader): DNSBlockHeader;
}

export namespace DNSBlockHeader {
  export type AsObject = {
    id: string,
    size: number,
  }
}

export class HTTPSessionInit extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPSessionInit.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPSessionInit): HTTPSessionInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPSessionInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPSessionInit;
  static deserializeBinaryFromReader(message: HTTPSessionInit, reader: jspb.BinaryReader): HTTPSessionInit;
}

export namespace HTTPSessionInit {
  export type AsObject = {
    key: Uint8Array | string,
  }
}

export class ScreenshotReq extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenshotReq.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenshotReq): ScreenshotReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenshotReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenshotReq;
  static deserializeBinaryFromReader(message: ScreenshotReq, reader: jspb.BinaryReader): ScreenshotReq;
}

export namespace ScreenshotReq {
  export type AsObject = {
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Screenshot extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Screenshot.AsObject;
  static toObject(includeInstance: boolean, msg: Screenshot): Screenshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Screenshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Screenshot;
  static deserializeBinaryFromReader(message: Screenshot, reader: jspb.BinaryReader): Screenshot;
}

export namespace Screenshot {
  export type AsObject = {
    data: Uint8Array | string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class StartServiceReq extends jspb.Message {
  getServicename(): string;
  setServicename(value: string): void;

  getServicedescription(): string;
  setServicedescription(value: string): void;

  getBinpath(): string;
  setBinpath(value: string): void;

  getHostname(): string;
  setHostname(value: string): void;

  getArguments(): string;
  setArguments(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartServiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: StartServiceReq): StartServiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartServiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartServiceReq;
  static deserializeBinaryFromReader(message: StartServiceReq, reader: jspb.BinaryReader): StartServiceReq;
}

export namespace StartServiceReq {
  export type AsObject = {
    servicename: string,
    servicedescription: string,
    binpath: string,
    hostname: string,
    arguments: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class ServiceInfo extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceInfo): ServiceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceInfo;
  static deserializeBinaryFromReader(message: ServiceInfo, reader: jspb.BinaryReader): ServiceInfo;
}

export namespace ServiceInfo {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class ServiceInfoReq extends jspb.Message {
  getServicename(): string;
  setServicename(value: string): void;

  getHostname(): string;
  setHostname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceInfoReq): ServiceInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceInfoReq;
  static deserializeBinaryFromReader(message: ServiceInfoReq, reader: jspb.BinaryReader): ServiceInfoReq;
}

export namespace ServiceInfoReq {
  export type AsObject = {
    servicename: string,
    hostname: string,
  }
}

export class StopServiceReq extends jspb.Message {
  hasServiceinfo(): boolean;
  clearServiceinfo(): void;
  getServiceinfo(): ServiceInfoReq | undefined;
  setServiceinfo(value?: ServiceInfoReq): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopServiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: StopServiceReq): StopServiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopServiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopServiceReq;
  static deserializeBinaryFromReader(message: StopServiceReq, reader: jspb.BinaryReader): StopServiceReq;
}

export namespace StopServiceReq {
  export type AsObject = {
    serviceinfo?: ServiceInfoReq.AsObject,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class RemoveServiceReq extends jspb.Message {
  hasServiceinfo(): boolean;
  clearServiceinfo(): void;
  getServiceinfo(): ServiceInfoReq | undefined;
  setServiceinfo(value?: ServiceInfoReq): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveServiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveServiceReq): RemoveServiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveServiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveServiceReq;
  static deserializeBinaryFromReader(message: RemoveServiceReq, reader: jspb.BinaryReader): RemoveServiceReq;
}

export namespace RemoveServiceReq {
  export type AsObject = {
    serviceinfo?: ServiceInfoReq.AsObject,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class BackdoorReq extends jspb.Message {
  getFilepath(): string;
  setFilepath(value: string): void;

  getProfilename(): string;
  setProfilename(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackdoorReq.AsObject;
  static toObject(includeInstance: boolean, msg: BackdoorReq): BackdoorReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BackdoorReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackdoorReq;
  static deserializeBinaryFromReader(message: BackdoorReq, reader: jspb.BinaryReader): BackdoorReq;
}

export namespace BackdoorReq {
  export type AsObject = {
    filepath: string,
    profilename: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Backdoor extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Backdoor.AsObject;
  static toObject(includeInstance: boolean, msg: Backdoor): Backdoor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Backdoor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Backdoor;
  static deserializeBinaryFromReader(message: Backdoor, reader: jspb.BinaryReader): Backdoor;
}

export namespace Backdoor {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class RegistryReadReq extends jspb.Message {
  getHive(): string;
  setHive(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getHostname(): string;
  setHostname(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistryReadReq.AsObject;
  static toObject(includeInstance: boolean, msg: RegistryReadReq): RegistryReadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistryReadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistryReadReq;
  static deserializeBinaryFromReader(message: RegistryReadReq, reader: jspb.BinaryReader): RegistryReadReq;
}

export namespace RegistryReadReq {
  export type AsObject = {
    hive: string,
    path: string,
    key: string,
    hostname: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class RegistryRead extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistryRead.AsObject;
  static toObject(includeInstance: boolean, msg: RegistryRead): RegistryRead.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistryRead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistryRead;
  static deserializeBinaryFromReader(message: RegistryRead, reader: jspb.BinaryReader): RegistryRead;
}

export namespace RegistryRead {
  export type AsObject = {
    value: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class RegistryWriteReq extends jspb.Message {
  getHive(): string;
  setHive(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getHostname(): string;
  setHostname(value: string): void;

  getStringvalue(): string;
  setStringvalue(value: string): void;

  getBytevalue(): Uint8Array | string;
  getBytevalue_asU8(): Uint8Array;
  getBytevalue_asB64(): string;
  setBytevalue(value: Uint8Array | string): void;

  getDwordvalue(): number;
  setDwordvalue(value: number): void;

  getQwordvalue(): number;
  setQwordvalue(value: number): void;

  getType(): number;
  setType(value: number): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistryWriteReq.AsObject;
  static toObject(includeInstance: boolean, msg: RegistryWriteReq): RegistryWriteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistryWriteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistryWriteReq;
  static deserializeBinaryFromReader(message: RegistryWriteReq, reader: jspb.BinaryReader): RegistryWriteReq;
}

export namespace RegistryWriteReq {
  export type AsObject = {
    hive: string,
    path: string,
    key: string,
    hostname: string,
    stringvalue: string,
    bytevalue: Uint8Array | string,
    dwordvalue: number,
    qwordvalue: number,
    type: number,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class RegistryWrite extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistryWrite.AsObject;
  static toObject(includeInstance: boolean, msg: RegistryWrite): RegistryWrite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistryWrite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistryWrite;
  static deserializeBinaryFromReader(message: RegistryWrite, reader: jspb.BinaryReader): RegistryWrite;
}

export namespace RegistryWrite {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class RegistryCreateKeyReq extends jspb.Message {
  getHive(): string;
  setHive(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getHostname(): string;
  setHostname(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistryCreateKeyReq.AsObject;
  static toObject(includeInstance: boolean, msg: RegistryCreateKeyReq): RegistryCreateKeyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistryCreateKeyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistryCreateKeyReq;
  static deserializeBinaryFromReader(message: RegistryCreateKeyReq, reader: jspb.BinaryReader): RegistryCreateKeyReq;
}

export namespace RegistryCreateKeyReq {
  export type AsObject = {
    hive: string,
    path: string,
    key: string,
    hostname: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class RegistryCreateKey extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistryCreateKey.AsObject;
  static toObject(includeInstance: boolean, msg: RegistryCreateKey): RegistryCreateKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistryCreateKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistryCreateKey;
  static deserializeBinaryFromReader(message: RegistryCreateKey, reader: jspb.BinaryReader): RegistryCreateKey;
}

export namespace RegistryCreateKey {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class Tunnel extends jspb.Message {
  getTunnelid(): string;
  setTunnelid(value: string): void;

  getSessionid(): number;
  setSessionid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tunnel.AsObject;
  static toObject(includeInstance: boolean, msg: Tunnel): Tunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tunnel;
  static deserializeBinaryFromReader(message: Tunnel, reader: jspb.BinaryReader): Tunnel;
}

export namespace Tunnel {
  export type AsObject = {
    tunnelid: string,
    sessionid: number,
  }
}

export class TunnelData extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getClosed(): boolean;
  setClosed(value: boolean): void;

  getSequence(): number;
  setSequence(value: number): void;

  getAck(): number;
  setAck(value: number): void;

  getResend(): boolean;
  setResend(value: boolean): void;

  getTunnelid(): string;
  setTunnelid(value: string): void;

  getSessionid(): number;
  setSessionid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TunnelData.AsObject;
  static toObject(includeInstance: boolean, msg: TunnelData): TunnelData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TunnelData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TunnelData;
  static deserializeBinaryFromReader(message: TunnelData, reader: jspb.BinaryReader): TunnelData;
}

export namespace TunnelData {
  export type AsObject = {
    data: Uint8Array | string,
    closed: boolean,
    sequence: number,
    ack: number,
    resend: boolean,
    tunnelid: string,
    sessionid: number,
  }
}

export class ShellReq extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getEnablepty(): boolean;
  setEnablepty(value: boolean): void;

  getPid(): number;
  setPid(value: number): void;

  getTunnelid(): string;
  setTunnelid(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShellReq.AsObject;
  static toObject(includeInstance: boolean, msg: ShellReq): ShellReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShellReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShellReq;
  static deserializeBinaryFromReader(message: ShellReq, reader: jspb.BinaryReader): ShellReq;
}

export namespace ShellReq {
  export type AsObject = {
    path: string,
    enablepty: boolean,
    pid: number,
    tunnelid: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Shell extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getEnablepty(): boolean;
  setEnablepty(value: boolean): void;

  getPid(): number;
  setPid(value: number): void;

  getTunnelid(): string;
  setTunnelid(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Shell.AsObject;
  static toObject(includeInstance: boolean, msg: Shell): Shell.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Shell, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Shell;
  static deserializeBinaryFromReader(message: Shell, reader: jspb.BinaryReader): Shell;
}

export namespace Shell {
  export type AsObject = {
    path: string,
    enablepty: boolean,
    pid: number,
    tunnelid: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class PortfwdReq extends jspb.Message {
  getPort(): number;
  setPort(value: number): void;

  getProtocol(): number;
  setProtocol(value: number): void;

  getHost(): string;
  setHost(value: string): void;

  getTunnelid(): string;
  setTunnelid(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortfwdReq.AsObject;
  static toObject(includeInstance: boolean, msg: PortfwdReq): PortfwdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortfwdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortfwdReq;
  static deserializeBinaryFromReader(message: PortfwdReq, reader: jspb.BinaryReader): PortfwdReq;
}

export namespace PortfwdReq {
  export type AsObject = {
    port: number,
    protocol: number,
    host: string,
    tunnelid: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class Portfwd extends jspb.Message {
  getPort(): number;
  setPort(value: number): void;

  getProtocol(): number;
  setProtocol(value: number): void;

  getHost(): string;
  setHost(value: string): void;

  getTunnelid(): string;
  setTunnelid(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Portfwd.AsObject;
  static toObject(includeInstance: boolean, msg: Portfwd): Portfwd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Portfwd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Portfwd;
  static deserializeBinaryFromReader(message: Portfwd, reader: jspb.BinaryReader): Portfwd;
}

export namespace Portfwd {
  export type AsObject = {
    port: number,
    protocol: number,
    host: string,
    tunnelid: string,
    response?: commonpb_common_pb.Response.AsObject,
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
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class PivotOpen extends jspb.Message {
  getPivotid(): number;
  setPivotid(value: number): void;

  getPivottype(): string;
  setPivottype(value: string): void;

  getRemoteaddress(): string;
  setRemoteaddress(value: string): void;

  getRegistermsg(): Uint8Array | string;
  getRegistermsg_asU8(): Uint8Array;
  getRegistermsg_asB64(): string;
  setRegistermsg(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PivotOpen.AsObject;
  static toObject(includeInstance: boolean, msg: PivotOpen): PivotOpen.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PivotOpen, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PivotOpen;
  static deserializeBinaryFromReader(message: PivotOpen, reader: jspb.BinaryReader): PivotOpen;
}

export namespace PivotOpen {
  export type AsObject = {
    pivotid: number,
    pivottype: string,
    remoteaddress: string,
    registermsg: Uint8Array | string,
  }
}

export class PivotClose extends jspb.Message {
  getPivotid(): number;
  setPivotid(value: number): void;

  getErr(): string;
  setErr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PivotClose.AsObject;
  static toObject(includeInstance: boolean, msg: PivotClose): PivotClose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PivotClose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PivotClose;
  static deserializeBinaryFromReader(message: PivotClose, reader: jspb.BinaryReader): PivotClose;
}

export namespace PivotClose {
  export type AsObject = {
    pivotid: number,
    err: string,
  }
}

export class PivotData extends jspb.Message {
  getPivotid(): number;
  setPivotid(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PivotData.AsObject;
  static toObject(includeInstance: boolean, msg: PivotData): PivotData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PivotData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PivotData;
  static deserializeBinaryFromReader(message: PivotData, reader: jspb.BinaryReader): PivotData;
}

export namespace PivotData {
  export type AsObject = {
    pivotid: number,
    data: Uint8Array | string,
  }
}

export class PivotEntry extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getRemote(): string;
  setRemote(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PivotEntry.AsObject;
  static toObject(includeInstance: boolean, msg: PivotEntry): PivotEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PivotEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PivotEntry;
  static deserializeBinaryFromReader(message: PivotEntry, reader: jspb.BinaryReader): PivotEntry;
}

export namespace PivotEntry {
  export type AsObject = {
    type: string,
    remote: string,
  }
}

export class PivotListReq extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PivotListReq.AsObject;
  static toObject(includeInstance: boolean, msg: PivotListReq): PivotListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PivotListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PivotListReq;
  static deserializeBinaryFromReader(message: PivotListReq, reader: jspb.BinaryReader): PivotListReq;
}

export namespace PivotListReq {
  export type AsObject = {
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class PivotList extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<PivotEntry>;
  setEntriesList(value: Array<PivotEntry>): void;
  addEntries(value?: PivotEntry, index?: number): PivotEntry;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PivotList.AsObject;
  static toObject(includeInstance: boolean, msg: PivotList): PivotList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PivotList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PivotList;
  static deserializeBinaryFromReader(message: PivotList, reader: jspb.BinaryReader): PivotList;
}

export namespace PivotList {
  export type AsObject = {
    entriesList: Array<PivotEntry.AsObject>,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class WGPortForwardStartReq extends jspb.Message {
  getLocalport(): number;
  setLocalport(value: number): void;

  getRemoteaddress(): string;
  setRemoteaddress(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGPortForwardStartReq.AsObject;
  static toObject(includeInstance: boolean, msg: WGPortForwardStartReq): WGPortForwardStartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGPortForwardStartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGPortForwardStartReq;
  static deserializeBinaryFromReader(message: WGPortForwardStartReq, reader: jspb.BinaryReader): WGPortForwardStartReq;
}

export namespace WGPortForwardStartReq {
  export type AsObject = {
    localport: number,
    remoteaddress: string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class WGPortForward extends jspb.Message {
  hasForwarder(): boolean;
  clearForwarder(): void;
  getForwarder(): WGTCPForwarder | undefined;
  setForwarder(value?: WGTCPForwarder): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGPortForward.AsObject;
  static toObject(includeInstance: boolean, msg: WGPortForward): WGPortForward.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGPortForward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGPortForward;
  static deserializeBinaryFromReader(message: WGPortForward, reader: jspb.BinaryReader): WGPortForward;
}

export namespace WGPortForward {
  export type AsObject = {
    forwarder?: WGTCPForwarder.AsObject,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class WGPortForwardStopReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGPortForwardStopReq.AsObject;
  static toObject(includeInstance: boolean, msg: WGPortForwardStopReq): WGPortForwardStopReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGPortForwardStopReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGPortForwardStopReq;
  static deserializeBinaryFromReader(message: WGPortForwardStopReq, reader: jspb.BinaryReader): WGPortForwardStopReq;
}

export namespace WGPortForwardStopReq {
  export type AsObject = {
    id: number,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class WGSocksStartReq extends jspb.Message {
  getPort(): number;
  setPort(value: number): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGSocksStartReq.AsObject;
  static toObject(includeInstance: boolean, msg: WGSocksStartReq): WGSocksStartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGSocksStartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGSocksStartReq;
  static deserializeBinaryFromReader(message: WGSocksStartReq, reader: jspb.BinaryReader): WGSocksStartReq;
}

export namespace WGSocksStartReq {
  export type AsObject = {
    port: number,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class WGSocks extends jspb.Message {
  hasServer(): boolean;
  clearServer(): void;
  getServer(): WGSocksServer | undefined;
  setServer(value?: WGSocksServer): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGSocks.AsObject;
  static toObject(includeInstance: boolean, msg: WGSocks): WGSocks.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGSocks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGSocks;
  static deserializeBinaryFromReader(message: WGSocks, reader: jspb.BinaryReader): WGSocks;
}

export namespace WGSocks {
  export type AsObject = {
    server?: WGSocksServer.AsObject,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class WGSocksStopReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGSocksStopReq.AsObject;
  static toObject(includeInstance: boolean, msg: WGSocksStopReq): WGSocksStopReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGSocksStopReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGSocksStopReq;
  static deserializeBinaryFromReader(message: WGSocksStopReq, reader: jspb.BinaryReader): WGSocksStopReq;
}

export namespace WGSocksStopReq {
  export type AsObject = {
    id: number,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class WGTCPForwardersReq extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGTCPForwardersReq.AsObject;
  static toObject(includeInstance: boolean, msg: WGTCPForwardersReq): WGTCPForwardersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGTCPForwardersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGTCPForwardersReq;
  static deserializeBinaryFromReader(message: WGTCPForwardersReq, reader: jspb.BinaryReader): WGTCPForwardersReq;
}

export namespace WGTCPForwardersReq {
  export type AsObject = {
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class WGSocksServersReq extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGSocksServersReq.AsObject;
  static toObject(includeInstance: boolean, msg: WGSocksServersReq): WGSocksServersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGSocksServersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGSocksServersReq;
  static deserializeBinaryFromReader(message: WGSocksServersReq, reader: jspb.BinaryReader): WGSocksServersReq;
}

export namespace WGSocksServersReq {
  export type AsObject = {
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class WGTCPForwarder extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLocaladdr(): string;
  setLocaladdr(value: string): void;

  getRemoteaddr(): string;
  setRemoteaddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGTCPForwarder.AsObject;
  static toObject(includeInstance: boolean, msg: WGTCPForwarder): WGTCPForwarder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGTCPForwarder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGTCPForwarder;
  static deserializeBinaryFromReader(message: WGTCPForwarder, reader: jspb.BinaryReader): WGTCPForwarder;
}

export namespace WGTCPForwarder {
  export type AsObject = {
    id: number,
    localaddr: string,
    remoteaddr: string,
  }
}

export class WGSocksServer extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLocaladdr(): string;
  setLocaladdr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGSocksServer.AsObject;
  static toObject(includeInstance: boolean, msg: WGSocksServer): WGSocksServer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGSocksServer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGSocksServer;
  static deserializeBinaryFromReader(message: WGSocksServer, reader: jspb.BinaryReader): WGSocksServer;
}

export namespace WGSocksServer {
  export type AsObject = {
    id: number,
    localaddr: string,
  }
}

export class WGSocksServers extends jspb.Message {
  clearServersList(): void;
  getServersList(): Array<WGSocksServer>;
  setServersList(value: Array<WGSocksServer>): void;
  addServers(value?: WGSocksServer, index?: number): WGSocksServer;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGSocksServers.AsObject;
  static toObject(includeInstance: boolean, msg: WGSocksServers): WGSocksServers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGSocksServers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGSocksServers;
  static deserializeBinaryFromReader(message: WGSocksServers, reader: jspb.BinaryReader): WGSocksServers;
}

export namespace WGSocksServers {
  export type AsObject = {
    serversList: Array<WGSocksServer.AsObject>,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class WGTCPForwarders extends jspb.Message {
  clearForwardersList(): void;
  getForwardersList(): Array<WGTCPForwarder>;
  setForwardersList(value: Array<WGTCPForwarder>): void;
  addForwarders(value?: WGTCPForwarder, index?: number): WGTCPForwarder;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WGTCPForwarders.AsObject;
  static toObject(includeInstance: boolean, msg: WGTCPForwarders): WGTCPForwarders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WGTCPForwarders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WGTCPForwarders;
  static deserializeBinaryFromReader(message: WGTCPForwarders, reader: jspb.BinaryReader): WGTCPForwarders;
}

export namespace WGTCPForwarders {
  export type AsObject = {
    forwardersList: Array<WGTCPForwarder.AsObject>,
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class ReconnectIntervalReq extends jspb.Message {
  getReconnectintervalseconds(): number;
  setReconnectintervalseconds(value: number): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReconnectIntervalReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReconnectIntervalReq): ReconnectIntervalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReconnectIntervalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReconnectIntervalReq;
  static deserializeBinaryFromReader(message: ReconnectIntervalReq, reader: jspb.BinaryReader): ReconnectIntervalReq;
}

export namespace ReconnectIntervalReq {
  export type AsObject = {
    reconnectintervalseconds: number,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class ReconnectInterval extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReconnectInterval.AsObject;
  static toObject(includeInstance: boolean, msg: ReconnectInterval): ReconnectInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReconnectInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReconnectInterval;
  static deserializeBinaryFromReader(message: ReconnectInterval, reader: jspb.BinaryReader): ReconnectInterval;
}

export namespace ReconnectInterval {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class PollIntervalReq extends jspb.Message {
  getPollintervalseconds(): number;
  setPollintervalseconds(value: number): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PollIntervalReq.AsObject;
  static toObject(includeInstance: boolean, msg: PollIntervalReq): PollIntervalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PollIntervalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PollIntervalReq;
  static deserializeBinaryFromReader(message: PollIntervalReq, reader: jspb.BinaryReader): PollIntervalReq;
}

export namespace PollIntervalReq {
  export type AsObject = {
    pollintervalseconds: number,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class PollInterval extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PollInterval.AsObject;
  static toObject(includeInstance: boolean, msg: PollInterval): PollInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PollInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PollInterval;
  static deserializeBinaryFromReader(message: PollInterval, reader: jspb.BinaryReader): PollInterval;
}

export namespace PollInterval {
  export type AsObject = {
    response?: commonpb_common_pb.Response.AsObject,
  }
}

export class SSHCommandReq extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getHostname(): string;
  setHostname(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getCommand(): string;
  setCommand(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getPrivkey(): Uint8Array | string;
  getPrivkey_asU8(): Uint8Array;
  getPrivkey_asB64(): string;
  setPrivkey(value: Uint8Array | string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): commonpb_common_pb.Request | undefined;
  setRequest(value?: commonpb_common_pb.Request): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSHCommandReq.AsObject;
  static toObject(includeInstance: boolean, msg: SSHCommandReq): SSHCommandReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSHCommandReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSHCommandReq;
  static deserializeBinaryFromReader(message: SSHCommandReq, reader: jspb.BinaryReader): SSHCommandReq;
}

export namespace SSHCommandReq {
  export type AsObject = {
    username: string,
    hostname: string,
    port: number,
    command: string,
    password: string,
    privkey: Uint8Array | string,
    request?: commonpb_common_pb.Request.AsObject,
  }
}

export class SSHCommand extends jspb.Message {
  getStdout(): string;
  setStdout(value: string): void;

  getStderr(): string;
  setStderr(value: string): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): commonpb_common_pb.Response | undefined;
  setResponse(value?: commonpb_common_pb.Response): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSHCommand.AsObject;
  static toObject(includeInstance: boolean, msg: SSHCommand): SSHCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSHCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSHCommand;
  static deserializeBinaryFromReader(message: SSHCommand, reader: jspb.BinaryReader): SSHCommand;
}

export namespace SSHCommand {
  export type AsObject = {
    stdout: string,
    stderr: string,
    response?: commonpb_common_pb.Response.AsObject,
  }
}


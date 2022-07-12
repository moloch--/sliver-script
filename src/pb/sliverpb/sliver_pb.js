// source: sliverpb/sliver.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
if (proto === undefined) { var proto = {commonpb: {}, clientpb: {}, sliverpb: {}}; }


var jspb = require('google-protobuf');
var goog = jspb;
var global = (function(){return this;})();

var commonpb_common_pb = require('../commonpb/common_pb.js');
goog.object.extend(proto, commonpb_common_pb);
goog.exportSymbol('proto.sliverpb.Backdoor', null, global);
goog.exportSymbol('proto.sliverpb.BackdoorReq', null, global);
goog.exportSymbol('proto.sliverpb.BeaconRegister', null, global);
goog.exportSymbol('proto.sliverpb.BeaconTasks', null, global);
goog.exportSymbol('proto.sliverpb.CallExtension', null, global);
goog.exportSymbol('proto.sliverpb.CallExtensionReq', null, global);
goog.exportSymbol('proto.sliverpb.CdReq', null, global);
goog.exportSymbol('proto.sliverpb.CloseSession', null, global);
goog.exportSymbol('proto.sliverpb.CurrentTokenOwner', null, global);
goog.exportSymbol('proto.sliverpb.CurrentTokenOwnerReq', null, global);
goog.exportSymbol('proto.sliverpb.DNSBlockHeader', null, global);
goog.exportSymbol('proto.sliverpb.DNSPoll', null, global);
goog.exportSymbol('proto.sliverpb.DNSSessionInit', null, global);
goog.exportSymbol('proto.sliverpb.Download', null, global);
goog.exportSymbol('proto.sliverpb.DownloadReq', null, global);
goog.exportSymbol('proto.sliverpb.EnvInfo', null, global);
goog.exportSymbol('proto.sliverpb.EnvReq', null, global);
goog.exportSymbol('proto.sliverpb.Envelope', null, global);
goog.exportSymbol('proto.sliverpb.Execute', null, global);
goog.exportSymbol('proto.sliverpb.ExecuteAssembly', null, global);
goog.exportSymbol('proto.sliverpb.ExecuteAssemblyReq', null, global);
goog.exportSymbol('proto.sliverpb.ExecuteReq', null, global);
goog.exportSymbol('proto.sliverpb.ExecuteTokenReq', null, global);
goog.exportSymbol('proto.sliverpb.FileInfo', null, global);
goog.exportSymbol('proto.sliverpb.GetPrivs', null, global);
goog.exportSymbol('proto.sliverpb.GetPrivsReq', null, global);
goog.exportSymbol('proto.sliverpb.GetSystem', null, global);
goog.exportSymbol('proto.sliverpb.HTTPSessionInit', null, global);
goog.exportSymbol('proto.sliverpb.Ifconfig', null, global);
goog.exportSymbol('proto.sliverpb.IfconfigReq', null, global);
goog.exportSymbol('proto.sliverpb.Impersonate', null, global);
goog.exportSymbol('proto.sliverpb.ImpersonateReq', null, global);
goog.exportSymbol('proto.sliverpb.InvokeExecuteAssemblyReq', null, global);
goog.exportSymbol('proto.sliverpb.InvokeGetSystemReq', null, global);
goog.exportSymbol('proto.sliverpb.InvokeMigrateReq', null, global);
goog.exportSymbol('proto.sliverpb.InvokeSpawnDllReq', null, global);
goog.exportSymbol('proto.sliverpb.KillReq', null, global);
goog.exportSymbol('proto.sliverpb.ListExtensions', null, global);
goog.exportSymbol('proto.sliverpb.ListExtensionsReq', null, global);
goog.exportSymbol('proto.sliverpb.Ls', null, global);
goog.exportSymbol('proto.sliverpb.LsReq', null, global);
goog.exportSymbol('proto.sliverpb.MakeToken', null, global);
goog.exportSymbol('proto.sliverpb.MakeTokenReq', null, global);
goog.exportSymbol('proto.sliverpb.Migrate', null, global);
goog.exportSymbol('proto.sliverpb.Mkdir', null, global);
goog.exportSymbol('proto.sliverpb.MkdirReq', null, global);
goog.exportSymbol('proto.sliverpb.Mv', null, global);
goog.exportSymbol('proto.sliverpb.MvReq', null, global);
goog.exportSymbol('proto.sliverpb.NetConnPivot', null, global);
goog.exportSymbol('proto.sliverpb.NetInterface', null, global);
goog.exportSymbol('proto.sliverpb.Netstat', null, global);
goog.exportSymbol('proto.sliverpb.NetstatReq', null, global);
goog.exportSymbol('proto.sliverpb.OpenSession', null, global);
goog.exportSymbol('proto.sliverpb.PeerFailureType', null, global);
goog.exportSymbol('proto.sliverpb.Ping', null, global);
goog.exportSymbol('proto.sliverpb.PivotHello', null, global);
goog.exportSymbol('proto.sliverpb.PivotListener', null, global);
goog.exportSymbol('proto.sliverpb.PivotListeners', null, global);
goog.exportSymbol('proto.sliverpb.PivotListenersReq', null, global);
goog.exportSymbol('proto.sliverpb.PivotPeer', null, global);
goog.exportSymbol('proto.sliverpb.PivotPeerEnvelope', null, global);
goog.exportSymbol('proto.sliverpb.PivotPeerFailure', null, global);
goog.exportSymbol('proto.sliverpb.PivotPing', null, global);
goog.exportSymbol('proto.sliverpb.PivotServerKeyExchange', null, global);
goog.exportSymbol('proto.sliverpb.PivotStartListenerReq', null, global);
goog.exportSymbol('proto.sliverpb.PivotStopListenerReq', null, global);
goog.exportSymbol('proto.sliverpb.PivotType', null, global);
goog.exportSymbol('proto.sliverpb.PollInterval', null, global);
goog.exportSymbol('proto.sliverpb.PollIntervalReq', null, global);
goog.exportSymbol('proto.sliverpb.Portfwd', null, global);
goog.exportSymbol('proto.sliverpb.PortfwdReq', null, global);
goog.exportSymbol('proto.sliverpb.ProcessDump', null, global);
goog.exportSymbol('proto.sliverpb.ProcessDumpReq', null, global);
goog.exportSymbol('proto.sliverpb.Ps', null, global);
goog.exportSymbol('proto.sliverpb.PsReq', null, global);
goog.exportSymbol('proto.sliverpb.Pwd', null, global);
goog.exportSymbol('proto.sliverpb.PwdReq', null, global);
goog.exportSymbol('proto.sliverpb.Reconfigure', null, global);
goog.exportSymbol('proto.sliverpb.ReconfigureReq', null, global);
goog.exportSymbol('proto.sliverpb.Register', null, global);
goog.exportSymbol('proto.sliverpb.RegisterExtension', null, global);
goog.exportSymbol('proto.sliverpb.RegisterExtensionReq', null, global);
goog.exportSymbol('proto.sliverpb.RegistryCreateKey', null, global);
goog.exportSymbol('proto.sliverpb.RegistryCreateKeyReq', null, global);
goog.exportSymbol('proto.sliverpb.RegistryDeleteKey', null, global);
goog.exportSymbol('proto.sliverpb.RegistryDeleteKeyReq', null, global);
goog.exportSymbol('proto.sliverpb.RegistryListValuesReq', null, global);
goog.exportSymbol('proto.sliverpb.RegistryRead', null, global);
goog.exportSymbol('proto.sliverpb.RegistryReadReq', null, global);
goog.exportSymbol('proto.sliverpb.RegistrySubKeyList', null, global);
goog.exportSymbol('proto.sliverpb.RegistrySubKeyListReq', null, global);
goog.exportSymbol('proto.sliverpb.RegistryValuesList', null, global);
goog.exportSymbol('proto.sliverpb.RegistryWrite', null, global);
goog.exportSymbol('proto.sliverpb.RegistryWriteReq', null, global);
goog.exportSymbol('proto.sliverpb.RemoveServiceReq', null, global);
goog.exportSymbol('proto.sliverpb.RevToSelf', null, global);
goog.exportSymbol('proto.sliverpb.RevToSelfReq', null, global);
goog.exportSymbol('proto.sliverpb.Rm', null, global);
goog.exportSymbol('proto.sliverpb.RmReq', null, global);
goog.exportSymbol('proto.sliverpb.RunAs', null, global);
goog.exportSymbol('proto.sliverpb.RunAsReq', null, global);
goog.exportSymbol('proto.sliverpb.SSHCommand', null, global);
goog.exportSymbol('proto.sliverpb.SSHCommandReq', null, global);
goog.exportSymbol('proto.sliverpb.Screenshot', null, global);
goog.exportSymbol('proto.sliverpb.ScreenshotReq', null, global);
goog.exportSymbol('proto.sliverpb.ServiceInfo', null, global);
goog.exportSymbol('proto.sliverpb.ServiceInfoReq', null, global);
goog.exportSymbol('proto.sliverpb.SessionRegister', null, global);
goog.exportSymbol('proto.sliverpb.SetEnv', null, global);
goog.exportSymbol('proto.sliverpb.SetEnvReq', null, global);
goog.exportSymbol('proto.sliverpb.Shell', null, global);
goog.exportSymbol('proto.sliverpb.ShellReq', null, global);
goog.exportSymbol('proto.sliverpb.Sideload', null, global);
goog.exportSymbol('proto.sliverpb.SideloadReq', null, global);
goog.exportSymbol('proto.sliverpb.SockTabEntry', null, global);
goog.exportSymbol('proto.sliverpb.SockTabEntry.SockAddr', null, global);
goog.exportSymbol('proto.sliverpb.Socks', null, global);
goog.exportSymbol('proto.sliverpb.SocksData', null, global);
goog.exportSymbol('proto.sliverpb.SpawnDll', null, global);
goog.exportSymbol('proto.sliverpb.SpawnDllReq', null, global);
goog.exportSymbol('proto.sliverpb.StartServiceReq', null, global);
goog.exportSymbol('proto.sliverpb.StopServiceReq', null, global);
goog.exportSymbol('proto.sliverpb.Task', null, global);
goog.exportSymbol('proto.sliverpb.TaskReq', null, global);
goog.exportSymbol('proto.sliverpb.Terminate', null, global);
goog.exportSymbol('proto.sliverpb.TerminateReq', null, global);
goog.exportSymbol('proto.sliverpb.Tunnel', null, global);
goog.exportSymbol('proto.sliverpb.TunnelData', null, global);
goog.exportSymbol('proto.sliverpb.UnsetEnv', null, global);
goog.exportSymbol('proto.sliverpb.UnsetEnvReq', null, global);
goog.exportSymbol('proto.sliverpb.Upload', null, global);
goog.exportSymbol('proto.sliverpb.UploadReq', null, global);
goog.exportSymbol('proto.sliverpb.WGPortForward', null, global);
goog.exportSymbol('proto.sliverpb.WGPortForwardStartReq', null, global);
goog.exportSymbol('proto.sliverpb.WGPortForwardStopReq', null, global);
goog.exportSymbol('proto.sliverpb.WGSocks', null, global);
goog.exportSymbol('proto.sliverpb.WGSocksServer', null, global);
goog.exportSymbol('proto.sliverpb.WGSocksServers', null, global);
goog.exportSymbol('proto.sliverpb.WGSocksServersReq', null, global);
goog.exportSymbol('proto.sliverpb.WGSocksStartReq', null, global);
goog.exportSymbol('proto.sliverpb.WGSocksStopReq', null, global);
goog.exportSymbol('proto.sliverpb.WGTCPForwarder', null, global);
goog.exportSymbol('proto.sliverpb.WGTCPForwarders', null, global);
goog.exportSymbol('proto.sliverpb.WGTCPForwardersReq', null, global);
goog.exportSymbol('proto.sliverpb.WindowsPrivilegeEntry', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Envelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Envelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Envelope.displayName = 'proto.sliverpb.Envelope';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.BeaconTasks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.BeaconTasks.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.BeaconTasks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.BeaconTasks.displayName = 'proto.sliverpb.BeaconTasks';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Register = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Register, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Register.displayName = 'proto.sliverpb.Register';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.BeaconRegister = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.BeaconRegister, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.BeaconRegister.displayName = 'proto.sliverpb.BeaconRegister';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.SessionRegister = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.SessionRegister, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.SessionRegister.displayName = 'proto.sliverpb.SessionRegister';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.OpenSession = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.OpenSession.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.OpenSession, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.OpenSession.displayName = 'proto.sliverpb.OpenSession';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.CloseSession = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.CloseSession, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.CloseSession.displayName = 'proto.sliverpb.CloseSession';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Ping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Ping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Ping.displayName = 'proto.sliverpb.Ping';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.KillReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.KillReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.KillReq.displayName = 'proto.sliverpb.KillReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PsReq.displayName = 'proto.sliverpb.PsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Ps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.Ps.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.Ps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Ps.displayName = 'proto.sliverpb.Ps';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.TerminateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.TerminateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.TerminateReq.displayName = 'proto.sliverpb.TerminateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Terminate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Terminate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Terminate.displayName = 'proto.sliverpb.Terminate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.IfconfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.IfconfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.IfconfigReq.displayName = 'proto.sliverpb.IfconfigReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Ifconfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.Ifconfig.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.Ifconfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Ifconfig.displayName = 'proto.sliverpb.Ifconfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.NetInterface = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.NetInterface.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.NetInterface, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.NetInterface.displayName = 'proto.sliverpb.NetInterface';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.LsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.LsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.LsReq.displayName = 'proto.sliverpb.LsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Ls = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.Ls.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.Ls, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Ls.displayName = 'proto.sliverpb.Ls';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.FileInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.FileInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.FileInfo.displayName = 'proto.sliverpb.FileInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.CdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.CdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.CdReq.displayName = 'proto.sliverpb.CdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PwdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PwdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PwdReq.displayName = 'proto.sliverpb.PwdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Pwd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Pwd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Pwd.displayName = 'proto.sliverpb.Pwd';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RmReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RmReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RmReq.displayName = 'proto.sliverpb.RmReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Rm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Rm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Rm.displayName = 'proto.sliverpb.Rm';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.MvReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.MvReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.MvReq.displayName = 'proto.sliverpb.MvReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Mv = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Mv, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Mv.displayName = 'proto.sliverpb.Mv';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.MkdirReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.MkdirReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.MkdirReq.displayName = 'proto.sliverpb.MkdirReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Mkdir = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Mkdir, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Mkdir.displayName = 'proto.sliverpb.Mkdir';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.DownloadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.DownloadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.DownloadReq.displayName = 'proto.sliverpb.DownloadReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Download = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Download, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Download.displayName = 'proto.sliverpb.Download';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.UploadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.UploadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.UploadReq.displayName = 'proto.sliverpb.UploadReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Upload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Upload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Upload.displayName = 'proto.sliverpb.Upload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ProcessDumpReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.ProcessDumpReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ProcessDumpReq.displayName = 'proto.sliverpb.ProcessDumpReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ProcessDump = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.ProcessDump, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ProcessDump.displayName = 'proto.sliverpb.ProcessDump';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RunAsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RunAsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RunAsReq.displayName = 'proto.sliverpb.RunAsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RunAs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RunAs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RunAs.displayName = 'proto.sliverpb.RunAs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ImpersonateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.ImpersonateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ImpersonateReq.displayName = 'proto.sliverpb.ImpersonateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Impersonate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Impersonate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Impersonate.displayName = 'proto.sliverpb.Impersonate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RevToSelfReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RevToSelfReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RevToSelfReq.displayName = 'proto.sliverpb.RevToSelfReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RevToSelf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RevToSelf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RevToSelf.displayName = 'proto.sliverpb.RevToSelf';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.CurrentTokenOwnerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.CurrentTokenOwnerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.CurrentTokenOwnerReq.displayName = 'proto.sliverpb.CurrentTokenOwnerReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.CurrentTokenOwner = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.CurrentTokenOwner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.CurrentTokenOwner.displayName = 'proto.sliverpb.CurrentTokenOwner';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.InvokeGetSystemReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.InvokeGetSystemReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.InvokeGetSystemReq.displayName = 'proto.sliverpb.InvokeGetSystemReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.GetSystem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.GetSystem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.GetSystem.displayName = 'proto.sliverpb.GetSystem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.MakeTokenReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.MakeTokenReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.MakeTokenReq.displayName = 'proto.sliverpb.MakeTokenReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.MakeToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.MakeToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.MakeToken.displayName = 'proto.sliverpb.MakeToken';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.TaskReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.TaskReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.TaskReq.displayName = 'proto.sliverpb.TaskReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Task.displayName = 'proto.sliverpb.Task';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ExecuteAssemblyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.ExecuteAssemblyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ExecuteAssemblyReq.displayName = 'proto.sliverpb.ExecuteAssemblyReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.InvokeExecuteAssemblyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.InvokeExecuteAssemblyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.InvokeExecuteAssemblyReq.displayName = 'proto.sliverpb.InvokeExecuteAssemblyReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ExecuteAssembly = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.ExecuteAssembly, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ExecuteAssembly.displayName = 'proto.sliverpb.ExecuteAssembly';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.InvokeMigrateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.InvokeMigrateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.InvokeMigrateReq.displayName = 'proto.sliverpb.InvokeMigrateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Migrate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Migrate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Migrate.displayName = 'proto.sliverpb.Migrate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ExecuteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.ExecuteReq.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.ExecuteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ExecuteReq.displayName = 'proto.sliverpb.ExecuteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ExecuteTokenReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.ExecuteTokenReq.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.ExecuteTokenReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ExecuteTokenReq.displayName = 'proto.sliverpb.ExecuteTokenReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Execute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Execute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Execute.displayName = 'proto.sliverpb.Execute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.SideloadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.SideloadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.SideloadReq.displayName = 'proto.sliverpb.SideloadReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Sideload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Sideload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Sideload.displayName = 'proto.sliverpb.Sideload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.InvokeSpawnDllReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.InvokeSpawnDllReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.InvokeSpawnDllReq.displayName = 'proto.sliverpb.InvokeSpawnDllReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.SpawnDllReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.SpawnDllReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.SpawnDllReq.displayName = 'proto.sliverpb.SpawnDllReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.SpawnDll = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.SpawnDll, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.SpawnDll.displayName = 'proto.sliverpb.SpawnDll';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.NetstatReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.NetstatReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.NetstatReq.displayName = 'proto.sliverpb.NetstatReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.SockTabEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.SockTabEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.SockTabEntry.displayName = 'proto.sliverpb.SockTabEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.SockTabEntry.SockAddr = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.SockTabEntry.SockAddr, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.SockTabEntry.SockAddr.displayName = 'proto.sliverpb.SockTabEntry.SockAddr';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Netstat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.Netstat.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.Netstat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Netstat.displayName = 'proto.sliverpb.Netstat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.EnvReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.EnvReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.EnvReq.displayName = 'proto.sliverpb.EnvReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.EnvInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.EnvInfo.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.EnvInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.EnvInfo.displayName = 'proto.sliverpb.EnvInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.SetEnvReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.SetEnvReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.SetEnvReq.displayName = 'proto.sliverpb.SetEnvReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.SetEnv = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.SetEnv, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.SetEnv.displayName = 'proto.sliverpb.SetEnv';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.UnsetEnvReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.UnsetEnvReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.UnsetEnvReq.displayName = 'proto.sliverpb.UnsetEnvReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.UnsetEnv = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.UnsetEnv, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.UnsetEnv.displayName = 'proto.sliverpb.UnsetEnv';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.DNSSessionInit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.DNSSessionInit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.DNSSessionInit.displayName = 'proto.sliverpb.DNSSessionInit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.DNSPoll = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.DNSPoll.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.DNSPoll, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.DNSPoll.displayName = 'proto.sliverpb.DNSPoll';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.DNSBlockHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.DNSBlockHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.DNSBlockHeader.displayName = 'proto.sliverpb.DNSBlockHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.HTTPSessionInit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.HTTPSessionInit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.HTTPSessionInit.displayName = 'proto.sliverpb.HTTPSessionInit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ScreenshotReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.ScreenshotReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ScreenshotReq.displayName = 'proto.sliverpb.ScreenshotReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Screenshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Screenshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Screenshot.displayName = 'proto.sliverpb.Screenshot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.StartServiceReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.StartServiceReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.StartServiceReq.displayName = 'proto.sliverpb.StartServiceReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ServiceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.ServiceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ServiceInfo.displayName = 'proto.sliverpb.ServiceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ServiceInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.ServiceInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ServiceInfoReq.displayName = 'proto.sliverpb.ServiceInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.StopServiceReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.StopServiceReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.StopServiceReq.displayName = 'proto.sliverpb.StopServiceReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RemoveServiceReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RemoveServiceReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RemoveServiceReq.displayName = 'proto.sliverpb.RemoveServiceReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.BackdoorReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.BackdoorReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.BackdoorReq.displayName = 'proto.sliverpb.BackdoorReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Backdoor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Backdoor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Backdoor.displayName = 'proto.sliverpb.Backdoor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistryReadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegistryReadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistryReadReq.displayName = 'proto.sliverpb.RegistryReadReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistryRead = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegistryRead, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistryRead.displayName = 'proto.sliverpb.RegistryRead';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistryWriteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegistryWriteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistryWriteReq.displayName = 'proto.sliverpb.RegistryWriteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistryWrite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegistryWrite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistryWrite.displayName = 'proto.sliverpb.RegistryWrite';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistryCreateKeyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegistryCreateKeyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistryCreateKeyReq.displayName = 'proto.sliverpb.RegistryCreateKeyReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistryCreateKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegistryCreateKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistryCreateKey.displayName = 'proto.sliverpb.RegistryCreateKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistryDeleteKeyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegistryDeleteKeyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistryDeleteKeyReq.displayName = 'proto.sliverpb.RegistryDeleteKeyReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistryDeleteKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegistryDeleteKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistryDeleteKey.displayName = 'proto.sliverpb.RegistryDeleteKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistrySubKeyListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegistrySubKeyListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistrySubKeyListReq.displayName = 'proto.sliverpb.RegistrySubKeyListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistrySubKeyList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.RegistrySubKeyList.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.RegistrySubKeyList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistrySubKeyList.displayName = 'proto.sliverpb.RegistrySubKeyList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistryListValuesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegistryListValuesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistryListValuesReq.displayName = 'proto.sliverpb.RegistryListValuesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegistryValuesList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.RegistryValuesList.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.RegistryValuesList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegistryValuesList.displayName = 'proto.sliverpb.RegistryValuesList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Tunnel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Tunnel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Tunnel.displayName = 'proto.sliverpb.Tunnel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.TunnelData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.TunnelData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.TunnelData.displayName = 'proto.sliverpb.TunnelData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ShellReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.ShellReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ShellReq.displayName = 'proto.sliverpb.ShellReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Shell = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Shell, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Shell.displayName = 'proto.sliverpb.Shell';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PortfwdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PortfwdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PortfwdReq.displayName = 'proto.sliverpb.PortfwdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Portfwd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Portfwd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Portfwd.displayName = 'proto.sliverpb.Portfwd';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Socks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Socks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Socks.displayName = 'proto.sliverpb.Socks';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.SocksData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.SocksData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.SocksData.displayName = 'proto.sliverpb.SocksData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PivotStartListenerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.PivotStartListenerReq.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.PivotStartListenerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PivotStartListenerReq.displayName = 'proto.sliverpb.PivotStartListenerReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PivotStopListenerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PivotStopListenerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PivotStopListenerReq.displayName = 'proto.sliverpb.PivotStopListenerReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PivotListener = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.PivotListener.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.PivotListener, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PivotListener.displayName = 'proto.sliverpb.PivotListener';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PivotHello = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PivotHello, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PivotHello.displayName = 'proto.sliverpb.PivotHello';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PivotServerKeyExchange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PivotServerKeyExchange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PivotServerKeyExchange.displayName = 'proto.sliverpb.PivotServerKeyExchange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PivotPeer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PivotPeer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PivotPeer.displayName = 'proto.sliverpb.PivotPeer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PivotPeerEnvelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.PivotPeerEnvelope.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.PivotPeerEnvelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PivotPeerEnvelope.displayName = 'proto.sliverpb.PivotPeerEnvelope';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PivotPing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PivotPing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PivotPing.displayName = 'proto.sliverpb.PivotPing';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.NetConnPivot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.NetConnPivot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.NetConnPivot.displayName = 'proto.sliverpb.NetConnPivot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PivotPeerFailure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PivotPeerFailure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PivotPeerFailure.displayName = 'proto.sliverpb.PivotPeerFailure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PivotListenersReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PivotListenersReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PivotListenersReq.displayName = 'proto.sliverpb.PivotListenersReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PivotListeners = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.PivotListeners.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.PivotListeners, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PivotListeners.displayName = 'proto.sliverpb.PivotListeners';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGPortForwardStartReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.WGPortForwardStartReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGPortForwardStartReq.displayName = 'proto.sliverpb.WGPortForwardStartReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGPortForward = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.WGPortForward, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGPortForward.displayName = 'proto.sliverpb.WGPortForward';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGPortForwardStopReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.WGPortForwardStopReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGPortForwardStopReq.displayName = 'proto.sliverpb.WGPortForwardStopReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGSocksStartReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.WGSocksStartReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGSocksStartReq.displayName = 'proto.sliverpb.WGSocksStartReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGSocks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.WGSocks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGSocks.displayName = 'proto.sliverpb.WGSocks';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGSocksStopReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.WGSocksStopReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGSocksStopReq.displayName = 'proto.sliverpb.WGSocksStopReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGTCPForwardersReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.WGTCPForwardersReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGTCPForwardersReq.displayName = 'proto.sliverpb.WGTCPForwardersReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGSocksServersReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.WGSocksServersReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGSocksServersReq.displayName = 'proto.sliverpb.WGSocksServersReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGTCPForwarder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.WGTCPForwarder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGTCPForwarder.displayName = 'proto.sliverpb.WGTCPForwarder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGSocksServer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.WGSocksServer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGSocksServer.displayName = 'proto.sliverpb.WGSocksServer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGSocksServers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.WGSocksServers.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.WGSocksServers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGSocksServers.displayName = 'proto.sliverpb.WGSocksServers';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WGTCPForwarders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.WGTCPForwarders.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.WGTCPForwarders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WGTCPForwarders.displayName = 'proto.sliverpb.WGTCPForwarders';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ReconfigureReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.ReconfigureReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ReconfigureReq.displayName = 'proto.sliverpb.ReconfigureReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.Reconfigure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.Reconfigure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.Reconfigure.displayName = 'proto.sliverpb.Reconfigure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PollIntervalReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PollIntervalReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PollIntervalReq.displayName = 'proto.sliverpb.PollIntervalReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.PollInterval = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.PollInterval, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.PollInterval.displayName = 'proto.sliverpb.PollInterval';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.SSHCommandReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.SSHCommandReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.SSHCommandReq.displayName = 'proto.sliverpb.SSHCommandReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.SSHCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.SSHCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.SSHCommand.displayName = 'proto.sliverpb.SSHCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.GetPrivsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.GetPrivsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.GetPrivsReq.displayName = 'proto.sliverpb.GetPrivsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.WindowsPrivilegeEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.WindowsPrivilegeEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.WindowsPrivilegeEntry.displayName = 'proto.sliverpb.WindowsPrivilegeEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.GetPrivs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.GetPrivs.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.GetPrivs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.GetPrivs.displayName = 'proto.sliverpb.GetPrivs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegisterExtensionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegisterExtensionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegisterExtensionReq.displayName = 'proto.sliverpb.RegisterExtensionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.RegisterExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.RegisterExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.RegisterExtension.displayName = 'proto.sliverpb.RegisterExtension';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.CallExtensionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.CallExtensionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.CallExtensionReq.displayName = 'proto.sliverpb.CallExtensionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.CallExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.CallExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.CallExtension.displayName = 'proto.sliverpb.CallExtension';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ListExtensionsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sliverpb.ListExtensionsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ListExtensionsReq.displayName = 'proto.sliverpb.ListExtensionsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sliverpb.ListExtensions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sliverpb.ListExtensions.repeatedFields_, null);
};
goog.inherits(proto.sliverpb.ListExtensions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sliverpb.ListExtensions.displayName = 'proto.sliverpb.ListExtensions';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Envelope.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Envelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Envelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Envelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    data: msg.getData_asB64(),
    unknownmessagetype: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Envelope}
 */
proto.sliverpb.Envelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Envelope;
  return proto.sliverpb.Envelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Envelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Envelope}
 */
proto.sliverpb.Envelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnknownmessagetype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Envelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Envelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Envelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Envelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getUnknownmessagetype();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.sliverpb.Envelope.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Envelope} returns this
 */
proto.sliverpb.Envelope.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 Type = 2;
 * @return {number}
 */
proto.sliverpb.Envelope.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Envelope} returns this
 */
proto.sliverpb.Envelope.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes Data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.Envelope.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes Data = 3;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.Envelope.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.Envelope.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.Envelope} returns this
 */
proto.sliverpb.Envelope.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bool UnknownMessageType = 4;
 * @return {boolean}
 */
proto.sliverpb.Envelope.prototype.getUnknownmessagetype = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.Envelope} returns this
 */
proto.sliverpb.Envelope.prototype.setUnknownmessagetype = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.BeaconTasks.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.BeaconTasks.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.BeaconTasks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.BeaconTasks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.BeaconTasks.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.sliverpb.Envelope.toObject, includeInstance),
    nextcheckin: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.BeaconTasks}
 */
proto.sliverpb.BeaconTasks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.BeaconTasks;
  return proto.sliverpb.BeaconTasks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.BeaconTasks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.BeaconTasks}
 */
proto.sliverpb.BeaconTasks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.sliverpb.Envelope;
      reader.readMessage(value,proto.sliverpb.Envelope.deserializeBinaryFromReader);
      msg.addTasks(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextcheckin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.BeaconTasks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.BeaconTasks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.BeaconTasks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.BeaconTasks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sliverpb.Envelope.serializeBinaryToWriter
    );
  }
  f = message.getNextcheckin();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.sliverpb.BeaconTasks.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.BeaconTasks} returns this
 */
proto.sliverpb.BeaconTasks.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Envelope Tasks = 2;
 * @return {!Array<!proto.sliverpb.Envelope>}
 */
proto.sliverpb.BeaconTasks.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.sliverpb.Envelope>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sliverpb.Envelope, 2));
};


/**
 * @param {!Array<!proto.sliverpb.Envelope>} value
 * @return {!proto.sliverpb.BeaconTasks} returns this
*/
proto.sliverpb.BeaconTasks.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sliverpb.Envelope=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.Envelope}
 */
proto.sliverpb.BeaconTasks.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sliverpb.Envelope, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.BeaconTasks} returns this
 */
proto.sliverpb.BeaconTasks.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


/**
 * optional int64 NextCheckin = 3;
 * @return {number}
 */
proto.sliverpb.BeaconTasks.prototype.getNextcheckin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.BeaconTasks} returns this
 */
proto.sliverpb.BeaconTasks.prototype.setNextcheckin = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Register.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Register.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Register} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Register.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    username: jspb.Message.getFieldWithDefault(msg, 4, ""),
    uid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    gid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    os: jspb.Message.getFieldWithDefault(msg, 7, ""),
    arch: jspb.Message.getFieldWithDefault(msg, 8, ""),
    pid: jspb.Message.getFieldWithDefault(msg, 9, 0),
    filename: jspb.Message.getFieldWithDefault(msg, 10, ""),
    activec2: jspb.Message.getFieldWithDefault(msg, 11, ""),
    version: jspb.Message.getFieldWithDefault(msg, 12, ""),
    reconnectinterval: jspb.Message.getFieldWithDefault(msg, 13, 0),
    proxyurl: jspb.Message.getFieldWithDefault(msg, 14, ""),
    configid: jspb.Message.getFieldWithDefault(msg, 16, ""),
    peerid: jspb.Message.getFieldWithDefault(msg, 17, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Register}
 */
proto.sliverpb.Register.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Register;
  return proto.sliverpb.Register.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Register} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Register}
 */
proto.sliverpb.Register.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOs(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setArch(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivec2(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReconnectinterval(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setProxyurl(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigid(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPeerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Register.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Register.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Register} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Register.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getGid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOs();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getArch();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getActivec2();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getReconnectinterval();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getProxyurl();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getConfigid();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getPeerid();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Hostname = 2;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Uuid = 3;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Username = 4;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Uid = 5;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string Gid = 6;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getGid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setGid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string Os = 7;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getOs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setOs = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Arch = 8;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getArch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setArch = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 Pid = 9;
 * @return {number}
 */
proto.sliverpb.Register.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string Filename = 10;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string ActiveC2 = 11;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getActivec2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setActivec2 = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string Version = 12;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 ReconnectInterval = 13;
 * @return {number}
 */
proto.sliverpb.Register.prototype.getReconnectinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setReconnectinterval = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string ProxyURL = 14;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getProxyurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setProxyurl = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string ConfigID = 16;
 * @return {string}
 */
proto.sliverpb.Register.prototype.getConfigid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setConfigid = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional int64 PeerID = 17;
 * @return {number}
 */
proto.sliverpb.Register.prototype.getPeerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Register} returns this
 */
proto.sliverpb.Register.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.BeaconRegister.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.BeaconRegister.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.BeaconRegister} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.BeaconRegister.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    interval: jspb.Message.getFieldWithDefault(msg, 2, 0),
    jitter: jspb.Message.getFieldWithDefault(msg, 3, 0),
    register: (f = msg.getRegister()) && proto.sliverpb.Register.toObject(includeInstance, f),
    nextcheckin: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.BeaconRegister}
 */
proto.sliverpb.BeaconRegister.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.BeaconRegister;
  return proto.sliverpb.BeaconRegister.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.BeaconRegister} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.BeaconRegister}
 */
proto.sliverpb.BeaconRegister.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInterval(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setJitter(value);
      break;
    case 4:
      var value = new proto.sliverpb.Register;
      reader.readMessage(value,proto.sliverpb.Register.deserializeBinaryFromReader);
      msg.setRegister(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextcheckin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.BeaconRegister.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.BeaconRegister.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.BeaconRegister} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.BeaconRegister.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getJitter();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getRegister();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sliverpb.Register.serializeBinaryToWriter
    );
  }
  f = message.getNextcheckin();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.sliverpb.BeaconRegister.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.BeaconRegister} returns this
 */
proto.sliverpb.BeaconRegister.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 Interval = 2;
 * @return {number}
 */
proto.sliverpb.BeaconRegister.prototype.getInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.BeaconRegister} returns this
 */
proto.sliverpb.BeaconRegister.prototype.setInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 Jitter = 3;
 * @return {number}
 */
proto.sliverpb.BeaconRegister.prototype.getJitter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.BeaconRegister} returns this
 */
proto.sliverpb.BeaconRegister.prototype.setJitter = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Register Register = 4;
 * @return {?proto.sliverpb.Register}
 */
proto.sliverpb.BeaconRegister.prototype.getRegister = function() {
  return /** @type{?proto.sliverpb.Register} */ (
    jspb.Message.getWrapperField(this, proto.sliverpb.Register, 4));
};


/**
 * @param {?proto.sliverpb.Register|undefined} value
 * @return {!proto.sliverpb.BeaconRegister} returns this
*/
proto.sliverpb.BeaconRegister.prototype.setRegister = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.BeaconRegister} returns this
 */
proto.sliverpb.BeaconRegister.prototype.clearRegister = function() {
  return this.setRegister(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.BeaconRegister.prototype.hasRegister = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 NextCheckin = 5;
 * @return {number}
 */
proto.sliverpb.BeaconRegister.prototype.getNextcheckin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.BeaconRegister} returns this
 */
proto.sliverpb.BeaconRegister.prototype.setNextcheckin = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.SessionRegister.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.SessionRegister.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.SessionRegister} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SessionRegister.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    register: (f = msg.getRegister()) && proto.sliverpb.Register.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.SessionRegister}
 */
proto.sliverpb.SessionRegister.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.SessionRegister;
  return proto.sliverpb.SessionRegister.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.SessionRegister} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.SessionRegister}
 */
proto.sliverpb.SessionRegister.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.sliverpb.Register;
      reader.readMessage(value,proto.sliverpb.Register.deserializeBinaryFromReader);
      msg.setRegister(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.SessionRegister.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.SessionRegister.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.SessionRegister} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SessionRegister.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegister();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sliverpb.Register.serializeBinaryToWriter
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.sliverpb.SessionRegister.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SessionRegister} returns this
 */
proto.sliverpb.SessionRegister.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Register Register = 2;
 * @return {?proto.sliverpb.Register}
 */
proto.sliverpb.SessionRegister.prototype.getRegister = function() {
  return /** @type{?proto.sliverpb.Register} */ (
    jspb.Message.getWrapperField(this, proto.sliverpb.Register, 2));
};


/**
 * @param {?proto.sliverpb.Register|undefined} value
 * @return {!proto.sliverpb.SessionRegister} returns this
*/
proto.sliverpb.SessionRegister.prototype.setRegister = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SessionRegister} returns this
 */
proto.sliverpb.SessionRegister.prototype.clearRegister = function() {
  return this.setRegister(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SessionRegister.prototype.hasRegister = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.OpenSession.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.OpenSession.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.OpenSession.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.OpenSession} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.OpenSession.toObject = function(includeInstance, msg) {
  var f, obj = {
    c2sList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    delay: jspb.Message.getFieldWithDefault(msg, 2, 0),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.OpenSession}
 */
proto.sliverpb.OpenSession.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.OpenSession;
  return proto.sliverpb.OpenSession.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.OpenSession} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.OpenSession}
 */
proto.sliverpb.OpenSession.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addC2s(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDelay(value);
      break;
    case 8:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.OpenSession.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.OpenSession.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.OpenSession} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.OpenSession.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getC2sList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getDelay();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string C2s = 1;
 * @return {!Array<string>}
 */
proto.sliverpb.OpenSession.prototype.getC2sList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sliverpb.OpenSession} returns this
 */
proto.sliverpb.OpenSession.prototype.setC2sList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.OpenSession} returns this
 */
proto.sliverpb.OpenSession.prototype.addC2s = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.OpenSession} returns this
 */
proto.sliverpb.OpenSession.prototype.clearC2sList = function() {
  return this.setC2sList([]);
};


/**
 * optional int64 Delay = 2;
 * @return {number}
 */
proto.sliverpb.OpenSession.prototype.getDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.OpenSession} returns this
 */
proto.sliverpb.OpenSession.prototype.setDelay = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional commonpb.Response Response = 8;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.OpenSession.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 8));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.OpenSession} returns this
*/
proto.sliverpb.OpenSession.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.OpenSession} returns this
 */
proto.sliverpb.OpenSession.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.OpenSession.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.OpenSession.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.OpenSession} returns this
*/
proto.sliverpb.OpenSession.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.OpenSession} returns this
 */
proto.sliverpb.OpenSession.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.OpenSession.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.CloseSession.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.CloseSession.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.CloseSession} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CloseSession.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.CloseSession}
 */
proto.sliverpb.CloseSession.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.CloseSession;
  return proto.sliverpb.CloseSession.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.CloseSession} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.CloseSession}
 */
proto.sliverpb.CloseSession.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.CloseSession.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.CloseSession.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.CloseSession} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CloseSession.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 8;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.CloseSession.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 8));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.CloseSession} returns this
*/
proto.sliverpb.CloseSession.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.CloseSession} returns this
 */
proto.sliverpb.CloseSession.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.CloseSession.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.CloseSession.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.CloseSession} returns this
*/
proto.sliverpb.CloseSession.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.CloseSession} returns this
 */
proto.sliverpb.CloseSession.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.CloseSession.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Ping.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Ping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Ping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Ping.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Ping}
 */
proto.sliverpb.Ping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Ping;
  return proto.sliverpb.Ping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Ping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Ping}
 */
proto.sliverpb.Ping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNonce(value);
      break;
    case 8:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Ping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Ping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Ping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Ping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 Nonce = 1;
 * @return {number}
 */
proto.sliverpb.Ping.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Ping} returns this
 */
proto.sliverpb.Ping.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 8;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Ping.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 8));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Ping} returns this
*/
proto.sliverpb.Ping.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Ping} returns this
 */
proto.sliverpb.Ping.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Ping.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.Ping.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.Ping} returns this
*/
proto.sliverpb.Ping.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Ping} returns this
 */
proto.sliverpb.Ping.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Ping.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.KillReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.KillReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.KillReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.KillReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    force: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.KillReq}
 */
proto.sliverpb.KillReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.KillReq;
  return proto.sliverpb.KillReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.KillReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.KillReq}
 */
proto.sliverpb.KillReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.KillReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.KillReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.KillReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.KillReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getForce();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool Force = 1;
 * @return {boolean}
 */
proto.sliverpb.KillReq.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.KillReq} returns this
 */
proto.sliverpb.KillReq.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.KillReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.KillReq} returns this
*/
proto.sliverpb.KillReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.KillReq} returns this
 */
proto.sliverpb.KillReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.KillReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PsReq}
 */
proto.sliverpb.PsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PsReq;
  return proto.sliverpb.PsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PsReq}
 */
proto.sliverpb.PsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.PsReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.PsReq} returns this
*/
proto.sliverpb.PsReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.PsReq} returns this
 */
proto.sliverpb.PsReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.PsReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.Ps.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Ps.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Ps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Ps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Ps.toObject = function(includeInstance, msg) {
  var f, obj = {
    processesList: jspb.Message.toObjectList(msg.getProcessesList(),
    commonpb_common_pb.Process.toObject, includeInstance),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Ps}
 */
proto.sliverpb.Ps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Ps;
  return proto.sliverpb.Ps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Ps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Ps}
 */
proto.sliverpb.Ps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new commonpb_common_pb.Process;
      reader.readMessage(value,commonpb_common_pb.Process.deserializeBinaryFromReader);
      msg.addProcesses(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Ps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Ps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Ps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Ps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      commonpb_common_pb.Process.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated commonpb.Process Processes = 1;
 * @return {!Array<!proto.commonpb.Process>}
 */
proto.sliverpb.Ps.prototype.getProcessesList = function() {
  return /** @type{!Array<!proto.commonpb.Process>} */ (
    jspb.Message.getRepeatedWrapperField(this, commonpb_common_pb.Process, 1));
};


/**
 * @param {!Array<!proto.commonpb.Process>} value
 * @return {!proto.sliverpb.Ps} returns this
*/
proto.sliverpb.Ps.prototype.setProcessesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.commonpb.Process=} opt_value
 * @param {number=} opt_index
 * @return {!proto.commonpb.Process}
 */
proto.sliverpb.Ps.prototype.addProcesses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.commonpb.Process, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.Ps} returns this
 */
proto.sliverpb.Ps.prototype.clearProcessesList = function() {
  return this.setProcessesList([]);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Ps.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Ps} returns this
*/
proto.sliverpb.Ps.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Ps} returns this
 */
proto.sliverpb.Ps.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Ps.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.TerminateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.TerminateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.TerminateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.TerminateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.TerminateReq}
 */
proto.sliverpb.TerminateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.TerminateReq;
  return proto.sliverpb.TerminateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.TerminateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.TerminateReq}
 */
proto.sliverpb.TerminateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.TerminateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.TerminateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.TerminateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.TerminateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 Pid = 1;
 * @return {number}
 */
proto.sliverpb.TerminateReq.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.TerminateReq} returns this
 */
proto.sliverpb.TerminateReq.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool Force = 2;
 * @return {boolean}
 */
proto.sliverpb.TerminateReq.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.TerminateReq} returns this
 */
proto.sliverpb.TerminateReq.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.TerminateReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.TerminateReq} returns this
*/
proto.sliverpb.TerminateReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.TerminateReq} returns this
 */
proto.sliverpb.TerminateReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.TerminateReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Terminate.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Terminate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Terminate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Terminate.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Terminate}
 */
proto.sliverpb.Terminate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Terminate;
  return proto.sliverpb.Terminate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Terminate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Terminate}
 */
proto.sliverpb.Terminate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPid(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Terminate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Terminate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Terminate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Terminate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 Pid = 1;
 * @return {number}
 */
proto.sliverpb.Terminate.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Terminate} returns this
 */
proto.sliverpb.Terminate.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Terminate.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Terminate} returns this
*/
proto.sliverpb.Terminate.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Terminate} returns this
 */
proto.sliverpb.Terminate.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Terminate.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.IfconfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.IfconfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.IfconfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.IfconfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.IfconfigReq}
 */
proto.sliverpb.IfconfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.IfconfigReq;
  return proto.sliverpb.IfconfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.IfconfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.IfconfigReq}
 */
proto.sliverpb.IfconfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.IfconfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.IfconfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.IfconfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.IfconfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.IfconfigReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.IfconfigReq} returns this
*/
proto.sliverpb.IfconfigReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.IfconfigReq} returns this
 */
proto.sliverpb.IfconfigReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.IfconfigReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.Ifconfig.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Ifconfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Ifconfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Ifconfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Ifconfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    netinterfacesList: jspb.Message.toObjectList(msg.getNetinterfacesList(),
    proto.sliverpb.NetInterface.toObject, includeInstance),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Ifconfig}
 */
proto.sliverpb.Ifconfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Ifconfig;
  return proto.sliverpb.Ifconfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Ifconfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Ifconfig}
 */
proto.sliverpb.Ifconfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.NetInterface;
      reader.readMessage(value,proto.sliverpb.NetInterface.deserializeBinaryFromReader);
      msg.addNetinterfaces(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Ifconfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Ifconfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Ifconfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Ifconfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetinterfacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sliverpb.NetInterface.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NetInterface NetInterfaces = 1;
 * @return {!Array<!proto.sliverpb.NetInterface>}
 */
proto.sliverpb.Ifconfig.prototype.getNetinterfacesList = function() {
  return /** @type{!Array<!proto.sliverpb.NetInterface>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sliverpb.NetInterface, 1));
};


/**
 * @param {!Array<!proto.sliverpb.NetInterface>} value
 * @return {!proto.sliverpb.Ifconfig} returns this
*/
proto.sliverpb.Ifconfig.prototype.setNetinterfacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sliverpb.NetInterface=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.NetInterface}
 */
proto.sliverpb.Ifconfig.prototype.addNetinterfaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sliverpb.NetInterface, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.Ifconfig} returns this
 */
proto.sliverpb.Ifconfig.prototype.clearNetinterfacesList = function() {
  return this.setNetinterfacesList([]);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Ifconfig.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Ifconfig} returns this
*/
proto.sliverpb.Ifconfig.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Ifconfig} returns this
 */
proto.sliverpb.Ifconfig.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Ifconfig.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.NetInterface.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.NetInterface.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.NetInterface.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.NetInterface} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.NetInterface.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    mac: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ipaddressesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.NetInterface}
 */
proto.sliverpb.NetInterface.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.NetInterface;
  return proto.sliverpb.NetInterface.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.NetInterface} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.NetInterface}
 */
proto.sliverpb.NetInterface.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMac(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addIpaddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.NetInterface.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.NetInterface.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.NetInterface} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.NetInterface.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMac();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIpaddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional int32 Index = 1;
 * @return {number}
 */
proto.sliverpb.NetInterface.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.NetInterface} returns this
 */
proto.sliverpb.NetInterface.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.sliverpb.NetInterface.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.NetInterface} returns this
 */
proto.sliverpb.NetInterface.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string MAC = 3;
 * @return {string}
 */
proto.sliverpb.NetInterface.prototype.getMac = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.NetInterface} returns this
 */
proto.sliverpb.NetInterface.prototype.setMac = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string IPAddresses = 4;
 * @return {!Array<string>}
 */
proto.sliverpb.NetInterface.prototype.getIpaddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sliverpb.NetInterface} returns this
 */
proto.sliverpb.NetInterface.prototype.setIpaddressesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.NetInterface} returns this
 */
proto.sliverpb.NetInterface.prototype.addIpaddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.NetInterface} returns this
 */
proto.sliverpb.NetInterface.prototype.clearIpaddressesList = function() {
  return this.setIpaddressesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.LsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.LsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.LsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.LsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.LsReq}
 */
proto.sliverpb.LsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.LsReq;
  return proto.sliverpb.LsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.LsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.LsReq}
 */
proto.sliverpb.LsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.LsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.LsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.LsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.LsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.LsReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.LsReq} returns this
 */
proto.sliverpb.LsReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.LsReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.LsReq} returns this
*/
proto.sliverpb.LsReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.LsReq} returns this
 */
proto.sliverpb.LsReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.LsReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.Ls.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Ls.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Ls.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Ls} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Ls.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    exists: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    filesList: jspb.Message.toObjectList(msg.getFilesList(),
    proto.sliverpb.FileInfo.toObject, includeInstance),
    timezone: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timezoneoffset: jspb.Message.getFieldWithDefault(msg, 5, 0),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Ls}
 */
proto.sliverpb.Ls.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Ls;
  return proto.sliverpb.Ls.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Ls} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Ls}
 */
proto.sliverpb.Ls.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExists(value);
      break;
    case 3:
      var value = new proto.sliverpb.FileInfo;
      reader.readMessage(value,proto.sliverpb.FileInfo.deserializeBinaryFromReader);
      msg.addFiles(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimezoneoffset(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Ls.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Ls.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Ls} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Ls.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExists();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sliverpb.FileInfo.serializeBinaryToWriter
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimezoneoffset();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.Ls.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Ls} returns this
 */
proto.sliverpb.Ls.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool Exists = 2;
 * @return {boolean}
 */
proto.sliverpb.Ls.prototype.getExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.Ls} returns this
 */
proto.sliverpb.Ls.prototype.setExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated FileInfo Files = 3;
 * @return {!Array<!proto.sliverpb.FileInfo>}
 */
proto.sliverpb.Ls.prototype.getFilesList = function() {
  return /** @type{!Array<!proto.sliverpb.FileInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sliverpb.FileInfo, 3));
};


/**
 * @param {!Array<!proto.sliverpb.FileInfo>} value
 * @return {!proto.sliverpb.Ls} returns this
*/
proto.sliverpb.Ls.prototype.setFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sliverpb.FileInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.FileInfo}
 */
proto.sliverpb.Ls.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sliverpb.FileInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.Ls} returns this
 */
proto.sliverpb.Ls.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};


/**
 * optional string timezone = 4;
 * @return {string}
 */
proto.sliverpb.Ls.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Ls} returns this
 */
proto.sliverpb.Ls.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 timezoneOffset = 5;
 * @return {number}
 */
proto.sliverpb.Ls.prototype.getTimezoneoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Ls} returns this
 */
proto.sliverpb.Ls.prototype.setTimezoneoffset = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Ls.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Ls} returns this
*/
proto.sliverpb.Ls.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Ls} returns this
 */
proto.sliverpb.Ls.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Ls.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.FileInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.FileInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.FileInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.FileInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isdir: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0),
    modtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    mode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    link: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.FileInfo}
 */
proto.sliverpb.FileInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.FileInfo;
  return proto.sliverpb.FileInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.FileInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.FileInfo}
 */
proto.sliverpb.FileInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdir(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setModtime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.FileInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.FileInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.FileInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.FileInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsdir();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getModtime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getMode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.sliverpb.FileInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.FileInfo} returns this
 */
proto.sliverpb.FileInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool IsDir = 2;
 * @return {boolean}
 */
proto.sliverpb.FileInfo.prototype.getIsdir = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.FileInfo} returns this
 */
proto.sliverpb.FileInfo.prototype.setIsdir = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 Size = 3;
 * @return {number}
 */
proto.sliverpb.FileInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.FileInfo} returns this
 */
proto.sliverpb.FileInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 ModTime = 4;
 * @return {number}
 */
proto.sliverpb.FileInfo.prototype.getModtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.FileInfo} returns this
 */
proto.sliverpb.FileInfo.prototype.setModtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string Mode = 5;
 * @return {string}
 */
proto.sliverpb.FileInfo.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.FileInfo} returns this
 */
proto.sliverpb.FileInfo.prototype.setMode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string Link = 6;
 * @return {string}
 */
proto.sliverpb.FileInfo.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.FileInfo} returns this
 */
proto.sliverpb.FileInfo.prototype.setLink = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.CdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.CdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.CdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.CdReq}
 */
proto.sliverpb.CdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.CdReq;
  return proto.sliverpb.CdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.CdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.CdReq}
 */
proto.sliverpb.CdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.CdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.CdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.CdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.CdReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.CdReq} returns this
 */
proto.sliverpb.CdReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.CdReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.CdReq} returns this
*/
proto.sliverpb.CdReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.CdReq} returns this
 */
proto.sliverpb.CdReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.CdReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PwdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PwdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PwdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PwdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PwdReq}
 */
proto.sliverpb.PwdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PwdReq;
  return proto.sliverpb.PwdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PwdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PwdReq}
 */
proto.sliverpb.PwdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PwdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PwdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PwdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PwdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.PwdReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.PwdReq} returns this
*/
proto.sliverpb.PwdReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.PwdReq} returns this
 */
proto.sliverpb.PwdReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.PwdReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Pwd.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Pwd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Pwd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Pwd.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Pwd}
 */
proto.sliverpb.Pwd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Pwd;
  return proto.sliverpb.Pwd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Pwd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Pwd}
 */
proto.sliverpb.Pwd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Pwd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Pwd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Pwd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Pwd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.Pwd.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Pwd} returns this
 */
proto.sliverpb.Pwd.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Pwd.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Pwd} returns this
*/
proto.sliverpb.Pwd.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Pwd} returns this
 */
proto.sliverpb.Pwd.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Pwd.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RmReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RmReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RmReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RmReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recursive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RmReq}
 */
proto.sliverpb.RmReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RmReq;
  return proto.sliverpb.RmReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RmReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RmReq}
 */
proto.sliverpb.RmReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecursive(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RmReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RmReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RmReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RmReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecursive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.RmReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RmReq} returns this
 */
proto.sliverpb.RmReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool Recursive = 2;
 * @return {boolean}
 */
proto.sliverpb.RmReq.prototype.getRecursive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.RmReq} returns this
 */
proto.sliverpb.RmReq.prototype.setRecursive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool Force = 3;
 * @return {boolean}
 */
proto.sliverpb.RmReq.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.RmReq} returns this
 */
proto.sliverpb.RmReq.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.RmReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.RmReq} returns this
*/
proto.sliverpb.RmReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RmReq} returns this
 */
proto.sliverpb.RmReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RmReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Rm.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Rm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Rm} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Rm.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Rm}
 */
proto.sliverpb.Rm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Rm;
  return proto.sliverpb.Rm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Rm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Rm}
 */
proto.sliverpb.Rm.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Rm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Rm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Rm} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Rm.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.Rm.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Rm} returns this
 */
proto.sliverpb.Rm.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Rm.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Rm} returns this
*/
proto.sliverpb.Rm.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Rm} returns this
 */
proto.sliverpb.Rm.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Rm.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.MvReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.MvReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.MvReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.MvReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    src: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dst: jspb.Message.getFieldWithDefault(msg, 2, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.MvReq}
 */
proto.sliverpb.MvReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.MvReq;
  return proto.sliverpb.MvReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.MvReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.MvReq}
 */
proto.sliverpb.MvReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrc(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDst(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.MvReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.MvReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.MvReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.MvReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrc();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDst();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Src = 1;
 * @return {string}
 */
proto.sliverpb.MvReq.prototype.getSrc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.MvReq} returns this
 */
proto.sliverpb.MvReq.prototype.setSrc = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Dst = 2;
 * @return {string}
 */
proto.sliverpb.MvReq.prototype.getDst = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.MvReq} returns this
 */
proto.sliverpb.MvReq.prototype.setDst = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.MvReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.MvReq} returns this
*/
proto.sliverpb.MvReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.MvReq} returns this
 */
proto.sliverpb.MvReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.MvReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Mv.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Mv.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Mv} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Mv.toObject = function(includeInstance, msg) {
  var f, obj = {
    src: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dst: jspb.Message.getFieldWithDefault(msg, 2, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Mv}
 */
proto.sliverpb.Mv.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Mv;
  return proto.sliverpb.Mv.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Mv} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Mv}
 */
proto.sliverpb.Mv.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrc(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDst(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Mv.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Mv.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Mv} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Mv.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrc();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDst();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Src = 1;
 * @return {string}
 */
proto.sliverpb.Mv.prototype.getSrc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Mv} returns this
 */
proto.sliverpb.Mv.prototype.setSrc = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Dst = 2;
 * @return {string}
 */
proto.sliverpb.Mv.prototype.getDst = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Mv} returns this
 */
proto.sliverpb.Mv.prototype.setDst = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Mv.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Mv} returns this
*/
proto.sliverpb.Mv.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Mv} returns this
 */
proto.sliverpb.Mv.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Mv.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.MkdirReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.MkdirReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.MkdirReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.MkdirReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.MkdirReq}
 */
proto.sliverpb.MkdirReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.MkdirReq;
  return proto.sliverpb.MkdirReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.MkdirReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.MkdirReq}
 */
proto.sliverpb.MkdirReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.MkdirReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.MkdirReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.MkdirReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.MkdirReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.MkdirReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.MkdirReq} returns this
 */
proto.sliverpb.MkdirReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.MkdirReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.MkdirReq} returns this
*/
proto.sliverpb.MkdirReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.MkdirReq} returns this
 */
proto.sliverpb.MkdirReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.MkdirReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Mkdir.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Mkdir.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Mkdir} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Mkdir.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Mkdir}
 */
proto.sliverpb.Mkdir.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Mkdir;
  return proto.sliverpb.Mkdir.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Mkdir} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Mkdir}
 */
proto.sliverpb.Mkdir.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Mkdir.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Mkdir.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Mkdir} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Mkdir.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.Mkdir.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Mkdir} returns this
 */
proto.sliverpb.Mkdir.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Mkdir.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Mkdir} returns this
*/
proto.sliverpb.Mkdir.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Mkdir} returns this
 */
proto.sliverpb.Mkdir.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Mkdir.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.DownloadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.DownloadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.DownloadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.DownloadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    start: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stop: jspb.Message.getFieldWithDefault(msg, 3, 0),
    recurse: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.DownloadReq}
 */
proto.sliverpb.DownloadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.DownloadReq;
  return proto.sliverpb.DownloadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.DownloadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.DownloadReq}
 */
proto.sliverpb.DownloadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStart(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStop(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecurse(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.DownloadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.DownloadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.DownloadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.DownloadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getStop();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getRecurse();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.DownloadReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.DownloadReq} returns this
 */
proto.sliverpb.DownloadReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 Start = 2;
 * @return {number}
 */
proto.sliverpb.DownloadReq.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.DownloadReq} returns this
 */
proto.sliverpb.DownloadReq.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 Stop = 3;
 * @return {number}
 */
proto.sliverpb.DownloadReq.prototype.getStop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.DownloadReq} returns this
 */
proto.sliverpb.DownloadReq.prototype.setStop = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool Recurse = 4;
 * @return {boolean}
 */
proto.sliverpb.DownloadReq.prototype.getRecurse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.DownloadReq} returns this
 */
proto.sliverpb.DownloadReq.prototype.setRecurse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.DownloadReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.DownloadReq} returns this
*/
proto.sliverpb.DownloadReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.DownloadReq} returns this
 */
proto.sliverpb.DownloadReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.DownloadReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Download.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Download.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Download} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Download.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    encoder: jspb.Message.getFieldWithDefault(msg, 2, ""),
    exists: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    start: jspb.Message.getFieldWithDefault(msg, 4, 0),
    stop: jspb.Message.getFieldWithDefault(msg, 5, 0),
    data: msg.getData_asB64(),
    isdir: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    readfiles: jspb.Message.getFieldWithDefault(msg, 8, 0),
    unreadablefiles: jspb.Message.getFieldWithDefault(msg, 10, 0),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Download}
 */
proto.sliverpb.Download.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Download;
  return proto.sliverpb.Download.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Download} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Download}
 */
proto.sliverpb.Download.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoder(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExists(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStart(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStop(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdir(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReadfiles(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUnreadablefiles(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Download.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Download.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Download} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Download.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEncoder();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExists();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getStop();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getIsdir();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getReadfiles();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getUnreadablefiles();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.Download.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Download} returns this
 */
proto.sliverpb.Download.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Encoder = 2;
 * @return {string}
 */
proto.sliverpb.Download.prototype.getEncoder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Download} returns this
 */
proto.sliverpb.Download.prototype.setEncoder = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool Exists = 3;
 * @return {boolean}
 */
proto.sliverpb.Download.prototype.getExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.Download} returns this
 */
proto.sliverpb.Download.prototype.setExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int64 Start = 4;
 * @return {number}
 */
proto.sliverpb.Download.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Download} returns this
 */
proto.sliverpb.Download.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 Stop = 5;
 * @return {number}
 */
proto.sliverpb.Download.prototype.getStop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Download} returns this
 */
proto.sliverpb.Download.prototype.setStop = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bytes Data = 6;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.Download.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes Data = 6;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.Download.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.Download.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.Download} returns this
 */
proto.sliverpb.Download.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bool IsDir = 7;
 * @return {boolean}
 */
proto.sliverpb.Download.prototype.getIsdir = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.Download} returns this
 */
proto.sliverpb.Download.prototype.setIsdir = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional int32 ReadFiles = 8;
 * @return {number}
 */
proto.sliverpb.Download.prototype.getReadfiles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Download} returns this
 */
proto.sliverpb.Download.prototype.setReadfiles = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 UnreadableFiles = 10;
 * @return {number}
 */
proto.sliverpb.Download.prototype.getUnreadablefiles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Download} returns this
 */
proto.sliverpb.Download.prototype.setUnreadablefiles = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Download.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Download} returns this
*/
proto.sliverpb.Download.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Download} returns this
 */
proto.sliverpb.Download.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Download.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.UploadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.UploadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.UploadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.UploadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    encoder: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: msg.getData_asB64(),
    isioc: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.UploadReq}
 */
proto.sliverpb.UploadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.UploadReq;
  return proto.sliverpb.UploadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.UploadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.UploadReq}
 */
proto.sliverpb.UploadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoder(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsioc(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.UploadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.UploadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.UploadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.UploadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEncoder();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getIsioc();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.UploadReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.UploadReq} returns this
 */
proto.sliverpb.UploadReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Encoder = 2;
 * @return {string}
 */
proto.sliverpb.UploadReq.prototype.getEncoder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.UploadReq} returns this
 */
proto.sliverpb.UploadReq.prototype.setEncoder = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes Data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.UploadReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes Data = 3;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.UploadReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.UploadReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.UploadReq} returns this
 */
proto.sliverpb.UploadReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bool IsIOC = 4;
 * @return {boolean}
 */
proto.sliverpb.UploadReq.prototype.getIsioc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.UploadReq} returns this
 */
proto.sliverpb.UploadReq.prototype.setIsioc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.UploadReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.UploadReq} returns this
*/
proto.sliverpb.UploadReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.UploadReq} returns this
 */
proto.sliverpb.UploadReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.UploadReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Upload.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Upload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Upload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Upload.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Upload}
 */
proto.sliverpb.Upload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Upload;
  return proto.sliverpb.Upload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Upload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Upload}
 */
proto.sliverpb.Upload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Upload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Upload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Upload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Upload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.Upload.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Upload} returns this
 */
proto.sliverpb.Upload.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Upload.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Upload} returns this
*/
proto.sliverpb.Upload.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Upload} returns this
 */
proto.sliverpb.Upload.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Upload.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ProcessDumpReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ProcessDumpReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ProcessDumpReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ProcessDumpReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timeout: jspb.Message.getFieldWithDefault(msg, 2, 0),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ProcessDumpReq}
 */
proto.sliverpb.ProcessDumpReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ProcessDumpReq;
  return proto.sliverpb.ProcessDumpReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ProcessDumpReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ProcessDumpReq}
 */
proto.sliverpb.ProcessDumpReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeout(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ProcessDumpReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ProcessDumpReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ProcessDumpReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ProcessDumpReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 Pid = 1;
 * @return {number}
 */
proto.sliverpb.ProcessDumpReq.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.ProcessDumpReq} returns this
 */
proto.sliverpb.ProcessDumpReq.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Timeout = 2;
 * @return {number}
 */
proto.sliverpb.ProcessDumpReq.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.ProcessDumpReq} returns this
 */
proto.sliverpb.ProcessDumpReq.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.ProcessDumpReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.ProcessDumpReq} returns this
*/
proto.sliverpb.ProcessDumpReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ProcessDumpReq} returns this
 */
proto.sliverpb.ProcessDumpReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ProcessDumpReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ProcessDump.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ProcessDump.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ProcessDump} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ProcessDump.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ProcessDump}
 */
proto.sliverpb.ProcessDump.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ProcessDump;
  return proto.sliverpb.ProcessDump.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ProcessDump} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ProcessDump}
 */
proto.sliverpb.ProcessDump.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ProcessDump.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ProcessDump.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ProcessDump} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ProcessDump.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.ProcessDump.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.ProcessDump.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.ProcessDump.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.ProcessDump} returns this
 */
proto.sliverpb.ProcessDump.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.ProcessDump.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.ProcessDump} returns this
*/
proto.sliverpb.ProcessDump.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ProcessDump} returns this
 */
proto.sliverpb.ProcessDump.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ProcessDump.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RunAsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RunAsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RunAsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RunAsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    processname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    args: jspb.Message.getFieldWithDefault(msg, 3, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RunAsReq}
 */
proto.sliverpb.RunAsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RunAsReq;
  return proto.sliverpb.RunAsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RunAsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RunAsReq}
 */
proto.sliverpb.RunAsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArgs(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RunAsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RunAsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RunAsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RunAsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProcessname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArgs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Username = 1;
 * @return {string}
 */
proto.sliverpb.RunAsReq.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RunAsReq} returns this
 */
proto.sliverpb.RunAsReq.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ProcessName = 2;
 * @return {string}
 */
proto.sliverpb.RunAsReq.prototype.getProcessname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RunAsReq} returns this
 */
proto.sliverpb.RunAsReq.prototype.setProcessname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Args = 3;
 * @return {string}
 */
proto.sliverpb.RunAsReq.prototype.getArgs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RunAsReq} returns this
 */
proto.sliverpb.RunAsReq.prototype.setArgs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.RunAsReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.RunAsReq} returns this
*/
proto.sliverpb.RunAsReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RunAsReq} returns this
 */
proto.sliverpb.RunAsReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RunAsReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RunAs.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RunAs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RunAs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RunAs.toObject = function(includeInstance, msg) {
  var f, obj = {
    output: jspb.Message.getFieldWithDefault(msg, 1, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RunAs}
 */
proto.sliverpb.RunAs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RunAs;
  return proto.sliverpb.RunAs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RunAs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RunAs}
 */
proto.sliverpb.RunAs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutput(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RunAs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RunAs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RunAs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RunAs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutput();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Output = 1;
 * @return {string}
 */
proto.sliverpb.RunAs.prototype.getOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RunAs} returns this
 */
proto.sliverpb.RunAs.prototype.setOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.RunAs.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.RunAs} returns this
*/
proto.sliverpb.RunAs.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RunAs} returns this
 */
proto.sliverpb.RunAs.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RunAs.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ImpersonateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ImpersonateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ImpersonateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ImpersonateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ImpersonateReq}
 */
proto.sliverpb.ImpersonateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ImpersonateReq;
  return proto.sliverpb.ImpersonateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ImpersonateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ImpersonateReq}
 */
proto.sliverpb.ImpersonateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ImpersonateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ImpersonateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ImpersonateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ImpersonateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Username = 1;
 * @return {string}
 */
proto.sliverpb.ImpersonateReq.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ImpersonateReq} returns this
 */
proto.sliverpb.ImpersonateReq.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.ImpersonateReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.ImpersonateReq} returns this
*/
proto.sliverpb.ImpersonateReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ImpersonateReq} returns this
 */
proto.sliverpb.ImpersonateReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ImpersonateReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Impersonate.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Impersonate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Impersonate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Impersonate.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Impersonate}
 */
proto.sliverpb.Impersonate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Impersonate;
  return proto.sliverpb.Impersonate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Impersonate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Impersonate}
 */
proto.sliverpb.Impersonate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Impersonate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Impersonate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Impersonate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Impersonate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Impersonate.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Impersonate} returns this
*/
proto.sliverpb.Impersonate.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Impersonate} returns this
 */
proto.sliverpb.Impersonate.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Impersonate.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RevToSelfReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RevToSelfReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RevToSelfReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RevToSelfReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RevToSelfReq}
 */
proto.sliverpb.RevToSelfReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RevToSelfReq;
  return proto.sliverpb.RevToSelfReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RevToSelfReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RevToSelfReq}
 */
proto.sliverpb.RevToSelfReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RevToSelfReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RevToSelfReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RevToSelfReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RevToSelfReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.RevToSelfReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.RevToSelfReq} returns this
*/
proto.sliverpb.RevToSelfReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RevToSelfReq} returns this
 */
proto.sliverpb.RevToSelfReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RevToSelfReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RevToSelf.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RevToSelf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RevToSelf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RevToSelf.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RevToSelf}
 */
proto.sliverpb.RevToSelf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RevToSelf;
  return proto.sliverpb.RevToSelf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RevToSelf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RevToSelf}
 */
proto.sliverpb.RevToSelf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RevToSelf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RevToSelf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RevToSelf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RevToSelf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.RevToSelf.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.RevToSelf} returns this
*/
proto.sliverpb.RevToSelf.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RevToSelf} returns this
 */
proto.sliverpb.RevToSelf.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RevToSelf.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.CurrentTokenOwnerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.CurrentTokenOwnerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.CurrentTokenOwnerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CurrentTokenOwnerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.CurrentTokenOwnerReq}
 */
proto.sliverpb.CurrentTokenOwnerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.CurrentTokenOwnerReq;
  return proto.sliverpb.CurrentTokenOwnerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.CurrentTokenOwnerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.CurrentTokenOwnerReq}
 */
proto.sliverpb.CurrentTokenOwnerReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.CurrentTokenOwnerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.CurrentTokenOwnerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.CurrentTokenOwnerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CurrentTokenOwnerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.CurrentTokenOwnerReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.CurrentTokenOwnerReq} returns this
*/
proto.sliverpb.CurrentTokenOwnerReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.CurrentTokenOwnerReq} returns this
 */
proto.sliverpb.CurrentTokenOwnerReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.CurrentTokenOwnerReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.CurrentTokenOwner.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.CurrentTokenOwner.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.CurrentTokenOwner} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CurrentTokenOwner.toObject = function(includeInstance, msg) {
  var f, obj = {
    output: jspb.Message.getFieldWithDefault(msg, 1, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.CurrentTokenOwner}
 */
proto.sliverpb.CurrentTokenOwner.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.CurrentTokenOwner;
  return proto.sliverpb.CurrentTokenOwner.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.CurrentTokenOwner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.CurrentTokenOwner}
 */
proto.sliverpb.CurrentTokenOwner.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutput(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.CurrentTokenOwner.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.CurrentTokenOwner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.CurrentTokenOwner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CurrentTokenOwner.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutput();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Output = 1;
 * @return {string}
 */
proto.sliverpb.CurrentTokenOwner.prototype.getOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.CurrentTokenOwner} returns this
 */
proto.sliverpb.CurrentTokenOwner.prototype.setOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.CurrentTokenOwner.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.CurrentTokenOwner} returns this
*/
proto.sliverpb.CurrentTokenOwner.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.CurrentTokenOwner} returns this
 */
proto.sliverpb.CurrentTokenOwner.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.CurrentTokenOwner.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.InvokeGetSystemReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.InvokeGetSystemReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.InvokeGetSystemReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.InvokeGetSystemReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    hostingprocess: jspb.Message.getFieldWithDefault(msg, 2, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.InvokeGetSystemReq}
 */
proto.sliverpb.InvokeGetSystemReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.InvokeGetSystemReq;
  return proto.sliverpb.InvokeGetSystemReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.InvokeGetSystemReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.InvokeGetSystemReq}
 */
proto.sliverpb.InvokeGetSystemReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostingprocess(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.InvokeGetSystemReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.InvokeGetSystemReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.InvokeGetSystemReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.InvokeGetSystemReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getHostingprocess();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.InvokeGetSystemReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.InvokeGetSystemReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.InvokeGetSystemReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.InvokeGetSystemReq} returns this
 */
proto.sliverpb.InvokeGetSystemReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string HostingProcess = 2;
 * @return {string}
 */
proto.sliverpb.InvokeGetSystemReq.prototype.getHostingprocess = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.InvokeGetSystemReq} returns this
 */
proto.sliverpb.InvokeGetSystemReq.prototype.setHostingprocess = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.InvokeGetSystemReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.InvokeGetSystemReq} returns this
*/
proto.sliverpb.InvokeGetSystemReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.InvokeGetSystemReq} returns this
 */
proto.sliverpb.InvokeGetSystemReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.InvokeGetSystemReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.GetSystem.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.GetSystem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.GetSystem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.GetSystem.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.GetSystem}
 */
proto.sliverpb.GetSystem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.GetSystem;
  return proto.sliverpb.GetSystem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.GetSystem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.GetSystem}
 */
proto.sliverpb.GetSystem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.GetSystem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.GetSystem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.GetSystem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.GetSystem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.GetSystem.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.GetSystem} returns this
*/
proto.sliverpb.GetSystem.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.GetSystem} returns this
 */
proto.sliverpb.GetSystem.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.GetSystem.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.MakeTokenReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.MakeTokenReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.MakeTokenReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.MakeTokenReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    domain: jspb.Message.getFieldWithDefault(msg, 3, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.MakeTokenReq}
 */
proto.sliverpb.MakeTokenReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.MakeTokenReq;
  return proto.sliverpb.MakeTokenReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.MakeTokenReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.MakeTokenReq}
 */
proto.sliverpb.MakeTokenReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.MakeTokenReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.MakeTokenReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.MakeTokenReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.MakeTokenReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Username = 1;
 * @return {string}
 */
proto.sliverpb.MakeTokenReq.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.MakeTokenReq} returns this
 */
proto.sliverpb.MakeTokenReq.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Password = 2;
 * @return {string}
 */
proto.sliverpb.MakeTokenReq.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.MakeTokenReq} returns this
 */
proto.sliverpb.MakeTokenReq.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Domain = 3;
 * @return {string}
 */
proto.sliverpb.MakeTokenReq.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.MakeTokenReq} returns this
 */
proto.sliverpb.MakeTokenReq.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.MakeTokenReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.MakeTokenReq} returns this
*/
proto.sliverpb.MakeTokenReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.MakeTokenReq} returns this
 */
proto.sliverpb.MakeTokenReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.MakeTokenReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.MakeToken.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.MakeToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.MakeToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.MakeToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.MakeToken}
 */
proto.sliverpb.MakeToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.MakeToken;
  return proto.sliverpb.MakeToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.MakeToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.MakeToken}
 */
proto.sliverpb.MakeToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.MakeToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.MakeToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.MakeToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.MakeToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.MakeToken.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.MakeToken} returns this
*/
proto.sliverpb.MakeToken.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.MakeToken} returns this
 */
proto.sliverpb.MakeToken.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.MakeToken.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.TaskReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.TaskReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.TaskReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.TaskReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    encoder: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rwxpages: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    pid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    data: msg.getData_asB64(),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.TaskReq}
 */
proto.sliverpb.TaskReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.TaskReq;
  return proto.sliverpb.TaskReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.TaskReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.TaskReq}
 */
proto.sliverpb.TaskReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoder(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRwxpages(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.TaskReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.TaskReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.TaskReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.TaskReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncoder();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRwxpages();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Encoder = 1;
 * @return {string}
 */
proto.sliverpb.TaskReq.prototype.getEncoder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.TaskReq} returns this
 */
proto.sliverpb.TaskReq.prototype.setEncoder = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool RWXPages = 2;
 * @return {boolean}
 */
proto.sliverpb.TaskReq.prototype.getRwxpages = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.TaskReq} returns this
 */
proto.sliverpb.TaskReq.prototype.setRwxpages = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 Pid = 3;
 * @return {number}
 */
proto.sliverpb.TaskReq.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.TaskReq} returns this
 */
proto.sliverpb.TaskReq.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes Data = 4;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.TaskReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes Data = 4;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.TaskReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.TaskReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.TaskReq} returns this
 */
proto.sliverpb.TaskReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.TaskReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.TaskReq} returns this
*/
proto.sliverpb.TaskReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.TaskReq} returns this
 */
proto.sliverpb.TaskReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.TaskReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Task}
 */
proto.sliverpb.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Task;
  return proto.sliverpb.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Task}
 */
proto.sliverpb.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Task.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Task} returns this
*/
proto.sliverpb.Task.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Task} returns this
 */
proto.sliverpb.Task.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Task.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ExecuteAssemblyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ExecuteAssemblyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ExecuteAssemblyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    assembly: msg.getAssembly_asB64(),
    arguments: jspb.Message.getFieldWithDefault(msg, 2, ""),
    process: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isdll: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    arch: jspb.Message.getFieldWithDefault(msg, 5, ""),
    classname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    method: jspb.Message.getFieldWithDefault(msg, 7, ""),
    appdomain: jspb.Message.getFieldWithDefault(msg, 8, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ExecuteAssemblyReq}
 */
proto.sliverpb.ExecuteAssemblyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ExecuteAssemblyReq;
  return proto.sliverpb.ExecuteAssemblyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ExecuteAssemblyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ExecuteAssemblyReq}
 */
proto.sliverpb.ExecuteAssemblyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssembly(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setArguments(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcess(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdll(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setArch(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassname(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppdomain(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ExecuteAssemblyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ExecuteAssemblyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ExecuteAssemblyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssembly_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getArguments();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProcess();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsdll();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getArch();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClassname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAppdomain();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Assembly = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.getAssembly = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Assembly = 1;
 * This is a type-conversion wrapper around `getAssembly()`
 * @return {string}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.getAssembly_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssembly()));
};


/**
 * optional bytes Assembly = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssembly()`
 * @return {!Uint8Array}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.getAssembly_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssembly()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.ExecuteAssemblyReq} returns this
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.setAssembly = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Arguments = 2;
 * @return {string}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.getArguments = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteAssemblyReq} returns this
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.setArguments = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Process = 3;
 * @return {string}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.getProcess = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteAssemblyReq} returns this
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.setProcess = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool IsDLL = 4;
 * @return {boolean}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.getIsdll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.ExecuteAssemblyReq} returns this
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.setIsdll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string Arch = 5;
 * @return {string}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.getArch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteAssemblyReq} returns this
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.setArch = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string ClassName = 6;
 * @return {string}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.getClassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteAssemblyReq} returns this
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.setClassname = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string Method = 7;
 * @return {string}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteAssemblyReq} returns this
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string AppDomain = 8;
 * @return {string}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.getAppdomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteAssemblyReq} returns this
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.setAppdomain = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.ExecuteAssemblyReq} returns this
*/
proto.sliverpb.ExecuteAssemblyReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ExecuteAssemblyReq} returns this
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ExecuteAssemblyReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.InvokeExecuteAssemblyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.InvokeExecuteAssemblyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.InvokeExecuteAssemblyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    process: jspb.Message.getFieldWithDefault(msg, 2, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.InvokeExecuteAssemblyReq}
 */
proto.sliverpb.InvokeExecuteAssemblyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.InvokeExecuteAssemblyReq;
  return proto.sliverpb.InvokeExecuteAssemblyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.InvokeExecuteAssemblyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.InvokeExecuteAssemblyReq}
 */
proto.sliverpb.InvokeExecuteAssemblyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcess(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.InvokeExecuteAssemblyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.InvokeExecuteAssemblyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.InvokeExecuteAssemblyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getProcess();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.InvokeExecuteAssemblyReq} returns this
 */
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string process = 2;
 * @return {string}
 */
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.getProcess = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.InvokeExecuteAssemblyReq} returns this
 */
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.setProcess = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.InvokeExecuteAssemblyReq} returns this
*/
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.InvokeExecuteAssemblyReq} returns this
 */
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.InvokeExecuteAssemblyReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ExecuteAssembly.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ExecuteAssembly.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ExecuteAssembly} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ExecuteAssembly.toObject = function(includeInstance, msg) {
  var f, obj = {
    output: msg.getOutput_asB64(),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ExecuteAssembly}
 */
proto.sliverpb.ExecuteAssembly.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ExecuteAssembly;
  return proto.sliverpb.ExecuteAssembly.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ExecuteAssembly} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ExecuteAssembly}
 */
proto.sliverpb.ExecuteAssembly.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOutput(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ExecuteAssembly.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ExecuteAssembly.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ExecuteAssembly} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ExecuteAssembly.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutput_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Output = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.ExecuteAssembly.prototype.getOutput = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Output = 1;
 * This is a type-conversion wrapper around `getOutput()`
 * @return {string}
 */
proto.sliverpb.ExecuteAssembly.prototype.getOutput_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOutput()));
};


/**
 * optional bytes Output = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOutput()`
 * @return {!Uint8Array}
 */
proto.sliverpb.ExecuteAssembly.prototype.getOutput_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOutput()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.ExecuteAssembly} returns this
 */
proto.sliverpb.ExecuteAssembly.prototype.setOutput = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.ExecuteAssembly.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.ExecuteAssembly} returns this
*/
proto.sliverpb.ExecuteAssembly.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ExecuteAssembly} returns this
 */
proto.sliverpb.ExecuteAssembly.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ExecuteAssembly.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.InvokeMigrateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.InvokeMigrateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.InvokeMigrateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.InvokeMigrateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64(),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.InvokeMigrateReq}
 */
proto.sliverpb.InvokeMigrateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.InvokeMigrateReq;
  return proto.sliverpb.InvokeMigrateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.InvokeMigrateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.InvokeMigrateReq}
 */
proto.sliverpb.InvokeMigrateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.InvokeMigrateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.InvokeMigrateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.InvokeMigrateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.InvokeMigrateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 Pid = 1;
 * @return {number}
 */
proto.sliverpb.InvokeMigrateReq.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.InvokeMigrateReq} returns this
 */
proto.sliverpb.InvokeMigrateReq.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes Data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.InvokeMigrateReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.InvokeMigrateReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.InvokeMigrateReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.InvokeMigrateReq} returns this
 */
proto.sliverpb.InvokeMigrateReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.InvokeMigrateReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.InvokeMigrateReq} returns this
*/
proto.sliverpb.InvokeMigrateReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.InvokeMigrateReq} returns this
 */
proto.sliverpb.InvokeMigrateReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.InvokeMigrateReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Migrate.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Migrate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Migrate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Migrate.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Migrate}
 */
proto.sliverpb.Migrate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Migrate;
  return proto.sliverpb.Migrate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Migrate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Migrate}
 */
proto.sliverpb.Migrate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Migrate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Migrate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Migrate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Migrate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool Success = 1;
 * @return {boolean}
 */
proto.sliverpb.Migrate.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.Migrate} returns this
 */
proto.sliverpb.Migrate.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Migrate.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Migrate} returns this
*/
proto.sliverpb.Migrate.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Migrate} returns this
 */
proto.sliverpb.Migrate.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Migrate.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.ExecuteReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ExecuteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ExecuteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ExecuteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ExecuteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    argsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    output: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    stdout: jspb.Message.getFieldWithDefault(msg, 4, ""),
    stderr: jspb.Message.getFieldWithDefault(msg, 5, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ExecuteReq}
 */
proto.sliverpb.ExecuteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ExecuteReq;
  return proto.sliverpb.ExecuteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ExecuteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ExecuteReq}
 */
proto.sliverpb.ExecuteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutput(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStdout(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStderr(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ExecuteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ExecuteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ExecuteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ExecuteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getOutput();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStdout();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStderr();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.ExecuteReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteReq} returns this
 */
proto.sliverpb.ExecuteReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string Args = 2;
 * @return {!Array<string>}
 */
proto.sliverpb.ExecuteReq.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sliverpb.ExecuteReq} returns this
 */
proto.sliverpb.ExecuteReq.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.ExecuteReq} returns this
 */
proto.sliverpb.ExecuteReq.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.ExecuteReq} returns this
 */
proto.sliverpb.ExecuteReq.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * optional bool Output = 3;
 * @return {boolean}
 */
proto.sliverpb.ExecuteReq.prototype.getOutput = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.ExecuteReq} returns this
 */
proto.sliverpb.ExecuteReq.prototype.setOutput = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string Stdout = 4;
 * @return {string}
 */
proto.sliverpb.ExecuteReq.prototype.getStdout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteReq} returns this
 */
proto.sliverpb.ExecuteReq.prototype.setStdout = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Stderr = 5;
 * @return {string}
 */
proto.sliverpb.ExecuteReq.prototype.getStderr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteReq} returns this
 */
proto.sliverpb.ExecuteReq.prototype.setStderr = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.ExecuteReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.ExecuteReq} returns this
*/
proto.sliverpb.ExecuteReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ExecuteReq} returns this
 */
proto.sliverpb.ExecuteReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ExecuteReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.ExecuteTokenReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ExecuteTokenReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ExecuteTokenReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ExecuteTokenReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ExecuteTokenReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    argsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    output: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    stdout: jspb.Message.getFieldWithDefault(msg, 4, ""),
    stderr: jspb.Message.getFieldWithDefault(msg, 5, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ExecuteTokenReq}
 */
proto.sliverpb.ExecuteTokenReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ExecuteTokenReq;
  return proto.sliverpb.ExecuteTokenReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ExecuteTokenReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ExecuteTokenReq}
 */
proto.sliverpb.ExecuteTokenReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutput(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStdout(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStderr(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ExecuteTokenReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ExecuteTokenReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ExecuteTokenReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ExecuteTokenReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getOutput();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStdout();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStderr();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.ExecuteTokenReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteTokenReq} returns this
 */
proto.sliverpb.ExecuteTokenReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string Args = 2;
 * @return {!Array<string>}
 */
proto.sliverpb.ExecuteTokenReq.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sliverpb.ExecuteTokenReq} returns this
 */
proto.sliverpb.ExecuteTokenReq.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.ExecuteTokenReq} returns this
 */
proto.sliverpb.ExecuteTokenReq.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.ExecuteTokenReq} returns this
 */
proto.sliverpb.ExecuteTokenReq.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * optional bool Output = 3;
 * @return {boolean}
 */
proto.sliverpb.ExecuteTokenReq.prototype.getOutput = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.ExecuteTokenReq} returns this
 */
proto.sliverpb.ExecuteTokenReq.prototype.setOutput = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string Stdout = 4;
 * @return {string}
 */
proto.sliverpb.ExecuteTokenReq.prototype.getStdout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteTokenReq} returns this
 */
proto.sliverpb.ExecuteTokenReq.prototype.setStdout = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Stderr = 5;
 * @return {string}
 */
proto.sliverpb.ExecuteTokenReq.prototype.getStderr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ExecuteTokenReq} returns this
 */
proto.sliverpb.ExecuteTokenReq.prototype.setStderr = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.ExecuteTokenReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.ExecuteTokenReq} returns this
*/
proto.sliverpb.ExecuteTokenReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ExecuteTokenReq} returns this
 */
proto.sliverpb.ExecuteTokenReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ExecuteTokenReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Execute.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Execute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Execute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Execute.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stdout: msg.getStdout_asB64(),
    stderr: msg.getStderr_asB64(),
    pid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Execute}
 */
proto.sliverpb.Execute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Execute;
  return proto.sliverpb.Execute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Execute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Execute}
 */
proto.sliverpb.Execute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStdout(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStderr(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Execute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Execute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Execute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Execute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStdout_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getStderr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 Status = 1;
 * @return {number}
 */
proto.sliverpb.Execute.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Execute} returns this
 */
proto.sliverpb.Execute.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes Stdout = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.Execute.prototype.getStdout = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Stdout = 2;
 * This is a type-conversion wrapper around `getStdout()`
 * @return {string}
 */
proto.sliverpb.Execute.prototype.getStdout_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStdout()));
};


/**
 * optional bytes Stdout = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStdout()`
 * @return {!Uint8Array}
 */
proto.sliverpb.Execute.prototype.getStdout_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStdout()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.Execute} returns this
 */
proto.sliverpb.Execute.prototype.setStdout = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes Stderr = 3;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.Execute.prototype.getStderr = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes Stderr = 3;
 * This is a type-conversion wrapper around `getStderr()`
 * @return {string}
 */
proto.sliverpb.Execute.prototype.getStderr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStderr()));
};


/**
 * optional bytes Stderr = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStderr()`
 * @return {!Uint8Array}
 */
proto.sliverpb.Execute.prototype.getStderr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStderr()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.Execute} returns this
 */
proto.sliverpb.Execute.prototype.setStderr = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint32 Pid = 4;
 * @return {number}
 */
proto.sliverpb.Execute.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Execute} returns this
 */
proto.sliverpb.Execute.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Execute.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Execute} returns this
*/
proto.sliverpb.Execute.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Execute} returns this
 */
proto.sliverpb.Execute.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Execute.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.SideloadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.SideloadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.SideloadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SideloadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    processname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    args: jspb.Message.getFieldWithDefault(msg, 3, ""),
    entrypoint: jspb.Message.getFieldWithDefault(msg, 4, ""),
    kill: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isdll: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.SideloadReq}
 */
proto.sliverpb.SideloadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.SideloadReq;
  return proto.sliverpb.SideloadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.SideloadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.SideloadReq}
 */
proto.sliverpb.SideloadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArgs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntrypoint(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKill(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdll(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.SideloadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.SideloadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.SideloadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SideloadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getProcessname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArgs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEntrypoint();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getKill();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsdll();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.SideloadReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.SideloadReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.SideloadReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.SideloadReq} returns this
 */
proto.sliverpb.SideloadReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string ProcessName = 2;
 * @return {string}
 */
proto.sliverpb.SideloadReq.prototype.getProcessname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SideloadReq} returns this
 */
proto.sliverpb.SideloadReq.prototype.setProcessname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Args = 3;
 * @return {string}
 */
proto.sliverpb.SideloadReq.prototype.getArgs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SideloadReq} returns this
 */
proto.sliverpb.SideloadReq.prototype.setArgs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string EntryPoint = 4;
 * @return {string}
 */
proto.sliverpb.SideloadReq.prototype.getEntrypoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SideloadReq} returns this
 */
proto.sliverpb.SideloadReq.prototype.setEntrypoint = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool Kill = 5;
 * @return {boolean}
 */
proto.sliverpb.SideloadReq.prototype.getKill = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.SideloadReq} returns this
 */
proto.sliverpb.SideloadReq.prototype.setKill = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool isDLL = 6;
 * @return {boolean}
 */
proto.sliverpb.SideloadReq.prototype.getIsdll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.SideloadReq} returns this
 */
proto.sliverpb.SideloadReq.prototype.setIsdll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.SideloadReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.SideloadReq} returns this
*/
proto.sliverpb.SideloadReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SideloadReq} returns this
 */
proto.sliverpb.SideloadReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SideloadReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Sideload.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Sideload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Sideload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Sideload.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Sideload}
 */
proto.sliverpb.Sideload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Sideload;
  return proto.sliverpb.Sideload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Sideload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Sideload}
 */
proto.sliverpb.Sideload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Sideload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Sideload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Sideload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Sideload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Result = 1;
 * @return {string}
 */
proto.sliverpb.Sideload.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Sideload} returns this
 */
proto.sliverpb.Sideload.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Sideload.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Sideload} returns this
*/
proto.sliverpb.Sideload.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Sideload} returns this
 */
proto.sliverpb.Sideload.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Sideload.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.InvokeSpawnDllReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.InvokeSpawnDllReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.InvokeSpawnDllReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    processname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    args: jspb.Message.getFieldWithDefault(msg, 3, ""),
    entrypoint: jspb.Message.getFieldWithDefault(msg, 4, ""),
    kill: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.InvokeSpawnDllReq}
 */
proto.sliverpb.InvokeSpawnDllReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.InvokeSpawnDllReq;
  return proto.sliverpb.InvokeSpawnDllReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.InvokeSpawnDllReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.InvokeSpawnDllReq}
 */
proto.sliverpb.InvokeSpawnDllReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArgs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntrypoint(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKill(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.InvokeSpawnDllReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.InvokeSpawnDllReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.InvokeSpawnDllReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getProcessname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArgs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEntrypoint();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getKill();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.InvokeSpawnDllReq} returns this
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string ProcessName = 2;
 * @return {string}
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.getProcessname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.InvokeSpawnDllReq} returns this
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.setProcessname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Args = 3;
 * @return {string}
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.getArgs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.InvokeSpawnDllReq} returns this
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.setArgs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string EntryPoint = 4;
 * @return {string}
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.getEntrypoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.InvokeSpawnDllReq} returns this
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.setEntrypoint = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool Kill = 5;
 * @return {boolean}
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.getKill = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.InvokeSpawnDllReq} returns this
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.setKill = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.InvokeSpawnDllReq} returns this
*/
proto.sliverpb.InvokeSpawnDllReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.InvokeSpawnDllReq} returns this
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.InvokeSpawnDllReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.SpawnDllReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.SpawnDllReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.SpawnDllReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SpawnDllReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    processname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    args: jspb.Message.getFieldWithDefault(msg, 4, ""),
    kill: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.SpawnDllReq}
 */
proto.sliverpb.SpawnDllReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.SpawnDllReq;
  return proto.sliverpb.SpawnDllReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.SpawnDllReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.SpawnDllReq}
 */
proto.sliverpb.SpawnDllReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setArgs(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKill(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.SpawnDllReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.SpawnDllReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.SpawnDllReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SpawnDllReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getProcessname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getArgs();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getKill();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.SpawnDllReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.SpawnDllReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.SpawnDllReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.SpawnDllReq} returns this
 */
proto.sliverpb.SpawnDllReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string ProcessName = 2;
 * @return {string}
 */
proto.sliverpb.SpawnDllReq.prototype.getProcessname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SpawnDllReq} returns this
 */
proto.sliverpb.SpawnDllReq.prototype.setProcessname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 Offset = 3;
 * @return {number}
 */
proto.sliverpb.SpawnDllReq.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.SpawnDllReq} returns this
 */
proto.sliverpb.SpawnDllReq.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Args = 4;
 * @return {string}
 */
proto.sliverpb.SpawnDllReq.prototype.getArgs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SpawnDllReq} returns this
 */
proto.sliverpb.SpawnDllReq.prototype.setArgs = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool Kill = 5;
 * @return {boolean}
 */
proto.sliverpb.SpawnDllReq.prototype.getKill = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.SpawnDllReq} returns this
 */
proto.sliverpb.SpawnDllReq.prototype.setKill = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.SpawnDllReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.SpawnDllReq} returns this
*/
proto.sliverpb.SpawnDllReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SpawnDllReq} returns this
 */
proto.sliverpb.SpawnDllReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SpawnDllReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.SpawnDll.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.SpawnDll.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.SpawnDll} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SpawnDll.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.SpawnDll}
 */
proto.sliverpb.SpawnDll.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.SpawnDll;
  return proto.sliverpb.SpawnDll.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.SpawnDll} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.SpawnDll}
 */
proto.sliverpb.SpawnDll.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.SpawnDll.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.SpawnDll.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.SpawnDll} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SpawnDll.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Result = 1;
 * @return {string}
 */
proto.sliverpb.SpawnDll.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SpawnDll} returns this
 */
proto.sliverpb.SpawnDll.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.SpawnDll.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.SpawnDll} returns this
*/
proto.sliverpb.SpawnDll.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SpawnDll} returns this
 */
proto.sliverpb.SpawnDll.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SpawnDll.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.NetstatReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.NetstatReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.NetstatReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.NetstatReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    tcp: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    udp: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    ip4: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    ip6: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    listening: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.NetstatReq}
 */
proto.sliverpb.NetstatReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.NetstatReq;
  return proto.sliverpb.NetstatReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.NetstatReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.NetstatReq}
 */
proto.sliverpb.NetstatReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTcp(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUdp(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIp4(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIp6(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setListening(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.NetstatReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.NetstatReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.NetstatReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.NetstatReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTcp();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getUdp();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIp4();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIp6();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getListening();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool TCP = 1;
 * @return {boolean}
 */
proto.sliverpb.NetstatReq.prototype.getTcp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.NetstatReq} returns this
 */
proto.sliverpb.NetstatReq.prototype.setTcp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool UDP = 2;
 * @return {boolean}
 */
proto.sliverpb.NetstatReq.prototype.getUdp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.NetstatReq} returns this
 */
proto.sliverpb.NetstatReq.prototype.setUdp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool IP4 = 3;
 * @return {boolean}
 */
proto.sliverpb.NetstatReq.prototype.getIp4 = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.NetstatReq} returns this
 */
proto.sliverpb.NetstatReq.prototype.setIp4 = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool IP6 = 5;
 * @return {boolean}
 */
proto.sliverpb.NetstatReq.prototype.getIp6 = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.NetstatReq} returns this
 */
proto.sliverpb.NetstatReq.prototype.setIp6 = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool Listening = 6;
 * @return {boolean}
 */
proto.sliverpb.NetstatReq.prototype.getListening = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.NetstatReq} returns this
 */
proto.sliverpb.NetstatReq.prototype.setListening = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.NetstatReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.NetstatReq} returns this
*/
proto.sliverpb.NetstatReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.NetstatReq} returns this
 */
proto.sliverpb.NetstatReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.NetstatReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.SockTabEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.SockTabEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.SockTabEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SockTabEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    localaddr: (f = msg.getLocaladdr()) && proto.sliverpb.SockTabEntry.SockAddr.toObject(includeInstance, f),
    remoteaddr: (f = msg.getRemoteaddr()) && proto.sliverpb.SockTabEntry.SockAddr.toObject(includeInstance, f),
    skstate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    process: (f = msg.getProcess()) && commonpb_common_pb.Process.toObject(includeInstance, f),
    protocol: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.SockTabEntry}
 */
proto.sliverpb.SockTabEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.SockTabEntry;
  return proto.sliverpb.SockTabEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.SockTabEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.SockTabEntry}
 */
proto.sliverpb.SockTabEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.SockTabEntry.SockAddr;
      reader.readMessage(value,proto.sliverpb.SockTabEntry.SockAddr.deserializeBinaryFromReader);
      msg.setLocaladdr(value);
      break;
    case 2:
      var value = new proto.sliverpb.SockTabEntry.SockAddr;
      reader.readMessage(value,proto.sliverpb.SockTabEntry.SockAddr.deserializeBinaryFromReader);
      msg.setRemoteaddr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkstate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 5:
      var value = new commonpb_common_pb.Process;
      reader.readMessage(value,commonpb_common_pb.Process.deserializeBinaryFromReader);
      msg.setProcess(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.SockTabEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.SockTabEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.SockTabEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SockTabEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocaladdr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sliverpb.SockTabEntry.SockAddr.serializeBinaryToWriter
    );
  }
  f = message.getRemoteaddr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sliverpb.SockTabEntry.SockAddr.serializeBinaryToWriter
    );
  }
  f = message.getSkstate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getProcess();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      commonpb_common_pb.Process.serializeBinaryToWriter
    );
  }
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.SockTabEntry.SockAddr.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.SockTabEntry.SockAddr.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.SockTabEntry.SockAddr} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SockTabEntry.SockAddr.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.SockTabEntry.SockAddr}
 */
proto.sliverpb.SockTabEntry.SockAddr.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.SockTabEntry.SockAddr;
  return proto.sliverpb.SockTabEntry.SockAddr.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.SockTabEntry.SockAddr} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.SockTabEntry.SockAddr}
 */
proto.sliverpb.SockTabEntry.SockAddr.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.SockTabEntry.SockAddr.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.SockTabEntry.SockAddr.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.SockTabEntry.SockAddr} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SockTabEntry.SockAddr.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string Ip = 1;
 * @return {string}
 */
proto.sliverpb.SockTabEntry.SockAddr.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SockTabEntry.SockAddr} returns this
 */
proto.sliverpb.SockTabEntry.SockAddr.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 Port = 2;
 * @return {number}
 */
proto.sliverpb.SockTabEntry.SockAddr.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.SockTabEntry.SockAddr} returns this
 */
proto.sliverpb.SockTabEntry.SockAddr.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional SockAddr LocalAddr = 1;
 * @return {?proto.sliverpb.SockTabEntry.SockAddr}
 */
proto.sliverpb.SockTabEntry.prototype.getLocaladdr = function() {
  return /** @type{?proto.sliverpb.SockTabEntry.SockAddr} */ (
    jspb.Message.getWrapperField(this, proto.sliverpb.SockTabEntry.SockAddr, 1));
};


/**
 * @param {?proto.sliverpb.SockTabEntry.SockAddr|undefined} value
 * @return {!proto.sliverpb.SockTabEntry} returns this
*/
proto.sliverpb.SockTabEntry.prototype.setLocaladdr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SockTabEntry} returns this
 */
proto.sliverpb.SockTabEntry.prototype.clearLocaladdr = function() {
  return this.setLocaladdr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SockTabEntry.prototype.hasLocaladdr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SockAddr RemoteAddr = 2;
 * @return {?proto.sliverpb.SockTabEntry.SockAddr}
 */
proto.sliverpb.SockTabEntry.prototype.getRemoteaddr = function() {
  return /** @type{?proto.sliverpb.SockTabEntry.SockAddr} */ (
    jspb.Message.getWrapperField(this, proto.sliverpb.SockTabEntry.SockAddr, 2));
};


/**
 * @param {?proto.sliverpb.SockTabEntry.SockAddr|undefined} value
 * @return {!proto.sliverpb.SockTabEntry} returns this
*/
proto.sliverpb.SockTabEntry.prototype.setRemoteaddr = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SockTabEntry} returns this
 */
proto.sliverpb.SockTabEntry.prototype.clearRemoteaddr = function() {
  return this.setRemoteaddr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SockTabEntry.prototype.hasRemoteaddr = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string SkState = 3;
 * @return {string}
 */
proto.sliverpb.SockTabEntry.prototype.getSkstate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SockTabEntry} returns this
 */
proto.sliverpb.SockTabEntry.prototype.setSkstate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 UID = 4;
 * @return {number}
 */
proto.sliverpb.SockTabEntry.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.SockTabEntry} returns this
 */
proto.sliverpb.SockTabEntry.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional commonpb.Process Process = 5;
 * @return {?proto.commonpb.Process}
 */
proto.sliverpb.SockTabEntry.prototype.getProcess = function() {
  return /** @type{?proto.commonpb.Process} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Process, 5));
};


/**
 * @param {?proto.commonpb.Process|undefined} value
 * @return {!proto.sliverpb.SockTabEntry} returns this
*/
proto.sliverpb.SockTabEntry.prototype.setProcess = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SockTabEntry} returns this
 */
proto.sliverpb.SockTabEntry.prototype.clearProcess = function() {
  return this.setProcess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SockTabEntry.prototype.hasProcess = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string Protocol = 6;
 * @return {string}
 */
proto.sliverpb.SockTabEntry.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SockTabEntry} returns this
 */
proto.sliverpb.SockTabEntry.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.Netstat.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Netstat.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Netstat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Netstat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Netstat.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.sliverpb.SockTabEntry.toObject, includeInstance),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Netstat}
 */
proto.sliverpb.Netstat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Netstat;
  return proto.sliverpb.Netstat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Netstat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Netstat}
 */
proto.sliverpb.Netstat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.SockTabEntry;
      reader.readMessage(value,proto.sliverpb.SockTabEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Netstat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Netstat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Netstat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Netstat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sliverpb.SockTabEntry.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SockTabEntry Entries = 1;
 * @return {!Array<!proto.sliverpb.SockTabEntry>}
 */
proto.sliverpb.Netstat.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.sliverpb.SockTabEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sliverpb.SockTabEntry, 1));
};


/**
 * @param {!Array<!proto.sliverpb.SockTabEntry>} value
 * @return {!proto.sliverpb.Netstat} returns this
*/
proto.sliverpb.Netstat.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sliverpb.SockTabEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.SockTabEntry}
 */
proto.sliverpb.Netstat.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sliverpb.SockTabEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.Netstat} returns this
 */
proto.sliverpb.Netstat.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Netstat.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Netstat} returns this
*/
proto.sliverpb.Netstat.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Netstat} returns this
 */
proto.sliverpb.Netstat.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Netstat.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.EnvReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.EnvReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.EnvReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.EnvReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.EnvReq}
 */
proto.sliverpb.EnvReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.EnvReq;
  return proto.sliverpb.EnvReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.EnvReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.EnvReq}
 */
proto.sliverpb.EnvReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.EnvReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.EnvReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.EnvReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.EnvReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.sliverpb.EnvReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.EnvReq} returns this
 */
proto.sliverpb.EnvReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.EnvReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.EnvReq} returns this
*/
proto.sliverpb.EnvReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.EnvReq} returns this
 */
proto.sliverpb.EnvReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.EnvReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.EnvInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.EnvInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.EnvInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.EnvInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.EnvInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    variablesList: jspb.Message.toObjectList(msg.getVariablesList(),
    commonpb_common_pb.EnvVar.toObject, includeInstance),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.EnvInfo}
 */
proto.sliverpb.EnvInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.EnvInfo;
  return proto.sliverpb.EnvInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.EnvInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.EnvInfo}
 */
proto.sliverpb.EnvInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new commonpb_common_pb.EnvVar;
      reader.readMessage(value,commonpb_common_pb.EnvVar.deserializeBinaryFromReader);
      msg.addVariables(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.EnvInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.EnvInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.EnvInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.EnvInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      commonpb_common_pb.EnvVar.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated commonpb.EnvVar Variables = 1;
 * @return {!Array<!proto.commonpb.EnvVar>}
 */
proto.sliverpb.EnvInfo.prototype.getVariablesList = function() {
  return /** @type{!Array<!proto.commonpb.EnvVar>} */ (
    jspb.Message.getRepeatedWrapperField(this, commonpb_common_pb.EnvVar, 1));
};


/**
 * @param {!Array<!proto.commonpb.EnvVar>} value
 * @return {!proto.sliverpb.EnvInfo} returns this
*/
proto.sliverpb.EnvInfo.prototype.setVariablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.commonpb.EnvVar=} opt_value
 * @param {number=} opt_index
 * @return {!proto.commonpb.EnvVar}
 */
proto.sliverpb.EnvInfo.prototype.addVariables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.commonpb.EnvVar, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.EnvInfo} returns this
 */
proto.sliverpb.EnvInfo.prototype.clearVariablesList = function() {
  return this.setVariablesList([]);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.EnvInfo.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.EnvInfo} returns this
*/
proto.sliverpb.EnvInfo.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.EnvInfo} returns this
 */
proto.sliverpb.EnvInfo.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.EnvInfo.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.SetEnvReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.SetEnvReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.SetEnvReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SetEnvReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    variable: (f = msg.getVariable()) && commonpb_common_pb.EnvVar.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.SetEnvReq}
 */
proto.sliverpb.SetEnvReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.SetEnvReq;
  return proto.sliverpb.SetEnvReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.SetEnvReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.SetEnvReq}
 */
proto.sliverpb.SetEnvReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new commonpb_common_pb.EnvVar;
      reader.readMessage(value,commonpb_common_pb.EnvVar.deserializeBinaryFromReader);
      msg.setVariable(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.SetEnvReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.SetEnvReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.SetEnvReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SetEnvReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariable();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      commonpb_common_pb.EnvVar.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.EnvVar Variable = 1;
 * @return {?proto.commonpb.EnvVar}
 */
proto.sliverpb.SetEnvReq.prototype.getVariable = function() {
  return /** @type{?proto.commonpb.EnvVar} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.EnvVar, 1));
};


/**
 * @param {?proto.commonpb.EnvVar|undefined} value
 * @return {!proto.sliverpb.SetEnvReq} returns this
*/
proto.sliverpb.SetEnvReq.prototype.setVariable = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SetEnvReq} returns this
 */
proto.sliverpb.SetEnvReq.prototype.clearVariable = function() {
  return this.setVariable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SetEnvReq.prototype.hasVariable = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.SetEnvReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.SetEnvReq} returns this
*/
proto.sliverpb.SetEnvReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SetEnvReq} returns this
 */
proto.sliverpb.SetEnvReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SetEnvReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.SetEnv.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.SetEnv.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.SetEnv} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SetEnv.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.SetEnv}
 */
proto.sliverpb.SetEnv.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.SetEnv;
  return proto.sliverpb.SetEnv.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.SetEnv} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.SetEnv}
 */
proto.sliverpb.SetEnv.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.SetEnv.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.SetEnv.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.SetEnv} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SetEnv.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.SetEnv.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.SetEnv} returns this
*/
proto.sliverpb.SetEnv.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SetEnv} returns this
 */
proto.sliverpb.SetEnv.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SetEnv.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.UnsetEnvReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.UnsetEnvReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.UnsetEnvReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.UnsetEnvReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.UnsetEnvReq}
 */
proto.sliverpb.UnsetEnvReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.UnsetEnvReq;
  return proto.sliverpb.UnsetEnvReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.UnsetEnvReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.UnsetEnvReq}
 */
proto.sliverpb.UnsetEnvReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.UnsetEnvReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.UnsetEnvReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.UnsetEnvReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.UnsetEnvReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.sliverpb.UnsetEnvReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.UnsetEnvReq} returns this
 */
proto.sliverpb.UnsetEnvReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.UnsetEnvReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.UnsetEnvReq} returns this
*/
proto.sliverpb.UnsetEnvReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.UnsetEnvReq} returns this
 */
proto.sliverpb.UnsetEnvReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.UnsetEnvReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.UnsetEnv.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.UnsetEnv.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.UnsetEnv} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.UnsetEnv.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.UnsetEnv}
 */
proto.sliverpb.UnsetEnv.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.UnsetEnv;
  return proto.sliverpb.UnsetEnv.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.UnsetEnv} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.UnsetEnv}
 */
proto.sliverpb.UnsetEnv.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.UnsetEnv.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.UnsetEnv.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.UnsetEnv} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.UnsetEnv.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.UnsetEnv.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.UnsetEnv} returns this
*/
proto.sliverpb.UnsetEnv.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.UnsetEnv} returns this
 */
proto.sliverpb.UnsetEnv.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.UnsetEnv.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.DNSSessionInit.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.DNSSessionInit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.DNSSessionInit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.DNSSessionInit.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.DNSSessionInit}
 */
proto.sliverpb.DNSSessionInit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.DNSSessionInit;
  return proto.sliverpb.DNSSessionInit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.DNSSessionInit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.DNSSessionInit}
 */
proto.sliverpb.DNSSessionInit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.DNSSessionInit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.DNSSessionInit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.DNSSessionInit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.DNSSessionInit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes Key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.DNSSessionInit.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.sliverpb.DNSSessionInit.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes Key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.sliverpb.DNSSessionInit.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.DNSSessionInit} returns this
 */
proto.sliverpb.DNSSessionInit.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.DNSPoll.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.DNSPoll.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.DNSPoll.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.DNSPoll} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.DNSPoll.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    proto.sliverpb.DNSBlockHeader.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.DNSPoll}
 */
proto.sliverpb.DNSPoll.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.DNSPoll;
  return proto.sliverpb.DNSPoll.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.DNSPoll} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.DNSPoll}
 */
proto.sliverpb.DNSPoll.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.DNSBlockHeader;
      reader.readMessage(value,proto.sliverpb.DNSBlockHeader.deserializeBinaryFromReader);
      msg.addBlocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.DNSPoll.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.DNSPoll.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.DNSPoll} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.DNSPoll.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sliverpb.DNSBlockHeader.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DNSBlockHeader blocks = 1;
 * @return {!Array<!proto.sliverpb.DNSBlockHeader>}
 */
proto.sliverpb.DNSPoll.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.sliverpb.DNSBlockHeader>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sliverpb.DNSBlockHeader, 1));
};


/**
 * @param {!Array<!proto.sliverpb.DNSBlockHeader>} value
 * @return {!proto.sliverpb.DNSPoll} returns this
*/
proto.sliverpb.DNSPoll.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sliverpb.DNSBlockHeader=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.DNSBlockHeader}
 */
proto.sliverpb.DNSPoll.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sliverpb.DNSBlockHeader, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.DNSPoll} returns this
 */
proto.sliverpb.DNSPoll.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.DNSBlockHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.DNSBlockHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.DNSBlockHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.DNSBlockHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.DNSBlockHeader}
 */
proto.sliverpb.DNSBlockHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.DNSBlockHeader;
  return proto.sliverpb.DNSBlockHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.DNSBlockHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.DNSBlockHeader}
 */
proto.sliverpb.DNSBlockHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.DNSBlockHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.DNSBlockHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.DNSBlockHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.DNSBlockHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.sliverpb.DNSBlockHeader.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.DNSBlockHeader} returns this
 */
proto.sliverpb.DNSBlockHeader.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 Size = 2;
 * @return {number}
 */
proto.sliverpb.DNSBlockHeader.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.DNSBlockHeader} returns this
 */
proto.sliverpb.DNSBlockHeader.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.HTTPSessionInit.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.HTTPSessionInit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.HTTPSessionInit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.HTTPSessionInit.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.HTTPSessionInit}
 */
proto.sliverpb.HTTPSessionInit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.HTTPSessionInit;
  return proto.sliverpb.HTTPSessionInit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.HTTPSessionInit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.HTTPSessionInit}
 */
proto.sliverpb.HTTPSessionInit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.HTTPSessionInit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.HTTPSessionInit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.HTTPSessionInit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.HTTPSessionInit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes Key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.HTTPSessionInit.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.sliverpb.HTTPSessionInit.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes Key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.sliverpb.HTTPSessionInit.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.HTTPSessionInit} returns this
 */
proto.sliverpb.HTTPSessionInit.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ScreenshotReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ScreenshotReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ScreenshotReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ScreenshotReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ScreenshotReq}
 */
proto.sliverpb.ScreenshotReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ScreenshotReq;
  return proto.sliverpb.ScreenshotReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ScreenshotReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ScreenshotReq}
 */
proto.sliverpb.ScreenshotReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ScreenshotReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ScreenshotReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ScreenshotReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ScreenshotReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.ScreenshotReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.ScreenshotReq} returns this
*/
proto.sliverpb.ScreenshotReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ScreenshotReq} returns this
 */
proto.sliverpb.ScreenshotReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ScreenshotReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Screenshot.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Screenshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Screenshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Screenshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Screenshot}
 */
proto.sliverpb.Screenshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Screenshot;
  return proto.sliverpb.Screenshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Screenshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Screenshot}
 */
proto.sliverpb.Screenshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Screenshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Screenshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Screenshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Screenshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.Screenshot.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.Screenshot.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.Screenshot.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.Screenshot} returns this
 */
proto.sliverpb.Screenshot.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Screenshot.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Screenshot} returns this
*/
proto.sliverpb.Screenshot.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Screenshot} returns this
 */
proto.sliverpb.Screenshot.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Screenshot.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.StartServiceReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.StartServiceReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.StartServiceReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.StartServiceReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    servicename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    servicedescription: jspb.Message.getFieldWithDefault(msg, 2, ""),
    binpath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    arguments: jspb.Message.getFieldWithDefault(msg, 5, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.StartServiceReq}
 */
proto.sliverpb.StartServiceReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.StartServiceReq;
  return proto.sliverpb.StartServiceReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.StartServiceReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.StartServiceReq}
 */
proto.sliverpb.StartServiceReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicename(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicedescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBinpath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setArguments(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.StartServiceReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.StartServiceReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.StartServiceReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.StartServiceReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServicename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServicedescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBinpath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getArguments();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string ServiceName = 1;
 * @return {string}
 */
proto.sliverpb.StartServiceReq.prototype.getServicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.StartServiceReq} returns this
 */
proto.sliverpb.StartServiceReq.prototype.setServicename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ServiceDescription = 2;
 * @return {string}
 */
proto.sliverpb.StartServiceReq.prototype.getServicedescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.StartServiceReq} returns this
 */
proto.sliverpb.StartServiceReq.prototype.setServicedescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string BinPath = 3;
 * @return {string}
 */
proto.sliverpb.StartServiceReq.prototype.getBinpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.StartServiceReq} returns this
 */
proto.sliverpb.StartServiceReq.prototype.setBinpath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Hostname = 4;
 * @return {string}
 */
proto.sliverpb.StartServiceReq.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.StartServiceReq} returns this
 */
proto.sliverpb.StartServiceReq.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Arguments = 5;
 * @return {string}
 */
proto.sliverpb.StartServiceReq.prototype.getArguments = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.StartServiceReq} returns this
 */
proto.sliverpb.StartServiceReq.prototype.setArguments = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.StartServiceReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.StartServiceReq} returns this
*/
proto.sliverpb.StartServiceReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.StartServiceReq} returns this
 */
proto.sliverpb.StartServiceReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.StartServiceReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ServiceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ServiceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ServiceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ServiceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ServiceInfo}
 */
proto.sliverpb.ServiceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ServiceInfo;
  return proto.sliverpb.ServiceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ServiceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ServiceInfo}
 */
proto.sliverpb.ServiceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ServiceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ServiceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ServiceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ServiceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.ServiceInfo.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.ServiceInfo} returns this
*/
proto.sliverpb.ServiceInfo.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ServiceInfo} returns this
 */
proto.sliverpb.ServiceInfo.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ServiceInfo.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ServiceInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ServiceInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ServiceInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ServiceInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    servicename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ServiceInfoReq}
 */
proto.sliverpb.ServiceInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ServiceInfoReq;
  return proto.sliverpb.ServiceInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ServiceInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ServiceInfoReq}
 */
proto.sliverpb.ServiceInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicename(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ServiceInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ServiceInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ServiceInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ServiceInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServicename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string ServiceName = 1;
 * @return {string}
 */
proto.sliverpb.ServiceInfoReq.prototype.getServicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ServiceInfoReq} returns this
 */
proto.sliverpb.ServiceInfoReq.prototype.setServicename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Hostname = 2;
 * @return {string}
 */
proto.sliverpb.ServiceInfoReq.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ServiceInfoReq} returns this
 */
proto.sliverpb.ServiceInfoReq.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.StopServiceReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.StopServiceReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.StopServiceReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.StopServiceReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceinfo: (f = msg.getServiceinfo()) && proto.sliverpb.ServiceInfoReq.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.StopServiceReq}
 */
proto.sliverpb.StopServiceReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.StopServiceReq;
  return proto.sliverpb.StopServiceReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.StopServiceReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.StopServiceReq}
 */
proto.sliverpb.StopServiceReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.ServiceInfoReq;
      reader.readMessage(value,proto.sliverpb.ServiceInfoReq.deserializeBinaryFromReader);
      msg.setServiceinfo(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.StopServiceReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.StopServiceReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.StopServiceReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.StopServiceReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sliverpb.ServiceInfoReq.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional ServiceInfoReq ServiceInfo = 1;
 * @return {?proto.sliverpb.ServiceInfoReq}
 */
proto.sliverpb.StopServiceReq.prototype.getServiceinfo = function() {
  return /** @type{?proto.sliverpb.ServiceInfoReq} */ (
    jspb.Message.getWrapperField(this, proto.sliverpb.ServiceInfoReq, 1));
};


/**
 * @param {?proto.sliverpb.ServiceInfoReq|undefined} value
 * @return {!proto.sliverpb.StopServiceReq} returns this
*/
proto.sliverpb.StopServiceReq.prototype.setServiceinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.StopServiceReq} returns this
 */
proto.sliverpb.StopServiceReq.prototype.clearServiceinfo = function() {
  return this.setServiceinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.StopServiceReq.prototype.hasServiceinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.StopServiceReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.StopServiceReq} returns this
*/
proto.sliverpb.StopServiceReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.StopServiceReq} returns this
 */
proto.sliverpb.StopServiceReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.StopServiceReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RemoveServiceReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RemoveServiceReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RemoveServiceReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RemoveServiceReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceinfo: (f = msg.getServiceinfo()) && proto.sliverpb.ServiceInfoReq.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RemoveServiceReq}
 */
proto.sliverpb.RemoveServiceReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RemoveServiceReq;
  return proto.sliverpb.RemoveServiceReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RemoveServiceReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RemoveServiceReq}
 */
proto.sliverpb.RemoveServiceReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.ServiceInfoReq;
      reader.readMessage(value,proto.sliverpb.ServiceInfoReq.deserializeBinaryFromReader);
      msg.setServiceinfo(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RemoveServiceReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RemoveServiceReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RemoveServiceReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RemoveServiceReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sliverpb.ServiceInfoReq.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional ServiceInfoReq ServiceInfo = 1;
 * @return {?proto.sliverpb.ServiceInfoReq}
 */
proto.sliverpb.RemoveServiceReq.prototype.getServiceinfo = function() {
  return /** @type{?proto.sliverpb.ServiceInfoReq} */ (
    jspb.Message.getWrapperField(this, proto.sliverpb.ServiceInfoReq, 1));
};


/**
 * @param {?proto.sliverpb.ServiceInfoReq|undefined} value
 * @return {!proto.sliverpb.RemoveServiceReq} returns this
*/
proto.sliverpb.RemoveServiceReq.prototype.setServiceinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RemoveServiceReq} returns this
 */
proto.sliverpb.RemoveServiceReq.prototype.clearServiceinfo = function() {
  return this.setServiceinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RemoveServiceReq.prototype.hasServiceinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.RemoveServiceReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.RemoveServiceReq} returns this
*/
proto.sliverpb.RemoveServiceReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RemoveServiceReq} returns this
 */
proto.sliverpb.RemoveServiceReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RemoveServiceReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.BackdoorReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.BackdoorReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.BackdoorReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.BackdoorReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    filepath: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profilename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.BackdoorReq}
 */
proto.sliverpb.BackdoorReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.BackdoorReq;
  return proto.sliverpb.BackdoorReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.BackdoorReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.BackdoorReq}
 */
proto.sliverpb.BackdoorReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilepath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfilename(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.BackdoorReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.BackdoorReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.BackdoorReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.BackdoorReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilepath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfilename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string FilePath = 1;
 * @return {string}
 */
proto.sliverpb.BackdoorReq.prototype.getFilepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.BackdoorReq} returns this
 */
proto.sliverpb.BackdoorReq.prototype.setFilepath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ProfileName = 2;
 * @return {string}
 */
proto.sliverpb.BackdoorReq.prototype.getProfilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.BackdoorReq} returns this
 */
proto.sliverpb.BackdoorReq.prototype.setProfilename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.BackdoorReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.BackdoorReq} returns this
*/
proto.sliverpb.BackdoorReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.BackdoorReq} returns this
 */
proto.sliverpb.BackdoorReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.BackdoorReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Backdoor.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Backdoor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Backdoor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Backdoor.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Backdoor}
 */
proto.sliverpb.Backdoor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Backdoor;
  return proto.sliverpb.Backdoor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Backdoor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Backdoor}
 */
proto.sliverpb.Backdoor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Backdoor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Backdoor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Backdoor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Backdoor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Backdoor.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Backdoor} returns this
*/
proto.sliverpb.Backdoor.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Backdoor} returns this
 */
proto.sliverpb.Backdoor.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Backdoor.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistryReadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistryReadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistryReadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryReadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    hive: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistryReadReq}
 */
proto.sliverpb.RegistryReadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistryReadReq;
  return proto.sliverpb.RegistryReadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistryReadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistryReadReq}
 */
proto.sliverpb.RegistryReadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistryReadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistryReadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistryReadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryReadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHive();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Hive = 1;
 * @return {string}
 */
proto.sliverpb.RegistryReadReq.prototype.getHive = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryReadReq} returns this
 */
proto.sliverpb.RegistryReadReq.prototype.setHive = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Path = 2;
 * @return {string}
 */
proto.sliverpb.RegistryReadReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryReadReq} returns this
 */
proto.sliverpb.RegistryReadReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Key = 3;
 * @return {string}
 */
proto.sliverpb.RegistryReadReq.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryReadReq} returns this
 */
proto.sliverpb.RegistryReadReq.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Hostname = 4;
 * @return {string}
 */
proto.sliverpb.RegistryReadReq.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryReadReq} returns this
 */
proto.sliverpb.RegistryReadReq.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.RegistryReadReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.RegistryReadReq} returns this
*/
proto.sliverpb.RegistryReadReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistryReadReq} returns this
 */
proto.sliverpb.RegistryReadReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistryReadReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistryRead.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistryRead.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistryRead} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryRead.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistryRead}
 */
proto.sliverpb.RegistryRead.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistryRead;
  return proto.sliverpb.RegistryRead.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistryRead} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistryRead}
 */
proto.sliverpb.RegistryRead.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistryRead.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistryRead.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistryRead} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryRead.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Value = 1;
 * @return {string}
 */
proto.sliverpb.RegistryRead.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryRead} returns this
 */
proto.sliverpb.RegistryRead.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.RegistryRead.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.RegistryRead} returns this
*/
proto.sliverpb.RegistryRead.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistryRead} returns this
 */
proto.sliverpb.RegistryRead.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistryRead.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistryWriteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistryWriteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistryWriteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryWriteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    hive: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 5, ""),
    bytevalue: msg.getBytevalue_asB64(),
    dwordvalue: jspb.Message.getFieldWithDefault(msg, 7, 0),
    qwordvalue: jspb.Message.getFieldWithDefault(msg, 8, 0),
    type: jspb.Message.getFieldWithDefault(msg, 10, 0),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistryWriteReq}
 */
proto.sliverpb.RegistryWriteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistryWriteReq;
  return proto.sliverpb.RegistryWriteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistryWriteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistryWriteReq}
 */
proto.sliverpb.RegistryWriteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytevalue(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDwordvalue(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQwordvalue(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistryWriteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistryWriteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistryWriteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryWriteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHive();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStringvalue();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBytevalue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getDwordvalue();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getQwordvalue();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Hive = 1;
 * @return {string}
 */
proto.sliverpb.RegistryWriteReq.prototype.getHive = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryWriteReq} returns this
 */
proto.sliverpb.RegistryWriteReq.prototype.setHive = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Path = 2;
 * @return {string}
 */
proto.sliverpb.RegistryWriteReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryWriteReq} returns this
 */
proto.sliverpb.RegistryWriteReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Key = 3;
 * @return {string}
 */
proto.sliverpb.RegistryWriteReq.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryWriteReq} returns this
 */
proto.sliverpb.RegistryWriteReq.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Hostname = 4;
 * @return {string}
 */
proto.sliverpb.RegistryWriteReq.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryWriteReq} returns this
 */
proto.sliverpb.RegistryWriteReq.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string StringValue = 5;
 * @return {string}
 */
proto.sliverpb.RegistryWriteReq.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryWriteReq} returns this
 */
proto.sliverpb.RegistryWriteReq.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes ByteValue = 6;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.RegistryWriteReq.prototype.getBytevalue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes ByteValue = 6;
 * This is a type-conversion wrapper around `getBytevalue()`
 * @return {string}
 */
proto.sliverpb.RegistryWriteReq.prototype.getBytevalue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytevalue()));
};


/**
 * optional bytes ByteValue = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytevalue()`
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistryWriteReq.prototype.getBytevalue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytevalue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.RegistryWriteReq} returns this
 */
proto.sliverpb.RegistryWriteReq.prototype.setBytevalue = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional uint32 DWordValue = 7;
 * @return {number}
 */
proto.sliverpb.RegistryWriteReq.prototype.getDwordvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.RegistryWriteReq} returns this
 */
proto.sliverpb.RegistryWriteReq.prototype.setDwordvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 QWordValue = 8;
 * @return {number}
 */
proto.sliverpb.RegistryWriteReq.prototype.getQwordvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.RegistryWriteReq} returns this
 */
proto.sliverpb.RegistryWriteReq.prototype.setQwordvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 Type = 10;
 * @return {number}
 */
proto.sliverpb.RegistryWriteReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.RegistryWriteReq} returns this
 */
proto.sliverpb.RegistryWriteReq.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.RegistryWriteReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.RegistryWriteReq} returns this
*/
proto.sliverpb.RegistryWriteReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistryWriteReq} returns this
 */
proto.sliverpb.RegistryWriteReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistryWriteReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistryWrite.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistryWrite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistryWrite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryWrite.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistryWrite}
 */
proto.sliverpb.RegistryWrite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistryWrite;
  return proto.sliverpb.RegistryWrite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistryWrite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistryWrite}
 */
proto.sliverpb.RegistryWrite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistryWrite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistryWrite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistryWrite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryWrite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.RegistryWrite.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.RegistryWrite} returns this
*/
proto.sliverpb.RegistryWrite.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistryWrite} returns this
 */
proto.sliverpb.RegistryWrite.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistryWrite.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistryCreateKeyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistryCreateKeyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryCreateKeyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    hive: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistryCreateKeyReq}
 */
proto.sliverpb.RegistryCreateKeyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistryCreateKeyReq;
  return proto.sliverpb.RegistryCreateKeyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistryCreateKeyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistryCreateKeyReq}
 */
proto.sliverpb.RegistryCreateKeyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistryCreateKeyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistryCreateKeyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryCreateKeyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHive();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Hive = 1;
 * @return {string}
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.getHive = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryCreateKeyReq} returns this
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.setHive = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Path = 2;
 * @return {string}
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryCreateKeyReq} returns this
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Key = 3;
 * @return {string}
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryCreateKeyReq} returns this
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Hostname = 4;
 * @return {string}
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryCreateKeyReq} returns this
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.RegistryCreateKeyReq} returns this
*/
proto.sliverpb.RegistryCreateKeyReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistryCreateKeyReq} returns this
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistryCreateKeyReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistryCreateKey.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistryCreateKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistryCreateKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryCreateKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistryCreateKey}
 */
proto.sliverpb.RegistryCreateKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistryCreateKey;
  return proto.sliverpb.RegistryCreateKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistryCreateKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistryCreateKey}
 */
proto.sliverpb.RegistryCreateKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistryCreateKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistryCreateKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistryCreateKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryCreateKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.RegistryCreateKey.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.RegistryCreateKey} returns this
*/
proto.sliverpb.RegistryCreateKey.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistryCreateKey} returns this
 */
proto.sliverpb.RegistryCreateKey.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistryCreateKey.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistryDeleteKeyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistryDeleteKeyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryDeleteKeyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    hive: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistryDeleteKeyReq}
 */
proto.sliverpb.RegistryDeleteKeyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistryDeleteKeyReq;
  return proto.sliverpb.RegistryDeleteKeyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistryDeleteKeyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistryDeleteKeyReq}
 */
proto.sliverpb.RegistryDeleteKeyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistryDeleteKeyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistryDeleteKeyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryDeleteKeyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHive();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Hive = 1;
 * @return {string}
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.getHive = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryDeleteKeyReq} returns this
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.setHive = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Path = 2;
 * @return {string}
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryDeleteKeyReq} returns this
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Key = 3;
 * @return {string}
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryDeleteKeyReq} returns this
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Hostname = 4;
 * @return {string}
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryDeleteKeyReq} returns this
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.RegistryDeleteKeyReq} returns this
*/
proto.sliverpb.RegistryDeleteKeyReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistryDeleteKeyReq} returns this
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistryDeleteKeyReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistryDeleteKey.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistryDeleteKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistryDeleteKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryDeleteKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistryDeleteKey}
 */
proto.sliverpb.RegistryDeleteKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistryDeleteKey;
  return proto.sliverpb.RegistryDeleteKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistryDeleteKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistryDeleteKey}
 */
proto.sliverpb.RegistryDeleteKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistryDeleteKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistryDeleteKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistryDeleteKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryDeleteKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.RegistryDeleteKey.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.RegistryDeleteKey} returns this
*/
proto.sliverpb.RegistryDeleteKey.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistryDeleteKey} returns this
 */
proto.sliverpb.RegistryDeleteKey.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistryDeleteKey.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistrySubKeyListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistrySubKeyListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistrySubKeyListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistrySubKeyListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    hive: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistrySubKeyListReq}
 */
proto.sliverpb.RegistrySubKeyListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistrySubKeyListReq;
  return proto.sliverpb.RegistrySubKeyListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistrySubKeyListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistrySubKeyListReq}
 */
proto.sliverpb.RegistrySubKeyListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistrySubKeyListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistrySubKeyListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistrySubKeyListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistrySubKeyListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHive();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Hive = 1;
 * @return {string}
 */
proto.sliverpb.RegistrySubKeyListReq.prototype.getHive = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistrySubKeyListReq} returns this
 */
proto.sliverpb.RegistrySubKeyListReq.prototype.setHive = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Path = 2;
 * @return {string}
 */
proto.sliverpb.RegistrySubKeyListReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistrySubKeyListReq} returns this
 */
proto.sliverpb.RegistrySubKeyListReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Hostname = 4;
 * @return {string}
 */
proto.sliverpb.RegistrySubKeyListReq.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistrySubKeyListReq} returns this
 */
proto.sliverpb.RegistrySubKeyListReq.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.RegistrySubKeyListReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.RegistrySubKeyListReq} returns this
*/
proto.sliverpb.RegistrySubKeyListReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistrySubKeyListReq} returns this
 */
proto.sliverpb.RegistrySubKeyListReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistrySubKeyListReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.RegistrySubKeyList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistrySubKeyList.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistrySubKeyList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistrySubKeyList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistrySubKeyList.toObject = function(includeInstance, msg) {
  var f, obj = {
    subkeysList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistrySubKeyList}
 */
proto.sliverpb.RegistrySubKeyList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistrySubKeyList;
  return proto.sliverpb.RegistrySubKeyList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistrySubKeyList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistrySubKeyList}
 */
proto.sliverpb.RegistrySubKeyList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSubkeys(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistrySubKeyList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistrySubKeyList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistrySubKeyList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistrySubKeyList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubkeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string Subkeys = 1;
 * @return {!Array<string>}
 */
proto.sliverpb.RegistrySubKeyList.prototype.getSubkeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sliverpb.RegistrySubKeyList} returns this
 */
proto.sliverpb.RegistrySubKeyList.prototype.setSubkeysList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.RegistrySubKeyList} returns this
 */
proto.sliverpb.RegistrySubKeyList.prototype.addSubkeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.RegistrySubKeyList} returns this
 */
proto.sliverpb.RegistrySubKeyList.prototype.clearSubkeysList = function() {
  return this.setSubkeysList([]);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.RegistrySubKeyList.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.RegistrySubKeyList} returns this
*/
proto.sliverpb.RegistrySubKeyList.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistrySubKeyList} returns this
 */
proto.sliverpb.RegistrySubKeyList.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistrySubKeyList.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistryListValuesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistryListValuesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistryListValuesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryListValuesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    hive: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistryListValuesReq}
 */
proto.sliverpb.RegistryListValuesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistryListValuesReq;
  return proto.sliverpb.RegistryListValuesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistryListValuesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistryListValuesReq}
 */
proto.sliverpb.RegistryListValuesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistryListValuesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistryListValuesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistryListValuesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryListValuesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHive();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Hive = 1;
 * @return {string}
 */
proto.sliverpb.RegistryListValuesReq.prototype.getHive = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryListValuesReq} returns this
 */
proto.sliverpb.RegistryListValuesReq.prototype.setHive = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Path = 2;
 * @return {string}
 */
proto.sliverpb.RegistryListValuesReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryListValuesReq} returns this
 */
proto.sliverpb.RegistryListValuesReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Hostname = 4;
 * @return {string}
 */
proto.sliverpb.RegistryListValuesReq.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegistryListValuesReq} returns this
 */
proto.sliverpb.RegistryListValuesReq.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.RegistryListValuesReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.RegistryListValuesReq} returns this
*/
proto.sliverpb.RegistryListValuesReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistryListValuesReq} returns this
 */
proto.sliverpb.RegistryListValuesReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistryListValuesReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.RegistryValuesList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegistryValuesList.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegistryValuesList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegistryValuesList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryValuesList.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuenamesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegistryValuesList}
 */
proto.sliverpb.RegistryValuesList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegistryValuesList;
  return proto.sliverpb.RegistryValuesList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegistryValuesList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegistryValuesList}
 */
proto.sliverpb.RegistryValuesList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addValuenames(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegistryValuesList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegistryValuesList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegistryValuesList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegistryValuesList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuenamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string ValueNames = 1;
 * @return {!Array<string>}
 */
proto.sliverpb.RegistryValuesList.prototype.getValuenamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sliverpb.RegistryValuesList} returns this
 */
proto.sliverpb.RegistryValuesList.prototype.setValuenamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.RegistryValuesList} returns this
 */
proto.sliverpb.RegistryValuesList.prototype.addValuenames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.RegistryValuesList} returns this
 */
proto.sliverpb.RegistryValuesList.prototype.clearValuenamesList = function() {
  return this.setValuenamesList([]);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.RegistryValuesList.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.RegistryValuesList} returns this
*/
proto.sliverpb.RegistryValuesList.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegistryValuesList} returns this
 */
proto.sliverpb.RegistryValuesList.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegistryValuesList.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Tunnel.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Tunnel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Tunnel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Tunnel.toObject = function(includeInstance, msg) {
  var f, obj = {
    tunnelid: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    sessionid: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Tunnel}
 */
proto.sliverpb.Tunnel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Tunnel;
  return proto.sliverpb.Tunnel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Tunnel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Tunnel}
 */
proto.sliverpb.Tunnel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTunnelid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Tunnel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Tunnel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Tunnel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Tunnel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTunnelid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional uint64 TunnelID = 8;
 * @return {string}
 */
proto.sliverpb.Tunnel.prototype.getTunnelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Tunnel} returns this
 */
proto.sliverpb.Tunnel.prototype.setTunnelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional string SessionID = 9;
 * @return {string}
 */
proto.sliverpb.Tunnel.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Tunnel} returns this
 */
proto.sliverpb.Tunnel.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.TunnelData.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.TunnelData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.TunnelData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.TunnelData.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    closed: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    sequence: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ack: jspb.Message.getFieldWithDefault(msg, 4, 0),
    resend: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    tunnelid: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    sessionid: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.TunnelData}
 */
proto.sliverpb.TunnelData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.TunnelData;
  return proto.sliverpb.TunnelData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.TunnelData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.TunnelData}
 */
proto.sliverpb.TunnelData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClosed(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAck(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResend(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTunnelid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.TunnelData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.TunnelData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.TunnelData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.TunnelData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getClosed();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAck();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getResend();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getTunnelid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.TunnelData.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.TunnelData.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.TunnelData.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.TunnelData} returns this
 */
proto.sliverpb.TunnelData.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bool Closed = 2;
 * @return {boolean}
 */
proto.sliverpb.TunnelData.prototype.getClosed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.TunnelData} returns this
 */
proto.sliverpb.TunnelData.prototype.setClosed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint64 Sequence = 3;
 * @return {number}
 */
proto.sliverpb.TunnelData.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.TunnelData} returns this
 */
proto.sliverpb.TunnelData.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 Ack = 4;
 * @return {number}
 */
proto.sliverpb.TunnelData.prototype.getAck = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.TunnelData} returns this
 */
proto.sliverpb.TunnelData.prototype.setAck = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool Resend = 5;
 * @return {boolean}
 */
proto.sliverpb.TunnelData.prototype.getResend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.TunnelData} returns this
 */
proto.sliverpb.TunnelData.prototype.setResend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional uint64 TunnelID = 8;
 * @return {string}
 */
proto.sliverpb.TunnelData.prototype.getTunnelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.TunnelData} returns this
 */
proto.sliverpb.TunnelData.prototype.setTunnelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional string SessionID = 9;
 * @return {string}
 */
proto.sliverpb.TunnelData.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.TunnelData} returns this
 */
proto.sliverpb.TunnelData.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ShellReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ShellReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ShellReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ShellReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    enablepty: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    pid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tunnelid: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ShellReq}
 */
proto.sliverpb.ShellReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ShellReq;
  return proto.sliverpb.ShellReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ShellReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ShellReq}
 */
proto.sliverpb.ShellReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablepty(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTunnelid(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ShellReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ShellReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ShellReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ShellReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnablepty();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTunnelid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.ShellReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ShellReq} returns this
 */
proto.sliverpb.ShellReq.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool EnablePTY = 2;
 * @return {boolean}
 */
proto.sliverpb.ShellReq.prototype.getEnablepty = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.ShellReq} returns this
 */
proto.sliverpb.ShellReq.prototype.setEnablepty = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 Pid = 3;
 * @return {number}
 */
proto.sliverpb.ShellReq.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.ShellReq} returns this
 */
proto.sliverpb.ShellReq.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 TunnelID = 8;
 * @return {string}
 */
proto.sliverpb.ShellReq.prototype.getTunnelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.ShellReq} returns this
 */
proto.sliverpb.ShellReq.prototype.setTunnelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.ShellReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.ShellReq} returns this
*/
proto.sliverpb.ShellReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ShellReq} returns this
 */
proto.sliverpb.ShellReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ShellReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Shell.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Shell.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Shell} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Shell.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    enablepty: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    pid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tunnelid: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Shell}
 */
proto.sliverpb.Shell.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Shell;
  return proto.sliverpb.Shell.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Shell} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Shell}
 */
proto.sliverpb.Shell.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablepty(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTunnelid(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Shell.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Shell.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Shell} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Shell.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnablepty();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTunnelid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.sliverpb.Shell.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Shell} returns this
 */
proto.sliverpb.Shell.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool EnablePTY = 2;
 * @return {boolean}
 */
proto.sliverpb.Shell.prototype.getEnablepty = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.Shell} returns this
 */
proto.sliverpb.Shell.prototype.setEnablepty = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 Pid = 3;
 * @return {number}
 */
proto.sliverpb.Shell.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Shell} returns this
 */
proto.sliverpb.Shell.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 TunnelID = 8;
 * @return {string}
 */
proto.sliverpb.Shell.prototype.getTunnelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Shell} returns this
 */
proto.sliverpb.Shell.prototype.setTunnelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Shell.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Shell} returns this
*/
proto.sliverpb.Shell.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Shell} returns this
 */
proto.sliverpb.Shell.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Shell.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PortfwdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PortfwdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PortfwdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PortfwdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    protocol: jspb.Message.getFieldWithDefault(msg, 2, 0),
    host: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tunnelid: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PortfwdReq}
 */
proto.sliverpb.PortfwdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PortfwdReq;
  return proto.sliverpb.PortfwdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PortfwdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PortfwdReq}
 */
proto.sliverpb.PortfwdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTunnelid(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PortfwdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PortfwdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PortfwdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PortfwdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTunnelid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 Port = 1;
 * @return {number}
 */
proto.sliverpb.PortfwdReq.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.PortfwdReq} returns this
 */
proto.sliverpb.PortfwdReq.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Protocol = 2;
 * @return {number}
 */
proto.sliverpb.PortfwdReq.prototype.getProtocol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.PortfwdReq} returns this
 */
proto.sliverpb.PortfwdReq.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string Host = 3;
 * @return {string}
 */
proto.sliverpb.PortfwdReq.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.PortfwdReq} returns this
 */
proto.sliverpb.PortfwdReq.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 TunnelID = 8;
 * @return {string}
 */
proto.sliverpb.PortfwdReq.prototype.getTunnelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.PortfwdReq} returns this
 */
proto.sliverpb.PortfwdReq.prototype.setTunnelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.PortfwdReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.PortfwdReq} returns this
*/
proto.sliverpb.PortfwdReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.PortfwdReq} returns this
 */
proto.sliverpb.PortfwdReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.PortfwdReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Portfwd.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Portfwd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Portfwd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Portfwd.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    protocol: jspb.Message.getFieldWithDefault(msg, 2, 0),
    host: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tunnelid: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Portfwd}
 */
proto.sliverpb.Portfwd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Portfwd;
  return proto.sliverpb.Portfwd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Portfwd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Portfwd}
 */
proto.sliverpb.Portfwd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTunnelid(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Portfwd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Portfwd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Portfwd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Portfwd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTunnelid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 Port = 1;
 * @return {number}
 */
proto.sliverpb.Portfwd.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Portfwd} returns this
 */
proto.sliverpb.Portfwd.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Protocol = 2;
 * @return {number}
 */
proto.sliverpb.Portfwd.prototype.getProtocol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.Portfwd} returns this
 */
proto.sliverpb.Portfwd.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string Host = 3;
 * @return {string}
 */
proto.sliverpb.Portfwd.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Portfwd} returns this
 */
proto.sliverpb.Portfwd.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 TunnelID = 8;
 * @return {string}
 */
proto.sliverpb.Portfwd.prototype.getTunnelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Portfwd} returns this
 */
proto.sliverpb.Portfwd.prototype.setTunnelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Portfwd.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Portfwd} returns this
*/
proto.sliverpb.Portfwd.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Portfwd} returns this
 */
proto.sliverpb.Portfwd.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Portfwd.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Socks.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Socks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Socks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Socks.toObject = function(includeInstance, msg) {
  var f, obj = {
    tunnelid: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    sessionid: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Socks}
 */
proto.sliverpb.Socks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Socks;
  return proto.sliverpb.Socks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Socks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Socks}
 */
proto.sliverpb.Socks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTunnelid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Socks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Socks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Socks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Socks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTunnelid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional uint64 TunnelID = 8;
 * @return {string}
 */
proto.sliverpb.Socks.prototype.getTunnelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Socks} returns this
 */
proto.sliverpb.Socks.prototype.setTunnelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional string SessionID = 9;
 * @return {string}
 */
proto.sliverpb.Socks.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.Socks} returns this
 */
proto.sliverpb.Socks.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.SocksData.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.SocksData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.SocksData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SocksData.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    closeconn: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    username: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 5, 0),
    tunnelid: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.SocksData}
 */
proto.sliverpb.SocksData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.SocksData;
  return proto.sliverpb.SocksData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.SocksData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.SocksData}
 */
proto.sliverpb.SocksData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCloseconn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTunnelid(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.SocksData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.SocksData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.SocksData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SocksData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getCloseconn();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getTunnelid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.SocksData.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.SocksData.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.SocksData.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.SocksData} returns this
 */
proto.sliverpb.SocksData.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bool CloseConn = 2;
 * @return {boolean}
 */
proto.sliverpb.SocksData.prototype.getCloseconn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.SocksData} returns this
 */
proto.sliverpb.SocksData.prototype.setCloseconn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string Username = 3;
 * @return {string}
 */
proto.sliverpb.SocksData.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SocksData} returns this
 */
proto.sliverpb.SocksData.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Password = 4;
 * @return {string}
 */
proto.sliverpb.SocksData.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SocksData} returns this
 */
proto.sliverpb.SocksData.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 Sequence = 5;
 * @return {number}
 */
proto.sliverpb.SocksData.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.SocksData} returns this
 */
proto.sliverpb.SocksData.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 TunnelID = 8;
 * @return {string}
 */
proto.sliverpb.SocksData.prototype.getTunnelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SocksData} returns this
 */
proto.sliverpb.SocksData.prototype.setTunnelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.SocksData.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.SocksData} returns this
*/
proto.sliverpb.SocksData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SocksData} returns this
 */
proto.sliverpb.SocksData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SocksData.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.PivotStartListenerReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PivotStartListenerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PivotStartListenerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PivotStartListenerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotStartListenerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bindaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    optionsList: (f = jspb.Message.getRepeatedBooleanField(msg, 3)) == null ? undefined : f,
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PivotStartListenerReq}
 */
proto.sliverpb.PivotStartListenerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PivotStartListenerReq;
  return proto.sliverpb.PivotStartListenerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PivotStartListenerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PivotStartListenerReq}
 */
proto.sliverpb.PivotStartListenerReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sliverpb.PivotType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBindaddress(value);
      break;
    case 3:
      var values = /** @type {!Array<boolean>} */ (reader.isDelimited() ? reader.readPackedBool() : [reader.readBool()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOptions(values[i]);
      }
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotStartListenerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PivotStartListenerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PivotStartListenerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotStartListenerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBindaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOptionsList();
  if (f.length > 0) {
    writer.writePackedBool(
      3,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional PivotType Type = 1;
 * @return {!proto.sliverpb.PivotType}
 */
proto.sliverpb.PivotStartListenerReq.prototype.getType = function() {
  return /** @type {!proto.sliverpb.PivotType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sliverpb.PivotType} value
 * @return {!proto.sliverpb.PivotStartListenerReq} returns this
 */
proto.sliverpb.PivotStartListenerReq.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string BindAddress = 2;
 * @return {string}
 */
proto.sliverpb.PivotStartListenerReq.prototype.getBindaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.PivotStartListenerReq} returns this
 */
proto.sliverpb.PivotStartListenerReq.prototype.setBindaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated bool Options = 3;
 * @return {!Array<boolean>}
 */
proto.sliverpb.PivotStartListenerReq.prototype.getOptionsList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 3));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.sliverpb.PivotStartListenerReq} returns this
 */
proto.sliverpb.PivotStartListenerReq.prototype.setOptionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.PivotStartListenerReq} returns this
 */
proto.sliverpb.PivotStartListenerReq.prototype.addOptions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.PivotStartListenerReq} returns this
 */
proto.sliverpb.PivotStartListenerReq.prototype.clearOptionsList = function() {
  return this.setOptionsList([]);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.PivotStartListenerReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.PivotStartListenerReq} returns this
*/
proto.sliverpb.PivotStartListenerReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.PivotStartListenerReq} returns this
 */
proto.sliverpb.PivotStartListenerReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.PivotStartListenerReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PivotStopListenerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PivotStopListenerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PivotStopListenerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotStopListenerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PivotStopListenerReq}
 */
proto.sliverpb.PivotStopListenerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PivotStopListenerReq;
  return proto.sliverpb.PivotStopListenerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PivotStopListenerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PivotStopListenerReq}
 */
proto.sliverpb.PivotStopListenerReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotStopListenerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PivotStopListenerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PivotStopListenerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotStopListenerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 ID = 1;
 * @return {number}
 */
proto.sliverpb.PivotStopListenerReq.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.PivotStopListenerReq} returns this
 */
proto.sliverpb.PivotStopListenerReq.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.PivotStopListenerReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.PivotStopListenerReq} returns this
*/
proto.sliverpb.PivotStopListenerReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.PivotStopListenerReq} returns this
 */
proto.sliverpb.PivotStopListenerReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.PivotStopListenerReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.PivotListener.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PivotListener.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PivotListener.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PivotListener} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotListener.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    bindaddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pivotsList: jspb.Message.toObjectList(msg.getPivotsList(),
    proto.sliverpb.NetConnPivot.toObject, includeInstance),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PivotListener}
 */
proto.sliverpb.PivotListener.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PivotListener;
  return proto.sliverpb.PivotListener.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PivotListener} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PivotListener}
 */
proto.sliverpb.PivotListener.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.sliverpb.PivotType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBindaddress(value);
      break;
    case 4:
      var value = new proto.sliverpb.NetConnPivot;
      reader.readMessage(value,proto.sliverpb.NetConnPivot.deserializeBinaryFromReader);
      msg.addPivots(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotListener.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PivotListener.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PivotListener} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotListener.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getBindaddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPivotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sliverpb.NetConnPivot.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 ID = 1;
 * @return {number}
 */
proto.sliverpb.PivotListener.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.PivotListener} returns this
 */
proto.sliverpb.PivotListener.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PivotType Type = 2;
 * @return {!proto.sliverpb.PivotType}
 */
proto.sliverpb.PivotListener.prototype.getType = function() {
  return /** @type {!proto.sliverpb.PivotType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sliverpb.PivotType} value
 * @return {!proto.sliverpb.PivotListener} returns this
 */
proto.sliverpb.PivotListener.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string BindAddress = 3;
 * @return {string}
 */
proto.sliverpb.PivotListener.prototype.getBindaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.PivotListener} returns this
 */
proto.sliverpb.PivotListener.prototype.setBindaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated NetConnPivot Pivots = 4;
 * @return {!Array<!proto.sliverpb.NetConnPivot>}
 */
proto.sliverpb.PivotListener.prototype.getPivotsList = function() {
  return /** @type{!Array<!proto.sliverpb.NetConnPivot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sliverpb.NetConnPivot, 4));
};


/**
 * @param {!Array<!proto.sliverpb.NetConnPivot>} value
 * @return {!proto.sliverpb.PivotListener} returns this
*/
proto.sliverpb.PivotListener.prototype.setPivotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sliverpb.NetConnPivot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.NetConnPivot}
 */
proto.sliverpb.PivotListener.prototype.addPivots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sliverpb.NetConnPivot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.PivotListener} returns this
 */
proto.sliverpb.PivotListener.prototype.clearPivotsList = function() {
  return this.setPivotsList([]);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.PivotListener.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.PivotListener} returns this
*/
proto.sliverpb.PivotListener.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.PivotListener} returns this
 */
proto.sliverpb.PivotListener.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.PivotListener.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PivotHello.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PivotHello.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PivotHello} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotHello.toObject = function(includeInstance, msg) {
  var f, obj = {
    publickey: msg.getPublickey_asB64(),
    peerid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    publickeysignature: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sessionkey: msg.getSessionkey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PivotHello}
 */
proto.sliverpb.PivotHello.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PivotHello;
  return proto.sliverpb.PivotHello.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PivotHello} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PivotHello}
 */
proto.sliverpb.PivotHello.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublickey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setPeerid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublickeysignature(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSessionkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotHello.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PivotHello.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PivotHello} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotHello.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublickey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPeerid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getPublickeysignature();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSessionkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional bytes PublicKey = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.PivotHello.prototype.getPublickey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes PublicKey = 1;
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {string}
 */
proto.sliverpb.PivotHello.prototype.getPublickey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublickey()));
};


/**
 * optional bytes PublicKey = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotHello.prototype.getPublickey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublickey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.PivotHello} returns this
 */
proto.sliverpb.PivotHello.prototype.setPublickey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 PeerID = 2;
 * @return {string}
 */
proto.sliverpb.PivotHello.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.PivotHello} returns this
 */
proto.sliverpb.PivotHello.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string PublicKeySignature = 3;
 * @return {string}
 */
proto.sliverpb.PivotHello.prototype.getPublickeysignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.PivotHello} returns this
 */
proto.sliverpb.PivotHello.prototype.setPublickeysignature = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes SessionKey = 4;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.PivotHello.prototype.getSessionkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes SessionKey = 4;
 * This is a type-conversion wrapper around `getSessionkey()`
 * @return {string}
 */
proto.sliverpb.PivotHello.prototype.getSessionkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSessionkey()));
};


/**
 * optional bytes SessionKey = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSessionkey()`
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotHello.prototype.getSessionkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSessionkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.PivotHello} returns this
 */
proto.sliverpb.PivotHello.prototype.setSessionkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PivotServerKeyExchange.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PivotServerKeyExchange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PivotServerKeyExchange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotServerKeyExchange.toObject = function(includeInstance, msg) {
  var f, obj = {
    originid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sessionkey: msg.getSessionkey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PivotServerKeyExchange}
 */
proto.sliverpb.PivotServerKeyExchange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PivotServerKeyExchange;
  return proto.sliverpb.PivotServerKeyExchange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PivotServerKeyExchange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PivotServerKeyExchange}
 */
proto.sliverpb.PivotServerKeyExchange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOriginid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSessionkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotServerKeyExchange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PivotServerKeyExchange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PivotServerKeyExchange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotServerKeyExchange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSessionkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional int64 OriginID = 1;
 * @return {number}
 */
proto.sliverpb.PivotServerKeyExchange.prototype.getOriginid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.PivotServerKeyExchange} returns this
 */
proto.sliverpb.PivotServerKeyExchange.prototype.setOriginid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes SessionKey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.PivotServerKeyExchange.prototype.getSessionkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes SessionKey = 2;
 * This is a type-conversion wrapper around `getSessionkey()`
 * @return {string}
 */
proto.sliverpb.PivotServerKeyExchange.prototype.getSessionkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSessionkey()));
};


/**
 * optional bytes SessionKey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSessionkey()`
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotServerKeyExchange.prototype.getSessionkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSessionkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.PivotServerKeyExchange} returns this
 */
proto.sliverpb.PivotServerKeyExchange.prototype.setSessionkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PivotPeer.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PivotPeer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PivotPeer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotPeer.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PivotPeer}
 */
proto.sliverpb.PivotPeer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PivotPeer;
  return proto.sliverpb.PivotPeer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PivotPeer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PivotPeer}
 */
proto.sliverpb.PivotPeer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setPeerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotPeer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PivotPeer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PivotPeer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotPeer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 PeerID = 1;
 * @return {string}
 */
proto.sliverpb.PivotPeer.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.PivotPeer} returns this
 */
proto.sliverpb.PivotPeer.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.sliverpb.PivotPeer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.PivotPeer} returns this
 */
proto.sliverpb.PivotPeer.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.PivotPeerEnvelope.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PivotPeerEnvelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PivotPeerEnvelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotPeerEnvelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    peersList: jspb.Message.toObjectList(msg.getPeersList(),
    proto.sliverpb.PivotPeer.toObject, includeInstance),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pivotsessionid: msg.getPivotsessionid_asB64(),
    data: msg.getData_asB64(),
    peerfailureat: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PivotPeerEnvelope}
 */
proto.sliverpb.PivotPeerEnvelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PivotPeerEnvelope;
  return proto.sliverpb.PivotPeerEnvelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PivotPeerEnvelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PivotPeerEnvelope}
 */
proto.sliverpb.PivotPeerEnvelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.PivotPeer;
      reader.readMessage(value,proto.sliverpb.PivotPeer.deserializeBinaryFromReader);
      msg.addPeers(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPivotsessionid(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPeerfailureat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PivotPeerEnvelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PivotPeerEnvelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotPeerEnvelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sliverpb.PivotPeer.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPivotsessionid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getPeerfailureat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * repeated PivotPeer Peers = 1;
 * @return {!Array<!proto.sliverpb.PivotPeer>}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.getPeersList = function() {
  return /** @type{!Array<!proto.sliverpb.PivotPeer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sliverpb.PivotPeer, 1));
};


/**
 * @param {!Array<!proto.sliverpb.PivotPeer>} value
 * @return {!proto.sliverpb.PivotPeerEnvelope} returns this
*/
proto.sliverpb.PivotPeerEnvelope.prototype.setPeersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sliverpb.PivotPeer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.PivotPeer}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.addPeers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sliverpb.PivotPeer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.PivotPeerEnvelope} returns this
 */
proto.sliverpb.PivotPeerEnvelope.prototype.clearPeersList = function() {
  return this.setPeersList([]);
};


/**
 * optional uint32 Type = 2;
 * @return {number}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.PivotPeerEnvelope} returns this
 */
proto.sliverpb.PivotPeerEnvelope.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes PivotSessionID = 3;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.getPivotsessionid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes PivotSessionID = 3;
 * This is a type-conversion wrapper around `getPivotsessionid()`
 * @return {string}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.getPivotsessionid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPivotsessionid()));
};


/**
 * optional bytes PivotSessionID = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPivotsessionid()`
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.getPivotsessionid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPivotsessionid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.PivotPeerEnvelope} returns this
 */
proto.sliverpb.PivotPeerEnvelope.prototype.setPivotsessionid = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes Data = 4;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes Data = 4;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.PivotPeerEnvelope} returns this
 */
proto.sliverpb.PivotPeerEnvelope.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional int64 PeerFailureAt = 5;
 * @return {number}
 */
proto.sliverpb.PivotPeerEnvelope.prototype.getPeerfailureat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.PivotPeerEnvelope} returns this
 */
proto.sliverpb.PivotPeerEnvelope.prototype.setPeerfailureat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PivotPing.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PivotPing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PivotPing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotPing.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PivotPing}
 */
proto.sliverpb.PivotPing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PivotPing;
  return proto.sliverpb.PivotPing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PivotPing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PivotPing}
 */
proto.sliverpb.PivotPing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotPing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PivotPing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PivotPing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotPing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 Nonce = 1;
 * @return {number}
 */
proto.sliverpb.PivotPing.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.PivotPing} returns this
 */
proto.sliverpb.PivotPing.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.NetConnPivot.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.NetConnPivot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.NetConnPivot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.NetConnPivot.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    remoteaddress: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.NetConnPivot}
 */
proto.sliverpb.NetConnPivot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.NetConnPivot;
  return proto.sliverpb.NetConnPivot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.NetConnPivot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.NetConnPivot}
 */
proto.sliverpb.NetConnPivot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setPeerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.NetConnPivot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.NetConnPivot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.NetConnPivot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.NetConnPivot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getRemoteaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 PeerID = 1;
 * @return {string}
 */
proto.sliverpb.NetConnPivot.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.NetConnPivot} returns this
 */
proto.sliverpb.NetConnPivot.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string RemoteAddress = 2;
 * @return {string}
 */
proto.sliverpb.NetConnPivot.prototype.getRemoteaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.NetConnPivot} returns this
 */
proto.sliverpb.NetConnPivot.prototype.setRemoteaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PivotPeerFailure.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PivotPeerFailure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PivotPeerFailure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotPeerFailure.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    err: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PivotPeerFailure}
 */
proto.sliverpb.PivotPeerFailure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PivotPeerFailure;
  return proto.sliverpb.PivotPeerFailure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PivotPeerFailure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PivotPeerFailure}
 */
proto.sliverpb.PivotPeerFailure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setPeerid(value);
      break;
    case 2:
      var value = /** @type {!proto.sliverpb.PeerFailureType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotPeerFailure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PivotPeerFailure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PivotPeerFailure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotPeerFailure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getErr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 PeerID = 1;
 * @return {string}
 */
proto.sliverpb.PivotPeerFailure.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.PivotPeerFailure} returns this
 */
proto.sliverpb.PivotPeerFailure.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional PeerFailureType Type = 2;
 * @return {!proto.sliverpb.PeerFailureType}
 */
proto.sliverpb.PivotPeerFailure.prototype.getType = function() {
  return /** @type {!proto.sliverpb.PeerFailureType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sliverpb.PeerFailureType} value
 * @return {!proto.sliverpb.PivotPeerFailure} returns this
 */
proto.sliverpb.PivotPeerFailure.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string Err = 3;
 * @return {string}
 */
proto.sliverpb.PivotPeerFailure.prototype.getErr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.PivotPeerFailure} returns this
 */
proto.sliverpb.PivotPeerFailure.prototype.setErr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PivotListenersReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PivotListenersReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PivotListenersReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotListenersReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PivotListenersReq}
 */
proto.sliverpb.PivotListenersReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PivotListenersReq;
  return proto.sliverpb.PivotListenersReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PivotListenersReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PivotListenersReq}
 */
proto.sliverpb.PivotListenersReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotListenersReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PivotListenersReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PivotListenersReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotListenersReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.PivotListenersReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.PivotListenersReq} returns this
*/
proto.sliverpb.PivotListenersReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.PivotListenersReq} returns this
 */
proto.sliverpb.PivotListenersReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.PivotListenersReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.PivotListeners.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PivotListeners.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PivotListeners.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PivotListeners} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotListeners.toObject = function(includeInstance, msg) {
  var f, obj = {
    listenersList: jspb.Message.toObjectList(msg.getListenersList(),
    proto.sliverpb.PivotListener.toObject, includeInstance),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PivotListeners}
 */
proto.sliverpb.PivotListeners.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PivotListeners;
  return proto.sliverpb.PivotListeners.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PivotListeners} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PivotListeners}
 */
proto.sliverpb.PivotListeners.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.PivotListener;
      reader.readMessage(value,proto.sliverpb.PivotListener.deserializeBinaryFromReader);
      msg.addListeners(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PivotListeners.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PivotListeners.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PivotListeners} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PivotListeners.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListenersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sliverpb.PivotListener.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PivotListener Listeners = 1;
 * @return {!Array<!proto.sliverpb.PivotListener>}
 */
proto.sliverpb.PivotListeners.prototype.getListenersList = function() {
  return /** @type{!Array<!proto.sliverpb.PivotListener>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sliverpb.PivotListener, 1));
};


/**
 * @param {!Array<!proto.sliverpb.PivotListener>} value
 * @return {!proto.sliverpb.PivotListeners} returns this
*/
proto.sliverpb.PivotListeners.prototype.setListenersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sliverpb.PivotListener=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.PivotListener}
 */
proto.sliverpb.PivotListeners.prototype.addListeners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sliverpb.PivotListener, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.PivotListeners} returns this
 */
proto.sliverpb.PivotListeners.prototype.clearListenersList = function() {
  return this.setListenersList([]);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.PivotListeners.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.PivotListeners} returns this
*/
proto.sliverpb.PivotListeners.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.PivotListeners} returns this
 */
proto.sliverpb.PivotListeners.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.PivotListeners.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGPortForwardStartReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGPortForwardStartReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGPortForwardStartReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGPortForwardStartReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    localport: jspb.Message.getFieldWithDefault(msg, 1, 0),
    remoteaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGPortForwardStartReq}
 */
proto.sliverpb.WGPortForwardStartReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGPortForwardStartReq;
  return proto.sliverpb.WGPortForwardStartReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGPortForwardStartReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGPortForwardStartReq}
 */
proto.sliverpb.WGPortForwardStartReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLocalport(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteaddress(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGPortForwardStartReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGPortForwardStartReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGPortForwardStartReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGPortForwardStartReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocalport();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRemoteaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 LocalPort = 1;
 * @return {number}
 */
proto.sliverpb.WGPortForwardStartReq.prototype.getLocalport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.WGPortForwardStartReq} returns this
 */
proto.sliverpb.WGPortForwardStartReq.prototype.setLocalport = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string RemoteAddress = 2;
 * @return {string}
 */
proto.sliverpb.WGPortForwardStartReq.prototype.getRemoteaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.WGPortForwardStartReq} returns this
 */
proto.sliverpb.WGPortForwardStartReq.prototype.setRemoteaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.WGPortForwardStartReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.WGPortForwardStartReq} returns this
*/
proto.sliverpb.WGPortForwardStartReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGPortForwardStartReq} returns this
 */
proto.sliverpb.WGPortForwardStartReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGPortForwardStartReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGPortForward.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGPortForward.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGPortForward} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGPortForward.toObject = function(includeInstance, msg) {
  var f, obj = {
    forwarder: (f = msg.getForwarder()) && proto.sliverpb.WGTCPForwarder.toObject(includeInstance, f),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGPortForward}
 */
proto.sliverpb.WGPortForward.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGPortForward;
  return proto.sliverpb.WGPortForward.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGPortForward} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGPortForward}
 */
proto.sliverpb.WGPortForward.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.WGTCPForwarder;
      reader.readMessage(value,proto.sliverpb.WGTCPForwarder.deserializeBinaryFromReader);
      msg.setForwarder(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGPortForward.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGPortForward.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGPortForward} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGPortForward.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getForwarder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sliverpb.WGTCPForwarder.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional WGTCPForwarder Forwarder = 1;
 * @return {?proto.sliverpb.WGTCPForwarder}
 */
proto.sliverpb.WGPortForward.prototype.getForwarder = function() {
  return /** @type{?proto.sliverpb.WGTCPForwarder} */ (
    jspb.Message.getWrapperField(this, proto.sliverpb.WGTCPForwarder, 1));
};


/**
 * @param {?proto.sliverpb.WGTCPForwarder|undefined} value
 * @return {!proto.sliverpb.WGPortForward} returns this
*/
proto.sliverpb.WGPortForward.prototype.setForwarder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGPortForward} returns this
 */
proto.sliverpb.WGPortForward.prototype.clearForwarder = function() {
  return this.setForwarder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGPortForward.prototype.hasForwarder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.WGPortForward.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.WGPortForward} returns this
*/
proto.sliverpb.WGPortForward.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGPortForward} returns this
 */
proto.sliverpb.WGPortForward.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGPortForward.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGPortForwardStopReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGPortForwardStopReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGPortForwardStopReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGPortForwardStopReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGPortForwardStopReq}
 */
proto.sliverpb.WGPortForwardStopReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGPortForwardStopReq;
  return proto.sliverpb.WGPortForwardStopReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGPortForwardStopReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGPortForwardStopReq}
 */
proto.sliverpb.WGPortForwardStopReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGPortForwardStopReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGPortForwardStopReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGPortForwardStopReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGPortForwardStopReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 ID = 1;
 * @return {number}
 */
proto.sliverpb.WGPortForwardStopReq.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.WGPortForwardStopReq} returns this
 */
proto.sliverpb.WGPortForwardStopReq.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.WGPortForwardStopReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.WGPortForwardStopReq} returns this
*/
proto.sliverpb.WGPortForwardStopReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGPortForwardStopReq} returns this
 */
proto.sliverpb.WGPortForwardStopReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGPortForwardStopReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGSocksStartReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGSocksStartReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGSocksStartReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocksStartReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGSocksStartReq}
 */
proto.sliverpb.WGSocksStartReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGSocksStartReq;
  return proto.sliverpb.WGSocksStartReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGSocksStartReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGSocksStartReq}
 */
proto.sliverpb.WGSocksStartReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGSocksStartReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGSocksStartReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGSocksStartReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocksStartReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 Port = 1;
 * @return {number}
 */
proto.sliverpb.WGSocksStartReq.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.WGSocksStartReq} returns this
 */
proto.sliverpb.WGSocksStartReq.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.WGSocksStartReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.WGSocksStartReq} returns this
*/
proto.sliverpb.WGSocksStartReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGSocksStartReq} returns this
 */
proto.sliverpb.WGSocksStartReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGSocksStartReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGSocks.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGSocks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGSocks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocks.toObject = function(includeInstance, msg) {
  var f, obj = {
    server: (f = msg.getServer()) && proto.sliverpb.WGSocksServer.toObject(includeInstance, f),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGSocks}
 */
proto.sliverpb.WGSocks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGSocks;
  return proto.sliverpb.WGSocks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGSocks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGSocks}
 */
proto.sliverpb.WGSocks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.WGSocksServer;
      reader.readMessage(value,proto.sliverpb.WGSocksServer.deserializeBinaryFromReader);
      msg.setServer(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGSocks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGSocks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGSocks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sliverpb.WGSocksServer.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional WGSocksServer Server = 1;
 * @return {?proto.sliverpb.WGSocksServer}
 */
proto.sliverpb.WGSocks.prototype.getServer = function() {
  return /** @type{?proto.sliverpb.WGSocksServer} */ (
    jspb.Message.getWrapperField(this, proto.sliverpb.WGSocksServer, 1));
};


/**
 * @param {?proto.sliverpb.WGSocksServer|undefined} value
 * @return {!proto.sliverpb.WGSocks} returns this
*/
proto.sliverpb.WGSocks.prototype.setServer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGSocks} returns this
 */
proto.sliverpb.WGSocks.prototype.clearServer = function() {
  return this.setServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGSocks.prototype.hasServer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.WGSocks.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.WGSocks} returns this
*/
proto.sliverpb.WGSocks.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGSocks} returns this
 */
proto.sliverpb.WGSocks.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGSocks.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGSocksStopReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGSocksStopReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGSocksStopReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocksStopReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGSocksStopReq}
 */
proto.sliverpb.WGSocksStopReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGSocksStopReq;
  return proto.sliverpb.WGSocksStopReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGSocksStopReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGSocksStopReq}
 */
proto.sliverpb.WGSocksStopReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGSocksStopReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGSocksStopReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGSocksStopReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocksStopReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 ID = 1;
 * @return {number}
 */
proto.sliverpb.WGSocksStopReq.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.WGSocksStopReq} returns this
 */
proto.sliverpb.WGSocksStopReq.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.WGSocksStopReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.WGSocksStopReq} returns this
*/
proto.sliverpb.WGSocksStopReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGSocksStopReq} returns this
 */
proto.sliverpb.WGSocksStopReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGSocksStopReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGTCPForwardersReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGTCPForwardersReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGTCPForwardersReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGTCPForwardersReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGTCPForwardersReq}
 */
proto.sliverpb.WGTCPForwardersReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGTCPForwardersReq;
  return proto.sliverpb.WGTCPForwardersReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGTCPForwardersReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGTCPForwardersReq}
 */
proto.sliverpb.WGTCPForwardersReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGTCPForwardersReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGTCPForwardersReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGTCPForwardersReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGTCPForwardersReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.WGTCPForwardersReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.WGTCPForwardersReq} returns this
*/
proto.sliverpb.WGTCPForwardersReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGTCPForwardersReq} returns this
 */
proto.sliverpb.WGTCPForwardersReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGTCPForwardersReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGSocksServersReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGSocksServersReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGSocksServersReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocksServersReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGSocksServersReq}
 */
proto.sliverpb.WGSocksServersReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGSocksServersReq;
  return proto.sliverpb.WGSocksServersReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGSocksServersReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGSocksServersReq}
 */
proto.sliverpb.WGSocksServersReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGSocksServersReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGSocksServersReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGSocksServersReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocksServersReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.WGSocksServersReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.WGSocksServersReq} returns this
*/
proto.sliverpb.WGSocksServersReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGSocksServersReq} returns this
 */
proto.sliverpb.WGSocksServersReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGSocksServersReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGTCPForwarder.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGTCPForwarder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGTCPForwarder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGTCPForwarder.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    localaddr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    remoteaddr: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGTCPForwarder}
 */
proto.sliverpb.WGTCPForwarder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGTCPForwarder;
  return proto.sliverpb.WGTCPForwarder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGTCPForwarder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGTCPForwarder}
 */
proto.sliverpb.WGTCPForwarder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocaladdr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteaddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGTCPForwarder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGTCPForwarder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGTCPForwarder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGTCPForwarder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLocaladdr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRemoteaddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 ID = 1;
 * @return {number}
 */
proto.sliverpb.WGTCPForwarder.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.WGTCPForwarder} returns this
 */
proto.sliverpb.WGTCPForwarder.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string LocalAddr = 2;
 * @return {string}
 */
proto.sliverpb.WGTCPForwarder.prototype.getLocaladdr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.WGTCPForwarder} returns this
 */
proto.sliverpb.WGTCPForwarder.prototype.setLocaladdr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string RemoteAddr = 3;
 * @return {string}
 */
proto.sliverpb.WGTCPForwarder.prototype.getRemoteaddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.WGTCPForwarder} returns this
 */
proto.sliverpb.WGTCPForwarder.prototype.setRemoteaddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGSocksServer.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGSocksServer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGSocksServer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocksServer.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    localaddr: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGSocksServer}
 */
proto.sliverpb.WGSocksServer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGSocksServer;
  return proto.sliverpb.WGSocksServer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGSocksServer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGSocksServer}
 */
proto.sliverpb.WGSocksServer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocaladdr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGSocksServer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGSocksServer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGSocksServer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocksServer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLocaladdr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 ID = 1;
 * @return {number}
 */
proto.sliverpb.WGSocksServer.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.WGSocksServer} returns this
 */
proto.sliverpb.WGSocksServer.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string LocalAddr = 2;
 * @return {string}
 */
proto.sliverpb.WGSocksServer.prototype.getLocaladdr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.WGSocksServer} returns this
 */
proto.sliverpb.WGSocksServer.prototype.setLocaladdr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.WGSocksServers.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGSocksServers.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGSocksServers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGSocksServers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocksServers.toObject = function(includeInstance, msg) {
  var f, obj = {
    serversList: jspb.Message.toObjectList(msg.getServersList(),
    proto.sliverpb.WGSocksServer.toObject, includeInstance),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGSocksServers}
 */
proto.sliverpb.WGSocksServers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGSocksServers;
  return proto.sliverpb.WGSocksServers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGSocksServers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGSocksServers}
 */
proto.sliverpb.WGSocksServers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.WGSocksServer;
      reader.readMessage(value,proto.sliverpb.WGSocksServer.deserializeBinaryFromReader);
      msg.addServers(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGSocksServers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGSocksServers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGSocksServers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGSocksServers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sliverpb.WGSocksServer.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WGSocksServer Servers = 1;
 * @return {!Array<!proto.sliverpb.WGSocksServer>}
 */
proto.sliverpb.WGSocksServers.prototype.getServersList = function() {
  return /** @type{!Array<!proto.sliverpb.WGSocksServer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sliverpb.WGSocksServer, 1));
};


/**
 * @param {!Array<!proto.sliverpb.WGSocksServer>} value
 * @return {!proto.sliverpb.WGSocksServers} returns this
*/
proto.sliverpb.WGSocksServers.prototype.setServersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sliverpb.WGSocksServer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.WGSocksServer}
 */
proto.sliverpb.WGSocksServers.prototype.addServers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sliverpb.WGSocksServer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.WGSocksServers} returns this
 */
proto.sliverpb.WGSocksServers.prototype.clearServersList = function() {
  return this.setServersList([]);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.WGSocksServers.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.WGSocksServers} returns this
*/
proto.sliverpb.WGSocksServers.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGSocksServers} returns this
 */
proto.sliverpb.WGSocksServers.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGSocksServers.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.WGTCPForwarders.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WGTCPForwarders.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WGTCPForwarders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WGTCPForwarders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGTCPForwarders.toObject = function(includeInstance, msg) {
  var f, obj = {
    forwardersList: jspb.Message.toObjectList(msg.getForwardersList(),
    proto.sliverpb.WGTCPForwarder.toObject, includeInstance),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WGTCPForwarders}
 */
proto.sliverpb.WGTCPForwarders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WGTCPForwarders;
  return proto.sliverpb.WGTCPForwarders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WGTCPForwarders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WGTCPForwarders}
 */
proto.sliverpb.WGTCPForwarders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.WGTCPForwarder;
      reader.readMessage(value,proto.sliverpb.WGTCPForwarder.deserializeBinaryFromReader);
      msg.addForwarders(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WGTCPForwarders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WGTCPForwarders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WGTCPForwarders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WGTCPForwarders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getForwardersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sliverpb.WGTCPForwarder.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WGTCPForwarder Forwarders = 1;
 * @return {!Array<!proto.sliverpb.WGTCPForwarder>}
 */
proto.sliverpb.WGTCPForwarders.prototype.getForwardersList = function() {
  return /** @type{!Array<!proto.sliverpb.WGTCPForwarder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sliverpb.WGTCPForwarder, 1));
};


/**
 * @param {!Array<!proto.sliverpb.WGTCPForwarder>} value
 * @return {!proto.sliverpb.WGTCPForwarders} returns this
*/
proto.sliverpb.WGTCPForwarders.prototype.setForwardersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sliverpb.WGTCPForwarder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.WGTCPForwarder}
 */
proto.sliverpb.WGTCPForwarders.prototype.addForwarders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sliverpb.WGTCPForwarder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.WGTCPForwarders} returns this
 */
proto.sliverpb.WGTCPForwarders.prototype.clearForwardersList = function() {
  return this.setForwardersList([]);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.WGTCPForwarders.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.WGTCPForwarders} returns this
*/
proto.sliverpb.WGTCPForwarders.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.WGTCPForwarders} returns this
 */
proto.sliverpb.WGTCPForwarders.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.WGTCPForwarders.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ReconfigureReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ReconfigureReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ReconfigureReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ReconfigureReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    reconnectinterval: jspb.Message.getFieldWithDefault(msg, 1, 0),
    beaconinterval: jspb.Message.getFieldWithDefault(msg, 2, 0),
    beaconjitter: jspb.Message.getFieldWithDefault(msg, 3, 0),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ReconfigureReq}
 */
proto.sliverpb.ReconfigureReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ReconfigureReq;
  return proto.sliverpb.ReconfigureReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ReconfigureReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ReconfigureReq}
 */
proto.sliverpb.ReconfigureReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReconnectinterval(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBeaconinterval(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBeaconjitter(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ReconfigureReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ReconfigureReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ReconfigureReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ReconfigureReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReconnectinterval();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getBeaconinterval();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getBeaconjitter();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 ReconnectInterval = 1;
 * @return {number}
 */
proto.sliverpb.ReconfigureReq.prototype.getReconnectinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.ReconfigureReq} returns this
 */
proto.sliverpb.ReconfigureReq.prototype.setReconnectinterval = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 BeaconInterval = 2;
 * @return {number}
 */
proto.sliverpb.ReconfigureReq.prototype.getBeaconinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.ReconfigureReq} returns this
 */
proto.sliverpb.ReconfigureReq.prototype.setBeaconinterval = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 BeaconJitter = 3;
 * @return {number}
 */
proto.sliverpb.ReconfigureReq.prototype.getBeaconjitter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.ReconfigureReq} returns this
 */
proto.sliverpb.ReconfigureReq.prototype.setBeaconjitter = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.ReconfigureReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.ReconfigureReq} returns this
*/
proto.sliverpb.ReconfigureReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ReconfigureReq} returns this
 */
proto.sliverpb.ReconfigureReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ReconfigureReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.Reconfigure.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.Reconfigure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.Reconfigure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Reconfigure.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.Reconfigure}
 */
proto.sliverpb.Reconfigure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.Reconfigure;
  return proto.sliverpb.Reconfigure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.Reconfigure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.Reconfigure}
 */
proto.sliverpb.Reconfigure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.Reconfigure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.Reconfigure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.Reconfigure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.Reconfigure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.Reconfigure.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.Reconfigure} returns this
*/
proto.sliverpb.Reconfigure.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.Reconfigure} returns this
 */
proto.sliverpb.Reconfigure.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.Reconfigure.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PollIntervalReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PollIntervalReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PollIntervalReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PollIntervalReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    pollinterval: jspb.Message.getFieldWithDefault(msg, 1, 0),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PollIntervalReq}
 */
proto.sliverpb.PollIntervalReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PollIntervalReq;
  return proto.sliverpb.PollIntervalReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PollIntervalReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PollIntervalReq}
 */
proto.sliverpb.PollIntervalReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPollinterval(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PollIntervalReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PollIntervalReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PollIntervalReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PollIntervalReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPollinterval();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 PollInterval = 1;
 * @return {number}
 */
proto.sliverpb.PollIntervalReq.prototype.getPollinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.PollIntervalReq} returns this
 */
proto.sliverpb.PollIntervalReq.prototype.setPollinterval = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.PollIntervalReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.PollIntervalReq} returns this
*/
proto.sliverpb.PollIntervalReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.PollIntervalReq} returns this
 */
proto.sliverpb.PollIntervalReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.PollIntervalReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.PollInterval.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.PollInterval.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.PollInterval} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PollInterval.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.PollInterval}
 */
proto.sliverpb.PollInterval.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.PollInterval;
  return proto.sliverpb.PollInterval.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.PollInterval} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.PollInterval}
 */
proto.sliverpb.PollInterval.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.PollInterval.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.PollInterval.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.PollInterval} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.PollInterval.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.PollInterval.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.PollInterval} returns this
*/
proto.sliverpb.PollInterval.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.PollInterval} returns this
 */
proto.sliverpb.PollInterval.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.PollInterval.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.SSHCommandReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.SSHCommandReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.SSHCommandReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SSHCommandReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0),
    command: jspb.Message.getFieldWithDefault(msg, 4, ""),
    password: jspb.Message.getFieldWithDefault(msg, 5, ""),
    privkey: msg.getPrivkey_asB64(),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.SSHCommandReq}
 */
proto.sliverpb.SSHCommandReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.SSHCommandReq;
  return proto.sliverpb.SSHCommandReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.SSHCommandReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.SSHCommandReq}
 */
proto.sliverpb.SSHCommandReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommand(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrivkey(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.SSHCommandReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.SSHCommandReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.SSHCommandReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SSHCommandReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getCommand();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPrivkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Username = 1;
 * @return {string}
 */
proto.sliverpb.SSHCommandReq.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SSHCommandReq} returns this
 */
proto.sliverpb.SSHCommandReq.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Hostname = 2;
 * @return {string}
 */
proto.sliverpb.SSHCommandReq.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SSHCommandReq} returns this
 */
proto.sliverpb.SSHCommandReq.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 Port = 3;
 * @return {number}
 */
proto.sliverpb.SSHCommandReq.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sliverpb.SSHCommandReq} returns this
 */
proto.sliverpb.SSHCommandReq.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Command = 4;
 * @return {string}
 */
proto.sliverpb.SSHCommandReq.prototype.getCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SSHCommandReq} returns this
 */
proto.sliverpb.SSHCommandReq.prototype.setCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Password = 5;
 * @return {string}
 */
proto.sliverpb.SSHCommandReq.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SSHCommandReq} returns this
 */
proto.sliverpb.SSHCommandReq.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes PrivKey = 6;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.SSHCommandReq.prototype.getPrivkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes PrivKey = 6;
 * This is a type-conversion wrapper around `getPrivkey()`
 * @return {string}
 */
proto.sliverpb.SSHCommandReq.prototype.getPrivkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrivkey()));
};


/**
 * optional bytes PrivKey = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrivkey()`
 * @return {!Uint8Array}
 */
proto.sliverpb.SSHCommandReq.prototype.getPrivkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrivkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.SSHCommandReq} returns this
 */
proto.sliverpb.SSHCommandReq.prototype.setPrivkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.SSHCommandReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.SSHCommandReq} returns this
*/
proto.sliverpb.SSHCommandReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SSHCommandReq} returns this
 */
proto.sliverpb.SSHCommandReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SSHCommandReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.SSHCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.SSHCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.SSHCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SSHCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    stdout: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stderr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.SSHCommand}
 */
proto.sliverpb.SSHCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.SSHCommand;
  return proto.sliverpb.SSHCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.SSHCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.SSHCommand}
 */
proto.sliverpb.SSHCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStdout(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStderr(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.SSHCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.SSHCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.SSHCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.SSHCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStdout();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStderr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional string StdOut = 1;
 * @return {string}
 */
proto.sliverpb.SSHCommand.prototype.getStdout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SSHCommand} returns this
 */
proto.sliverpb.SSHCommand.prototype.setStdout = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string StdErr = 2;
 * @return {string}
 */
proto.sliverpb.SSHCommand.prototype.getStderr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.SSHCommand} returns this
 */
proto.sliverpb.SSHCommand.prototype.setStderr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.SSHCommand.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.SSHCommand} returns this
*/
proto.sliverpb.SSHCommand.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.SSHCommand} returns this
 */
proto.sliverpb.SSHCommand.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.SSHCommand.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.GetPrivsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.GetPrivsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.GetPrivsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.GetPrivsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.GetPrivsReq}
 */
proto.sliverpb.GetPrivsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.GetPrivsReq;
  return proto.sliverpb.GetPrivsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.GetPrivsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.GetPrivsReq}
 */
proto.sliverpb.GetPrivsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.GetPrivsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.GetPrivsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.GetPrivsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.GetPrivsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.GetPrivsReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.GetPrivsReq} returns this
*/
proto.sliverpb.GetPrivsReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.GetPrivsReq} returns this
 */
proto.sliverpb.GetPrivsReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.GetPrivsReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.WindowsPrivilegeEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.WindowsPrivilegeEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WindowsPrivilegeEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    enabledbydefault: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    removed: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    usedforaccess: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.WindowsPrivilegeEntry}
 */
proto.sliverpb.WindowsPrivilegeEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.WindowsPrivilegeEntry;
  return proto.sliverpb.WindowsPrivilegeEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.WindowsPrivilegeEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.WindowsPrivilegeEntry}
 */
proto.sliverpb.WindowsPrivilegeEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabledbydefault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRemoved(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsedforaccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.WindowsPrivilegeEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.WindowsPrivilegeEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.WindowsPrivilegeEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getEnabledbydefault();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRemoved();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getUsedforaccess();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.WindowsPrivilegeEntry} returns this
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Description = 2;
 * @return {string}
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.WindowsPrivilegeEntry} returns this
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool Enabled = 3;
 * @return {boolean}
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.WindowsPrivilegeEntry} returns this
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool EnabledByDefault = 4;
 * @return {boolean}
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.getEnabledbydefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.WindowsPrivilegeEntry} returns this
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.setEnabledbydefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool Removed = 5;
 * @return {boolean}
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.getRemoved = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.WindowsPrivilegeEntry} returns this
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.setRemoved = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool UsedForAccess = 6;
 * @return {boolean}
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.getUsedforaccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.WindowsPrivilegeEntry} returns this
 */
proto.sliverpb.WindowsPrivilegeEntry.prototype.setUsedforaccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.GetPrivs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.GetPrivs.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.GetPrivs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.GetPrivs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.GetPrivs.toObject = function(includeInstance, msg) {
  var f, obj = {
    privinfoList: jspb.Message.toObjectList(msg.getPrivinfoList(),
    proto.sliverpb.WindowsPrivilegeEntry.toObject, includeInstance),
    processintegrity: jspb.Message.getFieldWithDefault(msg, 2, ""),
    processname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.GetPrivs}
 */
proto.sliverpb.GetPrivs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.GetPrivs;
  return proto.sliverpb.GetPrivs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.GetPrivs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.GetPrivs}
 */
proto.sliverpb.GetPrivs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sliverpb.WindowsPrivilegeEntry;
      reader.readMessage(value,proto.sliverpb.WindowsPrivilegeEntry.deserializeBinaryFromReader);
      msg.addPrivinfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessintegrity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessname(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.GetPrivs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.GetPrivs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.GetPrivs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.GetPrivs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrivinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sliverpb.WindowsPrivilegeEntry.serializeBinaryToWriter
    );
  }
  f = message.getProcessintegrity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProcessname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WindowsPrivilegeEntry PrivInfo = 1;
 * @return {!Array<!proto.sliverpb.WindowsPrivilegeEntry>}
 */
proto.sliverpb.GetPrivs.prototype.getPrivinfoList = function() {
  return /** @type{!Array<!proto.sliverpb.WindowsPrivilegeEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sliverpb.WindowsPrivilegeEntry, 1));
};


/**
 * @param {!Array<!proto.sliverpb.WindowsPrivilegeEntry>} value
 * @return {!proto.sliverpb.GetPrivs} returns this
*/
proto.sliverpb.GetPrivs.prototype.setPrivinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sliverpb.WindowsPrivilegeEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.WindowsPrivilegeEntry}
 */
proto.sliverpb.GetPrivs.prototype.addPrivinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sliverpb.WindowsPrivilegeEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.GetPrivs} returns this
 */
proto.sliverpb.GetPrivs.prototype.clearPrivinfoList = function() {
  return this.setPrivinfoList([]);
};


/**
 * optional string ProcessIntegrity = 2;
 * @return {string}
 */
proto.sliverpb.GetPrivs.prototype.getProcessintegrity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.GetPrivs} returns this
 */
proto.sliverpb.GetPrivs.prototype.setProcessintegrity = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ProcessName = 3;
 * @return {string}
 */
proto.sliverpb.GetPrivs.prototype.getProcessname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.GetPrivs} returns this
 */
proto.sliverpb.GetPrivs.prototype.setProcessname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.GetPrivs.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.GetPrivs} returns this
*/
proto.sliverpb.GetPrivs.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.GetPrivs} returns this
 */
proto.sliverpb.GetPrivs.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.GetPrivs.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegisterExtensionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegisterExtensionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegisterExtensionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegisterExtensionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: msg.getData_asB64(),
    os: jspb.Message.getFieldWithDefault(msg, 3, ""),
    init: jspb.Message.getFieldWithDefault(msg, 4, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegisterExtensionReq}
 */
proto.sliverpb.RegisterExtensionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegisterExtensionReq;
  return proto.sliverpb.RegisterExtensionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegisterExtensionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegisterExtensionReq}
 */
proto.sliverpb.RegisterExtensionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInit(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegisterExtensionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegisterExtensionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegisterExtensionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegisterExtensionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getOs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInit();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.sliverpb.RegisterExtensionReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegisterExtensionReq} returns this
 */
proto.sliverpb.RegisterExtensionReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes Data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.RegisterExtensionReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sliverpb.RegisterExtensionReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sliverpb.RegisterExtensionReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.RegisterExtensionReq} returns this
 */
proto.sliverpb.RegisterExtensionReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string OS = 3;
 * @return {string}
 */
proto.sliverpb.RegisterExtensionReq.prototype.getOs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegisterExtensionReq} returns this
 */
proto.sliverpb.RegisterExtensionReq.prototype.setOs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Init = 4;
 * @return {string}
 */
proto.sliverpb.RegisterExtensionReq.prototype.getInit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.RegisterExtensionReq} returns this
 */
proto.sliverpb.RegisterExtensionReq.prototype.setInit = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.RegisterExtensionReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.RegisterExtensionReq} returns this
*/
proto.sliverpb.RegisterExtensionReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegisterExtensionReq} returns this
 */
proto.sliverpb.RegisterExtensionReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegisterExtensionReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.RegisterExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.RegisterExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.RegisterExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegisterExtension.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.RegisterExtension}
 */
proto.sliverpb.RegisterExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.RegisterExtension;
  return proto.sliverpb.RegisterExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.RegisterExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.RegisterExtension}
 */
proto.sliverpb.RegisterExtension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.RegisterExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.RegisterExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.RegisterExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.RegisterExtension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.RegisterExtension.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.RegisterExtension} returns this
*/
proto.sliverpb.RegisterExtension.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.RegisterExtension} returns this
 */
proto.sliverpb.RegisterExtension.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.RegisterExtension.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.CallExtensionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.CallExtensionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.CallExtensionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CallExtensionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    serverstore: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    args: msg.getArgs_asB64(),
    pb_export: jspb.Message.getFieldWithDefault(msg, 4, ""),
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.CallExtensionReq}
 */
proto.sliverpb.CallExtensionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.CallExtensionReq;
  return proto.sliverpb.CallExtensionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.CallExtensionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.CallExtensionReq}
 */
proto.sliverpb.CallExtensionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setServerstore(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setArgs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExport(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.CallExtensionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.CallExtensionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.CallExtensionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CallExtensionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServerstore();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getArgs_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getExport();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.sliverpb.CallExtensionReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.CallExtensionReq} returns this
 */
proto.sliverpb.CallExtensionReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool ServerStore = 2;
 * @return {boolean}
 */
proto.sliverpb.CallExtensionReq.prototype.getServerstore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.CallExtensionReq} returns this
 */
proto.sliverpb.CallExtensionReq.prototype.setServerstore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bytes Args = 3;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.CallExtensionReq.prototype.getArgs = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes Args = 3;
 * This is a type-conversion wrapper around `getArgs()`
 * @return {string}
 */
proto.sliverpb.CallExtensionReq.prototype.getArgs_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getArgs()));
};


/**
 * optional bytes Args = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getArgs()`
 * @return {!Uint8Array}
 */
proto.sliverpb.CallExtensionReq.prototype.getArgs_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getArgs()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.CallExtensionReq} returns this
 */
proto.sliverpb.CallExtensionReq.prototype.setArgs = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string Export = 4;
 * @return {string}
 */
proto.sliverpb.CallExtensionReq.prototype.getExport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sliverpb.CallExtensionReq} returns this
 */
proto.sliverpb.CallExtensionReq.prototype.setExport = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.CallExtensionReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.CallExtensionReq} returns this
*/
proto.sliverpb.CallExtensionReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.CallExtensionReq} returns this
 */
proto.sliverpb.CallExtensionReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.CallExtensionReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.CallExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.CallExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.CallExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CallExtension.toObject = function(includeInstance, msg) {
  var f, obj = {
    output: msg.getOutput_asB64(),
    serverstore: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.CallExtension}
 */
proto.sliverpb.CallExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.CallExtension;
  return proto.sliverpb.CallExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.CallExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.CallExtension}
 */
proto.sliverpb.CallExtension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOutput(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setServerstore(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.CallExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.CallExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.CallExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.CallExtension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutput_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getServerstore();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Output = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sliverpb.CallExtension.prototype.getOutput = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Output = 1;
 * This is a type-conversion wrapper around `getOutput()`
 * @return {string}
 */
proto.sliverpb.CallExtension.prototype.getOutput_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOutput()));
};


/**
 * optional bytes Output = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOutput()`
 * @return {!Uint8Array}
 */
proto.sliverpb.CallExtension.prototype.getOutput_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOutput()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sliverpb.CallExtension} returns this
 */
proto.sliverpb.CallExtension.prototype.setOutput = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bool ServerStore = 2;
 * @return {boolean}
 */
proto.sliverpb.CallExtension.prototype.getServerstore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sliverpb.CallExtension} returns this
 */
proto.sliverpb.CallExtension.prototype.setServerstore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.CallExtension.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.CallExtension} returns this
*/
proto.sliverpb.CallExtension.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.CallExtension} returns this
 */
proto.sliverpb.CallExtension.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.CallExtension.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ListExtensionsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ListExtensionsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ListExtensionsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ListExtensionsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && commonpb_common_pb.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ListExtensionsReq}
 */
proto.sliverpb.ListExtensionsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ListExtensionsReq;
  return proto.sliverpb.ListExtensionsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ListExtensionsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ListExtensionsReq}
 */
proto.sliverpb.ListExtensionsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new commonpb_common_pb.Request;
      reader.readMessage(value,commonpb_common_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ListExtensionsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ListExtensionsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ListExtensionsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ListExtensionsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.sliverpb.ListExtensionsReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.sliverpb.ListExtensionsReq} returns this
*/
proto.sliverpb.ListExtensionsReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ListExtensionsReq} returns this
 */
proto.sliverpb.ListExtensionsReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ListExtensionsReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sliverpb.ListExtensions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sliverpb.ListExtensions.prototype.toObject = function(opt_includeInstance) {
  return proto.sliverpb.ListExtensions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sliverpb.ListExtensions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ListExtensions.toObject = function(includeInstance, msg) {
  var f, obj = {
    namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    response: (f = msg.getResponse()) && commonpb_common_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sliverpb.ListExtensions}
 */
proto.sliverpb.ListExtensions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sliverpb.ListExtensions;
  return proto.sliverpb.ListExtensions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sliverpb.ListExtensions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sliverpb.ListExtensions}
 */
proto.sliverpb.ListExtensions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNames(value);
      break;
    case 9:
      var value = new commonpb_common_pb.Response;
      reader.readMessage(value,commonpb_common_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sliverpb.ListExtensions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sliverpb.ListExtensions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sliverpb.ListExtensions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sliverpb.ListExtensions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string Names = 1;
 * @return {!Array<string>}
 */
proto.sliverpb.ListExtensions.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sliverpb.ListExtensions} returns this
 */
proto.sliverpb.ListExtensions.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sliverpb.ListExtensions} returns this
 */
proto.sliverpb.ListExtensions.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sliverpb.ListExtensions} returns this
 */
proto.sliverpb.ListExtensions.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.sliverpb.ListExtensions.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.sliverpb.ListExtensions} returns this
*/
proto.sliverpb.ListExtensions.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sliverpb.ListExtensions} returns this
 */
proto.sliverpb.ListExtensions.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sliverpb.ListExtensions.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * @enum {number}
 */
proto.sliverpb.PivotType = {
  TCP: 0,
  UDP: 1,
  NAMEDPIPE: 2
};

/**
 * @enum {number}
 */
proto.sliverpb.PeerFailureType = {
  SEND_FAILURE: 0,
  DISCONNECT: 1
};

goog.object.extend(exports, proto.sliverpb);

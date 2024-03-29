// source: clientpb/client.proto
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
goog.exportSymbol('proto.clientpb.AllHosts', null, global);
goog.exportSymbol('proto.clientpb.AllLoot', null, global);
goog.exportSymbol('proto.clientpb.Beacon', null, global);
goog.exportSymbol('proto.clientpb.BeaconTask', null, global);
goog.exportSymbol('proto.clientpb.BeaconTasks', null, global);
goog.exportSymbol('proto.clientpb.Beacons', null, global);
goog.exportSymbol('proto.clientpb.Canaries', null, global);
goog.exportSymbol('proto.clientpb.Client', null, global);
goog.exportSymbol('proto.clientpb.CloseTunnelReq', null, global);
goog.exportSymbol('proto.clientpb.Compiler', null, global);
goog.exportSymbol('proto.clientpb.CompilerTarget', null, global);
goog.exportSymbol('proto.clientpb.CreateTunnel', null, global);
goog.exportSymbol('proto.clientpb.CreateTunnelReq', null, global);
goog.exportSymbol('proto.clientpb.Credential', null, global);
goog.exportSymbol('proto.clientpb.CredentialType', null, global);
goog.exportSymbol('proto.clientpb.CrossCompiler', null, global);
goog.exportSymbol('proto.clientpb.DNSCanary', null, global);
goog.exportSymbol('proto.clientpb.DNSListener', null, global);
goog.exportSymbol('proto.clientpb.DNSListenerReq', null, global);
goog.exportSymbol('proto.clientpb.DeleteReq', null, global);
goog.exportSymbol('proto.clientpb.DllHijack', null, global);
goog.exportSymbol('proto.clientpb.DllHijackReq', null, global);
goog.exportSymbol('proto.clientpb.Event', null, global);
goog.exportSymbol('proto.clientpb.ExtensionData', null, global);
goog.exportSymbol('proto.clientpb.FileType', null, global);
goog.exportSymbol('proto.clientpb.Generate', null, global);
goog.exportSymbol('proto.clientpb.GenerateReq', null, global);
goog.exportSymbol('proto.clientpb.GetSystemReq', null, global);
goog.exportSymbol('proto.clientpb.HTTPListener', null, global);
goog.exportSymbol('proto.clientpb.HTTPListenerReq', null, global);
goog.exportSymbol('proto.clientpb.Host', null, global);
goog.exportSymbol('proto.clientpb.IOC', null, global);
goog.exportSymbol('proto.clientpb.ImplantBuilds', null, global);
goog.exportSymbol('proto.clientpb.ImplantC2', null, global);
goog.exportSymbol('proto.clientpb.ImplantConfig', null, global);
goog.exportSymbol('proto.clientpb.ImplantProfile', null, global);
goog.exportSymbol('proto.clientpb.ImplantProfiles', null, global);
goog.exportSymbol('proto.clientpb.Job', null, global);
goog.exportSymbol('proto.clientpb.Jobs', null, global);
goog.exportSymbol('proto.clientpb.KillJob', null, global);
goog.exportSymbol('proto.clientpb.KillJobReq', null, global);
goog.exportSymbol('proto.clientpb.Loot', null, global);
goog.exportSymbol('proto.clientpb.LootType', null, global);
goog.exportSymbol('proto.clientpb.MSFRemoteReq', null, global);
goog.exportSymbol('proto.clientpb.MSFReq', null, global);
goog.exportSymbol('proto.clientpb.MTLSListener', null, global);
goog.exportSymbol('proto.clientpb.MTLSListenerReq', null, global);
goog.exportSymbol('proto.clientpb.MigrateReq', null, global);
goog.exportSymbol('proto.clientpb.MsfStager', null, global);
goog.exportSymbol('proto.clientpb.MsfStagerReq', null, global);
goog.exportSymbol('proto.clientpb.NamedPipes', null, global);
goog.exportSymbol('proto.clientpb.NamedPipesReq', null, global);
goog.exportSymbol('proto.clientpb.Operator', null, global);
goog.exportSymbol('proto.clientpb.Operators', null, global);
goog.exportSymbol('proto.clientpb.OutputFormat', null, global);
goog.exportSymbol('proto.clientpb.PivotGraph', null, global);
goog.exportSymbol('proto.clientpb.PivotGraphEntry', null, global);
goog.exportSymbol('proto.clientpb.RegenerateReq', null, global);
goog.exportSymbol('proto.clientpb.RenameReq', null, global);
goog.exportSymbol('proto.clientpb.Session', null, global);
goog.exportSymbol('proto.clientpb.Sessions', null, global);
goog.exportSymbol('proto.clientpb.ShellcodeEncode', null, global);
goog.exportSymbol('proto.clientpb.ShellcodeEncodeReq', null, global);
goog.exportSymbol('proto.clientpb.ShellcodeEncoder', null, global);
goog.exportSymbol('proto.clientpb.ShellcodeEncoderMap', null, global);
goog.exportSymbol('proto.clientpb.ShellcodeRDI', null, global);
goog.exportSymbol('proto.clientpb.ShellcodeRDIReq', null, global);
goog.exportSymbol('proto.clientpb.StageProtocol', null, global);
goog.exportSymbol('proto.clientpb.StagerListener', null, global);
goog.exportSymbol('proto.clientpb.StagerListenerReq', null, global);
goog.exportSymbol('proto.clientpb.TCPPivot', null, global);
goog.exportSymbol('proto.clientpb.TCPPivotReq', null, global);
goog.exportSymbol('proto.clientpb.UniqueWGIP', null, global);
goog.exportSymbol('proto.clientpb.Version', null, global);
goog.exportSymbol('proto.clientpb.WGClientConfig', null, global);
goog.exportSymbol('proto.clientpb.WGListener', null, global);
goog.exportSymbol('proto.clientpb.WGListenerReq', null, global);
goog.exportSymbol('proto.clientpb.WebContent', null, global);
goog.exportSymbol('proto.clientpb.Website', null, global);
goog.exportSymbol('proto.clientpb.WebsiteAddContent', null, global);
goog.exportSymbol('proto.clientpb.WebsiteRemoveContent', null, global);
goog.exportSymbol('proto.clientpb.Websites', null, global);
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
proto.clientpb.Version = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.Version, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Version.displayName = 'proto.clientpb.Version';
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
proto.clientpb.Session = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.Session.repeatedFields_, null);
};
goog.inherits(proto.clientpb.Session, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Session.displayName = 'proto.clientpb.Session';
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
proto.clientpb.Beacon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.Beacon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Beacon.displayName = 'proto.clientpb.Beacon';
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
proto.clientpb.Beacons = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.Beacons.repeatedFields_, null);
};
goog.inherits(proto.clientpb.Beacons, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Beacons.displayName = 'proto.clientpb.Beacons';
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
proto.clientpb.BeaconTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.BeaconTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.BeaconTask.displayName = 'proto.clientpb.BeaconTask';
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
proto.clientpb.BeaconTasks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.BeaconTasks.repeatedFields_, null);
};
goog.inherits(proto.clientpb.BeaconTasks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.BeaconTasks.displayName = 'proto.clientpb.BeaconTasks';
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
proto.clientpb.ImplantC2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.ImplantC2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.ImplantC2.displayName = 'proto.clientpb.ImplantC2';
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
proto.clientpb.ImplantConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.ImplantConfig.repeatedFields_, null);
};
goog.inherits(proto.clientpb.ImplantConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.ImplantConfig.displayName = 'proto.clientpb.ImplantConfig';
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
proto.clientpb.ImplantBuilds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.ImplantBuilds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.ImplantBuilds.displayName = 'proto.clientpb.ImplantBuilds';
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
proto.clientpb.CompilerTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.CompilerTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.CompilerTarget.displayName = 'proto.clientpb.CompilerTarget';
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
proto.clientpb.CrossCompiler = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.CrossCompiler, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.CrossCompiler.displayName = 'proto.clientpb.CrossCompiler';
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
proto.clientpb.Compiler = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.Compiler.repeatedFields_, null);
};
goog.inherits(proto.clientpb.Compiler, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Compiler.displayName = 'proto.clientpb.Compiler';
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
proto.clientpb.DeleteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.DeleteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.DeleteReq.displayName = 'proto.clientpb.DeleteReq';
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
proto.clientpb.DNSCanary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.DNSCanary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.DNSCanary.displayName = 'proto.clientpb.DNSCanary';
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
proto.clientpb.Canaries = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.Canaries.repeatedFields_, null);
};
goog.inherits(proto.clientpb.Canaries, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Canaries.displayName = 'proto.clientpb.Canaries';
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
proto.clientpb.UniqueWGIP = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.UniqueWGIP, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.UniqueWGIP.displayName = 'proto.clientpb.UniqueWGIP';
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
proto.clientpb.ImplantProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.ImplantProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.ImplantProfile.displayName = 'proto.clientpb.ImplantProfile';
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
proto.clientpb.ImplantProfiles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.ImplantProfiles.repeatedFields_, null);
};
goog.inherits(proto.clientpb.ImplantProfiles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.ImplantProfiles.displayName = 'proto.clientpb.ImplantProfiles';
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
proto.clientpb.RegenerateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.RegenerateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.RegenerateReq.displayName = 'proto.clientpb.RegenerateReq';
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
proto.clientpb.Job = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.Job.repeatedFields_, null);
};
goog.inherits(proto.clientpb.Job, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Job.displayName = 'proto.clientpb.Job';
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
proto.clientpb.Jobs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.Jobs.repeatedFields_, null);
};
goog.inherits(proto.clientpb.Jobs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Jobs.displayName = 'proto.clientpb.Jobs';
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
proto.clientpb.KillJobReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.KillJobReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.KillJobReq.displayName = 'proto.clientpb.KillJobReq';
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
proto.clientpb.KillJob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.KillJob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.KillJob.displayName = 'proto.clientpb.KillJob';
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
proto.clientpb.MTLSListenerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.MTLSListenerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.MTLSListenerReq.displayName = 'proto.clientpb.MTLSListenerReq';
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
proto.clientpb.MTLSListener = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.MTLSListener, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.MTLSListener.displayName = 'proto.clientpb.MTLSListener';
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
proto.clientpb.WGListenerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.WGListenerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.WGListenerReq.displayName = 'proto.clientpb.WGListenerReq';
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
proto.clientpb.WGListener = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.WGListener, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.WGListener.displayName = 'proto.clientpb.WGListener';
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
proto.clientpb.DNSListenerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.DNSListenerReq.repeatedFields_, null);
};
goog.inherits(proto.clientpb.DNSListenerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.DNSListenerReq.displayName = 'proto.clientpb.DNSListenerReq';
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
proto.clientpb.DNSListener = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.DNSListener, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.DNSListener.displayName = 'proto.clientpb.DNSListener';
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
proto.clientpb.HTTPListenerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.HTTPListenerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.HTTPListenerReq.displayName = 'proto.clientpb.HTTPListenerReq';
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
proto.clientpb.NamedPipesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.NamedPipesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.NamedPipesReq.displayName = 'proto.clientpb.NamedPipesReq';
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
proto.clientpb.NamedPipes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.NamedPipes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.NamedPipes.displayName = 'proto.clientpb.NamedPipes';
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
proto.clientpb.TCPPivotReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.TCPPivotReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.TCPPivotReq.displayName = 'proto.clientpb.TCPPivotReq';
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
proto.clientpb.TCPPivot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.TCPPivot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.TCPPivot.displayName = 'proto.clientpb.TCPPivot';
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
proto.clientpb.HTTPListener = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.HTTPListener, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.HTTPListener.displayName = 'proto.clientpb.HTTPListener';
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
proto.clientpb.Sessions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.Sessions.repeatedFields_, null);
};
goog.inherits(proto.clientpb.Sessions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Sessions.displayName = 'proto.clientpb.Sessions';
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
proto.clientpb.RenameReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.RenameReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.RenameReq.displayName = 'proto.clientpb.RenameReq';
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
proto.clientpb.GenerateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.GenerateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.GenerateReq.displayName = 'proto.clientpb.GenerateReq';
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
proto.clientpb.Generate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.Generate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Generate.displayName = 'proto.clientpb.Generate';
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
proto.clientpb.MSFReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.MSFReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.MSFReq.displayName = 'proto.clientpb.MSFReq';
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
proto.clientpb.MSFRemoteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.MSFRemoteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.MSFRemoteReq.displayName = 'proto.clientpb.MSFRemoteReq';
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
proto.clientpb.StagerListenerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.StagerListenerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.StagerListenerReq.displayName = 'proto.clientpb.StagerListenerReq';
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
proto.clientpb.StagerListener = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.StagerListener, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.StagerListener.displayName = 'proto.clientpb.StagerListener';
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
proto.clientpb.ShellcodeRDIReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.ShellcodeRDIReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.ShellcodeRDIReq.displayName = 'proto.clientpb.ShellcodeRDIReq';
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
proto.clientpb.ShellcodeRDI = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.ShellcodeRDI, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.ShellcodeRDI.displayName = 'proto.clientpb.ShellcodeRDI';
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
proto.clientpb.MsfStagerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.MsfStagerReq.repeatedFields_, null);
};
goog.inherits(proto.clientpb.MsfStagerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.MsfStagerReq.displayName = 'proto.clientpb.MsfStagerReq';
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
proto.clientpb.MsfStager = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.MsfStager, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.MsfStager.displayName = 'proto.clientpb.MsfStager';
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
proto.clientpb.GetSystemReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.GetSystemReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.GetSystemReq.displayName = 'proto.clientpb.GetSystemReq';
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
proto.clientpb.MigrateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.MigrateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.MigrateReq.displayName = 'proto.clientpb.MigrateReq';
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
proto.clientpb.CreateTunnelReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.CreateTunnelReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.CreateTunnelReq.displayName = 'proto.clientpb.CreateTunnelReq';
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
proto.clientpb.CreateTunnel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.CreateTunnel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.CreateTunnel.displayName = 'proto.clientpb.CreateTunnel';
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
proto.clientpb.CloseTunnelReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.CloseTunnelReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.CloseTunnelReq.displayName = 'proto.clientpb.CloseTunnelReq';
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
proto.clientpb.PivotGraphEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.PivotGraphEntry.repeatedFields_, null);
};
goog.inherits(proto.clientpb.PivotGraphEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.PivotGraphEntry.displayName = 'proto.clientpb.PivotGraphEntry';
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
proto.clientpb.PivotGraph = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.PivotGraph.repeatedFields_, null);
};
goog.inherits(proto.clientpb.PivotGraph, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.PivotGraph.displayName = 'proto.clientpb.PivotGraph';
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
proto.clientpb.Client = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.Client, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Client.displayName = 'proto.clientpb.Client';
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
proto.clientpb.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Event.displayName = 'proto.clientpb.Event';
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
proto.clientpb.Operators = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.Operators.repeatedFields_, null);
};
goog.inherits(proto.clientpb.Operators, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Operators.displayName = 'proto.clientpb.Operators';
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
proto.clientpb.Operator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.Operator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Operator.displayName = 'proto.clientpb.Operator';
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
proto.clientpb.WebContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.WebContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.WebContent.displayName = 'proto.clientpb.WebContent';
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
proto.clientpb.WebsiteAddContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.WebsiteAddContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.WebsiteAddContent.displayName = 'proto.clientpb.WebsiteAddContent';
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
proto.clientpb.WebsiteRemoveContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.WebsiteRemoveContent.repeatedFields_, null);
};
goog.inherits(proto.clientpb.WebsiteRemoveContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.WebsiteRemoveContent.displayName = 'proto.clientpb.WebsiteRemoveContent';
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
proto.clientpb.Website = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.Website, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Website.displayName = 'proto.clientpb.Website';
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
proto.clientpb.Websites = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.Websites.repeatedFields_, null);
};
goog.inherits(proto.clientpb.Websites, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Websites.displayName = 'proto.clientpb.Websites';
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
proto.clientpb.WGClientConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.WGClientConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.WGClientConfig.displayName = 'proto.clientpb.WGClientConfig';
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
proto.clientpb.Credential = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.Credential, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Credential.displayName = 'proto.clientpb.Credential';
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
proto.clientpb.Loot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.Loot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Loot.displayName = 'proto.clientpb.Loot';
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
proto.clientpb.AllLoot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.AllLoot.repeatedFields_, null);
};
goog.inherits(proto.clientpb.AllLoot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.AllLoot.displayName = 'proto.clientpb.AllLoot';
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
proto.clientpb.IOC = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.IOC, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.IOC.displayName = 'proto.clientpb.IOC';
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
proto.clientpb.ExtensionData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.ExtensionData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.ExtensionData.displayName = 'proto.clientpb.ExtensionData';
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
proto.clientpb.Host = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.Host.repeatedFields_, null);
};
goog.inherits(proto.clientpb.Host, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.Host.displayName = 'proto.clientpb.Host';
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
proto.clientpb.AllHosts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientpb.AllHosts.repeatedFields_, null);
};
goog.inherits(proto.clientpb.AllHosts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.AllHosts.displayName = 'proto.clientpb.AllHosts';
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
proto.clientpb.DllHijackReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.DllHijackReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.DllHijackReq.displayName = 'proto.clientpb.DllHijackReq';
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
proto.clientpb.DllHijack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.DllHijack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.DllHijack.displayName = 'proto.clientpb.DllHijack';
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
proto.clientpb.ShellcodeEncodeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.ShellcodeEncodeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.ShellcodeEncodeReq.displayName = 'proto.clientpb.ShellcodeEncodeReq';
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
proto.clientpb.ShellcodeEncode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.ShellcodeEncode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.ShellcodeEncode.displayName = 'proto.clientpb.ShellcodeEncode';
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
proto.clientpb.ShellcodeEncoderMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clientpb.ShellcodeEncoderMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientpb.ShellcodeEncoderMap.displayName = 'proto.clientpb.ShellcodeEncoderMap';
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
proto.clientpb.Version.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Version.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Version} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Version.toObject = function(includeInstance, msg) {
  var f, obj = {
    major: jspb.Message.getFieldWithDefault(msg, 1, 0),
    minor: jspb.Message.getFieldWithDefault(msg, 2, 0),
    patch: jspb.Message.getFieldWithDefault(msg, 3, 0),
    commit: jspb.Message.getFieldWithDefault(msg, 4, ""),
    dirty: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    compiledat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    os: jspb.Message.getFieldWithDefault(msg, 7, ""),
    arch: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.clientpb.Version}
 */
proto.clientpb.Version.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Version;
  return proto.clientpb.Version.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Version} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Version}
 */
proto.clientpb.Version.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMajor(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPatch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommit(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDirty(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCompiledat(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOs(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setArch(value);
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
proto.clientpb.Version.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Version.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Version} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Version.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMajor();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMinor();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPatch();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCommit();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDirty();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCompiledat();
  if (f !== 0) {
    writer.writeInt64(
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
};


/**
 * optional int32 Major = 1;
 * @return {number}
 */
proto.clientpb.Version.prototype.getMajor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Version} returns this
 */
proto.clientpb.Version.prototype.setMajor = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Minor = 2;
 * @return {number}
 */
proto.clientpb.Version.prototype.getMinor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Version} returns this
 */
proto.clientpb.Version.prototype.setMinor = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 Patch = 3;
 * @return {number}
 */
proto.clientpb.Version.prototype.getPatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Version} returns this
 */
proto.clientpb.Version.prototype.setPatch = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Commit = 4;
 * @return {string}
 */
proto.clientpb.Version.prototype.getCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Version} returns this
 */
proto.clientpb.Version.prototype.setCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool Dirty = 5;
 * @return {boolean}
 */
proto.clientpb.Version.prototype.getDirty = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.Version} returns this
 */
proto.clientpb.Version.prototype.setDirty = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int64 CompiledAt = 6;
 * @return {number}
 */
proto.clientpb.Version.prototype.getCompiledat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Version} returns this
 */
proto.clientpb.Version.prototype.setCompiledat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string OS = 7;
 * @return {string}
 */
proto.clientpb.Version.prototype.getOs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Version} returns this
 */
proto.clientpb.Version.prototype.setOs = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Arch = 8;
 * @return {string}
 */
proto.clientpb.Version.prototype.getArch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Version} returns this
 */
proto.clientpb.Version.prototype.setArch = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.Session.repeatedFields_ = [23];



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
proto.clientpb.Session.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Session.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Session} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Session.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    uid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    gid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    os: jspb.Message.getFieldWithDefault(msg, 8, ""),
    arch: jspb.Message.getFieldWithDefault(msg, 9, ""),
    transport: jspb.Message.getFieldWithDefault(msg, 10, ""),
    remoteaddress: jspb.Message.getFieldWithDefault(msg, 11, ""),
    pid: jspb.Message.getFieldWithDefault(msg, 12, 0),
    filename: jspb.Message.getFieldWithDefault(msg, 13, ""),
    lastcheckin: jspb.Message.getFieldWithDefault(msg, 14, 0),
    activec2: jspb.Message.getFieldWithDefault(msg, 15, ""),
    version: jspb.Message.getFieldWithDefault(msg, 16, ""),
    evasion: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    isdead: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    reconnectinterval: jspb.Message.getFieldWithDefault(msg, 19, 0),
    proxyurl: jspb.Message.getFieldWithDefault(msg, 20, ""),
    burned: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    extensionsList: (f = jspb.Message.getRepeatedField(msg, 23)) == null ? undefined : f,
    peerid: jspb.Message.getFieldWithDefault(msg, 25, 0)
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
 * @return {!proto.clientpb.Session}
 */
proto.clientpb.Session.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Session;
  return proto.clientpb.Session.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Session} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Session}
 */
proto.clientpb.Session.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOs(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setArch(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransport(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteaddress(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastcheckin(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivec2(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEvasion(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdead(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReconnectinterval(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setProxyurl(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBurned(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.addExtensions(value);
      break;
    case 25:
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
proto.clientpb.Session.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Session.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Session} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Session.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOs();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getArch();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTransport();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRemoteaddress();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getLastcheckin();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getActivec2();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getEvasion();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getIsdead();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getReconnectinterval();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getProxyurl();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getBurned();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      23,
      f
    );
  }
  f = message.getPeerid();
  if (f !== 0) {
    writer.writeInt64(
      25,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.clientpb.Session.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.clientpb.Session.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Hostname = 3;
 * @return {string}
 */
proto.clientpb.Session.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string UUID = 4;
 * @return {string}
 */
proto.clientpb.Session.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Username = 5;
 * @return {string}
 */
proto.clientpb.Session.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string UID = 6;
 * @return {string}
 */
proto.clientpb.Session.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string GID = 7;
 * @return {string}
 */
proto.clientpb.Session.prototype.getGid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setGid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string OS = 8;
 * @return {string}
 */
proto.clientpb.Session.prototype.getOs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setOs = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string Arch = 9;
 * @return {string}
 */
proto.clientpb.Session.prototype.getArch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setArch = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string Transport = 10;
 * @return {string}
 */
proto.clientpb.Session.prototype.getTransport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setTransport = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string RemoteAddress = 11;
 * @return {string}
 */
proto.clientpb.Session.prototype.getRemoteaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setRemoteaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 PID = 12;
 * @return {number}
 */
proto.clientpb.Session.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string Filename = 13;
 * @return {string}
 */
proto.clientpb.Session.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int64 LastCheckin = 14;
 * @return {number}
 */
proto.clientpb.Session.prototype.getLastcheckin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setLastcheckin = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string ActiveC2 = 15;
 * @return {string}
 */
proto.clientpb.Session.prototype.getActivec2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setActivec2 = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string Version = 16;
 * @return {string}
 */
proto.clientpb.Session.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional bool Evasion = 17;
 * @return {boolean}
 */
proto.clientpb.Session.prototype.getEvasion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setEvasion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional bool IsDead = 18;
 * @return {boolean}
 */
proto.clientpb.Session.prototype.getIsdead = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setIsdead = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional int64 ReconnectInterval = 19;
 * @return {number}
 */
proto.clientpb.Session.prototype.getReconnectinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setReconnectinterval = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string ProxyURL = 20;
 * @return {string}
 */
proto.clientpb.Session.prototype.getProxyurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setProxyurl = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional bool Burned = 22;
 * @return {boolean}
 */
proto.clientpb.Session.prototype.getBurned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setBurned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * repeated string Extensions = 23;
 * @return {!Array<string>}
 */
proto.clientpb.Session.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 23));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 23, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 23, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};


/**
 * optional int64 PeerID = 25;
 * @return {number}
 */
proto.clientpb.Session.prototype.getPeerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Session} returns this
 */
proto.clientpb.Session.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
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
proto.clientpb.Beacon.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Beacon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Beacon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Beacon.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    uid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    gid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    os: jspb.Message.getFieldWithDefault(msg, 8, ""),
    arch: jspb.Message.getFieldWithDefault(msg, 9, ""),
    transport: jspb.Message.getFieldWithDefault(msg, 10, ""),
    remoteaddress: jspb.Message.getFieldWithDefault(msg, 11, ""),
    pid: jspb.Message.getFieldWithDefault(msg, 12, 0),
    filename: jspb.Message.getFieldWithDefault(msg, 13, ""),
    lastcheckin: jspb.Message.getFieldWithDefault(msg, 14, 0),
    activec2: jspb.Message.getFieldWithDefault(msg, 15, ""),
    version: jspb.Message.getFieldWithDefault(msg, 16, ""),
    evasion: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    isdead: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    proxyurl: jspb.Message.getFieldWithDefault(msg, 20, ""),
    reconnectinterval: jspb.Message.getFieldWithDefault(msg, 21, 0),
    interval: jspb.Message.getFieldWithDefault(msg, 22, 0),
    jitter: jspb.Message.getFieldWithDefault(msg, 23, 0),
    burned: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    nextcheckin: jspb.Message.getFieldWithDefault(msg, 25, 0),
    taskscount: jspb.Message.getFieldWithDefault(msg, 26, 0),
    taskscountcompleted: jspb.Message.getFieldWithDefault(msg, 27, 0)
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
 * @return {!proto.clientpb.Beacon}
 */
proto.clientpb.Beacon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Beacon;
  return proto.clientpb.Beacon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Beacon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Beacon}
 */
proto.clientpb.Beacon.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOs(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setArch(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransport(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteaddress(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastcheckin(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivec2(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEvasion(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdead(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setProxyurl(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReconnectinterval(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInterval(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setJitter(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBurned(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextcheckin(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTaskscount(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTaskscountcompleted(value);
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
proto.clientpb.Beacon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Beacon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Beacon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Beacon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOs();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getArch();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTransport();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRemoteaddress();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getLastcheckin();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getActivec2();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getEvasion();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getIsdead();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getProxyurl();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getReconnectinterval();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0) {
    writer.writeInt64(
      22,
      f
    );
  }
  f = message.getJitter();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getBurned();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getNextcheckin();
  if (f !== 0) {
    writer.writeInt64(
      25,
      f
    );
  }
  f = message.getTaskscount();
  if (f !== 0) {
    writer.writeInt64(
      26,
      f
    );
  }
  f = message.getTaskscountcompleted();
  if (f !== 0) {
    writer.writeInt64(
      27,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Hostname = 3;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string UUID = 4;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Username = 5;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string UID = 6;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string GID = 7;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getGid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setGid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string OS = 8;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getOs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setOs = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string Arch = 9;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getArch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setArch = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string Transport = 10;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getTransport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setTransport = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string RemoteAddress = 11;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getRemoteaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setRemoteaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 PID = 12;
 * @return {number}
 */
proto.clientpb.Beacon.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string Filename = 13;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int64 LastCheckin = 14;
 * @return {number}
 */
proto.clientpb.Beacon.prototype.getLastcheckin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setLastcheckin = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string ActiveC2 = 15;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getActivec2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setActivec2 = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string Version = 16;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional bool Evasion = 17;
 * @return {boolean}
 */
proto.clientpb.Beacon.prototype.getEvasion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setEvasion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional bool IsDead = 18;
 * @return {boolean}
 */
proto.clientpb.Beacon.prototype.getIsdead = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setIsdead = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional string ProxyURL = 20;
 * @return {string}
 */
proto.clientpb.Beacon.prototype.getProxyurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setProxyurl = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional int64 ReconnectInterval = 21;
 * @return {number}
 */
proto.clientpb.Beacon.prototype.getReconnectinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setReconnectinterval = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional int64 Interval = 22;
 * @return {number}
 */
proto.clientpb.Beacon.prototype.getInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional int64 Jitter = 23;
 * @return {number}
 */
proto.clientpb.Beacon.prototype.getJitter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setJitter = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional bool Burned = 24;
 * @return {boolean}
 */
proto.clientpb.Beacon.prototype.getBurned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setBurned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional int64 NextCheckin = 25;
 * @return {number}
 */
proto.clientpb.Beacon.prototype.getNextcheckin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setNextcheckin = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional int64 TasksCount = 26;
 * @return {number}
 */
proto.clientpb.Beacon.prototype.getTaskscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setTaskscount = function(value) {
  return jspb.Message.setProto3IntField(this, 26, value);
};


/**
 * optional int64 TasksCountCompleted = 27;
 * @return {number}
 */
proto.clientpb.Beacon.prototype.getTaskscountcompleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Beacon} returns this
 */
proto.clientpb.Beacon.prototype.setTaskscountcompleted = function(value) {
  return jspb.Message.setProto3IntField(this, 27, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.Beacons.repeatedFields_ = [2];



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
proto.clientpb.Beacons.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Beacons.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Beacons} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Beacons.toObject = function(includeInstance, msg) {
  var f, obj = {
    beaconsList: jspb.Message.toObjectList(msg.getBeaconsList(),
    proto.clientpb.Beacon.toObject, includeInstance)
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
 * @return {!proto.clientpb.Beacons}
 */
proto.clientpb.Beacons.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Beacons;
  return proto.clientpb.Beacons.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Beacons} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Beacons}
 */
proto.clientpb.Beacons.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.clientpb.Beacon;
      reader.readMessage(value,proto.clientpb.Beacon.deserializeBinaryFromReader);
      msg.addBeacons(value);
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
proto.clientpb.Beacons.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Beacons.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Beacons} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Beacons.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeaconsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.clientpb.Beacon.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Beacon Beacons = 2;
 * @return {!Array<!proto.clientpb.Beacon>}
 */
proto.clientpb.Beacons.prototype.getBeaconsList = function() {
  return /** @type{!Array<!proto.clientpb.Beacon>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.Beacon, 2));
};


/**
 * @param {!Array<!proto.clientpb.Beacon>} value
 * @return {!proto.clientpb.Beacons} returns this
*/
proto.clientpb.Beacons.prototype.setBeaconsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.clientpb.Beacon=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.Beacon}
 */
proto.clientpb.Beacons.prototype.addBeacons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.clientpb.Beacon, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Beacons} returns this
 */
proto.clientpb.Beacons.prototype.clearBeaconsList = function() {
  return this.setBeaconsList([]);
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
proto.clientpb.BeaconTask.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.BeaconTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.BeaconTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.BeaconTask.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    beaconid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    state: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sentat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    completedat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    request: msg.getRequest_asB64(),
    response: msg.getResponse_asB64(),
    description: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.clientpb.BeaconTask}
 */
proto.clientpb.BeaconTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.BeaconTask;
  return proto.clientpb.BeaconTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.BeaconTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.BeaconTask}
 */
proto.clientpb.BeaconTask.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setBeaconid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSentat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCompletedat(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRequest(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResponse(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.clientpb.BeaconTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.BeaconTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.BeaconTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.BeaconTask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBeaconid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSentat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getCompletedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getRequest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getResponse_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.clientpb.BeaconTask.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.BeaconTask} returns this
 */
proto.clientpb.BeaconTask.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string BeaconID = 2;
 * @return {string}
 */
proto.clientpb.BeaconTask.prototype.getBeaconid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.BeaconTask} returns this
 */
proto.clientpb.BeaconTask.prototype.setBeaconid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 CreatedAt = 3;
 * @return {number}
 */
proto.clientpb.BeaconTask.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.BeaconTask} returns this
 */
proto.clientpb.BeaconTask.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string State = 4;
 * @return {string}
 */
proto.clientpb.BeaconTask.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.BeaconTask} returns this
 */
proto.clientpb.BeaconTask.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 SentAt = 5;
 * @return {number}
 */
proto.clientpb.BeaconTask.prototype.getSentat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.BeaconTask} returns this
 */
proto.clientpb.BeaconTask.prototype.setSentat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 CompletedAt = 6;
 * @return {number}
 */
proto.clientpb.BeaconTask.prototype.getCompletedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.BeaconTask} returns this
 */
proto.clientpb.BeaconTask.prototype.setCompletedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bytes Request = 7;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.BeaconTask.prototype.getRequest = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes Request = 7;
 * This is a type-conversion wrapper around `getRequest()`
 * @return {string}
 */
proto.clientpb.BeaconTask.prototype.getRequest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRequest()));
};


/**
 * optional bytes Request = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRequest()`
 * @return {!Uint8Array}
 */
proto.clientpb.BeaconTask.prototype.getRequest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRequest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.BeaconTask} returns this
 */
proto.clientpb.BeaconTask.prototype.setRequest = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes Response = 8;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.BeaconTask.prototype.getResponse = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes Response = 8;
 * This is a type-conversion wrapper around `getResponse()`
 * @return {string}
 */
proto.clientpb.BeaconTask.prototype.getResponse_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResponse()));
};


/**
 * optional bytes Response = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResponse()`
 * @return {!Uint8Array}
 */
proto.clientpb.BeaconTask.prototype.getResponse_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResponse()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.BeaconTask} returns this
 */
proto.clientpb.BeaconTask.prototype.setResponse = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional string Description = 9;
 * @return {string}
 */
proto.clientpb.BeaconTask.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.BeaconTask} returns this
 */
proto.clientpb.BeaconTask.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.BeaconTasks.repeatedFields_ = [2];



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
proto.clientpb.BeaconTasks.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.BeaconTasks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.BeaconTasks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.BeaconTasks.toObject = function(includeInstance, msg) {
  var f, obj = {
    beaconid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.clientpb.BeaconTask.toObject, includeInstance)
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
 * @return {!proto.clientpb.BeaconTasks}
 */
proto.clientpb.BeaconTasks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.BeaconTasks;
  return proto.clientpb.BeaconTasks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.BeaconTasks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.BeaconTasks}
 */
proto.clientpb.BeaconTasks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeaconid(value);
      break;
    case 2:
      var value = new proto.clientpb.BeaconTask;
      reader.readMessage(value,proto.clientpb.BeaconTask.deserializeBinaryFromReader);
      msg.addTasks(value);
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
proto.clientpb.BeaconTasks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.BeaconTasks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.BeaconTasks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.BeaconTasks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeaconid();
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
      proto.clientpb.BeaconTask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string BeaconID = 1;
 * @return {string}
 */
proto.clientpb.BeaconTasks.prototype.getBeaconid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.BeaconTasks} returns this
 */
proto.clientpb.BeaconTasks.prototype.setBeaconid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated BeaconTask Tasks = 2;
 * @return {!Array<!proto.clientpb.BeaconTask>}
 */
proto.clientpb.BeaconTasks.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.clientpb.BeaconTask>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.BeaconTask, 2));
};


/**
 * @param {!Array<!proto.clientpb.BeaconTask>} value
 * @return {!proto.clientpb.BeaconTasks} returns this
*/
proto.clientpb.BeaconTasks.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.clientpb.BeaconTask=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.BeaconTask}
 */
proto.clientpb.BeaconTasks.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.clientpb.BeaconTask, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.BeaconTasks} returns this
 */
proto.clientpb.BeaconTasks.prototype.clearTasksList = function() {
  return this.setTasksList([]);
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
proto.clientpb.ImplantC2.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.ImplantC2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.ImplantC2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ImplantC2.toObject = function(includeInstance, msg) {
  var f, obj = {
    priority: jspb.Message.getFieldWithDefault(msg, 1, 0),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    options: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.clientpb.ImplantC2}
 */
proto.clientpb.ImplantC2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.ImplantC2;
  return proto.clientpb.ImplantC2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.ImplantC2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.ImplantC2}
 */
proto.clientpb.ImplantC2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPriority(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptions(value);
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
proto.clientpb.ImplantC2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.ImplantC2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.ImplantC2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ImplantC2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPriority();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOptions();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 Priority = 1;
 * @return {number}
 */
proto.clientpb.ImplantC2.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.ImplantC2} returns this
 */
proto.clientpb.ImplantC2.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string URL = 2;
 * @return {string}
 */
proto.clientpb.ImplantC2.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantC2} returns this
 */
proto.clientpb.ImplantC2.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Options = 3;
 * @return {string}
 */
proto.clientpb.ImplantC2.prototype.getOptions = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantC2} returns this
 */
proto.clientpb.ImplantC2.prototype.setOptions = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.ImplantConfig.repeatedFields_ = [50,51];



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
proto.clientpb.ImplantConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.ImplantConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.ImplantConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ImplantConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isbeacon: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    beaconinterval: jspb.Message.getFieldWithDefault(msg, 3, 0),
    beaconjitter: jspb.Message.getFieldWithDefault(msg, 4, 0),
    goos: jspb.Message.getFieldWithDefault(msg, 5, ""),
    goarch: jspb.Message.getFieldWithDefault(msg, 6, ""),
    name: jspb.Message.getFieldWithDefault(msg, 7, ""),
    debug: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    evasion: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    obfuscatesymbols: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    mtlscacert: jspb.Message.getFieldWithDefault(msg, 20, ""),
    mtlscert: jspb.Message.getFieldWithDefault(msg, 21, ""),
    mtlskey: jspb.Message.getFieldWithDefault(msg, 22, ""),
    eccpublickey: jspb.Message.getFieldWithDefault(msg, 23, ""),
    eccprivatekey: jspb.Message.getFieldWithDefault(msg, 24, ""),
    eccpublickeysignature: jspb.Message.getFieldWithDefault(msg, 25, ""),
    minisignserverpublickey: jspb.Message.getFieldWithDefault(msg, 26, ""),
    wgimplantprivkey: jspb.Message.getFieldWithDefault(msg, 30, ""),
    wgserverpubkey: jspb.Message.getFieldWithDefault(msg, 31, ""),
    wgpeertunip: jspb.Message.getFieldWithDefault(msg, 32, ""),
    wgkeyexchangeport: jspb.Message.getFieldWithDefault(msg, 33, 0),
    wgtcpcommsport: jspb.Message.getFieldWithDefault(msg, 34, 0),
    reconnectinterval: jspb.Message.getFieldWithDefault(msg, 40, 0),
    maxconnectionerrors: jspb.Message.getFieldWithDefault(msg, 41, 0),
    polltimeout: jspb.Message.getFieldWithDefault(msg, 42, 0),
    c2List: jspb.Message.toObjectList(msg.getC2List(),
    proto.clientpb.ImplantC2.toObject, includeInstance),
    canarydomainsList: (f = jspb.Message.getRepeatedField(msg, 51)) == null ? undefined : f,
    connectionstrategy: jspb.Message.getFieldWithDefault(msg, 52, ""),
    limitdomainjoined: jspb.Message.getBooleanFieldWithDefault(msg, 60, false),
    limitdatetime: jspb.Message.getFieldWithDefault(msg, 61, ""),
    limithostname: jspb.Message.getFieldWithDefault(msg, 62, ""),
    limitusername: jspb.Message.getFieldWithDefault(msg, 63, ""),
    limitfileexists: jspb.Message.getFieldWithDefault(msg, 64, ""),
    format: jspb.Message.getFieldWithDefault(msg, 100, 0),
    issharedlib: jspb.Message.getBooleanFieldWithDefault(msg, 101, false),
    filename: jspb.Message.getFieldWithDefault(msg, 102, ""),
    isservice: jspb.Message.getBooleanFieldWithDefault(msg, 103, false),
    isshellcode: jspb.Message.getBooleanFieldWithDefault(msg, 104, false),
    runatload: jspb.Message.getBooleanFieldWithDefault(msg, 105, false)
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
 * @return {!proto.clientpb.ImplantConfig}
 */
proto.clientpb.ImplantConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.ImplantConfig;
  return proto.clientpb.ImplantConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.ImplantConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.ImplantConfig}
 */
proto.clientpb.ImplantConfig.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsbeacon(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBeaconinterval(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBeaconjitter(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoos(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoarch(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDebug(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEvasion(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setObfuscatesymbols(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setMtlscacert(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setMtlscert(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setMtlskey(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setEccpublickey(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setEccprivatekey(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setEccpublickeysignature(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinisignserverpublickey(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setWgimplantprivkey(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setWgserverpubkey(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setWgpeertunip(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWgkeyexchangeport(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWgtcpcommsport(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReconnectinterval(value);
      break;
    case 41:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxconnectionerrors(value);
      break;
    case 42:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPolltimeout(value);
      break;
    case 50:
      var value = new proto.clientpb.ImplantC2;
      reader.readMessage(value,proto.clientpb.ImplantC2.deserializeBinaryFromReader);
      msg.addC2(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readString());
      msg.addCanarydomains(value);
      break;
    case 52:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionstrategy(value);
      break;
    case 60:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLimitdomainjoined(value);
      break;
    case 61:
      var value = /** @type {string} */ (reader.readString());
      msg.setLimitdatetime(value);
      break;
    case 62:
      var value = /** @type {string} */ (reader.readString());
      msg.setLimithostname(value);
      break;
    case 63:
      var value = /** @type {string} */ (reader.readString());
      msg.setLimitusername(value);
      break;
    case 64:
      var value = /** @type {string} */ (reader.readString());
      msg.setLimitfileexists(value);
      break;
    case 100:
      var value = /** @type {!proto.clientpb.OutputFormat} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 101:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssharedlib(value);
      break;
    case 102:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 103:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsservice(value);
      break;
    case 104:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsshellcode(value);
      break;
    case 105:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRunatload(value);
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
proto.clientpb.ImplantConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.ImplantConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.ImplantConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ImplantConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsbeacon();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBeaconinterval();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getBeaconjitter();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getGoos();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getGoarch();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDebug();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getEvasion();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getObfuscatesymbols();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getMtlscacert();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getMtlscert();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getMtlskey();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getEccpublickey();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getEccprivatekey();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getEccpublickeysignature();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getMinisignserverpublickey();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getWgimplantprivkey();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getWgserverpubkey();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getWgpeertunip();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getWgkeyexchangeport();
  if (f !== 0) {
    writer.writeUint32(
      33,
      f
    );
  }
  f = message.getWgtcpcommsport();
  if (f !== 0) {
    writer.writeUint32(
      34,
      f
    );
  }
  f = message.getReconnectinterval();
  if (f !== 0) {
    writer.writeInt64(
      40,
      f
    );
  }
  f = message.getMaxconnectionerrors();
  if (f !== 0) {
    writer.writeUint32(
      41,
      f
    );
  }
  f = message.getPolltimeout();
  if (f !== 0) {
    writer.writeInt64(
      42,
      f
    );
  }
  f = message.getC2List();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      50,
      f,
      proto.clientpb.ImplantC2.serializeBinaryToWriter
    );
  }
  f = message.getCanarydomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      51,
      f
    );
  }
  f = message.getConnectionstrategy();
  if (f.length > 0) {
    writer.writeString(
      52,
      f
    );
  }
  f = message.getLimitdomainjoined();
  if (f) {
    writer.writeBool(
      60,
      f
    );
  }
  f = message.getLimitdatetime();
  if (f.length > 0) {
    writer.writeString(
      61,
      f
    );
  }
  f = message.getLimithostname();
  if (f.length > 0) {
    writer.writeString(
      62,
      f
    );
  }
  f = message.getLimitusername();
  if (f.length > 0) {
    writer.writeString(
      63,
      f
    );
  }
  f = message.getLimitfileexists();
  if (f.length > 0) {
    writer.writeString(
      64,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      100,
      f
    );
  }
  f = message.getIssharedlib();
  if (f) {
    writer.writeBool(
      101,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      102,
      f
    );
  }
  f = message.getIsservice();
  if (f) {
    writer.writeBool(
      103,
      f
    );
  }
  f = message.getIsshellcode();
  if (f) {
    writer.writeBool(
      104,
      f
    );
  }
  f = message.getRunatload();
  if (f) {
    writer.writeBool(
      105,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool IsBeacon = 2;
 * @return {boolean}
 */
proto.clientpb.ImplantConfig.prototype.getIsbeacon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setIsbeacon = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 BeaconInterval = 3;
 * @return {number}
 */
proto.clientpb.ImplantConfig.prototype.getBeaconinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setBeaconinterval = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 BeaconJitter = 4;
 * @return {number}
 */
proto.clientpb.ImplantConfig.prototype.getBeaconjitter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setBeaconjitter = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string GOOS = 5;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getGoos = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setGoos = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string GOARCH = 6;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getGoarch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setGoarch = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string Name = 7;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool Debug = 8;
 * @return {boolean}
 */
proto.clientpb.ImplantConfig.prototype.getDebug = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setDebug = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool Evasion = 9;
 * @return {boolean}
 */
proto.clientpb.ImplantConfig.prototype.getEvasion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setEvasion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool ObfuscateSymbols = 10;
 * @return {boolean}
 */
proto.clientpb.ImplantConfig.prototype.getObfuscatesymbols = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setObfuscatesymbols = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string MtlsCACert = 20;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getMtlscacert = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setMtlscacert = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string MtlsCert = 21;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getMtlscert = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setMtlscert = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string MtlsKey = 22;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getMtlskey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setMtlskey = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string ECCPublicKey = 23;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getEccpublickey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setEccpublickey = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string ECCPrivateKey = 24;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getEccprivatekey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setEccprivatekey = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string ECCPublicKeySignature = 25;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getEccpublickeysignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setEccpublickeysignature = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string MinisignServerPublicKey = 26;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getMinisignserverpublickey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setMinisignserverpublickey = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string WGImplantPrivKey = 30;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getWgimplantprivkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setWgimplantprivkey = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional string WGServerPubKey = 31;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getWgserverpubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setWgserverpubkey = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional string WGPeerTunIP = 32;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getWgpeertunip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setWgpeertunip = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional uint32 WGKeyExchangePort = 33;
 * @return {number}
 */
proto.clientpb.ImplantConfig.prototype.getWgkeyexchangeport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setWgkeyexchangeport = function(value) {
  return jspb.Message.setProto3IntField(this, 33, value);
};


/**
 * optional uint32 WGTcpCommsPort = 34;
 * @return {number}
 */
proto.clientpb.ImplantConfig.prototype.getWgtcpcommsport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setWgtcpcommsport = function(value) {
  return jspb.Message.setProto3IntField(this, 34, value);
};


/**
 * optional int64 ReconnectInterval = 40;
 * @return {number}
 */
proto.clientpb.ImplantConfig.prototype.getReconnectinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 40, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setReconnectinterval = function(value) {
  return jspb.Message.setProto3IntField(this, 40, value);
};


/**
 * optional uint32 MaxConnectionErrors = 41;
 * @return {number}
 */
proto.clientpb.ImplantConfig.prototype.getMaxconnectionerrors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 41, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setMaxconnectionerrors = function(value) {
  return jspb.Message.setProto3IntField(this, 41, value);
};


/**
 * optional int64 PollTimeout = 42;
 * @return {number}
 */
proto.clientpb.ImplantConfig.prototype.getPolltimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 42, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setPolltimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 42, value);
};


/**
 * repeated ImplantC2 C2 = 50;
 * @return {!Array<!proto.clientpb.ImplantC2>}
 */
proto.clientpb.ImplantConfig.prototype.getC2List = function() {
  return /** @type{!Array<!proto.clientpb.ImplantC2>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.ImplantC2, 50));
};


/**
 * @param {!Array<!proto.clientpb.ImplantC2>} value
 * @return {!proto.clientpb.ImplantConfig} returns this
*/
proto.clientpb.ImplantConfig.prototype.setC2List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 50, value);
};


/**
 * @param {!proto.clientpb.ImplantC2=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.ImplantC2}
 */
proto.clientpb.ImplantConfig.prototype.addC2 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 50, opt_value, proto.clientpb.ImplantC2, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.clearC2List = function() {
  return this.setC2List([]);
};


/**
 * repeated string CanaryDomains = 51;
 * @return {!Array<string>}
 */
proto.clientpb.ImplantConfig.prototype.getCanarydomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 51));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setCanarydomainsList = function(value) {
  return jspb.Message.setField(this, 51, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.addCanarydomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 51, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.clearCanarydomainsList = function() {
  return this.setCanarydomainsList([]);
};


/**
 * optional string ConnectionStrategy = 52;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getConnectionstrategy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 52, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setConnectionstrategy = function(value) {
  return jspb.Message.setProto3StringField(this, 52, value);
};


/**
 * optional bool LimitDomainJoined = 60;
 * @return {boolean}
 */
proto.clientpb.ImplantConfig.prototype.getLimitdomainjoined = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 60, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setLimitdomainjoined = function(value) {
  return jspb.Message.setProto3BooleanField(this, 60, value);
};


/**
 * optional string LimitDatetime = 61;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getLimitdatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 61, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setLimitdatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 61, value);
};


/**
 * optional string LimitHostname = 62;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getLimithostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 62, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setLimithostname = function(value) {
  return jspb.Message.setProto3StringField(this, 62, value);
};


/**
 * optional string LimitUsername = 63;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getLimitusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 63, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setLimitusername = function(value) {
  return jspb.Message.setProto3StringField(this, 63, value);
};


/**
 * optional string LimitFileExists = 64;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getLimitfileexists = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 64, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setLimitfileexists = function(value) {
  return jspb.Message.setProto3StringField(this, 64, value);
};


/**
 * optional OutputFormat Format = 100;
 * @return {!proto.clientpb.OutputFormat}
 */
proto.clientpb.ImplantConfig.prototype.getFormat = function() {
  return /** @type {!proto.clientpb.OutputFormat} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {!proto.clientpb.OutputFormat} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 100, value);
};


/**
 * optional bool IsSharedLib = 101;
 * @return {boolean}
 */
proto.clientpb.ImplantConfig.prototype.getIssharedlib = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 101, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setIssharedlib = function(value) {
  return jspb.Message.setProto3BooleanField(this, 101, value);
};


/**
 * optional string FileName = 102;
 * @return {string}
 */
proto.clientpb.ImplantConfig.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 102, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 102, value);
};


/**
 * optional bool IsService = 103;
 * @return {boolean}
 */
proto.clientpb.ImplantConfig.prototype.getIsservice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 103, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setIsservice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 103, value);
};


/**
 * optional bool IsShellcode = 104;
 * @return {boolean}
 */
proto.clientpb.ImplantConfig.prototype.getIsshellcode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 104, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setIsshellcode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 104, value);
};


/**
 * optional bool RunAtLoad = 105;
 * @return {boolean}
 */
proto.clientpb.ImplantConfig.prototype.getRunatload = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 105, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.ImplantConfig} returns this
 */
proto.clientpb.ImplantConfig.prototype.setRunatload = function(value) {
  return jspb.Message.setProto3BooleanField(this, 105, value);
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
proto.clientpb.ImplantBuilds.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.ImplantBuilds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.ImplantBuilds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ImplantBuilds.toObject = function(includeInstance, msg) {
  var f, obj = {
    configsMap: (f = msg.getConfigsMap()) ? f.toObject(includeInstance, proto.clientpb.ImplantConfig.toObject) : []
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
 * @return {!proto.clientpb.ImplantBuilds}
 */
proto.clientpb.ImplantBuilds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.ImplantBuilds;
  return proto.clientpb.ImplantBuilds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.ImplantBuilds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.ImplantBuilds}
 */
proto.clientpb.ImplantBuilds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getConfigsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.clientpb.ImplantConfig.deserializeBinaryFromReader, "", new proto.clientpb.ImplantConfig());
         });
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
proto.clientpb.ImplantBuilds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.ImplantBuilds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.ImplantBuilds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ImplantBuilds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.clientpb.ImplantConfig.serializeBinaryToWriter);
  }
};


/**
 * map<string, ImplantConfig> Configs = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.clientpb.ImplantConfig>}
 */
proto.clientpb.ImplantBuilds.prototype.getConfigsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.clientpb.ImplantConfig>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.clientpb.ImplantConfig));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.clientpb.ImplantBuilds} returns this
 */
proto.clientpb.ImplantBuilds.prototype.clearConfigsMap = function() {
  this.getConfigsMap().clear();
  return this;};





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
proto.clientpb.CompilerTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.CompilerTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.CompilerTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.CompilerTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
    goos: jspb.Message.getFieldWithDefault(msg, 1, ""),
    goarch: jspb.Message.getFieldWithDefault(msg, 2, ""),
    format: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.clientpb.CompilerTarget}
 */
proto.clientpb.CompilerTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.CompilerTarget;
  return proto.clientpb.CompilerTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.CompilerTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.CompilerTarget}
 */
proto.clientpb.CompilerTarget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoos(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoarch(value);
      break;
    case 3:
      var value = /** @type {!proto.clientpb.OutputFormat} */ (reader.readEnum());
      msg.setFormat(value);
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
proto.clientpb.CompilerTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.CompilerTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.CompilerTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.CompilerTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGoos();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGoarch();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string GOOS = 1;
 * @return {string}
 */
proto.clientpb.CompilerTarget.prototype.getGoos = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.CompilerTarget} returns this
 */
proto.clientpb.CompilerTarget.prototype.setGoos = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string GOARCH = 2;
 * @return {string}
 */
proto.clientpb.CompilerTarget.prototype.getGoarch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.CompilerTarget} returns this
 */
proto.clientpb.CompilerTarget.prototype.setGoarch = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OutputFormat Format = 3;
 * @return {!proto.clientpb.OutputFormat}
 */
proto.clientpb.CompilerTarget.prototype.getFormat = function() {
  return /** @type {!proto.clientpb.OutputFormat} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.clientpb.OutputFormat} value
 * @return {!proto.clientpb.CompilerTarget} returns this
 */
proto.clientpb.CompilerTarget.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.clientpb.CrossCompiler.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.CrossCompiler.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.CrossCompiler} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.CrossCompiler.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetgoos: jspb.Message.getFieldWithDefault(msg, 1, ""),
    targetgoarch: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ccpath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cxxpath: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.clientpb.CrossCompiler}
 */
proto.clientpb.CrossCompiler.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.CrossCompiler;
  return proto.clientpb.CrossCompiler.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.CrossCompiler} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.CrossCompiler}
 */
proto.clientpb.CrossCompiler.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetgoos(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetgoarch(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCcpath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCxxpath(value);
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
proto.clientpb.CrossCompiler.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.CrossCompiler.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.CrossCompiler} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.CrossCompiler.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetgoos();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTargetgoarch();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCcpath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCxxpath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string TargetGOOS = 1;
 * @return {string}
 */
proto.clientpb.CrossCompiler.prototype.getTargetgoos = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.CrossCompiler} returns this
 */
proto.clientpb.CrossCompiler.prototype.setTargetgoos = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string TargetGOARCH = 2;
 * @return {string}
 */
proto.clientpb.CrossCompiler.prototype.getTargetgoarch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.CrossCompiler} returns this
 */
proto.clientpb.CrossCompiler.prototype.setTargetgoarch = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string CCPath = 3;
 * @return {string}
 */
proto.clientpb.CrossCompiler.prototype.getCcpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.CrossCompiler} returns this
 */
proto.clientpb.CrossCompiler.prototype.setCcpath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string CXXPath = 4;
 * @return {string}
 */
proto.clientpb.CrossCompiler.prototype.getCxxpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.CrossCompiler} returns this
 */
proto.clientpb.CrossCompiler.prototype.setCxxpath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.Compiler.repeatedFields_ = [3,4,5];



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
proto.clientpb.Compiler.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Compiler.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Compiler} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Compiler.toObject = function(includeInstance, msg) {
  var f, obj = {
    goos: jspb.Message.getFieldWithDefault(msg, 1, ""),
    goarch: jspb.Message.getFieldWithDefault(msg, 2, ""),
    targetsList: jspb.Message.toObjectList(msg.getTargetsList(),
    proto.clientpb.CompilerTarget.toObject, includeInstance),
    crosscompilersList: jspb.Message.toObjectList(msg.getCrosscompilersList(),
    proto.clientpb.CrossCompiler.toObject, includeInstance),
    unsupportedtargetsList: jspb.Message.toObjectList(msg.getUnsupportedtargetsList(),
    proto.clientpb.CompilerTarget.toObject, includeInstance)
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
 * @return {!proto.clientpb.Compiler}
 */
proto.clientpb.Compiler.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Compiler;
  return proto.clientpb.Compiler.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Compiler} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Compiler}
 */
proto.clientpb.Compiler.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoos(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoarch(value);
      break;
    case 3:
      var value = new proto.clientpb.CompilerTarget;
      reader.readMessage(value,proto.clientpb.CompilerTarget.deserializeBinaryFromReader);
      msg.addTargets(value);
      break;
    case 4:
      var value = new proto.clientpb.CrossCompiler;
      reader.readMessage(value,proto.clientpb.CrossCompiler.deserializeBinaryFromReader);
      msg.addCrosscompilers(value);
      break;
    case 5:
      var value = new proto.clientpb.CompilerTarget;
      reader.readMessage(value,proto.clientpb.CompilerTarget.deserializeBinaryFromReader);
      msg.addUnsupportedtargets(value);
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
proto.clientpb.Compiler.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Compiler.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Compiler} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Compiler.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGoos();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGoarch();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.clientpb.CompilerTarget.serializeBinaryToWriter
    );
  }
  f = message.getCrosscompilersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.clientpb.CrossCompiler.serializeBinaryToWriter
    );
  }
  f = message.getUnsupportedtargetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.clientpb.CompilerTarget.serializeBinaryToWriter
    );
  }
};


/**
 * optional string GOOS = 1;
 * @return {string}
 */
proto.clientpb.Compiler.prototype.getGoos = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Compiler} returns this
 */
proto.clientpb.Compiler.prototype.setGoos = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string GOARCH = 2;
 * @return {string}
 */
proto.clientpb.Compiler.prototype.getGoarch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Compiler} returns this
 */
proto.clientpb.Compiler.prototype.setGoarch = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated CompilerTarget Targets = 3;
 * @return {!Array<!proto.clientpb.CompilerTarget>}
 */
proto.clientpb.Compiler.prototype.getTargetsList = function() {
  return /** @type{!Array<!proto.clientpb.CompilerTarget>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.CompilerTarget, 3));
};


/**
 * @param {!Array<!proto.clientpb.CompilerTarget>} value
 * @return {!proto.clientpb.Compiler} returns this
*/
proto.clientpb.Compiler.prototype.setTargetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.clientpb.CompilerTarget=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.CompilerTarget}
 */
proto.clientpb.Compiler.prototype.addTargets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.clientpb.CompilerTarget, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Compiler} returns this
 */
proto.clientpb.Compiler.prototype.clearTargetsList = function() {
  return this.setTargetsList([]);
};


/**
 * repeated CrossCompiler CrossCompilers = 4;
 * @return {!Array<!proto.clientpb.CrossCompiler>}
 */
proto.clientpb.Compiler.prototype.getCrosscompilersList = function() {
  return /** @type{!Array<!proto.clientpb.CrossCompiler>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.CrossCompiler, 4));
};


/**
 * @param {!Array<!proto.clientpb.CrossCompiler>} value
 * @return {!proto.clientpb.Compiler} returns this
*/
proto.clientpb.Compiler.prototype.setCrosscompilersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.clientpb.CrossCompiler=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.CrossCompiler}
 */
proto.clientpb.Compiler.prototype.addCrosscompilers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.clientpb.CrossCompiler, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Compiler} returns this
 */
proto.clientpb.Compiler.prototype.clearCrosscompilersList = function() {
  return this.setCrosscompilersList([]);
};


/**
 * repeated CompilerTarget UnsupportedTargets = 5;
 * @return {!Array<!proto.clientpb.CompilerTarget>}
 */
proto.clientpb.Compiler.prototype.getUnsupportedtargetsList = function() {
  return /** @type{!Array<!proto.clientpb.CompilerTarget>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.CompilerTarget, 5));
};


/**
 * @param {!Array<!proto.clientpb.CompilerTarget>} value
 * @return {!proto.clientpb.Compiler} returns this
*/
proto.clientpb.Compiler.prototype.setUnsupportedtargetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.clientpb.CompilerTarget=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.CompilerTarget}
 */
proto.clientpb.Compiler.prototype.addUnsupportedtargets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.clientpb.CompilerTarget, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Compiler} returns this
 */
proto.clientpb.Compiler.prototype.clearUnsupportedtargetsList = function() {
  return this.setUnsupportedtargetsList([]);
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
proto.clientpb.DeleteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.DeleteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.DeleteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DeleteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.clientpb.DeleteReq}
 */
proto.clientpb.DeleteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.DeleteReq;
  return proto.clientpb.DeleteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.DeleteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.DeleteReq}
 */
proto.clientpb.DeleteReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.clientpb.DeleteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.DeleteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.DeleteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DeleteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.clientpb.DeleteReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.DeleteReq} returns this
 */
proto.clientpb.DeleteReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.clientpb.DNSCanary.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.DNSCanary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.DNSCanary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DNSCanary.toObject = function(includeInstance, msg) {
  var f, obj = {
    implantname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
    triggered: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    firsttriggered: jspb.Message.getFieldWithDefault(msg, 4, ""),
    latesttrigger: jspb.Message.getFieldWithDefault(msg, 5, ""),
    count: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.clientpb.DNSCanary}
 */
proto.clientpb.DNSCanary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.DNSCanary;
  return proto.clientpb.DNSCanary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.DNSCanary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.DNSCanary}
 */
proto.clientpb.DNSCanary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImplantname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTriggered(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirsttriggered(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLatesttrigger(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
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
proto.clientpb.DNSCanary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.DNSCanary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.DNSCanary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DNSCanary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImplantname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTriggered();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getFirsttriggered();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLatesttrigger();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional string ImplantName = 1;
 * @return {string}
 */
proto.clientpb.DNSCanary.prototype.getImplantname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.DNSCanary} returns this
 */
proto.clientpb.DNSCanary.prototype.setImplantname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Domain = 2;
 * @return {string}
 */
proto.clientpb.DNSCanary.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.DNSCanary} returns this
 */
proto.clientpb.DNSCanary.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool Triggered = 3;
 * @return {boolean}
 */
proto.clientpb.DNSCanary.prototype.getTriggered = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.DNSCanary} returns this
 */
proto.clientpb.DNSCanary.prototype.setTriggered = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string FirstTriggered = 4;
 * @return {string}
 */
proto.clientpb.DNSCanary.prototype.getFirsttriggered = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.DNSCanary} returns this
 */
proto.clientpb.DNSCanary.prototype.setFirsttriggered = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string LatestTrigger = 5;
 * @return {string}
 */
proto.clientpb.DNSCanary.prototype.getLatesttrigger = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.DNSCanary} returns this
 */
proto.clientpb.DNSCanary.prototype.setLatesttrigger = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 Count = 6;
 * @return {number}
 */
proto.clientpb.DNSCanary.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.DNSCanary} returns this
 */
proto.clientpb.DNSCanary.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.Canaries.repeatedFields_ = [1];



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
proto.clientpb.Canaries.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Canaries.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Canaries} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Canaries.toObject = function(includeInstance, msg) {
  var f, obj = {
    canariesList: jspb.Message.toObjectList(msg.getCanariesList(),
    proto.clientpb.DNSCanary.toObject, includeInstance)
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
 * @return {!proto.clientpb.Canaries}
 */
proto.clientpb.Canaries.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Canaries;
  return proto.clientpb.Canaries.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Canaries} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Canaries}
 */
proto.clientpb.Canaries.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clientpb.DNSCanary;
      reader.readMessage(value,proto.clientpb.DNSCanary.deserializeBinaryFromReader);
      msg.addCanaries(value);
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
proto.clientpb.Canaries.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Canaries.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Canaries} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Canaries.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCanariesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clientpb.DNSCanary.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DNSCanary Canaries = 1;
 * @return {!Array<!proto.clientpb.DNSCanary>}
 */
proto.clientpb.Canaries.prototype.getCanariesList = function() {
  return /** @type{!Array<!proto.clientpb.DNSCanary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.DNSCanary, 1));
};


/**
 * @param {!Array<!proto.clientpb.DNSCanary>} value
 * @return {!proto.clientpb.Canaries} returns this
*/
proto.clientpb.Canaries.prototype.setCanariesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clientpb.DNSCanary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.DNSCanary}
 */
proto.clientpb.Canaries.prototype.addCanaries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clientpb.DNSCanary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Canaries} returns this
 */
proto.clientpb.Canaries.prototype.clearCanariesList = function() {
  return this.setCanariesList([]);
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
proto.clientpb.UniqueWGIP.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.UniqueWGIP.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.UniqueWGIP} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.UniqueWGIP.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.clientpb.UniqueWGIP}
 */
proto.clientpb.UniqueWGIP.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.UniqueWGIP;
  return proto.clientpb.UniqueWGIP.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.UniqueWGIP} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.UniqueWGIP}
 */
proto.clientpb.UniqueWGIP.deserializeBinaryFromReader = function(msg, reader) {
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
proto.clientpb.UniqueWGIP.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.UniqueWGIP.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.UniqueWGIP} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.UniqueWGIP.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string IP = 1;
 * @return {string}
 */
proto.clientpb.UniqueWGIP.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.UniqueWGIP} returns this
 */
proto.clientpb.UniqueWGIP.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.clientpb.ImplantProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.ImplantProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.ImplantProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ImplantProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.clientpb.ImplantConfig.toObject(includeInstance, f)
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
 * @return {!proto.clientpb.ImplantProfile}
 */
proto.clientpb.ImplantProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.ImplantProfile;
  return proto.clientpb.ImplantProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.ImplantProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.ImplantProfile}
 */
proto.clientpb.ImplantProfile.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.clientpb.ImplantConfig;
      reader.readMessage(value,proto.clientpb.ImplantConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
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
proto.clientpb.ImplantProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.ImplantProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.ImplantProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ImplantProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clientpb.ImplantConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.clientpb.ImplantProfile.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ImplantProfile} returns this
 */
proto.clientpb.ImplantProfile.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ImplantConfig Config = 2;
 * @return {?proto.clientpb.ImplantConfig}
 */
proto.clientpb.ImplantProfile.prototype.getConfig = function() {
  return /** @type{?proto.clientpb.ImplantConfig} */ (
    jspb.Message.getWrapperField(this, proto.clientpb.ImplantConfig, 2));
};


/**
 * @param {?proto.clientpb.ImplantConfig|undefined} value
 * @return {!proto.clientpb.ImplantProfile} returns this
*/
proto.clientpb.ImplantProfile.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.ImplantProfile} returns this
 */
proto.clientpb.ImplantProfile.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.ImplantProfile.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.ImplantProfiles.repeatedFields_ = [1];



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
proto.clientpb.ImplantProfiles.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.ImplantProfiles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.ImplantProfiles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ImplantProfiles.toObject = function(includeInstance, msg) {
  var f, obj = {
    profilesList: jspb.Message.toObjectList(msg.getProfilesList(),
    proto.clientpb.ImplantProfile.toObject, includeInstance)
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
 * @return {!proto.clientpb.ImplantProfiles}
 */
proto.clientpb.ImplantProfiles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.ImplantProfiles;
  return proto.clientpb.ImplantProfiles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.ImplantProfiles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.ImplantProfiles}
 */
proto.clientpb.ImplantProfiles.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clientpb.ImplantProfile;
      reader.readMessage(value,proto.clientpb.ImplantProfile.deserializeBinaryFromReader);
      msg.addProfiles(value);
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
proto.clientpb.ImplantProfiles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.ImplantProfiles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.ImplantProfiles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ImplantProfiles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clientpb.ImplantProfile.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ImplantProfile Profiles = 1;
 * @return {!Array<!proto.clientpb.ImplantProfile>}
 */
proto.clientpb.ImplantProfiles.prototype.getProfilesList = function() {
  return /** @type{!Array<!proto.clientpb.ImplantProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.ImplantProfile, 1));
};


/**
 * @param {!Array<!proto.clientpb.ImplantProfile>} value
 * @return {!proto.clientpb.ImplantProfiles} returns this
*/
proto.clientpb.ImplantProfiles.prototype.setProfilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clientpb.ImplantProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.ImplantProfile}
 */
proto.clientpb.ImplantProfiles.prototype.addProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clientpb.ImplantProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.ImplantProfiles} returns this
 */
proto.clientpb.ImplantProfiles.prototype.clearProfilesList = function() {
  return this.setProfilesList([]);
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
proto.clientpb.RegenerateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.RegenerateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.RegenerateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.RegenerateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    implantname: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.clientpb.RegenerateReq}
 */
proto.clientpb.RegenerateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.RegenerateReq;
  return proto.clientpb.RegenerateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.RegenerateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.RegenerateReq}
 */
proto.clientpb.RegenerateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImplantname(value);
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
proto.clientpb.RegenerateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.RegenerateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.RegenerateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.RegenerateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImplantname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string ImplantName = 1;
 * @return {string}
 */
proto.clientpb.RegenerateReq.prototype.getImplantname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.RegenerateReq} returns this
 */
proto.clientpb.RegenerateReq.prototype.setImplantname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.Job.repeatedFields_ = [6];



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
proto.clientpb.Job.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Job.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Job} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Job.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    protocol: jspb.Message.getFieldWithDefault(msg, 4, ""),
    port: jspb.Message.getFieldWithDefault(msg, 5, 0),
    domainsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.clientpb.Job}
 */
proto.clientpb.Job.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Job;
  return proto.clientpb.Job.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Job} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Job}
 */
proto.clientpb.Job.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addDomains(value);
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
proto.clientpb.Job.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Job.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Job} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Job.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional uint32 ID = 1;
 * @return {number}
 */
proto.clientpb.Job.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Job} returns this
 */
proto.clientpb.Job.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.clientpb.Job.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Job} returns this
 */
proto.clientpb.Job.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Description = 3;
 * @return {string}
 */
proto.clientpb.Job.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Job} returns this
 */
proto.clientpb.Job.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Protocol = 4;
 * @return {string}
 */
proto.clientpb.Job.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Job} returns this
 */
proto.clientpb.Job.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 Port = 5;
 * @return {number}
 */
proto.clientpb.Job.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Job} returns this
 */
proto.clientpb.Job.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated string Domains = 6;
 * @return {!Array<string>}
 */
proto.clientpb.Job.prototype.getDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clientpb.Job} returns this
 */
proto.clientpb.Job.prototype.setDomainsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clientpb.Job} returns this
 */
proto.clientpb.Job.prototype.addDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Job} returns this
 */
proto.clientpb.Job.prototype.clearDomainsList = function() {
  return this.setDomainsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.Jobs.repeatedFields_ = [1];



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
proto.clientpb.Jobs.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Jobs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Jobs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Jobs.toObject = function(includeInstance, msg) {
  var f, obj = {
    activeList: jspb.Message.toObjectList(msg.getActiveList(),
    proto.clientpb.Job.toObject, includeInstance)
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
 * @return {!proto.clientpb.Jobs}
 */
proto.clientpb.Jobs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Jobs;
  return proto.clientpb.Jobs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Jobs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Jobs}
 */
proto.clientpb.Jobs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clientpb.Job;
      reader.readMessage(value,proto.clientpb.Job.deserializeBinaryFromReader);
      msg.addActive(value);
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
proto.clientpb.Jobs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Jobs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Jobs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Jobs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActiveList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clientpb.Job.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Job Active = 1;
 * @return {!Array<!proto.clientpb.Job>}
 */
proto.clientpb.Jobs.prototype.getActiveList = function() {
  return /** @type{!Array<!proto.clientpb.Job>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.Job, 1));
};


/**
 * @param {!Array<!proto.clientpb.Job>} value
 * @return {!proto.clientpb.Jobs} returns this
*/
proto.clientpb.Jobs.prototype.setActiveList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clientpb.Job=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.Job}
 */
proto.clientpb.Jobs.prototype.addActive = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clientpb.Job, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Jobs} returns this
 */
proto.clientpb.Jobs.prototype.clearActiveList = function() {
  return this.setActiveList([]);
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
proto.clientpb.KillJobReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.KillJobReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.KillJobReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.KillJobReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.clientpb.KillJobReq}
 */
proto.clientpb.KillJobReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.KillJobReq;
  return proto.clientpb.KillJobReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.KillJobReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.KillJobReq}
 */
proto.clientpb.KillJobReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.clientpb.KillJobReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.KillJobReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.KillJobReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.KillJobReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 ID = 1;
 * @return {number}
 */
proto.clientpb.KillJobReq.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.KillJobReq} returns this
 */
proto.clientpb.KillJobReq.prototype.setId = function(value) {
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
proto.clientpb.KillJob.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.KillJob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.KillJob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.KillJob.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.clientpb.KillJob}
 */
proto.clientpb.KillJob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.KillJob;
  return proto.clientpb.KillJob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.KillJob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.KillJob}
 */
proto.clientpb.KillJob.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
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
proto.clientpb.KillJob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.KillJob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.KillJob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.KillJob.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional uint32 ID = 1;
 * @return {number}
 */
proto.clientpb.KillJob.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.KillJob} returns this
 */
proto.clientpb.KillJob.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool Success = 2;
 * @return {boolean}
 */
proto.clientpb.KillJob.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.KillJob} returns this
 */
proto.clientpb.KillJob.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.clientpb.MTLSListenerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.MTLSListenerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.MTLSListenerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MTLSListenerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    persistent: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.clientpb.MTLSListenerReq}
 */
proto.clientpb.MTLSListenerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.MTLSListenerReq;
  return proto.clientpb.MTLSListenerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.MTLSListenerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.MTLSListenerReq}
 */
proto.clientpb.MTLSListenerReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersistent(value);
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
proto.clientpb.MTLSListenerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.MTLSListenerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.MTLSListenerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MTLSListenerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
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
  f = message.getPersistent();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string Host = 1;
 * @return {string}
 */
proto.clientpb.MTLSListenerReq.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.MTLSListenerReq} returns this
 */
proto.clientpb.MTLSListenerReq.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 Port = 2;
 * @return {number}
 */
proto.clientpb.MTLSListenerReq.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.MTLSListenerReq} returns this
 */
proto.clientpb.MTLSListenerReq.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool Persistent = 3;
 * @return {boolean}
 */
proto.clientpb.MTLSListenerReq.prototype.getPersistent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.MTLSListenerReq} returns this
 */
proto.clientpb.MTLSListenerReq.prototype.setPersistent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.clientpb.MTLSListener.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.MTLSListener.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.MTLSListener} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MTLSListener.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.clientpb.MTLSListener}
 */
proto.clientpb.MTLSListener.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.MTLSListener;
  return proto.clientpb.MTLSListener.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.MTLSListener} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.MTLSListener}
 */
proto.clientpb.MTLSListener.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setJobid(value);
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
proto.clientpb.MTLSListener.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.MTLSListener.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.MTLSListener} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MTLSListener.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 JobID = 1;
 * @return {number}
 */
proto.clientpb.MTLSListener.prototype.getJobid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.MTLSListener} returns this
 */
proto.clientpb.MTLSListener.prototype.setJobid = function(value) {
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
proto.clientpb.WGListenerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.WGListenerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.WGListenerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WGListenerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 6, ""),
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tunip: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nport: jspb.Message.getFieldWithDefault(msg, 3, 0),
    keyport: jspb.Message.getFieldWithDefault(msg, 4, 0),
    persistent: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.clientpb.WGListenerReq}
 */
proto.clientpb.WGListenerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.WGListenerReq;
  return proto.clientpb.WGListenerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.WGListenerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.WGListenerReq}
 */
proto.clientpb.WGListenerReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTunip(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNport(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKeyport(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersistent(value);
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
proto.clientpb.WGListenerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.WGListenerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.WGListenerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WGListenerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTunip();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNport();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getKeyport();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPersistent();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string Host = 6;
 * @return {string}
 */
proto.clientpb.WGListenerReq.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.WGListenerReq} returns this
 */
proto.clientpb.WGListenerReq.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 Port = 1;
 * @return {number}
 */
proto.clientpb.WGListenerReq.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.WGListenerReq} returns this
 */
proto.clientpb.WGListenerReq.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string TunIP = 2;
 * @return {string}
 */
proto.clientpb.WGListenerReq.prototype.getTunip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.WGListenerReq} returns this
 */
proto.clientpb.WGListenerReq.prototype.setTunip = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 NPort = 3;
 * @return {number}
 */
proto.clientpb.WGListenerReq.prototype.getNport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.WGListenerReq} returns this
 */
proto.clientpb.WGListenerReq.prototype.setNport = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 KeyPort = 4;
 * @return {number}
 */
proto.clientpb.WGListenerReq.prototype.getKeyport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.WGListenerReq} returns this
 */
proto.clientpb.WGListenerReq.prototype.setKeyport = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool Persistent = 5;
 * @return {boolean}
 */
proto.clientpb.WGListenerReq.prototype.getPersistent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.WGListenerReq} returns this
 */
proto.clientpb.WGListenerReq.prototype.setPersistent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.clientpb.WGListener.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.WGListener.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.WGListener} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WGListener.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.clientpb.WGListener}
 */
proto.clientpb.WGListener.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.WGListener;
  return proto.clientpb.WGListener.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.WGListener} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.WGListener}
 */
proto.clientpb.WGListener.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setJobid(value);
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
proto.clientpb.WGListener.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.WGListener.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.WGListener} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WGListener.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 JobID = 1;
 * @return {number}
 */
proto.clientpb.WGListener.prototype.getJobid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.WGListener} returns this
 */
proto.clientpb.WGListener.prototype.setJobid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.DNSListenerReq.repeatedFields_ = [1];



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
proto.clientpb.DNSListenerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.DNSListenerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.DNSListenerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DNSListenerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    domainsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    canaries: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    host: jspb.Message.getFieldWithDefault(msg, 3, ""),
    port: jspb.Message.getFieldWithDefault(msg, 4, 0),
    persistent: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    enforceotp: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.clientpb.DNSListenerReq}
 */
proto.clientpb.DNSListenerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.DNSListenerReq;
  return proto.clientpb.DNSListenerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.DNSListenerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.DNSListenerReq}
 */
proto.clientpb.DNSListenerReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDomains(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanaries(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersistent(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnforceotp(value);
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
proto.clientpb.DNSListenerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.DNSListenerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.DNSListenerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DNSListenerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getCanaries();
  if (f) {
    writer.writeBool(
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
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPersistent();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getEnforceotp();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * repeated string Domains = 1;
 * @return {!Array<string>}
 */
proto.clientpb.DNSListenerReq.prototype.getDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clientpb.DNSListenerReq} returns this
 */
proto.clientpb.DNSListenerReq.prototype.setDomainsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clientpb.DNSListenerReq} returns this
 */
proto.clientpb.DNSListenerReq.prototype.addDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.DNSListenerReq} returns this
 */
proto.clientpb.DNSListenerReq.prototype.clearDomainsList = function() {
  return this.setDomainsList([]);
};


/**
 * optional bool Canaries = 2;
 * @return {boolean}
 */
proto.clientpb.DNSListenerReq.prototype.getCanaries = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.DNSListenerReq} returns this
 */
proto.clientpb.DNSListenerReq.prototype.setCanaries = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string Host = 3;
 * @return {string}
 */
proto.clientpb.DNSListenerReq.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.DNSListenerReq} returns this
 */
proto.clientpb.DNSListenerReq.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 Port = 4;
 * @return {number}
 */
proto.clientpb.DNSListenerReq.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.DNSListenerReq} returns this
 */
proto.clientpb.DNSListenerReq.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool Persistent = 5;
 * @return {boolean}
 */
proto.clientpb.DNSListenerReq.prototype.getPersistent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.DNSListenerReq} returns this
 */
proto.clientpb.DNSListenerReq.prototype.setPersistent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool EnforceOTP = 6;
 * @return {boolean}
 */
proto.clientpb.DNSListenerReq.prototype.getEnforceotp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.DNSListenerReq} returns this
 */
proto.clientpb.DNSListenerReq.prototype.setEnforceotp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.clientpb.DNSListener.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.DNSListener.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.DNSListener} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DNSListener.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.clientpb.DNSListener}
 */
proto.clientpb.DNSListener.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.DNSListener;
  return proto.clientpb.DNSListener.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.DNSListener} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.DNSListener}
 */
proto.clientpb.DNSListener.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setJobid(value);
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
proto.clientpb.DNSListener.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.DNSListener.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.DNSListener} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DNSListener.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 JobID = 1;
 * @return {number}
 */
proto.clientpb.DNSListener.prototype.getJobid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.DNSListener} returns this
 */
proto.clientpb.DNSListener.prototype.setJobid = function(value) {
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
proto.clientpb.HTTPListenerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.HTTPListenerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.HTTPListenerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.HTTPListenerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0),
    secure: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    website: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cert: msg.getCert_asB64(),
    key: msg.getKey_asB64(),
    acme: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    persistent: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    enforceotp: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    longpolltimeout: jspb.Message.getFieldWithDefault(msg, 11, 0),
    longpolljitter: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.clientpb.HTTPListenerReq}
 */
proto.clientpb.HTTPListenerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.HTTPListenerReq;
  return proto.clientpb.HTTPListenerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.HTTPListenerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.HTTPListenerReq}
 */
proto.clientpb.HTTPListenerReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSecure(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebsite(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCert(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAcme(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersistent(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnforceotp(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLongpolltimeout(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLongpolljitter(value);
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
proto.clientpb.HTTPListenerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.HTTPListenerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.HTTPListenerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.HTTPListenerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
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
  f = message.getSecure();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getWebsite();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCert_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getAcme();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getPersistent();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getEnforceotp();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getLongpolltimeout();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getLongpolljitter();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
};


/**
 * optional string Domain = 1;
 * @return {string}
 */
proto.clientpb.HTTPListenerReq.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Host = 2;
 * @return {string}
 */
proto.clientpb.HTTPListenerReq.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 Port = 3;
 * @return {number}
 */
proto.clientpb.HTTPListenerReq.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool Secure = 4;
 * @return {boolean}
 */
proto.clientpb.HTTPListenerReq.prototype.getSecure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setSecure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string Website = 5;
 * @return {string}
 */
proto.clientpb.HTTPListenerReq.prototype.getWebsite = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setWebsite = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes Cert = 6;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.HTTPListenerReq.prototype.getCert = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes Cert = 6;
 * This is a type-conversion wrapper around `getCert()`
 * @return {string}
 */
proto.clientpb.HTTPListenerReq.prototype.getCert_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCert()));
};


/**
 * optional bytes Cert = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCert()`
 * @return {!Uint8Array}
 */
proto.clientpb.HTTPListenerReq.prototype.getCert_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCert()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setCert = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes Key = 7;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.HTTPListenerReq.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes Key = 7;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.clientpb.HTTPListenerReq.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes Key = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.clientpb.HTTPListenerReq.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bool ACME = 8;
 * @return {boolean}
 */
proto.clientpb.HTTPListenerReq.prototype.getAcme = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setAcme = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool Persistent = 9;
 * @return {boolean}
 */
proto.clientpb.HTTPListenerReq.prototype.getPersistent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setPersistent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool EnforceOTP = 10;
 * @return {boolean}
 */
proto.clientpb.HTTPListenerReq.prototype.getEnforceotp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setEnforceotp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional int64 LongPollTimeout = 11;
 * @return {number}
 */
proto.clientpb.HTTPListenerReq.prototype.getLongpolltimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setLongpolltimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 LongPollJitter = 12;
 * @return {number}
 */
proto.clientpb.HTTPListenerReq.prototype.getLongpolljitter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.HTTPListenerReq} returns this
 */
proto.clientpb.HTTPListenerReq.prototype.setLongpolljitter = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
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
proto.clientpb.NamedPipesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.NamedPipesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.NamedPipesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.NamedPipesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    pipename: jspb.Message.getFieldWithDefault(msg, 16, ""),
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
 * @return {!proto.clientpb.NamedPipesReq}
 */
proto.clientpb.NamedPipesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.NamedPipesReq;
  return proto.clientpb.NamedPipesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.NamedPipesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.NamedPipesReq}
 */
proto.clientpb.NamedPipesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setPipename(value);
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
proto.clientpb.NamedPipesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.NamedPipesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.NamedPipesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.NamedPipesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPipename();
  if (f.length > 0) {
    writer.writeString(
      16,
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
 * optional string PipeName = 16;
 * @return {string}
 */
proto.clientpb.NamedPipesReq.prototype.getPipename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.NamedPipesReq} returns this
 */
proto.clientpb.NamedPipesReq.prototype.setPipename = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.clientpb.NamedPipesReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.clientpb.NamedPipesReq} returns this
*/
proto.clientpb.NamedPipesReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.NamedPipesReq} returns this
 */
proto.clientpb.NamedPipesReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.NamedPipesReq.prototype.hasRequest = function() {
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
proto.clientpb.NamedPipes.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.NamedPipes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.NamedPipes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.NamedPipes.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    err: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.clientpb.NamedPipes}
 */
proto.clientpb.NamedPipes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.NamedPipes;
  return proto.clientpb.NamedPipes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.NamedPipes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.NamedPipes}
 */
proto.clientpb.NamedPipes.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErr(value);
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
proto.clientpb.NamedPipes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.NamedPipes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.NamedPipes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.NamedPipes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getErr();
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
 * optional bool Success = 1;
 * @return {boolean}
 */
proto.clientpb.NamedPipes.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.NamedPipes} returns this
 */
proto.clientpb.NamedPipes.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string Err = 2;
 * @return {string}
 */
proto.clientpb.NamedPipes.prototype.getErr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.NamedPipes} returns this
 */
proto.clientpb.NamedPipes.prototype.setErr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.clientpb.NamedPipes.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.clientpb.NamedPipes} returns this
*/
proto.clientpb.NamedPipes.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.NamedPipes} returns this
 */
proto.clientpb.NamedPipes.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.NamedPipes.prototype.hasResponse = function() {
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
proto.clientpb.TCPPivotReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.TCPPivotReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.TCPPivotReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.TCPPivotReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 16, ""),
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
 * @return {!proto.clientpb.TCPPivotReq}
 */
proto.clientpb.TCPPivotReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.TCPPivotReq;
  return proto.clientpb.TCPPivotReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.TCPPivotReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.TCPPivotReq}
 */
proto.clientpb.TCPPivotReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
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
proto.clientpb.TCPPivotReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.TCPPivotReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.TCPPivotReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.TCPPivotReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      16,
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
 * optional string Address = 16;
 * @return {string}
 */
proto.clientpb.TCPPivotReq.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.TCPPivotReq} returns this
 */
proto.clientpb.TCPPivotReq.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.clientpb.TCPPivotReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.clientpb.TCPPivotReq} returns this
*/
proto.clientpb.TCPPivotReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.TCPPivotReq} returns this
 */
proto.clientpb.TCPPivotReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.TCPPivotReq.prototype.hasRequest = function() {
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
proto.clientpb.TCPPivot.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.TCPPivot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.TCPPivot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.TCPPivot.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    err: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.clientpb.TCPPivot}
 */
proto.clientpb.TCPPivot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.TCPPivot;
  return proto.clientpb.TCPPivot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.TCPPivot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.TCPPivot}
 */
proto.clientpb.TCPPivot.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErr(value);
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
proto.clientpb.TCPPivot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.TCPPivot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.TCPPivot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.TCPPivot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getErr();
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
 * optional bool Success = 1;
 * @return {boolean}
 */
proto.clientpb.TCPPivot.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.TCPPivot} returns this
 */
proto.clientpb.TCPPivot.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string Err = 2;
 * @return {string}
 */
proto.clientpb.TCPPivot.prototype.getErr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.TCPPivot} returns this
 */
proto.clientpb.TCPPivot.prototype.setErr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.clientpb.TCPPivot.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.clientpb.TCPPivot} returns this
*/
proto.clientpb.TCPPivot.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.TCPPivot} returns this
 */
proto.clientpb.TCPPivot.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.TCPPivot.prototype.hasResponse = function() {
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
proto.clientpb.HTTPListener.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.HTTPListener.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.HTTPListener} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.HTTPListener.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.clientpb.HTTPListener}
 */
proto.clientpb.HTTPListener.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.HTTPListener;
  return proto.clientpb.HTTPListener.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.HTTPListener} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.HTTPListener}
 */
proto.clientpb.HTTPListener.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setJobid(value);
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
proto.clientpb.HTTPListener.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.HTTPListener.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.HTTPListener} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.HTTPListener.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 JobID = 1;
 * @return {number}
 */
proto.clientpb.HTTPListener.prototype.getJobid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.HTTPListener} returns this
 */
proto.clientpb.HTTPListener.prototype.setJobid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.Sessions.repeatedFields_ = [1];



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
proto.clientpb.Sessions.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Sessions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Sessions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Sessions.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    proto.clientpb.Session.toObject, includeInstance)
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
 * @return {!proto.clientpb.Sessions}
 */
proto.clientpb.Sessions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Sessions;
  return proto.clientpb.Sessions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Sessions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Sessions}
 */
proto.clientpb.Sessions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clientpb.Session;
      reader.readMessage(value,proto.clientpb.Session.deserializeBinaryFromReader);
      msg.addSessions(value);
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
proto.clientpb.Sessions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Sessions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Sessions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Sessions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clientpb.Session.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Session Sessions = 1;
 * @return {!Array<!proto.clientpb.Session>}
 */
proto.clientpb.Sessions.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.clientpb.Session>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.Session, 1));
};


/**
 * @param {!Array<!proto.clientpb.Session>} value
 * @return {!proto.clientpb.Sessions} returns this
*/
proto.clientpb.Sessions.prototype.setSessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clientpb.Session=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.Session}
 */
proto.clientpb.Sessions.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clientpb.Session, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Sessions} returns this
 */
proto.clientpb.Sessions.prototype.clearSessionsList = function() {
  return this.setSessionsList([]);
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
proto.clientpb.RenameReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.RenameReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.RenameReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.RenameReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    beaconid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.clientpb.RenameReq}
 */
proto.clientpb.RenameReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.RenameReq;
  return proto.clientpb.RenameReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.RenameReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.RenameReq}
 */
proto.clientpb.RenameReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBeaconid(value);
      break;
    case 3:
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
proto.clientpb.RenameReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.RenameReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.RenameReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.RenameReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBeaconid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string SessionID = 1;
 * @return {string}
 */
proto.clientpb.RenameReq.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.RenameReq} returns this
 */
proto.clientpb.RenameReq.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string BeaconID = 2;
 * @return {string}
 */
proto.clientpb.RenameReq.prototype.getBeaconid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.RenameReq} returns this
 */
proto.clientpb.RenameReq.prototype.setBeaconid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Name = 3;
 * @return {string}
 */
proto.clientpb.RenameReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.RenameReq} returns this
 */
proto.clientpb.RenameReq.prototype.setName = function(value) {
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
proto.clientpb.GenerateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.GenerateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.GenerateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.GenerateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.clientpb.ImplantConfig.toObject(includeInstance, f)
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
 * @return {!proto.clientpb.GenerateReq}
 */
proto.clientpb.GenerateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.GenerateReq;
  return proto.clientpb.GenerateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.GenerateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.GenerateReq}
 */
proto.clientpb.GenerateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clientpb.ImplantConfig;
      reader.readMessage(value,proto.clientpb.ImplantConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
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
proto.clientpb.GenerateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.GenerateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.GenerateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.GenerateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clientpb.ImplantConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional ImplantConfig Config = 1;
 * @return {?proto.clientpb.ImplantConfig}
 */
proto.clientpb.GenerateReq.prototype.getConfig = function() {
  return /** @type{?proto.clientpb.ImplantConfig} */ (
    jspb.Message.getWrapperField(this, proto.clientpb.ImplantConfig, 1));
};


/**
 * @param {?proto.clientpb.ImplantConfig|undefined} value
 * @return {!proto.clientpb.GenerateReq} returns this
*/
proto.clientpb.GenerateReq.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.GenerateReq} returns this
 */
proto.clientpb.GenerateReq.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.GenerateReq.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.clientpb.Generate.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Generate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Generate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Generate.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && commonpb_common_pb.File.toObject(includeInstance, f)
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
 * @return {!proto.clientpb.Generate}
 */
proto.clientpb.Generate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Generate;
  return proto.clientpb.Generate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Generate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Generate}
 */
proto.clientpb.Generate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new commonpb_common_pb.File;
      reader.readMessage(value,commonpb_common_pb.File.deserializeBinaryFromReader);
      msg.setFile(value);
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
proto.clientpb.Generate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Generate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Generate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Generate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      commonpb_common_pb.File.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.File File = 1;
 * @return {?proto.commonpb.File}
 */
proto.clientpb.Generate.prototype.getFile = function() {
  return /** @type{?proto.commonpb.File} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.File, 1));
};


/**
 * @param {?proto.commonpb.File|undefined} value
 * @return {!proto.clientpb.Generate} returns this
*/
proto.clientpb.Generate.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.Generate} returns this
 */
proto.clientpb.Generate.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.Generate.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.clientpb.MSFReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.MSFReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.MSFReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MSFReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lhost: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lport: jspb.Message.getFieldWithDefault(msg, 3, 0),
    encoder: jspb.Message.getFieldWithDefault(msg, 4, ""),
    iterations: jspb.Message.getFieldWithDefault(msg, 5, 0),
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
 * @return {!proto.clientpb.MSFReq}
 */
proto.clientpb.MSFReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.MSFReq;
  return proto.clientpb.MSFReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.MSFReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.MSFReq}
 */
proto.clientpb.MSFReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLhost(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLport(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoder(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIterations(value);
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
proto.clientpb.MSFReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.MSFReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.MSFReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MSFReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLhost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLport();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getEncoder();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIterations();
  if (f !== 0) {
    writer.writeInt32(
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
 * optional string Payload = 1;
 * @return {string}
 */
proto.clientpb.MSFReq.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.MSFReq} returns this
 */
proto.clientpb.MSFReq.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string LHost = 2;
 * @return {string}
 */
proto.clientpb.MSFReq.prototype.getLhost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.MSFReq} returns this
 */
proto.clientpb.MSFReq.prototype.setLhost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 LPort = 3;
 * @return {number}
 */
proto.clientpb.MSFReq.prototype.getLport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.MSFReq} returns this
 */
proto.clientpb.MSFReq.prototype.setLport = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Encoder = 4;
 * @return {string}
 */
proto.clientpb.MSFReq.prototype.getEncoder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.MSFReq} returns this
 */
proto.clientpb.MSFReq.prototype.setEncoder = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 Iterations = 5;
 * @return {number}
 */
proto.clientpb.MSFReq.prototype.getIterations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.MSFReq} returns this
 */
proto.clientpb.MSFReq.prototype.setIterations = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.clientpb.MSFReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.clientpb.MSFReq} returns this
*/
proto.clientpb.MSFReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.MSFReq} returns this
 */
proto.clientpb.MSFReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.MSFReq.prototype.hasRequest = function() {
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
proto.clientpb.MSFRemoteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.MSFRemoteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.MSFRemoteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MSFRemoteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lhost: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lport: jspb.Message.getFieldWithDefault(msg, 3, 0),
    encoder: jspb.Message.getFieldWithDefault(msg, 4, ""),
    iterations: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pid: jspb.Message.getFieldWithDefault(msg, 8, 0),
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
 * @return {!proto.clientpb.MSFRemoteReq}
 */
proto.clientpb.MSFRemoteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.MSFRemoteReq;
  return proto.clientpb.MSFRemoteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.MSFRemoteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.MSFRemoteReq}
 */
proto.clientpb.MSFRemoteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLhost(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLport(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoder(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIterations(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
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
proto.clientpb.MSFRemoteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.MSFRemoteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.MSFRemoteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MSFRemoteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLhost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLport();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getEncoder();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIterations();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
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
 * optional string Payload = 1;
 * @return {string}
 */
proto.clientpb.MSFRemoteReq.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.MSFRemoteReq} returns this
 */
proto.clientpb.MSFRemoteReq.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string LHost = 2;
 * @return {string}
 */
proto.clientpb.MSFRemoteReq.prototype.getLhost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.MSFRemoteReq} returns this
 */
proto.clientpb.MSFRemoteReq.prototype.setLhost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 LPort = 3;
 * @return {number}
 */
proto.clientpb.MSFRemoteReq.prototype.getLport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.MSFRemoteReq} returns this
 */
proto.clientpb.MSFRemoteReq.prototype.setLport = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Encoder = 4;
 * @return {string}
 */
proto.clientpb.MSFRemoteReq.prototype.getEncoder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.MSFRemoteReq} returns this
 */
proto.clientpb.MSFRemoteReq.prototype.setEncoder = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 Iterations = 5;
 * @return {number}
 */
proto.clientpb.MSFRemoteReq.prototype.getIterations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.MSFRemoteReq} returns this
 */
proto.clientpb.MSFRemoteReq.prototype.setIterations = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 PID = 8;
 * @return {number}
 */
proto.clientpb.MSFRemoteReq.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.MSFRemoteReq} returns this
 */
proto.clientpb.MSFRemoteReq.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.clientpb.MSFRemoteReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.clientpb.MSFRemoteReq} returns this
*/
proto.clientpb.MSFRemoteReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.MSFRemoteReq} returns this
 */
proto.clientpb.MSFRemoteReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.MSFRemoteReq.prototype.hasRequest = function() {
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
proto.clientpb.StagerListenerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.StagerListenerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.StagerListenerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.StagerListenerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocol: jspb.Message.getFieldWithDefault(msg, 1, 0),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0),
    data: msg.getData_asB64(),
    cert: msg.getCert_asB64(),
    key: msg.getKey_asB64(),
    acme: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.clientpb.StagerListenerReq}
 */
proto.clientpb.StagerListenerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.StagerListenerReq;
  return proto.clientpb.StagerListenerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.StagerListenerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.StagerListenerReq}
 */
proto.clientpb.StagerListenerReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.clientpb.StageProtocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCert(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAcme(value);
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
proto.clientpb.StagerListenerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.StagerListenerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.StagerListenerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.StagerListenerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getHost();
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
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getCert_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getAcme();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional StageProtocol Protocol = 1;
 * @return {!proto.clientpb.StageProtocol}
 */
proto.clientpb.StagerListenerReq.prototype.getProtocol = function() {
  return /** @type {!proto.clientpb.StageProtocol} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.clientpb.StageProtocol} value
 * @return {!proto.clientpb.StagerListenerReq} returns this
 */
proto.clientpb.StagerListenerReq.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string Host = 2;
 * @return {string}
 */
proto.clientpb.StagerListenerReq.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.StagerListenerReq} returns this
 */
proto.clientpb.StagerListenerReq.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 Port = 3;
 * @return {number}
 */
proto.clientpb.StagerListenerReq.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.StagerListenerReq} returns this
 */
proto.clientpb.StagerListenerReq.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes Data = 4;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.StagerListenerReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes Data = 4;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.clientpb.StagerListenerReq.prototype.getData_asB64 = function() {
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
proto.clientpb.StagerListenerReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.StagerListenerReq} returns this
 */
proto.clientpb.StagerListenerReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes Cert = 5;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.StagerListenerReq.prototype.getCert = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes Cert = 5;
 * This is a type-conversion wrapper around `getCert()`
 * @return {string}
 */
proto.clientpb.StagerListenerReq.prototype.getCert_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCert()));
};


/**
 * optional bytes Cert = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCert()`
 * @return {!Uint8Array}
 */
proto.clientpb.StagerListenerReq.prototype.getCert_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCert()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.StagerListenerReq} returns this
 */
proto.clientpb.StagerListenerReq.prototype.setCert = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes Key = 6;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.StagerListenerReq.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes Key = 6;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.clientpb.StagerListenerReq.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes Key = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.clientpb.StagerListenerReq.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.StagerListenerReq} returns this
 */
proto.clientpb.StagerListenerReq.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bool ACME = 7;
 * @return {boolean}
 */
proto.clientpb.StagerListenerReq.prototype.getAcme = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.StagerListenerReq} returns this
 */
proto.clientpb.StagerListenerReq.prototype.setAcme = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
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
proto.clientpb.StagerListener.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.StagerListener.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.StagerListener} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.StagerListener.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.clientpb.StagerListener}
 */
proto.clientpb.StagerListener.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.StagerListener;
  return proto.clientpb.StagerListener.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.StagerListener} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.StagerListener}
 */
proto.clientpb.StagerListener.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setJobid(value);
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
proto.clientpb.StagerListener.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.StagerListener.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.StagerListener} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.StagerListener.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 JobID = 1;
 * @return {number}
 */
proto.clientpb.StagerListener.prototype.getJobid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.StagerListener} returns this
 */
proto.clientpb.StagerListener.prototype.setJobid = function(value) {
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
proto.clientpb.ShellcodeRDIReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.ShellcodeRDIReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.ShellcodeRDIReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ShellcodeRDIReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    functionname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    arguments: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.clientpb.ShellcodeRDIReq}
 */
proto.clientpb.ShellcodeRDIReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.ShellcodeRDIReq;
  return proto.clientpb.ShellcodeRDIReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.ShellcodeRDIReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.ShellcodeRDIReq}
 */
proto.clientpb.ShellcodeRDIReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFunctionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArguments(value);
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
proto.clientpb.ShellcodeRDIReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.ShellcodeRDIReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.ShellcodeRDIReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ShellcodeRDIReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFunctionname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArguments();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.ShellcodeRDIReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.clientpb.ShellcodeRDIReq.prototype.getData_asB64 = function() {
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
proto.clientpb.ShellcodeRDIReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.ShellcodeRDIReq} returns this
 */
proto.clientpb.ShellcodeRDIReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string FunctionName = 2;
 * @return {string}
 */
proto.clientpb.ShellcodeRDIReq.prototype.getFunctionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ShellcodeRDIReq} returns this
 */
proto.clientpb.ShellcodeRDIReq.prototype.setFunctionname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Arguments = 3;
 * @return {string}
 */
proto.clientpb.ShellcodeRDIReq.prototype.getArguments = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ShellcodeRDIReq} returns this
 */
proto.clientpb.ShellcodeRDIReq.prototype.setArguments = function(value) {
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
proto.clientpb.ShellcodeRDI.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.ShellcodeRDI.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.ShellcodeRDI} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ShellcodeRDI.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
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
 * @return {!proto.clientpb.ShellcodeRDI}
 */
proto.clientpb.ShellcodeRDI.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.ShellcodeRDI;
  return proto.clientpb.ShellcodeRDI.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.ShellcodeRDI} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.ShellcodeRDI}
 */
proto.clientpb.ShellcodeRDI.deserializeBinaryFromReader = function(msg, reader) {
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
proto.clientpb.ShellcodeRDI.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.ShellcodeRDI.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.ShellcodeRDI} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ShellcodeRDI.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.ShellcodeRDI.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.clientpb.ShellcodeRDI.prototype.getData_asB64 = function() {
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
proto.clientpb.ShellcodeRDI.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.ShellcodeRDI} returns this
 */
proto.clientpb.ShellcodeRDI.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.MsfStagerReq.repeatedFields_ = [7];



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
proto.clientpb.MsfStagerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.MsfStagerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.MsfStagerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MsfStagerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    arch: jspb.Message.getFieldWithDefault(msg, 1, ""),
    format: jspb.Message.getFieldWithDefault(msg, 2, ""),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0),
    host: jspb.Message.getFieldWithDefault(msg, 4, ""),
    os: jspb.Message.getFieldWithDefault(msg, 5, ""),
    protocol: jspb.Message.getFieldWithDefault(msg, 6, 0),
    badcharsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.clientpb.MsfStagerReq}
 */
proto.clientpb.MsfStagerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.MsfStagerReq;
  return proto.clientpb.MsfStagerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.MsfStagerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.MsfStagerReq}
 */
proto.clientpb.MsfStagerReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setArch(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOs(value);
      break;
    case 6:
      var value = /** @type {!proto.clientpb.StageProtocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addBadchars(value);
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
proto.clientpb.MsfStagerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.MsfStagerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.MsfStagerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MsfStagerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArch();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormat();
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
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOs();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getBadcharsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional string Arch = 1;
 * @return {string}
 */
proto.clientpb.MsfStagerReq.prototype.getArch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.MsfStagerReq} returns this
 */
proto.clientpb.MsfStagerReq.prototype.setArch = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Format = 2;
 * @return {string}
 */
proto.clientpb.MsfStagerReq.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.MsfStagerReq} returns this
 */
proto.clientpb.MsfStagerReq.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 Port = 3;
 * @return {number}
 */
proto.clientpb.MsfStagerReq.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.MsfStagerReq} returns this
 */
proto.clientpb.MsfStagerReq.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Host = 4;
 * @return {string}
 */
proto.clientpb.MsfStagerReq.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.MsfStagerReq} returns this
 */
proto.clientpb.MsfStagerReq.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string OS = 5;
 * @return {string}
 */
proto.clientpb.MsfStagerReq.prototype.getOs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.MsfStagerReq} returns this
 */
proto.clientpb.MsfStagerReq.prototype.setOs = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional StageProtocol Protocol = 6;
 * @return {!proto.clientpb.StageProtocol}
 */
proto.clientpb.MsfStagerReq.prototype.getProtocol = function() {
  return /** @type {!proto.clientpb.StageProtocol} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.clientpb.StageProtocol} value
 * @return {!proto.clientpb.MsfStagerReq} returns this
 */
proto.clientpb.MsfStagerReq.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated string BadChars = 7;
 * @return {!Array<string>}
 */
proto.clientpb.MsfStagerReq.prototype.getBadcharsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clientpb.MsfStagerReq} returns this
 */
proto.clientpb.MsfStagerReq.prototype.setBadcharsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clientpb.MsfStagerReq} returns this
 */
proto.clientpb.MsfStagerReq.prototype.addBadchars = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.MsfStagerReq} returns this
 */
proto.clientpb.MsfStagerReq.prototype.clearBadcharsList = function() {
  return this.setBadcharsList([]);
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
proto.clientpb.MsfStager.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.MsfStager.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.MsfStager} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MsfStager.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && commonpb_common_pb.File.toObject(includeInstance, f)
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
 * @return {!proto.clientpb.MsfStager}
 */
proto.clientpb.MsfStager.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.MsfStager;
  return proto.clientpb.MsfStager.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.MsfStager} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.MsfStager}
 */
proto.clientpb.MsfStager.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new commonpb_common_pb.File;
      reader.readMessage(value,commonpb_common_pb.File.deserializeBinaryFromReader);
      msg.setFile(value);
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
proto.clientpb.MsfStager.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.MsfStager.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.MsfStager} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MsfStager.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      commonpb_common_pb.File.serializeBinaryToWriter
    );
  }
};


/**
 * optional commonpb.File File = 1;
 * @return {?proto.commonpb.File}
 */
proto.clientpb.MsfStager.prototype.getFile = function() {
  return /** @type{?proto.commonpb.File} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.File, 1));
};


/**
 * @param {?proto.commonpb.File|undefined} value
 * @return {!proto.clientpb.MsfStager} returns this
*/
proto.clientpb.MsfStager.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.MsfStager} returns this
 */
proto.clientpb.MsfStager.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.MsfStager.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.clientpb.GetSystemReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.GetSystemReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.GetSystemReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.GetSystemReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostingprocess: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.clientpb.ImplantConfig.toObject(includeInstance, f),
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
 * @return {!proto.clientpb.GetSystemReq}
 */
proto.clientpb.GetSystemReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.GetSystemReq;
  return proto.clientpb.GetSystemReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.GetSystemReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.GetSystemReq}
 */
proto.clientpb.GetSystemReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostingprocess(value);
      break;
    case 2:
      var value = new proto.clientpb.ImplantConfig;
      reader.readMessage(value,proto.clientpb.ImplantConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
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
proto.clientpb.GetSystemReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.GetSystemReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.GetSystemReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.GetSystemReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostingprocess();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clientpb.ImplantConfig.serializeBinaryToWriter
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
 * optional string HostingProcess = 1;
 * @return {string}
 */
proto.clientpb.GetSystemReq.prototype.getHostingprocess = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.GetSystemReq} returns this
 */
proto.clientpb.GetSystemReq.prototype.setHostingprocess = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ImplantConfig Config = 2;
 * @return {?proto.clientpb.ImplantConfig}
 */
proto.clientpb.GetSystemReq.prototype.getConfig = function() {
  return /** @type{?proto.clientpb.ImplantConfig} */ (
    jspb.Message.getWrapperField(this, proto.clientpb.ImplantConfig, 2));
};


/**
 * @param {?proto.clientpb.ImplantConfig|undefined} value
 * @return {!proto.clientpb.GetSystemReq} returns this
*/
proto.clientpb.GetSystemReq.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.GetSystemReq} returns this
 */
proto.clientpb.GetSystemReq.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.GetSystemReq.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.clientpb.GetSystemReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.clientpb.GetSystemReq} returns this
*/
proto.clientpb.GetSystemReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.GetSystemReq} returns this
 */
proto.clientpb.GetSystemReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.GetSystemReq.prototype.hasRequest = function() {
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
proto.clientpb.MigrateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.MigrateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.MigrateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MigrateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    config: (f = msg.getConfig()) && proto.clientpb.ImplantConfig.toObject(includeInstance, f),
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
 * @return {!proto.clientpb.MigrateReq}
 */
proto.clientpb.MigrateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.MigrateReq;
  return proto.clientpb.MigrateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.MigrateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.MigrateReq}
 */
proto.clientpb.MigrateReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.clientpb.ImplantConfig;
      reader.readMessage(value,proto.clientpb.ImplantConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
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
proto.clientpb.MigrateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.MigrateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.MigrateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.MigrateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clientpb.ImplantConfig.serializeBinaryToWriter
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
proto.clientpb.MigrateReq.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.MigrateReq} returns this
 */
proto.clientpb.MigrateReq.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ImplantConfig Config = 2;
 * @return {?proto.clientpb.ImplantConfig}
 */
proto.clientpb.MigrateReq.prototype.getConfig = function() {
  return /** @type{?proto.clientpb.ImplantConfig} */ (
    jspb.Message.getWrapperField(this, proto.clientpb.ImplantConfig, 2));
};


/**
 * @param {?proto.clientpb.ImplantConfig|undefined} value
 * @return {!proto.clientpb.MigrateReq} returns this
*/
proto.clientpb.MigrateReq.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.MigrateReq} returns this
 */
proto.clientpb.MigrateReq.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.MigrateReq.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.clientpb.MigrateReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.clientpb.MigrateReq} returns this
*/
proto.clientpb.MigrateReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.MigrateReq} returns this
 */
proto.clientpb.MigrateReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.MigrateReq.prototype.hasRequest = function() {
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
proto.clientpb.CreateTunnelReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.CreateTunnelReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.CreateTunnelReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.CreateTunnelReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.clientpb.CreateTunnelReq}
 */
proto.clientpb.CreateTunnelReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.CreateTunnelReq;
  return proto.clientpb.CreateTunnelReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.CreateTunnelReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.CreateTunnelReq}
 */
proto.clientpb.CreateTunnelReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.clientpb.CreateTunnelReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.CreateTunnelReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.CreateTunnelReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.CreateTunnelReq.serializeBinaryToWriter = function(message, writer) {
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
proto.clientpb.CreateTunnelReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.clientpb.CreateTunnelReq} returns this
*/
proto.clientpb.CreateTunnelReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.CreateTunnelReq} returns this
 */
proto.clientpb.CreateTunnelReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.CreateTunnelReq.prototype.hasRequest = function() {
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
proto.clientpb.CreateTunnel.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.CreateTunnel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.CreateTunnel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.CreateTunnel.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tunnelid: jspb.Message.getFieldWithDefault(msg, 8, "0")
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
 * @return {!proto.clientpb.CreateTunnel}
 */
proto.clientpb.CreateTunnel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.CreateTunnel;
  return proto.clientpb.CreateTunnel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.CreateTunnel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.CreateTunnel}
 */
proto.clientpb.CreateTunnel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSessionid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTunnelid(value);
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
proto.clientpb.CreateTunnel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.CreateTunnel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.CreateTunnel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.CreateTunnel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f !== 0) {
    writer.writeUint32(
      1,
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
};


/**
 * optional uint32 SessionID = 1;
 * @return {number}
 */
proto.clientpb.CreateTunnel.prototype.getSessionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.CreateTunnel} returns this
 */
proto.clientpb.CreateTunnel.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 TunnelID = 8;
 * @return {string}
 */
proto.clientpb.CreateTunnel.prototype.getTunnelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.CreateTunnel} returns this
 */
proto.clientpb.CreateTunnel.prototype.setTunnelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
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
proto.clientpb.CloseTunnelReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.CloseTunnelReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.CloseTunnelReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.CloseTunnelReq.toObject = function(includeInstance, msg) {
  var f, obj = {
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
 * @return {!proto.clientpb.CloseTunnelReq}
 */
proto.clientpb.CloseTunnelReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.CloseTunnelReq;
  return proto.clientpb.CloseTunnelReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.CloseTunnelReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.CloseTunnelReq}
 */
proto.clientpb.CloseTunnelReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.clientpb.CloseTunnelReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.CloseTunnelReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.CloseTunnelReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.CloseTunnelReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
 * optional uint64 TunnelID = 8;
 * @return {string}
 */
proto.clientpb.CloseTunnelReq.prototype.getTunnelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.CloseTunnelReq} returns this
 */
proto.clientpb.CloseTunnelReq.prototype.setTunnelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.clientpb.CloseTunnelReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.clientpb.CloseTunnelReq} returns this
*/
proto.clientpb.CloseTunnelReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.CloseTunnelReq} returns this
 */
proto.clientpb.CloseTunnelReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.CloseTunnelReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.PivotGraphEntry.repeatedFields_ = [4];



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
proto.clientpb.PivotGraphEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.PivotGraphEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.PivotGraphEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.PivotGraphEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    session: (f = msg.getSession()) && proto.clientpb.Session.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.clientpb.PivotGraphEntry.toObject, includeInstance)
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
 * @return {!proto.clientpb.PivotGraphEntry}
 */
proto.clientpb.PivotGraphEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.PivotGraphEntry;
  return proto.clientpb.PivotGraphEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.PivotGraphEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.PivotGraphEntry}
 */
proto.clientpb.PivotGraphEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPeerid(value);
      break;
    case 2:
      var value = new proto.clientpb.Session;
      reader.readMessage(value,proto.clientpb.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.clientpb.PivotGraphEntry;
      reader.readMessage(value,proto.clientpb.PivotGraphEntry.deserializeBinaryFromReader);
      msg.addChildren(value);
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
proto.clientpb.PivotGraphEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.PivotGraphEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.PivotGraphEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.PivotGraphEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clientpb.Session.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.clientpb.PivotGraphEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 PeerID = 1;
 * @return {number}
 */
proto.clientpb.PivotGraphEntry.prototype.getPeerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.PivotGraphEntry} returns this
 */
proto.clientpb.PivotGraphEntry.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Session Session = 2;
 * @return {?proto.clientpb.Session}
 */
proto.clientpb.PivotGraphEntry.prototype.getSession = function() {
  return /** @type{?proto.clientpb.Session} */ (
    jspb.Message.getWrapperField(this, proto.clientpb.Session, 2));
};


/**
 * @param {?proto.clientpb.Session|undefined} value
 * @return {!proto.clientpb.PivotGraphEntry} returns this
*/
proto.clientpb.PivotGraphEntry.prototype.setSession = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.PivotGraphEntry} returns this
 */
proto.clientpb.PivotGraphEntry.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.PivotGraphEntry.prototype.hasSession = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string Name = 3;
 * @return {string}
 */
proto.clientpb.PivotGraphEntry.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.PivotGraphEntry} returns this
 */
proto.clientpb.PivotGraphEntry.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated PivotGraphEntry Children = 4;
 * @return {!Array<!proto.clientpb.PivotGraphEntry>}
 */
proto.clientpb.PivotGraphEntry.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.clientpb.PivotGraphEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.PivotGraphEntry, 4));
};


/**
 * @param {!Array<!proto.clientpb.PivotGraphEntry>} value
 * @return {!proto.clientpb.PivotGraphEntry} returns this
*/
proto.clientpb.PivotGraphEntry.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.clientpb.PivotGraphEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.PivotGraphEntry}
 */
proto.clientpb.PivotGraphEntry.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.clientpb.PivotGraphEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.PivotGraphEntry} returns this
 */
proto.clientpb.PivotGraphEntry.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.PivotGraph.repeatedFields_ = [1];



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
proto.clientpb.PivotGraph.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.PivotGraph.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.PivotGraph} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.PivotGraph.toObject = function(includeInstance, msg) {
  var f, obj = {
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.clientpb.PivotGraphEntry.toObject, includeInstance)
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
 * @return {!proto.clientpb.PivotGraph}
 */
proto.clientpb.PivotGraph.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.PivotGraph;
  return proto.clientpb.PivotGraph.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.PivotGraph} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.PivotGraph}
 */
proto.clientpb.PivotGraph.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clientpb.PivotGraphEntry;
      reader.readMessage(value,proto.clientpb.PivotGraphEntry.deserializeBinaryFromReader);
      msg.addChildren(value);
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
proto.clientpb.PivotGraph.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.PivotGraph.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.PivotGraph} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.PivotGraph.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clientpb.PivotGraphEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PivotGraphEntry Children = 1;
 * @return {!Array<!proto.clientpb.PivotGraphEntry>}
 */
proto.clientpb.PivotGraph.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.clientpb.PivotGraphEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.PivotGraphEntry, 1));
};


/**
 * @param {!Array<!proto.clientpb.PivotGraphEntry>} value
 * @return {!proto.clientpb.PivotGraph} returns this
*/
proto.clientpb.PivotGraph.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clientpb.PivotGraphEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.PivotGraphEntry}
 */
proto.clientpb.PivotGraph.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clientpb.PivotGraphEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.PivotGraph} returns this
 */
proto.clientpb.PivotGraph.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
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
proto.clientpb.Client.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Client.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Client} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Client.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    operator: (f = msg.getOperator()) && proto.clientpb.Operator.toObject(includeInstance, f)
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
 * @return {!proto.clientpb.Client}
 */
proto.clientpb.Client.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Client;
  return proto.clientpb.Client.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Client} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Client}
 */
proto.clientpb.Client.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.clientpb.Operator;
      reader.readMessage(value,proto.clientpb.Operator.deserializeBinaryFromReader);
      msg.setOperator(value);
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
proto.clientpb.Client.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Client.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Client} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Client.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getOperator();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clientpb.Operator.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 ID = 1;
 * @return {number}
 */
proto.clientpb.Client.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.Client} returns this
 */
proto.clientpb.Client.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.clientpb.Client.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Client} returns this
 */
proto.clientpb.Client.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Operator Operator = 3;
 * @return {?proto.clientpb.Operator}
 */
proto.clientpb.Client.prototype.getOperator = function() {
  return /** @type{?proto.clientpb.Operator} */ (
    jspb.Message.getWrapperField(this, proto.clientpb.Operator, 3));
};


/**
 * @param {?proto.clientpb.Operator|undefined} value
 * @return {!proto.clientpb.Client} returns this
*/
proto.clientpb.Client.prototype.setOperator = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.Client} returns this
 */
proto.clientpb.Client.prototype.clearOperator = function() {
  return this.setOperator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.Client.prototype.hasOperator = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.clientpb.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtype: jspb.Message.getFieldWithDefault(msg, 1, ""),
    session: (f = msg.getSession()) && proto.clientpb.Session.toObject(includeInstance, f),
    job: (f = msg.getJob()) && proto.clientpb.Job.toObject(includeInstance, f),
    client: (f = msg.getClient()) && proto.clientpb.Client.toObject(includeInstance, f),
    data: msg.getData_asB64(),
    err: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.clientpb.Event}
 */
proto.clientpb.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Event;
  return proto.clientpb.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Event}
 */
proto.clientpb.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventtype(value);
      break;
    case 2:
      var value = new proto.clientpb.Session;
      reader.readMessage(value,proto.clientpb.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 3:
      var value = new proto.clientpb.Job;
      reader.readMessage(value,proto.clientpb.Job.deserializeBinaryFromReader);
      msg.setJob(value);
      break;
    case 4:
      var value = new proto.clientpb.Client;
      reader.readMessage(value,proto.clientpb.Client.deserializeBinaryFromReader);
      msg.setClient(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 6:
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
proto.clientpb.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtype();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clientpb.Session.serializeBinaryToWriter
    );
  }
  f = message.getJob();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clientpb.Job.serializeBinaryToWriter
    );
  }
  f = message.getClient();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clientpb.Client.serializeBinaryToWriter
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getErr();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string EventType = 1;
 * @return {string}
 */
proto.clientpb.Event.prototype.getEventtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Event} returns this
 */
proto.clientpb.Event.prototype.setEventtype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Session Session = 2;
 * @return {?proto.clientpb.Session}
 */
proto.clientpb.Event.prototype.getSession = function() {
  return /** @type{?proto.clientpb.Session} */ (
    jspb.Message.getWrapperField(this, proto.clientpb.Session, 2));
};


/**
 * @param {?proto.clientpb.Session|undefined} value
 * @return {!proto.clientpb.Event} returns this
*/
proto.clientpb.Event.prototype.setSession = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.Event} returns this
 */
proto.clientpb.Event.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.Event.prototype.hasSession = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Job Job = 3;
 * @return {?proto.clientpb.Job}
 */
proto.clientpb.Event.prototype.getJob = function() {
  return /** @type{?proto.clientpb.Job} */ (
    jspb.Message.getWrapperField(this, proto.clientpb.Job, 3));
};


/**
 * @param {?proto.clientpb.Job|undefined} value
 * @return {!proto.clientpb.Event} returns this
*/
proto.clientpb.Event.prototype.setJob = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.Event} returns this
 */
proto.clientpb.Event.prototype.clearJob = function() {
  return this.setJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.Event.prototype.hasJob = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Client Client = 4;
 * @return {?proto.clientpb.Client}
 */
proto.clientpb.Event.prototype.getClient = function() {
  return /** @type{?proto.clientpb.Client} */ (
    jspb.Message.getWrapperField(this, proto.clientpb.Client, 4));
};


/**
 * @param {?proto.clientpb.Client|undefined} value
 * @return {!proto.clientpb.Event} returns this
*/
proto.clientpb.Event.prototype.setClient = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.Event} returns this
 */
proto.clientpb.Event.prototype.clearClient = function() {
  return this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.Event.prototype.hasClient = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes Data = 5;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.Event.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes Data = 5;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.clientpb.Event.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.clientpb.Event.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.Event} returns this
 */
proto.clientpb.Event.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional string Err = 6;
 * @return {string}
 */
proto.clientpb.Event.prototype.getErr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Event} returns this
 */
proto.clientpb.Event.prototype.setErr = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.Operators.repeatedFields_ = [1];



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
proto.clientpb.Operators.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Operators.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Operators} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Operators.toObject = function(includeInstance, msg) {
  var f, obj = {
    operatorsList: jspb.Message.toObjectList(msg.getOperatorsList(),
    proto.clientpb.Operator.toObject, includeInstance)
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
 * @return {!proto.clientpb.Operators}
 */
proto.clientpb.Operators.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Operators;
  return proto.clientpb.Operators.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Operators} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Operators}
 */
proto.clientpb.Operators.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clientpb.Operator;
      reader.readMessage(value,proto.clientpb.Operator.deserializeBinaryFromReader);
      msg.addOperators(value);
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
proto.clientpb.Operators.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Operators.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Operators} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Operators.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clientpb.Operator.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Operator Operators = 1;
 * @return {!Array<!proto.clientpb.Operator>}
 */
proto.clientpb.Operators.prototype.getOperatorsList = function() {
  return /** @type{!Array<!proto.clientpb.Operator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.Operator, 1));
};


/**
 * @param {!Array<!proto.clientpb.Operator>} value
 * @return {!proto.clientpb.Operators} returns this
*/
proto.clientpb.Operators.prototype.setOperatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clientpb.Operator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.Operator}
 */
proto.clientpb.Operators.prototype.addOperators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clientpb.Operator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Operators} returns this
 */
proto.clientpb.Operators.prototype.clearOperatorsList = function() {
  return this.setOperatorsList([]);
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
proto.clientpb.Operator.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Operator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Operator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Operator.toObject = function(includeInstance, msg) {
  var f, obj = {
    online: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
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
 * @return {!proto.clientpb.Operator}
 */
proto.clientpb.Operator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Operator;
  return proto.clientpb.Operator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Operator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Operator}
 */
proto.clientpb.Operator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnline(value);
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
proto.clientpb.Operator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Operator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Operator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Operator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOnline();
  if (f) {
    writer.writeBool(
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
 * optional bool Online = 1;
 * @return {boolean}
 */
proto.clientpb.Operator.prototype.getOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clientpb.Operator} returns this
 */
proto.clientpb.Operator.prototype.setOnline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.clientpb.Operator.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Operator} returns this
 */
proto.clientpb.Operator.prototype.setName = function(value) {
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
proto.clientpb.WebContent.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.WebContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.WebContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WebContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contenttype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    size: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    content: msg.getContent_asB64()
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
 * @return {!proto.clientpb.WebContent}
 */
proto.clientpb.WebContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.WebContent;
  return proto.clientpb.WebContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.WebContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.WebContent}
 */
proto.clientpb.WebContent.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setContenttype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setSize(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
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
proto.clientpb.WebContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.WebContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.WebContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WebContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContenttype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.clientpb.WebContent.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.WebContent} returns this
 */
proto.clientpb.WebContent.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ContentType = 2;
 * @return {string}
 */
proto.clientpb.WebContent.prototype.getContenttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.WebContent} returns this
 */
proto.clientpb.WebContent.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 Size = 3;
 * @return {string}
 */
proto.clientpb.WebContent.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.WebContent} returns this
 */
proto.clientpb.WebContent.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional bytes Content = 9;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.WebContent.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes Content = 9;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.clientpb.WebContent.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes Content = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.clientpb.WebContent.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.WebContent} returns this
 */
proto.clientpb.WebContent.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
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
proto.clientpb.WebsiteAddContent.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.WebsiteAddContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.WebsiteAddContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WebsiteAddContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contentsMap: (f = msg.getContentsMap()) ? f.toObject(includeInstance, proto.clientpb.WebContent.toObject) : []
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
 * @return {!proto.clientpb.WebsiteAddContent}
 */
proto.clientpb.WebsiteAddContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.WebsiteAddContent;
  return proto.clientpb.WebsiteAddContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.WebsiteAddContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.WebsiteAddContent}
 */
proto.clientpb.WebsiteAddContent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getContentsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.clientpb.WebContent.deserializeBinaryFromReader, "", new proto.clientpb.WebContent());
         });
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
proto.clientpb.WebsiteAddContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.WebsiteAddContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.WebsiteAddContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WebsiteAddContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContentsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.clientpb.WebContent.serializeBinaryToWriter);
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.clientpb.WebsiteAddContent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.WebsiteAddContent} returns this
 */
proto.clientpb.WebsiteAddContent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, WebContent> Contents = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.clientpb.WebContent>}
 */
proto.clientpb.WebsiteAddContent.prototype.getContentsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.clientpb.WebContent>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.clientpb.WebContent));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.clientpb.WebsiteAddContent} returns this
 */
proto.clientpb.WebsiteAddContent.prototype.clearContentsMap = function() {
  this.getContentsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.WebsiteRemoveContent.repeatedFields_ = [2];



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
proto.clientpb.WebsiteRemoveContent.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.WebsiteRemoveContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.WebsiteRemoveContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WebsiteRemoveContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pathsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.clientpb.WebsiteRemoveContent}
 */
proto.clientpb.WebsiteRemoveContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.WebsiteRemoveContent;
  return proto.clientpb.WebsiteRemoveContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.WebsiteRemoveContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.WebsiteRemoveContent}
 */
proto.clientpb.WebsiteRemoveContent.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addPaths(value);
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
proto.clientpb.WebsiteRemoveContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.WebsiteRemoveContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.WebsiteRemoveContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WebsiteRemoveContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.clientpb.WebsiteRemoveContent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.WebsiteRemoveContent} returns this
 */
proto.clientpb.WebsiteRemoveContent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string Paths = 2;
 * @return {!Array<string>}
 */
proto.clientpb.WebsiteRemoveContent.prototype.getPathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clientpb.WebsiteRemoveContent} returns this
 */
proto.clientpb.WebsiteRemoveContent.prototype.setPathsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clientpb.WebsiteRemoveContent} returns this
 */
proto.clientpb.WebsiteRemoveContent.prototype.addPaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.WebsiteRemoveContent} returns this
 */
proto.clientpb.WebsiteRemoveContent.prototype.clearPathsList = function() {
  return this.setPathsList([]);
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
proto.clientpb.Website.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Website.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Website} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Website.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contentsMap: (f = msg.getContentsMap()) ? f.toObject(includeInstance, proto.clientpb.WebContent.toObject) : []
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
 * @return {!proto.clientpb.Website}
 */
proto.clientpb.Website.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Website;
  return proto.clientpb.Website.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Website} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Website}
 */
proto.clientpb.Website.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getContentsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.clientpb.WebContent.deserializeBinaryFromReader, "", new proto.clientpb.WebContent());
         });
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
proto.clientpb.Website.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Website.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Website} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Website.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContentsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.clientpb.WebContent.serializeBinaryToWriter);
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.clientpb.Website.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Website} returns this
 */
proto.clientpb.Website.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, WebContent> Contents = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.clientpb.WebContent>}
 */
proto.clientpb.Website.prototype.getContentsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.clientpb.WebContent>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.clientpb.WebContent));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.clientpb.Website} returns this
 */
proto.clientpb.Website.prototype.clearContentsMap = function() {
  this.getContentsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.Websites.repeatedFields_ = [1];



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
proto.clientpb.Websites.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Websites.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Websites} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Websites.toObject = function(includeInstance, msg) {
  var f, obj = {
    websitesList: jspb.Message.toObjectList(msg.getWebsitesList(),
    proto.clientpb.Website.toObject, includeInstance)
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
 * @return {!proto.clientpb.Websites}
 */
proto.clientpb.Websites.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Websites;
  return proto.clientpb.Websites.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Websites} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Websites}
 */
proto.clientpb.Websites.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clientpb.Website;
      reader.readMessage(value,proto.clientpb.Website.deserializeBinaryFromReader);
      msg.addWebsites(value);
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
proto.clientpb.Websites.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Websites.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Websites} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Websites.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebsitesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clientpb.Website.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Website Websites = 1;
 * @return {!Array<!proto.clientpb.Website>}
 */
proto.clientpb.Websites.prototype.getWebsitesList = function() {
  return /** @type{!Array<!proto.clientpb.Website>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.Website, 1));
};


/**
 * @param {!Array<!proto.clientpb.Website>} value
 * @return {!proto.clientpb.Websites} returns this
*/
proto.clientpb.Websites.prototype.setWebsitesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clientpb.Website=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.Website}
 */
proto.clientpb.Websites.prototype.addWebsites = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clientpb.Website, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Websites} returns this
 */
proto.clientpb.Websites.prototype.clearWebsitesList = function() {
  return this.setWebsitesList([]);
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
proto.clientpb.WGClientConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.WGClientConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.WGClientConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WGClientConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverpubkey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientprivatekey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientpubkey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientip: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.clientpb.WGClientConfig}
 */
proto.clientpb.WGClientConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.WGClientConfig;
  return proto.clientpb.WGClientConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.WGClientConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.WGClientConfig}
 */
proto.clientpb.WGClientConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerpubkey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientprivatekey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientpubkey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientip(value);
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
proto.clientpb.WGClientConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.WGClientConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.WGClientConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.WGClientConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerpubkey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientprivatekey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientpubkey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientip();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string ServerPubKey = 1;
 * @return {string}
 */
proto.clientpb.WGClientConfig.prototype.getServerpubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.WGClientConfig} returns this
 */
proto.clientpb.WGClientConfig.prototype.setServerpubkey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ClientPrivateKey = 2;
 * @return {string}
 */
proto.clientpb.WGClientConfig.prototype.getClientprivatekey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.WGClientConfig} returns this
 */
proto.clientpb.WGClientConfig.prototype.setClientprivatekey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ClientPubKey = 3;
 * @return {string}
 */
proto.clientpb.WGClientConfig.prototype.getClientpubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.WGClientConfig} returns this
 */
proto.clientpb.WGClientConfig.prototype.setClientpubkey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ClientIP = 4;
 * @return {string}
 */
proto.clientpb.WGClientConfig.prototype.getClientip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.WGClientConfig} returns this
 */
proto.clientpb.WGClientConfig.prototype.setClientip = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.clientpb.Credential.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Credential.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Credential} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Credential.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
    apikey: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.clientpb.Credential}
 */
proto.clientpb.Credential.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Credential;
  return proto.clientpb.Credential.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Credential} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Credential}
 */
proto.clientpb.Credential.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setApikey(value);
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
proto.clientpb.Credential.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Credential.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Credential} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Credential.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApikey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string User = 2;
 * @return {string}
 */
proto.clientpb.Credential.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Credential} returns this
 */
proto.clientpb.Credential.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Password = 3;
 * @return {string}
 */
proto.clientpb.Credential.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Credential} returns this
 */
proto.clientpb.Credential.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string APIKey = 4;
 * @return {string}
 */
proto.clientpb.Credential.prototype.getApikey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Credential} returns this
 */
proto.clientpb.Credential.prototype.setApikey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.clientpb.Loot.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Loot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Loot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Loot.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lootid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    credentialtype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    credential: (f = msg.getCredential()) && proto.clientpb.Credential.toObject(includeInstance, f),
    filetype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    file: (f = msg.getFile()) && commonpb_common_pb.File.toObject(includeInstance, f)
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
 * @return {!proto.clientpb.Loot}
 */
proto.clientpb.Loot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Loot;
  return proto.clientpb.Loot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Loot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Loot}
 */
proto.clientpb.Loot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.clientpb.LootType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLootid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {!proto.clientpb.CredentialType} */ (reader.readEnum());
      msg.setCredentialtype(value);
      break;
    case 5:
      var value = new proto.clientpb.Credential;
      reader.readMessage(value,proto.clientpb.Credential.deserializeBinaryFromReader);
      msg.setCredential(value);
      break;
    case 6:
      var value = /** @type {!proto.clientpb.FileType} */ (reader.readEnum());
      msg.setFiletype(value);
      break;
    case 9:
      var value = new commonpb_common_pb.File;
      reader.readMessage(value,commonpb_common_pb.File.deserializeBinaryFromReader);
      msg.setFile(value);
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
proto.clientpb.Loot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Loot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Loot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Loot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLootid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCredentialtype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCredential();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.clientpb.Credential.serializeBinaryToWriter
    );
  }
  f = message.getFiletype();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      commonpb_common_pb.File.serializeBinaryToWriter
    );
  }
};


/**
 * optional LootType Type = 1;
 * @return {!proto.clientpb.LootType}
 */
proto.clientpb.Loot.prototype.getType = function() {
  return /** @type {!proto.clientpb.LootType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.clientpb.LootType} value
 * @return {!proto.clientpb.Loot} returns this
 */
proto.clientpb.Loot.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string LootID = 2;
 * @return {string}
 */
proto.clientpb.Loot.prototype.getLootid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Loot} returns this
 */
proto.clientpb.Loot.prototype.setLootid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Name = 3;
 * @return {string}
 */
proto.clientpb.Loot.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Loot} returns this
 */
proto.clientpb.Loot.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CredentialType CredentialType = 4;
 * @return {!proto.clientpb.CredentialType}
 */
proto.clientpb.Loot.prototype.getCredentialtype = function() {
  return /** @type {!proto.clientpb.CredentialType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.clientpb.CredentialType} value
 * @return {!proto.clientpb.Loot} returns this
 */
proto.clientpb.Loot.prototype.setCredentialtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Credential Credential = 5;
 * @return {?proto.clientpb.Credential}
 */
proto.clientpb.Loot.prototype.getCredential = function() {
  return /** @type{?proto.clientpb.Credential} */ (
    jspb.Message.getWrapperField(this, proto.clientpb.Credential, 5));
};


/**
 * @param {?proto.clientpb.Credential|undefined} value
 * @return {!proto.clientpb.Loot} returns this
*/
proto.clientpb.Loot.prototype.setCredential = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.Loot} returns this
 */
proto.clientpb.Loot.prototype.clearCredential = function() {
  return this.setCredential(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.Loot.prototype.hasCredential = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional FileType FileType = 6;
 * @return {!proto.clientpb.FileType}
 */
proto.clientpb.Loot.prototype.getFiletype = function() {
  return /** @type {!proto.clientpb.FileType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.clientpb.FileType} value
 * @return {!proto.clientpb.Loot} returns this
 */
proto.clientpb.Loot.prototype.setFiletype = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional commonpb.File File = 9;
 * @return {?proto.commonpb.File}
 */
proto.clientpb.Loot.prototype.getFile = function() {
  return /** @type{?proto.commonpb.File} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.File, 9));
};


/**
 * @param {?proto.commonpb.File|undefined} value
 * @return {!proto.clientpb.Loot} returns this
*/
proto.clientpb.Loot.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.Loot} returns this
 */
proto.clientpb.Loot.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.Loot.prototype.hasFile = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.AllLoot.repeatedFields_ = [1];



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
proto.clientpb.AllLoot.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.AllLoot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.AllLoot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.AllLoot.toObject = function(includeInstance, msg) {
  var f, obj = {
    lootList: jspb.Message.toObjectList(msg.getLootList(),
    proto.clientpb.Loot.toObject, includeInstance)
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
 * @return {!proto.clientpb.AllLoot}
 */
proto.clientpb.AllLoot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.AllLoot;
  return proto.clientpb.AllLoot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.AllLoot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.AllLoot}
 */
proto.clientpb.AllLoot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clientpb.Loot;
      reader.readMessage(value,proto.clientpb.Loot.deserializeBinaryFromReader);
      msg.addLoot(value);
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
proto.clientpb.AllLoot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.AllLoot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.AllLoot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.AllLoot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLootList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clientpb.Loot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Loot Loot = 1;
 * @return {!Array<!proto.clientpb.Loot>}
 */
proto.clientpb.AllLoot.prototype.getLootList = function() {
  return /** @type{!Array<!proto.clientpb.Loot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.Loot, 1));
};


/**
 * @param {!Array<!proto.clientpb.Loot>} value
 * @return {!proto.clientpb.AllLoot} returns this
*/
proto.clientpb.AllLoot.prototype.setLootList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clientpb.Loot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.Loot}
 */
proto.clientpb.AllLoot.prototype.addLoot = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clientpb.Loot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.AllLoot} returns this
 */
proto.clientpb.AllLoot.prototype.clearLootList = function() {
  return this.setLootList([]);
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
proto.clientpb.IOC.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.IOC.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.IOC} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.IOC.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filehash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.clientpb.IOC}
 */
proto.clientpb.IOC.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.IOC;
  return proto.clientpb.IOC.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.IOC} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.IOC}
 */
proto.clientpb.IOC.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFilehash(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.clientpb.IOC.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.IOC.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.IOC} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.IOC.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilehash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string Path = 1;
 * @return {string}
 */
proto.clientpb.IOC.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.IOC} returns this
 */
proto.clientpb.IOC.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string FileHash = 2;
 * @return {string}
 */
proto.clientpb.IOC.prototype.getFilehash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.IOC} returns this
 */
proto.clientpb.IOC.prototype.setFilehash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ID = 3;
 * @return {string}
 */
proto.clientpb.IOC.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.IOC} returns this
 */
proto.clientpb.IOC.prototype.setId = function(value) {
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
proto.clientpb.ExtensionData.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.ExtensionData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.ExtensionData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ExtensionData.toObject = function(includeInstance, msg) {
  var f, obj = {
    output: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.clientpb.ExtensionData}
 */
proto.clientpb.ExtensionData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.ExtensionData;
  return proto.clientpb.ExtensionData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.ExtensionData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.ExtensionData}
 */
proto.clientpb.ExtensionData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.clientpb.ExtensionData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.ExtensionData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.ExtensionData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ExtensionData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutput();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Output = 1;
 * @return {string}
 */
proto.clientpb.ExtensionData.prototype.getOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ExtensionData} returns this
 */
proto.clientpb.ExtensionData.prototype.setOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.Host.repeatedFields_ = [4];



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
proto.clientpb.Host.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.Host.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.Host} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Host.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostuuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    osversion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    iocsList: jspb.Message.toObjectList(msg.getIocsList(),
    proto.clientpb.IOC.toObject, includeInstance),
    extensiondataMap: (f = msg.getExtensiondataMap()) ? f.toObject(includeInstance, proto.clientpb.ExtensionData.toObject) : []
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
 * @return {!proto.clientpb.Host}
 */
proto.clientpb.Host.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.Host;
  return proto.clientpb.Host.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.Host} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.Host}
 */
proto.clientpb.Host.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostuuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOsversion(value);
      break;
    case 4:
      var value = new proto.clientpb.IOC;
      reader.readMessage(value,proto.clientpb.IOC.deserializeBinaryFromReader);
      msg.addIocs(value);
      break;
    case 5:
      var value = msg.getExtensiondataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.clientpb.ExtensionData.deserializeBinaryFromReader, "", new proto.clientpb.ExtensionData());
         });
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
proto.clientpb.Host.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.Host.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.Host} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.Host.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostuuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOsversion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIocsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.clientpb.IOC.serializeBinaryToWriter
    );
  }
  f = message.getExtensiondataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.clientpb.ExtensionData.serializeBinaryToWriter);
  }
};


/**
 * optional string Hostname = 1;
 * @return {string}
 */
proto.clientpb.Host.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Host} returns this
 */
proto.clientpb.Host.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string HostUUID = 2;
 * @return {string}
 */
proto.clientpb.Host.prototype.getHostuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Host} returns this
 */
proto.clientpb.Host.prototype.setHostuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string OSVersion = 3;
 * @return {string}
 */
proto.clientpb.Host.prototype.getOsversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.Host} returns this
 */
proto.clientpb.Host.prototype.setOsversion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated IOC IOCs = 4;
 * @return {!Array<!proto.clientpb.IOC>}
 */
proto.clientpb.Host.prototype.getIocsList = function() {
  return /** @type{!Array<!proto.clientpb.IOC>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.IOC, 4));
};


/**
 * @param {!Array<!proto.clientpb.IOC>} value
 * @return {!proto.clientpb.Host} returns this
*/
proto.clientpb.Host.prototype.setIocsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.clientpb.IOC=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.IOC}
 */
proto.clientpb.Host.prototype.addIocs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.clientpb.IOC, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.Host} returns this
 */
proto.clientpb.Host.prototype.clearIocsList = function() {
  return this.setIocsList([]);
};


/**
 * map<string, ExtensionData> ExtensionData = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.clientpb.ExtensionData>}
 */
proto.clientpb.Host.prototype.getExtensiondataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.clientpb.ExtensionData>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.clientpb.ExtensionData));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.clientpb.Host} returns this
 */
proto.clientpb.Host.prototype.clearExtensiondataMap = function() {
  this.getExtensiondataMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientpb.AllHosts.repeatedFields_ = [1];



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
proto.clientpb.AllHosts.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.AllHosts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.AllHosts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.AllHosts.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostsList: jspb.Message.toObjectList(msg.getHostsList(),
    proto.clientpb.Host.toObject, includeInstance)
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
 * @return {!proto.clientpb.AllHosts}
 */
proto.clientpb.AllHosts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.AllHosts;
  return proto.clientpb.AllHosts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.AllHosts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.AllHosts}
 */
proto.clientpb.AllHosts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clientpb.Host;
      reader.readMessage(value,proto.clientpb.Host.deserializeBinaryFromReader);
      msg.addHosts(value);
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
proto.clientpb.AllHosts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.AllHosts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.AllHosts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.AllHosts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clientpb.Host.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Host Hosts = 1;
 * @return {!Array<!proto.clientpb.Host>}
 */
proto.clientpb.AllHosts.prototype.getHostsList = function() {
  return /** @type{!Array<!proto.clientpb.Host>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clientpb.Host, 1));
};


/**
 * @param {!Array<!proto.clientpb.Host>} value
 * @return {!proto.clientpb.AllHosts} returns this
*/
proto.clientpb.AllHosts.prototype.setHostsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clientpb.Host=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clientpb.Host}
 */
proto.clientpb.AllHosts.prototype.addHosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clientpb.Host, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientpb.AllHosts} returns this
 */
proto.clientpb.AllHosts.prototype.clearHostsList = function() {
  return this.setHostsList([]);
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
proto.clientpb.DllHijackReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.DllHijackReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.DllHijackReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DllHijackReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    referencedllpath: jspb.Message.getFieldWithDefault(msg, 1, ""),
    targetlocation: jspb.Message.getFieldWithDefault(msg, 2, ""),
    referencedll: msg.getReferencedll_asB64(),
    targetdll: msg.getTargetdll_asB64(),
    profilename: jspb.Message.getFieldWithDefault(msg, 5, ""),
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
 * @return {!proto.clientpb.DllHijackReq}
 */
proto.clientpb.DllHijackReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.DllHijackReq;
  return proto.clientpb.DllHijackReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.DllHijackReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.DllHijackReq}
 */
proto.clientpb.DllHijackReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferencedllpath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetlocation(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReferencedll(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTargetdll(value);
      break;
    case 5:
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
proto.clientpb.DllHijackReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.DllHijackReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.DllHijackReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DllHijackReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReferencedllpath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTargetlocation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReferencedll_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getTargetdll_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getProfilename();
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
 * optional string ReferenceDLLPath = 1;
 * @return {string}
 */
proto.clientpb.DllHijackReq.prototype.getReferencedllpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.DllHijackReq} returns this
 */
proto.clientpb.DllHijackReq.prototype.setReferencedllpath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string TargetLocation = 2;
 * @return {string}
 */
proto.clientpb.DllHijackReq.prototype.getTargetlocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.DllHijackReq} returns this
 */
proto.clientpb.DllHijackReq.prototype.setTargetlocation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes ReferenceDLL = 3;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.DllHijackReq.prototype.getReferencedll = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes ReferenceDLL = 3;
 * This is a type-conversion wrapper around `getReferencedll()`
 * @return {string}
 */
proto.clientpb.DllHijackReq.prototype.getReferencedll_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReferencedll()));
};


/**
 * optional bytes ReferenceDLL = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReferencedll()`
 * @return {!Uint8Array}
 */
proto.clientpb.DllHijackReq.prototype.getReferencedll_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReferencedll()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.DllHijackReq} returns this
 */
proto.clientpb.DllHijackReq.prototype.setReferencedll = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes TargetDLL = 4;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.DllHijackReq.prototype.getTargetdll = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes TargetDLL = 4;
 * This is a type-conversion wrapper around `getTargetdll()`
 * @return {string}
 */
proto.clientpb.DllHijackReq.prototype.getTargetdll_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTargetdll()));
};


/**
 * optional bytes TargetDLL = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTargetdll()`
 * @return {!Uint8Array}
 */
proto.clientpb.DllHijackReq.prototype.getTargetdll_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTargetdll()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.DllHijackReq} returns this
 */
proto.clientpb.DllHijackReq.prototype.setTargetdll = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional string ProfileName = 5;
 * @return {string}
 */
proto.clientpb.DllHijackReq.prototype.getProfilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.DllHijackReq} returns this
 */
proto.clientpb.DllHijackReq.prototype.setProfilename = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.clientpb.DllHijackReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.clientpb.DllHijackReq} returns this
*/
proto.clientpb.DllHijackReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.DllHijackReq} returns this
 */
proto.clientpb.DllHijackReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.DllHijackReq.prototype.hasRequest = function() {
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
proto.clientpb.DllHijack.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.DllHijack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.DllHijack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DllHijack.toObject = function(includeInstance, msg) {
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
 * @return {!proto.clientpb.DllHijack}
 */
proto.clientpb.DllHijack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.DllHijack;
  return proto.clientpb.DllHijack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.DllHijack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.DllHijack}
 */
proto.clientpb.DllHijack.deserializeBinaryFromReader = function(msg, reader) {
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
proto.clientpb.DllHijack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.DllHijack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.DllHijack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.DllHijack.serializeBinaryToWriter = function(message, writer) {
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
proto.clientpb.DllHijack.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.clientpb.DllHijack} returns this
*/
proto.clientpb.DllHijack.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.DllHijack} returns this
 */
proto.clientpb.DllHijack.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.DllHijack.prototype.hasResponse = function() {
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
proto.clientpb.ShellcodeEncodeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.ShellcodeEncodeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.ShellcodeEncodeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ShellcodeEncodeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    encoder: jspb.Message.getFieldWithDefault(msg, 1, 0),
    architecture: jspb.Message.getFieldWithDefault(msg, 2, ""),
    iterations: jspb.Message.getFieldWithDefault(msg, 3, 0),
    badchars: msg.getBadchars_asB64(),
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
 * @return {!proto.clientpb.ShellcodeEncodeReq}
 */
proto.clientpb.ShellcodeEncodeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.ShellcodeEncodeReq;
  return proto.clientpb.ShellcodeEncodeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.ShellcodeEncodeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.ShellcodeEncodeReq}
 */
proto.clientpb.ShellcodeEncodeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.clientpb.ShellcodeEncoder} */ (reader.readEnum());
      msg.setEncoder(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setArchitecture(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIterations(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBadchars(value);
      break;
    case 8:
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
proto.clientpb.ShellcodeEncodeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.ShellcodeEncodeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.ShellcodeEncodeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ShellcodeEncodeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncoder();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getArchitecture();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIterations();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getBadchars_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
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
 * optional ShellcodeEncoder Encoder = 1;
 * @return {!proto.clientpb.ShellcodeEncoder}
 */
proto.clientpb.ShellcodeEncodeReq.prototype.getEncoder = function() {
  return /** @type {!proto.clientpb.ShellcodeEncoder} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.clientpb.ShellcodeEncoder} value
 * @return {!proto.clientpb.ShellcodeEncodeReq} returns this
 */
proto.clientpb.ShellcodeEncodeReq.prototype.setEncoder = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string Architecture = 2;
 * @return {string}
 */
proto.clientpb.ShellcodeEncodeReq.prototype.getArchitecture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clientpb.ShellcodeEncodeReq} returns this
 */
proto.clientpb.ShellcodeEncodeReq.prototype.setArchitecture = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 Iterations = 3;
 * @return {number}
 */
proto.clientpb.ShellcodeEncodeReq.prototype.getIterations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clientpb.ShellcodeEncodeReq} returns this
 */
proto.clientpb.ShellcodeEncodeReq.prototype.setIterations = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes BadChars = 4;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.ShellcodeEncodeReq.prototype.getBadchars = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes BadChars = 4;
 * This is a type-conversion wrapper around `getBadchars()`
 * @return {string}
 */
proto.clientpb.ShellcodeEncodeReq.prototype.getBadchars_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBadchars()));
};


/**
 * optional bytes BadChars = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBadchars()`
 * @return {!Uint8Array}
 */
proto.clientpb.ShellcodeEncodeReq.prototype.getBadchars_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBadchars()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.ShellcodeEncodeReq} returns this
 */
proto.clientpb.ShellcodeEncodeReq.prototype.setBadchars = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes Data = 8;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.ShellcodeEncodeReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes Data = 8;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.clientpb.ShellcodeEncodeReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.clientpb.ShellcodeEncodeReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.ShellcodeEncodeReq} returns this
 */
proto.clientpb.ShellcodeEncodeReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional commonpb.Request Request = 9;
 * @return {?proto.commonpb.Request}
 */
proto.clientpb.ShellcodeEncodeReq.prototype.getRequest = function() {
  return /** @type{?proto.commonpb.Request} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Request, 9));
};


/**
 * @param {?proto.commonpb.Request|undefined} value
 * @return {!proto.clientpb.ShellcodeEncodeReq} returns this
*/
proto.clientpb.ShellcodeEncodeReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.ShellcodeEncodeReq} returns this
 */
proto.clientpb.ShellcodeEncodeReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.ShellcodeEncodeReq.prototype.hasRequest = function() {
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
proto.clientpb.ShellcodeEncode.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.ShellcodeEncode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.ShellcodeEncode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ShellcodeEncode.toObject = function(includeInstance, msg) {
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
 * @return {!proto.clientpb.ShellcodeEncode}
 */
proto.clientpb.ShellcodeEncode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.ShellcodeEncode;
  return proto.clientpb.ShellcodeEncode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.ShellcodeEncode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.ShellcodeEncode}
 */
proto.clientpb.ShellcodeEncode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
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
proto.clientpb.ShellcodeEncode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.ShellcodeEncode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.ShellcodeEncode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ShellcodeEncode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
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
 * optional bytes Data = 8;
 * @return {!(string|Uint8Array)}
 */
proto.clientpb.ShellcodeEncode.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes Data = 8;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.clientpb.ShellcodeEncode.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.clientpb.ShellcodeEncode.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clientpb.ShellcodeEncode} returns this
 */
proto.clientpb.ShellcodeEncode.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional commonpb.Response Response = 9;
 * @return {?proto.commonpb.Response}
 */
proto.clientpb.ShellcodeEncode.prototype.getResponse = function() {
  return /** @type{?proto.commonpb.Response} */ (
    jspb.Message.getWrapperField(this, commonpb_common_pb.Response, 9));
};


/**
 * @param {?proto.commonpb.Response|undefined} value
 * @return {!proto.clientpb.ShellcodeEncode} returns this
*/
proto.clientpb.ShellcodeEncode.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clientpb.ShellcodeEncode} returns this
 */
proto.clientpb.ShellcodeEncode.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clientpb.ShellcodeEncode.prototype.hasResponse = function() {
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
proto.clientpb.ShellcodeEncoderMap.prototype.toObject = function(opt_includeInstance) {
  return proto.clientpb.ShellcodeEncoderMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientpb.ShellcodeEncoderMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ShellcodeEncoderMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    encodersMap: (f = msg.getEncodersMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.clientpb.ShellcodeEncoderMap}
 */
proto.clientpb.ShellcodeEncoderMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientpb.ShellcodeEncoderMap;
  return proto.clientpb.ShellcodeEncoderMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientpb.ShellcodeEncoderMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientpb.ShellcodeEncoderMap}
 */
proto.clientpb.ShellcodeEncoderMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getEncodersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readEnum, null, "", 0);
         });
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
proto.clientpb.ShellcodeEncoderMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientpb.ShellcodeEncoderMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientpb.ShellcodeEncoderMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientpb.ShellcodeEncoderMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncodersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeEnum);
  }
};


/**
 * map<string, ShellcodeEncoder> Encoders = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.clientpb.ShellcodeEncoder>}
 */
proto.clientpb.ShellcodeEncoderMap.prototype.getEncodersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.clientpb.ShellcodeEncoder>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.clientpb.ShellcodeEncoderMap} returns this
 */
proto.clientpb.ShellcodeEncoderMap.prototype.clearEncodersMap = function() {
  this.getEncodersMap().clear();
  return this;};


/**
 * @enum {number}
 */
proto.clientpb.OutputFormat = {
  SHARED_LIB: 0,
  SHELLCODE: 1,
  EXECUTABLE: 2,
  SERVICE: 3
};

/**
 * @enum {number}
 */
proto.clientpb.StageProtocol = {
  TCP: 0,
  HTTP: 1,
  HTTPS: 2
};

/**
 * @enum {number}
 */
proto.clientpb.LootType = {
  LOOT_FILE: 0,
  LOOT_CREDENTIAL: 1
};

/**
 * @enum {number}
 */
proto.clientpb.CredentialType = {
  NO_CREDENTIAL: 0,
  USER_PASSWORD: 1,
  API_KEY: 2,
  FILE: 3
};

/**
 * @enum {number}
 */
proto.clientpb.FileType = {
  NO_FILE: 0,
  BINARY: 1,
  TEXT: 2
};

/**
 * @enum {number}
 */
proto.clientpb.ShellcodeEncoder = {
  SHIKATA_GA_NAI: 0
};

goog.object.extend(exports, proto.clientpb);

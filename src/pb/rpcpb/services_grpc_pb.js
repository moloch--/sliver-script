// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var commonpb_common_pb = require('../commonpb/common_pb.js');
var sliverpb_sliver_pb = require('../sliverpb/sliver_pb.js');
var clientpb_client_pb = require('../clientpb/client_pb.js');

function serialize_clientpb_AllHosts(arg) {
  if (!(arg instanceof clientpb_client_pb.AllHosts)) {
    throw new Error('Expected argument of type clientpb.AllHosts');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_AllHosts(buffer_arg) {
  return clientpb_client_pb.AllHosts.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_AllLoot(arg) {
  if (!(arg instanceof clientpb_client_pb.AllLoot)) {
    throw new Error('Expected argument of type clientpb.AllLoot');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_AllLoot(buffer_arg) {
  return clientpb_client_pb.AllLoot.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Beacon(arg) {
  if (!(arg instanceof clientpb_client_pb.Beacon)) {
    throw new Error('Expected argument of type clientpb.Beacon');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Beacon(buffer_arg) {
  return clientpb_client_pb.Beacon.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_BeaconTask(arg) {
  if (!(arg instanceof clientpb_client_pb.BeaconTask)) {
    throw new Error('Expected argument of type clientpb.BeaconTask');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_BeaconTask(buffer_arg) {
  return clientpb_client_pb.BeaconTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_BeaconTasks(arg) {
  if (!(arg instanceof clientpb_client_pb.BeaconTasks)) {
    throw new Error('Expected argument of type clientpb.BeaconTasks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_BeaconTasks(buffer_arg) {
  return clientpb_client_pb.BeaconTasks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Beacons(arg) {
  if (!(arg instanceof clientpb_client_pb.Beacons)) {
    throw new Error('Expected argument of type clientpb.Beacons');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Beacons(buffer_arg) {
  return clientpb_client_pb.Beacons.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Canaries(arg) {
  if (!(arg instanceof clientpb_client_pb.Canaries)) {
    throw new Error('Expected argument of type clientpb.Canaries');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Canaries(buffer_arg) {
  return clientpb_client_pb.Canaries.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Compiler(arg) {
  if (!(arg instanceof clientpb_client_pb.Compiler)) {
    throw new Error('Expected argument of type clientpb.Compiler');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Compiler(buffer_arg) {
  return clientpb_client_pb.Compiler.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_DNSListener(arg) {
  if (!(arg instanceof clientpb_client_pb.DNSListener)) {
    throw new Error('Expected argument of type clientpb.DNSListener');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_DNSListener(buffer_arg) {
  return clientpb_client_pb.DNSListener.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_DNSListenerReq(arg) {
  if (!(arg instanceof clientpb_client_pb.DNSListenerReq)) {
    throw new Error('Expected argument of type clientpb.DNSListenerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_DNSListenerReq(buffer_arg) {
  return clientpb_client_pb.DNSListenerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_DeleteReq(arg) {
  if (!(arg instanceof clientpb_client_pb.DeleteReq)) {
    throw new Error('Expected argument of type clientpb.DeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_DeleteReq(buffer_arg) {
  return clientpb_client_pb.DeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_DllHijack(arg) {
  if (!(arg instanceof clientpb_client_pb.DllHijack)) {
    throw new Error('Expected argument of type clientpb.DllHijack');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_DllHijack(buffer_arg) {
  return clientpb_client_pb.DllHijack.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_DllHijackReq(arg) {
  if (!(arg instanceof clientpb_client_pb.DllHijackReq)) {
    throw new Error('Expected argument of type clientpb.DllHijackReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_DllHijackReq(buffer_arg) {
  return clientpb_client_pb.DllHijackReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Event(arg) {
  if (!(arg instanceof clientpb_client_pb.Event)) {
    throw new Error('Expected argument of type clientpb.Event');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Event(buffer_arg) {
  return clientpb_client_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Generate(arg) {
  if (!(arg instanceof clientpb_client_pb.Generate)) {
    throw new Error('Expected argument of type clientpb.Generate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Generate(buffer_arg) {
  return clientpb_client_pb.Generate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_GenerateReq(arg) {
  if (!(arg instanceof clientpb_client_pb.GenerateReq)) {
    throw new Error('Expected argument of type clientpb.GenerateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_GenerateReq(buffer_arg) {
  return clientpb_client_pb.GenerateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_GetSystemReq(arg) {
  if (!(arg instanceof clientpb_client_pb.GetSystemReq)) {
    throw new Error('Expected argument of type clientpb.GetSystemReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_GetSystemReq(buffer_arg) {
  return clientpb_client_pb.GetSystemReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_HTTPListener(arg) {
  if (!(arg instanceof clientpb_client_pb.HTTPListener)) {
    throw new Error('Expected argument of type clientpb.HTTPListener');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_HTTPListener(buffer_arg) {
  return clientpb_client_pb.HTTPListener.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_HTTPListenerReq(arg) {
  if (!(arg instanceof clientpb_client_pb.HTTPListenerReq)) {
    throw new Error('Expected argument of type clientpb.HTTPListenerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_HTTPListenerReq(buffer_arg) {
  return clientpb_client_pb.HTTPListenerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Host(arg) {
  if (!(arg instanceof clientpb_client_pb.Host)) {
    throw new Error('Expected argument of type clientpb.Host');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Host(buffer_arg) {
  return clientpb_client_pb.Host.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_IOC(arg) {
  if (!(arg instanceof clientpb_client_pb.IOC)) {
    throw new Error('Expected argument of type clientpb.IOC');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_IOC(buffer_arg) {
  return clientpb_client_pb.IOC.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_ImplantBuilds(arg) {
  if (!(arg instanceof clientpb_client_pb.ImplantBuilds)) {
    throw new Error('Expected argument of type clientpb.ImplantBuilds');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_ImplantBuilds(buffer_arg) {
  return clientpb_client_pb.ImplantBuilds.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_ImplantProfile(arg) {
  if (!(arg instanceof clientpb_client_pb.ImplantProfile)) {
    throw new Error('Expected argument of type clientpb.ImplantProfile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_ImplantProfile(buffer_arg) {
  return clientpb_client_pb.ImplantProfile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_ImplantProfiles(arg) {
  if (!(arg instanceof clientpb_client_pb.ImplantProfiles)) {
    throw new Error('Expected argument of type clientpb.ImplantProfiles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_ImplantProfiles(buffer_arg) {
  return clientpb_client_pb.ImplantProfiles.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Jobs(arg) {
  if (!(arg instanceof clientpb_client_pb.Jobs)) {
    throw new Error('Expected argument of type clientpb.Jobs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Jobs(buffer_arg) {
  return clientpb_client_pb.Jobs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_KillJob(arg) {
  if (!(arg instanceof clientpb_client_pb.KillJob)) {
    throw new Error('Expected argument of type clientpb.KillJob');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_KillJob(buffer_arg) {
  return clientpb_client_pb.KillJob.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_KillJobReq(arg) {
  if (!(arg instanceof clientpb_client_pb.KillJobReq)) {
    throw new Error('Expected argument of type clientpb.KillJobReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_KillJobReq(buffer_arg) {
  return clientpb_client_pb.KillJobReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Loot(arg) {
  if (!(arg instanceof clientpb_client_pb.Loot)) {
    throw new Error('Expected argument of type clientpb.Loot');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Loot(buffer_arg) {
  return clientpb_client_pb.Loot.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_MSFRemoteReq(arg) {
  if (!(arg instanceof clientpb_client_pb.MSFRemoteReq)) {
    throw new Error('Expected argument of type clientpb.MSFRemoteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_MSFRemoteReq(buffer_arg) {
  return clientpb_client_pb.MSFRemoteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_MSFReq(arg) {
  if (!(arg instanceof clientpb_client_pb.MSFReq)) {
    throw new Error('Expected argument of type clientpb.MSFReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_MSFReq(buffer_arg) {
  return clientpb_client_pb.MSFReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_MTLSListener(arg) {
  if (!(arg instanceof clientpb_client_pb.MTLSListener)) {
    throw new Error('Expected argument of type clientpb.MTLSListener');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_MTLSListener(buffer_arg) {
  return clientpb_client_pb.MTLSListener.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_MTLSListenerReq(arg) {
  if (!(arg instanceof clientpb_client_pb.MTLSListenerReq)) {
    throw new Error('Expected argument of type clientpb.MTLSListenerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_MTLSListenerReq(buffer_arg) {
  return clientpb_client_pb.MTLSListenerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_MigrateReq(arg) {
  if (!(arg instanceof clientpb_client_pb.MigrateReq)) {
    throw new Error('Expected argument of type clientpb.MigrateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_MigrateReq(buffer_arg) {
  return clientpb_client_pb.MigrateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_MsfStager(arg) {
  if (!(arg instanceof clientpb_client_pb.MsfStager)) {
    throw new Error('Expected argument of type clientpb.MsfStager');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_MsfStager(buffer_arg) {
  return clientpb_client_pb.MsfStager.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_MsfStagerReq(arg) {
  if (!(arg instanceof clientpb_client_pb.MsfStagerReq)) {
    throw new Error('Expected argument of type clientpb.MsfStagerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_MsfStagerReq(buffer_arg) {
  return clientpb_client_pb.MsfStagerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Operators(arg) {
  if (!(arg instanceof clientpb_client_pb.Operators)) {
    throw new Error('Expected argument of type clientpb.Operators');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Operators(buffer_arg) {
  return clientpb_client_pb.Operators.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_PivotGraph(arg) {
  if (!(arg instanceof clientpb_client_pb.PivotGraph)) {
    throw new Error('Expected argument of type clientpb.PivotGraph');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_PivotGraph(buffer_arg) {
  return clientpb_client_pb.PivotGraph.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_RegenerateReq(arg) {
  if (!(arg instanceof clientpb_client_pb.RegenerateReq)) {
    throw new Error('Expected argument of type clientpb.RegenerateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_RegenerateReq(buffer_arg) {
  return clientpb_client_pb.RegenerateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_RenameReq(arg) {
  if (!(arg instanceof clientpb_client_pb.RenameReq)) {
    throw new Error('Expected argument of type clientpb.RenameReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_RenameReq(buffer_arg) {
  return clientpb_client_pb.RenameReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Sessions(arg) {
  if (!(arg instanceof clientpb_client_pb.Sessions)) {
    throw new Error('Expected argument of type clientpb.Sessions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Sessions(buffer_arg) {
  return clientpb_client_pb.Sessions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_ShellcodeEncode(arg) {
  if (!(arg instanceof clientpb_client_pb.ShellcodeEncode)) {
    throw new Error('Expected argument of type clientpb.ShellcodeEncode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_ShellcodeEncode(buffer_arg) {
  return clientpb_client_pb.ShellcodeEncode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_ShellcodeEncodeReq(arg) {
  if (!(arg instanceof clientpb_client_pb.ShellcodeEncodeReq)) {
    throw new Error('Expected argument of type clientpb.ShellcodeEncodeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_ShellcodeEncodeReq(buffer_arg) {
  return clientpb_client_pb.ShellcodeEncodeReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_ShellcodeEncoderMap(arg) {
  if (!(arg instanceof clientpb_client_pb.ShellcodeEncoderMap)) {
    throw new Error('Expected argument of type clientpb.ShellcodeEncoderMap');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_ShellcodeEncoderMap(buffer_arg) {
  return clientpb_client_pb.ShellcodeEncoderMap.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_ShellcodeRDI(arg) {
  if (!(arg instanceof clientpb_client_pb.ShellcodeRDI)) {
    throw new Error('Expected argument of type clientpb.ShellcodeRDI');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_ShellcodeRDI(buffer_arg) {
  return clientpb_client_pb.ShellcodeRDI.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_ShellcodeRDIReq(arg) {
  if (!(arg instanceof clientpb_client_pb.ShellcodeRDIReq)) {
    throw new Error('Expected argument of type clientpb.ShellcodeRDIReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_ShellcodeRDIReq(buffer_arg) {
  return clientpb_client_pb.ShellcodeRDIReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_StagerListener(arg) {
  if (!(arg instanceof clientpb_client_pb.StagerListener)) {
    throw new Error('Expected argument of type clientpb.StagerListener');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_StagerListener(buffer_arg) {
  return clientpb_client_pb.StagerListener.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_StagerListenerReq(arg) {
  if (!(arg instanceof clientpb_client_pb.StagerListenerReq)) {
    throw new Error('Expected argument of type clientpb.StagerListenerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_StagerListenerReq(buffer_arg) {
  return clientpb_client_pb.StagerListenerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_UniqueWGIP(arg) {
  if (!(arg instanceof clientpb_client_pb.UniqueWGIP)) {
    throw new Error('Expected argument of type clientpb.UniqueWGIP');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_UniqueWGIP(buffer_arg) {
  return clientpb_client_pb.UniqueWGIP.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Version(arg) {
  if (!(arg instanceof clientpb_client_pb.Version)) {
    throw new Error('Expected argument of type clientpb.Version');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Version(buffer_arg) {
  return clientpb_client_pb.Version.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_WGClientConfig(arg) {
  if (!(arg instanceof clientpb_client_pb.WGClientConfig)) {
    throw new Error('Expected argument of type clientpb.WGClientConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_WGClientConfig(buffer_arg) {
  return clientpb_client_pb.WGClientConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_WGListener(arg) {
  if (!(arg instanceof clientpb_client_pb.WGListener)) {
    throw new Error('Expected argument of type clientpb.WGListener');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_WGListener(buffer_arg) {
  return clientpb_client_pb.WGListener.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_WGListenerReq(arg) {
  if (!(arg instanceof clientpb_client_pb.WGListenerReq)) {
    throw new Error('Expected argument of type clientpb.WGListenerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_WGListenerReq(buffer_arg) {
  return clientpb_client_pb.WGListenerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Website(arg) {
  if (!(arg instanceof clientpb_client_pb.Website)) {
    throw new Error('Expected argument of type clientpb.Website');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Website(buffer_arg) {
  return clientpb_client_pb.Website.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_WebsiteAddContent(arg) {
  if (!(arg instanceof clientpb_client_pb.WebsiteAddContent)) {
    throw new Error('Expected argument of type clientpb.WebsiteAddContent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_WebsiteAddContent(buffer_arg) {
  return clientpb_client_pb.WebsiteAddContent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_WebsiteRemoveContent(arg) {
  if (!(arg instanceof clientpb_client_pb.WebsiteRemoveContent)) {
    throw new Error('Expected argument of type clientpb.WebsiteRemoveContent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_WebsiteRemoveContent(buffer_arg) {
  return clientpb_client_pb.WebsiteRemoveContent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientpb_Websites(arg) {
  if (!(arg instanceof clientpb_client_pb.Websites)) {
    throw new Error('Expected argument of type clientpb.Websites');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientpb_Websites(buffer_arg) {
  return clientpb_client_pb.Websites.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_commonpb_Empty(arg) {
  if (!(arg instanceof commonpb_common_pb.Empty)) {
    throw new Error('Expected argument of type commonpb.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_commonpb_Empty(buffer_arg) {
  return commonpb_common_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_commonpb_Response(arg) {
  if (!(arg instanceof commonpb_common_pb.Response)) {
    throw new Error('Expected argument of type commonpb.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_commonpb_Response(buffer_arg) {
  return commonpb_common_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Backdoor(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Backdoor)) {
    throw new Error('Expected argument of type sliverpb.Backdoor');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Backdoor(buffer_arg) {
  return sliverpb_sliver_pb.Backdoor.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_BackdoorReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.BackdoorReq)) {
    throw new Error('Expected argument of type sliverpb.BackdoorReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_BackdoorReq(buffer_arg) {
  return sliverpb_sliver_pb.BackdoorReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_CallExtension(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.CallExtension)) {
    throw new Error('Expected argument of type sliverpb.CallExtension');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_CallExtension(buffer_arg) {
  return sliverpb_sliver_pb.CallExtension.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_CallExtensionReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.CallExtensionReq)) {
    throw new Error('Expected argument of type sliverpb.CallExtensionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_CallExtensionReq(buffer_arg) {
  return sliverpb_sliver_pb.CallExtensionReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_CdReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.CdReq)) {
    throw new Error('Expected argument of type sliverpb.CdReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_CdReq(buffer_arg) {
  return sliverpb_sliver_pb.CdReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_CloseSession(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.CloseSession)) {
    throw new Error('Expected argument of type sliverpb.CloseSession');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_CloseSession(buffer_arg) {
  return sliverpb_sliver_pb.CloseSession.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_CurrentTokenOwner(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.CurrentTokenOwner)) {
    throw new Error('Expected argument of type sliverpb.CurrentTokenOwner');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_CurrentTokenOwner(buffer_arg) {
  return sliverpb_sliver_pb.CurrentTokenOwner.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_CurrentTokenOwnerReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.CurrentTokenOwnerReq)) {
    throw new Error('Expected argument of type sliverpb.CurrentTokenOwnerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_CurrentTokenOwnerReq(buffer_arg) {
  return sliverpb_sliver_pb.CurrentTokenOwnerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Download(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Download)) {
    throw new Error('Expected argument of type sliverpb.Download');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Download(buffer_arg) {
  return sliverpb_sliver_pb.Download.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_DownloadReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.DownloadReq)) {
    throw new Error('Expected argument of type sliverpb.DownloadReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_DownloadReq(buffer_arg) {
  return sliverpb_sliver_pb.DownloadReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_EnvInfo(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.EnvInfo)) {
    throw new Error('Expected argument of type sliverpb.EnvInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_EnvInfo(buffer_arg) {
  return sliverpb_sliver_pb.EnvInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_EnvReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.EnvReq)) {
    throw new Error('Expected argument of type sliverpb.EnvReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_EnvReq(buffer_arg) {
  return sliverpb_sliver_pb.EnvReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Execute(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Execute)) {
    throw new Error('Expected argument of type sliverpb.Execute');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Execute(buffer_arg) {
  return sliverpb_sliver_pb.Execute.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ExecuteAssembly(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ExecuteAssembly)) {
    throw new Error('Expected argument of type sliverpb.ExecuteAssembly');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ExecuteAssembly(buffer_arg) {
  return sliverpb_sliver_pb.ExecuteAssembly.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ExecuteAssemblyReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ExecuteAssemblyReq)) {
    throw new Error('Expected argument of type sliverpb.ExecuteAssemblyReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ExecuteAssemblyReq(buffer_arg) {
  return sliverpb_sliver_pb.ExecuteAssemblyReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ExecuteReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ExecuteReq)) {
    throw new Error('Expected argument of type sliverpb.ExecuteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ExecuteReq(buffer_arg) {
  return sliverpb_sliver_pb.ExecuteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ExecuteWindowsReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ExecuteWindowsReq)) {
    throw new Error('Expected argument of type sliverpb.ExecuteWindowsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ExecuteWindowsReq(buffer_arg) {
  return sliverpb_sliver_pb.ExecuteWindowsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_GetPrivs(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.GetPrivs)) {
    throw new Error('Expected argument of type sliverpb.GetPrivs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_GetPrivs(buffer_arg) {
  return sliverpb_sliver_pb.GetPrivs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_GetPrivsReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.GetPrivsReq)) {
    throw new Error('Expected argument of type sliverpb.GetPrivsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_GetPrivsReq(buffer_arg) {
  return sliverpb_sliver_pb.GetPrivsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_GetSystem(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.GetSystem)) {
    throw new Error('Expected argument of type sliverpb.GetSystem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_GetSystem(buffer_arg) {
  return sliverpb_sliver_pb.GetSystem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Ifconfig(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Ifconfig)) {
    throw new Error('Expected argument of type sliverpb.Ifconfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Ifconfig(buffer_arg) {
  return sliverpb_sliver_pb.Ifconfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_IfconfigReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.IfconfigReq)) {
    throw new Error('Expected argument of type sliverpb.IfconfigReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_IfconfigReq(buffer_arg) {
  return sliverpb_sliver_pb.IfconfigReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Impersonate(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Impersonate)) {
    throw new Error('Expected argument of type sliverpb.Impersonate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Impersonate(buffer_arg) {
  return sliverpb_sliver_pb.Impersonate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ImpersonateReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ImpersonateReq)) {
    throw new Error('Expected argument of type sliverpb.ImpersonateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ImpersonateReq(buffer_arg) {
  return sliverpb_sliver_pb.ImpersonateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_InvokeSpawnDllReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.InvokeSpawnDllReq)) {
    throw new Error('Expected argument of type sliverpb.InvokeSpawnDllReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_InvokeSpawnDllReq(buffer_arg) {
  return sliverpb_sliver_pb.InvokeSpawnDllReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_KillReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.KillReq)) {
    throw new Error('Expected argument of type sliverpb.KillReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_KillReq(buffer_arg) {
  return sliverpb_sliver_pb.KillReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ListExtensions(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ListExtensions)) {
    throw new Error('Expected argument of type sliverpb.ListExtensions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ListExtensions(buffer_arg) {
  return sliverpb_sliver_pb.ListExtensions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ListExtensionsReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ListExtensionsReq)) {
    throw new Error('Expected argument of type sliverpb.ListExtensionsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ListExtensionsReq(buffer_arg) {
  return sliverpb_sliver_pb.ListExtensionsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Ls(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Ls)) {
    throw new Error('Expected argument of type sliverpb.Ls');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Ls(buffer_arg) {
  return sliverpb_sliver_pb.Ls.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_LsReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.LsReq)) {
    throw new Error('Expected argument of type sliverpb.LsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_LsReq(buffer_arg) {
  return sliverpb_sliver_pb.LsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_MakeToken(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.MakeToken)) {
    throw new Error('Expected argument of type sliverpb.MakeToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_MakeToken(buffer_arg) {
  return sliverpb_sliver_pb.MakeToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_MakeTokenReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.MakeTokenReq)) {
    throw new Error('Expected argument of type sliverpb.MakeTokenReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_MakeTokenReq(buffer_arg) {
  return sliverpb_sliver_pb.MakeTokenReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Migrate(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Migrate)) {
    throw new Error('Expected argument of type sliverpb.Migrate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Migrate(buffer_arg) {
  return sliverpb_sliver_pb.Migrate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Mkdir(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Mkdir)) {
    throw new Error('Expected argument of type sliverpb.Mkdir');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Mkdir(buffer_arg) {
  return sliverpb_sliver_pb.Mkdir.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_MkdirReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.MkdirReq)) {
    throw new Error('Expected argument of type sliverpb.MkdirReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_MkdirReq(buffer_arg) {
  return sliverpb_sliver_pb.MkdirReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Mv(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Mv)) {
    throw new Error('Expected argument of type sliverpb.Mv');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Mv(buffer_arg) {
  return sliverpb_sliver_pb.Mv.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_MvReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.MvReq)) {
    throw new Error('Expected argument of type sliverpb.MvReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_MvReq(buffer_arg) {
  return sliverpb_sliver_pb.MvReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Netstat(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Netstat)) {
    throw new Error('Expected argument of type sliverpb.Netstat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Netstat(buffer_arg) {
  return sliverpb_sliver_pb.Netstat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_NetstatReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.NetstatReq)) {
    throw new Error('Expected argument of type sliverpb.NetstatReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_NetstatReq(buffer_arg) {
  return sliverpb_sliver_pb.NetstatReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_OpenSession(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.OpenSession)) {
    throw new Error('Expected argument of type sliverpb.OpenSession');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_OpenSession(buffer_arg) {
  return sliverpb_sliver_pb.OpenSession.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Ping(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Ping)) {
    throw new Error('Expected argument of type sliverpb.Ping');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Ping(buffer_arg) {
  return sliverpb_sliver_pb.Ping.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_PivotListener(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.PivotListener)) {
    throw new Error('Expected argument of type sliverpb.PivotListener');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_PivotListener(buffer_arg) {
  return sliverpb_sliver_pb.PivotListener.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_PivotListeners(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.PivotListeners)) {
    throw new Error('Expected argument of type sliverpb.PivotListeners');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_PivotListeners(buffer_arg) {
  return sliverpb_sliver_pb.PivotListeners.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_PivotListenersReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.PivotListenersReq)) {
    throw new Error('Expected argument of type sliverpb.PivotListenersReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_PivotListenersReq(buffer_arg) {
  return sliverpb_sliver_pb.PivotListenersReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_PivotStartListenerReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.PivotStartListenerReq)) {
    throw new Error('Expected argument of type sliverpb.PivotStartListenerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_PivotStartListenerReq(buffer_arg) {
  return sliverpb_sliver_pb.PivotStartListenerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_PivotStopListenerReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.PivotStopListenerReq)) {
    throw new Error('Expected argument of type sliverpb.PivotStopListenerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_PivotStopListenerReq(buffer_arg) {
  return sliverpb_sliver_pb.PivotStopListenerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Portfwd(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Portfwd)) {
    throw new Error('Expected argument of type sliverpb.Portfwd');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Portfwd(buffer_arg) {
  return sliverpb_sliver_pb.Portfwd.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_PortfwdReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.PortfwdReq)) {
    throw new Error('Expected argument of type sliverpb.PortfwdReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_PortfwdReq(buffer_arg) {
  return sliverpb_sliver_pb.PortfwdReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ProcessDump(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ProcessDump)) {
    throw new Error('Expected argument of type sliverpb.ProcessDump');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ProcessDump(buffer_arg) {
  return sliverpb_sliver_pb.ProcessDump.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ProcessDumpReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ProcessDumpReq)) {
    throw new Error('Expected argument of type sliverpb.ProcessDumpReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ProcessDumpReq(buffer_arg) {
  return sliverpb_sliver_pb.ProcessDumpReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Ps(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Ps)) {
    throw new Error('Expected argument of type sliverpb.Ps');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Ps(buffer_arg) {
  return sliverpb_sliver_pb.Ps.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_PsReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.PsReq)) {
    throw new Error('Expected argument of type sliverpb.PsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_PsReq(buffer_arg) {
  return sliverpb_sliver_pb.PsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Pwd(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Pwd)) {
    throw new Error('Expected argument of type sliverpb.Pwd');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Pwd(buffer_arg) {
  return sliverpb_sliver_pb.Pwd.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_PwdReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.PwdReq)) {
    throw new Error('Expected argument of type sliverpb.PwdReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_PwdReq(buffer_arg) {
  return sliverpb_sliver_pb.PwdReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Reconfigure(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Reconfigure)) {
    throw new Error('Expected argument of type sliverpb.Reconfigure');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Reconfigure(buffer_arg) {
  return sliverpb_sliver_pb.Reconfigure.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ReconfigureReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ReconfigureReq)) {
    throw new Error('Expected argument of type sliverpb.ReconfigureReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ReconfigureReq(buffer_arg) {
  return sliverpb_sliver_pb.ReconfigureReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegisterExtension(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegisterExtension)) {
    throw new Error('Expected argument of type sliverpb.RegisterExtension');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegisterExtension(buffer_arg) {
  return sliverpb_sliver_pb.RegisterExtension.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegisterExtensionReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegisterExtensionReq)) {
    throw new Error('Expected argument of type sliverpb.RegisterExtensionReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegisterExtensionReq(buffer_arg) {
  return sliverpb_sliver_pb.RegisterExtensionReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistryCreateKey(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistryCreateKey)) {
    throw new Error('Expected argument of type sliverpb.RegistryCreateKey');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistryCreateKey(buffer_arg) {
  return sliverpb_sliver_pb.RegistryCreateKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistryCreateKeyReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistryCreateKeyReq)) {
    throw new Error('Expected argument of type sliverpb.RegistryCreateKeyReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistryCreateKeyReq(buffer_arg) {
  return sliverpb_sliver_pb.RegistryCreateKeyReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistryDeleteKey(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistryDeleteKey)) {
    throw new Error('Expected argument of type sliverpb.RegistryDeleteKey');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistryDeleteKey(buffer_arg) {
  return sliverpb_sliver_pb.RegistryDeleteKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistryDeleteKeyReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistryDeleteKeyReq)) {
    throw new Error('Expected argument of type sliverpb.RegistryDeleteKeyReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistryDeleteKeyReq(buffer_arg) {
  return sliverpb_sliver_pb.RegistryDeleteKeyReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistryListValuesReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistryListValuesReq)) {
    throw new Error('Expected argument of type sliverpb.RegistryListValuesReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistryListValuesReq(buffer_arg) {
  return sliverpb_sliver_pb.RegistryListValuesReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistryRead(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistryRead)) {
    throw new Error('Expected argument of type sliverpb.RegistryRead');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistryRead(buffer_arg) {
  return sliverpb_sliver_pb.RegistryRead.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistryReadReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistryReadReq)) {
    throw new Error('Expected argument of type sliverpb.RegistryReadReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistryReadReq(buffer_arg) {
  return sliverpb_sliver_pb.RegistryReadReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistrySubKeyList(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistrySubKeyList)) {
    throw new Error('Expected argument of type sliverpb.RegistrySubKeyList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistrySubKeyList(buffer_arg) {
  return sliverpb_sliver_pb.RegistrySubKeyList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistrySubKeyListReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistrySubKeyListReq)) {
    throw new Error('Expected argument of type sliverpb.RegistrySubKeyListReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistrySubKeyListReq(buffer_arg) {
  return sliverpb_sliver_pb.RegistrySubKeyListReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistryValuesList(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistryValuesList)) {
    throw new Error('Expected argument of type sliverpb.RegistryValuesList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistryValuesList(buffer_arg) {
  return sliverpb_sliver_pb.RegistryValuesList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistryWrite(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistryWrite)) {
    throw new Error('Expected argument of type sliverpb.RegistryWrite');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistryWrite(buffer_arg) {
  return sliverpb_sliver_pb.RegistryWrite.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RegistryWriteReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RegistryWriteReq)) {
    throw new Error('Expected argument of type sliverpb.RegistryWriteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RegistryWriteReq(buffer_arg) {
  return sliverpb_sliver_pb.RegistryWriteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RemoveServiceReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RemoveServiceReq)) {
    throw new Error('Expected argument of type sliverpb.RemoveServiceReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RemoveServiceReq(buffer_arg) {
  return sliverpb_sliver_pb.RemoveServiceReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RevToSelf(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RevToSelf)) {
    throw new Error('Expected argument of type sliverpb.RevToSelf');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RevToSelf(buffer_arg) {
  return sliverpb_sliver_pb.RevToSelf.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RevToSelfReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RevToSelfReq)) {
    throw new Error('Expected argument of type sliverpb.RevToSelfReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RevToSelfReq(buffer_arg) {
  return sliverpb_sliver_pb.RevToSelfReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Rm(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Rm)) {
    throw new Error('Expected argument of type sliverpb.Rm');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Rm(buffer_arg) {
  return sliverpb_sliver_pb.Rm.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RmReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RmReq)) {
    throw new Error('Expected argument of type sliverpb.RmReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RmReq(buffer_arg) {
  return sliverpb_sliver_pb.RmReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RunAs(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RunAs)) {
    throw new Error('Expected argument of type sliverpb.RunAs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RunAs(buffer_arg) {
  return sliverpb_sliver_pb.RunAs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_RunAsReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.RunAsReq)) {
    throw new Error('Expected argument of type sliverpb.RunAsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_RunAsReq(buffer_arg) {
  return sliverpb_sliver_pb.RunAsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_SSHCommand(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.SSHCommand)) {
    throw new Error('Expected argument of type sliverpb.SSHCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_SSHCommand(buffer_arg) {
  return sliverpb_sliver_pb.SSHCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_SSHCommandReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.SSHCommandReq)) {
    throw new Error('Expected argument of type sliverpb.SSHCommandReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_SSHCommandReq(buffer_arg) {
  return sliverpb_sliver_pb.SSHCommandReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Screenshot(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Screenshot)) {
    throw new Error('Expected argument of type sliverpb.Screenshot');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Screenshot(buffer_arg) {
  return sliverpb_sliver_pb.Screenshot.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ScreenshotReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ScreenshotReq)) {
    throw new Error('Expected argument of type sliverpb.ScreenshotReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ScreenshotReq(buffer_arg) {
  return sliverpb_sliver_pb.ScreenshotReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ServiceInfo(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ServiceInfo)) {
    throw new Error('Expected argument of type sliverpb.ServiceInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ServiceInfo(buffer_arg) {
  return sliverpb_sliver_pb.ServiceInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_SetEnv(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.SetEnv)) {
    throw new Error('Expected argument of type sliverpb.SetEnv');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_SetEnv(buffer_arg) {
  return sliverpb_sliver_pb.SetEnv.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_SetEnvReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.SetEnvReq)) {
    throw new Error('Expected argument of type sliverpb.SetEnvReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_SetEnvReq(buffer_arg) {
  return sliverpb_sliver_pb.SetEnvReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Shell(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Shell)) {
    throw new Error('Expected argument of type sliverpb.Shell');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Shell(buffer_arg) {
  return sliverpb_sliver_pb.Shell.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_ShellReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.ShellReq)) {
    throw new Error('Expected argument of type sliverpb.ShellReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_ShellReq(buffer_arg) {
  return sliverpb_sliver_pb.ShellReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Sideload(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Sideload)) {
    throw new Error('Expected argument of type sliverpb.Sideload');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Sideload(buffer_arg) {
  return sliverpb_sliver_pb.Sideload.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_SideloadReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.SideloadReq)) {
    throw new Error('Expected argument of type sliverpb.SideloadReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_SideloadReq(buffer_arg) {
  return sliverpb_sliver_pb.SideloadReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Socks(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Socks)) {
    throw new Error('Expected argument of type sliverpb.Socks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Socks(buffer_arg) {
  return sliverpb_sliver_pb.Socks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_SocksData(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.SocksData)) {
    throw new Error('Expected argument of type sliverpb.SocksData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_SocksData(buffer_arg) {
  return sliverpb_sliver_pb.SocksData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_SpawnDll(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.SpawnDll)) {
    throw new Error('Expected argument of type sliverpb.SpawnDll');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_SpawnDll(buffer_arg) {
  return sliverpb_sliver_pb.SpawnDll.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_StartServiceReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.StartServiceReq)) {
    throw new Error('Expected argument of type sliverpb.StartServiceReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_StartServiceReq(buffer_arg) {
  return sliverpb_sliver_pb.StartServiceReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_StopServiceReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.StopServiceReq)) {
    throw new Error('Expected argument of type sliverpb.StopServiceReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_StopServiceReq(buffer_arg) {
  return sliverpb_sliver_pb.StopServiceReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Task(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Task)) {
    throw new Error('Expected argument of type sliverpb.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Task(buffer_arg) {
  return sliverpb_sliver_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_TaskReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.TaskReq)) {
    throw new Error('Expected argument of type sliverpb.TaskReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_TaskReq(buffer_arg) {
  return sliverpb_sliver_pb.TaskReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Terminate(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Terminate)) {
    throw new Error('Expected argument of type sliverpb.Terminate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Terminate(buffer_arg) {
  return sliverpb_sliver_pb.Terminate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_TerminateReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.TerminateReq)) {
    throw new Error('Expected argument of type sliverpb.TerminateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_TerminateReq(buffer_arg) {
  return sliverpb_sliver_pb.TerminateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Tunnel(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Tunnel)) {
    throw new Error('Expected argument of type sliverpb.Tunnel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Tunnel(buffer_arg) {
  return sliverpb_sliver_pb.Tunnel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_TunnelData(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.TunnelData)) {
    throw new Error('Expected argument of type sliverpb.TunnelData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_TunnelData(buffer_arg) {
  return sliverpb_sliver_pb.TunnelData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_UnsetEnv(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.UnsetEnv)) {
    throw new Error('Expected argument of type sliverpb.UnsetEnv');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_UnsetEnv(buffer_arg) {
  return sliverpb_sliver_pb.UnsetEnv.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_UnsetEnvReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.UnsetEnvReq)) {
    throw new Error('Expected argument of type sliverpb.UnsetEnvReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_UnsetEnvReq(buffer_arg) {
  return sliverpb_sliver_pb.UnsetEnvReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_Upload(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.Upload)) {
    throw new Error('Expected argument of type sliverpb.Upload');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_Upload(buffer_arg) {
  return sliverpb_sliver_pb.Upload.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_UploadReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.UploadReq)) {
    throw new Error('Expected argument of type sliverpb.UploadReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_UploadReq(buffer_arg) {
  return sliverpb_sliver_pb.UploadReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_WGPortForward(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.WGPortForward)) {
    throw new Error('Expected argument of type sliverpb.WGPortForward');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_WGPortForward(buffer_arg) {
  return sliverpb_sliver_pb.WGPortForward.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_WGPortForwardStartReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.WGPortForwardStartReq)) {
    throw new Error('Expected argument of type sliverpb.WGPortForwardStartReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_WGPortForwardStartReq(buffer_arg) {
  return sliverpb_sliver_pb.WGPortForwardStartReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_WGPortForwardStopReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.WGPortForwardStopReq)) {
    throw new Error('Expected argument of type sliverpb.WGPortForwardStopReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_WGPortForwardStopReq(buffer_arg) {
  return sliverpb_sliver_pb.WGPortForwardStopReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_WGSocks(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.WGSocks)) {
    throw new Error('Expected argument of type sliverpb.WGSocks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_WGSocks(buffer_arg) {
  return sliverpb_sliver_pb.WGSocks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_WGSocksServers(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.WGSocksServers)) {
    throw new Error('Expected argument of type sliverpb.WGSocksServers');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_WGSocksServers(buffer_arg) {
  return sliverpb_sliver_pb.WGSocksServers.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_WGSocksServersReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.WGSocksServersReq)) {
    throw new Error('Expected argument of type sliverpb.WGSocksServersReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_WGSocksServersReq(buffer_arg) {
  return sliverpb_sliver_pb.WGSocksServersReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_WGSocksStartReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.WGSocksStartReq)) {
    throw new Error('Expected argument of type sliverpb.WGSocksStartReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_WGSocksStartReq(buffer_arg) {
  return sliverpb_sliver_pb.WGSocksStartReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_WGSocksStopReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.WGSocksStopReq)) {
    throw new Error('Expected argument of type sliverpb.WGSocksStopReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_WGSocksStopReq(buffer_arg) {
  return sliverpb_sliver_pb.WGSocksStopReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_WGTCPForwarders(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.WGTCPForwarders)) {
    throw new Error('Expected argument of type sliverpb.WGTCPForwarders');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_WGTCPForwarders(buffer_arg) {
  return sliverpb_sliver_pb.WGTCPForwarders.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sliverpb_WGTCPForwardersReq(arg) {
  if (!(arg instanceof sliverpb_sliver_pb.WGTCPForwardersReq)) {
    throw new Error('Expected argument of type sliverpb.WGTCPForwardersReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sliverpb_WGTCPForwardersReq(buffer_arg) {
  return sliverpb_sliver_pb.WGTCPForwardersReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var SliverRPCService = exports.SliverRPCService = {
  // *** Version ***
getVersion: {
    path: '/rpcpb.SliverRPC/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.Version,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_Version,
    responseDeserialize: deserialize_clientpb_Version,
  },
  // *** Operator Commands *** 
getOperators: {
    path: '/rpcpb.SliverRPC/GetOperators',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.Operators,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_Operators,
    responseDeserialize: deserialize_clientpb_Operators,
  },
  // *** Generic ***
kill: {
    path: '/rpcpb.SliverRPC/Kill',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.KillReq,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_sliverpb_KillReq,
    requestDeserialize: deserialize_sliverpb_KillReq,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  reconfigure: {
    path: '/rpcpb.SliverRPC/Reconfigure',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.ReconfigureReq,
    responseType: sliverpb_sliver_pb.Reconfigure,
    requestSerialize: serialize_sliverpb_ReconfigureReq,
    requestDeserialize: deserialize_sliverpb_ReconfigureReq,
    responseSerialize: serialize_sliverpb_Reconfigure,
    responseDeserialize: deserialize_sliverpb_Reconfigure,
  },
  rename: {
    path: '/rpcpb.SliverRPC/Rename',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.RenameReq,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_clientpb_RenameReq,
    requestDeserialize: deserialize_clientpb_RenameReq,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  // *** Sessions ***
getSessions: {
    path: '/rpcpb.SliverRPC/GetSessions',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.Sessions,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_Sessions,
    responseDeserialize: deserialize_clientpb_Sessions,
  },
  // *** Beacons ***
getBeacons: {
    path: '/rpcpb.SliverRPC/GetBeacons',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.Beacons,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_Beacons,
    responseDeserialize: deserialize_clientpb_Beacons,
  },
  getBeacon: {
    path: '/rpcpb.SliverRPC/GetBeacon',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Beacon,
    responseType: clientpb_client_pb.Beacon,
    requestSerialize: serialize_clientpb_Beacon,
    requestDeserialize: deserialize_clientpb_Beacon,
    responseSerialize: serialize_clientpb_Beacon,
    responseDeserialize: deserialize_clientpb_Beacon,
  },
  rmBeacon: {
    path: '/rpcpb.SliverRPC/RmBeacon',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Beacon,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_clientpb_Beacon,
    requestDeserialize: deserialize_clientpb_Beacon,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  getBeaconTasks: {
    path: '/rpcpb.SliverRPC/GetBeaconTasks',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Beacon,
    responseType: clientpb_client_pb.BeaconTasks,
    requestSerialize: serialize_clientpb_Beacon,
    requestDeserialize: deserialize_clientpb_Beacon,
    responseSerialize: serialize_clientpb_BeaconTasks,
    responseDeserialize: deserialize_clientpb_BeaconTasks,
  },
  getBeaconTaskContent: {
    path: '/rpcpb.SliverRPC/GetBeaconTaskContent',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.BeaconTask,
    responseType: clientpb_client_pb.BeaconTask,
    requestSerialize: serialize_clientpb_BeaconTask,
    requestDeserialize: deserialize_clientpb_BeaconTask,
    responseSerialize: serialize_clientpb_BeaconTask,
    responseDeserialize: deserialize_clientpb_BeaconTask,
  },
  cancelBeaconTask: {
    path: '/rpcpb.SliverRPC/CancelBeaconTask',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.BeaconTask,
    responseType: clientpb_client_pb.BeaconTask,
    requestSerialize: serialize_clientpb_BeaconTask,
    requestDeserialize: deserialize_clientpb_BeaconTask,
    responseSerialize: serialize_clientpb_BeaconTask,
    responseDeserialize: deserialize_clientpb_BeaconTask,
  },
  // ***Threat monitoring ***
monitorStart: {
    path: '/rpcpb.SliverRPC/MonitorStart',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: commonpb_common_pb.Response,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_commonpb_Response,
    responseDeserialize: deserialize_commonpb_Response,
  },
  monitorStop: {
    path: '/rpcpb.SliverRPC/MonitorStop',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  // *** Jobs ***
getJobs: {
    path: '/rpcpb.SliverRPC/GetJobs',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.Jobs,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_Jobs,
    responseDeserialize: deserialize_clientpb_Jobs,
  },
  killJob: {
    path: '/rpcpb.SliverRPC/KillJob',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.KillJobReq,
    responseType: clientpb_client_pb.KillJob,
    requestSerialize: serialize_clientpb_KillJobReq,
    requestDeserialize: deserialize_clientpb_KillJobReq,
    responseSerialize: serialize_clientpb_KillJob,
    responseDeserialize: deserialize_clientpb_KillJob,
  },
  // *** Listeners ***
startMTLSListener: {
    path: '/rpcpb.SliverRPC/StartMTLSListener',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.MTLSListenerReq,
    responseType: clientpb_client_pb.MTLSListener,
    requestSerialize: serialize_clientpb_MTLSListenerReq,
    requestDeserialize: deserialize_clientpb_MTLSListenerReq,
    responseSerialize: serialize_clientpb_MTLSListener,
    responseDeserialize: deserialize_clientpb_MTLSListener,
  },
  startWGListener: {
    path: '/rpcpb.SliverRPC/StartWGListener',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.WGListenerReq,
    responseType: clientpb_client_pb.WGListener,
    requestSerialize: serialize_clientpb_WGListenerReq,
    requestDeserialize: deserialize_clientpb_WGListenerReq,
    responseSerialize: serialize_clientpb_WGListener,
    responseDeserialize: deserialize_clientpb_WGListener,
  },
  startDNSListener: {
    path: '/rpcpb.SliverRPC/StartDNSListener',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.DNSListenerReq,
    responseType: clientpb_client_pb.DNSListener,
    requestSerialize: serialize_clientpb_DNSListenerReq,
    requestDeserialize: deserialize_clientpb_DNSListenerReq,
    responseSerialize: serialize_clientpb_DNSListener,
    responseDeserialize: deserialize_clientpb_DNSListener,
  },
  startHTTPSListener: {
    path: '/rpcpb.SliverRPC/StartHTTPSListener',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.HTTPListenerReq,
    responseType: clientpb_client_pb.HTTPListener,
    requestSerialize: serialize_clientpb_HTTPListenerReq,
    requestDeserialize: deserialize_clientpb_HTTPListenerReq,
    responseSerialize: serialize_clientpb_HTTPListener,
    responseDeserialize: deserialize_clientpb_HTTPListener,
  },
  startHTTPListener: {
    path: '/rpcpb.SliverRPC/StartHTTPListener',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.HTTPListenerReq,
    responseType: clientpb_client_pb.HTTPListener,
    requestSerialize: serialize_clientpb_HTTPListenerReq,
    requestDeserialize: deserialize_clientpb_HTTPListenerReq,
    responseSerialize: serialize_clientpb_HTTPListener,
    responseDeserialize: deserialize_clientpb_HTTPListener,
  },
  // *** Stager Listener ***
startTCPStagerListener: {
    path: '/rpcpb.SliverRPC/StartTCPStagerListener',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.StagerListenerReq,
    responseType: clientpb_client_pb.StagerListener,
    requestSerialize: serialize_clientpb_StagerListenerReq,
    requestDeserialize: deserialize_clientpb_StagerListenerReq,
    responseSerialize: serialize_clientpb_StagerListener,
    responseDeserialize: deserialize_clientpb_StagerListener,
  },
  startHTTPStagerListener: {
    path: '/rpcpb.SliverRPC/StartHTTPStagerListener',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.StagerListenerReq,
    responseType: clientpb_client_pb.StagerListener,
    requestSerialize: serialize_clientpb_StagerListenerReq,
    requestDeserialize: deserialize_clientpb_StagerListenerReq,
    responseSerialize: serialize_clientpb_StagerListener,
    responseDeserialize: deserialize_clientpb_StagerListener,
  },
  // *** Loot ***
lootAdd: {
    path: '/rpcpb.SliverRPC/LootAdd',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Loot,
    responseType: clientpb_client_pb.Loot,
    requestSerialize: serialize_clientpb_Loot,
    requestDeserialize: deserialize_clientpb_Loot,
    responseSerialize: serialize_clientpb_Loot,
    responseDeserialize: deserialize_clientpb_Loot,
  },
  lootRm: {
    path: '/rpcpb.SliverRPC/LootRm',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Loot,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_clientpb_Loot,
    requestDeserialize: deserialize_clientpb_Loot,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  lootUpdate: {
    path: '/rpcpb.SliverRPC/LootUpdate',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Loot,
    responseType: clientpb_client_pb.Loot,
    requestSerialize: serialize_clientpb_Loot,
    requestDeserialize: deserialize_clientpb_Loot,
    responseSerialize: serialize_clientpb_Loot,
    responseDeserialize: deserialize_clientpb_Loot,
  },
  lootContent: {
    path: '/rpcpb.SliverRPC/LootContent',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Loot,
    responseType: clientpb_client_pb.Loot,
    requestSerialize: serialize_clientpb_Loot,
    requestDeserialize: deserialize_clientpb_Loot,
    responseSerialize: serialize_clientpb_Loot,
    responseDeserialize: deserialize_clientpb_Loot,
  },
  lootAll: {
    path: '/rpcpb.SliverRPC/LootAll',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.AllLoot,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_AllLoot,
    responseDeserialize: deserialize_clientpb_AllLoot,
  },
  lootAllOf: {
    path: '/rpcpb.SliverRPC/LootAllOf',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Loot,
    responseType: clientpb_client_pb.AllLoot,
    requestSerialize: serialize_clientpb_Loot,
    requestDeserialize: deserialize_clientpb_Loot,
    responseSerialize: serialize_clientpb_AllLoot,
    responseDeserialize: deserialize_clientpb_AllLoot,
  },
  // *** Hosts ***
hosts: {
    path: '/rpcpb.SliverRPC/Hosts',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.AllHosts,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_AllHosts,
    responseDeserialize: deserialize_clientpb_AllHosts,
  },
  host: {
    path: '/rpcpb.SliverRPC/Host',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Host,
    responseType: clientpb_client_pb.Host,
    requestSerialize: serialize_clientpb_Host,
    requestDeserialize: deserialize_clientpb_Host,
    responseSerialize: serialize_clientpb_Host,
    responseDeserialize: deserialize_clientpb_Host,
  },
  hostRm: {
    path: '/rpcpb.SliverRPC/HostRm',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Host,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_clientpb_Host,
    requestDeserialize: deserialize_clientpb_Host,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  hostIOCRm: {
    path: '/rpcpb.SliverRPC/HostIOCRm',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.IOC,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_clientpb_IOC,
    requestDeserialize: deserialize_clientpb_IOC,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  // *** Implants ***
generate: {
    path: '/rpcpb.SliverRPC/Generate',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.GenerateReq,
    responseType: clientpb_client_pb.Generate,
    requestSerialize: serialize_clientpb_GenerateReq,
    requestDeserialize: deserialize_clientpb_GenerateReq,
    responseSerialize: serialize_clientpb_Generate,
    responseDeserialize: deserialize_clientpb_Generate,
  },
  regenerate: {
    path: '/rpcpb.SliverRPC/Regenerate',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.RegenerateReq,
    responseType: clientpb_client_pb.Generate,
    requestSerialize: serialize_clientpb_RegenerateReq,
    requestDeserialize: deserialize_clientpb_RegenerateReq,
    responseSerialize: serialize_clientpb_Generate,
    responseDeserialize: deserialize_clientpb_Generate,
  },
  implantBuilds: {
    path: '/rpcpb.SliverRPC/ImplantBuilds',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.ImplantBuilds,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_ImplantBuilds,
    responseDeserialize: deserialize_clientpb_ImplantBuilds,
  },
  deleteImplantBuild: {
    path: '/rpcpb.SliverRPC/DeleteImplantBuild',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.DeleteReq,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_clientpb_DeleteReq,
    requestDeserialize: deserialize_clientpb_DeleteReq,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  canaries: {
    path: '/rpcpb.SliverRPC/Canaries',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.Canaries,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_Canaries,
    responseDeserialize: deserialize_clientpb_Canaries,
  },
  generateWGClientConfig: {
    path: '/rpcpb.SliverRPC/GenerateWGClientConfig',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.WGClientConfig,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_WGClientConfig,
    responseDeserialize: deserialize_clientpb_WGClientConfig,
  },
  generateUniqueIP: {
    path: '/rpcpb.SliverRPC/GenerateUniqueIP',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.UniqueWGIP,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_UniqueWGIP,
    responseDeserialize: deserialize_clientpb_UniqueWGIP,
  },
  implantProfiles: {
    path: '/rpcpb.SliverRPC/ImplantProfiles',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.ImplantProfiles,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_ImplantProfiles,
    responseDeserialize: deserialize_clientpb_ImplantProfiles,
  },
  deleteImplantProfile: {
    path: '/rpcpb.SliverRPC/DeleteImplantProfile',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.DeleteReq,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_clientpb_DeleteReq,
    requestDeserialize: deserialize_clientpb_DeleteReq,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  saveImplantProfile: {
    path: '/rpcpb.SliverRPC/SaveImplantProfile',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.ImplantProfile,
    responseType: clientpb_client_pb.ImplantProfile,
    requestSerialize: serialize_clientpb_ImplantProfile,
    requestDeserialize: deserialize_clientpb_ImplantProfile,
    responseSerialize: serialize_clientpb_ImplantProfile,
    responseDeserialize: deserialize_clientpb_ImplantProfile,
  },
  msfStage: {
    path: '/rpcpb.SliverRPC/MsfStage',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.MsfStagerReq,
    responseType: clientpb_client_pb.MsfStager,
    requestSerialize: serialize_clientpb_MsfStagerReq,
    requestDeserialize: deserialize_clientpb_MsfStagerReq,
    responseSerialize: serialize_clientpb_MsfStager,
    responseDeserialize: deserialize_clientpb_MsfStager,
  },
  shellcodeRDI: {
    path: '/rpcpb.SliverRPC/ShellcodeRDI',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.ShellcodeRDIReq,
    responseType: clientpb_client_pb.ShellcodeRDI,
    requestSerialize: serialize_clientpb_ShellcodeRDIReq,
    requestDeserialize: deserialize_clientpb_ShellcodeRDIReq,
    responseSerialize: serialize_clientpb_ShellcodeRDI,
    responseDeserialize: deserialize_clientpb_ShellcodeRDI,
  },
  getCompiler: {
    path: '/rpcpb.SliverRPC/GetCompiler',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.Compiler,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_Compiler,
    responseDeserialize: deserialize_clientpb_Compiler,
  },
  shellcodeEncoder: {
    path: '/rpcpb.SliverRPC/ShellcodeEncoder',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.ShellcodeEncodeReq,
    responseType: clientpb_client_pb.ShellcodeEncode,
    requestSerialize: serialize_clientpb_ShellcodeEncodeReq,
    requestDeserialize: deserialize_clientpb_ShellcodeEncodeReq,
    responseSerialize: serialize_clientpb_ShellcodeEncode,
    responseDeserialize: deserialize_clientpb_ShellcodeEncode,
  },
  shellcodeEncoderMap: {
    path: '/rpcpb.SliverRPC/ShellcodeEncoderMap',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.ShellcodeEncoderMap,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_ShellcodeEncoderMap,
    responseDeserialize: deserialize_clientpb_ShellcodeEncoderMap,
  },
  // *** Websites ***
websites: {
    path: '/rpcpb.SliverRPC/Websites',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.Websites,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_Websites,
    responseDeserialize: deserialize_clientpb_Websites,
  },
  website: {
    path: '/rpcpb.SliverRPC/Website',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Website,
    responseType: clientpb_client_pb.Website,
    requestSerialize: serialize_clientpb_Website,
    requestDeserialize: deserialize_clientpb_Website,
    responseSerialize: serialize_clientpb_Website,
    responseDeserialize: deserialize_clientpb_Website,
  },
  websiteRemove: {
    path: '/rpcpb.SliverRPC/WebsiteRemove',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.Website,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_clientpb_Website,
    requestDeserialize: deserialize_clientpb_Website,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  websiteAddContent: {
    path: '/rpcpb.SliverRPC/WebsiteAddContent',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.WebsiteAddContent,
    responseType: clientpb_client_pb.Website,
    requestSerialize: serialize_clientpb_WebsiteAddContent,
    requestDeserialize: deserialize_clientpb_WebsiteAddContent,
    responseSerialize: serialize_clientpb_Website,
    responseDeserialize: deserialize_clientpb_Website,
  },
  websiteUpdateContent: {
    path: '/rpcpb.SliverRPC/WebsiteUpdateContent',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.WebsiteAddContent,
    responseType: clientpb_client_pb.Website,
    requestSerialize: serialize_clientpb_WebsiteAddContent,
    requestDeserialize: deserialize_clientpb_WebsiteAddContent,
    responseSerialize: serialize_clientpb_Website,
    responseDeserialize: deserialize_clientpb_Website,
  },
  websiteRemoveContent: {
    path: '/rpcpb.SliverRPC/WebsiteRemoveContent',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.WebsiteRemoveContent,
    responseType: clientpb_client_pb.Website,
    requestSerialize: serialize_clientpb_WebsiteRemoveContent,
    requestDeserialize: deserialize_clientpb_WebsiteRemoveContent,
    responseSerialize: serialize_clientpb_Website,
    responseDeserialize: deserialize_clientpb_Website,
  },
  // *** Session Interactions ***
ping: {
    path: '/rpcpb.SliverRPC/Ping',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.Ping,
    responseType: sliverpb_sliver_pb.Ping,
    requestSerialize: serialize_sliverpb_Ping,
    requestDeserialize: deserialize_sliverpb_Ping,
    responseSerialize: serialize_sliverpb_Ping,
    responseDeserialize: deserialize_sliverpb_Ping,
  },
  ps: {
    path: '/rpcpb.SliverRPC/Ps',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.PsReq,
    responseType: sliverpb_sliver_pb.Ps,
    requestSerialize: serialize_sliverpb_PsReq,
    requestDeserialize: deserialize_sliverpb_PsReq,
    responseSerialize: serialize_sliverpb_Ps,
    responseDeserialize: deserialize_sliverpb_Ps,
  },
  terminate: {
    path: '/rpcpb.SliverRPC/Terminate',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.TerminateReq,
    responseType: sliverpb_sliver_pb.Terminate,
    requestSerialize: serialize_sliverpb_TerminateReq,
    requestDeserialize: deserialize_sliverpb_TerminateReq,
    responseSerialize: serialize_sliverpb_Terminate,
    responseDeserialize: deserialize_sliverpb_Terminate,
  },
  ifconfig: {
    path: '/rpcpb.SliverRPC/Ifconfig',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.IfconfigReq,
    responseType: sliverpb_sliver_pb.Ifconfig,
    requestSerialize: serialize_sliverpb_IfconfigReq,
    requestDeserialize: deserialize_sliverpb_IfconfigReq,
    responseSerialize: serialize_sliverpb_Ifconfig,
    responseDeserialize: deserialize_sliverpb_Ifconfig,
  },
  netstat: {
    path: '/rpcpb.SliverRPC/Netstat',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.NetstatReq,
    responseType: sliverpb_sliver_pb.Netstat,
    requestSerialize: serialize_sliverpb_NetstatReq,
    requestDeserialize: deserialize_sliverpb_NetstatReq,
    responseSerialize: serialize_sliverpb_Netstat,
    responseDeserialize: deserialize_sliverpb_Netstat,
  },
  ls: {
    path: '/rpcpb.SliverRPC/Ls',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.LsReq,
    responseType: sliverpb_sliver_pb.Ls,
    requestSerialize: serialize_sliverpb_LsReq,
    requestDeserialize: deserialize_sliverpb_LsReq,
    responseSerialize: serialize_sliverpb_Ls,
    responseDeserialize: deserialize_sliverpb_Ls,
  },
  cd: {
    path: '/rpcpb.SliverRPC/Cd',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.CdReq,
    responseType: sliverpb_sliver_pb.Pwd,
    requestSerialize: serialize_sliverpb_CdReq,
    requestDeserialize: deserialize_sliverpb_CdReq,
    responseSerialize: serialize_sliverpb_Pwd,
    responseDeserialize: deserialize_sliverpb_Pwd,
  },
  pwd: {
    path: '/rpcpb.SliverRPC/Pwd',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.PwdReq,
    responseType: sliverpb_sliver_pb.Pwd,
    requestSerialize: serialize_sliverpb_PwdReq,
    requestDeserialize: deserialize_sliverpb_PwdReq,
    responseSerialize: serialize_sliverpb_Pwd,
    responseDeserialize: deserialize_sliverpb_Pwd,
  },
  mv: {
    path: '/rpcpb.SliverRPC/Mv',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.MvReq,
    responseType: sliverpb_sliver_pb.Mv,
    requestSerialize: serialize_sliverpb_MvReq,
    requestDeserialize: deserialize_sliverpb_MvReq,
    responseSerialize: serialize_sliverpb_Mv,
    responseDeserialize: deserialize_sliverpb_Mv,
  },
  rm: {
    path: '/rpcpb.SliverRPC/Rm',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.RmReq,
    responseType: sliverpb_sliver_pb.Rm,
    requestSerialize: serialize_sliverpb_RmReq,
    requestDeserialize: deserialize_sliverpb_RmReq,
    responseSerialize: serialize_sliverpb_Rm,
    responseDeserialize: deserialize_sliverpb_Rm,
  },
  mkdir: {
    path: '/rpcpb.SliverRPC/Mkdir',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.MkdirReq,
    responseType: sliverpb_sliver_pb.Mkdir,
    requestSerialize: serialize_sliverpb_MkdirReq,
    requestDeserialize: deserialize_sliverpb_MkdirReq,
    responseSerialize: serialize_sliverpb_Mkdir,
    responseDeserialize: deserialize_sliverpb_Mkdir,
  },
  download: {
    path: '/rpcpb.SliverRPC/Download',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.DownloadReq,
    responseType: sliverpb_sliver_pb.Download,
    requestSerialize: serialize_sliverpb_DownloadReq,
    requestDeserialize: deserialize_sliverpb_DownloadReq,
    responseSerialize: serialize_sliverpb_Download,
    responseDeserialize: deserialize_sliverpb_Download,
  },
  upload: {
    path: '/rpcpb.SliverRPC/Upload',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.UploadReq,
    responseType: sliverpb_sliver_pb.Upload,
    requestSerialize: serialize_sliverpb_UploadReq,
    requestDeserialize: deserialize_sliverpb_UploadReq,
    responseSerialize: serialize_sliverpb_Upload,
    responseDeserialize: deserialize_sliverpb_Upload,
  },
  processDump: {
    path: '/rpcpb.SliverRPC/ProcessDump',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.ProcessDumpReq,
    responseType: sliverpb_sliver_pb.ProcessDump,
    requestSerialize: serialize_sliverpb_ProcessDumpReq,
    requestDeserialize: deserialize_sliverpb_ProcessDumpReq,
    responseSerialize: serialize_sliverpb_ProcessDump,
    responseDeserialize: deserialize_sliverpb_ProcessDump,
  },
  runAs: {
    path: '/rpcpb.SliverRPC/RunAs',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.RunAsReq,
    responseType: sliverpb_sliver_pb.RunAs,
    requestSerialize: serialize_sliverpb_RunAsReq,
    requestDeserialize: deserialize_sliverpb_RunAsReq,
    responseSerialize: serialize_sliverpb_RunAs,
    responseDeserialize: deserialize_sliverpb_RunAs,
  },
  impersonate: {
    path: '/rpcpb.SliverRPC/Impersonate',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.ImpersonateReq,
    responseType: sliverpb_sliver_pb.Impersonate,
    requestSerialize: serialize_sliverpb_ImpersonateReq,
    requestDeserialize: deserialize_sliverpb_ImpersonateReq,
    responseSerialize: serialize_sliverpb_Impersonate,
    responseDeserialize: deserialize_sliverpb_Impersonate,
  },
  revToSelf: {
    path: '/rpcpb.SliverRPC/RevToSelf',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.RevToSelfReq,
    responseType: sliverpb_sliver_pb.RevToSelf,
    requestSerialize: serialize_sliverpb_RevToSelfReq,
    requestDeserialize: deserialize_sliverpb_RevToSelfReq,
    responseSerialize: serialize_sliverpb_RevToSelf,
    responseDeserialize: deserialize_sliverpb_RevToSelf,
  },
  getSystem: {
    path: '/rpcpb.SliverRPC/GetSystem',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.GetSystemReq,
    responseType: sliverpb_sliver_pb.GetSystem,
    requestSerialize: serialize_clientpb_GetSystemReq,
    requestDeserialize: deserialize_clientpb_GetSystemReq,
    responseSerialize: serialize_sliverpb_GetSystem,
    responseDeserialize: deserialize_sliverpb_GetSystem,
  },
  task: {
    path: '/rpcpb.SliverRPC/Task',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.TaskReq,
    responseType: sliverpb_sliver_pb.Task,
    requestSerialize: serialize_sliverpb_TaskReq,
    requestDeserialize: deserialize_sliverpb_TaskReq,
    responseSerialize: serialize_sliverpb_Task,
    responseDeserialize: deserialize_sliverpb_Task,
  },
  msf: {
    path: '/rpcpb.SliverRPC/Msf',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.MSFReq,
    responseType: sliverpb_sliver_pb.Task,
    requestSerialize: serialize_clientpb_MSFReq,
    requestDeserialize: deserialize_clientpb_MSFReq,
    responseSerialize: serialize_sliverpb_Task,
    responseDeserialize: deserialize_sliverpb_Task,
  },
  msfRemote: {
    path: '/rpcpb.SliverRPC/MsfRemote',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.MSFRemoteReq,
    responseType: sliverpb_sliver_pb.Task,
    requestSerialize: serialize_clientpb_MSFRemoteReq,
    requestDeserialize: deserialize_clientpb_MSFRemoteReq,
    responseSerialize: serialize_sliverpb_Task,
    responseDeserialize: deserialize_sliverpb_Task,
  },
  executeAssembly: {
    path: '/rpcpb.SliverRPC/ExecuteAssembly',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.ExecuteAssemblyReq,
    responseType: sliverpb_sliver_pb.ExecuteAssembly,
    requestSerialize: serialize_sliverpb_ExecuteAssemblyReq,
    requestDeserialize: deserialize_sliverpb_ExecuteAssemblyReq,
    responseSerialize: serialize_sliverpb_ExecuteAssembly,
    responseDeserialize: deserialize_sliverpb_ExecuteAssembly,
  },
  migrate: {
    path: '/rpcpb.SliverRPC/Migrate',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.MigrateReq,
    responseType: sliverpb_sliver_pb.Migrate,
    requestSerialize: serialize_clientpb_MigrateReq,
    requestDeserialize: deserialize_clientpb_MigrateReq,
    responseSerialize: serialize_sliverpb_Migrate,
    responseDeserialize: deserialize_sliverpb_Migrate,
  },
  execute: {
    path: '/rpcpb.SliverRPC/Execute',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.ExecuteReq,
    responseType: sliverpb_sliver_pb.Execute,
    requestSerialize: serialize_sliverpb_ExecuteReq,
    requestDeserialize: deserialize_sliverpb_ExecuteReq,
    responseSerialize: serialize_sliverpb_Execute,
    responseDeserialize: deserialize_sliverpb_Execute,
  },
  executeWindows: {
    path: '/rpcpb.SliverRPC/ExecuteWindows',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.ExecuteWindowsReq,
    responseType: sliverpb_sliver_pb.Execute,
    requestSerialize: serialize_sliverpb_ExecuteWindowsReq,
    requestDeserialize: deserialize_sliverpb_ExecuteWindowsReq,
    responseSerialize: serialize_sliverpb_Execute,
    responseDeserialize: deserialize_sliverpb_Execute,
  },
  sideload: {
    path: '/rpcpb.SliverRPC/Sideload',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.SideloadReq,
    responseType: sliverpb_sliver_pb.Sideload,
    requestSerialize: serialize_sliverpb_SideloadReq,
    requestDeserialize: deserialize_sliverpb_SideloadReq,
    responseSerialize: serialize_sliverpb_Sideload,
    responseDeserialize: deserialize_sliverpb_Sideload,
  },
  spawnDll: {
    path: '/rpcpb.SliverRPC/SpawnDll',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.InvokeSpawnDllReq,
    responseType: sliverpb_sliver_pb.SpawnDll,
    requestSerialize: serialize_sliverpb_InvokeSpawnDllReq,
    requestDeserialize: deserialize_sliverpb_InvokeSpawnDllReq,
    responseSerialize: serialize_sliverpb_SpawnDll,
    responseDeserialize: deserialize_sliverpb_SpawnDll,
  },
  screenshot: {
    path: '/rpcpb.SliverRPC/Screenshot',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.ScreenshotReq,
    responseType: sliverpb_sliver_pb.Screenshot,
    requestSerialize: serialize_sliverpb_ScreenshotReq,
    requestDeserialize: deserialize_sliverpb_ScreenshotReq,
    responseSerialize: serialize_sliverpb_Screenshot,
    responseDeserialize: deserialize_sliverpb_Screenshot,
  },
  currentTokenOwner: {
    path: '/rpcpb.SliverRPC/CurrentTokenOwner',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.CurrentTokenOwnerReq,
    responseType: sliverpb_sliver_pb.CurrentTokenOwner,
    requestSerialize: serialize_sliverpb_CurrentTokenOwnerReq,
    requestDeserialize: deserialize_sliverpb_CurrentTokenOwnerReq,
    responseSerialize: serialize_sliverpb_CurrentTokenOwner,
    responseDeserialize: deserialize_sliverpb_CurrentTokenOwner,
  },
  // *** Pivots ***
pivotStartListener: {
    path: '/rpcpb.SliverRPC/PivotStartListener',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.PivotStartListenerReq,
    responseType: sliverpb_sliver_pb.PivotListener,
    requestSerialize: serialize_sliverpb_PivotStartListenerReq,
    requestDeserialize: deserialize_sliverpb_PivotStartListenerReq,
    responseSerialize: serialize_sliverpb_PivotListener,
    responseDeserialize: deserialize_sliverpb_PivotListener,
  },
  pivotStopListener: {
    path: '/rpcpb.SliverRPC/PivotStopListener',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.PivotStopListenerReq,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_sliverpb_PivotStopListenerReq,
    requestDeserialize: deserialize_sliverpb_PivotStopListenerReq,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  pivotSessionListeners: {
    path: '/rpcpb.SliverRPC/PivotSessionListeners',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.PivotListenersReq,
    responseType: sliverpb_sliver_pb.PivotListeners,
    requestSerialize: serialize_sliverpb_PivotListenersReq,
    requestDeserialize: deserialize_sliverpb_PivotListenersReq,
    responseSerialize: serialize_sliverpb_PivotListeners,
    responseDeserialize: deserialize_sliverpb_PivotListeners,
  },
  pivotGraph: {
    path: '/rpcpb.SliverRPC/PivotGraph',
    requestStream: false,
    responseStream: false,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.PivotGraph,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_PivotGraph,
    responseDeserialize: deserialize_clientpb_PivotGraph,
  },
  startService: {
    path: '/rpcpb.SliverRPC/StartService',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.StartServiceReq,
    responseType: sliverpb_sliver_pb.ServiceInfo,
    requestSerialize: serialize_sliverpb_StartServiceReq,
    requestDeserialize: deserialize_sliverpb_StartServiceReq,
    responseSerialize: serialize_sliverpb_ServiceInfo,
    responseDeserialize: deserialize_sliverpb_ServiceInfo,
  },
  stopService: {
    path: '/rpcpb.SliverRPC/StopService',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.StopServiceReq,
    responseType: sliverpb_sliver_pb.ServiceInfo,
    requestSerialize: serialize_sliverpb_StopServiceReq,
    requestDeserialize: deserialize_sliverpb_StopServiceReq,
    responseSerialize: serialize_sliverpb_ServiceInfo,
    responseDeserialize: deserialize_sliverpb_ServiceInfo,
  },
  removeService: {
    path: '/rpcpb.SliverRPC/RemoveService',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.RemoveServiceReq,
    responseType: sliverpb_sliver_pb.ServiceInfo,
    requestSerialize: serialize_sliverpb_RemoveServiceReq,
    requestDeserialize: deserialize_sliverpb_RemoveServiceReq,
    responseSerialize: serialize_sliverpb_ServiceInfo,
    responseDeserialize: deserialize_sliverpb_ServiceInfo,
  },
  makeToken: {
    path: '/rpcpb.SliverRPC/MakeToken',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.MakeTokenReq,
    responseType: sliverpb_sliver_pb.MakeToken,
    requestSerialize: serialize_sliverpb_MakeTokenReq,
    requestDeserialize: deserialize_sliverpb_MakeTokenReq,
    responseSerialize: serialize_sliverpb_MakeToken,
    responseDeserialize: deserialize_sliverpb_MakeToken,
  },
  getEnv: {
    path: '/rpcpb.SliverRPC/GetEnv',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.EnvReq,
    responseType: sliverpb_sliver_pb.EnvInfo,
    requestSerialize: serialize_sliverpb_EnvReq,
    requestDeserialize: deserialize_sliverpb_EnvReq,
    responseSerialize: serialize_sliverpb_EnvInfo,
    responseDeserialize: deserialize_sliverpb_EnvInfo,
  },
  setEnv: {
    path: '/rpcpb.SliverRPC/SetEnv',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.SetEnvReq,
    responseType: sliverpb_sliver_pb.SetEnv,
    requestSerialize: serialize_sliverpb_SetEnvReq,
    requestDeserialize: deserialize_sliverpb_SetEnvReq,
    responseSerialize: serialize_sliverpb_SetEnv,
    responseDeserialize: deserialize_sliverpb_SetEnv,
  },
  unsetEnv: {
    path: '/rpcpb.SliverRPC/UnsetEnv',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.UnsetEnvReq,
    responseType: sliverpb_sliver_pb.UnsetEnv,
    requestSerialize: serialize_sliverpb_UnsetEnvReq,
    requestDeserialize: deserialize_sliverpb_UnsetEnvReq,
    responseSerialize: serialize_sliverpb_UnsetEnv,
    responseDeserialize: deserialize_sliverpb_UnsetEnv,
  },
  backdoor: {
    path: '/rpcpb.SliverRPC/Backdoor',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.BackdoorReq,
    responseType: sliverpb_sliver_pb.Backdoor,
    requestSerialize: serialize_sliverpb_BackdoorReq,
    requestDeserialize: deserialize_sliverpb_BackdoorReq,
    responseSerialize: serialize_sliverpb_Backdoor,
    responseDeserialize: deserialize_sliverpb_Backdoor,
  },
  registryRead: {
    path: '/rpcpb.SliverRPC/RegistryRead',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.RegistryReadReq,
    responseType: sliverpb_sliver_pb.RegistryRead,
    requestSerialize: serialize_sliverpb_RegistryReadReq,
    requestDeserialize: deserialize_sliverpb_RegistryReadReq,
    responseSerialize: serialize_sliverpb_RegistryRead,
    responseDeserialize: deserialize_sliverpb_RegistryRead,
  },
  registryWrite: {
    path: '/rpcpb.SliverRPC/RegistryWrite',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.RegistryWriteReq,
    responseType: sliverpb_sliver_pb.RegistryWrite,
    requestSerialize: serialize_sliverpb_RegistryWriteReq,
    requestDeserialize: deserialize_sliverpb_RegistryWriteReq,
    responseSerialize: serialize_sliverpb_RegistryWrite,
    responseDeserialize: deserialize_sliverpb_RegistryWrite,
  },
  registryCreateKey: {
    path: '/rpcpb.SliverRPC/RegistryCreateKey',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.RegistryCreateKeyReq,
    responseType: sliverpb_sliver_pb.RegistryCreateKey,
    requestSerialize: serialize_sliverpb_RegistryCreateKeyReq,
    requestDeserialize: deserialize_sliverpb_RegistryCreateKeyReq,
    responseSerialize: serialize_sliverpb_RegistryCreateKey,
    responseDeserialize: deserialize_sliverpb_RegistryCreateKey,
  },
  registryDeleteKey: {
    path: '/rpcpb.SliverRPC/RegistryDeleteKey',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.RegistryDeleteKeyReq,
    responseType: sliverpb_sliver_pb.RegistryDeleteKey,
    requestSerialize: serialize_sliverpb_RegistryDeleteKeyReq,
    requestDeserialize: deserialize_sliverpb_RegistryDeleteKeyReq,
    responseSerialize: serialize_sliverpb_RegistryDeleteKey,
    responseDeserialize: deserialize_sliverpb_RegistryDeleteKey,
  },
  registryListSubKeys: {
    path: '/rpcpb.SliverRPC/RegistryListSubKeys',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.RegistrySubKeyListReq,
    responseType: sliverpb_sliver_pb.RegistrySubKeyList,
    requestSerialize: serialize_sliverpb_RegistrySubKeyListReq,
    requestDeserialize: deserialize_sliverpb_RegistrySubKeyListReq,
    responseSerialize: serialize_sliverpb_RegistrySubKeyList,
    responseDeserialize: deserialize_sliverpb_RegistrySubKeyList,
  },
  registryListValues: {
    path: '/rpcpb.SliverRPC/RegistryListValues',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.RegistryListValuesReq,
    responseType: sliverpb_sliver_pb.RegistryValuesList,
    requestSerialize: serialize_sliverpb_RegistryListValuesReq,
    requestDeserialize: deserialize_sliverpb_RegistryListValuesReq,
    responseSerialize: serialize_sliverpb_RegistryValuesList,
    responseDeserialize: deserialize_sliverpb_RegistryValuesList,
  },
  runSSHCommand: {
    path: '/rpcpb.SliverRPC/RunSSHCommand',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.SSHCommandReq,
    responseType: sliverpb_sliver_pb.SSHCommand,
    requestSerialize: serialize_sliverpb_SSHCommandReq,
    requestDeserialize: deserialize_sliverpb_SSHCommandReq,
    responseSerialize: serialize_sliverpb_SSHCommand,
    responseDeserialize: deserialize_sliverpb_SSHCommand,
  },
  hijackDLL: {
    path: '/rpcpb.SliverRPC/HijackDLL',
    requestStream: false,
    responseStream: false,
    requestType: clientpb_client_pb.DllHijackReq,
    responseType: clientpb_client_pb.DllHijack,
    requestSerialize: serialize_clientpb_DllHijackReq,
    requestDeserialize: deserialize_clientpb_DllHijackReq,
    responseSerialize: serialize_clientpb_DllHijack,
    responseDeserialize: deserialize_clientpb_DllHijack,
  },
  getPrivs: {
    path: '/rpcpb.SliverRPC/GetPrivs',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.GetPrivsReq,
    responseType: sliverpb_sliver_pb.GetPrivs,
    requestSerialize: serialize_sliverpb_GetPrivsReq,
    requestDeserialize: deserialize_sliverpb_GetPrivsReq,
    responseSerialize: serialize_sliverpb_GetPrivs,
    responseDeserialize: deserialize_sliverpb_GetPrivs,
  },
  // Beacon only commands
openSession: {
    path: '/rpcpb.SliverRPC/OpenSession',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.OpenSession,
    responseType: sliverpb_sliver_pb.OpenSession,
    requestSerialize: serialize_sliverpb_OpenSession,
    requestDeserialize: deserialize_sliverpb_OpenSession,
    responseSerialize: serialize_sliverpb_OpenSession,
    responseDeserialize: deserialize_sliverpb_OpenSession,
  },
  closeSession: {
    path: '/rpcpb.SliverRPC/CloseSession',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.CloseSession,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_sliverpb_CloseSession,
    requestDeserialize: deserialize_sliverpb_CloseSession,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  // Extensions
registerExtension: {
    path: '/rpcpb.SliverRPC/RegisterExtension',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.RegisterExtensionReq,
    responseType: sliverpb_sliver_pb.RegisterExtension,
    requestSerialize: serialize_sliverpb_RegisterExtensionReq,
    requestDeserialize: deserialize_sliverpb_RegisterExtensionReq,
    responseSerialize: serialize_sliverpb_RegisterExtension,
    responseDeserialize: deserialize_sliverpb_RegisterExtension,
  },
  callExtension: {
    path: '/rpcpb.SliverRPC/CallExtension',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.CallExtensionReq,
    responseType: sliverpb_sliver_pb.CallExtension,
    requestSerialize: serialize_sliverpb_CallExtensionReq,
    requestDeserialize: deserialize_sliverpb_CallExtensionReq,
    responseSerialize: serialize_sliverpb_CallExtension,
    responseDeserialize: deserialize_sliverpb_CallExtension,
  },
  listExtensions: {
    path: '/rpcpb.SliverRPC/ListExtensions',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.ListExtensionsReq,
    responseType: sliverpb_sliver_pb.ListExtensions,
    requestSerialize: serialize_sliverpb_ListExtensionsReq,
    requestDeserialize: deserialize_sliverpb_ListExtensionsReq,
    responseSerialize: serialize_sliverpb_ListExtensions,
    responseDeserialize: deserialize_sliverpb_ListExtensions,
  },
  // *** Wireguard Specific ***
wGStartPortForward: {
    path: '/rpcpb.SliverRPC/WGStartPortForward',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.WGPortForwardStartReq,
    responseType: sliverpb_sliver_pb.WGPortForward,
    requestSerialize: serialize_sliverpb_WGPortForwardStartReq,
    requestDeserialize: deserialize_sliverpb_WGPortForwardStartReq,
    responseSerialize: serialize_sliverpb_WGPortForward,
    responseDeserialize: deserialize_sliverpb_WGPortForward,
  },
  wGStopPortForward: {
    path: '/rpcpb.SliverRPC/WGStopPortForward',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.WGPortForwardStopReq,
    responseType: sliverpb_sliver_pb.WGPortForward,
    requestSerialize: serialize_sliverpb_WGPortForwardStopReq,
    requestDeserialize: deserialize_sliverpb_WGPortForwardStopReq,
    responseSerialize: serialize_sliverpb_WGPortForward,
    responseDeserialize: deserialize_sliverpb_WGPortForward,
  },
  wGStartSocks: {
    path: '/rpcpb.SliverRPC/WGStartSocks',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.WGSocksStartReq,
    responseType: sliverpb_sliver_pb.WGSocks,
    requestSerialize: serialize_sliverpb_WGSocksStartReq,
    requestDeserialize: deserialize_sliverpb_WGSocksStartReq,
    responseSerialize: serialize_sliverpb_WGSocks,
    responseDeserialize: deserialize_sliverpb_WGSocks,
  },
  wGStopSocks: {
    path: '/rpcpb.SliverRPC/WGStopSocks',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.WGSocksStopReq,
    responseType: sliverpb_sliver_pb.WGSocks,
    requestSerialize: serialize_sliverpb_WGSocksStopReq,
    requestDeserialize: deserialize_sliverpb_WGSocksStopReq,
    responseSerialize: serialize_sliverpb_WGSocks,
    responseDeserialize: deserialize_sliverpb_WGSocks,
  },
  wGListForwarders: {
    path: '/rpcpb.SliverRPC/WGListForwarders',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.WGTCPForwardersReq,
    responseType: sliverpb_sliver_pb.WGTCPForwarders,
    requestSerialize: serialize_sliverpb_WGTCPForwardersReq,
    requestDeserialize: deserialize_sliverpb_WGTCPForwardersReq,
    responseSerialize: serialize_sliverpb_WGTCPForwarders,
    responseDeserialize: deserialize_sliverpb_WGTCPForwarders,
  },
  wGListSocksServers: {
    path: '/rpcpb.SliverRPC/WGListSocksServers',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.WGSocksServersReq,
    responseType: sliverpb_sliver_pb.WGSocksServers,
    requestSerialize: serialize_sliverpb_WGSocksServersReq,
    requestDeserialize: deserialize_sliverpb_WGSocksServersReq,
    responseSerialize: serialize_sliverpb_WGSocksServers,
    responseDeserialize: deserialize_sliverpb_WGSocksServers,
  },
  // *** Realtime Commands ***
shell: {
    path: '/rpcpb.SliverRPC/Shell',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.ShellReq,
    responseType: sliverpb_sliver_pb.Shell,
    requestSerialize: serialize_sliverpb_ShellReq,
    requestDeserialize: deserialize_sliverpb_ShellReq,
    responseSerialize: serialize_sliverpb_Shell,
    responseDeserialize: deserialize_sliverpb_Shell,
  },
  portfwd: {
    path: '/rpcpb.SliverRPC/Portfwd',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.PortfwdReq,
    responseType: sliverpb_sliver_pb.Portfwd,
    requestSerialize: serialize_sliverpb_PortfwdReq,
    requestDeserialize: deserialize_sliverpb_PortfwdReq,
    responseSerialize: serialize_sliverpb_Portfwd,
    responseDeserialize: deserialize_sliverpb_Portfwd,
  },
  // *** Socks5 ***
createSocks: {
    path: '/rpcpb.SliverRPC/CreateSocks',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.Socks,
    responseType: sliverpb_sliver_pb.Socks,
    requestSerialize: serialize_sliverpb_Socks,
    requestDeserialize: deserialize_sliverpb_Socks,
    responseSerialize: serialize_sliverpb_Socks,
    responseDeserialize: deserialize_sliverpb_Socks,
  },
  closeSocks: {
    path: '/rpcpb.SliverRPC/CloseSocks',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.Socks,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_sliverpb_Socks,
    requestDeserialize: deserialize_sliverpb_Socks,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  socksProxy: {
    path: '/rpcpb.SliverRPC/SocksProxy',
    requestStream: true,
    responseStream: true,
    requestType: sliverpb_sliver_pb.SocksData,
    responseType: sliverpb_sliver_pb.SocksData,
    requestSerialize: serialize_sliverpb_SocksData,
    requestDeserialize: deserialize_sliverpb_SocksData,
    responseSerialize: serialize_sliverpb_SocksData,
    responseDeserialize: deserialize_sliverpb_SocksData,
  },
  // *** Tunnels ***
createTunnel: {
    path: '/rpcpb.SliverRPC/CreateTunnel',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.Tunnel,
    responseType: sliverpb_sliver_pb.Tunnel,
    requestSerialize: serialize_sliverpb_Tunnel,
    requestDeserialize: deserialize_sliverpb_Tunnel,
    responseSerialize: serialize_sliverpb_Tunnel,
    responseDeserialize: deserialize_sliverpb_Tunnel,
  },
  closeTunnel: {
    path: '/rpcpb.SliverRPC/CloseTunnel',
    requestStream: false,
    responseStream: false,
    requestType: sliverpb_sliver_pb.Tunnel,
    responseType: commonpb_common_pb.Empty,
    requestSerialize: serialize_sliverpb_Tunnel,
    requestDeserialize: deserialize_sliverpb_Tunnel,
    responseSerialize: serialize_commonpb_Empty,
    responseDeserialize: deserialize_commonpb_Empty,
  },
  tunnelData: {
    path: '/rpcpb.SliverRPC/TunnelData',
    requestStream: true,
    responseStream: true,
    requestType: sliverpb_sliver_pb.TunnelData,
    responseType: sliverpb_sliver_pb.TunnelData,
    requestSerialize: serialize_sliverpb_TunnelData,
    requestDeserialize: deserialize_sliverpb_TunnelData,
    responseSerialize: serialize_sliverpb_TunnelData,
    responseDeserialize: deserialize_sliverpb_TunnelData,
  },
  // *** Events ***
events: {
    path: '/rpcpb.SliverRPC/Events',
    requestStream: false,
    responseStream: true,
    requestType: commonpb_common_pb.Empty,
    responseType: clientpb_client_pb.Event,
    requestSerialize: serialize_commonpb_Empty,
    requestDeserialize: deserialize_commonpb_Empty,
    responseSerialize: serialize_clientpb_Event,
    responseDeserialize: deserialize_clientpb_Event,
  },
};

exports.SliverRPCClient = grpc.makeGenericClientConstructor(SliverRPCService);

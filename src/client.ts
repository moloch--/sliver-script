import * as grpc from 'grpc';

import * as commonpb from './pb/commonpb/common_pb';
import * as clientpb from './pb/clientpb/client_pb'
import { SliverRPCClient } from './pb/rpcpb/services_grpc_pb';
import { SliverClientConfig } from './config';


export class SliverClient {

  rpc: SliverRPCClient;
  private _config: SliverClientConfig;

  constructor(config: SliverClientConfig) {
    this._config = config;
    this.rpc = new SliverRPCClient(this.host(), this.credentials());

  }

  host(): string {
    return `${this._config.lhost}:${this._config.lport}`
  }

  credentials(): grpc.ChannelCredentials {
    const ca = Buffer.from(this._config.ca_certificate);
    const privateKey = Buffer.from(this._config.private_key);
    const certificate = Buffer.from(this._config.certificate);
    return grpc.credentials.createSsl(ca, privateKey, certificate, {
      checkServerIdentity: () => undefined,
    });
  }

  // ---- Helper Functions ----

  async sessions(): Promise<clientpb.Session[]> {
    return new Promise((resolve, reject) => {
      this.rpc.getSessions(new commonpb.Empty(), (err, sessions) => {
        if (!err) {
          resolve(sessions ? sessions.getSessionsList() : []);
        } else {
          reject(err);
        }
      });
    });
  }

}

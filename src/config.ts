import * as fs from 'fs';
import * as path from 'path';

export interface SliverClientConfig {
  operator: string;
  lhost: string;
  lport: number;
  ca_certificate: string;
  certificate: string;
  private_key: string;
  token: string;
}

export function ParseConfigFile(filePath: string): Promise<SliverClientConfig> {
  return new Promise((resolve, reject) => {
    fs.exists(filePath, (exists) => {
      if (exists) {
        fs.readFile(filePath, (err, data) => {
          if (!err) {
            try {
              const config = ParseConfig(data);
              resolve(config);
            } catch(err) {
              reject(err);
            }
          } else {
            reject(err);
          }
        });
      } else {
        reject('File does not exist');
      }
    });
  });
}

export function ParseConfig(data: Buffer): SliverClientConfig {
  return <SliverClientConfig>JSON.parse(data.toString('utf8'));
}

export async function ListConfigs(configDir: string): Promise<SliverClientConfig[]> {
  return new Promise((resolve) => {
    fs.readdir(configDir, (_, items) => {
      if (!fs.existsSync(configDir) || items === undefined) {
        return resolve([]);
      }
      const configs: SliverClientConfig[] = [];
      for (let index = 0; index < items.length; ++index) {
        const filePath = path.join(configDir, items[index]);
        if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
          const fileData = fs.readFileSync(filePath);
          configs.push(JSON.parse(fileData.toString('utf8')));
        }
      }
      resolve(configs);
    });
  });
}
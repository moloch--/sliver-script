import { SliverClient } from '../../src/client';
import { ParseConfigFile } from '../../src/config';

// Use this import when using the NPM module, and remove the relative imports above:
// import { SliverClient, ParseConfigFile } from 'sliver-script';

import * as os from 'os';
import * as path from 'path';


const DEFAULT_CONFIG_PATH = path.join(os.homedir(), '.sliver-client', 'configs', 'default.cfg');
const SLIVER_CONFIG_FILE = process.env['SLIVER_CONFIG_FILE'] || DEFAULT_CONFIG_PATH;


(async () => {
    console.log(`Loading config: ${SLIVER_CONFIG_FILE}`)
    const config = await ParseConfigFile(SLIVER_CONFIG_FILE)
    const client = new SliverClient(config)

    console.log(`Connecting to ${config.lhost} ...`)
    await client.connect()
    const sessions = await client.sessions()
    console.log(sessions);
    if (0 < sessions.length) {
        const interact = await client.interactWith(sessions[0])
        const shell = await interact.shell('/bin/bash', true);
        shell.stdout.subscribe(data => {
            process.stdout.write(data);
        }, (err) => {
            console.error(err);
        }, () => {
            console.log('tunnel closed');
        });
        shell.stdin.next(Buffer.from('ls\n'));
        shell.stdin.next(Buffer.from('exit\n'));
        setTimeout(() => { process.exit(0) }, 5000);
    } else {
        console.log('No sessions');
        process.exit(0)
    }
})()

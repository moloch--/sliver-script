import * as os from 'os'
import * as path from 'path'

import { ParseConfigFile } from '../config'
import { SliverClient } from '../client'


const DEFAULT_CONFIG_PATH = path.join(os.homedir(), '.sliver-client', 'configs', 'default.cfg')
const SLIVER_CONFIG_FILE = process.env['SLIVER_CONFIG_FILE'] || DEFAULT_CONFIG_PATH;

test('authenticate to server', async () => {
    console.log(`Loading config: ${SLIVER_CONFIG_FILE}`)
    const config = await ParseConfigFile(SLIVER_CONFIG_FILE)
    const client = new SliverClient(config)

    console.log(`Connecting to ${config.lhost} ...`)
    try {
        await client.connect()

        let sessions = await client.sessions()
        console.log(sessions)

        await client.disconnect()
    } catch (err) {
        console.error(err)
    }
})

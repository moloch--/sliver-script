import * as os from 'os'
import * as path from 'path'

import { ParseConfigFile } from '../config'
import { SliverClient } from '../client'


const DEFAULT_CONFIG_PATH = path.join(os.homedir(), '.sliver-client', 'configs', 'default.cfg')
const SLIVER_CONFIG_FILE = process.env['SLIVER_CONFIG_FILE'] || DEFAULT_CONFIG_PATH;

jest.setTimeout(120 * 1000);
test('authenticate to server', async () => {
    console.log(`Loading config: ${SLIVER_CONFIG_FILE}`)
    const config = await ParseConfigFile(SLIVER_CONFIG_FILE)
    const client = new SliverClient(config)

    console.log(`Connecting to ${config.lhost} ...`)
    try {
        await client.connect()

        let sessions = await client.sessions()
        console.log(sessions)

        let beacons = await client.beacons()
        console.log(beacons)

        if (beacons?.length) {
            const beacon = await client.interactBeacon(beacons[0].ID)
            console.log('Executing ls task ...')
            const lsTask = await beacon.ls('.')
            console.log(`Created task ${lsTask}`)
            console.log('Waiting for task to complete ...')
            const ls = await lsTask
            console.log(`Task result: ${ls}`)
        }

        await client.disconnect()
    } catch (err) {
        console.error(err)
    }
})

# Sliver Script

Sliver-script is a TypeScript/JavaScript client library for Sliver, it can be used to automate any operator interaction with Sliver. Sliver-script uses existing Sliver client configuration files and connects to servers using gRPC over Mutual-TLS. It also provides [RxJS](https://www.learnrxjs.io/) abstractions for easy interactions with real-time components.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

### Install

For best compatibility use Node v14.x (LTS) this package is available via npm:

`npm install sliver-script`


### TypeScript Example

#### Basic

```typescript
import { SliverClient, ParseConfigFile } from 'sliver-script'

(async function() {
    
    const config = await ParseConfigFile('./moloch_localhost.cfg')
    const client = new SliverClient(config)

    console.log(`Connecting to ${client.host()} ...`)
    await client.connect()

    const sessions = await client.sessions()
    console.log(sessions)

})()
```

#### Monitor Events in Real-time

```typescript
import { SliverClient, ParseConfigFile } from 'sliver-script'

(async function() {

    const config = await ParseConfigFile('./moloch_localhost.cfg')

    const client = new SliverClient(config)
    await client.connect()
    client.event$.subscribe((event) => {
        console.log(event)
    })

})()
```

#### Automatically Interact with New Sessions

```typescript
import { SliverClient, ParseConfigFile } from 'sliver-script'


(async function() {

    const config = await ParseConfigFile('moloch_localhost.cfg')
    const client = new SliverClient(config);
    await client.connect()

    console.log('Waiting for new sessions ...')
    client.session$.subscribe(async (event) => {
        console.log(`New session #${event.getSession().getId()}!`)
        const session = await client.interactWith(event.getSession())
        const ls = await session.ls()
        console.log(`Path: ${ls.getPath()}`)
        ls.getFilesList().forEach(file => {
            console.log(`Name: ${file.getName()} (Size: ${file.getSize()})`)
        })
    })

})()
```

### JavaScript Example

```javascript
const sliver = require('sliver-script')

(async function() { 

    const config = await sliver.ParseConfigFile('./moloch_localhost.cfg')
    const client = new sliver.SliverClient(config)
    await client.connect()

    console.log('Waiting for new sessions ...')

    client.session$.subscribe(async (event) => {

        console.log(`New session #${event.getSession().getId()}!`)

        const session = await client.interactWith(event.getSession())
        const ls = await session.ls()
        console.log(`Path: ${ls.getPath()}`)
        ls.getFilesList().forEach(file => {
            console.log(`Name: ${file.getName()} (Size: ${file.getSize()})`)
        })
        
    })

})()
```

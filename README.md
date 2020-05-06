# Sliver Script

TypeScript/JavaScript client library for Sliver.


### Install

This package is available via npm:

`npm install sliver-script`

__NOTE:__ Due to unresolved issues with `grpc-node` this library only supports NodeJS v12.x, though with some workarounds it may be possible to run on newer versions.
 * [Issue #1376](https://github.com/grpc/grpc-node/issues/1376)

### TypeScript Example

#### Basic

```typescript
import { SliverClient, ParseConfigFile } from 'sliver-script'

(async function () {
    
    const config = await ParseConfigFile('./moloch_localhost.cfg')
    const client = new SliverClient(config)

    console.log(`Connecting to ${client.host()} ...`)
    await client.connect()

    sessions = await client.sessions()
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
        const session = await client.interact(event.getSession())
        const ls = await session.ls();
        console.log(`Path: ${ls.getPath()}`)
        ls.getFilesList().forEach(file => {
            console.log(`Name: ${file.getName()} (Size: ${file.getSize()})`)
        })
    })

})()
```
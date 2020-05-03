# Sliver Script

TypeScript/JavaScript client library for Sliver.


### Install

The library can be installed via `npm install sliver-script`


### Example

```typescript
import { SliverClient, ParseConfigFile } from 'sliver-script';

ParseConfigFile('./moloch_localhost.cfg').then(async (config) => {
    const client = new SliverClient(config);
    console.log(`Connecting to ${client.host()} ...`);
    const sessions = await client.sessions();
    console.log(sessions);
});
```
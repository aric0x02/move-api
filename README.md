# polkadot-js-api-ts-template

My personal, beloved template to quickly start hacking in top of any substrate based chain with
`@polkadot/api`.

See [`package.json`](./package.json) to see what's up 🔥🔥.


# mv-typegen

```bash

curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933 > mv_node.json

```

```bash
generate-type-bundle -p "./tb.json" -s pont-node

```



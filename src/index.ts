// needed as of 7.x series, see CHANGELOG of the api repo.
// import '@polkadot/api-augment';
// import '@polkadot/types-augment';
// import './interfaces/augment-api';
// import './interfaces/augment-types';
import * as definitions from './interfaces/definitions';
import { createType } from '@polkadot/types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Balance } from '@polkadot/types/interfaces/runtime';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { BN } from '@polkadot/util';
// wss://rpc.polkadot.io
const optionsPromise = yargs(hideBin(process.argv)).option('endpoint', {
	alias: 'e',
	type: 'string',
	default: 'ws://127.0.0.1:9944',
	description: 'the wss endpoint. It must allow unsafe RPCs.',
	required: true
}).argv;


async function main() {
	const options = await optionsPromise;
	const provider = new WsProvider(options.endpoint);
  const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});
	const api = await ApiPromise.create({ provider,types: {
      ...types,
      // chain-specific overrides
      Keys: 'SessionKeys4'
    } });

	console.log(
		`Connected to node: ${options.endpoint} ${(await api.rpc.system.chain()).toHuman()} [ss58: ${
			api.registry.chainSS58
		}]`
	);

	for (const key in api.query) {
		if (api.query[key] && api.query[key].palletVersion) {
			console.log(key, (await api.query[key].palletVersion()).toHuman());
		}
	}
 
	console.log(JSON.stringify(api.query["mvm"]),JSON.stringify(api.rpc),JSON.stringify(api.tx));

  // even createType works, allowing for our types to be used
//   console.log(`Balance2 bitLength:`, [
//     api.createType('Balance2').bitLength(),
//     api.registry.createType('Balance2').bitLength(),
//     createType(api.registry, 'Balance2').bitLength()
//   ]);

	// reading a constant
	// const ED: Balance = api.consts.balances.existentialDeposit;
	// console.log(ED.toHuman());

	// subscribe to finalized blocks:
	const unsub = await api.rpc.chain.subscribeFinalizedHeads((header) => {
		console.log(`finalized block #${header.number}`);
	});
}

main().catch(console.error);

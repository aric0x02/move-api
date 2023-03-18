"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// needed as of 7.x series, see CHANGELOG of the api repo.
require("@polkadot/api-augment");
require("@polkadot/types-augment");
// import './interfaces/augment-api';
// import './interfaces/augment-types';
const definitions = __importStar(require("./interfaces/definitions"));
const api_1 = require("@polkadot/api");
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
// wss://rpc.polkadot.io
const optionsPromise = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv)).option('endpoint', {
    alias: 'e',
    type: 'string',
    default: 'ws://127.0.0.1:9944',
    description: 'the wss endpoint. It must allow unsafe RPCs.',
    required: true
}).argv;
// const rpc: any = require("../jsons/rpcs.json")
async function main() {
    const options = await optionsPromise;
    const provider = new api_1.WsProvider(options.endpoint);
    const types = Object.values(definitions).reduce((res, { types }) => ({ ...res, ...types }), {});
    // const rpc = Object.values(definitions).reduce((res, { rpc }): object => ({ ...res, ...rpc}), {});
    const api = await api_1.ApiPromise.create({
        provider, types: {
            ...types,
            // chain-specific overrides
            Keys: 'SessionKeys4'
        }, typesBundle: require('../typesBundle.json')
    });
    console.log(`Connected to node: ${options.endpoint} ${(await api.rpc.system.chain()).toHuman()} [ss58: ${api.registry.chainSS58}]`);
    for (const key in api.query) {
        if (api.query[key] && api.query[key].palletVersion) {
            console.log(key, (await api.query[key].palletVersion()).toHuman());
        }
    }
    console.log(JSON.stringify(api.query["mvm"]), JSON.stringify(api.rpc.rpc.methods), JSON.stringify(api.tx));
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
    const un = await api.rpc.mvm["gasToWeight"](10);
    console.log("======gasToWeight=========", JSON.stringify(un));
}
main().catch(console.error);

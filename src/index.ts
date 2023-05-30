// needed as of 7.x series, see CHANGELOG of the api repo.
// import '@polkadot/api-augment';
// import '@polkadot/types-augment';
import type { OverrideBundleType } from '@polkadot/types/types';

// import './interfaces/augment-api';
// import './interfaces/augment-types';
// import * as definitions from './interfaces/definitions';
import { createType } from '@polkadot/types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { stringToHex, stringToU8a, hexToString, u8aToString, u8aToHex } from '@polkadot/util';
import { Balance } from '@polkadot/types/interfaces/runtime';
import yargs, { IsUnknown } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { BN } from '@polkadot/util';
import { typesBundle } from './typesBundle';
import { HexString, BCS, TxnBuilderTypes, TransactionBuilderRemoteABI } from 'move-tx-builder';
const { Keyring } = require('@polkadot/keyring');
const {
    AccountAddress,
    TypeTagStruct,
    EntryFunction,
    StructTag,
    ChainId,
    ModuleId,
} = TxnBuilderTypes;

const BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';
// wss://rpc.polkadot.io
const optionsPromise = yargs(hideBin(process.argv)).command('curl <url>', 'fetch the contents of the URL', () => { console.log("=====22=====", 232) }, (argv) => {
    console.log("==========", argv)
}).option('endpoint', {
    alias: 'e',
    type: 'string',
    default: 'ws://127.0.0.1:9944',
    description: 'the wss endpoint. It must allow unsafe RPCs.',
    required: true
}).option('createList', {
    alias: 'cl',
    type: 'boolean',
    default: false,
    description: 'the wss endpoint. It must allow unsafe RPCs.',
    required: false
}).option('createTask', {
    alias: 'ct',
    type: 'boolean',
    default: false,
    description: 'the wss endpoint. It must allow unsafe RPCs.',
    required: false
}).option('completeTask', {
    alias: 'co',
    type: 'boolean',
    default: false,
    description: 'the wss endpoint. It must allow unsafe RPCs.',
    required: false
}
).option('publishPackage', {
    alias: 'pp',
    type: 'boolean',
    default: false,
    description: 'the wss endpoint. It must allow unsafe RPCs.',
    required: false
}
).option('getResource', {
    alias: 'res',
    type: 'boolean',
    default: false,
    description: 'the wss endpoint. It must allow unsafe RPCs.',
    required: false
}
).option('getTableEntry', {
    alias: 'tab',
    type: 'boolean',
    default: false,
    description: 'the wss endpoint. It must allow unsafe RPCs.',
    required: false
}
).argv;
// const rpc: any = require("../jsons/rpcs.json")
// const keyring = new Keyring({ type: 'sr25519' });

// // Add Alice to our keyring with a hard-derivation path (empty phrase, so uses dev)
// const alice = keyring.addFromUri('//Alice');
// import { cryptoWaitReady } from '@polkadot/util-crypto';
async function main() {
    // await cryptoWaitReady();
    const options = await optionsPromise;

    const provider = new WsProvider(options.endpoint);
    // const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});
    // const rpc = Object.values(definitions).reduce((res, { rpc }): object => ({ ...res, ...rpc}), {});
    const api = await ApiPromise.create({
        provider, typesBundle: require('../typesBundle.json')
    });

    console.log(
        `Connected to node: ${options.endpoint} ${(await api.rpc.system.chain()).toHuman()} [ss58: ${api.registry.chainSS58
        }]`
    );
    // const withoutPrefix = "007711b4d0";
    // const hs = new HexString(withoutPrefix);
    // console.log("====HexString===========", hs)
    // for (const key in api.query) {
    //     if (api.query[key] && api.query[key].palletVersion) {
    //         console.log(key, (await api.query[key].palletVersion()).toHuman());
    //     }
    // }

    // console.log(JSON.stringify(api.query["mvm"]), JSON.stringify(api.rpc.rpc.methods));
    // , console.log("===tx=====",JSON.stringify(api.tx.mvm), "===tx=====");

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
    if (options.createList) {
        console.log("========options.createList====", options.createList)
        await createList(api)
    }
    if (options.createTask) {
        console.log("========options.createTask====", options.createTask)
        await createTask(api)
    }
    if (options.completeTask) {
        console.log("========options.completeTask====", options.completeTask)
        await completeTask(api)
    }
    if (options.publishPackage) {
        console.log("========options.publishPackage====", options.publishPackage)
        await publishPackage(api)
    }
    if (options.getResource) {
        console.log("========options.getResource====", options.getResource)
        const keyring = new Keyring({ type: 'sr25519' });

        //// Add Alice to our keyring with a hard-derivation path (empty phrase, so uses dev)
        const alice = keyring.addFromUri('//Alice');
        await getResource(alice.address, "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::TodoList::TodoList", api)
    }
    if (options.getTableEntry) {
        console.log("========options.getTableEntry====", options.getTableEntry)
        await getTableEntry("132692409849679358887631062327771453437", "1", "u64", "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::TodoList::Task", api)
    }
    // await gasToWeight(api);
}

async function createList(api: ApiPromise) {
    const abi = await getAbi("0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::TodoList::create_list", api)
    const tx = await buildCreateListTx(abi);
    await execute(tx, api);
    const keyring = new Keyring({ type: 'sr25519' });
}
async function buildCreateListTx(abi: string) {
    const rawTxn = await TransactionBuilderRemoteABI.build(abi,
        "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::TodoList::create_list",
        [],
        [],
    );
    console.log("=====buildCreateListTx=======HexString.fromUint8Array(bcsToBytes(rawTxn)).hex()======================", HexString.fromUint8Array(BCS.bcsToBytes(rawTxn)).hex())
    return HexString.fromUint8Array(BCS.bcsToBytes(rawTxn)).hex()
}
async function createTask(api: ApiPromise) {
    const abi = await getAbi("0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::TodoList::create_task", api)
    const tx = await buildCreateTaskTx(abi);
    await execute(tx, api);
}
async function buildCreateTaskTx(abi: string) {
    const rawTxn = await TransactionBuilderRemoteABI.build(abi,
        "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::TodoList::create_task",
        [],
        ["abc"],
    );
    console.log("======buildCreateTaskTx======HexString.fromUint8Array(bcsToBytes(rawTxn)).hex()======================", HexString.fromUint8Array(BCS.bcsToBytes(rawTxn)).hex())
    return HexString.fromUint8Array(BCS.bcsToBytes(rawTxn)).hex()
}
async function completeTask(api: ApiPromise) {
    const abi = await getAbi("0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::TodoList::complete_task", api)
    const tx = await buildCompleteTaskTx(abi);
    await execute(tx, api);
}
async function buildCompleteTaskTx(abi: string) {
    const rawTxn = await TransactionBuilderRemoteABI.build(abi,
        "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::TodoList::complete_task",
        [],
        [1],
    );
    console.log("======buildCompleteTaskTx======HexString.fromUint8Array(bcsToBytes(rawTxn)).hex()======================", HexString.fromUint8Array(BCS.bcsToBytes(rawTxn)).hex())
    return HexString.fromUint8Array(BCS.bcsToBytes(rawTxn)).hex()
}
async function TestScriptBook(api: ApiPromise) {
    const abi = await getAbi("0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::ScriptBook::test", api)
    // // const abi = '{"abi":{"address":"0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d","exposed_functions":[{"generic_type_params":[],"is_entry":true,"name":"store_sum_func","params":["signer","u64","u64"],"return":[],"visibility":"script"},{"generic_type_params":[{"constraints":[]}],"is_entry":true,"name":"store_sum_funct","params":["signer","u64","u64"],"return":[],"visibility":"script"},{"generic_type_params":[],"is_entry":true,"name":"sum_func","params":["signer","u64","u64"],"return":[],"visibility":"script"},{"generic_type_params":[{"constraints":[]}],"is_entry":true,"name":"sum_funct","params":["signer","u64","u64"],"return":[],"visibility":"script"},{"generic_type_params":[],"is_entry":true,"name":"test","params":[],"return":[],"visibility":"script"},{"generic_type_params":[],"is_entry":true,"name":"test2","params":["u64","u64"],"return":[],"visibility":"script"}],"friends":[],"name":"ScriptBook","structs":[]},"bytecode":"0xa11ceb0b040000000801000a020a04030e4a045804055c1e077ab70108b102400cf1028e0100000101000200030004040f0f00000500010000060001010000070001000008000101000009010100000a020100040b040100010c050600040d060300040e0401010004100608000311020300021209010002130401010009070d07030c030300020303010303060c030301060c010501090001080002060c030a536372697074426f6f6b065369676e65720a4576656e7450726f7879044d6174680753746f726167650e73746f72655f73756d5f66756e630f73746f72655f73756d5f66756e63740873756d5f66756e630973756d5f66756e637404746573740574657374320973746f72655f73756d0a616464726573735f6f66076765745f73756d0a73746f72655f73756d740353756d086765745f73756d74036164640a656d69745f6576656e740b656d69745f6576656e7474d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00000000000000000000000000000000000000000000000000000000000000010002000003110e000a010a0211060e00110711080c030b010b02160b0321031006650000000000000027020102000001090e000b010b0238000e001107110a01020202000003080b010b02110b0c030e000b03110c020302000001050e000b010b02380102040200000101020502000001090b000b0116060500000000000000210308066500000000000000270200"}';
    const tx = await buildScriptBookStoreSumFuncTx(abi);
    // const tx = "0x00010101d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0a536372697074426f6f6b04746573740000"//await test2(abi);
    // await execute(tx, api);
    // const keyring = new Keyring({ type: 'sr25519' });

    // //// Add Alice to our keyring with a hard-derivation path (empty phrase, so uses dev)
    // const alice = keyring.addFromUri('//Alice');
    // await getResource(alice.address, "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::Storage::Sum", api)

}
async function buildScriptBookStoreSumFuncTx(abi: string) {
    let abijson = abi//require("../abi2.json")

    const rawTxn = await TransactionBuilderRemoteABI.build(JSON.stringify(abijson),
        "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::ScriptBook::store_sum_func",
        [],
        [3, 9],
    );
    console.log("============HexString.fromUint8Array(bcsToBytes(rawTxn)).hex()======================", HexString.fromUint8Array(BCS.bcsToBytes(rawTxn)).hex())
    return HexString.fromUint8Array(BCS.bcsToBytes(rawTxn)).hex()
}
async function buildScriptBookTestTx() {
    let abijson = require("../abi2.json")
    const rawTxn = await TransactionBuilderRemoteABI.build(JSON.stringify(abijson),
        "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d::ScriptBook::test",
        [],
        [],
    );
    console.log("====test1========HexString.fromUint8Array(bcsToBytes(rawTxn)).hex()======================", HexString.fromUint8Array(BCS.bcsToBytes(rawTxn)).hex())
    return HexString.fromUint8Array(BCS.bcsToBytes(rawTxn)).hex()
}
async function convertModuleId(func: string) {
    const normlize = (s: string) => s.replace(/^0[xX]0*/g, "0x");
    func = normlize(func);
    const funcNameParts = func.split("::");
    if (funcNameParts.length !== 3) {
        throw new Error(
            // eslint-disable-next-line max-len
            "'func' needs to be a fully qualified function name in format <address>::<module>::<function>, e.g. 0x1::coins::transfer",
        );
    }

    const [addr, module] = func.split("::");
    return HexString.fromUint8Array(BCS.bcsToBytes(ModuleId.fromStr(`${addr}::${module}`))).hex()
}
async function getResource(address: string, tag: string, api: ApiPromise) {
    // {"type":"D43593C715FDD31C61141ABD04A99FD6822C8558854CCDE39A5684E7A56DA27D::TodoList::TodoList","data":{"set_task_event":{"counter":1,"guid":{"guid":{"id":{"addr":[212,53,147,199,21,253,211,28,97,20,26,189,4,169,159,214,130,44,133,88,133,76,205,227,154,86,132,231,165,109,162,125],"creation_num":0}},"len_bytes":40}},"task_counter":1,"tasks":{"handle":"132692409849679358887631062327771453437"}}}
    const tagHexStr = stringToHex(tag);
    const un = await api.rpc["mvm"]["getResources3"](address, tagHexStr);
    let resphex = JSON.stringify(un);
    let s = hexToString(JSON.parse(JSON.stringify(un)))
    let json = JSON.parse(s);
    // console.log("=====addr=====", json.data.set_task_event.guid.guid.id.addr);
    // console.log("=====addr==hex===", u8aToHex(json.data.set_task_event.guid.guid.id.addr));
    // console.log(json, "======getResource==hexToString=======", s)
    return s
}
async function getTableEntry(handle: string, key: string, key_type: string, value_type: string, api: ApiPromise) {
    // {"address":[212,53,147,199,21,253,211,28,97,20,26,189,4,169,159,214,130,44,133,88,133,76,205,227,154,86,132,231,165,109,162,125],"completed":false,"content":"0x424242","task_id":1}
    const un = await api.rpc["mvm"]["getTableEntry"](stringToHex(handle), stringToHex(key), stringToHex(key_type), stringToHex(value_type));
    let s = hexToString(JSON.parse(JSON.stringify(un)))
    let json = JSON.parse(s);
    json.address=u8aToHex(json.address)
    json.content= hexToString(json.content)
    // console.log("=====address==hex===", u8aToHex(json.address));
    // console.log("=====content==string===", hexToString(json.content));
    // console.log(json, "======getTableEntry==hexToString=======", s)
    return json
}
async function getAbi(func: string, api: ApiPromise) {
    const moduleId = await convertModuleId(func);
    const un = await api.rpc["mvm"]["getModuleABIs"](moduleId);
    console.log("======getAbi==hexToString=======", hexToString(JSON.stringify(un).slice(3)))
    let abi = JSON.stringify(un);
    //remove  0x  double quotation marks 
    abi = abi.slice(3, abi.length - 1);
    return hexToString(abi)
}
async function gasToWeight(api: ApiPromise) {
    const un = await api.rpc["mvm"]["gasToWeight"](10);
    console.log("======gasToWeight=========", JSON.stringify(un))
}
async function execute(tx: string, api: ApiPromise) {
    // Construct the keyring after the API (crypto has an async init)
    const keyring = new Keyring({ type: 'sr25519' });

    // Add Alice to our keyring with a hard-derivation path (empty phrase, so uses dev)
    const alice = keyring.addFromUri('//Alice');
    // console.log(alice.address, "======address=======", u8aToHex(keyring.decodeAddress(alice.address)))
    // Create a extrinsic, transferring 12345 units to Bob
    // const execute = api.tx.mvm.execute("0x00010101d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0a536372697074426f6f6b0873756d5f66756e630208030000000000000008090000000000000000", 1000000);
    const execute = api.tx.mvm.execute(tx, 1000000);

    // Sign and send the transaction using our account
    const hash = await execute.signAndSend(alice);

    console.log('execute sent with hash', hash.toHex());
}
async function publishPackage(api: ApiPromise) {
    let tx = require("../ac.json")
    // Construct the keyring after the API (crypto has an async init)
    const keyring = new Keyring({ type: 'sr25519' });

    // Add Alice to our keyring with a hard-derivation path (empty phrase, so uses dev)
    const alice = keyring.addFromUri('//Alice');
    // console.log(alice.address, tx.my, "======address=======", u8aToHex(keyring.decodeAddress(alice.address)))
    // Create a extrinsic, transferring 12345 units to Bob
    const execute = api.tx.mvm.publishPackage("0x058003a11ceb0b040000000a01000402041003141d04310c053d3407715f08d001400a90020b0b9b02020c9d02370000010100020700000307010000010704010601000400010000050201010001080506010601040701010601090601010602040304040402090309040902060c030003060c0303010b0201080001080001060c010b0201090002070b020109000900010b02010b01010800010b010108000a4576656e7450726f7879054576656e74035536340255550a656d69745f6576656e740b656d69745f6576656e74740376616c0b4576656e7448616e646c65106e65775f6576656e745f68616e646c650e64657374726f795f68616e646c65d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00000000000000000000000000000000000000000000000000000000000000010002010603010201060900010400010000030a0b0038000c020d020b01120038010b0238020201010000080d0b0038030c030d030b010b02161200390038040b03380502005ea11ceb0b0400000006010002030205050706070d090816200c360c00000001000100020303010300044d61746803616464d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0001000002040b000b01160200b302a11ceb0b040000000b01000402040a030e1a052816073e44088201200aa2010b0bad01020caf014d0dfc01040e8002020000000100020f0000030f01000000040001000005000200000603040000070304010001090501000105010301080003060c030300020303010b010108000753746f72616765044d6174680353756d0453756d74076765745f73756d086765745f73756d740973746f72655f73756d0a73746f72655f73756d740376616c03616464d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00020108030102010809000102000100010004050b002b0010001402010100010104050b003d00370014020201000002090b010b02110412000c030b000b032d000203010000060a0b010b0216120039000c030b000b033f000200000100010200ab04a11ceb0b040000000801000a020a04030e4a045804055c1e077ab70108b102400cf10294010000010100020003000404100f00000500010000060001010000070001000008000101000009010100000a020100040b040100010c050600040d060300020e070100040f04010100041106090003120203000213040101000a080d08030c030300020303010303060c030301060c010502060c030109000108000a536372697074426f6f6b065369676e65720a4576656e7450726f7879044d6174680753746f726167650e73746f72655f73756d5f66756e630f73746f72655f73756d5f66756e63740873756d5f66756e630973756d5f66756e637404746573740574657374320973746f72655f73756d0a616464726573735f6f66076765745f73756d0a656d69745f6576656e740a73746f72655f73756d740353756d086765745f73756d74036164640b656d69745f6576656e7474d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00000000000000000000000000000000000000000000000000000000000000010002000003140e000a010a0211060e00110711080c030e000a0311090b010b02160b0321031306650000000000000027020102000001090e000b010b0238000e001107110b01020202000003080b010b02110c0c030e000b031109020302000001050e000b010b02380102040200000101020502000001090b000b0116060500000000000000210308066500000000000000270200a306a11ceb0b040000000b010008020816031e3c045a0c05666c07d201da0108ac034006ec031e0a8a041e0ca804c0010de80508000001010102010300040700000008000303040200010001010e0401060100050001000006020100000703010002100506000311080902000003120a0b0200000313010d0200040114050f010603151101020000011612010106040705070607070e0807090e020c0300010c020c0a02030507080007080101060c01050203080002060b020209000901060900010102070b02020900090106090001070901010801010b020209000901010800010b03010900040308000507080103070b020209000901060900090102070b03010900090008546f646f4c697374054576656e74065369676e6572055461626c65045461736b0d636f6d706c6574655f7461736b0b6372656174655f6c6973740b6372656174655f7461736b077461736b5f6964076164647265737307636f6e74656e7409636f6d706c65746564057461736b730e7365745f7461736b5f6576656e740b4576656e7448616e646c650c7461736b5f636f756e7465720a616464726573735f6f6608636f6e7461696e730a626f72726f775f6d7574036e6577106e65775f6576656e745f68616e646c65036164640a656d69745f6576656e74d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0000000000000000000000000000000000000000000000000000000000000001030802000000000000000308030000000000000003080100000000000000000204080309050a0a020b010102030c0b02020308000d0b030108000f03000200010104280e0011030c020a02290103080702270b022a010c040a0410000e01380003140b04010700270b040f000e0138010c030a03100114092103230b0301070127080b030f011502010200000c0a38020e00380306000000000000000012010c010e000b012d0102020200010110260e0011030c040a04290103080702270a042a010c050a05100214060100000000000000160c020a020a040b010912000c030a050f000e020a0338040b020b050f02150b042a010f030b03380502010000030102010100", 1000000);
    // const execute = api.tx.mvm.publishPackage(`"${tx.my}"`, 1000000);

    // Sign and send the transaction using our account
    const hash = await execute.signAndSend(alice);

    console.log('execute sent with hash', hash.toHex());
}
main().catch(console.error);

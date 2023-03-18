"use strict";
// Copyright 2019-2022 Unique Network (Gibraltar) Ltd.
// This file is part of Unique Network.
Object.defineProperty(exports, "__esModule", { value: true });
const CROSS_ACCOUNT_ID_TYPE = 'PalletEvmAccountBasicCrossAccountIdRepr';
const collectionParam = { name: 'collection', type: 'u32' };
const tokenParam = { name: 'tokenId', type: 'u32' };
const propertyKeysParam = { name: 'propertyKeys', type: 'Option<Vec<String>>', isOptional: true };
const crossAccountParam = (name = 'account') => ({ name, type: CROSS_ACCOUNT_ID_TYPE });
const atParam = { name: 'at', type: 'Hash', isOptional: true };
const fun = (description, params, type) => ({
    description,
    params: [...params, atParam],
    type,
});
exports.default = {
    types: {
        MoveModuleId: {
            address: "AccountId",
            name: "Text"
        },
        MoveTypeTag: {
            _enum: ["Bool", "U8", "U64", "U128", "Address", "Signer", "Vector", "Struct"],
            Bool: null,
            U8: null,
            U64: null,
            U128: null,
            Address: null,
            Signer: null,
            Vector: "MoveTypeTag",
            Struct: "MoveStructTag"
        },
        MoveStructTag: {
            address: "AccountId",
            module: "Text",
            name: "Text"
        }
    },
    rpc: {
        accountTokens: fun('Get tokens owned by an account in a collection', [collectionParam, crossAccountParam()], 'Vec<u32>'),
        collectionTokens: fun('Get tokens contained within a collection', [collectionParam], 'Vec<u32>'),
        tokenExists: fun('Check if the token exists', [collectionParam, tokenParam], 'bool'),
        tokenOwner: fun('Get the token owner', [collectionParam, tokenParam], `Option<${CROSS_ACCOUNT_ID_TYPE}>`),
        topmostTokenOwner: fun('Get the topmost token owner in the hierarchy of a possibly nested token', [collectionParam, tokenParam], `Option<${CROSS_ACCOUNT_ID_TYPE}>`),
        tokenOwners: fun('Returns 10 tokens owners in no particular order', [collectionParam, tokenParam], `Vec<${CROSS_ACCOUNT_ID_TYPE}>`),
        tokenChildren: fun('Get tokens nested directly into the token', [collectionParam, tokenParam], 'Vec<UpDataStructsTokenChild>'),
        collectionProperties: fun('Get collection properties, optionally limited to the provided keys', [collectionParam, propertyKeysParam], 'Vec<UpDataStructsProperty>'),
        tokenProperties: fun('Get token properties, optionally limited to the provided keys', [collectionParam, tokenParam, propertyKeysParam], 'Vec<UpDataStructsProperty>'),
        propertyPermissions: fun('Get property permissions, optionally limited to the provided keys', [collectionParam, propertyKeysParam], 'Vec<UpDataStructsPropertyKeyPermission>'),
        constMetadata: fun('Get token constant metadata', [collectionParam, tokenParam], 'Vec<u8>'),
        variableMetadata: fun('Get token variable metadata', [collectionParam, tokenParam], 'Vec<u8>'),
        tokenData: fun('Get token data, including properties, optionally limited to the provided keys, and total pieces for an RFT', [collectionParam, tokenParam, propertyKeysParam], 'UpDataStructsTokenData'),
        totalSupply: fun('Get the amount of distinctive tokens present in a collection', [collectionParam], 'u32'),
        accountBalance: fun('Get the amount of any user tokens owned by an account', [collectionParam, crossAccountParam()], 'u32'),
        balance: fun('Get the amount of a specific token owned by an account', [collectionParam, crossAccountParam(), tokenParam], 'u128'),
        allowance: fun('Get the amount of currently possible sponsored transactions on a token for the fee to be taken off a sponsor', [collectionParam, crossAccountParam('sender'), crossAccountParam('spender'), tokenParam], 'u128'),
        adminlist: fun('Get the list of admin accounts of a collection', [collectionParam], 'Vec<PalletEvmAccountBasicCrossAccountIdRepr>'),
        allowlist: fun('Get the list of accounts allowed to operate within a collection', [collectionParam], 'Vec<PalletEvmAccountBasicCrossAccountIdRepr>'),
        allowed: fun('Check if a user is allowed to operate within a collection', [collectionParam, crossAccountParam()], 'bool'),
        lastTokenId: fun('Get the last token ID created in a collection', [collectionParam], 'u32'),
        collectionById: fun('Get a collection by the specified ID', [collectionParam], 'Option<UpDataStructsRpcCollection>'),
        collectionStats: fun('Get chain stats about collections', [], 'UpDataStructsCollectionStats'),
        nextSponsored: fun('Get the number of blocks until sponsoring a transaction is available', [collectionParam, crossAccountParam(), tokenParam], 'Option<u64>'),
        effectiveCollectionLimits: fun('Get effective collection limits', [collectionParam], 'Option<UpDataStructsCollectionLimits>'),
        totalPieces: fun('Get the total amount of pieces of an RFT', [collectionParam, tokenParam], 'Option<u128>'),
        allowanceForAll: fun('Tells whether the given `owner` approves the `operator`.', [collectionParam, crossAccountParam('owner'), crossAccountParam('operator')], 'Option<bool>'),
    },
};

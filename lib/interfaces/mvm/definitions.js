"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        estimateGasExecute: {
            aliasSection: "mvm",
            description: "estimate gas for script execution",
            params: [
                {
                    name: "account",
                    type: "AccountId"
                },
                {
                    name: "tx_bc",
                    type: "Bytes"
                },
                {
                    name: "gas_limit",
                    type: "u64"
                }
            ],
            type: "Estimation"
        },
        estimateGasPublish: {
            aliasSection: "mvm",
            description: "estimate gas for module publishing",
            params: [
                {
                    name: "account",
                    type: "AccountId"
                },
                {
                    name: "module_bc",
                    type: "Bytes"
                },
                {
                    name: "gas_limit",
                    type: "u64"
                }
            ],
            type: "Estimation"
        },
        gasToWeight: {
            aliasSection: "mvm",
            description: "convert gas to weight",
            params: [
                {
                    name: "gas",
                    type: "u64"
                }
            ],
            type: "u64"
        },
        weightToGas: {
            aliasSection: "mvm",
            description: "convert gas to weight",
            params: [
                {
                    name: "weight",
                    type: "u64"
                }
            ],
            type: "u64"
        }
    }
};

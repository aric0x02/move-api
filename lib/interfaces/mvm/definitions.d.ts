declare const _default: {
    types: {
        MoveModuleId: {
            address: string;
            name: string;
        };
        MoveTypeTag: {
            _enum: string[];
            Bool: null;
            U8: null;
            U64: null;
            U128: null;
            Address: null;
            Signer: null;
            Vector: string;
            Struct: string;
        };
        MoveStructTag: {
            address: string;
            module: string;
            name: string;
        };
    };
    rpc: {
        estimateGasExecute: {
            aliasSection: string;
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        estimateGasPublish: {
            aliasSection: string;
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        gasToWeight: {
            aliasSection: string;
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        weightToGas: {
            aliasSection: string;
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
    };
};
export default _default;

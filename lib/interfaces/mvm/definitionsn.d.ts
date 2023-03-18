type RpcParam = {
    name: string;
    type: string;
    isOptional?: true;
};
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
        accountTokens: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        collectionTokens: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        tokenExists: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        tokenOwner: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        topmostTokenOwner: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        tokenOwners: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        tokenChildren: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        collectionProperties: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        tokenProperties: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        propertyPermissions: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        constMetadata: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        variableMetadata: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        tokenData: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        totalSupply: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        accountBalance: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        balance: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        allowance: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        adminlist: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        allowlist: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        allowed: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        lastTokenId: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        collectionById: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        collectionStats: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        nextSponsored: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        effectiveCollectionLimits: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        totalPieces: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        allowanceForAll: {
            description: string;
            params: (RpcParam | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
    };
};
export default _default;

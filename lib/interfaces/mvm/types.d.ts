import type { Enum, Struct, Text } from '@polkadot/types-codec';
import type { AccountId } from '@polkadot/types/interfaces/runtime';
/** @name MoveModuleId */
export interface MoveModuleId extends Struct {
    readonly address: AccountId;
    readonly name: Text;
}
/** @name MoveStructTag */
export interface MoveStructTag extends Struct {
    readonly address: AccountId;
    readonly module: Text;
    readonly name: Text;
}
/** @name MoveTypeTag */
export interface MoveTypeTag extends Enum {
    readonly isBool: boolean;
    readonly isU8: boolean;
    readonly isU64: boolean;
    readonly isU128: boolean;
    readonly isAddress: boolean;
    readonly isSigner: boolean;
    readonly isVector: boolean;
    readonly isStruct: boolean;
    readonly type: 'Bool' | 'U8' | 'U64' | 'U128' | 'Address' | 'Signer' | 'Vector' | 'Struct';
}
export type PHANTOM_MVM = 'mvm';

import '@polkadot/types/lookup';
import type { Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, bool, i64, u128, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';
declare module '@polkadot/types/lookup' {
    /** @name FrameSystemAccountInfo (3) */
    interface FrameSystemAccountInfo extends Struct {
        readonly nonce: u32;
        readonly consumers: u32;
        readonly providers: u32;
        readonly sufficients: u32;
        readonly data: PalletBalancesAccountData;
    }
    /** @name PalletBalancesAccountData (5) */
    interface PalletBalancesAccountData extends Struct {
        readonly free: u128;
        readonly reserved: u128;
        readonly miscFrozen: u128;
        readonly feeFrozen: u128;
    }
    /** @name FrameSupportDispatchPerDispatchClassWeight (7) */
    interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
        readonly normal: SpWeightsWeightV2Weight;
        readonly operational: SpWeightsWeightV2Weight;
        readonly mandatory: SpWeightsWeightV2Weight;
    }
    /** @name SpWeightsWeightV2Weight (8) */
    interface SpWeightsWeightV2Weight extends Struct {
        readonly refTime: Compact<u64>;
        readonly proofSize: Compact<u64>;
    }
    /** @name SpRuntimeDigest (13) */
    interface SpRuntimeDigest extends Struct {
        readonly logs: Vec<SpRuntimeDigestDigestItem>;
    }
    /** @name SpRuntimeDigestDigestItem (15) */
    interface SpRuntimeDigestDigestItem extends Enum {
        readonly isOther: boolean;
        readonly asOther: Bytes;
        readonly isConsensus: boolean;
        readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
        readonly isSeal: boolean;
        readonly asSeal: ITuple<[U8aFixed, Bytes]>;
        readonly isPreRuntime: boolean;
        readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
        readonly isRuntimeEnvironmentUpdated: boolean;
        readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
    }
    /** @name FrameSystemEventRecord (18) */
    interface FrameSystemEventRecord extends Struct {
        readonly phase: FrameSystemPhase;
        readonly event: Event;
        readonly topics: Vec<H256>;
    }
    /** @name FrameSystemEvent (20) */
    interface FrameSystemEvent extends Enum {
        readonly isExtrinsicSuccess: boolean;
        readonly asExtrinsicSuccess: {
            readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
        } & Struct;
        readonly isExtrinsicFailed: boolean;
        readonly asExtrinsicFailed: {
            readonly dispatchError: SpRuntimeDispatchError;
            readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
        } & Struct;
        readonly isCodeUpdated: boolean;
        readonly isNewAccount: boolean;
        readonly asNewAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isKilledAccount: boolean;
        readonly asKilledAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isRemarked: boolean;
        readonly asRemarked: {
            readonly sender: AccountId32;
            readonly hash_: H256;
        } & Struct;
        readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
    }
    /** @name FrameSupportDispatchDispatchInfo (21) */
    interface FrameSupportDispatchDispatchInfo extends Struct {
        readonly weight: SpWeightsWeightV2Weight;
        readonly class: FrameSupportDispatchDispatchClass;
        readonly paysFee: FrameSupportDispatchPays;
    }
    /** @name FrameSupportDispatchDispatchClass (22) */
    interface FrameSupportDispatchDispatchClass extends Enum {
        readonly isNormal: boolean;
        readonly isOperational: boolean;
        readonly isMandatory: boolean;
        readonly type: 'Normal' | 'Operational' | 'Mandatory';
    }
    /** @name FrameSupportDispatchPays (23) */
    interface FrameSupportDispatchPays extends Enum {
        readonly isYes: boolean;
        readonly isNo: boolean;
        readonly type: 'Yes' | 'No';
    }
    /** @name SpRuntimeDispatchError (24) */
    interface SpRuntimeDispatchError extends Enum {
        readonly isOther: boolean;
        readonly isCannotLookup: boolean;
        readonly isBadOrigin: boolean;
        readonly isModule: boolean;
        readonly asModule: SpRuntimeModuleError;
        readonly isConsumerRemaining: boolean;
        readonly isNoProviders: boolean;
        readonly isTooManyConsumers: boolean;
        readonly isToken: boolean;
        readonly asToken: SpRuntimeTokenError;
        readonly isArithmetic: boolean;
        readonly asArithmetic: SpArithmeticArithmeticError;
        readonly isTransactional: boolean;
        readonly asTransactional: SpRuntimeTransactionalError;
        readonly isExhausted: boolean;
        readonly isCorruption: boolean;
        readonly isUnavailable: boolean;
        readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable';
    }
    /** @name SpRuntimeModuleError (25) */
    interface SpRuntimeModuleError extends Struct {
        readonly index: u8;
        readonly error: U8aFixed;
    }
    /** @name SpRuntimeTokenError (26) */
    interface SpRuntimeTokenError extends Enum {
        readonly isNoFunds: boolean;
        readonly isWouldDie: boolean;
        readonly isBelowMinimum: boolean;
        readonly isCannotCreate: boolean;
        readonly isUnknownAsset: boolean;
        readonly isFrozen: boolean;
        readonly isUnsupported: boolean;
        readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
    }
    /** @name SpArithmeticArithmeticError (27) */
    interface SpArithmeticArithmeticError extends Enum {
        readonly isUnderflow: boolean;
        readonly isOverflow: boolean;
        readonly isDivisionByZero: boolean;
        readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
    }
    /** @name SpRuntimeTransactionalError (28) */
    interface SpRuntimeTransactionalError extends Enum {
        readonly isLimitReached: boolean;
        readonly isNoLayer: boolean;
        readonly type: 'LimitReached' | 'NoLayer';
    }
    /** @name PalletGrandpaEvent (29) */
    interface PalletGrandpaEvent extends Enum {
        readonly isNewAuthorities: boolean;
        readonly asNewAuthorities: {
            readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
        } & Struct;
        readonly isPaused: boolean;
        readonly isResumed: boolean;
        readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
    }
    /** @name SpFinalityGrandpaAppPublic (32) */
    interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {
    }
    /** @name SpCoreEd25519Public (33) */
    interface SpCoreEd25519Public extends U8aFixed {
    }
    /** @name PalletBalancesEvent (34) */
    interface PalletBalancesEvent extends Enum {
        readonly isEndowed: boolean;
        readonly asEndowed: {
            readonly account: AccountId32;
            readonly freeBalance: u128;
        } & Struct;
        readonly isDustLost: boolean;
        readonly asDustLost: {
            readonly account: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isBalanceSet: boolean;
        readonly asBalanceSet: {
            readonly who: AccountId32;
            readonly free: u128;
            readonly reserved: u128;
        } & Struct;
        readonly isReserved: boolean;
        readonly asReserved: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnreserved: boolean;
        readonly asUnreserved: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isReserveRepatriated: boolean;
        readonly asReserveRepatriated: {
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
            readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
        } & Struct;
        readonly isDeposit: boolean;
        readonly asDeposit: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isWithdraw: boolean;
        readonly asWithdraw: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSlashed: boolean;
        readonly asSlashed: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
    }
    /** @name FrameSupportTokensMiscBalanceStatus (35) */
    interface FrameSupportTokensMiscBalanceStatus extends Enum {
        readonly isFree: boolean;
        readonly isReserved: boolean;
        readonly type: 'Free' | 'Reserved';
    }
    /** @name PalletTransactionPaymentEvent (36) */
    interface PalletTransactionPaymentEvent extends Enum {
        readonly isTransactionFeePaid: boolean;
        readonly asTransactionFeePaid: {
            readonly who: AccountId32;
            readonly actualFee: u128;
            readonly tip: u128;
        } & Struct;
        readonly type: 'TransactionFeePaid';
    }
    /** @name PalletSudoEvent (37) */
    interface PalletSudoEvent extends Enum {
        readonly isSudid: boolean;
        readonly asSudid: {
            readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isKeyChanged: boolean;
        readonly asKeyChanged: {
            readonly oldSudoer: Option<AccountId32>;
        } & Struct;
        readonly isSudoAsDone: boolean;
        readonly asSudoAsDone: {
            readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
    }
    /** @name OrmlTokensModuleEvent (41) */
    interface OrmlTokensModuleEvent extends Enum {
        readonly isEndowed: boolean;
        readonly asEndowed: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isDustLost: boolean;
        readonly asDustLost: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isReserved: boolean;
        readonly asReserved: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnreserved: boolean;
        readonly asUnreserved: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isReserveRepatriated: boolean;
        readonly asReserveRepatriated: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
            readonly status: FrameSupportTokensMiscBalanceStatus;
        } & Struct;
        readonly isBalanceSet: boolean;
        readonly asBalanceSet: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly free: u128;
            readonly reserved: u128;
        } & Struct;
        readonly isTotalIssuanceSet: boolean;
        readonly asTotalIssuanceSet: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly amount: u128;
        } & Struct;
        readonly isWithdrawn: boolean;
        readonly asWithdrawn: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSlashed: boolean;
        readonly asSlashed: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly freeAmount: u128;
            readonly reservedAmount: u128;
        } & Struct;
        readonly isDeposited: boolean;
        readonly asDeposited: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isLockSet: boolean;
        readonly asLockSet: {
            readonly lockId: U8aFixed;
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isLockRemoved: boolean;
        readonly asLockRemoved: {
            readonly lockId: U8aFixed;
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
        } & Struct;
        readonly isLocked: boolean;
        readonly asLocked: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnlocked: boolean;
        readonly asUnlocked: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Locked' | 'Unlocked';
    }
    /** @name PrimitivesCurrencyCurrencyId (42) */
    interface PrimitivesCurrencyCurrencyId extends Enum {
        readonly isNox: boolean;
        readonly isKsm: boolean;
        readonly type: 'Nox' | 'Ksm';
    }
    /** @name SpMvmEvent (44) */
    interface SpMvmEvent extends Enum {
        readonly isEvent: boolean;
        readonly asEvent: ITuple<[Bytes, Bytes, Bytes]>;
        readonly isModulePublished: boolean;
        readonly asModulePublished: AccountId32;
        readonly isPackagePublished: boolean;
        readonly asPackagePublished: AccountId32;
        readonly type: 'Event' | 'ModulePublished' | 'PackagePublished';
    }
    /** @name GroupsignEvent (45) */
    interface GroupsignEvent extends Enum {
        readonly isDispatchableExecuted: boolean;
        readonly asDispatchableExecuted: ITuple<[AccountId32, Bytes]>;
        readonly type: 'DispatchableExecuted';
    }
    /** @name ModuleCurrenciesModuleEvent (46) */
    interface ModuleCurrenciesModuleEvent extends Enum {
        readonly isTransferred: boolean;
        readonly asTransferred: ITuple<[PrimitivesCurrencyCurrencyId, AccountId32, AccountId32, u128]>;
        readonly isBalanceUpdated: boolean;
        readonly asBalanceUpdated: ITuple<[PrimitivesCurrencyCurrencyId, AccountId32, i64]>;
        readonly isDeposited: boolean;
        readonly asDeposited: ITuple<[PrimitivesCurrencyCurrencyId, AccountId32, u128]>;
        readonly isWithdrawn: boolean;
        readonly asWithdrawn: ITuple<[PrimitivesCurrencyCurrencyId, AccountId32, u128]>;
        readonly isDustSwept: boolean;
        readonly asDustSwept: ITuple<[PrimitivesCurrencyCurrencyId, AccountId32, u128]>;
        readonly type: 'Transferred' | 'BalanceUpdated' | 'Deposited' | 'Withdrawn' | 'DustSwept';
    }
    /** @name FrameSystemPhase (48) */
    interface FrameSystemPhase extends Enum {
        readonly isApplyExtrinsic: boolean;
        readonly asApplyExtrinsic: u32;
        readonly isFinalization: boolean;
        readonly isInitialization: boolean;
        readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
    }
    /** @name FrameSystemLastRuntimeUpgradeInfo (52) */
    interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
        readonly specVersion: Compact<u32>;
        readonly specName: Text;
    }
    /** @name FrameSystemCall (56) */
    interface FrameSystemCall extends Enum {
        readonly isRemark: boolean;
        readonly asRemark: {
            readonly remark: Bytes;
        } & Struct;
        readonly isSetHeapPages: boolean;
        readonly asSetHeapPages: {
            readonly pages: u64;
        } & Struct;
        readonly isSetCode: boolean;
        readonly asSetCode: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetCodeWithoutChecks: boolean;
        readonly asSetCodeWithoutChecks: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetStorage: boolean;
        readonly asSetStorage: {
            readonly items: Vec<ITuple<[Bytes, Bytes]>>;
        } & Struct;
        readonly isKillStorage: boolean;
        readonly asKillStorage: {
            readonly keys_: Vec<Bytes>;
        } & Struct;
        readonly isKillPrefix: boolean;
        readonly asKillPrefix: {
            readonly prefix: Bytes;
            readonly subkeys: u32;
        } & Struct;
        readonly isRemarkWithEvent: boolean;
        readonly asRemarkWithEvent: {
            readonly remark: Bytes;
        } & Struct;
        readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
    }
    /** @name FrameSystemLimitsBlockWeights (60) */
    interface FrameSystemLimitsBlockWeights extends Struct {
        readonly baseBlock: SpWeightsWeightV2Weight;
        readonly maxBlock: SpWeightsWeightV2Weight;
        readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    }
    /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (61) */
    interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
        readonly normal: FrameSystemLimitsWeightsPerClass;
        readonly operational: FrameSystemLimitsWeightsPerClass;
        readonly mandatory: FrameSystemLimitsWeightsPerClass;
    }
    /** @name FrameSystemLimitsWeightsPerClass (62) */
    interface FrameSystemLimitsWeightsPerClass extends Struct {
        readonly baseExtrinsic: SpWeightsWeightV2Weight;
        readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
        readonly maxTotal: Option<SpWeightsWeightV2Weight>;
        readonly reserved: Option<SpWeightsWeightV2Weight>;
    }
    /** @name FrameSystemLimitsBlockLength (64) */
    interface FrameSystemLimitsBlockLength extends Struct {
        readonly max: FrameSupportDispatchPerDispatchClassU32;
    }
    /** @name FrameSupportDispatchPerDispatchClassU32 (65) */
    interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
        readonly normal: u32;
        readonly operational: u32;
        readonly mandatory: u32;
    }
    /** @name SpWeightsRuntimeDbWeight (66) */
    interface SpWeightsRuntimeDbWeight extends Struct {
        readonly read: u64;
        readonly write: u64;
    }
    /** @name SpVersionRuntimeVersion (67) */
    interface SpVersionRuntimeVersion extends Struct {
        readonly specName: Text;
        readonly implName: Text;
        readonly authoringVersion: u32;
        readonly specVersion: u32;
        readonly implVersion: u32;
        readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
        readonly transactionVersion: u32;
        readonly stateVersion: u8;
    }
    /** @name FrameSystemError (72) */
    interface FrameSystemError extends Enum {
        readonly isInvalidSpecName: boolean;
        readonly isSpecVersionNeedsToIncrease: boolean;
        readonly isFailedToExtractRuntimeVersion: boolean;
        readonly isNonDefaultComposite: boolean;
        readonly isNonZeroRefCount: boolean;
        readonly isCallFiltered: boolean;
        readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
    }
    /** @name PalletTimestampCall (74) */
    interface PalletTimestampCall extends Enum {
        readonly isSet: boolean;
        readonly asSet: {
            readonly now: Compact<u64>;
        } & Struct;
        readonly type: 'Set';
    }
    /** @name SpConsensusAuraSr25519AppSr25519Public (76) */
    interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {
    }
    /** @name SpCoreSr25519Public (77) */
    interface SpCoreSr25519Public extends U8aFixed {
    }
    /** @name PalletGrandpaStoredState (80) */
    interface PalletGrandpaStoredState extends Enum {
        readonly isLive: boolean;
        readonly isPendingPause: boolean;
        readonly asPendingPause: {
            readonly scheduledAt: u32;
            readonly delay: u32;
        } & Struct;
        readonly isPaused: boolean;
        readonly isPendingResume: boolean;
        readonly asPendingResume: {
            readonly scheduledAt: u32;
            readonly delay: u32;
        } & Struct;
        readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
    }
    /** @name PalletGrandpaStoredPendingChange (81) */
    interface PalletGrandpaStoredPendingChange extends Struct {
        readonly scheduledAt: u32;
        readonly delay: u32;
        readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
        readonly forced: Option<u32>;
    }
    /** @name PalletGrandpaCall (84) */
    interface PalletGrandpaCall extends Enum {
        readonly isReportEquivocation: boolean;
        readonly asReportEquivocation: {
            readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
            readonly keyOwnerProof: SpCoreVoid;
        } & Struct;
        readonly isReportEquivocationUnsigned: boolean;
        readonly asReportEquivocationUnsigned: {
            readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
            readonly keyOwnerProof: SpCoreVoid;
        } & Struct;
        readonly isNoteStalled: boolean;
        readonly asNoteStalled: {
            readonly delay: u32;
            readonly bestFinalizedBlockNumber: u32;
        } & Struct;
        readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
    }
    /** @name SpFinalityGrandpaEquivocationProof (85) */
    interface SpFinalityGrandpaEquivocationProof extends Struct {
        readonly setId: u64;
        readonly equivocation: SpFinalityGrandpaEquivocation;
    }
    /** @name SpFinalityGrandpaEquivocation (86) */
    interface SpFinalityGrandpaEquivocation extends Enum {
        readonly isPrevote: boolean;
        readonly asPrevote: FinalityGrandpaEquivocationPrevote;
        readonly isPrecommit: boolean;
        readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
        readonly type: 'Prevote' | 'Precommit';
    }
    /** @name FinalityGrandpaEquivocationPrevote (87) */
    interface FinalityGrandpaEquivocationPrevote extends Struct {
        readonly roundNumber: u64;
        readonly identity: SpFinalityGrandpaAppPublic;
        readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
        readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
    }
    /** @name FinalityGrandpaPrevote (88) */
    interface FinalityGrandpaPrevote extends Struct {
        readonly targetHash: H256;
        readonly targetNumber: u32;
    }
    /** @name SpFinalityGrandpaAppSignature (89) */
    interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {
    }
    /** @name SpCoreEd25519Signature (90) */
    interface SpCoreEd25519Signature extends U8aFixed {
    }
    /** @name FinalityGrandpaEquivocationPrecommit (93) */
    interface FinalityGrandpaEquivocationPrecommit extends Struct {
        readonly roundNumber: u64;
        readonly identity: SpFinalityGrandpaAppPublic;
        readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
        readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
    }
    /** @name FinalityGrandpaPrecommit (94) */
    interface FinalityGrandpaPrecommit extends Struct {
        readonly targetHash: H256;
        readonly targetNumber: u32;
    }
    /** @name SpCoreVoid (96) */
    type SpCoreVoid = Null;
    /** @name PalletGrandpaError (97) */
    interface PalletGrandpaError extends Enum {
        readonly isPauseFailed: boolean;
        readonly isResumeFailed: boolean;
        readonly isChangePending: boolean;
        readonly isTooSoon: boolean;
        readonly isInvalidKeyOwnershipProof: boolean;
        readonly isInvalidEquivocationProof: boolean;
        readonly isDuplicateOffenceReport: boolean;
        readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
    }
    /** @name PalletBalancesBalanceLock (99) */
    interface PalletBalancesBalanceLock extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
        readonly reasons: PalletBalancesReasons;
    }
    /** @name PalletBalancesReasons (100) */
    interface PalletBalancesReasons extends Enum {
        readonly isFee: boolean;
        readonly isMisc: boolean;
        readonly isAll: boolean;
        readonly type: 'Fee' | 'Misc' | 'All';
    }
    /** @name PalletBalancesReserveData (103) */
    interface PalletBalancesReserveData extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }
    /** @name PalletBalancesCall (105) */
    interface PalletBalancesCall extends Enum {
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isSetBalance: boolean;
        readonly asSetBalance: {
            readonly who: MultiAddress;
            readonly newFree: Compact<u128>;
            readonly newReserved: Compact<u128>;
        } & Struct;
        readonly isForceTransfer: boolean;
        readonly asForceTransfer: {
            readonly source: MultiAddress;
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isTransferKeepAlive: boolean;
        readonly asTransferKeepAlive: {
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isTransferAll: boolean;
        readonly asTransferAll: {
            readonly dest: MultiAddress;
            readonly keepAlive: bool;
        } & Struct;
        readonly isForceUnreserve: boolean;
        readonly asForceUnreserve: {
            readonly who: MultiAddress;
            readonly amount: u128;
        } & Struct;
        readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
    }
    /** @name PalletBalancesError (110) */
    interface PalletBalancesError extends Enum {
        readonly isVestingBalance: boolean;
        readonly isLiquidityRestrictions: boolean;
        readonly isInsufficientBalance: boolean;
        readonly isExistentialDeposit: boolean;
        readonly isKeepAlive: boolean;
        readonly isExistingVestingSchedule: boolean;
        readonly isDeadAccount: boolean;
        readonly isTooManyReserves: boolean;
        readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves';
    }
    /** @name PalletTransactionPaymentReleases (112) */
    interface PalletTransactionPaymentReleases extends Enum {
        readonly isV1Ancient: boolean;
        readonly isV2: boolean;
        readonly type: 'V1Ancient' | 'V2';
    }
    /** @name PalletSudoCall (113) */
    interface PalletSudoCall extends Enum {
        readonly isSudo: boolean;
        readonly asSudo: {
            readonly call: Call;
        } & Struct;
        readonly isSudoUncheckedWeight: boolean;
        readonly asSudoUncheckedWeight: {
            readonly call: Call;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isSetKey: boolean;
        readonly asSetKey: {
            readonly new_: MultiAddress;
        } & Struct;
        readonly isSudoAs: boolean;
        readonly asSudoAs: {
            readonly who: MultiAddress;
            readonly call: Call;
        } & Struct;
        readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
    }
    /** @name OrmlTokensModuleCall (115) */
    interface OrmlTokensModuleCall extends Enum {
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly dest: MultiAddress;
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTransferAll: boolean;
        readonly asTransferAll: {
            readonly dest: MultiAddress;
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly keepAlive: bool;
        } & Struct;
        readonly isTransferKeepAlive: boolean;
        readonly asTransferKeepAlive: {
            readonly dest: MultiAddress;
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isForceTransfer: boolean;
        readonly asForceTransfer: {
            readonly source: MultiAddress;
            readonly dest: MultiAddress;
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isSetBalance: boolean;
        readonly asSetBalance: {
            readonly who: MultiAddress;
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly newFree: Compact<u128>;
            readonly newReserved: Compact<u128>;
        } & Struct;
        readonly type: 'Transfer' | 'TransferAll' | 'TransferKeepAlive' | 'ForceTransfer' | 'SetBalance';
    }
    /** @name SpMvmCall (116) */
    interface SpMvmCall extends Enum {
        readonly isExecuteScriptFunction: boolean;
        readonly asExecuteScriptFunction: {
            readonly moduleAddress: AccountId32;
            readonly moduleName: Bytes;
            readonly tyArgs: Bytes;
            readonly args: Bytes;
            readonly gasLimit: u64;
        } & Struct;
        readonly isExecute: boolean;
        readonly asExecute: {
            readonly txBc: Bytes;
            readonly gasLimit: u64;
        } & Struct;
        readonly isPublishModule: boolean;
        readonly asPublishModule: {
            readonly moduleBc: Bytes;
            readonly gasLimit: u64;
        } & Struct;
        readonly isPublishPackage: boolean;
        readonly asPublishPackage: {
            readonly package: Bytes;
            readonly gasLimit: u64;
        } & Struct;
        readonly type: 'ExecuteScriptFunction' | 'Execute' | 'PublishModule' | 'PublishPackage';
    }
    /** @name GroupsignCall (117) */
    interface GroupsignCall extends Enum {
        readonly isGroupsignCall: boolean;
        readonly asGroupsignCall: {
            readonly signedCall: Call;
            readonly signers: Vec<AccountId32>;
            readonly signatures: Vec<SpRuntimeMultiSignature>;
            readonly validSince: u32;
            readonly validThru: u32;
        } & Struct;
        readonly type: 'GroupsignCall';
    }
    /** @name SpRuntimeMultiSignature (120) */
    interface SpRuntimeMultiSignature extends Enum {
        readonly isEd25519: boolean;
        readonly asEd25519: SpCoreEd25519Signature;
        readonly isSr25519: boolean;
        readonly asSr25519: SpCoreSr25519Signature;
        readonly isEcdsa: boolean;
        readonly asEcdsa: SpCoreEcdsaSignature;
        readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
    }
    /** @name SpCoreSr25519Signature (121) */
    interface SpCoreSr25519Signature extends U8aFixed {
    }
    /** @name SpCoreEcdsaSignature (122) */
    interface SpCoreEcdsaSignature extends U8aFixed {
    }
    /** @name ModuleCurrenciesModuleCall (124) */
    interface ModuleCurrenciesModuleCall extends Enum {
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly dest: MultiAddress;
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTransferNativeCurrency: boolean;
        readonly asTransferNativeCurrency: {
            readonly dest: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isUpdateBalance: boolean;
        readonly asUpdateBalance: {
            readonly who: MultiAddress;
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly amount: i64;
        } & Struct;
        readonly isSweepDust: boolean;
        readonly asSweepDust: {
            readonly currencyId: PrimitivesCurrencyCurrencyId;
            readonly accounts: Vec<AccountId32>;
        } & Struct;
        readonly type: 'Transfer' | 'TransferNativeCurrency' | 'UpdateBalance' | 'SweepDust';
    }
    /** @name PalletSudoError (125) */
    interface PalletSudoError extends Enum {
        readonly isRequireSudo: boolean;
        readonly type: 'RequireSudo';
    }
    /** @name OrmlTokensBalanceLock (128) */
    interface OrmlTokensBalanceLock extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }
    /** @name OrmlTokensAccountData (130) */
    interface OrmlTokensAccountData extends Struct {
        readonly free: u128;
        readonly reserved: u128;
        readonly frozen: u128;
    }
    /** @name OrmlTokensReserveData (132) */
    interface OrmlTokensReserveData extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }
    /** @name OrmlTokensModuleError (134) */
    interface OrmlTokensModuleError extends Enum {
        readonly isBalanceTooLow: boolean;
        readonly isAmountIntoBalanceFailed: boolean;
        readonly isLiquidityRestrictions: boolean;
        readonly isMaxLocksExceeded: boolean;
        readonly isKeepAlive: boolean;
        readonly isExistentialDeposit: boolean;
        readonly isDeadAccount: boolean;
        readonly isTooManyReserves: boolean;
        readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TooManyReserves';
    }
    /** @name FrameSupportPalletId (135) */
    interface FrameSupportPalletId extends U8aFixed {
    }
    /** @name SpMvmError (136) */
    interface SpMvmError extends Enum {
        readonly isNumConversionError: boolean;
        readonly isInvalidVMConfig: boolean;
        readonly isInvalidGasAmountMaxValue: boolean;
        readonly isScriptValidationError: boolean;
        readonly isTransactionValidationError: boolean;
        readonly isTransactionValidationError2: boolean;
        readonly isTransactionSignersNumError: boolean;
        readonly isAccountAddressConversionError: boolean;
        readonly isTransactionIsNotAllowedError: boolean;
        readonly isUnknownValidationStatus: boolean;
        readonly isInvalidSignature: boolean;
        readonly isInvalidAuthKey: boolean;
        readonly isSequenceNumberTooOld: boolean;
        readonly isSequenceNumberTooNew: boolean;
        readonly isSequenceNumberTooBig: boolean;
        readonly isInsufficientBalanceForTransactionFee: boolean;
        readonly isTransactionExpired: boolean;
        readonly isSendingAccountDoesNotExist: boolean;
        readonly isRejectedWriteSet: boolean;
        readonly isInvalidWriteSet: boolean;
        readonly isExceededMaxTransactionSize: boolean;
        readonly isUnknownScript: boolean;
        readonly isUnknownModule: boolean;
        readonly isMaxGasUnitsExceedsMaxGasUnitsBound: boolean;
        readonly isMaxGasUnitsBelowMinTransactionGasUnits: boolean;
        readonly isGasUnitPriceBelowMinBound: boolean;
        readonly isGasUnitPriceAboveMaxBound: boolean;
        readonly isInvalidGasSpecifier: boolean;
        readonly isSendingAccountFrozen: boolean;
        readonly isUnableToDeserializeAccount: boolean;
        readonly isCurrencyInfoDoesNotExist: boolean;
        readonly isInvalidModulePublisher: boolean;
        readonly isNoAccountRole: boolean;
        readonly isBadChainId: boolean;
        readonly isUnknownVerificationError: boolean;
        readonly isIndexOutOfBounds: boolean;
        readonly isInvalidSignatureToken: boolean;
        readonly isRecursiveStructDefinition: boolean;
        readonly isInvalidResourceField: boolean;
        readonly isInvalidFallThrough: boolean;
        readonly isNegativeStackSizeWithinBlock: boolean;
        readonly isInvalidMainFunctionSignature: boolean;
        readonly isDuplicateElement: boolean;
        readonly isInvalidModuleHandle: boolean;
        readonly isUnimplementedHandle: boolean;
        readonly isLookupFailed: boolean;
        readonly isTypeMismatch: boolean;
        readonly isMissingDependency: boolean;
        readonly isPopResourceError: boolean;
        readonly isBrTypeMismatchError: boolean;
        readonly isAbortTypeMismatchError: boolean;
        readonly isStlocTypeMismatchError: boolean;
        readonly isStlocUnsafeToDestroyError: boolean;
        readonly isUnsafeRetLocalOrResourceStillBorrowed: boolean;
        readonly isRetTypeMismatchError: boolean;
        readonly isRetBorrowedMutableReferenceError: boolean;
        readonly isFreezerefTypeMismatchError: boolean;
        readonly isFreezerefExistsMutableBorrowError: boolean;
        readonly isBorrowfieldTypeMismatchError: boolean;
        readonly isBorrowfieldBadFieldError: boolean;
        readonly isBorrowfieldExistsMutableBorrowError: boolean;
        readonly isCopylocUnavailableError: boolean;
        readonly isCopylocResourceError: boolean;
        readonly isCopylocExistsBorrowError: boolean;
        readonly isMovelocUnavailableError: boolean;
        readonly isMovelocExistsBorrowError: boolean;
        readonly isBorrowlocReferenceError: boolean;
        readonly isBorrowlocUnavailableError: boolean;
        readonly isBorrowlocExistsBorrowError: boolean;
        readonly isCallTypeMismatchError: boolean;
        readonly isCallBorrowedMutableReferenceError: boolean;
        readonly isPackTypeMismatchError: boolean;
        readonly isUnpackTypeMismatchError: boolean;
        readonly isReadrefTypeMismatchError: boolean;
        readonly isReadrefResourceError: boolean;
        readonly isReadrefExistsMutableBorrowError: boolean;
        readonly isWriterefTypeMismatchError: boolean;
        readonly isWriterefResourceError: boolean;
        readonly isWriterefExistsBorrowError: boolean;
        readonly isWriterefNoMutableReferenceError: boolean;
        readonly isIntegerOpTypeMismatchError: boolean;
        readonly isBooleanOpTypeMismatchError: boolean;
        readonly isEqualityOpTypeMismatchError: boolean;
        readonly isExistsResourceTypeMismatchError: boolean;
        readonly isBorrowglobalTypeMismatchError: boolean;
        readonly isBorrowglobalNoResourceError: boolean;
        readonly isMovefromTypeMismatchError: boolean;
        readonly isMovefromNoResourceError: boolean;
        readonly isMovetoTypeMismatchError: boolean;
        readonly isMovetoNoResourceError: boolean;
        readonly isModuleAddressDoesNotMatchSender: boolean;
        readonly isNoModuleHandles: boolean;
        readonly isPositiveStackSizeAtBlockEnd: boolean;
        readonly isMissingAcquiresResourceAnnotationError: boolean;
        readonly isExtraneousAcquiresResourceAnnotationError: boolean;
        readonly isDuplicateAcquiresResourceAnnotationError: boolean;
        readonly isInvalidAcquiresResourceAnnotationError: boolean;
        readonly isGlobalReferenceError: boolean;
        readonly isConstraintKindMismatch: boolean;
        readonly isNumberOfTypeArgumentsMismatch: boolean;
        readonly isLoopInInstantiationGraph: boolean;
        readonly isZeroSizedStruct: boolean;
        readonly isLinkerError: boolean;
        readonly isInvalidConstantType: boolean;
        readonly isMalformedConstantData: boolean;
        readonly isEmptyCodeUnit: boolean;
        readonly isInvalidLoopSplit: boolean;
        readonly isInvalidLoopBreak: boolean;
        readonly isInvalidLoopContinue: boolean;
        readonly isUnsafeRetUnusedResources: boolean;
        readonly isTooManyLocals: boolean;
        readonly isGenericMemberOpcodeMismatch: boolean;
        readonly isFunctionResolutionFailure: boolean;
        readonly isInvalidOperationInScript: boolean;
        readonly isDuplicateModuleName: boolean;
        readonly isUnknownInvariantViolationError: boolean;
        readonly isEmptyValueStack: boolean;
        readonly isPcOverflow: boolean;
        readonly isVerificationError: boolean;
        readonly isStorageError: boolean;
        readonly isInternalTypeError: boolean;
        readonly isEventKeyMismatch: boolean;
        readonly isUnreachable: boolean;
        readonly isVmStartupFailure: boolean;
        readonly isUnexpectedErrorFromKnownMoveFunction: boolean;
        readonly isVerifierInvariantViolation: boolean;
        readonly isUnexpectedVerifierError: boolean;
        readonly isUnexpectedDeserializationError: boolean;
        readonly isFailedToSerializeWriteSetChanges: boolean;
        readonly isFailedToDeserializeResource: boolean;
        readonly isTypeResolutionFailure: boolean;
        readonly isUnknownBinaryError: boolean;
        readonly isMalformed: boolean;
        readonly isBadMagic: boolean;
        readonly isUnknownVersion: boolean;
        readonly isUnknownTableType: boolean;
        readonly isUnknownSignatureType: boolean;
        readonly isUnknownSerializedType: boolean;
        readonly isUnknownOpcode: boolean;
        readonly isBadHeaderTable: boolean;
        readonly isUnexpectedSignatureType: boolean;
        readonly isDuplicateTable: boolean;
        readonly isUnknownNominalResource: boolean;
        readonly isUnknownKind: boolean;
        readonly isUnknownNativeStructFlag: boolean;
        readonly isBadU64: boolean;
        readonly isBadU128: boolean;
        readonly isValueSerializationError: boolean;
        readonly isValueDeserializationError: boolean;
        readonly isCodeDeserializationError: boolean;
        readonly isUnknownRuntimeStatus: boolean;
        readonly isOutOfGas: boolean;
        readonly isResourceDoesNotExist: boolean;
        readonly isResourceAlreadyExists: boolean;
        readonly isMissingData: boolean;
        readonly isDataFormatError: boolean;
        readonly isAborted: boolean;
        readonly isArithmeticError: boolean;
        readonly isExecutionStackOverflow: boolean;
        readonly isCallStackOverflow: boolean;
        readonly isVmMaxTypeDepthReached: boolean;
        readonly isVmMaxValueDepthReached: boolean;
        readonly isUnknownStatus: boolean;
        readonly isBadTransactionFeeCurrency: boolean;
        readonly isFeatureUnderGating: boolean;
        readonly isFieldMissingTypeAbility: boolean;
        readonly isPopWithoutDropAbility: boolean;
        readonly isCopylocWithoutCopyAbility: boolean;
        readonly isReadrefWithoutCopyAbility: boolean;
        readonly isWriterefWithoutDropAbility: boolean;
        readonly isExistsWithoutKeyAbilityOrBadArgument: boolean;
        readonly isBorrowglobalWithoutKeyAbility: boolean;
        readonly isMovefromWithoutKeyAbility: boolean;
        readonly isMovetoWithoutKeyAbility: boolean;
        readonly isMissingAcquiresAnnotation: boolean;
        readonly isExtraneousAcquiresAnnotation: boolean;
        readonly isDuplicateAcquiresAnnotation: boolean;
        readonly isInvalidAcquiresAnnotation: boolean;
        readonly isConstraintNotSatisfied: boolean;
        readonly isUnsafeRetUnusedValuesWithoutDrop: boolean;
        readonly isBackwardIncompatibleModuleUpdate: boolean;
        readonly isCyclicModuleDependency: boolean;
        readonly isNumberOfArgumentsMismatch: boolean;
        readonly isInvalidParamTypeForDeserialization: boolean;
        readonly isFailedToDeserializeArgument: boolean;
        readonly isNumberOfSignerArgumentsMismatch: boolean;
        readonly isCalledScriptVisibleFromNonScriptVisible: boolean;
        readonly isExecuteScriptFunctionCalledOnNonScriptVisible: boolean;
        readonly isInvalidFriendDeclWithSelf: boolean;
        readonly isInvalidFriendDeclWithModulesOutsideAccountAddress: boolean;
        readonly isInvalidFriendDeclWithModulesInDependencies: boolean;
        readonly isCyclicModuleFriendship: boolean;
        readonly isUnknownAbility: boolean;
        readonly isInvalidFlagBits: boolean;
        readonly isSecondaryKeysAddressesCountMismatch: boolean;
        readonly isSignersContainDuplicates: boolean;
        readonly isSequenceNonceInvalid: boolean;
        readonly isInvalidPhantomTypeParamPosition: boolean;
        readonly isVecUpdateExistsMutableBorrowError: boolean;
        readonly isVecBorrowElementExistsMutableBorrowError: boolean;
        readonly isDuplicateNativeFunction: boolean;
        readonly type: 'NumConversionError' | 'InvalidVMConfig' | 'InvalidGasAmountMaxValue' | 'ScriptValidationError' | 'TransactionValidationError' | 'TransactionValidationError2' | 'TransactionSignersNumError' | 'AccountAddressConversionError' | 'TransactionIsNotAllowedError' | 'UnknownValidationStatus' | 'InvalidSignature' | 'InvalidAuthKey' | 'SequenceNumberTooOld' | 'SequenceNumberTooNew' | 'SequenceNumberTooBig' | 'InsufficientBalanceForTransactionFee' | 'TransactionExpired' | 'SendingAccountDoesNotExist' | 'RejectedWriteSet' | 'InvalidWriteSet' | 'ExceededMaxTransactionSize' | 'UnknownScript' | 'UnknownModule' | 'MaxGasUnitsExceedsMaxGasUnitsBound' | 'MaxGasUnitsBelowMinTransactionGasUnits' | 'GasUnitPriceBelowMinBound' | 'GasUnitPriceAboveMaxBound' | 'InvalidGasSpecifier' | 'SendingAccountFrozen' | 'UnableToDeserializeAccount' | 'CurrencyInfoDoesNotExist' | 'InvalidModulePublisher' | 'NoAccountRole' | 'BadChainId' | 'UnknownVerificationError' | 'IndexOutOfBounds' | 'InvalidSignatureToken' | 'RecursiveStructDefinition' | 'InvalidResourceField' | 'InvalidFallThrough' | 'NegativeStackSizeWithinBlock' | 'InvalidMainFunctionSignature' | 'DuplicateElement' | 'InvalidModuleHandle' | 'UnimplementedHandle' | 'LookupFailed' | 'TypeMismatch' | 'MissingDependency' | 'PopResourceError' | 'BrTypeMismatchError' | 'AbortTypeMismatchError' | 'StlocTypeMismatchError' | 'StlocUnsafeToDestroyError' | 'UnsafeRetLocalOrResourceStillBorrowed' | 'RetTypeMismatchError' | 'RetBorrowedMutableReferenceError' | 'FreezerefTypeMismatchError' | 'FreezerefExistsMutableBorrowError' | 'BorrowfieldTypeMismatchError' | 'BorrowfieldBadFieldError' | 'BorrowfieldExistsMutableBorrowError' | 'CopylocUnavailableError' | 'CopylocResourceError' | 'CopylocExistsBorrowError' | 'MovelocUnavailableError' | 'MovelocExistsBorrowError' | 'BorrowlocReferenceError' | 'BorrowlocUnavailableError' | 'BorrowlocExistsBorrowError' | 'CallTypeMismatchError' | 'CallBorrowedMutableReferenceError' | 'PackTypeMismatchError' | 'UnpackTypeMismatchError' | 'ReadrefTypeMismatchError' | 'ReadrefResourceError' | 'ReadrefExistsMutableBorrowError' | 'WriterefTypeMismatchError' | 'WriterefResourceError' | 'WriterefExistsBorrowError' | 'WriterefNoMutableReferenceError' | 'IntegerOpTypeMismatchError' | 'BooleanOpTypeMismatchError' | 'EqualityOpTypeMismatchError' | 'ExistsResourceTypeMismatchError' | 'BorrowglobalTypeMismatchError' | 'BorrowglobalNoResourceError' | 'MovefromTypeMismatchError' | 'MovefromNoResourceError' | 'MovetoTypeMismatchError' | 'MovetoNoResourceError' | 'ModuleAddressDoesNotMatchSender' | 'NoModuleHandles' | 'PositiveStackSizeAtBlockEnd' | 'MissingAcquiresResourceAnnotationError' | 'ExtraneousAcquiresResourceAnnotationError' | 'DuplicateAcquiresResourceAnnotationError' | 'InvalidAcquiresResourceAnnotationError' | 'GlobalReferenceError' | 'ConstraintKindMismatch' | 'NumberOfTypeArgumentsMismatch' | 'LoopInInstantiationGraph' | 'ZeroSizedStruct' | 'LinkerError' | 'InvalidConstantType' | 'MalformedConstantData' | 'EmptyCodeUnit' | 'InvalidLoopSplit' | 'InvalidLoopBreak' | 'InvalidLoopContinue' | 'UnsafeRetUnusedResources' | 'TooManyLocals' | 'GenericMemberOpcodeMismatch' | 'FunctionResolutionFailure' | 'InvalidOperationInScript' | 'DuplicateModuleName' | 'UnknownInvariantViolationError' | 'EmptyValueStack' | 'PcOverflow' | 'VerificationError' | 'StorageError' | 'InternalTypeError' | 'EventKeyMismatch' | 'Unreachable' | 'VmStartupFailure' | 'UnexpectedErrorFromKnownMoveFunction' | 'VerifierInvariantViolation' | 'UnexpectedVerifierError' | 'UnexpectedDeserializationError' | 'FailedToSerializeWriteSetChanges' | 'FailedToDeserializeResource' | 'TypeResolutionFailure' | 'UnknownBinaryError' | 'Malformed' | 'BadMagic' | 'UnknownVersion' | 'UnknownTableType' | 'UnknownSignatureType' | 'UnknownSerializedType' | 'UnknownOpcode' | 'BadHeaderTable' | 'UnexpectedSignatureType' | 'DuplicateTable' | 'UnknownNominalResource' | 'UnknownKind' | 'UnknownNativeStructFlag' | 'BadU64' | 'BadU128' | 'ValueSerializationError' | 'ValueDeserializationError' | 'CodeDeserializationError' | 'UnknownRuntimeStatus' | 'OutOfGas' | 'ResourceDoesNotExist' | 'ResourceAlreadyExists' | 'MissingData' | 'DataFormatError' | 'Aborted' | 'ArithmeticError' | 'ExecutionStackOverflow' | 'CallStackOverflow' | 'VmMaxTypeDepthReached' | 'VmMaxValueDepthReached' | 'UnknownStatus' | 'BadTransactionFeeCurrency' | 'FeatureUnderGating' | 'FieldMissingTypeAbility' | 'PopWithoutDropAbility' | 'CopylocWithoutCopyAbility' | 'ReadrefWithoutCopyAbility' | 'WriterefWithoutDropAbility' | 'ExistsWithoutKeyAbilityOrBadArgument' | 'BorrowglobalWithoutKeyAbility' | 'MovefromWithoutKeyAbility' | 'MovetoWithoutKeyAbility' | 'MissingAcquiresAnnotation' | 'ExtraneousAcquiresAnnotation' | 'DuplicateAcquiresAnnotation' | 'InvalidAcquiresAnnotation' | 'ConstraintNotSatisfied' | 'UnsafeRetUnusedValuesWithoutDrop' | 'BackwardIncompatibleModuleUpdate' | 'CyclicModuleDependency' | 'NumberOfArgumentsMismatch' | 'InvalidParamTypeForDeserialization' | 'FailedToDeserializeArgument' | 'NumberOfSignerArgumentsMismatch' | 'CalledScriptVisibleFromNonScriptVisible' | 'ExecuteScriptFunctionCalledOnNonScriptVisible' | 'InvalidFriendDeclWithSelf' | 'InvalidFriendDeclWithModulesOutsideAccountAddress' | 'InvalidFriendDeclWithModulesInDependencies' | 'CyclicModuleFriendship' | 'UnknownAbility' | 'InvalidFlagBits' | 'SecondaryKeysAddressesCountMismatch' | 'SignersContainDuplicates' | 'SequenceNonceInvalid' | 'InvalidPhantomTypeParamPosition' | 'VecUpdateExistsMutableBorrowError' | 'VecBorrowElementExistsMutableBorrowError' | 'DuplicateNativeFunction';
    }
    /** @name GroupsignError (137) */
    interface GroupsignError extends Enum {
        readonly isEraValidationError: boolean;
        readonly isSignaturesLengthDoesntMatch: boolean;
        readonly isZeroSignatureCall: boolean;
        readonly isSignatureVerificationError: boolean;
        readonly isExecutionFailed: boolean;
        readonly type: 'EraValidationError' | 'SignaturesLengthDoesntMatch' | 'ZeroSignatureCall' | 'SignatureVerificationError' | 'ExecutionFailed';
    }
    /** @name ModuleCurrenciesModuleError (138) */
    interface ModuleCurrenciesModuleError extends Enum {
        readonly isAmountIntoBalanceFailed: boolean;
        readonly isBalanceTooLow: boolean;
        readonly isDepositFailed: boolean;
        readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'DepositFailed';
    }
    /** @name FrameSystemExtensionsCheckNonZeroSender (141) */
    type FrameSystemExtensionsCheckNonZeroSender = Null;
    /** @name FrameSystemExtensionsCheckSpecVersion (142) */
    type FrameSystemExtensionsCheckSpecVersion = Null;
    /** @name FrameSystemExtensionsCheckTxVersion (143) */
    type FrameSystemExtensionsCheckTxVersion = Null;
    /** @name FrameSystemExtensionsCheckGenesis (144) */
    type FrameSystemExtensionsCheckGenesis = Null;
    /** @name FrameSystemExtensionsCheckNonce (147) */
    interface FrameSystemExtensionsCheckNonce extends Compact<u32> {
    }
    /** @name FrameSystemExtensionsCheckWeight (148) */
    type FrameSystemExtensionsCheckWeight = Null;
    /** @name PalletTransactionPaymentChargeTransactionPayment (149) */
    interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {
    }
    /** @name MoveContractsNodeRuntimeRuntime (150) */
    type MoveContractsNodeRuntimeRuntime = Null;
}

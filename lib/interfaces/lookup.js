"use strict";
// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable sort-keys */
exports.default = {
    /**
     * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: 'u32',
        consumers: 'u32',
        providers: 'u32',
        sufficients: 'u32',
        data: 'PalletBalancesAccountData'
    },
    /**
     * Lookup5: pallet_balances::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: 'u128',
        reserved: 'u128',
        miscFrozen: 'u128',
        feeFrozen: 'u128'
    },
    /**
     * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
     **/
    FrameSupportDispatchPerDispatchClassWeight: {
        normal: 'SpWeightsWeightV2Weight',
        operational: 'SpWeightsWeightV2Weight',
        mandatory: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup8: sp_weights::weight_v2::Weight
     **/
    SpWeightsWeightV2Weight: {
        refTime: 'Compact<u64>',
        proofSize: 'Compact<u64>'
    },
    /**
     * Lookup13: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: 'Vec<SpRuntimeDigestDigestItem>'
    },
    /**
     * Lookup15: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: 'Bytes',
            __Unused1: 'Null',
            __Unused2: 'Null',
            __Unused3: 'Null',
            Consensus: '([u8;4],Bytes)',
            Seal: '([u8;4],Bytes)',
            PreRuntime: '([u8;4],Bytes)',
            __Unused7: 'Null',
            RuntimeEnvironmentUpdated: 'Null'
        }
    },
    /**
     * Lookup18: frame_system::EventRecord<move_contracts_node_runtime::RuntimeEvent, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: 'FrameSystemPhase',
        event: 'Event',
        topics: 'Vec<H256>'
    },
    /**
     * Lookup20: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: 'FrameSupportDispatchDispatchInfo',
            },
            ExtrinsicFailed: {
                dispatchError: 'SpRuntimeDispatchError',
                dispatchInfo: 'FrameSupportDispatchDispatchInfo',
            },
            CodeUpdated: 'Null',
            NewAccount: {
                account: 'AccountId32',
            },
            KilledAccount: {
                account: 'AccountId32',
            },
            Remarked: {
                _alias: {
                    hash_: 'hash',
                },
                sender: 'AccountId32',
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup21: frame_support::dispatch::DispatchInfo
     **/
    FrameSupportDispatchDispatchInfo: {
        weight: 'SpWeightsWeightV2Weight',
        class: 'FrameSupportDispatchDispatchClass',
        paysFee: 'FrameSupportDispatchPays'
    },
    /**
     * Lookup22: frame_support::dispatch::DispatchClass
     **/
    FrameSupportDispatchDispatchClass: {
        _enum: ['Normal', 'Operational', 'Mandatory']
    },
    /**
     * Lookup23: frame_support::dispatch::Pays
     **/
    FrameSupportDispatchPays: {
        _enum: ['Yes', 'No']
    },
    /**
     * Lookup24: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: 'Null',
            CannotLookup: 'Null',
            BadOrigin: 'Null',
            Module: 'SpRuntimeModuleError',
            ConsumerRemaining: 'Null',
            NoProviders: 'Null',
            TooManyConsumers: 'Null',
            Token: 'SpRuntimeTokenError',
            Arithmetic: 'SpArithmeticArithmeticError',
            Transactional: 'SpRuntimeTransactionalError',
            Exhausted: 'Null',
            Corruption: 'Null',
            Unavailable: 'Null'
        }
    },
    /**
     * Lookup25: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: 'u8',
        error: '[u8;4]'
    },
    /**
     * Lookup26: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
    },
    /**
     * Lookup27: sp_arithmetic::ArithmeticError
     **/
    SpArithmeticArithmeticError: {
        _enum: ['Underflow', 'Overflow', 'DivisionByZero']
    },
    /**
     * Lookup28: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: ['LimitReached', 'NoLayer']
    },
    /**
     * Lookup29: pallet_grandpa::pallet::Event
     **/
    PalletGrandpaEvent: {
        _enum: {
            NewAuthorities: {
                authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
            },
            Paused: 'Null',
            Resumed: 'Null'
        }
    },
    /**
     * Lookup32: sp_finality_grandpa::app::Public
     **/
    SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
    /**
     * Lookup33: sp_core::ed25519::Public
     **/
    SpCoreEd25519Public: '[u8;32]',
    /**
     * Lookup34: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: 'AccountId32',
                freeBalance: 'u128',
            },
            DustLost: {
                account: 'AccountId32',
                amount: 'u128',
            },
            Transfer: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            BalanceSet: {
                who: 'AccountId32',
                free: 'u128',
                reserved: 'u128',
            },
            Reserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Unreserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            ReserveRepatriated: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
            },
            Deposit: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Withdraw: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Slashed: {
                who: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup35: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: ['Free', 'Reserved']
    },
    /**
     * Lookup36: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: 'AccountId32',
                actualFee: 'u128',
                tip: 'u128'
            }
        }
    },
    /**
     * Lookup37: pallet_sudo::pallet::Event<T>
     **/
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: 'Result<Null, SpRuntimeDispatchError>',
            },
            KeyChanged: {
                oldSudoer: 'Option<AccountId32>',
            },
            SudoAsDone: {
                sudoResult: 'Result<Null, SpRuntimeDispatchError>'
            }
        }
    },
    /**
     * Lookup41: orml_tokens::module::Event<T>
     **/
    OrmlTokensModuleEvent: {
        _enum: {
            Endowed: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            DustLost: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Transfer: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            Reserved: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Unreserved: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            ReserveRepatriated: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                status: 'FrameSupportTokensMiscBalanceStatus',
            },
            BalanceSet: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                free: 'u128',
                reserved: 'u128',
            },
            TotalIssuanceSet: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                amount: 'u128',
            },
            Withdrawn: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Slashed: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                freeAmount: 'u128',
                reservedAmount: 'u128',
            },
            Deposited: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            LockSet: {
                lockId: '[u8;8]',
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            LockRemoved: {
                lockId: '[u8;8]',
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
            },
            Locked: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Unlocked: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup42: primitives::currency::CurrencyId
     **/
    PrimitivesCurrencyCurrencyId: {
        _enum: ['NOX', 'KSM']
    },
    /**
     * Lookup44: sp_mvm::pallet::Event<T>
     **/
    SpMvmEvent: {
        _enum: {
            Event: '(Bytes,Bytes,Bytes)',
            ModulePublished: 'AccountId32',
            PackagePublished: 'AccountId32'
        }
    },
    /**
     * Lookup45: groupsign::pallet::Event<T>
     **/
    GroupsignEvent: {
        _enum: {
            DispatchableExecuted: '(AccountId32,Bytes)'
        }
    },
    /**
     * Lookup46: module_currencies::module::Event<T>
     **/
    ModuleCurrenciesModuleEvent: {
        _enum: {
            Transferred: '(PrimitivesCurrencyCurrencyId,AccountId32,AccountId32,u128)',
            BalanceUpdated: '(PrimitivesCurrencyCurrencyId,AccountId32,i64)',
            Deposited: '(PrimitivesCurrencyCurrencyId,AccountId32,u128)',
            Withdrawn: '(PrimitivesCurrencyCurrencyId,AccountId32,u128)',
            DustSwept: '(PrimitivesCurrencyCurrencyId,AccountId32,u128)'
        }
    },
    /**
     * Lookup48: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: 'u32',
            Finalization: 'Null',
            Initialization: 'Null'
        }
    },
    /**
     * Lookup52: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: 'Compact<u32>',
        specName: 'Text'
    },
    /**
     * Lookup56: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            remark: {
                remark: 'Bytes',
            },
            set_heap_pages: {
                pages: 'u64',
            },
            set_code: {
                code: 'Bytes',
            },
            set_code_without_checks: {
                code: 'Bytes',
            },
            set_storage: {
                items: 'Vec<(Bytes,Bytes)>',
            },
            kill_storage: {
                _alias: {
                    keys_: 'keys',
                },
                keys_: 'Vec<Bytes>',
            },
            kill_prefix: {
                prefix: 'Bytes',
                subkeys: 'u32',
            },
            remark_with_event: {
                remark: 'Bytes'
            }
        }
    },
    /**
     * Lookup60: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: 'SpWeightsWeightV2Weight',
        maxBlock: 'SpWeightsWeightV2Weight',
        perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
    },
    /**
     * Lookup61: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: 'FrameSystemLimitsWeightsPerClass',
        operational: 'FrameSystemLimitsWeightsPerClass',
        mandatory: 'FrameSystemLimitsWeightsPerClass'
    },
    /**
     * Lookup62: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: 'SpWeightsWeightV2Weight',
        maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
        maxTotal: 'Option<SpWeightsWeightV2Weight>',
        reserved: 'Option<SpWeightsWeightV2Weight>'
    },
    /**
     * Lookup64: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: 'FrameSupportDispatchPerDispatchClassU32'
    },
    /**
     * Lookup65: frame_support::dispatch::PerDispatchClass<T>
     **/
    FrameSupportDispatchPerDispatchClassU32: {
        normal: 'u32',
        operational: 'u32',
        mandatory: 'u32'
    },
    /**
     * Lookup66: sp_weights::RuntimeDbWeight
     **/
    SpWeightsRuntimeDbWeight: {
        read: 'u64',
        write: 'u64'
    },
    /**
     * Lookup67: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: 'Text',
        implName: 'Text',
        authoringVersion: 'u32',
        specVersion: 'u32',
        implVersion: 'u32',
        apis: 'Vec<([u8;8],u32)>',
        transactionVersion: 'u32',
        stateVersion: 'u8'
    },
    /**
     * Lookup72: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
    },
    /**
     * Lookup74: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: 'Compact<u64>'
            }
        }
    },
    /**
     * Lookup76: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
    /**
     * Lookup77: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: '[u8;32]',
    /**
     * Lookup80: pallet_grandpa::StoredState<N>
     **/
    PalletGrandpaStoredState: {
        _enum: {
            Live: 'Null',
            PendingPause: {
                scheduledAt: 'u32',
                delay: 'u32',
            },
            Paused: 'Null',
            PendingResume: {
                scheduledAt: 'u32',
                delay: 'u32'
            }
        }
    },
    /**
     * Lookup81: pallet_grandpa::StoredPendingChange<N, Limit>
     **/
    PalletGrandpaStoredPendingChange: {
        scheduledAt: 'u32',
        delay: 'u32',
        nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
        forced: 'Option<u32>'
    },
    /**
     * Lookup84: pallet_grandpa::pallet::Call<T>
     **/
    PalletGrandpaCall: {
        _enum: {
            report_equivocation: {
                equivocationProof: 'SpFinalityGrandpaEquivocationProof',
                keyOwnerProof: 'SpCoreVoid',
            },
            report_equivocation_unsigned: {
                equivocationProof: 'SpFinalityGrandpaEquivocationProof',
                keyOwnerProof: 'SpCoreVoid',
            },
            note_stalled: {
                delay: 'u32',
                bestFinalizedBlockNumber: 'u32'
            }
        }
    },
    /**
     * Lookup85: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocationProof: {
        setId: 'u64',
        equivocation: 'SpFinalityGrandpaEquivocation'
    },
    /**
     * Lookup86: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
     **/
    SpFinalityGrandpaEquivocation: {
        _enum: {
            Prevote: 'FinalityGrandpaEquivocationPrevote',
            Precommit: 'FinalityGrandpaEquivocationPrecommit'
        }
    },
    /**
     * Lookup87: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
     **/
    FinalityGrandpaEquivocationPrevote: {
        roundNumber: 'u64',
        identity: 'SpFinalityGrandpaAppPublic',
        first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
        second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
    },
    /**
     * Lookup88: finality_grandpa::Prevote<primitive_types::H256, N>
     **/
    FinalityGrandpaPrevote: {
        targetHash: 'H256',
        targetNumber: 'u32'
    },
    /**
     * Lookup89: sp_finality_grandpa::app::Signature
     **/
    SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
    /**
     * Lookup90: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: '[u8;64]',
    /**
     * Lookup93: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
     **/
    FinalityGrandpaEquivocationPrecommit: {
        roundNumber: 'u64',
        identity: 'SpFinalityGrandpaAppPublic',
        first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
        second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
    },
    /**
     * Lookup94: finality_grandpa::Precommit<primitive_types::H256, N>
     **/
    FinalityGrandpaPrecommit: {
        targetHash: 'H256',
        targetNumber: 'u32'
    },
    /**
     * Lookup96: sp_core::Void
     **/
    SpCoreVoid: 'Null',
    /**
     * Lookup97: pallet_grandpa::pallet::Error<T>
     **/
    PalletGrandpaError: {
        _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
    },
    /**
     * Lookup99: pallet_balances::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: '[u8;8]',
        amount: 'u128',
        reasons: 'PalletBalancesReasons'
    },
    /**
     * Lookup100: pallet_balances::Reasons
     **/
    PalletBalancesReasons: {
        _enum: ['Fee', 'Misc', 'All']
    },
    /**
     * Lookup103: pallet_balances::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup105: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            set_balance: {
                who: 'MultiAddress',
                newFree: 'Compact<u128>',
                newReserved: 'Compact<u128>',
            },
            force_transfer: {
                source: 'MultiAddress',
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_keep_alive: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_all: {
                dest: 'MultiAddress',
                keepAlive: 'bool',
            },
            force_unreserve: {
                who: 'MultiAddress',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup110: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
    },
    /**
     * Lookup112: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: ['V1Ancient', 'V2']
    },
    /**
     * Lookup113: pallet_sudo::pallet::Call<T>
     **/
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: 'Call',
            },
            sudo_unchecked_weight: {
                call: 'Call',
                weight: 'SpWeightsWeightV2Weight',
            },
            set_key: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
            },
            sudo_as: {
                who: 'MultiAddress',
                call: 'Call'
            }
        }
    },
    /**
     * Lookup115: orml_tokens::module::Call<T>
     **/
    OrmlTokensModuleCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                currencyId: 'PrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            transfer_all: {
                dest: 'MultiAddress',
                currencyId: 'PrimitivesCurrencyCurrencyId',
                keepAlive: 'bool',
            },
            transfer_keep_alive: {
                dest: 'MultiAddress',
                currencyId: 'PrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            force_transfer: {
                source: 'MultiAddress',
                dest: 'MultiAddress',
                currencyId: 'PrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            set_balance: {
                who: 'MultiAddress',
                currencyId: 'PrimitivesCurrencyCurrencyId',
                newFree: 'Compact<u128>',
                newReserved: 'Compact<u128>'
            }
        }
    },
    /**
     * Lookup116: sp_mvm::pallet::Call<T>
     **/
    SpMvmCall: {
        _enum: {
            execute_script_function: {
                moduleAddress: 'AccountId32',
                moduleName: 'Bytes',
                tyArgs: 'Bytes',
                args: 'Bytes',
                gasLimit: 'u64',
            },
            execute: {
                txBc: 'Bytes',
                gasLimit: 'u64',
            },
            publish_module: {
                moduleBc: 'Bytes',
                gasLimit: 'u64',
            },
            publish_package: {
                package: 'Bytes',
                gasLimit: 'u64'
            }
        }
    },
    /**
     * Lookup117: groupsign::pallet::Call<T>
     **/
    GroupsignCall: {
        _enum: {
            groupsign_call: {
                signedCall: 'Call',
                signers: 'Vec<AccountId32>',
                signatures: 'Vec<SpRuntimeMultiSignature>',
                validSince: 'u32',
                validThru: 'u32'
            }
        }
    },
    /**
     * Lookup120: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: 'SpCoreEd25519Signature',
            Sr25519: 'SpCoreSr25519Signature',
            Ecdsa: 'SpCoreEcdsaSignature'
        }
    },
    /**
     * Lookup121: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: '[u8;64]',
    /**
     * Lookup122: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: '[u8;65]',
    /**
     * Lookup124: module_currencies::module::Call<T>
     **/
    ModuleCurrenciesModuleCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                currencyId: 'PrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            transfer_native_currency: {
                dest: 'MultiAddress',
                amount: 'Compact<u128>',
            },
            update_balance: {
                who: 'MultiAddress',
                currencyId: 'PrimitivesCurrencyCurrencyId',
                amount: 'i64',
            },
            sweep_dust: {
                currencyId: 'PrimitivesCurrencyCurrencyId',
                accounts: 'Vec<AccountId32>'
            }
        }
    },
    /**
     * Lookup125: pallet_sudo::pallet::Error<T>
     **/
    PalletSudoError: {
        _enum: ['RequireSudo']
    },
    /**
     * Lookup128: orml_tokens::BalanceLock<Balance>
     **/
    OrmlTokensBalanceLock: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup130: orml_tokens::AccountData<Balance>
     **/
    OrmlTokensAccountData: {
        free: 'u128',
        reserved: 'u128',
        frozen: 'u128'
    },
    /**
     * Lookup132: orml_tokens::ReserveData<ReserveIdentifier, Balance>
     **/
    OrmlTokensReserveData: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup134: orml_tokens::module::Error<T>
     **/
    OrmlTokensModuleError: {
        _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
    },
    /**
     * Lookup135: frame_support::PalletId
     **/
    FrameSupportPalletId: '[u8;8]',
    /**
     * Lookup136: sp_mvm::pallet::Error<T>
     **/
    SpMvmError: {
        _enum: ['NumConversionError', 'InvalidVMConfig', 'InvalidGasAmountMaxValue', 'ScriptValidationError', 'TransactionValidationError', 'TransactionValidationError2', 'TransactionSignersNumError', 'AccountAddressConversionError', 'TransactionIsNotAllowedError', 'UnknownValidationStatus', 'InvalidSignature', 'InvalidAuthKey', 'SequenceNumberTooOld', 'SequenceNumberTooNew', 'SequenceNumberTooBig', 'InsufficientBalanceForTransactionFee', 'TransactionExpired', 'SendingAccountDoesNotExist', 'RejectedWriteSet', 'InvalidWriteSet', 'ExceededMaxTransactionSize', 'UnknownScript', 'UnknownModule', 'MaxGasUnitsExceedsMaxGasUnitsBound', 'MaxGasUnitsBelowMinTransactionGasUnits', 'GasUnitPriceBelowMinBound', 'GasUnitPriceAboveMaxBound', 'InvalidGasSpecifier', 'SendingAccountFrozen', 'UnableToDeserializeAccount', 'CurrencyInfoDoesNotExist', 'InvalidModulePublisher', 'NoAccountRole', 'BadChainId', 'UnknownVerificationError', 'IndexOutOfBounds', 'InvalidSignatureToken', 'RecursiveStructDefinition', 'InvalidResourceField', 'InvalidFallThrough', 'NegativeStackSizeWithinBlock', 'InvalidMainFunctionSignature', 'DuplicateElement', 'InvalidModuleHandle', 'UnimplementedHandle', 'LookupFailed', 'TypeMismatch', 'MissingDependency', 'PopResourceError', 'BrTypeMismatchError', 'AbortTypeMismatchError', 'StlocTypeMismatchError', 'StlocUnsafeToDestroyError', 'UnsafeRetLocalOrResourceStillBorrowed', 'RetTypeMismatchError', 'RetBorrowedMutableReferenceError', 'FreezerefTypeMismatchError', 'FreezerefExistsMutableBorrowError', 'BorrowfieldTypeMismatchError', 'BorrowfieldBadFieldError', 'BorrowfieldExistsMutableBorrowError', 'CopylocUnavailableError', 'CopylocResourceError', 'CopylocExistsBorrowError', 'MovelocUnavailableError', 'MovelocExistsBorrowError', 'BorrowlocReferenceError', 'BorrowlocUnavailableError', 'BorrowlocExistsBorrowError', 'CallTypeMismatchError', 'CallBorrowedMutableReferenceError', 'PackTypeMismatchError', 'UnpackTypeMismatchError', 'ReadrefTypeMismatchError', 'ReadrefResourceError', 'ReadrefExistsMutableBorrowError', 'WriterefTypeMismatchError', 'WriterefResourceError', 'WriterefExistsBorrowError', 'WriterefNoMutableReferenceError', 'IntegerOpTypeMismatchError', 'BooleanOpTypeMismatchError', 'EqualityOpTypeMismatchError', 'ExistsResourceTypeMismatchError', 'BorrowglobalTypeMismatchError', 'BorrowglobalNoResourceError', 'MovefromTypeMismatchError', 'MovefromNoResourceError', 'MovetoTypeMismatchError', 'MovetoNoResourceError', 'ModuleAddressDoesNotMatchSender', 'NoModuleHandles', 'PositiveStackSizeAtBlockEnd', 'MissingAcquiresResourceAnnotationError', 'ExtraneousAcquiresResourceAnnotationError', 'DuplicateAcquiresResourceAnnotationError', 'InvalidAcquiresResourceAnnotationError', 'GlobalReferenceError', 'ConstraintKindMismatch', 'NumberOfTypeArgumentsMismatch', 'LoopInInstantiationGraph', 'ZeroSizedStruct', 'LinkerError', 'InvalidConstantType', 'MalformedConstantData', 'EmptyCodeUnit', 'InvalidLoopSplit', 'InvalidLoopBreak', 'InvalidLoopContinue', 'UnsafeRetUnusedResources', 'TooManyLocals', 'GenericMemberOpcodeMismatch', 'FunctionResolutionFailure', 'InvalidOperationInScript', 'DuplicateModuleName', 'UnknownInvariantViolationError', 'EmptyValueStack', 'PcOverflow', 'VerificationError', 'StorageError', 'InternalTypeError', 'EventKeyMismatch', 'Unreachable', 'VmStartupFailure', 'UnexpectedErrorFromKnownMoveFunction', 'VerifierInvariantViolation', 'UnexpectedVerifierError', 'UnexpectedDeserializationError', 'FailedToSerializeWriteSetChanges', 'FailedToDeserializeResource', 'TypeResolutionFailure', 'UnknownBinaryError', 'Malformed', 'BadMagic', 'UnknownVersion', 'UnknownTableType', 'UnknownSignatureType', 'UnknownSerializedType', 'UnknownOpcode', 'BadHeaderTable', 'UnexpectedSignatureType', 'DuplicateTable', 'UnknownNominalResource', 'UnknownKind', 'UnknownNativeStructFlag', 'BadU64', 'BadU128', 'ValueSerializationError', 'ValueDeserializationError', 'CodeDeserializationError', 'UnknownRuntimeStatus', 'OutOfGas', 'ResourceDoesNotExist', 'ResourceAlreadyExists', 'MissingData', 'DataFormatError', 'Aborted', 'ArithmeticError', 'ExecutionStackOverflow', 'CallStackOverflow', 'VmMaxTypeDepthReached', 'VmMaxValueDepthReached', 'UnknownStatus', 'BadTransactionFeeCurrency', 'FeatureUnderGating', 'FieldMissingTypeAbility', 'PopWithoutDropAbility', 'CopylocWithoutCopyAbility', 'ReadrefWithoutCopyAbility', 'WriterefWithoutDropAbility', 'ExistsWithoutKeyAbilityOrBadArgument', 'BorrowglobalWithoutKeyAbility', 'MovefromWithoutKeyAbility', 'MovetoWithoutKeyAbility', 'MissingAcquiresAnnotation', 'ExtraneousAcquiresAnnotation', 'DuplicateAcquiresAnnotation', 'InvalidAcquiresAnnotation', 'ConstraintNotSatisfied', 'UnsafeRetUnusedValuesWithoutDrop', 'BackwardIncompatibleModuleUpdate', 'CyclicModuleDependency', 'NumberOfArgumentsMismatch', 'InvalidParamTypeForDeserialization', 'FailedToDeserializeArgument', 'NumberOfSignerArgumentsMismatch', 'CalledScriptVisibleFromNonScriptVisible', 'ExecuteScriptFunctionCalledOnNonScriptVisible', 'InvalidFriendDeclWithSelf', 'InvalidFriendDeclWithModulesOutsideAccountAddress', 'InvalidFriendDeclWithModulesInDependencies', 'CyclicModuleFriendship', 'UnknownAbility', 'InvalidFlagBits', 'SecondaryKeysAddressesCountMismatch', 'SignersContainDuplicates', 'SequenceNonceInvalid', 'InvalidPhantomTypeParamPosition', 'VecUpdateExistsMutableBorrowError', 'VecBorrowElementExistsMutableBorrowError', 'DuplicateNativeFunction']
    },
    /**
     * Lookup137: groupsign::pallet::Error<T>
     **/
    GroupsignError: {
        _enum: ['EraValidationError', 'SignaturesLengthDoesntMatch', 'ZeroSignatureCall', 'SignatureVerificationError', 'ExecutionFailed']
    },
    /**
     * Lookup138: module_currencies::module::Error<T>
     **/
    ModuleCurrenciesModuleError: {
        _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
    },
    /**
     * Lookup141: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
     **/
    FrameSystemExtensionsCheckNonZeroSender: 'Null',
    /**
     * Lookup142: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: 'Null',
    /**
     * Lookup143: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: 'Null',
    /**
     * Lookup144: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: 'Null',
    /**
     * Lookup147: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: 'Compact<u32>',
    /**
     * Lookup148: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: 'Null',
    /**
     * Lookup149: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
    /**
     * Lookup150: move_contracts_node_runtime::Runtime
     **/
    MoveContractsNodeRuntimeRuntime: 'Null'
};

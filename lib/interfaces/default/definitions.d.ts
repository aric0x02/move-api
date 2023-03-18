declare const _default: {
    types: {
        FrameSystemAccountInfo: {
            nonce: string;
            consumers: string;
            providers: string;
            sufficients: string;
            data: string;
        };
        PalletBalancesAccountData: {
            free: string;
            reserved: string;
            miscFrozen: string;
            feeFrozen: string;
        };
        FrameSupportDispatchPerDispatchClassWeight: {
            normal: string;
            operational: string;
            mandatory: string;
        };
        SpWeightsWeightV2Weight: {
            refTime: string;
            proofSize: string;
        };
        SpRuntimeDigest: {
            logs: string;
        };
        SpRuntimeDigestDigestItem: {
            _enum: {
                Other: string;
                __Unused1: string;
                __Unused2: string;
                __Unused3: string;
                Consensus: string;
                Seal: string;
                PreRuntime: string;
                __Unused7: string;
                RuntimeEnvironmentUpdated: string;
            };
        };
        FrameSystemEventRecord: {
            phase: string;
            event: string;
            topics: string;
        };
        FrameSystemEvent: {
            _enum: {
                ExtrinsicSuccess: {
                    dispatchInfo: string;
                };
                ExtrinsicFailed: {
                    dispatchError: string;
                    dispatchInfo: string;
                };
                CodeUpdated: string;
                NewAccount: {
                    account: string;
                };
                KilledAccount: {
                    account: string;
                };
                Remarked: {
                    _alias: {
                        hash_: string;
                    };
                    sender: string;
                    hash_: string;
                };
            };
        };
        FrameSupportDispatchDispatchInfo: {
            weight: string;
            class: string;
            paysFee: string;
        };
        FrameSupportDispatchDispatchClass: {
            _enum: string[];
        };
        FrameSupportDispatchPays: {
            _enum: string[];
        };
        SpRuntimeDispatchError: {
            _enum: {
                Other: string;
                CannotLookup: string;
                BadOrigin: string;
                Module: string;
                ConsumerRemaining: string;
                NoProviders: string;
                TooManyConsumers: string;
                Token: string;
                Arithmetic: string;
                Transactional: string;
                Exhausted: string;
                Corruption: string;
                Unavailable: string;
            };
        };
        SpRuntimeModuleError: {
            index: string;
            error: string;
        };
        SpRuntimeTokenError: {
            _enum: string[];
        };
        SpArithmeticArithmeticError: {
            _enum: string[];
        };
        SpRuntimeTransactionalError: {
            _enum: string[];
        };
        PalletGrandpaEvent: {
            _enum: {
                NewAuthorities: {
                    authoritySet: string;
                };
                Paused: string;
                Resumed: string;
            };
        };
        SpFinalityGrandpaAppPublic: string;
        SpCoreEd25519Public: string;
        PalletBalancesEvent: {
            _enum: {
                Endowed: {
                    account: string;
                    freeBalance: string;
                };
                DustLost: {
                    account: string;
                    amount: string;
                };
                Transfer: {
                    from: string;
                    to: string;
                    amount: string;
                };
                BalanceSet: {
                    who: string;
                    free: string;
                    reserved: string;
                };
                Reserved: {
                    who: string;
                    amount: string;
                };
                Unreserved: {
                    who: string;
                    amount: string;
                };
                ReserveRepatriated: {
                    from: string;
                    to: string;
                    amount: string;
                    destinationStatus: string;
                };
                Deposit: {
                    who: string;
                    amount: string;
                };
                Withdraw: {
                    who: string;
                    amount: string;
                };
                Slashed: {
                    who: string;
                    amount: string;
                };
            };
        };
        FrameSupportTokensMiscBalanceStatus: {
            _enum: string[];
        };
        PalletTransactionPaymentEvent: {
            _enum: {
                TransactionFeePaid: {
                    who: string;
                    actualFee: string;
                    tip: string;
                };
            };
        };
        PalletSudoEvent: {
            _enum: {
                Sudid: {
                    sudoResult: string;
                };
                KeyChanged: {
                    oldSudoer: string;
                };
                SudoAsDone: {
                    sudoResult: string;
                };
            };
        };
        OrmlTokensModuleEvent: {
            _enum: {
                Endowed: {
                    currencyId: string;
                    who: string;
                    amount: string;
                };
                DustLost: {
                    currencyId: string;
                    who: string;
                    amount: string;
                };
                Transfer: {
                    currencyId: string;
                    from: string;
                    to: string;
                    amount: string;
                };
                Reserved: {
                    currencyId: string;
                    who: string;
                    amount: string;
                };
                Unreserved: {
                    currencyId: string;
                    who: string;
                    amount: string;
                };
                ReserveRepatriated: {
                    currencyId: string;
                    from: string;
                    to: string;
                    amount: string;
                    status: string;
                };
                BalanceSet: {
                    currencyId: string;
                    who: string;
                    free: string;
                    reserved: string;
                };
                TotalIssuanceSet: {
                    currencyId: string;
                    amount: string;
                };
                Withdrawn: {
                    currencyId: string;
                    who: string;
                    amount: string;
                };
                Slashed: {
                    currencyId: string;
                    who: string;
                    freeAmount: string;
                    reservedAmount: string;
                };
                Deposited: {
                    currencyId: string;
                    who: string;
                    amount: string;
                };
                LockSet: {
                    lockId: string;
                    currencyId: string;
                    who: string;
                    amount: string;
                };
                LockRemoved: {
                    lockId: string;
                    currencyId: string;
                    who: string;
                };
                Locked: {
                    currencyId: string;
                    who: string;
                    amount: string;
                };
                Unlocked: {
                    currencyId: string;
                    who: string;
                    amount: string;
                };
            };
        };
        PrimitivesCurrencyCurrencyId: {
            _enum: string[];
        };
        SpMvmEvent: {
            _enum: {
                Event: string;
                ModulePublished: string;
                PackagePublished: string;
            };
        };
        GroupsignEvent: {
            _enum: {
                DispatchableExecuted: string;
            };
        };
        ModuleCurrenciesModuleEvent: {
            _enum: {
                Transferred: string;
                BalanceUpdated: string;
                Deposited: string;
                Withdrawn: string;
                DustSwept: string;
            };
        };
        FrameSystemPhase: {
            _enum: {
                ApplyExtrinsic: string;
                Finalization: string;
                Initialization: string;
            };
        };
        FrameSystemLastRuntimeUpgradeInfo: {
            specVersion: string;
            specName: string;
        };
        FrameSystemCall: {
            _enum: {
                remark: {
                    remark: string;
                };
                set_heap_pages: {
                    pages: string;
                };
                set_code: {
                    code: string;
                };
                set_code_without_checks: {
                    code: string;
                };
                set_storage: {
                    items: string;
                };
                kill_storage: {
                    _alias: {
                        keys_: string;
                    };
                    keys_: string;
                };
                kill_prefix: {
                    prefix: string;
                    subkeys: string;
                };
                remark_with_event: {
                    remark: string;
                };
            };
        };
        FrameSystemLimitsBlockWeights: {
            baseBlock: string;
            maxBlock: string;
            perClass: string;
        };
        FrameSupportDispatchPerDispatchClassWeightsPerClass: {
            normal: string;
            operational: string;
            mandatory: string;
        };
        FrameSystemLimitsWeightsPerClass: {
            baseExtrinsic: string;
            maxExtrinsic: string;
            maxTotal: string;
            reserved: string;
        };
        FrameSystemLimitsBlockLength: {
            max: string;
        };
        FrameSupportDispatchPerDispatchClassU32: {
            normal: string;
            operational: string;
            mandatory: string;
        };
        SpWeightsRuntimeDbWeight: {
            read: string;
            write: string;
        };
        SpVersionRuntimeVersion: {
            specName: string;
            implName: string;
            authoringVersion: string;
            specVersion: string;
            implVersion: string;
            apis: string;
            transactionVersion: string;
            stateVersion: string;
        };
        FrameSystemError: {
            _enum: string[];
        };
        PalletTimestampCall: {
            _enum: {
                set: {
                    now: string;
                };
            };
        };
        SpConsensusAuraSr25519AppSr25519Public: string;
        SpCoreSr25519Public: string;
        PalletGrandpaStoredState: {
            _enum: {
                Live: string;
                PendingPause: {
                    scheduledAt: string;
                    delay: string;
                };
                Paused: string;
                PendingResume: {
                    scheduledAt: string;
                    delay: string;
                };
            };
        };
        PalletGrandpaStoredPendingChange: {
            scheduledAt: string;
            delay: string;
            nextAuthorities: string;
            forced: string;
        };
        PalletGrandpaCall: {
            _enum: {
                report_equivocation: {
                    equivocationProof: string;
                    keyOwnerProof: string;
                };
                report_equivocation_unsigned: {
                    equivocationProof: string;
                    keyOwnerProof: string;
                };
                note_stalled: {
                    delay: string;
                    bestFinalizedBlockNumber: string;
                };
            };
        };
        SpFinalityGrandpaEquivocationProof: {
            setId: string;
            equivocation: string;
        };
        SpFinalityGrandpaEquivocation: {
            _enum: {
                Prevote: string;
                Precommit: string;
            };
        };
        FinalityGrandpaEquivocationPrevote: {
            roundNumber: string;
            identity: string;
            first: string;
            second: string;
        };
        FinalityGrandpaPrevote: {
            targetHash: string;
            targetNumber: string;
        };
        SpFinalityGrandpaAppSignature: string;
        SpCoreEd25519Signature: string;
        FinalityGrandpaEquivocationPrecommit: {
            roundNumber: string;
            identity: string;
            first: string;
            second: string;
        };
        FinalityGrandpaPrecommit: {
            targetHash: string;
            targetNumber: string;
        };
        SpCoreVoid: string;
        PalletGrandpaError: {
            _enum: string[];
        };
        PalletBalancesBalanceLock: {
            id: string;
            amount: string;
            reasons: string;
        };
        PalletBalancesReasons: {
            _enum: string[];
        };
        PalletBalancesReserveData: {
            id: string;
            amount: string;
        };
        PalletBalancesCall: {
            _enum: {
                transfer: {
                    dest: string;
                    value: string;
                };
                set_balance: {
                    who: string;
                    newFree: string;
                    newReserved: string;
                };
                force_transfer: {
                    source: string;
                    dest: string;
                    value: string;
                };
                transfer_keep_alive: {
                    dest: string;
                    value: string;
                };
                transfer_all: {
                    dest: string;
                    keepAlive: string;
                };
                force_unreserve: {
                    who: string;
                    amount: string;
                };
            };
        };
        PalletBalancesError: {
            _enum: string[];
        };
        PalletTransactionPaymentReleases: {
            _enum: string[];
        };
        PalletSudoCall: {
            _enum: {
                sudo: {
                    call: string;
                };
                sudo_unchecked_weight: {
                    call: string;
                    weight: string;
                };
                set_key: {
                    _alias: {
                        new_: string;
                    };
                    new_: string;
                };
                sudo_as: {
                    who: string;
                    call: string;
                };
            };
        };
        OrmlTokensModuleCall: {
            _enum: {
                transfer: {
                    dest: string;
                    currencyId: string;
                    amount: string;
                };
                transfer_all: {
                    dest: string;
                    currencyId: string;
                    keepAlive: string;
                };
                transfer_keep_alive: {
                    dest: string;
                    currencyId: string;
                    amount: string;
                };
                force_transfer: {
                    source: string;
                    dest: string;
                    currencyId: string;
                    amount: string;
                };
                set_balance: {
                    who: string;
                    currencyId: string;
                    newFree: string;
                    newReserved: string;
                };
            };
        };
        SpMvmCall: {
            _enum: {
                execute_script_function: {
                    moduleAddress: string;
                    moduleName: string;
                    tyArgs: string;
                    args: string;
                    gasLimit: string;
                };
                execute: {
                    txBc: string;
                    gasLimit: string;
                };
                publish_module: {
                    moduleBc: string;
                    gasLimit: string;
                };
                publish_package: {
                    package: string;
                    gasLimit: string;
                };
            };
        };
        GroupsignCall: {
            _enum: {
                groupsign_call: {
                    signedCall: string;
                    signers: string;
                    signatures: string;
                    validSince: string;
                    validThru: string;
                };
            };
        };
        SpRuntimeMultiSignature: {
            _enum: {
                Ed25519: string;
                Sr25519: string;
                Ecdsa: string;
            };
        };
        SpCoreSr25519Signature: string;
        SpCoreEcdsaSignature: string;
        ModuleCurrenciesModuleCall: {
            _enum: {
                transfer: {
                    dest: string;
                    currencyId: string;
                    amount: string;
                };
                transfer_native_currency: {
                    dest: string;
                    amount: string;
                };
                update_balance: {
                    who: string;
                    currencyId: string;
                    amount: string;
                };
                sweep_dust: {
                    currencyId: string;
                    accounts: string;
                };
            };
        };
        PalletSudoError: {
            _enum: string[];
        };
        OrmlTokensBalanceLock: {
            id: string;
            amount: string;
        };
        OrmlTokensAccountData: {
            free: string;
            reserved: string;
            frozen: string;
        };
        OrmlTokensReserveData: {
            id: string;
            amount: string;
        };
        OrmlTokensModuleError: {
            _enum: string[];
        };
        FrameSupportPalletId: string;
        SpMvmError: {
            _enum: string[];
        };
        GroupsignError: {
            _enum: string[];
        };
        ModuleCurrenciesModuleError: {
            _enum: string[];
        };
        FrameSystemExtensionsCheckNonZeroSender: string;
        FrameSystemExtensionsCheckSpecVersion: string;
        FrameSystemExtensionsCheckTxVersion: string;
        FrameSystemExtensionsCheckGenesis: string;
        FrameSystemExtensionsCheckNonce: string;
        FrameSystemExtensionsCheckWeight: string;
        PalletTransactionPaymentChargeTransactionPayment: string;
        MoveContractsNodeRuntimeRuntime: string;
    };
    rpc: {};
};
export default _default;

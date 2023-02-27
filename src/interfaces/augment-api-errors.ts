// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
    };
    currencies: {
      /**
       * Unable to convert the Amount type into Balance.
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Deposit result is not expected
       **/
      DepositFailed: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
    };
    groupsign: {
      EraValidationError: AugmentedError<ApiType>;
      ExecutionFailed: AugmentedError<ApiType>;
      SignaturesLengthDoesntMatch: AugmentedError<ApiType>;
      SignatureVerificationError: AugmentedError<ApiType>;
      ZeroSignatureCall: AugmentedError<ApiType>;
    };
    mvm: {
      /**
       * Aborted
       **/
      Aborted: AugmentedError<ApiType>;
      /**
       * Abort type mismatch error
       **/
      AbortTypeMismatchError: AugmentedError<ApiType>;
      /**
       * AccountAddress conversion error.
       **/
      AccountAddressConversionError: AugmentedError<ApiType>;
      /**
       * Arithmetic error
       **/
      ArithmeticError: AugmentedError<ApiType>;
      BackwardIncompatibleModuleUpdate: AugmentedError<ApiType>;
      /**
       * The transaction's chain_id does not match the one published on-chain
       **/
      BadChainId: AugmentedError<ApiType>;
      /**
       * BadHeader table
       **/
      BadHeaderTable: AugmentedError<ApiType>;
      /**
       * Bad magic
       **/
      BadMagic: AugmentedError<ApiType>;
      BadTransactionFeeCurrency: AugmentedError<ApiType>;
      /**
       * Bad U128
       **/
      BadU128: AugmentedError<ApiType>;
      /**
       * Bad U64
       **/
      BadU64: AugmentedError<ApiType>;
      /**
       * Boolean op type mismatch error
       **/
      BooleanOpTypeMismatchError: AugmentedError<ApiType>;
      /**
       * Borrowfield bad field error
       **/
      BorrowfieldBadFieldError: AugmentedError<ApiType>;
      /**
       * Borrowfield exists mutable borrow error
       **/
      BorrowfieldExistsMutableBorrowError: AugmentedError<ApiType>;
      /**
       * Borrowfield type mismatch error
       **/
      BorrowfieldTypeMismatchError: AugmentedError<ApiType>;
      /**
       * Borrowglobal no resource error
       **/
      BorrowglobalNoResourceError: AugmentedError<ApiType>;
      /**
       * Borrowglobal type mismatch error
       **/
      BorrowglobalTypeMismatchError: AugmentedError<ApiType>;
      BorrowglobalWithoutKeyAbility: AugmentedError<ApiType>;
      /**
       * Borrowloc exists borrow error
       **/
      BorrowlocExistsBorrowError: AugmentedError<ApiType>;
      /**
       * Borrowloc reference error
       **/
      BorrowlocReferenceError: AugmentedError<ApiType>;
      /**
       * Borrowloc unavailable error
       **/
      BorrowlocUnavailableError: AugmentedError<ApiType>;
      /**
       * Br type mismatch
       **/
      BrTypeMismatchError: AugmentedError<ApiType>;
      /**
       * Call borrowed mutable reference error
       **/
      CallBorrowedMutableReferenceError: AugmentedError<ApiType>;
      CalledScriptVisibleFromNonScriptVisible: AugmentedError<ApiType>;
      /**
       * Call stack overflow
       **/
      CallStackOverflow: AugmentedError<ApiType>;
      /**
       * Call type mismatch error
       **/
      CallTypeMismatchError: AugmentedError<ApiType>;
      /**
       * Code deserialization error
       **/
      CodeDeserializationError: AugmentedError<ApiType>;
      /**
       * Constraint kind mismatch
       **/
      ConstraintKindMismatch: AugmentedError<ApiType>;
      ConstraintNotSatisfied: AugmentedError<ApiType>;
      /**
       * Copyloc exists borrow error
       **/
      CopylocExistsBorrowError: AugmentedError<ApiType>;
      /**
       * Copyloc resource error
       **/
      CopylocResourceError: AugmentedError<ApiType>;
      /**
       * Copyloc unavailable error
       **/
      CopylocUnavailableError: AugmentedError<ApiType>;
      CopylocWithoutCopyAbility: AugmentedError<ApiType>;
      /**
       * The currency info was unable to be found
       **/
      CurrencyInfoDoesNotExist: AugmentedError<ApiType>;
      CyclicModuleDependency: AugmentedError<ApiType>;
      CyclicModuleFriendship: AugmentedError<ApiType>;
      /**
       * Data format error
       **/
      DataFormatError: AugmentedError<ApiType>;
      DuplicateAcquiresAnnotation: AugmentedError<ApiType>;
      /**
       * Duplicate acquires resource annotation error
       **/
      DuplicateAcquiresResourceAnnotationError: AugmentedError<ApiType>;
      /**
       * Duplicate element
       **/
      DuplicateElement: AugmentedError<ApiType>;
      /**
       * The sender is trying to publish a module named `M`, but the sender's account already contains a module with this name.
       **/
      DuplicateModuleName: AugmentedError<ApiType>;
      DuplicateNativeFunction: AugmentedError<ApiType>;
      /**
       * Duplicate table
       **/
      DuplicateTable: AugmentedError<ApiType>;
      /**
       * Empty code unit
       **/
      EmptyCodeUnit: AugmentedError<ApiType>;
      /**
       * Empty value stack
       **/
      EmptyValueStack: AugmentedError<ApiType>;
      /**
       * Equality op type mismatch error
       **/
      EqualityOpTypeMismatchError: AugmentedError<ApiType>;
      /**
       * Event key mismatch
       **/
      EventKeyMismatch: AugmentedError<ApiType>;
      /**
       * Length of program field in raw transaction exceeded max length
       **/
      ExceededMaxTransactionSize: AugmentedError<ApiType>;
      ExecuteScriptFunctionCalledOnNonScriptVisible: AugmentedError<ApiType>;
      /**
       * Execution stack overflow
       **/
      ExecutionStackOverflow: AugmentedError<ApiType>;
      /**
       * Exists resource type mismatch error
       **/
      ExistsResourceTypeMismatchError: AugmentedError<ApiType>;
      ExistsWithoutKeyAbilityOrBadArgument: AugmentedError<ApiType>;
      ExtraneousAcquiresAnnotation: AugmentedError<ApiType>;
      /**
       * Extraneous acquires resource annotation error
       **/
      ExtraneousAcquiresResourceAnnotationError: AugmentedError<ApiType>;
      FailedToDeserializeArgument: AugmentedError<ApiType>;
      /**
       * Failed to deserialize resource
       **/
      FailedToDeserializeResource: AugmentedError<ApiType>;
      /**
       * Failed to serialize write set changes
       **/
      FailedToSerializeWriteSetChanges: AugmentedError<ApiType>;
      FeatureUnderGating: AugmentedError<ApiType>;
      FieldMissingTypeAbility: AugmentedError<ApiType>;
      /**
       * Freezeref exists mutable borrow error
       **/
      FreezerefExistsMutableBorrowError: AugmentedError<ApiType>;
      /**
       * Freezeref type mismatch error
       **/
      FreezerefTypeMismatchError: AugmentedError<ApiType>;
      /**
       * Function resolution failure
       **/
      FunctionResolutionFailure: AugmentedError<ApiType>;
      /**
       * Gas unit price submitted with the transaction is above the maximum gas price set in the VM.
       **/
      GasUnitPriceAboveMaxBound: AugmentedError<ApiType>;
      /**
       * Gas unit price submitted with transaction is below minimum gas price set in the VM.
       **/
      GasUnitPriceBelowMinBound: AugmentedError<ApiType>;
      /**
       * Generic member opcode mismatch
       **/
      GenericMemberOpcodeMismatch: AugmentedError<ApiType>;
      /**
       * Global reference error
       **/
      GlobalReferenceError: AugmentedError<ApiType>;
      /**
       * Index out of bounds
       **/
      IndexOutOfBounds: AugmentedError<ApiType>;
      /**
       * Insufficient balance to pay minimum transaction fee
       **/
      InsufficientBalanceForTransactionFee: AugmentedError<ApiType>;
      /**
       * Integer op type mismatch error
       **/
      IntegerOpTypeMismatchError: AugmentedError<ApiType>;
      /**
       * Internal type error
       **/
      InternalTypeError: AugmentedError<ApiType>;
      InvalidAcquiresAnnotation: AugmentedError<ApiType>;
      /**
       * Invalid acquires resource annotation error
       **/
      InvalidAcquiresResourceAnnotationError: AugmentedError<ApiType>;
      /**
       * Bad account authentication key
       **/
      InvalidAuthKey: AugmentedError<ApiType>;
      /**
       * Invalid constant type
       **/
      InvalidConstantType: AugmentedError<ApiType>;
      /**
       * Invalid fall through
       **/
      InvalidFallThrough: AugmentedError<ApiType>;
      InvalidFlagBits: AugmentedError<ApiType>;
      InvalidFriendDeclWithModulesInDependencies: AugmentedError<ApiType>;
      InvalidFriendDeclWithModulesOutsideAccountAddress: AugmentedError<ApiType>;
      InvalidFriendDeclWithSelf: AugmentedError<ApiType>;
      /**
       * `max_gas_amount` value must be in the range from 0 to `u64::MAX / 1000`.
       * Causes for invalid gas configuration.
       **/
      InvalidGasAmountMaxValue: AugmentedError<ApiType>;
      /**
       * Gas specifier submitted is either malformed (not a valid identifier), or does not refer to an accepted gas specifier
       **/
      InvalidGasSpecifier: AugmentedError<ApiType>;
      /**
       * Invalid loop break
       **/
      InvalidLoopBreak: AugmentedError<ApiType>;
      /**
       * Invalid loop continue
       **/
      InvalidLoopContinue: AugmentedError<ApiType>;
      /**
       * Invalid loop split
       **/
      InvalidLoopSplit: AugmentedError<ApiType>;
      /**
       * Invalid main function signature
       **/
      InvalidMainFunctionSignature: AugmentedError<ApiType>;
      /**
       * Invalid module handle
       **/
      InvalidModuleHandle: AugmentedError<ApiType>;
      /**
       * The account sender doesn't have permissions to publish modules
       **/
      InvalidModulePublisher: AugmentedError<ApiType>;
      /**
       * Invalid operation in script
       **/
      InvalidOperationInScript: AugmentedError<ApiType>;
      InvalidParamTypeForDeserialization: AugmentedError<ApiType>;
      InvalidPhantomTypeParamPosition: AugmentedError<ApiType>;
      /**
       * Invalid resource field
       **/
      InvalidResourceField: AugmentedError<ApiType>;
      /**
       * The transaction has a bad signature
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Invalid signature token
       **/
      InvalidSignatureToken: AugmentedError<ApiType>;
      /**
       * Failed to read or decode VM configuration
       **/
      InvalidVMConfig: AugmentedError<ApiType>;
      /**
       * This write set transaction cannot be applied to the current state.
       **/
      InvalidWriteSet: AugmentedError<ApiType>;
      /**
       * Linker error
       **/
      LinkerError: AugmentedError<ApiType>;
      /**
       * Lookup failed
       **/
      LookupFailed: AugmentedError<ApiType>;
      /**
       * Loop in instantiation graph
       **/
      LoopInInstantiationGraph: AugmentedError<ApiType>;
      /**
       * Malformed
       **/
      Malformed: AugmentedError<ApiType>;
      /**
       * Malformed constant data
       **/
      MalformedConstantData: AugmentedError<ApiType>;
      /**
       * Max gas units submitted with transaction not enough to cover the intrinsic cost of the transaction.
       **/
      MaxGasUnitsBelowMinTransactionGasUnits: AugmentedError<ApiType>;
      /**
       * Max gas units submitted with transaction exceeds max gas units bound in VM
       **/
      MaxGasUnitsExceedsMaxGasUnitsBound: AugmentedError<ApiType>;
      MissingAcquiresAnnotation: AugmentedError<ApiType>;
      /**
       * Missing acquires resource annotation error
       **/
      MissingAcquiresResourceAnnotationError: AugmentedError<ApiType>;
      /**
       * Missing data
       **/
      MissingData: AugmentedError<ApiType>;
      /**
       * Missing dependency
       **/
      MissingDependency: AugmentedError<ApiType>;
      /**
       * The self address of a module the transaction is publishing is not the sender address
       **/
      ModuleAddressDoesNotMatchSender: AugmentedError<ApiType>;
      /**
       * Movefrom no resource error
       **/
      MovefromNoResourceError: AugmentedError<ApiType>;
      /**
       * Movefrom Type mismatch error
       **/
      MovefromTypeMismatchError: AugmentedError<ApiType>;
      MovefromWithoutKeyAbility: AugmentedError<ApiType>;
      /**
       * Moveloc exists borrow error
       **/
      MovelocExistsBorrowError: AugmentedError<ApiType>;
      /**
       * Moveloc unavailable error
       **/
      MovelocUnavailableError: AugmentedError<ApiType>;
      /**
       * Moveto no resource error
       **/
      MovetoNoResourceError: AugmentedError<ApiType>;
      /**
       * Moveto type mismatch error
       **/
      MovetoTypeMismatchError: AugmentedError<ApiType>;
      MovetoWithoutKeyAbility: AugmentedError<ApiType>;
      /**
       * Negative stack size within block
       **/
      NegativeStackSizeWithinBlock: AugmentedError<ApiType>;
      /**
       * The sending account has no role
       **/
      NoAccountRole: AugmentedError<ApiType>;
      /**
       * The module does not have any module handles. Each module or script must have at least one module handle.
       **/
      NoModuleHandles: AugmentedError<ApiType>;
      NumberOfArgumentsMismatch: AugmentedError<ApiType>;
      NumberOfSignerArgumentsMismatch: AugmentedError<ApiType>;
      /**
       * Number of type arguments mismatch
       **/
      NumberOfTypeArgumentsMismatch: AugmentedError<ApiType>;
      /**
       * Internal: numeric convertion error, overflow
       **/
      NumConversionError: AugmentedError<ApiType>;
      /**
       * Out of gas
       **/
      OutOfGas: AugmentedError<ApiType>;
      /**
       * Pack type mismatch error
       **/
      PackTypeMismatchError: AugmentedError<ApiType>;
      /**
       * Pc overflow
       **/
      PcOverflow: AugmentedError<ApiType>;
      /**
       * Pop resource error
       **/
      PopResourceError: AugmentedError<ApiType>;
      PopWithoutDropAbility: AugmentedError<ApiType>;
      /**
       * Positive stack size at block end
       **/
      PositiveStackSizeAtBlockEnd: AugmentedError<ApiType>;
      /**
       * Readref exists mutable borrow error
       **/
      ReadrefExistsMutableBorrowError: AugmentedError<ApiType>;
      /**
       * Readref resource error
       **/
      ReadrefResourceError: AugmentedError<ApiType>;
      /**
       * Readref type mismatch error
       **/
      ReadrefTypeMismatchError: AugmentedError<ApiType>;
      ReadrefWithoutCopyAbility: AugmentedError<ApiType>;
      /**
       * Recursive struct definition
       **/
      RecursiveStructDefinition: AugmentedError<ApiType>;
      /**
       * This write set transaction was rejected because it did not meet the requirements for one.
       **/
      RejectedWriteSet: AugmentedError<ApiType>;
      /**
       * We tried to create a resource under an account where that resource already exists.
       **/
      ResourceAlreadyExists: AugmentedError<ApiType>;
      /**
       * We tried to access a resource that does not exist under the account.
       **/
      ResourceDoesNotExist: AugmentedError<ApiType>;
      /**
       * Ret borrowed mutable reference error
       **/
      RetBorrowedMutableReferenceError: AugmentedError<ApiType>;
      /**
       * Ret type mismatch error
       **/
      RetTypeMismatchError: AugmentedError<ApiType>;
      /**
       * Script senders should not be empty
       **/
      ScriptValidationError: AugmentedError<ApiType>;
      SecondaryKeysAddressesCountMismatch: AugmentedError<ApiType>;
      /**
       * The sending account does not exist
       **/
      SendingAccountDoesNotExist: AugmentedError<ApiType>;
      /**
       * The sending account is frozen
       **/
      SendingAccountFrozen: AugmentedError<ApiType>;
      SequenceNonceInvalid: AugmentedError<ApiType>;
      /**
       * The sequence number is too large and would overflow if the transaction were executed
       **/
      SequenceNumberTooBig: AugmentedError<ApiType>;
      /**
       * Sequence number is too new
       **/
      SequenceNumberTooNew: AugmentedError<ApiType>;
      /**
       * Sequence number is too old
       **/
      SequenceNumberTooOld: AugmentedError<ApiType>;
      SignersContainDuplicates: AugmentedError<ApiType>;
      /**
       * Stloc type mismatch error
       **/
      StlocTypeMismatchError: AugmentedError<ApiType>;
      /**
       * Stloc unsafe to destroy error
       **/
      StlocUnsafeToDestroyError: AugmentedError<ApiType>;
      /**
       * Storage error
       **/
      StorageError: AugmentedError<ApiType>;
      /**
       * Too many locals
       **/
      TooManyLocals: AugmentedError<ApiType>;
      /**
       * The transaction has expired
       **/
      TransactionExpired: AugmentedError<ApiType>;
      /**
       * Transaction is not allowed.
       **/
      TransactionIsNotAllowedError: AugmentedError<ApiType>;
      /**
       * Transaction signers num isn't eq signers
       **/
      TransactionSignersNumError: AugmentedError<ApiType>;
      /**
       * Transaction deserialization & validation error
       **/
      TransactionValidationError: AugmentedError<ApiType>;
      TransactionValidationError2: AugmentedError<ApiType>;
      /**
       * Type mismatch
       **/
      TypeMismatch: AugmentedError<ApiType>;
      /**
       * Failed to resolve type due to linking being broken after verification
       **/
      TypeResolutionFailure: AugmentedError<ApiType>;
      /**
       * Unable to deserialize the account blob
       **/
      UnableToDeserializeAccount: AugmentedError<ApiType>;
      /**
       * Unexpected deserialization error
       **/
      UnexpectedDeserializationError: AugmentedError<ApiType>;
      /**
       * Unexpected error from known move function
       **/
      UnexpectedErrorFromKnownMoveFunction: AugmentedError<ApiType>;
      /**
       * Unexpected signature type
       **/
      UnexpectedSignatureType: AugmentedError<ApiType>;
      /**
       * Unexpected verifier error
       **/
      UnexpectedVerifierError: AugmentedError<ApiType>;
      /**
       * Unimplemented handle
       **/
      UnimplementedHandle: AugmentedError<ApiType>;
      UnknownAbility: AugmentedError<ApiType>;
      /**
       * Unknown binary error
       **/
      UnknownBinaryError: AugmentedError<ApiType>;
      /**
       * Unknown invariant violation error
       **/
      UnknownInvariantViolationError: AugmentedError<ApiType>;
      /**
       * Unknown kind
       **/
      UnknownKind: AugmentedError<ApiType>;
      /**
       * Transaction is trying to publish a new module.
       **/
      UnknownModule: AugmentedError<ApiType>;
      /**
       * Unknown native struct flag
       **/
      UnknownNativeStructFlag: AugmentedError<ApiType>;
      /**
       * Unknown nominal resource
       **/
      UnknownNominalResource: AugmentedError<ApiType>;
      /**
       * Unknown opcode
       **/
      UnknownOpcode: AugmentedError<ApiType>;
      /**
       * Unknown runtime status
       **/
      UnknownRuntimeStatus: AugmentedError<ApiType>;
      /**
       * This script is not in our allowlist of scripts.
       **/
      UnknownScript: AugmentedError<ApiType>;
      /**
       * Unknown serialized type
       **/
      UnknownSerializedType: AugmentedError<ApiType>;
      /**
       * Unknown signature type
       **/
      UnknownSignatureType: AugmentedError<ApiType>;
      /**
       * Unknown status.
       **/
      UnknownStatus: AugmentedError<ApiType>;
      /**
       * Unknown table type
       **/
      UnknownTableType: AugmentedError<ApiType>;
      /**
       * Unknown validation status
       **/
      UnknownValidationStatus: AugmentedError<ApiType>;
      /**
       * Unknown verification error
       **/
      UnknownVerificationError: AugmentedError<ApiType>;
      /**
       * Unknown version
       **/
      UnknownVersion: AugmentedError<ApiType>;
      /**
       * Unpack type mismatch error
       **/
      UnpackTypeMismatchError: AugmentedError<ApiType>;
      /**
       * Unreachable
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * Unsafe ret local or resource still borrowed
       **/
      UnsafeRetLocalOrResourceStillBorrowed: AugmentedError<ApiType>;
      /**
       * Unsafe fet unused resources
       **/
      UnsafeRetUnusedResources: AugmentedError<ApiType>;
      UnsafeRetUnusedValuesWithoutDrop: AugmentedError<ApiType>;
      /**
       * Value deserialization error
       **/
      ValueDeserializationError: AugmentedError<ApiType>;
      /**
       * Value serialization error
       **/
      ValueSerializationError: AugmentedError<ApiType>;
      VecBorrowElementExistsMutableBorrowError: AugmentedError<ApiType>;
      VecUpdateExistsMutableBorrowError: AugmentedError<ApiType>;
      /**
       * Verification error
       **/
      VerificationError: AugmentedError<ApiType>;
      /**
       * Verifier invariant violation
       **/
      VerifierInvariantViolation: AugmentedError<ApiType>;
      /**
       * Vm max type depth reached
       **/
      VmMaxTypeDepthReached: AugmentedError<ApiType>;
      /**
       * Vm max value depth reached
       **/
      VmMaxValueDepthReached: AugmentedError<ApiType>;
      /**
       * vm startup failure
       **/
      VmStartupFailure: AugmentedError<ApiType>;
      /**
       * Writeref exists borrow error
       **/
      WriterefExistsBorrowError: AugmentedError<ApiType>;
      /**
       * Writeref no mutable reference error
       **/
      WriterefNoMutableReferenceError: AugmentedError<ApiType>;
      /**
       * Writeref resource error
       **/
      WriterefResourceError: AugmentedError<ApiType>;
      /**
       * Writeref type mismatch error
       **/
      WriterefTypeMismatchError: AugmentedError<ApiType>;
      WriterefWithoutDropAbility: AugmentedError<ApiType>;
      /**
       * Zero sized struct.
       **/
      ZeroSizedStruct: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
    };
    tokens: {
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Failed because the maximum locks was exceeded
       **/
      MaxLocksExceeded: AugmentedError<ApiType>;
      TooManyReserves: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module

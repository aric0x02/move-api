export default {
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
  }
}
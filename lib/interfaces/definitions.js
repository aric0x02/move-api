"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.mvm = void 0;
var definitions_1 = require("./mvm/definitions");
Object.defineProperty(exports, "mvm", { enumerable: true, get: function () { return __importDefault(definitions_1).default; } });
var definitions_2 = require("./default/definitions");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(definitions_2).default; } });

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../../.env") });
const generateToken = (email, id, isAdmin) => {
    return jsonwebtoken_1.default.sign({ email, id: id, isAdmin }, process.env.SECRET_KEY, {
        expiresIn: "24h",
    });
};
exports.generateToken = generateToken;

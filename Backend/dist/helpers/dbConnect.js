"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mssql_1 = __importDefault(require("mssql"));
const Config_1 = require("../Config");
class Connection {
    constructor() {
        //adding inputs
        this.createRequest = (request, data) => {
            const keys = Object.keys(data);
            keys.map((keyname) => {
                request.input(keyname, data[keyname]);
            });
        };
        //exec
        this.execute = (storedProcedure, data) => __awaiter(this, void 0, void 0, function* () {
            let request = yield (yield this.pool).request();
            let requestobj = this.createRequest(request, data);
            let result = yield (yield request.execute(storedProcedure)).recordset;
            return result;
        });
        this.pool = mssql_1.default.connect(Config_1.sqlConfig);
    }
    query(queryString) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.pool).request().query(queryString);
        });
    }
}
exports.db = new Connection();

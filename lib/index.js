"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoMap = void 0;
const axios_1 = __importDefault(require("axios"));
const electricity_service_1 = __importDefault(require("./services/electricity.service"));
var ElectricityRequest_t_1 = require("./models/electricity/ElectricityRequest.t");
Object.defineProperty(exports, "DiscoMap", { enumerable: true, get: function () { return ElectricityRequest_t_1.DiscoMap; } });
class IRecharge {
    _publicKey;
    _privateKey;
    _vendorCode;
    _axios;
    electricity;
    constructor(_vendorCode, _publicKey, _privateKey) {
        this._vendorCode = _vendorCode;
        this._publicKey = _publicKey;
        this._privateKey = _privateKey;
        const instance = axios_1.default.create({
            baseURL: 'https://irecharge.com.ng/pwr_api_live/v2'
        });
        instance.defaults.headers.post['Content-Type'] = 'application/json';
        instance.defaults.headers.common['Accept'] = 'application/json';
        this._axios = instance;
        this.electricity = new electricity_service_1.default(this, this._vendorCode, this._publicKey, this._privateKey);
    }
    get axios() {
        return this._axios;
    }
}
exports.default = IRecharge;

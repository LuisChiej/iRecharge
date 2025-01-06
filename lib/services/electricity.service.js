"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hmac_1 = __importDefault(require("../utils/hmac"));
class ElectricityService {
    #iRecharge;
    #vendorCode;
    #publicKey;
    #privateKey;
    constructor(iRecharge, vendorCode, publicKey, privateKey) {
        this.#iRecharge = iRecharge;
        this.#vendorCode = vendorCode;
        this.#publicKey = publicKey;
        this.#privateKey = privateKey;
    }
    async getMeterInfo(request) {
        const { meter, referenceId, disco, response_format } = request;
        const hash = (0, hmac_1.default)([this.#vendorCode, referenceId.toString(), meter, disco.valueOf(), this.#publicKey], this.#privateKey);
        try {
            const response = await this.#iRecharge.axios.get('/get_meter_info.php', {
                params: {
                    vendor_code: this.#vendorCode,
                    reference_id: referenceId,
                    meter: meter,
                    disco: disco.valueOf(),
                    response_format: response_format,
                    hash: hash
                }
            });
            console.log(response);
            if (response.status === 200)
                return response.data;
            return null;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async buy(request) {
        const { meter, referenceId, disco, accessToken, amount, phone, email, response_format } = request;
        const hash = (0, hmac_1.default)([this.#vendorCode, referenceId.toString(), meter, disco.valueOf(), String(amount), String(accessToken), this.#publicKey], this.#privateKey);
        try {
            const response = await this.#iRecharge.axios.get('/vend_power.php', {
                params: {
                    vendor_code: this.#vendorCode,
                    meter: meter,
                    reference_id: referenceId,
                    disco: disco.valueOf(),
                    access_token: accessToken,
                    amount: amount,
                    phone: phone,
                    email: email,
                    hash: hash,
                    response_format: response_format
                }
            });
            console.log(response);
            if (response.status === 200)
                return response.data;
            return null;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
}
exports.default = ElectricityService;

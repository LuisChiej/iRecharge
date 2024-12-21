import IRecharge from "..";
import { ElectricityRequest } from "../models/electricity/ElectricityRequest.t";
import { ElectricityPurchaseResponse, GetMeterInfoResponse } from "../models/electricity/ElectricityResponse.t";
import hmac from "../utils/hmac";

export default class ElectricityService {
    readonly #iRecharge: IRecharge;
    readonly #vendorCode: string;
    readonly #publicKey: string;
    readonly #privateKey: string;

    constructor(iRecharge: IRecharge, vendorCode: string, publicKey: string, privateKey: string) {
        this.#iRecharge = iRecharge;
        this.#vendorCode = vendorCode;
        this.#publicKey = publicKey;
        this.#privateKey = privateKey;
    }

    async getMeterInfo(request: Pick<ElectricityRequest, 'meter' | 'referenceId' | 'disco' | 'response_format'>): Promise<GetMeterInfoResponse | null> {
        const { meter, referenceId, disco, response_format } = request;
        const hash = hmac([this.#vendorCode, referenceId, meter, disco.valueOf(), this.#publicKey], this.#privateKey);

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

            if(response.status === 200) return response.data;
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async buy(request: Pick<ElectricityRequest, 'meter' | 'referenceId' | 'disco' | 'accessToken' | 'amount' | 'email' | 'phone' | 'response_format'>): Promise<ElectricityPurchaseResponse | null> {
        const { meter, referenceId, disco, accessToken, amount, phone, email, response_format } = request;

        const hash = hmac([this.#vendorCode, referenceId, meter, disco.valueOf(), String(amount), String(accessToken), this.#publicKey], this.#privateKey);

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
            })

            if(response.status === 200) return response.data;
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}
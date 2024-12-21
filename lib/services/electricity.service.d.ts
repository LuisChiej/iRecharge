import IRecharge from "..";
import { ElectricityRequest } from "../models/electricity/ElectricityRequest.t";
import { ElectricityPurchaseResponse, GetMeterInfoResponse } from "../models/electricity/ElectricityResponse.t";
export default class ElectricityService {
    #private;
    constructor(iRecharge: IRecharge, vendorCode: string, publicKey: string, privateKey: string);
    getMeterInfo(request: Pick<ElectricityRequest, 'meter' | 'referenceId' | 'disco' | 'response_format'>): Promise<GetMeterInfoResponse | null>;
    buy(request: Pick<ElectricityRequest, 'meter' | 'referenceId' | 'disco' | 'accessToken' | 'amount' | 'email' | 'phone' | 'response_format'>): Promise<ElectricityPurchaseResponse | null>;
}

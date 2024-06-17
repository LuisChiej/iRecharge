import IRecharge from "..";
import { ElectricityRequest } from "../models/electricity/ElectricityRequest.t";
import { ElectricityPurchaseResponse, GetMeterInfoResponse } from "../models/electricity/ElectricityResponse.t";
export default class ElectricityService {
    #private;
    constructor(iRecharge: IRecharge, vendorCode: string, publicKey: string, privateKey: string);
    getMeterInfo(request: ElectricityRequest): Promise<GetMeterInfoResponse | null>;
    buy(request: ElectricityRequest): Promise<ElectricityPurchaseResponse | null>;
}

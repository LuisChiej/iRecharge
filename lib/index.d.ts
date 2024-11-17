import { AxiosInstance } from "axios";
import ElectricityService from "./services/electricity.service";
export { DiscoMap } from "./models/electricity/ElectricityRequest.t";
export default class IRecharge {
    private readonly _publicKey;
    private readonly _privateKey;
    private readonly _vendorCode;
    private readonly _axios;
    electricity: ElectricityService;
    constructor(_vendorCode: string, _publicKey: string, _privateKey: string);
    get axios(): AxiosInstance;
}

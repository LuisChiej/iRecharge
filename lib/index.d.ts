import { AxiosInstance } from "axios";
import ElectricityService from "./services/electricity.service";
export default class IRecharge {
    private _publicKey;
    private _privateKey;
    private _vendorCode;
    private _axios;
    electricity: ElectricityService;
    constructor(_vendorCode: string, _publicKey: string, _privateKey: string);
    get axios(): AxiosInstance;
}

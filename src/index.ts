import axios, { AxiosInstance } from "axios";
import ElectricityService from "./services/electricity.service";

export default class IRecharge {
    private _publicKey: string;
    private _privateKey: string;
    private _vendorCode: string;
    private _axios: AxiosInstance;

    public electricity: ElectricityService;

    constructor(_vendorCode: string, _publicKey: string, _privateKey: string) {
        this._vendorCode = _vendorCode;
        this._publicKey = _publicKey;
        this._privateKey = _privateKey;
        
        const instance = axios.create({
            baseURL: 'https://irecharge.com.ng/pwr_api_live/v2'
        });
        instance.defaults.headers.post['Content-Type'] = 'application/json';
        instance.defaults.headers.common['Accept'] = 'application/json';

        this._axios = instance;

        this.electricity = new ElectricityService(
            this, 
            this._vendorCode, 
            this._publicKey, 
            this._privateKey
        )
    }

    get axios(): AxiosInstance {
        return this._axios;
    }
}
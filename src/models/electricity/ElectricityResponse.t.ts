import { Customer } from "../customer";
import { Response } from "../response.t";

export type ElectricityPurchaseResponse = {
    meter_token: string;
    units: number;
    amount: number;
    address: string;
    wallet_balance: number;
    ref: string;
    tariff: string;
    token_amount: number | null;
    debt_amount: number | null;
    tax: number;
    kct1: string | null;
    kct2: string | null;
    disco_ref: string;
} & Response

export type GetMeterInfoResponse = {
    accessToken: string;
    customer: Customer;
} & Response
import { IBoolean } from "./boolean";

export type Customer = {
    name: string;
    address: string;
    util: string;
    minimumAmount: string;
    isMd: IBoolean;
    totalDebt?: string;
    isFranchise: IBoolean;
    tariff?: string;
    provider: string;
}
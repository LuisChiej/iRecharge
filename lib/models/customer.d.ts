import { IBoolean } from "./boolean";
export type Customer = {
    name: string;
    address: string;
    util: string;
    minimumAmount: string;
    isMd: IBoolean;
    isFranchise: IBoolean;
    provider: string;
};

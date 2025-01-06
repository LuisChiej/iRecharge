export type ElectricityRequest = {
    vendorCode: string;
    meter: string;
    referenceId: string;
    disco: Disco;
    accessToken: string;
    amount: number;
    phone: string;
    email: string;
    hash: string;
    response_format: 'json';
};
export declare enum Disco {
    AEDC = "AEDC",
    AEDC_Postpaid = "AEDC_Postpaid",
    YEDC = "YEDC",
    YEDC_Postpaid = "YEDC_Postpaid",
    BEDC = "BEDC",
    BEDC_Postpaid = "BEDC_Postpaid",
    Ikeja_Electric_Bill_Payment = "Ikeja_Electric_Bill_Payment",
    Ikeja_Token_Purchase = "Ikeja_Token_Purchase",
    Eko_Prepaid = "Eko_Prepaid",
    Eko_Postpaid = "Eko_Postpaid",
    Ibadan_Disco_Prepaid = "Ibadan_Disco_Prepaid",
    Ibadan_Disco_Postpaid = "Ibadan_Disco_Postpaid",
    Jos_Disco = "Jos_Disco",
    Jos_Disco_Postpaid = "Jos_Disco_Postpaid",
    Kano_Electricity_Disco = "Kano_Electricity_Disco",
    Kano_Electricity_Disco_Postpaid = "Kano_Electricity_Disco_Postpaid",
    Kaduna_Electricity_Disco = "Kaduna_Electricity_Disco",
    Kaduna_Electricity_Disco_Postpaid = "Kaduna_Electricity_Disco_Postpaid",
    PhED_Electricity = "PhED_Electricity",
    PH_Disco = "PH_Disco",
    Enugu_Electricity_Distribution_Prepaid = "Enugu_Electricity_Distribution_Prepaid",
    Enugu_Electricity_Distribution_Postpaid = "Enugu_Electricity_Distribution_Postpaid",
    Aba_Power_Prepaid = "Aba_Power_Prepaid",
    Aba_Power_Postpaid = "Aba_Power_Postpaid"
}
export declare const DiscoMap: {
    abuja_electric: {
        prepaid: Disco;
        postpaid: Disco;
    };
    eko_electric: {
        prepaid: Disco;
        postpaid: Disco;
    };
    enugu_electric: {
        prepaid: Disco;
        postpaid: Disco;
    };
    ibadan_electric: {
        prepaid: Disco;
        postpaid: Disco;
    };
    ikeja_electric: {
        prepaid: Disco;
        postpaid: Disco;
    };
    jos_electric: {
        prepaid: Disco;
        postpaid: Disco;
    };
    kaduna_electric: {
        prepaid: Disco;
        postpaid: Disco;
    };
    kedco_electric: {
        prepaid: Disco;
        postpaid: Disco;
    };
    portharcourt_electric: {
        prepaid: Disco;
        postpaid: Disco;
    };
    benin_electric: {
        prepaid: Disco;
        postpaid: Disco;
    };
    yenagoa_electric: {
        prepaid: Disco;
        postpaid: Disco;
    };
};

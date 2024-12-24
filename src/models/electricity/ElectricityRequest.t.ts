export type ElectricityRequest = {
    vendorCode: string;
    meter: string;
    referenceId: number; // 12 digits
    disco: Disco;
    accessToken: number;
    amount: number;
    phone: string;
    email: string;
    hash: string;
    response_format: 'json';
}

enum DiscoII {
    AbujaElectric = 'abuja_electric',
    EkoElectric = 'eko_electric',
    EnuguElectric = 'enugu_electric',
    IbadanElectric = 'ibadan_electric',
    IkejaElectric = 'ikeja_electric',
    JosElectric = 'jos_electric',
    KadunaElectric = 'kaduna_electric',
    KedcoElectric = 'kedco_electric',
    PortharcourtElectric = 'portharcourt_electric',
    BeninElectric = 'benin_electric',
    YenagoaElectric = 'yenagoa_electric'
}

export enum Disco {
    AEDC = 'AEDC',
    AEDC_Postpaid = 'AEDC_Postpaid',
    YEDC = 'YEDC',
    YEDC_Postpaid = 'YEDC_Postpaid',
    BEDC = 'BEDC',
    BEDC_Postpaid = 'BEDC_Postpaid',
    Ikeja_Electric_Bill_Payment = 'Ikeja_Electric_Bill_Payment',
    Ikeja_Token_Purchase = 'Ikeja_Token_Purchase',
    Eko_Prepaid = 'Eko_Prepaid',
    Eko_Postpaid = 'Eko_Postpaid',
    Ibadan_Disco_Prepaid = 'Ibadan_Disco_Prepaid',
    Ibadan_Disco_Postpaid = 'Ibadan_Disco_Postpaid',
    Jos_Disco = 'Jos_Disco',
    Jos_Disco_Postpaid = 'Jos_Disco_Postpaid',
    Kano_Electricity_Disco = 'Kano_Electricity_Disco',
    Kano_Electricity_Disco_Postpaid = 'Kano_Electricity_Disco_Postpaid',
    Kaduna_Electricity_Disco = 'Kaduna_Electricity_Disco',
    Kaduna_Electricity_Disco_Postpaid = 'Kaduna_Electricity_Disco_Postpaid',
    PhED_Electricity = 'PhED_Electricity',
    PH_Disco = 'PH_Disco',
    Enugu_Electricity_Distribution_Prepaid = 'Enugu_Electricity_Distribution_Prepaid',
    Enugu_Electricity_Distribution_Postpaid = 'Enugu_Electricity_Distribution_Postpaid',
    Aba_Power_Prepaid = 'Aba_Power_Prepaid',
    Aba_Power_Postpaid = 'Aba_Power_Postpaid'
}

export const DiscoMap = {
    [DiscoII.AbujaElectric]: {
        'prepaid': Disco.AEDC,
        'postpaid': Disco.AEDC_Postpaid
    },
    [DiscoII.EkoElectric]: {
        'prepaid': Disco.Eko_Prepaid,
        'postpaid': Disco.Eko_Postpaid
    },
    [DiscoII.EnuguElectric]: {
        'prepaid': Disco.Enugu_Electricity_Distribution_Prepaid,
        'postpaid': Disco.Enugu_Electricity_Distribution_Postpaid
    },
    [DiscoII.IbadanElectric]: {
        'prepaid': Disco.Ibadan_Disco_Prepaid,
        'postpaid': Disco.Ibadan_Disco_Postpaid,
    },
    [DiscoII.IkejaElectric]: {
        'prepaid': Disco.Ikeja_Token_Purchase,
        'postpaid': Disco.Ikeja_Electric_Bill_Payment
    },
    [DiscoII.JosElectric]: {
        'prepaid': Disco.Jos_Disco,
        'postpaid': Disco.Jos_Disco_Postpaid
    },
    [DiscoII.KadunaElectric]: {
        'prepaid': Disco.Kaduna_Electricity_Disco,
        'postpaid': Disco.Kaduna_Electricity_Disco_Postpaid
    },
    [DiscoII.KedcoElectric]: {
        'prepaid': Disco.Kano_Electricity_Disco,
        'postpaid': Disco.Kano_Electricity_Disco_Postpaid,
    },
    [DiscoII.PortharcourtElectric]: {
        'prepaid': Disco.PhED_Electricity,
        'postpaid': Disco.PH_Disco
    },
    [DiscoII.BeninElectric]: {
        'prepaid': Disco.BEDC,
        'postpaid': Disco.BEDC_Postpaid
    },
    [DiscoII.YenagoaElectric]: {
        'prepaid': Disco.YEDC,
        'postpaid': Disco.YEDC_Postpaid
    }
}
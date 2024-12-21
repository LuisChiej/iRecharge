"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoMap = exports.Disco = void 0;
var DiscoII;
(function (DiscoII) {
    DiscoII["AbujaElectric"] = "abuja_electric";
    DiscoII["EkoElectric"] = "eko_electric";
    DiscoII["EnuguElectric"] = "enugu_electric";
    DiscoII["IbadanElectric"] = "ibadan_electric";
    DiscoII["IkejaElectric"] = "ikeja_electric";
    DiscoII["JosElectric"] = "jos_electric";
    DiscoII["KadunaElectric"] = "kaduna_electric";
    DiscoII["KedcoElectric"] = "kedco_electric";
    DiscoII["PortharcourtElectric"] = "portharcourt_electric";
    DiscoII["BeninElectric"] = "benin_electric";
    DiscoII["YenagoaElectric"] = "yenagoa_electric";
})(DiscoII || (DiscoII = {}));
var Disco;
(function (Disco) {
    Disco["AEDC"] = "AEDC";
    Disco["AEDC_Postpaid"] = "AEDC_Postpaid";
    Disco["YEDC"] = "YEDC";
    Disco["YEDC_Postpaid"] = "YEDC_Postpaid";
    Disco["BEDC"] = "BEDC";
    Disco["BEDC_Postpaid"] = "BEDC_Postpaid";
    Disco["Ikeja_Electric_Bill_Payment"] = "Ikeja_Electric_Bill_Payment";
    Disco["Ikeja_Token_Purchase"] = "Ikeja_Token_Purchase";
    Disco["Eko_Prepaid"] = "Eko_Prepaid";
    Disco["Eko_Postpaid"] = "Eko_Postpaid";
    Disco["Ibadan_Disco_Prepaid"] = "Ibadan_Disco_Prepaid";
    Disco["Ibadan_Disco_Postpaid"] = "Ibadan_Disco_Postpaid";
    Disco["Jos_Disco"] = "Jos_Disco";
    Disco["Jos_Disco_Postpaid"] = "Jos_Disco_Postpaid";
    Disco["Kano_Electricity_Disco"] = "Kano_Electricity_Disco";
    Disco["Kano_Electricity_Disco_Postpaid"] = "Kano_Electricity_Disco_Postpaid";
    Disco["Kaduna_Electricity_Disco"] = "Kaduna_Electricity_Disco";
    Disco["Kaduna_Electricity_Disco_Postpaid"] = "Kaduna_Electricity_Disco_Postpaid";
    Disco["PhED_Electricity"] = "PhED_Electricity";
    Disco["PH_Disco"] = "PH_Disco";
    Disco["Enugu_Electricity_Distribution_Prepaid"] = "Enugu_Electricity_Distribution_Prepaid";
    Disco["Enugu_Electricity_Distribution_Postpaid"] = "Enugu_Electricity_Distribution_Postpaid";
    Disco["Aba_Power_Prepaid"] = "Aba_Power_Prepaid";
    Disco["Aba_Power_Postpaid"] = "Aba_Power_Postpaid";
})(Disco || (exports.Disco = Disco = {}));
exports.DiscoMap = {
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
};

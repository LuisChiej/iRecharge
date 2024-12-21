"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const getCombinedString = (str) => {
    // 'vendor_code|reference_id|meter|disco|pub_key'
    return str.join('|');
};
const hmac = (str, privateKey) => {
    return (0, crypto_1.createHmac)('sha1', privateKey).update(getCombinedString(str)).digest('hex');
};
exports.default = hmac;

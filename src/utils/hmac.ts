import { createHmac } from 'crypto';

const getCombinedString = (str: Array<string>) => {
    // 'vendor_code|reference_id|meter|disco|pub_key'
    return str.join('|');
};

const hmac = (str: Array<string>, privateKey: string): string => {
    return createHmac('sha1', privateKey).update(getCombinedString(str)).digest('hex');
}

export default hmac;
export type Response = {
    status: StatusCode;
    message: string;
    response_hash?: string;
}

type StatusCode = "00" | "-1" | "02" | "03" | "04" | "05" | "06" | "11" | "12" | "13" | "14" | "15" | "19" | "20" | "40" | "41" | "42" | "43" | "44" | "50" | "51"

// -1	Unauthorised Access
// 02	IP Blacklisted
// 03	Invalid IP/Key/Vendor
// 04	Status not active
// 05	Invalid Hash
// 06	Missing Parameters
// 11	Service temporarily unavailable
// 12	Unknown User
// 13	Invalid Meter
// 14	Unknown Meter
// 15	Meter has Pending Transaction
// 19	Invalid Test Request
// 20	Duplicate Reference ID
// 40	Amount entered too low or too high
// 41	Invalid phone number
// 42	Vendor Closed for Business
// 43	Sorry your request could not be completed at the moment. Please try again later.
// 44	Insufficient Wallet Balance
// 50	Error encountered. Please reconfirm Meter number
// 51 Network Error
export type Response = {
    status: StatusCode;
    message: string;
    response_hash?: string;
};
type StatusCode = "00" | "-1" | "02" | "03" | "04" | "05" | "06" | "11" | "12" | "13" | "14" | "15" | "19" | "20" | "40" | "41" | "42" | "43" | "44" | "50" | "51";
export {};

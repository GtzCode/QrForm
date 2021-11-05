export interface tpCompany {
    ID?: number,
    COMPANY: string,
    NAME: string,
    JOB: string,
    EMAIL: string,
    PHONE: string,
    ADDRESS: string,
    COUNTRY: string,
    STATE: string,
    CITY: string,
    NOTES: string
}


export const emptyComany:tpCompany = {
    //ID:0,
    COMPANY: "",
    NAME: "",
    JOB: "",
    EMAIL: "",
    PHONE: "",
    ADDRESS: "",
    COUNTRY: "",
    STATE: "",
    CITY: "",
    NOTES: ""
};


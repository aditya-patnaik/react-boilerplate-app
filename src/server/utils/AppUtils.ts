export interface IGenericServiceResponse {
    data: any,
    status: SERVICE_RESPONSE_STATUS,
    message: any
}

export enum SERVICE_RESPONSE_STATUS {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    UNAUTHORIZED = "UNAUTHORIZED"
}

export default class AppUtils {
    static createGenericServiceResponseObj(responseObj: any, status: SERVICE_RESPONSE_STATUS, message: any): IGenericServiceResponse {
        return { data: responseObj, status, message }
    }
}
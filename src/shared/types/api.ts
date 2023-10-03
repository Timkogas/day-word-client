export enum EStatuses {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE",
}

export default class ResponseApi<T = []> {
    result: T
    message: string
    status: EStatuses
    statusCode: number

    constructor(result: T, message: string, status: EStatuses, code: number) {
        this.result = result
        this.message = message
        this.status = status
        this.statusCode = code
    }
}

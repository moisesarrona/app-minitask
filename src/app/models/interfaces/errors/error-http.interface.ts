export interface ErrorHttpI {
    httpStatus?: number,
    message?: string,
    timestamp?: Date,
    errorItem?: ErrorHttpItemI

}

export interface ErrorHttpItemI {
    object?: object,
    field?: string,
    code?: string
    message?: string
}
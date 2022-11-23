export interface ErrorTypeI {
    type?: string,
}

export enum ErrorTypes {
    DANGER = "danger",
    WARNING = "warning",
    SUCCESS = "succes", 
    INFO = "info",
    PRIMARY = "primary",
}

/*
export interface ErrorTypeI {
    type?: string,
    description?: string
}

export const ErrorTypes: ErrorTypeI[] = [
    {type: "danger", description: "Error in process"},
    {type: "warning", description: "Warning in process"},
    {type: "succes", description: "Success in process"},
    {type: "info", description: "Information in process"},
    {type: "primary", description: "Notification normal"},
]*/
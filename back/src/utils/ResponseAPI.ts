

enum errorCode {
    success = 200,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    internalServerError = 500
}

export class ResponseAPI<T>{
    data : T
    code: errorCode
    errorMessage?: string

    constructor(data:T, code:errorCode, errorMessage?:string){
        this.data = data
        this.code = code
        this.errorMessage = errorMessage
    }
}
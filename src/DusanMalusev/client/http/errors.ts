export class HttpError extends Error {
    status: number;

    public constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export class BadRequest extends HttpError {
    public constructor(message: string) {
        super(400, message);
    }
}

export class ConflictError extends HttpError {
    public constructor(message: string) {
        super(409, message);
    }
}

export class Unauthorized extends HttpError {
    public constructor(message: string) {
        super(401, message);
    }
}

export class Forbidden extends HttpError {
    public constructor(message: string) {
        super(403, message);
    }
}


export class ServerValidationError<T extends { [x: string]: any; }> extends HttpError {
    public errors: T;

    public constructor(errors: T) {
        super(422, 'Check your input');
        this.errors = errors;
    }
}

export class ReCaptchaV3Error extends HttpError {
    public constructor() {
        super(428, 'ReCaptcha Error, please try again');
    }
}


export class ServerError extends HttpError {
    public constructor(status: number) {
        super(status, 'Server Error. Please try again later');
    }
}

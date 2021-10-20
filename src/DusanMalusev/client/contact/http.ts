import { RECAPTCHA_TOKEN_FIELD } from "../http";

export interface ContactRequest {
    name: string;
    email: string;
    subject: string;
    message: string;
    [RECAPTCHA_TOKEN_FIELD]: string;
}

export interface ContactResponse {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
}

import { RECAPTCHA_TOKEN_FIELD } from "../http";

export interface SubscribeRequest {
    name: string;
    email: string;
    [RECAPTCHA_TOKEN_FIELD]: string;
}

export interface SubscribeResponse {
    id: number;
    name: string;
    email: string;
}

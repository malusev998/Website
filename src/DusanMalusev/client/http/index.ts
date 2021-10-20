import {
    BadRequest,
    HttpError,
    Unauthorized,
    Forbidden,
    ReCaptchaV3Error,
    ServerValidationError,
    ServerError,
    ConflictError
} from './errors';
import { CsrfToken } from "../csrf";
import { HttpMethod } from "./methods";

const AJAX_REQUEST = 'XMLHttpRequest';
const RECAPTCHA_TOKEN_FIELD = 'recapcha_field';

enum CommonHeaders {
    ContentType = 'Content-Type',
    Ajax = 'X-Requested-With',
    RecaptchaV3 = 'X-ReCaptchaV3-Token',
    CsrfToken = 'X-CSRF-TOKEN',
    Accept = 'Accept'
}

enum ContentType {
    JSON = 'application/json',
    FORM_DATA = 'multipart/form-data',
}

export default class Http<TResponse> {
    private static csrfToken: CsrfToken;
    private static url: string;

    public get<TValidationError extends { [x: string]: any; } = {}>(url: string, headers: Headers = new Headers()): Promise<TResponse> {
        return this.request<undefined, TValidationError>(url, HttpMethod.GET, undefined, headers);
    }

    public post<TRequest, TValidationError extends { [x: string]: any; } = {}>(url: string, payload: TRequest | null, headers: Headers = new Headers()): Promise<TResponse> {
        return this.request<TRequest, TValidationError>(url, HttpMethod.POST, payload, headers);
    }

    public puth<TRequest, TValidationError extends { [x: string]: any; } = {}>(url: string, payload: TRequest | null, headers: Headers = new Headers()): Promise<TResponse> {
        return this.request<TRequest, TValidationError>(url, HttpMethod.PUT, payload, headers);
    }

    public delete<TValidationError extends { [x: string]: any; } = {}>(url: string, headers: Headers = new Headers()): Promise<TResponse> {
        return this.request<undefined, TValidationError>(url, HttpMethod.DELETE, undefined, headers);
    }

    public async request<TRequest, TValidationError extends { [x: string]: any; } = {}>(url: string, method: HttpMethod, payload: TRequest | null | undefined, headers: Headers = new Headers()): Promise<TResponse> {
        if (!headers.has(CommonHeaders.ContentType)) {
            headers.append(CommonHeaders.ContentType, ContentType.JSON);
        }

        if (!headers.has(CommonHeaders.Ajax)) {
            headers.append(CommonHeaders.Ajax, AJAX_REQUEST);
        }

        if (Http.isStateChangingMethod(method) && !headers.has(CommonHeaders.RecaptchaV3)) {
            headers.append(CommonHeaders.RecaptchaV3, payload[RECAPTCHA_TOKEN_FIELD]);
            delete payload[RECAPTCHA_TOKEN_FIELD];
        }

        if (!headers.has(CommonHeaders.Accept)) {
            headers.append(CommonHeaders.Accept, ContentType.JSON);
        }

        const csrfToken = Http.csrfToken.token;

        if (headers.has(CommonHeaders.CsrfToken)) {
            headers.set(CommonHeaders.CsrfToken, csrfToken);
        } else {
            headers.append(CommonHeaders.CsrfToken, csrfToken);
        }

        if (!url.startsWith('/')) {
            url = `${Http.url}/${url}`;
        } else {
            url = `${Http.url}${url}`;
        }

        const body: RequestInit = {
            method,
            headers,
            keepalive: true,
            credentials: 'include'
        };

        if (payload !== undefined) {
            body.body = Http.serializeBody(headers.get(CommonHeaders.ContentType) as ContentType, payload);
        }

        const res = await fetch(url, body);

        if (res.status > 399 && res.status < 500) {
            await Http.handleClientError<TValidationError>(res);
        }

        if (res.status > 499 && res.status < 600) {
            Http.handleServerError(res);
        }

        return await res.json() as TResponse;
    }

    private static async handleClientError<TValidationError extends { [x: string]: any; } = {}>(response: Response): Promise<never> {
        switch (response.status) {
            case 400:
                throw new BadRequest('Bad Request');
            case 401:
                throw new Unauthorized('Unauthorized');
            case 403:
                throw new Forbidden('Forbidden');
            case 409:
                throw new ConflictError('Record already exists in database');
            case 422:
                throw new ServerValidationError<TValidationError>(await response.json());
            case 428:
                throw new ReCaptchaV3Error();
            default:
                throw new HttpError(response.status, 'Client Error');
        }
    }

    private static handleServerError(response: Response): never {
        throw new ServerError(response.status);
    }

    private static serializeBody<TRequest>(contentType: ContentType, body: TRequest): string | FormData {
        if (!contentType) {
            return JSON.stringify(body);
        }

        switch (contentType) {
            case ContentType.JSON:
                return JSON.stringify(body);
            case ContentType.FORM_DATA:
                const data = new FormData();

                for (const item in body) {
                    //@ts-ignore
                    data.append(item, body[item]);
                }

                return data;
            default:
                throw new Error('Cannot serialize data');
        }
    }

    private static isStateChangingMethod(method: HttpMethod): boolean {
        return method === HttpMethod.POST || method === HttpMethod.PUT || method === HttpMethod.DELETE;
    }

    public static set csrf(item: CsrfToken) {
        Http.csrfToken = item;
    }

    public static set baseUrl(url: string) {
        if (url.endsWith('/')) {
            url = url.substring(0, url.length - 1);
        }

        Http.url = url;
    }
}


export {
    HttpMethod,
    RECAPTCHA_TOKEN_FIELD,
    HttpError,
    ServerValidationError,
    BadRequest,
    ServerError,
    Unauthorized,
    Forbidden,
    ReCaptchaV3Error,
};

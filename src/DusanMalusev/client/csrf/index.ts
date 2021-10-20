import Cookies from 'js-cookie';

export const CSRF_COOKIE_NAME = 'XSRF-TOKEN';

export class CsrfToken {
    private cookieName: string;

    public constructor(cookieName: string = CSRF_COOKIE_NAME) {
        this.cookieName = cookieName;
    }

    public get token(): string {
        return Cookies.get(this.cookieName);
    }
}

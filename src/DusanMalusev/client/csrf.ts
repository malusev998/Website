import Cookies from 'js-cookie';

const COOKIE_NAME = 'XSRF-TOKEN';
const HEADER_NAME = 'X-CSRF-TOKEN';

let globalHeader = '';
let globalCookieName = '';

const setCsrfTokenHeader = (header: string) => {
    globalHeader = header;
};

const setCsrfTokenCookieName = (cookieName: string) => {
    globalCookieName = cookieName;
}

const getCsrtToken = () => {
    return Cookies.get(globalCookieName);
};

const setCsrfToken = () => {
    let obj = {};

    obj[globalHeader] = getCsrtToken();

    return obj;
}


export {
    getCsrtToken,
    setCsrfToken,
    setCsrfTokenHeader,
    setCsrfTokenCookieName,
    COOKIE_NAME,
    HEADER_NAME
}

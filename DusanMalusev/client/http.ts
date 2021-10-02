enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

interface Payload {
    [x: string]: any;
}

let baseUrl: string = '';

const setBaseUrl = (url: string) => {
    if (url.endsWith('/')) {
        url = url.substring(0, url.length - 1);
    }

    baseUrl = url;
};

async function http<T extends Payload>(url: string, method: HttpMethod, body?: T, opt?: RequestInit, recaptchaToken?: string): Promise<Response> {
    if (!opt) {
        opt = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        }
    } else {
        opt.method = method;
        opt.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            ...opt.headers,
        };
    }

    if(typeof recaptchaToken === 'string') {
        opt.headers = {
            'ReCaptchaV3-Token': recaptchaToken,
            ...opt.headers
        };
    }

    if ('Content-Type' in opt.headers) {
        switch (opt.headers['Content-Type']) {
            case 'application/json':
                opt.body = JSON.stringify(body);
                break;
            case 'multipart/form-data':
                const data = new FormData();

                for (const item in body) {
                    data.append(item, body[item]);
                }

                opt.body = data;
                break;
        }
    }

    if (!url.startsWith('/')) {
        url = `${baseUrl}/${url}`;
    } else {
        url = `${baseUrl}${url}`;
    }

    return await fetch(url, opt)
}


export { setBaseUrl, http, HttpMethod };

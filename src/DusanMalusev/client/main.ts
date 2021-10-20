import './css/index.css';

import {CsrfToken} from './csrf';
import Http from './http';
import Sidebar from './sidebar';
import {setKey} from './recaptcha';

const csrfToken = new CsrfToken();
const sidebar = new Sidebar();

document.addEventListener('DOMContentLoaded', () => {
    Http.baseUrl = process.env.API_URL;
    Http.csrf = csrfToken;
    setKey(process.env.RECAPTCHA_FRONTEND_URL);

    sidebar.attachToElement();
});

window.addEventListener('beforeunload', () => {
    sidebar.dispose();
});

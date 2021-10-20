import './css/index.css';

import LogRocket from 'logrocket';

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
    LogRocket.init(process.env.LOG_ROCKET);
    
    sidebar.attachToElement();
});

window.addEventListener('beforeunload', () => {
    sidebar.dispose();
});

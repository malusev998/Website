import Http from "./http";
import {setKey} from "./recaptcha";
import LogRocket from "logrocket";
import {CsrfToken} from "./csrf";

const setup = () => {
    Http.baseUrl = process.env.API_URL;
    Http.csrf = new CsrfToken();
    setKey(process.env.RECAPTCHA_FRONTEND_URL);
    LogRocket.init(process.env.LOG_ROCKET);
};

export default setup;
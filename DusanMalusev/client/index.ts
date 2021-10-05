import './css/index.css';
import { setKey } from './recaptcha';
import { setBaseUrl } from './http';
import {
    CONTACT_FORM,
    CONTACT_FORM_EMAIL,
    CONTACT_FORM_EMAIL_ERROR,
    CONTACT_FORM_MESSAGE,
    CONTACT_FORM_MESSAGE_ERROR,
    CONTACT_FORM_NAME,
    CONTACT_FORM_NAME_ERROR,
    CONTACT_FORM_SUBJECT,
    CONTACT_FORM_SUBJECT_ERROR,
    SNOW_EFFECT,
    SUBSCRIBE_FORM,
    SUBSCRIBE_FORM_EMAIL,
    SUBSCRIBE_FORM_EMAIL_ERROR,
    SUBSCRIBE_FORM_NAME,
    SUBSCRIBE_FORM_NAME_ERROR
} from './elements';

import * as csrf from './csrf';

import {
    setCsrfTokenCookieName,
    setCsrfTokenHeader
} from './csrf';


async function handleParticals() {
    const snowParticals = document.getElementById(SNOW_EFFECT);

    if (!snowParticals) {
        return;
    }

    const { particlesSnowEffect } = await import('./snow');
    await particlesSnowEffect(SNOW_EFFECT);
}

async function handleSubscription() {
    const subscribeForm = document.getElementById(SUBSCRIBE_FORM);

    if (!subscribeForm) {
        return;
    }

    const { subscribeFormHandler } = await import('./subscribe');

    subscribeForm.addEventListener('submit', subscribeFormHandler(
        SUBSCRIBE_FORM_NAME,
        SUBSCRIBE_FORM_EMAIL,
        SUBSCRIBE_FORM_NAME_ERROR,
        SUBSCRIBE_FORM_EMAIL_ERROR
    ));
}

async function handleContact() {
    const contactForm = document.getElementById(CONTACT_FORM);

    if (!contactForm) {
        return;
    }

    const { contactFormHandler } = await import('./contact');

    contactForm.addEventListener('submit', contactFormHandler(
        CONTACT_FORM_NAME,
        CONTACT_FORM_NAME_ERROR,
        CONTACT_FORM_EMAIL,
        CONTACT_FORM_EMAIL_ERROR,
        CONTACT_FORM_SUBJECT,
        CONTACT_FORM_SUBJECT_ERROR,
        CONTACT_FORM_MESSAGE,
        CONTACT_FORM_MESSAGE_ERROR,
    ));
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        setBaseUrl(process.env.API_URL);
        setCsrfTokenCookieName(csrf.COOKIE_NAME);
        setCsrfTokenHeader(csrf.HEADER_NAME);

        setKey(process.env.RECAPTCHA_FRONTEND_URL);

        await handleParticals();
        await handleContact();
        await handleSubscription();
    } catch (err) {
        if (process.env.NODE_ENV === 'development') {
            console.error(err);
        }
    }
});

import Swal from 'sweetalert2/dist/sweetalert2.js';

import { ValidationError } from "yup";
import {
    BadRequest,
    HttpError,
    ReCaptchaV3Error,
    ServerError,
    ServerValidationError
} from "../http";

import addValidation from '../validation';
import showClientValidation from "../validation/client";

export interface ServerValidations {
    Name?: string;
    Email?: string;
    Subject?: string;
    Message?: string;
}

interface Elements {
    name: HTMLInputElement;
    email: HTMLInputElement;
    subject: HTMLInputElement;
    message: HTMLInputElement;

    nameError: HTMLElement;
    emailError: HTMLElement;
    subjectError: HTMLElement;
    messageError: HTMLElement;
}

type ContactError = Error
    | HttpError
    | ServerError
    | ServerValidationError<ServerValidations>
    | BadRequest
    | ReCaptchaV3Error
    | ValidationError;

const handleError = (error: ContactError, elements: Elements) => {
    if (error instanceof ServerValidationError) {
        const errors = error.errors as ServerValidations;

        addValidation(elements.name, elements.nameError, errors.Name);
        addValidation(elements.email, elements.emailError, errors.Email);
        addValidation(elements.subject, elements.subjectError, errors.Subject);
        addValidation(elements.message, elements.messageError, errors.Message);
        return;
    }

    if (error instanceof ValidationError) {
        showClientValidation(error, elements);
        return;
    }

    console.log(error);

    let message = 'An error has occurred, please try again later';

    if (error instanceof HttpError) {
        message = error.message;
    }

    Swal.fire({
        title: 'Error',
        text: message,
        icon: 'error',
        timerProgressBar: true,
    });
};

export default handleError;

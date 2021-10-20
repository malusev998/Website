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
import {ConflictError} from "../http/errors";

export interface ServerValidations {
    Name?: string;
    Email?: string;
}

interface Elements {
    name: HTMLInputElement;
    email: HTMLInputElement;
    nameError: HTMLElement;
    emailError: HTMLElement;
}

type SubscribeError = Error
    | HttpError
    | ServerError
    | ServerValidationError<ServerValidations>
    | BadRequest
    | ReCaptchaV3Error
    | ConflictError
    | ValidationError;

const handleError = (error: SubscribeError, elements: Elements) => {
    if (error instanceof ServerValidationError) {
        const errors = error.errors as ServerValidations;

        addValidation(elements.name, elements.nameError, errors.Name);
        addValidation(elements.email, elements.emailError, errors.Email);

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

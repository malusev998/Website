import {object, string} from "yup";

interface ContactValidationError {
    nameError: string;
    emailError: string;
    subjectError: string;
    messageError: string;
}

const schema = object().shape({
    name: string().required().max(50),
    email: string().required().email().max(150),
    subject: string().required().max(150),
    message: string().required().max(2000),
});


export {
    schema,
    ContactValidationError
}
import {ValidationError} from "yup";
import addValidation from "./index";

const showClientValidation = (error: ValidationError, elements: object) => {
    error.inner.forEach((item) => {
        const element = elements[item.path];
        const joined = `${item.path}Error`;
        const errorElement = elements[joined];

        addValidation(element, errorElement, item.errors[0]);
    });
}

export default showClientValidation;
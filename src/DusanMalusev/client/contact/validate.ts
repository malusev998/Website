import { object, string } from "yup";

const schema = object().shape({
    name: string().required().max(50),
    email: string().required().email().max(150),
    subject: string().required().max(150),
    message: string().required().max(2000),
});


const validate = (name: string, email: string, subject: string, message: string) =>
    schema.validate({ name, email, subject, message }, { recursive: true, abortEarly: false });


export default validate;

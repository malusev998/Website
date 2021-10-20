import { object, string } from "yup";

const schema = object()
    .shape({
        name: string().required().max(50),
        email: string().required().email().max(150),
    });

const validate = (name: string, email: string) => {
    return schema.validate({ name, email }, { recursive: true, abortEarly: false });
}

export default validate;

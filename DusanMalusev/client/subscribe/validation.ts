import { object, string, ValidationError } from 'yup';

export interface SubscriptionValidationError {
    nameError: string;
    emailError: string;
}

export const schema = object()
    .shape({
        name: string().required().max(50),
        email: string().required().email().max(150),
    });


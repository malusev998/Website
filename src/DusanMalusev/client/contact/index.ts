import Swal from 'sweetalert2/dist/sweetalert2.js';
import Http, { RECAPTCHA_TOKEN_FIELD } from "../http";
import { execute, ready } from "../recaptcha";
import handleError, { ServerValidations } from "./errors";
import { ContactRequest, ContactResponse } from "./http";
import validate from "./validate";

const RECAPTCHA_EVENT = 'contact';
const CONTACT_ENDPOINT = '/contact/new';

enum Elements {
    Form = 'contact-form',

    Name = 'contact-form-name',
    Email = 'contact-form-email',
    Subject = 'contact-form-subject',
    Message = 'contact-form-message',

    NameError = 'contact-form-name-error',
    EmailError = 'contact-form-email-error',
    SubjectError = 'contact-form-subject-error',
    MessageError = 'contact-form-message-error',
}

export default class Contact {
    private client: Http<ContactResponse>;

    private form: HTMLFormElement;

    private name: HTMLInputElement;
    private email: HTMLInputElement;
    private subject: HTMLInputElement;
    private message: HTMLInputElement;

    private nameError: HTMLElement;
    private emailError: HTMLElement;
    private subjectError: HTMLElement;
    private messageError: HTMLElement;

    public constructor() {
        this.client = new Http<ContactResponse>();
    }

    public addListener(): void {
        this.form = document.getElementById(Elements.Form) as HTMLFormElement;

        this.name = document.getElementById(Elements.Name) as HTMLInputElement;
        this.email = document.getElementById(Elements.Email) as HTMLInputElement;
        this.subject = document.getElementById(Elements.Subject) as HTMLInputElement;
        this.message = document.getElementById(Elements.Message) as HTMLInputElement;

        this.nameError = document.getElementById(Elements.NameError);
        this.emailError = document.getElementById(Elements.EmailError);
        this.subjectError = document.getElementById(Elements.SubjectError);
        this.messageError = document.getElementById(Elements.MessageError);

        this.form.addEventListener('submit', this.contact.bind(this));
    }

    private async contact(e: Event): Promise<void> {
        e.preventDefault();

        const name = this.name.value;
        const email = this.email.value;
        const subject = this.subject.value;
        const message = this.message.value;

        try {
            await validate(name, email, subject, message);

            await ready();
            const token = await execute(RECAPTCHA_EVENT);

            const payload: ContactRequest = {
                name,
                email,
                subject,
                message,
                [RECAPTCHA_TOKEN_FIELD]: token,
            }

            await this.client.post<ContactRequest, ServerValidations>(CONTACT_ENDPOINT, payload);

            gtag('event', 'contact', {
                event_category: 'reach',
                event_label: 'New contact email',
            });

            Swal.fire({
                title: 'Success',
                text: 'You have successfully sent message',
                icon: 'success',
                timerProgressBar: true,
            });

        } catch (err) {
            handleError(err, {
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message,

                nameError: this.nameError,
                emailError: this.emailError,
                subjectError: this.subjectError,
                messageError: this.messageError
            });
        }
    }

    public dispose(): void {
        this.form.removeEventListener('submit', this.contact);
    }
}

import Swal from 'sweetalert2/dist/sweetalert2.js';
import Http, { RECAPTCHA_TOKEN_FIELD } from '../http';
import { execute, ready } from '../recaptcha';
import validate from './validation';
import { SubscribeRequest, SubscribeResponse } from './http';
import handleError, { ServerValidations } from './errors';

const RECAPTCHA_EVENT = 'subscribe';
const SUBSCRIBE_ENDPOINT = '/subscribe/new';

enum Elements {
    Form = 'subscribe-form',
    Name = 'subscribe-form-name',
    Email = 'subscribe-form-email',
    NameError = 'subscribe-form-name-error',
    EmailError = 'subscribe-form-email-error',
}

export class Subscribe {
    private client: Http<SubscribeResponse>;
    private form: HTMLFormElement | null;
    private name: HTMLInputElement | null;
    private email: HTMLInputElement | null;

    private nameError: HTMLElement | null;
    private emailError: HTMLElement | null;

    public constructor() {
        this.client = new Http<SubscribeResponse>();
    }

    public addListener(): void {
        this.form = document.getElementById(Elements.Form) as HTMLFormElement;
        this.name = document.getElementById(Elements.Name) as HTMLInputElement;
        this.email = document.getElementById(Elements.Email) as HTMLInputElement;

        this.nameError = document.getElementById(Elements.NameError);
        this.emailError = document.getElementById(Elements.EmailError);

        this.form.addEventListener('submit', this.subscribe.bind(this));
    }

    private async subscribe(e: Event) {
        e.preventDefault();
        const name = this.name.value;
        const email = this.email.value;
        
        try {
            await validate(name, email);

            await ready();

            const token = await execute(RECAPTCHA_EVENT);
            
            const payload: SubscribeRequest = {
                name,
                email,
                [RECAPTCHA_TOKEN_FIELD]: token,
            }

            await this.client.post<SubscribeRequest, ServerValidations>(SUBSCRIBE_ENDPOINT, payload);

            gtag('event', 'subscribe', {
                event_category: 'subscription',
                event_label: 'New user subscribed to news letters',
            });

            Swal.fire({
                title: 'Success',
                text: 'You have successfully subscribed to newsletters',
                icon: 'success',
                timerProgressBar: true,
            });
        } catch (err) {
            handleError(err, {
                email: this.email,
                emailError: this.emailError,
                name: this.name,
                nameError: this.nameError,
            });
        }
    }

    public dispose(): void {
        this.form.removeEventListener('submit', this.subscribe);
    }
}

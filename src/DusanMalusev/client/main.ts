import './css/index.css';
import setup from "./setup"; 
import Sidebar from './sidebar';
import {SNOW_EFFECT} from "./elements";

interface Listener {
    addListener: () => void;
}

interface IDisposable {
    dispose: () => void;
}

type IDisposableListener = Listener & IDisposable;

const sidebar = new Sidebar();

let subscription: IDisposableListener  | null = null;
let contact: IDisposable | null = null;


document.addEventListener('DOMContentLoaded', () => {
    setup();
    sidebar.attachToElement();

    const subscriptionEl = document.getElementById('subscription');
    const contactEl = document.getElementById('contact');
    const particles = document.getElementById(SNOW_EFFECT);
    
    if (particles) {
        import('./snow')
            .then(module => module.default(SNOW_EFFECT))
    }
    
    if (subscriptionEl) {
        import('./subscribe')
            .then(module => {
                subscription = new module.Subscribe();
                subscription.addListener();
            });
    }

    if (contactEl) {
        import('./contact')
            .then(module => {
                subscription = new module.Contact();
                subscription.addListener();
            });
    }
});

window.addEventListener('beforeunload', () => {
    sidebar.dispose();
    
    if (subscription) {
        subscription.dispose();
    }
    
    if (contact) {
        contact.dispose();
    }
});

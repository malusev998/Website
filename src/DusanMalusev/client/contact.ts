import Contact from './contact/index';
import particlesSnowEffect from './snow';

import { SNOW_EFFECT } from './elements';
import setup from "./setup";

const contact = new Contact();

document.addEventListener('DOMContentLoaded', async () => {
    setup();
    await particlesSnowEffect(SNOW_EFFECT);
    contact.addListener();
});

window.addEventListener('beforeunload', () => {
    contact.dispose();
});

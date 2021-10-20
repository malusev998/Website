import Contact from './contact/index';
import particlesSnowEffect from './snow';

import { SNOW_EFFECT } from './elements';

const contact = new Contact();

document.addEventListener('DOMContentLoaded', async () => {
    await particlesSnowEffect(SNOW_EFFECT);
    contact.addListener();
});

window.addEventListener('beforeunload', () => {
    contact.dispose();
});

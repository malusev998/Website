import Subscribe from './subscribe';
import particlesSnowEffect from "./snow";
import {SNOW_EFFECT} from "./elements";
import setup from "./setup";

const subscription = new Subscribe();

document.addEventListener('DOMContentLoaded', async () => {
    setup();
    await particlesSnowEffect(SNOW_EFFECT);
    subscription.addListener();
});

window.addEventListener('beforeunload', () => {
    subscription.dispose();
});
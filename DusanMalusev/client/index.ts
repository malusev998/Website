import './css/index.css';
import {ready, setKey} from './recaptcha';

const SNOW_EFFECT = 'snow-effect';


document.addEventListener('DOMContentLoaded', async () => {
    setKey('6Le3FcIZAAAAAEuqx3rtGyjkmLjfJz_QzBlfyfoT');
    await ready();
    const snowParticals = document.getElementById(SNOW_EFFECT);

    if (snowParticals) {
        const { particlesSnowEffect } = await import('./snow');
        await particlesSnowEffect(SNOW_EFFECT);
    }
});
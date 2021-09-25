import './css/index.css';


const SNOW_EFFECT = 'snow-effect';


document.addEventListener('DOMContentLoaded', async () => {
    const snowParticals = document.getElementById(SNOW_EFFECT);

    if (snowParticals) {
        const { particlesSnowEffect } = await import('./snow');
        await particlesSnowEffect(SNOW_EFFECT);
    }
});
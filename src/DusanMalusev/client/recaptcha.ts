let globalKey = null;

const setKey = (key: string): void => {
    globalKey = key;
};

const ready = (): Promise<void> => new Promise((resolve, reject) => {
    if (!('grecaptcha' in window)) {
        reject(new Error('ReCaptcha V3 is not loaded on the webpage'));
        return;
    }
    //@ts-ignore
    grecaptcha.ready(() => {
        resolve();
    });
});

const execute = (action: string): Promise<string> => new Promise((resolve, reject) => {
    if (globalKey === null || globalKey === undefined) {
        reject(new Error('Global Key for RecaptchaV3 must be set by calling setKey function'));
        return;
    }

    //@ts-ignore
    grecaptcha.execute(globalKey, {action})
        .then((token: string) => {
            try {
                resolve(token);
            } catch (err) {
                reject(err);
            }
        })
        .catch(err => reject(err));
});


export {ready, execute, setKey};
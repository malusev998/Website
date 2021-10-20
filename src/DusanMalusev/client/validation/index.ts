const addValidation = (element: HTMLElement, errorEl: HTMLElement, error: string | null | undefined, timeout: number = 4000) => {
    if (!error || error === '') {
        return;
    }

    element.classList.add('input-error');

    errorEl.classList.remove('hidden');
    errorEl.innerText = error;

    setTimeout(() => {
        errorEl.classList.add('hidden');
        element.classList.remove('input-error');
    }, timeout);
};


export default addValidation;

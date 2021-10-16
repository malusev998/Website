interface State {
    open: boolean;
}

const state: State = {
    open: false,
};



const sidebar = (sidebarSelector: string, hamburgerSelector: string) => {
    const sb = document.querySelector(sidebarSelector);

    const hamburgerImage: HTMLImageElement = document.querySelector(`${hamburgerSelector} img`);
    const hamburger = document.querySelector(hamburgerSelector);

    if (!hamburger || !hamburgerImage || !sb) {
        throw new Error(`DOM Elements are not found: ${sidebarSelector} or ${hamburgerSelector}`);
    }

    hamburger.addEventListener('click', (event) => {
        event.preventDefault();

        if (state.open) {
            hamburgerImage.src = "/img/close.svg";
            sb.classList.add('open');
        } else {
            hamburgerImage.src = "/img/menu.svg";
            sb.classList.remove('open');
        }

        state.open = !state.open;
    });
};


export default sidebar;
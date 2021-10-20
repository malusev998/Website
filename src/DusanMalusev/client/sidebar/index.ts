const CLOSE_IMG = '/img/close.svg';
const MENU_IMG = '/img/menu.svg';

enum Elements {
    HamburgerMenu = '.hamburger-menu',
    Image = '.hamburger-menu img',
    Sidebar = '.sidebar'
}

export default class Sidebar {
    private open: boolean = false;

    private hamburger: HTMLElement | null;
    private image: HTMLImageElement | null;
    private sidebar: HTMLElement | null;

    public attachToElement() {
        this.hamburger = document.querySelector(Elements.HamburgerMenu);
        this.image = document.querySelector(Elements.Image);
        this.sidebar = document.querySelector(Elements.Sidebar);

        if (!this.hamburger) {
            throw new Error('Element for hamburger menu is not found');
        }

        if (!this.image) {
            throw new Error('Image element for hamburger menu is not found');
        }

        if (!this.sidebar) {
            throw new Error('Sidebar element for hamburger menu is not found');
        }

        this.hamburger.addEventListener('click', this.eventHandler.bind(this));
    }

    private eventHandler(event: Event): void {
        event.preventDefault();

        this.open = !this.open;

        if (this.open) {
            this.image.src = CLOSE_IMG;
            this.sidebar.classList.add('open');
        } else {
            this.image.src = MENU_IMG;
            this.sidebar.classList.remove('open');
        }
    }

    public dispose(): void {
        this.hamburger
            .removeEventListener('click', this.attachToElement, true);
    }
}

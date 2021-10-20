import './css/index.css';

import Sidebar from './sidebar';

const sidebar = new Sidebar();

document.addEventListener('DOMContentLoaded', () => {
    sidebar.attachToElement();
});

window.addEventListener('beforeunload', () => {
    sidebar.dispose();
});

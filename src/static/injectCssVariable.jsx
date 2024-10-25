// src/injectCssVariables.js
import colorPalette from './colorPalette';

const setCssVariables = () => {
    const root = document.documentElement;
    Object.keys(colorPalette).forEach(key => {
        root.style.setProperty(`--${key}`, colorPalette[key]);
    });
};

export default setCssVariables;
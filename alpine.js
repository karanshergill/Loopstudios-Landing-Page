import Alpine from 'alpinejs'
import { navItems, creationItems } from './data.js';

document.addEventListener('alpine:init', () => {
    console.log('Alpine is initialized');

    Alpine.data('alpineData', () => ({
        navItems,
        isOpen: false,
        creationItems
    }));
});

Alpine.start();
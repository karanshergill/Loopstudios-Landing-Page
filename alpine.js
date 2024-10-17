import Alpine from 'alpinejs';
import { navItems, creationItems } from './data.js';
import 'boxicons';

document.addEventListener('alpine:init', () => {
    console.log('Alpine is initialized');

    Alpine.data('alpineData', () => ({
        navItems,
        isMobileMenuOpen: false,
        creationItems
    }));
});

Alpine.start();
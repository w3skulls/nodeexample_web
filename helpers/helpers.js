const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('toUpper', (foo) => {
    return foo.toUpperCase();
})
'use strict';

DOMTokenList.prototype.forEach = Array.prototype.forEach;
var preloader = document.querySelector('.preloader');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var loaders = [{
    name: 'horizontal-chunks',
    html: '\n            <span>&nbsp;</span>\n            <span>&nbsp;</span>\n            <span>&nbsp;</span>\n            <span>&nbsp;</span>\n            <span>&nbsp;</span>\n        '
}, {
    name: 'successively-circles',
    html: '\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n        '
}, {
    name: 'adventurous-circles',
    html: '\n            <div class="sand"></div>\n            <div class="goldenrod"></div>\n            <div class="orange"></div>\n        ',
    extra: {
        selectors: ['body', '.get-loader'],
        _class: 'b-adventurous-circles'
    }
}];

!(function setDefaultLoader() {
    var rand = getRandomInt(0, loaders.length - 1);
    preloader.classList.add(loaders[rand].name);
    preloader.innerHTML = loaders[rand].html;

    if ('extra' in loaders[rand]) {
        loaders[rand].extra.selectors.forEach(function (selector) {
            document.querySelector(selector).classList.add(loaders[rand].extra._class);
        });
    }
})();

function chooseLoader() {
    var rand = getRandomInt(0, loaders.length - 1);
    var classToAdd = loaders[rand].name;

    preloader.classList.forEach(function (_class) {
        if (_class !== 'preloader') {
            preloader.classList.remove(_class);
        }
    });

    preloader.classList.add(classToAdd);
    preloader.innerHTML = loaders[rand].html;

    document.body.setAttribute('class', '');

    if ('extra' in loaders[rand]) {
        loaders[rand].extra.selectors.forEach(function (selector) {
            document.querySelector(selector).classList.add(loaders[rand].extra._class);
        });
    }
}

document.querySelector('.get-loader').addEventListener('click', chooseLoader, false);

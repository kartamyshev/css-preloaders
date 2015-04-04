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
    name: 'circle',
    html: ''
}];

!(function setDefaultLoader() {
    var rand = getRandomInt(0, loaders.length - 1);
    preloader.classList.add(loaders[rand].name);
    preloader.innerHTML = loaders[rand].html;
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
    preloader.innerHTML = loaders[rand].layout;
}

document.querySelector('.get-loader').addEventListener('click', chooseLoader, false);
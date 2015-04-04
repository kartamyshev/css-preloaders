DOMTokenList.prototype.forEach = Array.prototype.forEach;
var preloader = document.querySelector('.preloader');


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var loaders = [
    {
        name: 'horizontal-chunks',
        html: `
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
        `
    }, {
        name: 'successively-circles',
        html: `
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        `
    }, {
        name: 'adventurous-circles',
        html: `
            <div class="sand"></div>
            <div class="goldenrod"></div>
            <div class="orange"></div>
        `,
        extra: {
            selectors: ['body', '.get-loader'],
            _class: 'b-adventurous-circles'
        }
    }, {
        name: 'running-line',
        html: `
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        `
    }


];

!function setDefaultLoader() {
    var rand = getRandomInt(0, loaders.length - 1);
    preloader.classList.add(loaders[rand].name);
    preloader.innerHTML = loaders[rand].html;

    if ('extra' in loaders[rand]) {
        loaders[rand].extra.selectors.forEach((selector) => {
            document.querySelector(selector).classList.add(loaders[rand].extra._class)
        });
    }

}();


function chooseLoader() {
    var rand = getRandomInt(0, loaders.length - 1);
    var classToAdd = loaders[rand].name;

    preloader.classList.forEach(function(_class) {
        if (_class !== 'preloader') {
            preloader.classList.remove(_class);
        }
    });

    preloader.classList.add(classToAdd);
    preloader.innerHTML = loaders[rand].html;

    document.body.setAttribute('class', '');

    if ('extra' in loaders[rand]) {
        loaders[rand].extra.selectors.forEach((selector) => {
            document.querySelector(selector).classList.add(loaders[rand].extra._class)
        });
    }
}

document.querySelector('.get-loader').addEventListener('click', chooseLoader, false);
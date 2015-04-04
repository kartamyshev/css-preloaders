var loaders = [{
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
}, {
    name: 'filled-circle',
    html: `
            <div></div>
        `
}
];

var preloader = document.querySelector('.preloader');


class Loader {
    constructor() {
        DOMTokenList.prototype.forEach = Array.prototype.forEach;
        this.getLoader = this.chooseLoader.bind(this);
        this.setDefaultLoader();
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static setLoader(which) {
        preloader.classList.add(loaders[which].name);
        preloader.innerHTML = loaders[which].html;
    }

    setDefaultLoader() {
        var _static = this.constructor,
            rand = _static.getRandomInt(0, loaders.length - 1);

        _static.setLoader(rand);

        if ('extra' in loaders[rand]) {
            loaders[rand].extra.selectors.forEach((selector) => {
                document.querySelector(selector).classList.add(loaders[rand].extra._class)
            });
        }
    }

    chooseLoader() {
        var _static = this.constructor,
            rand = _static.getRandomInt(0, loaders.length - 1);

        preloader.classList.forEach(function (_class) {
            if (_class !== 'preloader') {
                preloader.classList.remove(_class);
            }
        });

        _static.setLoader(rand);

        document.body.setAttribute('class', '');

        if ('extra' in loaders[rand]) {
            loaders[rand].extra.selectors.forEach((selector) => {
                document.querySelector(selector).classList.add(loaders[rand].extra._class)
            });
        }
    }

}

var loader = new Loader();
document.querySelector('.get-loader').addEventListener('click', loader.getLoader, false);
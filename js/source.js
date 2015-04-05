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
    }, {
        name: 'filled-circle',
        html: `
            <div></div>
        `
    }, {
        name: 'download-arrow',
        html: `
        <div></div>
    `
    }
];

var preloader = document.querySelector('.preloader');

class Loader {
    constructor() {
        DOMTokenList.prototype.forEach = Array.prototype.forEach;

        this._public = {
            setDefaultLoader: this.setDefaultLoader.bind(this),
            chooseLoader: this.chooseLoader.bind(this)
        };
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static resetPrevLoader() {
        preloader.classList.forEach(function (_class) {
            if (_class !== 'preloader') {
                preloader.classList.remove(_class);
            }
        });

        document.body.setAttribute('class', '');
    }

    launchLoader(which = this.constructor.getRandomInt(0, loaders.length - 1)) {
        preloader.classList.add(loaders[which].name);
        preloader.innerHTML = loaders[which].html;
        location.hash = which;

        if ('extra' in loaders[which]) {
            loaders[which].extra.selectors.forEach((selector) => {
                document.querySelector(selector).classList.add(loaders[which].extra._class)
            });
        }

        return which;
    }

    setDefaultLoader() {
        this.launchLoader();
    }

    chooseLoader() {
        this.constructor.resetPrevLoader();
        this.launchLoader();
    }

}

var loader = new Loader();

document.addEventListener('DOMContentLoaded', loader._public.setDefaultLoader, false);

document.querySelector('.fork img').addEventListener('load', () => {
    document.querySelector('.fork').classList.add('fork_loaded');
}, false);
document.querySelector('.get-loader').addEventListener('click', loader._public.chooseLoader, false);
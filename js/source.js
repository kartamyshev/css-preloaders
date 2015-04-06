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
    }, {
        name: 'glass-line',
        html: `
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        `
    }, {
        name: 'falling-numbers',
        html: `
            <div class="percent-20">20%</div>
            <div class="percent-40">40%</div>
            <div class="percent-60">60%</div>
            <div class="percent-80">80%</div>
            <div class="percent-100">100%</div>
        `,
        extra: {
            selectors: ['body'],
            _class: 'b-falling-numbers'
        }
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
        preloader.classList.forEach((_class) => {
            if (_class !== 'preloader') {
                preloader.classList.remove(_class);
            }
        });

        document.body.setAttribute('class', '');
    }

    launchLoader(index = this.constructor.getRandomInt(0, loaders.length - 1)) {
        preloader.classList.add(loaders[index].name);
        preloader.innerHTML = loaders[index].html;
        location.hash = index;

        if ('extra' in loaders[index]) {
            loaders[index].extra.selectors.forEach((selector) => {
                document.querySelector(selector).classList.add(loaders[index].extra._class)
            });
        }

        return index;
    }

    setDefaultLoader() {
        preloader.classList.remove('preloader_minimized');
        this.launchLoader();
    }

    chooseLoader() {
        preloader.classList.add('preloader_minimized');
        var timeout = setTimeout(() => {
            this.constructor.resetPrevLoader();
            this.launchLoader();
            preloader.classList.remove('preloader_minimized');
            clearTimeout(timeout);
        }, 700);
    }

}

var loader = new Loader();

document.addEventListener('DOMContentLoaded', loader._public.setDefaultLoader, false);

document.querySelector('.fork img').addEventListener('load', () => {
    document.querySelector('.fork').classList.add('fork_loaded');
}, false);
document.querySelector('.get-loader').addEventListener('click', loader._public.chooseLoader, false);
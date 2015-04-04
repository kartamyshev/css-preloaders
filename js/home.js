'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
}, {
    name: 'running-line',
    html: '\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n        '
}, {
    name: 'filled-circle',
    html: '\n            <div></div>\n        '
}];

var preloader = document.querySelector('.preloader');

var Loader = (function () {
    function Loader() {
        _classCallCheck(this, Loader);

        DOMTokenList.prototype.forEach = Array.prototype.forEach;
        this.getLoader = this.chooseLoader.bind(this);
        this.setDefaultLoader();
    }

    _createClass(Loader, [{
        key: 'setDefaultLoader',
        value: function setDefaultLoader() {
            var _static = this.constructor,
                rand = _static.getRandomInt(0, loaders.length - 1);

            _static.setLoader(rand);

            if ('extra' in loaders[rand]) {
                loaders[rand].extra.selectors.forEach(function (selector) {
                    document.querySelector(selector).classList.add(loaders[rand].extra._class);
                });
            }
        }
    }, {
        key: 'chooseLoader',
        value: function chooseLoader() {
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
                loaders[rand].extra.selectors.forEach(function (selector) {
                    document.querySelector(selector).classList.add(loaders[rand].extra._class);
                });
            }
        }
    }], [{
        key: 'getRandomInt',
        value: function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }, {
        key: 'setLoader',
        value: function setLoader(which) {
            preloader.classList.add(loaders[which].name);
            preloader.innerHTML = loaders[which].html;
        }
    }]);

    return Loader;
})();

var loader = new Loader();
document.querySelector('.get-loader').addEventListener('click', loader.getLoader, false);

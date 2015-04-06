'use strict';var _classCallCheck=function(instance, Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}};var _createClass=(function(){function defineProperties(target, props){for(var i=0; i < props.length; i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if('value' in descriptor)descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function(Constructor, protoProps, staticProps){if(protoProps)defineProperties(Constructor.prototype, protoProps);if(staticProps)defineProperties(Constructor, staticProps);return Constructor;};})();var loaders=[{name:'horizontal-chunks', html:'\n            <span>&nbsp;</span>\n            <span>&nbsp;</span>\n            <span>&nbsp;</span>\n            <span>&nbsp;</span>\n            <span>&nbsp;</span>\n        '}, {name:'successively-circles', html:'\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n        '}, {name:'adventurous-circles', html:'\n            <div class="sand"></div>\n            <div class="goldenrod"></div>\n            <div class="orange"></div>\n        ', extra:{selectors:['body', '.get-loader'], _class:'b-adventurous-circles'}}, {name:'running-line', html:'\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n        '}, {name:'filled-circle', html:'\n            <div></div>\n        '}, {name:'download-arrow', html:'\n        <div></div>\n    '}, {name:'glass-line', html:'\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n        '}, {name:'falling-numbers', html:'\n            <div class="percent-20">20%</div>\n            <div class="percent-40">40%</div>\n            <div class="percent-60">60%</div>\n            <div class="percent-80">80%</div>\n            <div class="percent-100">100%</div>\n        ', extra:{selectors:['body'], _class:'b-falling-numbers'}}];var preloader=document.querySelector('.preloader');var Loader=(function(){function Loader(){_classCallCheck(this, Loader);DOMTokenList.prototype.forEach = Array.prototype.forEach;this._public = {setDefaultLoader:this.setDefaultLoader.bind(this), chooseLoader:this.chooseLoader.bind(this)};}_createClass(Loader, [{key:'launchLoader', value:function launchLoader(){var index=arguments[0] === undefined?loaders.length - 1:arguments[0];preloader.classList.add(loaders[index].name);preloader.innerHTML = loaders[index].html;location.hash = index;if('extra' in loaders[index]){loaders[index].extra.selectors.forEach(function(selector){document.querySelector(selector).classList.add(loaders[index].extra._class);});}return index;}}, {key:'setDefaultLoader', value:function setDefaultLoader(){preloader.classList.remove('preloader_minimized');this.launchLoader();}}, {key:'chooseLoader', value:function chooseLoader(){var _this=this;preloader.classList.add('preloader_minimized');var timeout=setTimeout(function(){_this.constructor.resetPrevLoader();_this.launchLoader();preloader.classList.remove('preloader_minimized');clearTimeout(timeout);}, 700);}}], [{key:'getRandomInt', value:function getRandomInt(min, max){return Math.floor(Math.random() * (max - min + 1)) + min;}}, {key:'resetPrevLoader', value:function resetPrevLoader(){preloader.classList.forEach(function(_class){if(_class !== 'preloader'){preloader.classList.remove(_class);}});document.body.setAttribute('class', '');}}]);return Loader;})();var loader=new Loader();document.addEventListener('DOMContentLoaded', loader._public.setDefaultLoader, false);document.querySelector('.fork img').addEventListener('load', function(){document.querySelector('.fork').classList.add('fork_loaded');}, false);document.querySelector('.get-loader').addEventListener('click', loader._public.chooseLoader, false);

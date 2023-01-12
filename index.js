// ==UserScript==
// @name         Ad Block
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  A script which removes ads from datenbanken-verstehen.de
// @author       https://github.com/x47base
// @license      MIT
// @match        https://www.datenbanken-verstehen.de/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=datenbanken-verstehen.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // Your code here...
    const ads_datenbanken_de = [
        'ad-block-content-right',
        'ad-block-content-left',
        'ad-block-content-center',
        'ad-block-homepage-header',
        'ad-block-homepage-footer',
        'ad-block-homepage-center',
        'ad-block-homepage-right',
        'ad-block-sticky-ad',
        'ad-block-text',
        'ad-block-text-links',
        'ad-block-text-link',
    ]
    const len = ads_datenbanken_de.length
    const remove = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());
    for (var i = 0; i < len; i++){
        remove(`.${ads_datenbanken_de[i]}`)
    }
})();

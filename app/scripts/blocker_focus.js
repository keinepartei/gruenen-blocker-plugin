/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for focus.de.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_focus.js
 * commit a102033e9508dca4463a2db26166ddb39a4014ce.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
    {
        selector: 'div.gsc-results div',
        type: 'big'
    },
    {
        selector: 'div.slide div.img',
    },
    {
        selector: 'div.teaser',
        type: 'big'
    },
    {
        selector: 'li.teaser',
        type: 'big'
    },
    {
        selector: '#videoPlayer',
        type: 'big'
    },
    {
        selector: '.vidTeaserSingle',
        type: 'big'
    },
    {
        selector: '.teaserLink',
        type: 'big'
    },
    { // TODO: Fix, depends on image height.
        selector: 'div.promo',
        type: 'big',
        align: 'top',
        imageHeight: '30%',
        title: 'color: #D70D12; font-size: 16px; line-height: 1.2; font-weight: 400',
        txt: 'color: #000; font-size: 1.0rem; line-height: 24px; font-weight: bold;'
    },
    {
        selector: 'div.popularArticles',
        type: 'big'
    },
    {
        selector: 'div#article',
        type: 'big'
    },
    {
        selector: '.singleTeaser',
        type: 'big',
        align: 'top',
        imageHeight: '51.5%',
        title: 'color: #D70D12; font-size: 16px; line-height: 1.2; font-weight: 400',
        txt: 'color: #000; font-size: 1.0rem; line-height: 24px; font-weight: bold;'
    },
    { // TODO Fix entire list (3 entries) is blocked. 
        selector: 'div.list',
        type: 'big'
    }
]);

require("./run_blocker").run(blocker);

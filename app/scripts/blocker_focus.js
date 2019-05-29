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
console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.gsc-results div',
        type: 'big'
    },
    {
        selector: 'div.slide div.img',
        type: 'small'
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
    {
        selector: 'div.promo',
        type: 'big'
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
        type: 'big'
    },
    {
        selector: 'div.list',
        type: 'big'
    }
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

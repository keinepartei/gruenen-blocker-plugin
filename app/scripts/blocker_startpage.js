/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for startpage.com.
 * 
 * Original source code is from "dieparteidiepartei"
 * (https://github.com/dieparteidiepartei) licensed under the ISC License by the
 * Internet Systems Consortium (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_search.js
 * commit 097cd8e9c3349110bf126d4942883fb544c931c5.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

new Blocker([
    /* www.startpage.com */
    {
        selector: '.card.instant-wiki.search-item',
        type: 'big'
    },
    {
        selector: '.search-result',
    },
    {
        selector: '.search-item',
    },

    /* www.qwant.com */
    {
        selector: '.result.result--web',
        type: 'big'
    },

    /* www.morgenpost.de */
    {
        selector: 'div.gsc-results div',
        type: 'big'
    },
]).run();

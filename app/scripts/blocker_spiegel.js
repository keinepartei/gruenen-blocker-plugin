/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for spiegel.de.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_spiegel.js
 * commit 8ed87c4379a474a04831a4a2aaabc472a7f6d915.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

new Blocker([
    { // Inline teaser with image on left side.
        selector: 'div.teaser',
        type: 'big',
        imageWidth: '42.5%',
        title: 'color: black; font-size: 1.125rem; line-height: 1.2;',
        txt: 'color: #900; font-size: 1.625rem; line-height: 1.2; font-weight: bold;'
    },
    {
        selector: '.search-teaser',
        type: 'big'
    },
    {
        selector: 'div.spArticleContent',
        type: 'big'
    },
    {
        selector: 'div.ob-dynamic-rec-container',
        type: 'big'
    },
    {
        selector: 'div.video-player',
        type: 'big'
    },
    { // Assets/Teaser in right column.
        selector: 'div.asset-box',
        type: 'big',
        align: 'top',
        imageHeight: '66.666%',
        title: 'color: black; font-size: 1.0rem; line-height: 1.2; font-weight: 700;',
        txt: 'color: #000; font-size: 1.0rem; line-height: 1.2;'
    },
    {
        selector: '.ui-tabs-panel',
        type: 'big'
    },
    {
        selector: 'li.slider_item',
        type: 'big'
    }
]).run();

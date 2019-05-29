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
console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.teaser',
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
    {
        selector: 'div.asset-box',
        type: 'big'
    },
    {
        selector: '.ui-tabs-panel',
        type: 'big'
    },
    {
        selector: '.search-teaser',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();


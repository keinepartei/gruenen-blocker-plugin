/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for tagesspiegel.de.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_tagesspiegel.js
 * commit acca1e3e930a0f5a4ef3189a54d11068625098aa.
 */
console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.ts-teaser',
        type: 'big'
    },
    {
      selector: '.hcf-teaser',
        type: 'big'
    },
    {
        selector: '.hcf-mcol-box-content',
        type: 'big'
    },
    {
        selector: '.ts-article-content',
        type: 'big'
    },
    {
        selector: '.ts-article-header',
        type: 'big'
    },
    {
        selector: '.hcf-theme-lead',
        type: 'big'
    },
    {
        selector: '.hcf-referral-box',
        type: 'big'
    },
    {
        selector: '.hcf-teaser-list',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();


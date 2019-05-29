/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for morgenpost.de.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_morgenpost.js
 * commit 9df4166f4a98b8580ca3ca4f0d38afd0b6448486.
 */
console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.teaser--small',
        type: 'small'
    },
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: '.teaser',
        type: 'big'
    },
    {
        selector: '.teaser--large',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

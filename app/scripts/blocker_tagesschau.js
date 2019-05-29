/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for www.tagesschau.de.
 * 
 * Original source code is from "AlkoholLiga" (https://github.com/AlkoholLiga)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/AlkoholLiga/afd-blocker-plugin/blob/master/app/scripts/blocker_tagesschau.js
 * commit 407bfdf532aec1d11caa3eae5da30c4d3cb5f7b6.
 */
console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'div.teaser',
        type: 'big'
    },
    {
        selector: 'div.media',
        type: 'big'
    },
    {
        selector: 'div.mediaCon',
        type: 'big'
    },
    {
        selector: 'li.current',
        type: 'small'
    },
    {
        selector: 'div.box',
        type: 'big'
    },
    {
        selector: 'div.mod.modA.modParagraph',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

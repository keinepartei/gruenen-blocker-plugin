/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for faz.net.
 * 
 * Original source code is from "AlkoholLiga" (https://github.com/AlkoholLiga)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/AlkoholLiga/afd-blocker-plugin/blob/master/app/scripts/blocker_faz.js
 * commit 64b1aa529ff68db576a523f4868f28529aeaffb4.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
    {
        selector: 'div.o-Grid_Col',
        type: 'big'
    },
    {
        selector: 'div.atc-Text',
        type: 'big'
    },
    {
        selector: 'li.nvg-Breadcrumb_Item',
        type: 'small'
    },
    {
        selector: 'div.Teaser620',
        type: 'big'
    },
    {
        selector: 'div.gh-MainNav_Article',
        type: 'small'
    },
    {
        selector: 'div.ctn-PlaceholderContent',
        type: 'big'
    },
    {
        selector: 'div.sld-TeaserMore_Item',
        type: 'big'
    },
]);

require("./run_blocker").run(blocker);

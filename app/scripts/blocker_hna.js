/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for hna.de (Hessische Niedersächsische Allgemeine).
 * 
 * Original source code is from "AlkoholLiga" (https://github.com/AlkoholLiga)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/AlkoholLiga/afd-blocker-plugin/blob/master/app/scripts/blocker_hna.js
 * commit d91f082edcccf8f933971685c746b1e37930cf56.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
    {
        selector: '.id-LinkOverlay',
        type: 'big'
    },
    {
        selector: '.id-Article-kicker',
    },
    {
        selector: '.id-Article-body',
        type: 'big'
    },
    {
        selector: '.id-Article-headline',
    },
    {
        selector: '.id-Breadcrumb-element-link',
    },
]);

require("./run_blocker").run(blocker);

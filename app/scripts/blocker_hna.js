/**
 * Copyright (c) 2019, kagal (https://github.com/keinepartei).
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
console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.id-LinkOverlay',
        type: 'big'
    },
    {
        selector: '.id-Article-kicker',
        type: 'small'
    },
    {
        selector: '.id-Article-body',
        type: 'big'
    },
    {
        selector: '.id-Article-headline',
        type: 'small'
    },
    {
        selector: '.id-Breadcrumb-element-link',
        type: 'small'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();
/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for qwant.de.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_qwant.js
 * commit e8f3d1460ccc6a9ed4ec83e228a8fe2478459194.
 */
console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.result',
        type: 'small'
    },
    {
        selector: '.result_ribbon_knowledge',
        type: 'big'
    },
    {
        selector: '.result-smart__news__item',
        type: 'big'
    },
    {
        selector: '.result-smart__social__item',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

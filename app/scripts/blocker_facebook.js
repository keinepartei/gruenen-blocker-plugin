/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for facebook.com.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_facebook.js
 * commit 0ab5a897909e311d50ccd69cae04485a45b444f5.
 */
console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '._77we',
        type: 'big'
    },
    {
        selector: '._6-e5',
        type: 'big'
    },
    {
        selector: '._4b0l',
        type: 'big'
    },
    {
        selector: 'div._5pcb',
        type: 'small'
    },
    {
        selector: '#facebook ._-kb div',
        type: 'big'
    },
    {
        selector: '#facebook _5pcr userContentWrapper',
        type: 'small'
    }
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

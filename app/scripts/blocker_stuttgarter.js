/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for stuttgarter.de.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_stuttgarter.js
 * commit 336161146091af474d98ed3714a24121a616acd6.
 */
console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: '.mod-top-list',
        type: 'big'
    },
    {
        selector: '.mod-aside',
        type: 'big'
    },
    {
        selector: '.box-head',
        type: 'big'
    }
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();


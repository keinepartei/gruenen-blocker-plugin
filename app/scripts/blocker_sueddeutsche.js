/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for sueddeutsche.de
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_sueddeutsche.js
 * commit acca1e3e930a0f5a4ef3189a54d11068625098aa.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

new Blocker([
    {
        selector: 'li.element',
        type: 'big'
    },
    {
        selector: '.sz-teaserlist-element',
        type: 'big'
    },
    {
        selector: 'li.newsscannermodule__item',
    },
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: 'div.entrylist__entry',
        type: 'big'
    },
]).run();

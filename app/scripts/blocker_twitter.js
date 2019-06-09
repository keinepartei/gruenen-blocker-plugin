/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for twitter.com.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_twitter.js
 * commit cb5ab707a20283ea797196334ebb027e629fb26a.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

new Blocker([
    {
        selector: 'div.tweet',
        type: 'big'
    },
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: 'div.entrylist__entry',
    },
    {
        selector: 'div.ProfileCard',
        type: 'big'
    }
]).run();

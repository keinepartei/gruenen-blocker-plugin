/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for handelsblatt.de.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_handelsblatt.js
 * commit f7f1dfd7077251363476fe3d118aaf8dfe31b818.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
    {
        selector: '.c-teaser',
        type: 'big'
    },
    {
        selector: '.vhb-teaser.panel',
        type: 'small'
    },
    {
        selector: '.vhb-teaser',
        type: 'big'
    },
    {
        selector: '.container_onecolumn_read',
        type: 'big'
    },
    {
        selector: '.c-megaufmacher',
        type: 'big'
    },
    {
        selector: '.o-teasers__item',
        type: 'big'
    },
    {
        selector: '.vhb-teaser-list-small',
        type: 'big'
    },
    {
        selector: '.vhb-content',
        type: 'big'
    }

]);

require("./run_blocker").run(blocker);

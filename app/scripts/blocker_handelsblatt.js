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

new Blocker([
    {	// Inline teasers (problem small and width).
        selector: '.c-teaser--article',
        type: 'big',
        align: 'top',
        imageHeight: '46.5%',
        title: 'color: #ee7000; font-size: 14px; line-height: 16px;',
        txt: 'color: #333; font-size: 16px; line-height: 18px; font-weight: bold;'
    },
    { // Right column 'Meistgelesen'
        selector: '.vhb-teaser.panel',
    },
    { // Right column 'Live'
    	selector: '.vhb-teaser',
        type: 'big',
        align: 'top',
        imageHeight: '66.666%',
        title: 'color: #ee7000; font-size: 13px; line-height: 13px; font-weight: 700; font-family: FranklinGothic,Arial,Helvetica,sans-serif;',
        txt: 'color: #000; font-size: 15px; line-height: 18px; font-weight: 700; font-family: FranklinGothic,Arial,Helvetica,sans-serif;'
    },
    { // TODO: Check this!
        selector: '.container_onecolumn_read',
        type: 'big'
    },
    { // TODO: Check this!
        selector: '.c-megaufmacher',
        type: 'big'
    },
//    {
//        selector: '.vhb-content',
//        type: 'big'
//    }
]).run();

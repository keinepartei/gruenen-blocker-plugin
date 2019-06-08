/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for n-tv.de.
 * 
 * Original source code is from "dieparteidiepartei"
 * (https://github.com/dieparteidiepartei) licensed under the ISC License by the
 * Internet Systems Consortium (www.isc.org).
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
    { // Teaser right.
        selector: 'article.teaser--video',
        type: 'big',
        align: 'top',
        imageHeight: '51.5%',
        title: 'color: #be0028; font-size: 1.6rem; line-height: 1.2;',
        txt: 'color: #000; font-size: 1.9rem; line-height: 1.2; font-weight: bold;'
    },
    { // Teaser inline.
        selector: 'article.teaser--inline',
        type: 'big',
        align: 'left',
        imageWidth: '33.333%',
        title: 'color: #be0028; font-size: 19px; line-height: 22.6px; font-weight: 700, font-family: Arial, Helvetica, sans-serif;', 
        txt: 'color: #000; font-size: 2.0rem; line-height: 1.2; font-weight: bold;'
    },
    { // Section 'Meistgelesen'.
        selector: 'li.teaser',
        title: 'font-size: 1.6rem; line-height: 1.2;',
    },
]);

require("./run_blocker").run(blocker);

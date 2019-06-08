/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for zdf.de.
 * 
 * Original source code is from "MGierz" (https://github.com/MGierz) licensed
 * under its original license of Die Partei Die PARTEI
 * (https://github.com/dieparteidiepartei/afd-blocker-plugin/LICENSE commit
 * 0e45aed998a838eaee4f7dda5b2f73b0e03b89ff)
 * https://github.com/MGierz/afd-blocker-plugin/blob/master/app/scripts/blocker_zdf.js
 * commit 876726e65ff63f7320b95f5c3dc7fb73bdd3eec1.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
    {
        selector: 'article.b-cluster-teaser',
        type: 'big',
        align: 'top',
        imageHeight: '50%',
        title: 'color: rgb(52, 57, 63); font-size: 15px; line-height: 18px; font-weight: 400; font-family: Helvetica-Neue, Arial, sans-serif;',
        txt: 'color: rgb(52, 57, 63); font-size: 22px; line-height: 30px; font-weight: 700; font-family: Helvetica-Neue, Arial, sans-serif;'
    },
    {
        selector: 'div.box',
    },
    {
        selector: 'section',
    },
    {
        selector: 'div.details',
    },
    {
        selector: 'header',
    }
]);

require("./run_blocker").run(blocker);

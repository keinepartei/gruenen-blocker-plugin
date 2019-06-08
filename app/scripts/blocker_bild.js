/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for bild.de.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_bild.js
 * commit acca1e3e930a0f5a4ef3189a54d11068625098aa.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([ 
    {
        selector: 'div.hentry.landscape',
    },
    {
        selector: 'div.hentry',
        type: 'big'
    },
    {
        selector: '.videoCube',
        type: 'big'
    },
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: 'div.misc',
        type: 'big'
    },
    {
        selector: 'ul.lead',
        type: 'big'
    },
]);

require("./run_blocker").run(blocker);

/**
 * BILD.de uses teaser images (sometimes without alt attributes). So we try to
 * find teasers by its article URI
 */
console.log("Call content blocker for URL parts.");
[
    "//a[contains(translate(@href,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'-gruene')]",
    "//a[contains(translate(@href,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'gruene-')]",
    "//a[contains(translate(@href,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'gruene.')]",
    "//a[contains(translate(@href,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'gruenen-')]",
    "//a[contains(translate(@href,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'gruenen.')]",
    "//a[contains(translate(@href,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'-buendnis90')]",
    "//a[contains(translate(@href,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'buendnis90-')]",
    "//a[contains(translate(@href,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'buendnis90.')]"
].forEach(function(xpathExpression) {
    let teaserLinkBlocker = new Blocker([ 
        {
            selector: 'div.hentry',
            type: 'big'
        }
    ], xpathExpression);

    teaserLinkBlocker.modifyContent([document]);
});



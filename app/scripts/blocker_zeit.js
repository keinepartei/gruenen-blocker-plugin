/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for zeit.de.
 * 
 * Original source code is from "dieparteidiepartei"
 * (https://github.com/dieparteidiepartei) licensed under the ISC License by the
 * Internet Systems Consortium (www.isc.org).
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
    { // 'Schwerpunkte' bordered links at the top of the page.
        selector: 'a.nav__tag',
    },
    { // TODO: Fix with align bottom.
        selector: 'article.teaser-large',
    },
    { 
        selector: 'article.teaser-small',
        type: 'big',
        align: 'left',
        imageWidth: '39.5%',
        imageHeight: '150px',
        title: 'color: rgb(185, 17, 9); font-size: 13px; line-height: 15.6px; font-weight: 400; font-family: TabletGothic, "Helvetica Neue", Helvetica, Arial, FreeSans, sans-serif;',
        txt: 'color: rgb(37, 37, 37); font-size: 20px; line-height: 24px; font-weight: 700; font-family: TabletGothic, "Helvetica Neue", Helvetica, Arial, FreeSans, sans-serif;'
    },
    { // Small video teasers in 'Video'.
        selector: 'article.video-small',
    },
    { // Bottom of the page 'Beliebte Artikel', first TR is with top aligned
		// image, others only text.
    	selector: 'div.buzzboard article.teaser-buzzboard',
    },
    { // Bottom of the page 'Schlagzeilen'.
    	selector: 'div.buzzboard article.newsteaser',
    }
]);

require("./run_blocker").run(blocker);

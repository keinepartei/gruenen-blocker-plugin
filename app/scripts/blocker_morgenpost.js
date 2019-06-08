/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for morgenpost.de.
 * 
 * Original source code is from "dieparteidiepartei"
 * (https://github.com/dieparteidiepartei) licensed under the ISC License by the
 * Internet Systems Consortium (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_morgenpost.js
 * commit 9df4166f4a98b8580ca3ca4f0d38afd0b6448486.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
	{   // Small teasers without image at the bottom of the page must be
		// processed before other 'article.teaser--small'.
        selector: 'article.teaser--noimg',
    },
    { // Small teasers.
        selector: 'article.teaser--small',
        type: 'big',
    	align: 'top',
    	imageHeight: '55%',
    	title: 'color: #333; font-size: 1.0rem; line-height: 1.15; font-weight: normal;',
    	txt: 'color: black; font-size: 1.0em; line-height: 1.2; font-weight: normal;font-family: Georgia,serif;'
    },
    { // Large teasers.
        selector: 'article.teaser--large',
        type: 'big',
        align: 'left',
        imageWidth: '35.5%',
        title: 'color: black; font-size: 1.0rem; line-height: 1.15; font-weight: normal;',
        txt: 'color: black; font-size: 1.2rem; line-height: 1.3; font-weight: normal;'
    },
]);

require("./run_blocker").run(blocker);

/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for tagesspiegel.de.
 * 
 * Original source code is from "dieparteidiepartei"
 * (https://github.com/dieparteidiepartei) licensed under the ISC License by the
 * Internet Systems Consortium (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_tagesspiegel.js
 * commit acca1e3e930a0f5a4ef3189a54d11068625098aa.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
	{ // Most read. Smaller inline teasers.
        selector: '.ts-most-read article.ts-teaser',
        type: 'big',
        align: 'left',
        imageWidth: '36%',
        title: 'color: #444; font-size: 12px; line-height: 15px; font-weight: 700; font-family: Arial,Verdana,Helvetica,sans-serif;',
        txt: 'color: #900; font-size: 14px; line-height: 19.6px; font-weight: 700;font-family: Georgia,bitstream charter,serif;'
    },
    { // Wide teaser, must be processed before normal teaser (smaller one with
		// image on the left).
    	// TODO: Image is not overlayed, blocker appears below. Was
		// .hcf-teaser-list before ...
        selector: '.hcf-teaser-list .hcf-wide',
          type: 'big',
          align: 'top',
          imageHeight: '51.5%',
          title: 'color: #900; font-size: 16px; line-height: 19px; font-weight: 700;font-family: Georgia,bitstream charter,serif;',
          txt: 'color: #000; font-size: 15px; line-height: 18px; font-weight: 400;font-family: Georgia,bitstream charter,serif;'
      },
    { // Inline teaser
      selector: '.hcf-teaser-list .hcf-left',
        type: 'big',
        align: 'left',
        imageWidth: '31.5%',
        title: 'color: #444; font-size: 12px; line-height: 13px; font-weight: 700;font-family: Arial;',
        txt: 'color: #900; font-size: 16px; line-height: 19px; font-weight: 700;font-family: Georgia,bitstream charter,serif;',        
    },
    { // Right column box with tabs text teaser.
        selector: 'div.hcf-mcol-box-content ul li',
    },
    { // Inline teaser links. TODO: Is not processed anymore.
        selector: 'li.hcf-article-link',
    },
    { // Article page. TODO: Improve.
        selector: '.ts-article-content',
    },
    { // Article page. TODO: Improve.
        selector: '.ts-article-header',
    },
    { // Not found.
        selector: '.hcf-theme-lead',
        type: 'big'
    },
    { // Not found.
        selector: '.hcf-referral-box',
        type: 'big'
    },
]);

require("./run_blocker").run(blocker);

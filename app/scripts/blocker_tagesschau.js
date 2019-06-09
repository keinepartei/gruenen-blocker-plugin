/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for www.tagesschau.de.
 * 
 * Original source code is from "AlkoholLiga" (https://github.com/AlkoholLiga)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/AlkoholLiga/afd-blocker-plugin/blob/master/app/scripts/blocker_tagesschau.js
 * commit 407bfdf532aec1d11caa3eae5da30c4d3cb5f7b6.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

new Blocker([
	{ // Medium inline teasers with image on the left. Must be processed
		// before larger inline teasers.
        selector: 'div.mod.modA.smallImage .teaser',
        type: 'big',
        align: 'left',
        imageWidth: '32.333%',
        imageHeight: '200px',
        title: 'color: #444; font-size: 16px; line-height: 21.6px; font-weight: 400, font-family: Thesis, helvetica, arial, sans-serif;', 
        txt: 'color: #666; font-size: 19.22px; line-height: 24px; font-weight: 700; font-family: Thesis;'
    },
	{
        selector: 'div.teaser',
        type: 'big',
        align: 'top',
        imageHeight: '51.5%',
        title: 'color: #444; font-size: 16px; line-height: 21.6px; font-weight: 400, font-family: Thesis, helvetica, arial, sans-serif;', 
        txt: 'color: #666; font-size: 28.22px; line-height: 35px; font-weight: 700; font-family: Thesis;'
    },
    {
        selector: 'div.media',
    },
    {
        selector: 'div.mediaCon',
    },
    {
        selector: 'li.current',
    },
    { // Top Ten teasers. TODO: Fix.
        selector: 'div.linklist ul li',
    },
    {
        selector: 'div.mod.modA.modParagraph',
    },
]).run();

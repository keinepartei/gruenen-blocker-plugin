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

new Blocker([
	{ // Almost all.
        selector: 'div.o-teaser-article',
        type: 'big',
        align: 'top',
        imageHeight: '56%',
        title: 'color: #c00; font-size: 14px; line-height: 18px;font-weight: 700;font-family: SternMetric,Helvetica Neue,Helvetica,Arial,sans-serif;',
        txt: 'color: #000; font-size: 16px; line-height: 20px; font-weight: 800;letter-spacing: -.2px;'
    },
    { // Section 'Top-Themen' at the top of the page. Broken! Only overlays
		// the first match in the breadcrump list.
        selector: '.navigation-link',
    },
]).run();

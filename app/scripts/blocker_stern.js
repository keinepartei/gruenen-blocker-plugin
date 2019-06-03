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
	{ // Almost all.
        selector: 'div.o-teaser-article',
        type: 'big'
    },
    { // Section 'Top-Themen' at the top of the page. Broken! Only overlays
		// the first match in the breadcrump list.
        selector: '.navigation-link',
        type: 'small'
    },
]);

require("./run_blocker").run(blocker);
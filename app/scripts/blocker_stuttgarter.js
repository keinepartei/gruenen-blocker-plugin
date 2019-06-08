/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for stuttgarter.de.
 * 
 * Original source code is from "dieparteidiepartei"
 * (https://github.com/dieparteidiepartei) licensed under the ISC License by the
 * Internet Systems Consortium (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_stuttgarter.js
 * commit 336161146091af474d98ed3714a24121a616acd6.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
	{ // TODO: Test. It#s at the bottom of the page '...Zeitungen'.
        selector: '.box-head',
        type: 'big'
    },
	{ // Gets the smaller ones as well ...
        selector: 'article.mod-teaser',
        type: 'big',
        align: 'top',
        imageWidth: '100%',
        imageHeight: '51.5%',
        title: 'color: #918e83; font-size: 1.125rem; line-height: 1.375;font-weight: normal;',
        txt: 'color: #454545; font-size: 1.5rem; line-height: 1.1; font-weight: bold;font-family: "Roboto Condensed",sans-serif;'
        
    },
    { // Right column 'Schlagzeilen'.
        selector: '.mod-top-list li.cf',
    },
    { // TODO: Not found in source.
        selector: '.mod-aside',
        type: 'big'
    }
]);

require("./run_blocker").run(blocker);

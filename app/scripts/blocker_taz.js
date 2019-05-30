/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for taz.de.
 * 
 * Original source code is from "AlkoholLiga" (https://github.com/AlkoholLiga)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/AlkoholLiga/afd-blocker-plugin/blob/master/app/scripts/blocker_faz.js
 * commit aa40a331ef5e2e1a66c1f057008ec68640e77fe1.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
    {
        selector: 'article.sectbody',
        type: 'big'
    },
    {
        selector: 'div.odd.sect.sect_description',
        type: 'big'
    },
    {
        selector: 'div.even.sect.sect_tags',
        type: 'small'
    },
    {
        selector: '.objlink.report.article',
        type: 'big'
    },
    {
        selector: '.objlink.subjective.commentary.article',
        type: 'small'
    },
    {
        selector: '.objlink.brief.legacy.article',
        type: 'big'
    },
]);

require("./run_blocker").run(blocker);

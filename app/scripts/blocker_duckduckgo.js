/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for duckduckgo.com.
 */
console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.module',
        type: 'small'
    },
    {
        selector: '.result',
        type: 'small'
    },
    {
        selector: '.results_links_deep',
        type: 'small'
    },

]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

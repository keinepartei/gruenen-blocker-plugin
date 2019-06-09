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
console.log("Call content blocker.");

import { Blocker } from "./blocker";

new Blocker([
    {
        selector: 'div.card',
    },
    {
        selector: 'article.card',
    },
    {
    	// TODO: Remove player of fix auto play.
        selector: 'div.player',
        type: 'big'
    },

]).run();

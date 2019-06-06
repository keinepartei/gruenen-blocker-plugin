/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for yandex.com.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

let blocker = new Blocker([
    {
        selector: 'div.organic',
        type: 'small'
    },
    {
    	// TODO: Fix image preview at the top of the page.
        selector: 'div.Composite',
        type: 'big'
    },
    {
        selector: 'div.related',
        type: 'small'
    },
    {
        selector: 'div.showcase__item_optimized_yes',
        type: 'small'
    },
]);

require("./run_blocker").run(blocker);

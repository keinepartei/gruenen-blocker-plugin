/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for youtube.com.
 * 
 * Original source code is from "smidiii" (https://github.com/smidiii) licensed
 * under its original license of Die Partei Die PARTEI
 * (https://github.com/dieparteidiepartei/afd-blocker-plugin/LICENSE commit
 * 0e45aed998a838eaee4f7dda5b2f73b0e03b89ff)
 * https://github.com/smidiii/afd-blocker-plugin/blob/master/app/scripts/blocker_youtube.js
 * commit 32eb7f0c9f66c8d2b472aeab5d7b12f9314ae784.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

new Blocker([
    {
        selector: 'ytd-video-renderer.style-scope',
        type: 'big'

    },
    {
        selector: 'ytd-grid-video-renderer.style-scope',
        type: 'big'

    },
    {
        selector: 'ytd-channel-renderer.style-scope',
        type: 'big'

    },
    {
        selector: 'ytd-comment-thread-renderer.style-scope',
        type: 'big'

    },
    {
        selector: 'ytd-compact-video-renderer.style-scope',

    },
]).run();

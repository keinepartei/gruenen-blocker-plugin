/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for welt.de.
 */
console.log("Call content blocker.");

import { Blocker } from "./blocker";

new Blocker([
    {
        selector: 'article.c-teaser-default--has-small-compact-view',
        type: 'big',
        align: 'top',
        imageHeight: '26%',
        title: 'color: rgb(36, 110, 167); font-size: 14px; line-height: normal; font-weight: 400; font-fmaily: ffmark, "Helvetica Neue", Helvetica, Arial, sans-serif',
        txt: 'color: #246ea7; font-size: 26px; line-height: 26px; font-weight: 800; font-family: ffmark,Helvetica Neue,Helvetica,Arial,sans-serif;',
    },
    {
        selector: 'article.o-teaser--has-full-width',
        type: 'big',
        align: 'left',
        imageWidth: '66%',
        title: 'color: rgb(36, 110, 167); font-size: 14px; line-height: normal; font-weight: 400; font-fmaily: ffmark, "Helvetica Neue", Helvetica, Arial, sans-serif',
        txt: 'color: #246ea7; font-size: 26px; line-height: 26px; font-weight: 800; font-family: ffmark,Helvetica Neue,Helvetica,Arial,sans-serif;',
    },
    // TODO: Center of the page 'Mediathek'
    // TODO: Bottom of the page 'Newsticker'
    {
        selector: 'li.jsx-search-result__item',
        type: 'small'
    }
]).run();

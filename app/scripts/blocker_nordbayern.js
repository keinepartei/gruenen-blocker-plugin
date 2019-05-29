/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Content blocker template for nordbayern.de.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_nordbayern.js
 * commit f7f1dfd7077251363476fe3d118aaf8dfe31b818.
 */
/**
 * Author: Florian Drechsler,
 * 
 * @fdrechsler
 * 
 * nordbayern.de
 * 
 * Online Plattform von: - Nürnberger Nachrichten - NZ Nürnberger Zeitung -
 * Erlanger Nachrichten - Fürther Nachrichten - Neumarkter nachrichten ....
 */

console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([
    {
        selector: '.search-item',
        type: 'small'
    },
    {
        selector: '.topmodulXXL',
        type: 'big'
    },
    {
        selector: '.xxxlItem1',
        type: 'small'
    },
    {
        selector: '.xxxlItem2',
        type: 'small'
    },
    {
        selector: '.xxxlItem3',
        type: 'small'
    },
    {
        selector: '.hp-kommentare',
        type: 'small'
    },
    {
        selector: '.mediabox',
        type: 'small'
    },
    {
        selector: '.article-content',
        type: 'big'
    },
    {
        selector: '.contentModul',
        type: 'big'
    },
    {
        selector: 'section',
        type: 'big'
    }
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

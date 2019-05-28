console.log("#### NO PARTY CONTENT-BLOCKER ####");

import { Blocker } from "./blocker_general";

let blocker = new Blocker([ 
    {
        selector: 'div.hentry.landscape',
        type: 'small'
    },
    {
        selector: 'div.hentry',
        type: 'big'
    },
    {
        selector: '.videoCube',
        type: 'big'
    },
    {
        selector: 'article',
        type: 'big'
    },
    {
        selector: 'div.misc',
        type: 'big'
    },
    {
        selector: 'ul.lead',
        type: 'big'
    },
]);

blocker.modifyContent([document]);
blocker.watchPageForMutations();

/**
 * BILD.de uses teaser images (sometimes without alt attributes). So we try to
 * find teasers by its article URI
 */
console.log("#### NO PARTY CONTENT-BLOCKER FOR URL PARTS TODO: Check. ####");
[
    "//a[contains(@href,'-gruene-')]",
    "//a[contains(@href,'/gruene-')]",
    "//a[contains(@href,'-gruene.')]"
].forEach(function(xpathExpression) {
    let teaserLinkBlocker = new Blocker([ 
        {
            selector: 'div.hentry',
            type: 'big'
        }
    ], xpathExpression);

    teaserLinkBlocker.modifyContent([document]);
});



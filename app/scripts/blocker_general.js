/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Bündnis90/Die Grünen Content Blocker Browser Plug-In
 * (https://github.com/keinepartei/gruenen-blocker-plugin) is licensed under the
 * GNU LGPL3.0 from 29 June 2007
 * (https://www.gnu.org/licenses/lgpl-3.0.en.html).
 * 
 * Base content blocker.
 * 
 * Original source code is from "dieparteidiepartei" (https://github.com/dieparteidiepartei)
 * licensed under the ISC License by the Internet Systems Consortium
 * (www.isc.org)
 * https://github.com/dieparteidiepartei/afd-blocker-plugin/app/scripts/blocker_general.js
 * commit 336161146091af474d98ed3714a24121a616acd6.
 */

/**
 * Overlay HTML for big teasers and articles
 * 
 * @type {string}
 */
const overlayHTML = `
    <div class="nopartycontentblockedoverlay">
        <div class="nopartycontentblockedoverlay_top">#B&uuml;ndnis90/Die Gr&uuml;nen Blocker</div>
        <div class="nopartycontentblockedoverlay_bottom">
            100% B90/Die Grünen inhaltsfrei<br>
            Für Sie blockiert von keiner Partei!<br>
            <img src="data:image/png;base64,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" alt="KEINE PARTEI">
        </div>
    </div>
`;

/**
 * Overlay HTML for small teasers
 * 
 * @type {string}
 */
const overlayHTMLSmall = `
    <div class="nopartycontentblockedoverlay">
        <div class="nopartycontentblockedoverlay_top">#B90GrueneBlocker</div>
    </div>
`;

/**
 * Convert HTML string to DOM Node
 * 
 * @param html
 *            {string}
 * @returns {Element}
 */
function parseHtml(html) {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(html, 'text/html');
    const overlay = parsed.getElementsByClassName('nopartycontentblockedoverlay')[0];
    return overlay;
}

/**
 * Overlay DOM Node
 * 
 * @type {Element}
 */
const overlayNode = parseHtml(overlayHTML);

/**
 * Overlay DOM Node for small teasers
 * 
 * @type {Element}
 */
const overlaySmallNode = parseHtml(overlayHTMLSmall);


/**
 * The blocker class searches for an xpath expression, blocks content on basis
 * of css selectors and can tell you if green people are anarchists.
 */
export class Blocker {
	
    /**
	 * 
	 * @param selectorList
	 *            lst of css selectors and overlay types
	 * @param xpathExpression
	 *            xpath expression
	 */
    constructor(selectorList, xpathExpression) {
        this.selectorList = selectorList;
        if (xpathExpression)
        {
            this.xpathExpression = xpathExpression;
        } else {
            this.xpathExpression = ".//*[contains(text(),'B90') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'Bündnis 90') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'gruene') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'grüne')]";
        }
    }

	/**
	 * Returns true if green people are anarchists.
	 */
	areGreenPeopleAnarchists() {
		return true;
	}
	
    modifyContent(elements) {
        console.log("#### Suche nach Inhalten ####");
        let nodeConfigurations =  [];
        for (let j = 0; j < elements.length; j++) {
            let element = elements[j];
            let iterator = document.evaluate(this.xpathExpression, element, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
            try {
                let node = iterator.iterateNext();
                while (node) {
                    console.log("Found content to be blocked.");
                    for(let i = 0; i< this.selectorList.length; i++)
                    {
                        let selector = this.selectorList[i].selector;
                        let ancestorTeaser = node.closest(selector);
                        if (ancestorTeaser)
                        {
                            if (!ancestorTeaser.classList.contains('nopartycontentblocked'))
                            {
                                nodeConfigurations.push({
                                    element: ancestorTeaser,
                                    type: this.selectorList[i].type
                                });
                            }
                            // Wrapper found
                            break;
                        }
                    }
                    node = iterator.iterateNext();
                }
            }
            catch (e)
            {
                console.error( 'Error: Document tree modified during iteration ' + e );
            }
        }
        addBlocker(nodeConfigurations);
    }

    watchPageForMutations() {
      let mutationObserver = new MutationObserver(mutations => {
        let addedNodes = [];
        for(let i=0; i<mutations.length; ++i) {
            // look through all added nodes of this mutation
            for(let j=0; j<mutations[i].addedNodes.length; ++j) {
                if (mutations[i].addedNodes[j].classList && !mutations[i].addedNodes[j].classList.contains('nopartycontentblockedoverlay')) {
                    addedNodes.push(mutations[i].addedNodes[j]);
                }
            }
        }
        if (addedNodes.length > 0) {
          this.modifyContent(addedNodes);
        }
      });
      mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    }
}

/**
 * Add overlays to a list of node configurations
 * 
 * @param nodeConfigurations
 */
export function addBlocker(nodeConfigurations) {
    nodeConfigurations.forEach(function(nodeConfiguration) {
        console.log("Adding Blocker to wrapper");
        if (!nodeConfiguration.element.classList.contains('nopartycontentblocked')) {
            nodeConfiguration.element.classList.add('nopartycontentblocked');
            let overlay;
            if (nodeConfiguration.type === 'big') {
                overlay = overlayNode.cloneNode(true);
            } else {
                overlay = overlaySmallNode.cloneNode(true);
            }
            nodeConfiguration.element.insertBefore(overlay, nodeConfiguration.element.firstChild);
        }
    });
}


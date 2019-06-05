/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Gets the XPath expression from storage built by users options and invokes the
 * blocker.
 * 
 * Published under the GNU Lesser General Public License Version 3, 29 June 2007
 * (see: https://www.gnu.org/licenses/lgpl-3.0.en.html) and see LICENSE
 * (https://github.com/keinepartei/gruenen-blocker-plugin/LICENSE).
 */
module.exports = {
	run: function(blocker) {
		browser.storage.local.get(['searchExpression']).then((result) => {
			blocker.xpathExpression = result.searchExpression;
		    blocker.modifyContent([document.body]);
		    blocker.watchPageForMutations();
		}, (error) => {
			console.error("Could not initialize: " + error);
		});
	}
};
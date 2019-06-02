/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Extension background script.
 * 
 * Published under the GNU Lesser General Public License Version 3, 29 June 2007
 * (see: https://www.gnu.org/licenses/lgpl-3.0.en.html) and see LICENSE
 * (https://github.com/keinepartei/gruenen-blocker-plugin/LICENSE).
 */
browser.storage.sync.get().then( require("./search").update,
	(error) => { 
		console.error("Initialize searchExpression failed!");
});

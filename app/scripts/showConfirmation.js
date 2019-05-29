/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Shows a modal confirmation dialog for sites overlayed (almost) entirely, so
 * that obligatory information of the side provider like imprint, data
 * protection and liability may be not visible.
 * 
 * Published under the GNU Lesser General Public License Version 3, 29 June 2007
 * (see: https://www.gnu.org/licenses/lgpl-3.0.en.html) and see LICENSE
 * (https://github.com/keinepartei/gruenen-blocker-plugin/LICENSE).
 */
var r = confirm(browser.i18n.getMessage("showConfirmation"));
if (r == true) {
} else {
	window.location.href = 'https:///duckduckgo.com';
}
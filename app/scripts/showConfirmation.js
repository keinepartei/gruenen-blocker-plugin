/**
 * Copyright (c) 2019, 'kagal' von Keine PARTEI.
 * 
 * Published under the GNU Lesser General Public License Version 3, 29 June 2007
 * (see: https://www.gnu.org/licenses/lgpl-3.0.en.html).
 */
var r = confirm(browser.i18n.getMessage("showConfirmation"));
if (r == true) {
} else {
	window.location.href = 'https:///duckduckgo.com';
}
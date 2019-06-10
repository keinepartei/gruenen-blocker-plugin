/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Popup dialog functionality.
 * 
 * Published under the GNU Lesser General Public License Version 3, 29 June 2007
 * (see: https://www.gnu.org/licenses/lgpl-3.0.en.html) and see LICENSE
 * (https://github.com/keinepartei/gruenen-blocker-plugin/LICENSE).
 */

/**
 * Array of I18M labels to update after loading page (I18N key MUST be the same
 * as the DOM element ID).
 */
const labels = [
	"appName",
	"popupDisableFilterName"
];

/**
 * Stores all options.
 * 
 * @param e
 *            the event.
 * @returns null.
 */
function storeOptions(e) {
	console.log("Store options: " + e);
	let properties = {
		filter : !document.getElementById('filter').checked
	};
	browser.storage.local.set(properties).then((r) => {
		console.log("Stored user options: " + JSON.stringify(properties));
	});
	e.preventDefault();
}

/**
 * Restores the popup options.
 * 
 * @returns null.
 */
function restoreOptions() {
	console.log("Restore popup: ");
	// Load properties and populate control elements.
	let properties = browser.storage.local.get();
	properties.then(setValues, (r) => { 
		console.error("Could not restore options: " + r);
	});
}

/**
 * Populates the control elements with the user properties.
 * 
 * @param properties
 *            the user properties (storage).
 * @returns null.
 */
function setValues(properties) {
	console.log("Load popup: " + JSON.stringify(properties));
	document.getElementById('filter').checked = !(properties.filter === undefined || properties.filter);
}

/**
 * Populates a fields label (or elements.innerHTML) with the I18N message.
 * 
 * @param id
 *            the DOM element ID (= I18N language key) of the fields label.
 * @returns null.
 */
function updateLabel(id) {
	var label = browser.i18n.getMessage(id);
	var node = document.getElementById(id);
	console.log("Update label: " + node + ": " + label);
	while (node.hasChildNodes()) {
	    node.removeChild(node.firstChild);
	}
	document.getElementById(id).append(label);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.addEventListener('DOMContentLoaded', function() { 
	labels.forEach(updateLabel);
});

document.getElementById('filter').addEventListener('change', storeOptions);
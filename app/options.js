/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Option dialog functionality.
 * 
 * Published under the GNU Lesser General Public License Version 3, 29 June 2007
 * (see: https://www.gnu.org/licenses/lgpl-3.0.en.html) and see LICENSE
 * (https://github.com/keinepartei/gruenen-blocker-plugin/LICENSE).
 */

/**
 * Stores all options.
 * 
 * @param e
 *            the event.
 * @returns null.
 */
function storeOptions(e) {
	console.log("Store options: " + e);
	browser.storage.sync.set({
		block_ALL_GREENS : document.getElementById('block_ALL_GREENS').checked,
		block_TRUMP : document.getElementById('block_TRUMP').checked,
		block_DE_SPD : document.getElementById('block_DE_SPD').checked,
		block_DE_DIE_LINKE : document.getElementById('block_DE_DIE_LINKE').checked,
		block_DE_FDP : document.getElementById('block_DE_FDP').checked,
		block_DE_CDU : document.getElementById('block_DE_CDU').checked,
		block_DE_CSU : document.getElementById('block_DE_CSU').checked,
		block_DE_DIE_PARTEI : document.getElementById('block_DE_DIE_PARTEI').checked,
	});
	e.preventDefault();
	var status = document.getElementById('stored');
	status.textContent = 'Options stored.';
	setTimeout(function() {
		status.textContent = "";
	}, 1000);
}

/**
 * Restores the options.
 * 
 * @returns null.
 */
function restoreOptions() {
	console.log("Restore options: ");
	// Load properties and populate control elements.
	let properties = browser.storage.sync.get();
	properties.then(setValues, (result) => { 
		console.error("Could not restore options: " + result);
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
	console.log("Load options: " + JSON.stringify(properties));
	document.getElementById('block_ALL_GREENS').checked = properties.block_ALL_GREENS;
	document.getElementById('block_TRUMP').checked = properties.block_TRUMP;
	document.getElementById('block_DE_SPD').checked = properties.block_DE_SPD;
	document.getElementById('block_DE_DIE_LINKE').checked = properties.block_DE_DIE_LINKE;
	document.getElementById('block_DE_CDU').checked = properties.block_DE_CDU;
	document.getElementById('block_DE_CSU').checked = properties.block_DE_CSU;
	document.getElementById('block_DE_FDP').checked = properties.block_DE_FDP;
	document.getElementById('block_DE_DIE_PARTEI').checked = properties.block_DE_DIE_PARTEI;
	// AfD blocker functionality is not implemented.
}

/**
 * Populates the fields labels with the I18N messages.
 * 
 * @returns null.
 */
function setLabels() {
	updateLabel("blockAllGreensName", "blockAllGreensName");
	updateLabel("blockTrumpName", "blockTrumpName");
	updateLabel("blockDeGrueneName", "blockDeGrueneName");
	updateLabel("blockDeSpdName", "blockDeSpdName");
	updateLabel("blockDeDieLinkeName", "blockDeDieLinkeName");
	updateLabel("blockDeCduName", "blockDeCduName");
	updateLabel("blockDeCsuName", "blockDeCsuName");
	updateLabel("blockDeFdpName", "blockDeFdpName");
	updateLabel("blockDeDieParteiName", "blockDeDieParteiName");
	updateLabel("blockDeAfDName", "blockDeAfDName");
	updateLabel("blockDeAfDNotice", "blockDeAfDNotice");
	updateLabel("optionsTitle", "optionsTitle");
	updateLabel("optionsHeader", "optionsHeader");
	updateLabel("quickAccessName", "quickAccessName");
	updateLabel("accessByCountryName", "accessByCountryName");
	updateLabel("countryDeName", "countryDeName");
}

/**
 * Populates a fields label (or elements.innerHTML) with the I18N message.
 * 
 * @param key
 *            the I18N language key.
 * @param id
 *            the DOM element ID of the fields label.
 * @returns null.
 */
function updateLabel(key, id) {
	console.log("Set label: " + key + " - " + id);
	document.getElementById(id).innerHTML = browser.i18n.getMessage(key);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.addEventListener('DOMContentLoaded', setLabels);
document.getElementById('store').addEventListener('click', storeOptions);
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
 * Array of I18M labels to update after loading page (I18N key MUST be the same
 * as the DOM element ID).
 */
const labels = [ 
	"optionsOverlayFileredContentName",
	"optionsHideFileredContentName",
	"optionsOverlayBackgroundName",
	"blockAllGreensName", 
	"blockGretaThunbergName",
	"blockMerkelName",
	"blockTrumpName",
	"blockDeGrueneName",
	"blockDeSpdName",
	"blockDeDieLinkeName",
	"blockDeCduName",
	"blockDeCsuName",
	"blockDeFdpName",
	"blockDeDieParteiName",
	"blockDeAfDName",
	"blockDeAfDNotice",
	"optionsTitle",
	"optionsHeader",
	"quickAccessName",
	"accessByCountryName",
	"countryDeName" 
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
	
	const blob = document.getElementById('overlay_background').files[0];
	if (blob) {
		var reader = new FileReader();
		 reader.readAsDataURL(blob); 
		 reader.onloadend = function() {
		     base64data = reader.result;
		     console.log(base64data);
		     browser.storage.local.set({
		    	 "overlay_background" : base64data,
		     }).then( (result) => {
		    	 console.log("Stored background image: ")
		 	});
		     
		 }
	}
	
	let overlay_mode = 0;
	if (document.getElementById('hide_filtered_content').checked) {
		overlay_mode = 1;
	}
	let properties = {
		overlay_mode : overlay_mode,  	
		block_ALL_GREENS : document.getElementById('block_ALL_GREENS').checked,
		block_GRETA_THUNBERG : document.getElementById('block_GRETA_THUNBERG').checked,
		block_MERKEL : document.getElementById('block_MERKEL').checked,
		block_TRUMP : document.getElementById('block_TRUMP').checked,
		block_DE_SPD : document.getElementById('block_DE_SPD').checked,
		block_DE_DIE_LINKE : document.getElementById('block_DE_DIE_LINKE').checked,
		block_DE_FDP : document.getElementById('block_DE_FDP').checked,
		block_DE_CDU : document.getElementById('block_DE_CDU').checked,
		block_DE_CSU : document.getElementById('block_DE_CSU').checked,
		block_DE_DIE_PARTEI : document.getElementById('block_DE_DIE_PARTEI').checked,
	};
	browser.storage.local.set(properties).then( (result) => {
		require("./search").update(properties);
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
	let properties = browser.storage.local.get();
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
	if (properties.overlay_mode == 1) {
		document.getElementById('hide_filtered_content').checked = true;
	} else {
		document.getElementById('overlay_filtered_content').checked = true;
	}
	document.getElementById('block_ALL_GREENS').checked = properties.block_ALL_GREENS;
	document.getElementById('block_GRETA_THUNBERG').checked = properties.block_GRETA_THUNBERG;
	document.getElementById('block_MERKEL').checked = properties.block_MERKEL;
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

function updateNode(id, nodeId) {
	var label = browser.i18n.getMessage(id);
	var node = document.getElementById(nodeId);
	console.log("Update label: " + node + ": " + label);
	while (node.hasChildNodes()) {
	    node.removeChild(node.firstChild);
	}
	document.getElementById(nodeId).append(label);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.addEventListener('DOMContentLoaded', function() { 
	labels.forEach(updateLabel);
	updateNode("optionsTabGeneralName", "nav-general-tab");
	updateNode("optionsTabAppearanceName", "nav-appearance-tab");
	updateNode("optionsTabContentFilterName", "nav-content-filter-tab");
});
document.getElementById('store').addEventListener('click', storeOptions);
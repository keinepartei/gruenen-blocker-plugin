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
	"optionsEnableFilterName",
	"optionsOverlayFileredContentName",
	"optionsHideFileredContentName",
	"optionsOverlayBackgroundName",
	"blockAllGreensName", 
	"blockGretaThunbergName",
	"blockMerkelName",
	"blockErdoganName",
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
	"blockFrRemName",
	"blockFrLrName",
	"blockFrFiName",
	"blockFrPsName",
	"blockFrEelvName",
	"blockEsPsoeName",
	"blockEsPpName",
	"blockEsCiudadanosName",
	"blockEsUpdName",
	"blockEsVoxName",
	"blockTrAkpName",
	"blockTrChpName",
	"blockTrHdpName",
	"blockTrMhpName",
	"blockTrIyiName",
	"quickAccessName",
	"accessByCountryName",
	"countryDeName",
	"countryFrName",
	"countryEsName",
	"countryTrName"
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
		filter : document.getElementById('filter').checked,
		block_ALL_GREENS : document.getElementById('block_ALL_GREENS').checked,
		block_GRETA_THUNBERG : document.getElementById('block_GRETA_THUNBERG').checked,
		block_MERKEL : document.getElementById('block_MERKEL').checked,
		block_ERDOGAN : document.getElementById('block_ERDOGAN').checked,
		block_TRUMP : document.getElementById('block_TRUMP').checked,
		block_DE_SPD : document.getElementById('block_DE_SPD').checked,
		block_DE_DIE_LINKE : document.getElementById('block_DE_DIE_LINKE').checked,
		block_DE_FDP : document.getElementById('block_DE_FDP').checked,
		block_DE_CDU : document.getElementById('block_DE_CDU').checked,
		block_DE_CSU : document.getElementById('block_DE_CSU').checked,
		block_DE_DIE_PARTEI : document.getElementById('block_DE_DIE_PARTEI').checked,
		block_FR_REM : document.getElementById('block_FR_REM').checked,
		block_FR_LR : document.getElementById('block_FR_LR').checked,
		block_FR_FI : document.getElementById('block_FR_FI').checked,
		block_FR_PS : document.getElementById('block_FR_PS').checked,
		block_FR_EELV : document.getElementById('block_FR_EELV').checked,
		block_ES_PSOE : document.getElementById('block_ES_PSOE').checked,
		block_ES_PP : document.getElementById('block_ES_PP').checked,
		block_ES_PC : document.getElementById('block_ES_PC').checked,
		block_ES_UP : document.getElementById('block_ES_UP').checked,
		block_ES_VOX : document.getElementById('block_ES_VOX').checked,
		block_TR_AKP : document.getElementById('block_TR_AKP').checked,
		block_TR_CHP : document.getElementById('block_TR_CHP').checked,
		block_TR_HDP : document.getElementById('block_TR_HDP').checked,
		block_TR_MHP : document.getElementById('block_TR_MHP').checked,
		block_TR_IYI : document.getElementById('block_TR_IYI').checked,
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
	document.getElementById('filter').checked = properties.filter === undefined || properties.filter;
	if (properties.overlay_mode == 1) {
		document.getElementById('hide_filtered_content').checked = true;
	} else {
		document.getElementById('overlay_filtered_content').checked = true;
	}
	document.getElementById('block_ALL_GREENS').checked = properties.block_ALL_GREENS;
	document.getElementById('block_GRETA_THUNBERG').checked = properties.block_GRETA_THUNBERG;
	document.getElementById('block_MERKEL').checked = properties.block_MERKEL;
	document.getElementById('block_ERDOGAN').checked = properties.block_ERDOGAN;
	document.getElementById('block_TRUMP').checked = properties.block_TRUMP;
	document.getElementById('block_DE_SPD').checked = properties.block_DE_SPD;
	document.getElementById('block_DE_DIE_LINKE').checked = properties.block_DE_DIE_LINKE;
	document.getElementById('block_DE_CDU').checked = properties.block_DE_CDU;
	document.getElementById('block_DE_CSU').checked = properties.block_DE_CSU;
	document.getElementById('block_DE_FDP').checked = properties.block_DE_FDP;
	document.getElementById('block_DE_DIE_PARTEI').checked = properties.block_DE_DIE_PARTEI;
	// AfD blocker functionality is not implemented.
	document.getElementById('block_FR_REM').checked = properties.block_FR_REM;
	document.getElementById('block_FR_LR').checked = properties.block_FR_LR;
	document.getElementById('block_FR_FI').checked = properties.block_FR_FI;
	document.getElementById('block_FR_PS').checked = properties.block_FR_PS;
	document.getElementById('block_FR_EELV').checked = properties.block_FR_EELV;
	document.getElementById('block_ES_PSOE').checked = properties.block_ES_PSOE;
	document.getElementById('block_ES_PP').checked = properties.block_ES_PP;
	document.getElementById('block_ES_PC').checked = properties.block_ES_PC;
	document.getElementById('block_ES_UP').checked = properties.block_ES_UP;
	document.getElementById('block_ES_VOX').checked = properties.block_ES_VOX;
	document.getElementById('block_TR_AKP').checked = properties.block_TR_AKP;
	document.getElementById('block_TR_CHP').checked = properties.block_TR_CHP;
	document.getElementById('block_TR_HDP').checked = properties.block_TR_HDP;
	document.getElementById('block_TR_MHP').checked = properties.block_TR_MHP;
	document.getElementById('block_TR_IYI').checked = properties.block_TR_IYI;
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
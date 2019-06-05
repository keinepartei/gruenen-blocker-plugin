/**
 * Copyright (c) 2019, kagal "keinepartei" (https://github.com/keinepartei).
 * 
 * Builds the XPath search expression and stores it.
 * 
 * Published under the GNU Lesser General Public License Version 3, 29 June 2007
 * (see: https://www.gnu.org/licenses/lgpl-3.0.en.html) and see LICENSE
 * (https://github.com/keinepartei/gruenen-blocker-plugin/LICENSE).
 */
module.exports = {
	update: function(properties) {
		console.log("Try to update search expression.");
		let s = ".//*[contains(.,'B90')";
		s += lowerCase('bündnis 90');
		s += lowerCase('b&uuml;ndnis 90');
		s += lowerCase('grüne');
		s += lowerCase('gr&uuml;ne');
		if (properties.block_TRUMP) {
			s += " or contains(.,'POTUS')";
			s += lowerCase('trump');
			console.log("Block Trump!");
		}
		if (properties.block_GRETA_THUNBERG) {
			s += " or contains(.,'Greta T.')";
			s += lowerCase('greta thunberg');
			console.log("Block Greta Thunberg!");
		}
		if (properties.block_MERKEL) {
			s += lowerCase('merkel');
			console.log("Block Angela Merkel!");
		}
		if (properties.block_DE_SPD) {
			s += " or contains(.,'SPD')";
			s += lowerCase('sozialdemokr');
			console.log("Block SPD contents as well.");
		}
		if (properties.block_DE_DIE_LINKE) {
			s += " or contains(.,'PDS') or contains(.,'SED') ";
			s += lowerCase('die linke');
			s += lowerCase('linke partei');
			console.log("Block Die Linke contents as well.");
		}
		if (properties.block_DE_FDP) {
			s += " or contains(.,'FDP')";
			console.log("Block FDP contents as well.");
		}
		if (properties.block_DE_CDU) {
			s += " or contains(.,'CDU')";
			s += lowerCase('christlich demokratische union');
			console.log("Block CDU contents as well.");
		}
		if (properties.block_DE_CSU) {
			s += " or contains(.,'CSU')";
			s += lowerCase('christlich soziale union');
			console.log("Block CSU contents as well.");
		}
		if (properties.block_DE_DIE_PARTEI) {
			s += lowerCase('die partei'); // Zwinkersmiley
			console.log("Block Die PARTEI contents as well.");
		}
		s += "]";
		browser.storage.local.set({
			searchExpression : s
		}).then((result) => {
			console.log("Updated searchExpression: '" + s + "'.");
		}, (error) => {
			console.error("Update searchExpression failed: '" + s + "'.");
		});
	}
};

function lowerCase(string) {
	return  " or contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ', 'abcdefghijklmnopqrstuvwxyzäöü'),'" + string + "')";
}
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
		let prefix = ".//*[contains(text(),'B90') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'Bündnis 90') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'gruene') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'grüne')";
		let postfix = "]";
		let s = prefix;
		if (properties.block_TRUMP) {
			s += " or contains(text(),'POTUS') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'trump')";
			console.log("Block Trump!");
		}
		if (properties.block_GRETA_THUNBERG) {
			s += " or contains(text(),'Greta T.') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'greta thunberg')";
			console.log("Block Greta Thunberg!");
		}
		if (properties.block_MERKEL) {
			s += " or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'merkel')";
			console.log("Block Angela Merkel!");
		}
		if (properties.block_DE_SPD) {
			s += " or contains(text(),'SPD') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'sozialdemokr')";
			console.log("Block SPD contents as well.");
		}
		if (properties.block_DE_DIE_LINKE) {
			s += " or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'die linke')";
			s += " or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'linke partei')";
			s += " or contains(text(),'PDS') or contains(text(),'SED') ";
			console.log("Block Die Linke contents as well.");
		}
		if (properties.block_DE_FDP) {
			s += " or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'fdp')";
			console.log("Block FDP contents as well.");
		}
		if (properties.block_DE_CDU) {
			s += " or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'cdu')";
			s += " or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'christlich demokratische union')";
			console.log("Block CDU contents as well.");
		}
		if (properties.block_DE_CSU) {
			s += " or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'csu')";
			s += " or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'christlich soziale union')";
			console.log("Block CSU contents as well.");
		}
		if (properties.block_DE_DIE_PARTEI) {
			s += " or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'die partei')"; // Zwinkersmiley
			console.log("Block Die PARTEI contents as well.");
		}
		s += postfix;
		browser.storage.local.set({
			searchExpression : s
		}).then((result) => {
			console.log("Updated searchExpression: '" + s + "'.");
		}, (error) => {
			console.error("Update searchExpression failed: '" + s + "'.");
		});
	}
};
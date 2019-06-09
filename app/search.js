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
		if (properties.block_GRETA_THUNBERG) {
			s += match([ 'Greta T.' ]);
			s += lowerCase('greta thunberg');
			console.log("Block Greta Thunberg!");
		}
		if (properties.block_MERKEL) {
			s += lowerCase('merkel');
			console.log("Block Angela Merkel!");
		}
		if (properties.block_ERDOGAN) {
			s += lowerCase('erdogan');
			s += lowerCase('erdoğan');
			s += lowerCase('recep tayyip erdo');
			console.log("Block Erdoğan!");
		}
		if (properties.block_TRUMP) {
			s += match([ 'POTUS' ]);
			s += lowerCase('trump');
			console.log("Block Trump!");
		}
		if (properties.block_DE_SPD) {
			s += match([ 'SPD' ]);
			s += lowerCase('sozialdemokr');
			console.log("Block SPD contents as well.");
		}
		if (properties.block_DE_DIE_LINKE) {
			s += match([ 'PDS', 'SED' ]);
			s += lowerCase('die linke');
			s += lowerCase('linke partei');
			console.log("Block Die Linke contents as well.");
		}
		if (properties.block_DE_FDP) {
			s += match([ 'FDP' ]);
			console.log("Block FDP contents as well.");
		}
		if (properties.block_DE_CDU) {
			s += match([ 'CDU' ]);
			s += lowerCase('christlich demokratische union');
			console.log("Block CDU contents as well.");
		}
		if (properties.block_DE_CSU) {
			s += match([ 'CSU' ]);
			s += lowerCase('christlich soziale union');
			console.log("Block CSU contents as well.");
		}
		if (properties.block_DE_DIE_PARTEI) {
			s += lowerCase('die partei'); // Zwinkersmiley
			console.log("Block Die PARTEI contents as well.");
		}
		if (properties.block_ES_PSOE) {
			s += match([ 'PSOE' ]);
			s += lowerCase('partido socialista obrero español');
			console.log("Block PSOE contents as well.");
		}
		if (properties.block_ES_PP) {
			s += match([ 'PP' ]);
			s += lowerCase('partido popular');
			console.log("Block PP contents as well.");
		}
		if (properties.block_ES_PC) {
			s += lowerCase('ciudadanos');
			s += lowerCase('partido de la ciudadanía');
			console.log("Block Cuidadanos contents as well.");
		}
		if (properties.block_ES_UP) {
			s += lowerCase('unidos podemos');
			s += lowerCase('unidas podemos');
			console.log("Block Podemos contents as well.");
		}
		if (properties.block_TR_AKP) {
			s += match([ 'AKP', 'AK Parti' ]);
			console.log("Block AKP contents as well.");
		}
		if (properties.block_TR_CHP) {
			s += match([ 'CHP' ]);
			console.log("Block CHP contents as well.");
		}
		if (properties.block_TR_HDP) {
			s += match([ 'HDP' ]);
			console.log("Block HDP contents as well.");
		}
		if (properties.block_TR_MHP) {
			s += match([ 'MHP' ]);
			console.log("Block MHP contents as well.");
		}
		if (properties.block_TR_IYI) {
			s += match([ 'IYI', 'İYİ Parti' ]);
			console.log("Block İYİ Parti contents as well.");
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
	return  " or contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜĞÑ', 'abcdefghijklmnopqrstuvwxyzäöüğñ'),'" + string + "')";
}

function match(strings) {
	let r = "";
	strings.forEach(function(s) {
		r += " or contains(.,'" + s + "')";
	});
	return r;
}
/**
 * 
 */
module.exports = {
	run: function(blocker) {
		browser.storage.sync.get(['searchExpression']).then((result) => {
			blocker.xpathExpression = result.searchExpression;
		    blocker.modifyContent([document]);
		    blocker.watchPageForMutations();
		}, (error) => {
			console.error("Could not initialize: " + error);
		});
	}
};
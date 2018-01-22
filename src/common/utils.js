module.exports = {
	iff(condition, trueRet, falseRet) {
		if (condition === true) {
			if (typeof trueRet === "function") {
				return trueRet();
			}
			return trueRet;
		} else {
			if (typeof falseRet === "function") {
				return falseRet();
			}
			return falseRet;
		}
	},
	getPromiseForObject(obj) {
		return new Promise(function (resolve, reject) {
			resolve(obj);
		});
	}
};
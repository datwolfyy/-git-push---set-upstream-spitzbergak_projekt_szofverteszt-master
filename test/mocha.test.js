const assert = require("assert");
const { kep_leker, select_szovegek } = require("../js/func");

describe("Spitzbergák", function () {
	it("select alaphelyzetben van?", function () {
		let kepek = kep_leker();
		kepek.forEach((kep) => {
			assert.notEqual(kep, "");
		});
	});
});
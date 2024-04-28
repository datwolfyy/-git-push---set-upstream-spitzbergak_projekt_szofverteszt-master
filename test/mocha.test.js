const assert = require("assert");
const { kep_leker, allat_szoveg } = require("../js/func");
const config = require("../js/config");

describe("Spitzbergák", function () {
	it("config van?", function () {
		assert.notEqual(config.config.UNSPLASH_ACCESS_KEY, "");
	});
	it("3 képet kér le?", async function () {
		let t = await kep_leker(3);
		assert.equal(t.length, 3);
	});
	it("jpg formátumú képek jönnek?", async function () {
		let t = await kep_leker(3);
		t.forEach((kep) => {
			assert.equal(kep.includes("fm=jpg"), true);
		});
	});
	it("rossz állatra nem ad vissza szöveget?", function () {
		assert.equal(allat_szoveg("gorilla"), "");
	});
});
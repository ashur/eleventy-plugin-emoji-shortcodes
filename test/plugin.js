/* global describe it */
const {assert} = require("chai");
const {transform} = require("../src/plugin");

describe(".transform()", () =>
{
	it("should not transform strings without emoji shortcodes", async () =>
	{
		const string = "Congratulations!";
		const expected = "Congratulations!";
		const actual = await transform(string);

		assert.equal( actual, expected );
	});

	it("should transform all emoji shortcodes found in a string", async () =>
	{
		const string = "Congratulations! :tada: :balloon:";
		const expected = "Congratulations! <span aria-label=\"tada\" role=\"img\">🎉</span> <span aria-label=\"balloon\" role=\"img\">🎈</span>";
		const actual = await transform(string);

		assert.equal( actual, expected );
	});

	it("should transform unspaced emoji", async () =>
	{
		const string = "Congratulations! :tada::balloon:";
		const expected = "Congratulations! <span aria-label=\"tada\" role=\"img\">🎉</span><span aria-label=\"balloon\" role=\"img\">🎈</span>";
		const actual = await transform(string);

		assert.equal( actual, expected );
	});

	it("should not transform shortcodes without emoji match", async () =>
	{
		const string = "Congratulations! :undefined_shortcode:";
		const expected = "Congratulations! :undefined_shortcode:";
		const actual = await transform(string);

		assert.equal( actual, expected );
	});

	it("should set class name if class option is defined", async () =>
	{
		const string = "Congratulations! :tada:";
		const expected = "Congratulations! <span aria-label=\"tada\" role=\"img\" class=\"emoji\">🎉</span>";
		const actual = await transform( string, {class: "emoji"} );

		assert.equal( actual, expected );
	});
});

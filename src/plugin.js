/**
 * @async
 * @param {string} string
 * @param {string} [className] - optional class(es) to set on the resulting element
 * @return {Promise<string>}
 */
module.exports.transform = async (string, className) =>
{
	const gemoji = await import("gemoji");

	return string.replace( /:([a-z_]+):/g, (match, $1) =>
	{
		const attrs = [
			`aria-label="${$1}"`,
			"role=\"img\"",
		];

		if( className )
		{
			attrs.push( `class="${className}"` );
		}

		return `<span ${attrs.join(" ")}>${gemoji.nameToEmoji[$1]}</span>`
	});
};

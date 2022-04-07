/**
 * @async
 * @param {string} string
 * @param {Object} [options]
 * @param {string} [options.class] - optional class(es) to set on the resulting element
 * @return {Promise<string>}
 */
module.exports.transform = async (string, options = {}) =>
{
	const gemoji = await import("gemoji");

	return string.replace( /:([a-z_]+):/g, (match, $1) =>
	{
		if( !gemoji.nameToEmoji[$1] )
		{
			return match;
		}

		const attrs = [
			`aria-label="${$1}"`,
			"role=\"img\"",
		];

		if( options.class )
		{
			attrs.push( `class="${options.class}"` );
		}

		return `<span ${attrs.join(" ")}>${gemoji.nameToEmoji[$1]}</span>`
	});
};

const {transform} = require("./src/plugin");

/**
 * @param {Object} pluginOptions
 * @param {string} [pluginOptions.className] - optional class(es) to set on the resulting element
 */
module.exports = (eleventyConfig, pluginOptions = {}) =>
{
	eleventyConfig.addTransform( "emojiShortcodes", async function( content )
	{
		if( this.outputPath && this.outputPath.endsWith( ".html" ) )
		{
			return await transform( content, pluginOptions );
		}

		return content;
	});
};

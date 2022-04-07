# eleventy-plugin-emoji-shortcodes

Transform [emoji shortcodes](https://emojipedia.org/shortcodes/) to accessible elements.

For example, the following Markdown:

```markdown
who called them “dad jokes” instead of “popcorn”? :drum:
```

would be rendered as:

```html
<p>who called them “dad jokes” instead of “popcorn”? <span aria-label="drum" role="img">🥁</span></p>
```

Transformation happens after templates are rendered to HTML, so all Eleventy template syntaxes are supported.

> See the [gemoji project](https://github.com/wooorm/gemoji/blob/7.1.0/index.js#L14570) for details on supported shortcode strings.

## Usage

To install this plugin, run the following command at the root of your Eleventy project:

```shell
npm install --save @aaashur/eleventy-plugin-emoji-shortcodes
```

Next, include the following in your [Eleventy config file](https://www.11ty.dev/docs/config/):

```javascript
const emojiShortcodes = require("@aaashur/eleventy-plugin-emoji-shortcodes");

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(emojiShortcodes);
};
```

## Plugin Options

| Option  | Type   |
| :--     | :--    |
| `class` | string |


To set a class name (or names), set the `class` option when registering the plugin:

```javascript
eleventyConfig.addPlugin(emojiShortcodes, { class: 'emoji' });
```

```
:popcorn:
```

```html
<span aria-label="popcorn" role="img" class="emoji">🍿</span>
```

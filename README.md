# Twitch Streams Code
This repo stores all of the code I create during streaming. For each stream, I'll create a branch and then merge it into `trunk` at the end and push both. That should keep things from getting too messy should. Hopefully it's useful 😎

[https://www.twitch.tv/ryanwelchercodes](https://www.twitch.tv/ryanwelchercodes)

All of the streams are also available on my [YouTube channel](https://www.youtube.com/channel/UC_kRIqFHtN8ccB_mTmHyGDg)


## Sept 17, 2021
Watch: [First steam! Let's mess with some custom blocks](https://www.twitch.tv/videos/1151309353)

Branch: [stream/sept-17-2021](https://github.com/ryanwelcher/twitch/tree/stream/sept-17-2021)


<details>
<summary>Click for topics/highlights</summary>

* We talked about creating blocks from scratch using [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
* Demonstrated the differences between Dynamic and Static blocks
* Showed how to save attributes in a block.
* Used the [`@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) package to scaffold a new block. 🔥🔥🔥🔥
* Talked about using how to get multiple blocks in a plugin ( code was never completed)
* Audio issues 😞
* Ryan not able to type while people watch ( recurring theme...)
* Worked with `getEntityRecords`, `isResolving`, and `invalidateResolver` to display posts in the Block Editor. Inspired by [this blog post](https://ryanwelcher.com/2021/08/requesting-data-in-gutenberg-with-getentityrecords/).
</details>

## Sept 23, 2021

Watch: [Updating the block examples at https://github.com/WordPress/gutenberg-examples](https://www.twitch.tv/videos/1156915530)

Branch: [stream/sept-23-2021](https://github.com/ryanwelcher/twitch/tree/stream/sept-23-2021)

<details>
<summary>Click for topics/highlights</summary>

* No code in this repos, as we updated some of the blocks in the [Gutenberg Examples](https://github.com/WordPress/gutenberg-examples) repo.
* Discussed that if a block isn't using [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) for a build process, that we need to manually add the `index.asset.php` file.
* Figured out how the useBlockProps hook worked when passing items. Thanks to everyone who helped on that one!
</details>

## Sept 30, 2021

Watch: [Converting a shortcode to a custom block.](https://www.twitch.tv/videos/1163471262)

Branch: [stream/sept-30-2021](https://github.com/ryanwelcher/twitch/tree/stream/sept-30-2021)
<details>
<summary>Click for topics/highlights</summary>

* Talked about custom entry points when using `@wordpress/scripts`
* Converted a shortcode to a custom block.
* Learned that Transforms are very confusing and the docs aren't that helpful.
* Ryan's first day with JS `for` loops and React 🤦‍♂️
</details>

## Oct 7, 2021

Watch: [Creating a plugin with @wordpress/create-blocks that has multiple blocks](https://www.twitch.tv/videos/1169960035)

Branch: [stream/oct-7-2021](https://github.com/ryanwelcher/twitch/tree/stream/oct-7-2021)
<details>
<summary>Click for topics/highlights</summary>

* Used the @wordpress/create-block package to scaffold a new plugin with a single block.
* Restructured the plugin to allow for registering multiple blocks.
* Added a custom `webpack.config.js` to set up one entry point per block.
* Demo'd a custom template that uses the same structure: `npx @wordpress/create-block --template @ryanwelcher/multiple-blocks-template`.
* https://www.npmjs.com/package/@ryanwelcher/multiple-blocks-template
</details>

## Oct 14, 2021

Watch: [Creating an accordion block that uses the InnerBlock component](https://www.twitch.tv/videos/1176495340)

Branch: [stream/oct-14-2021](https://github.com/ryanwelcher/twitch/tree/stream/oct-14-2021)
<details>
<summary>Click for topics/highlights</summary>

* Used the @wordpress/create-block along with the my `@ryanwelcher/multiple-blocks-template` to setup the plugin.
</details>

## Oct 21, 2021

Watch: [Building a pre-publish checklist plugin for Gutenberg](https://www.twitch.tv/videos/1182869425)

Branch: [stream/oct-21-2021](https://github.com/ryanwelcher/twitch/tree/stream/oct-21-2021)
<details>
<summary>Click for topics/highlights</summary>

* Inspired by [this WordPress Stack Exchange question](https://wordpress.stackexchange.com/questions/339138/add-pre-publish-conditions-to-the-block-editor/) and [this article by Rich Tabor](https://richtabor.com/gutenberg-publishing-checklist/)
* Introduced [registerPlugin](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/) and some of the [slots available in Gutenberg](https://developer.wordpress.org/block-editor/reference-guides/slotfills/).
* Learned how to disabled the Publish button
* Added requirements for word count, having a featured image, and having at least one category selected that is not Uncategorized

</details>

## Oct 28, 2021

Watch: [The @wordpress/create-blocks package now supports local templates - let's give it a spin!](https://www.twitch.tv/videos/1189315667)

Branch: [stream/oct-28-2021](https://github.com/ryanwelcher/twitch/tree/stream/oct-28-2021)
<details>
<summary>Click for topics/highlights</summary>

* Discussed new feature in `@wordpress/create-block` that allows using local directories for templates.
* Created custom template to build out additional blocks.
* Showed how the $scheme property in block.json is 🔥🔥🔥
* Linked to great article by Marcus Kazmierczak on how to [create your own custom template](https://mkaz.blog/wordpress/make-your-own-create-block-templates/)

</details>


## Nov 4, 2021

Watch: [Adding e2e tests to blocks.](https://www.twitch.tv/videos/1195746137)

Branch: [stream/nov-4-2021](https://github.com/ryanwelcher/twitch/tree/stream/nov-4-2021)
<details>
<summary>Click for topics/highlights</summary>

* Discussed how the `@wordpress/scripts` package contains the e2e testing tools
* Discussed how we also need `@wordpress/env` to run them.
* Created a basic e2e test suite to test if the block was inserted and that the content was correct
* Discussed using snapshots and the difference between `toMatchSnapshot` and `toMatchInlineSnapshot`
* Discussed how to pre-populate the test database with content using npm [`pre` commands](https://docs.npmjs.com/cli/v7/using-npm/scripts) and the [`wp-env run` command](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#wp-env-run-container-command)
* Created a test to ensure that the block saved test input by the user as the `message` attribute.
</details>


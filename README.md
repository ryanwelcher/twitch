# Twitch Streams Code
This repo stores all of the code I create during streaming. For each stream, I'll create a branch and then merge it into `trunk` at the end and push both. That should keep things from getting too messy should. Hopefully it's useful 😎

[https://www.twitch.tv/ryanwelchercodes](https://www.twitch.tv/ryanwelchercodes)

All of the streams are also available on my [YouTube channel](https://www.youtube.com/channel/UC_kRIqFHtN8ccB_mTmHyGDg)



# 2021 #
<details>
<summary>First steam! Let's mess with some custom blocks</summary>

* [Watch on YouTube](https://www.youtube.com/watch?v=riqDs7nBMGg)

* [Branch](https://github.com/ryanwelcher/twitch/tree/stream/sept-17-2021)

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
</details>

## Sept 17, 2021
Watch: [First steam! Let's mess with some custom blocks](https://www.youtube.com/watch?v=riqDs7nBMGg)

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

Watch: [Updating the block examples at https://github.com/WordPress/gutenberg-examples](https://www.youtube.com/watch?v=-Twnr1oFnJQ)

Branch: [stream/sept-23-2021](https://github.com/ryanwelcher/twitch/tree/stream/sept-23-2021)

<details>
<summary>Click for topics/highlights</summary>

* No code in this repos, as we updated some of the blocks in the [Gutenberg Examples](https://github.com/WordPress/gutenberg-examples) repo.
* Discussed that if a block isn't using [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) for a build process, that we need to manually add the `index.asset.php` file.
* Figured out how the useBlockProps hook worked when passing items. Thanks to everyone who helped on that one!
</details>

## Sept 30, 2021

Watch: [Converting a shortcode to a custom block.](https://www.youtube.com/watch?v=mVuGLI9kbcc)

Branch: [stream/sept-30-2021](https://github.com/ryanwelcher/twitch/tree/stream/sept-30-2021)
<details>
<summary>Click for topics/highlights</summary>

* Talked about custom entry points when using `@wordpress/scripts`
* Converted a shortcode to a custom block.
* Learned that Transforms are very confusing and the docs aren't that helpful.
* Ryan's first day with JS `for` loops and React 🤦‍♂️
</details>

## Oct 7, 2021

Watch: [Creating a plugin with @wordpress/create-blocks that has multiple blocks](https://www.youtube.com/watch?v=lwXXckW3dT0)

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

Watch: [Creating an accordion block that uses the InnerBlock component](https://www.youtube.com/watch?v=ZjYgdf6RKPU)

Branch: [stream/oct-14-2021](https://github.com/ryanwelcher/twitch/tree/stream/oct-14-2021)
<details>
<summary>Click for topics/highlights</summary>

* Used the @wordpress/create-block along with the my `@ryanwelcher/multiple-blocks-template` to setup the plugin.
</details>

## Oct 21, 2021

Watch: [Building a pre-publish checklist plugin for Gutenberg](https://www.youtube.com/watch?v=ZHmiI1p26Vc)

Branch: [stream/oct-21-2021](https://github.com/ryanwelcher/twitch/tree/stream/oct-21-2021)
<details>
<summary>Click for topics/highlights</summary>

* Inspired by [this WordPress Stack Exchange question](https://wordpress.stackexchange.com/questions/339138/add-pre-publish-conditions-to-the-block-editor/) and [this article by Rich Tabor](https://richtabor.com/gutenberg-publishing-checklist/)
* Introduced [registerPlugin](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/) and some of the [slots available in Gutenberg](https://developer.wordpress.org/block-editor/reference-guides/slotfills/).
* Learned how to disabled the Publish button
* Added requirements for word count, having a featured image, and having at least one category selected that is not Uncategorized

</details>

## Oct 28, 2021

Watch: [The @wordpress/create-blocks package now supports local templates - let's give it a spin!](https://www.youtube.com/watch?v=aH2KK-6kKCM)

Branch: [stream/oct-28-2021](https://github.com/ryanwelcher/twitch/tree/stream/oct-28-2021)
<details>
<summary>Click for topics/highlights</summary>

* Discussed new feature in `@wordpress/create-block` that allows using local directories for templates.
* Created custom template to build out additional blocks.
* Showed how the $scheme property in block.json is 🔥🔥🔥
* Linked to great article by Marcus Kazmierczak on how to [create your own custom template](https://mkaz.blog/wordpress/make-your-own-create-block-templates/)

</details>


## Nov 4, 2021

Watch: [Adding e2e tests to blocks.](https://www.youtube.com/watch?v=pI1hGE3IFqc)

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


## Nov 18, 2021

Watch: [Creating a Poll block for Gutenberg. Part 1](https://www.youtube.com/watch?v=G6sxo9tpRvA)

Branch: [stream/nov-18-2021](https://github.com/ryanwelcher/twitch/tree/stream/nov-18-2021)
<details>
<summary>Click for topics/highlights</summary>

* Started the Poll block using an external React library ( Google Charts) to display the content.
</details>

## Nov 25, 2021

Watch: [Creating a Poll block for Gutenberg Part 2: The Poll-ening](https://www.youtube.com/watch?v=Tu3QPaJOS7I)

Branch: [stream/nov-24-2021](https://github.com/ryanwelcher/twitch/tree/stream/nov-24-2021)
<details>
<summary>Click for topics/highlights</summary>

* Decided that I hated the approach from the last stream and moved to using InnerBlocks.
* Used block context to pass the color from the main Poll block to the child Poll Item block.
* CSS hates me and I have removed it from my Christmas card list.
</details>

## Dec 2, 2021

Watch: [Creating a Poll block for Gutenberg Part 3: The Final Chapter](https://www.youtube.com/watch?v=4bfxzdVVm1o)

Branch: [stream/dec-1-2021](https://github.com/ryanwelcher/twitch/tree/stream/dec-1-2021)
<details>
<summary>Click for topics/highlights</summary>

* Finished the Poll Block
* Wrote the JavaScript to allow the voting and display to happen
* Used `getThemeSupports()` to retrieve the color palette.
* I learned about `mix-blend-mode` and LOVE IT. @props to floridaCoderMan 🔥🔥🔥🔥
</details>


## Dec 9, 2021

Watch: [Creating a Meme Generator block](https://www.youtube.com/watch?v=9bE3J64brps)

Branch: [stream/dec-9-2021](https://github.com/ryanwelcher/twitch/tree/stream/dec-9-2021)
<details>
<summary>Click for topics/highlights</summary>

* Worked with the `@wordpress/create-block` package
* Used the useEffect hook to retrieve meme data from an external API and stored it using useState
* Leveraged the `supports` object in block.json to introduce color and font controls.
* Leverage the `BlockControls` component to add a custom button to the block toolbar.
</details>

## Dec 16, 2021

Watch: [Expanding the Meme Generator plugin](https://www.youtube.com/watch?v=fTT_ZIpU-Fk)

Branch: [stream/dec-16-2021](https://github.com/ryanwelcher/twitch/tree/stream/dec-16-2021)
<details>
<summary>Click for topics/highlights</summary>

* Added `TabPanel` to the existing `Placeholder` component to be able to choose being images provided by the API or from the Media Library
* Added the ability to upload and use an image from the Media Library using the `MediaUpload` and `MediaUploadCheck` components.
* Display the images that are associated with the current post in the same way we're showing the API images.
* Talked about some great ways to get started with contributing to WordPress
* Happy Holidays!
</details>

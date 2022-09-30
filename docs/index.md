<html>
	<head></head>
	<body>
		<main>
			<h1>Twitch</h1>
		</main>
	</body>
</html>
# Twitch Streams Code

This repo stores all of the code I create during streaming. For each stream, I'll create a branch and then merge it into `trunk` at the end and push both. That should keep things from getting too messy should. Hopefully it's useful 😎

[https://www.twitch.tv/ryanwelchercodes](https://www.twitch.tv/ryanwelchercodes)

All of the streams are also available on my [YouTube channel](https://www.youtube.com/channel/UC_kRIqFHtN8ccB_mTmHyGDg) but are uploaded after the stream.

# Latest Stream

## July 14, 2022

Watch: [Loading block data only when the block is being viewed on the front-end and probably some more examples for the docs.](https://www.twitch.tv/videos/1531582616)

Branch: [stream/july-14-2022](https://github.com/ryanwelcher/twitch/tree/stream/july-14-2022)

<details>
<summary>Click for topics/highlights</summary>

-   Set up a dynamic block to use `viewScript` in order to load a JavaScript file on the FE.
-   Worked with IntersectionObserver to do some fun things
-   Learned a lot about useEffect.

# 2022

<details>
<summary>Testing the configuration options for the @wordpress/scripts package and then creating code examples for the Block Editor handbook docs.</summary>

-   Date: June 23, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=UOiWgbK546Q)

-   Topics/Highlights:
-   Quick look at the @wordpress/scripts package documentation.
-   Plugin scaffold overview.
-   Default scripts package setup.
-   Set up for having multiple blocks.
-   Using a custom directory name instead of src.
-   Customizing the output directory.
-   Configuring the build process to detect blocks and using custom entry points.
-   Using the viewScript property in block.json to load a script on the front end only.
-   Using the viewScript property with a dynamic block.
</details>

<details>
<summary>Reviewing changes to the @wordpress/scripts package and trying out Thunks for the first time!</summary>

-   Date: May 12, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=SjaBjNmewPQ)

-   Topics/Highlights:
-   Demonstrated how the `@wordpress/scripts` package handles multiple blocks natively
-   Talked about use the `--webpack-src-dir` flag to set a custom directory name for your blocks
-   Used the `--webpack-copy-php` flag to copy `.php` to the build directory.
-   Converted the data store for our prepublish checklist to use thunks. **Note: We has to use the `__experimentalUseThunks: true` option but it looks like thunks will [be enabled by default in WordPress 6.0](https://github.com/WordPress/gutenberg/pull/38853)**
</details>

<details>
<summary>Creating a custom admin screen using Gutenberg packages and components. Part 4</summary>

-   Date: Apr 21, 2022
-   [Watch on Twitch](https://www.twitch.tv/videos/1462692195)

-   Topics/Highlights:
_ Briefly discussed [Thunks in Wordpress](https://developer.wordpress.org/block-editor/how-to-guides/thunks/)
_ Completed the datastore.
_ Created the plugin to be loaded into the post editor
_ Integrated the datastore with our plugin \* Used `<PluginDocumentSettingPanel/>` to provide the user with feedback.
</details>

<details>
<summary>Creating a custom admin screen using Gutenberg packages and components. Part 3</summary>

-   Date: Apr 14, 2022
-   [Watch on Twitch](https://www.twitch.tv/videos/1455719593)

-   Topics/Highlights:
_ Fought with state any my datastore. REALLY need to figure out how controls work.🤦‍♂️
_ Added user preferences for the panel toggle state \* Abstracted out a new component for creating settings sections.
</details>

<details>
<summary>Creating a custom admin screen using Gutenberg packages and components. Part 2</summary>

-   Date: Apr 7, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=NcLCZxbuwY0)

-   Topics/Highlights:
_ Remove the tabs for a better UI
_ Create a custom datastore for our settings \* Continued to work on the `<WordCount/>` and `<FeaturedImage/>`
</details>

<details>
<summary>Creating a custom admin screen using Gutenberg packages and components. Part 1</summary>

-   Date: Mar 31, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=HjLZ4LkRcKo)

-   Topics/Highlights:
_ Registered a new admin page for the plugin settings page.
_ Used `render` from the `@wordpress/element` package to render our basic settings page.
_ Messed around with the `<TabPanel />` component to manage the different sections of the page.
_ Learned a great trick to enqueue the matching CSS for any package we reference.
_ Set up a new option to save our data.
_ Used `getEntityProp` hook to access our setting. \* Learned that although we can set the value of the option using the hook in state, we have to also used `saveEditedEntityRecord` to persist the change in the database.
</details>

<details>
<summary>Integrating a custom post type into Gutenberg and Full Site Editing</summary>

-   Date: Mar 3, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=vr3wgD9IZRA)

-   Topics/Highlights:
_ Scaffolding the plugin using the @wordpress/create-block
_ Registering the custom post type.
_ Registering some post meta ( custom fields )
_ Creating a custom document settings panel to manage the post meta.
_ Creating a separate build process for our panel.
_ Manually enqueueing the assets for our panel.
_ Restricting the JavaScript to only load for the custom post type.
_ Registering the plugin for our panel.
_ Accessing the post meta with the useEntityProp hook.
_ Adding the DatePicker and TextControl controls to our panel.
_ Registering the block to display our post meta.
_ Adding a block template to our custom post type
_ Adding templates to a block theme for our custom post type
_ Updating the archive template in the Site Editor
</details>

<details>
<summary>Getting started contributing to Gutenberg and creating a PR for the create-block package.</summary>

-   Date: Mar 24, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=2AeX-1qeA_g)

-   Topics/Highlights:
_ There is no code for this stream in the repo.
_ We talk about getting set up locally for contributing to Gutenberg.
_ We walked through creating a new issue for our feature - [#39722](https://github.com/WordPress/gutenberg/issues/39722)
_ We added the `npmDevDependencies` template variable to the `@wordpress/create-block` package
_ We walked through creating a pull request for our changes - [#39723](https://github.com/WordPress/gutenberg/pull/39723)
_ We got it merged! Huge props to @dgwyer for the suggestion and getting co-contributor credit on the changes!
</details>

<details>
<summary>Looking at block deprecation strategies.</summary>

-   Date: Feb 17, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=BWXcQEbVSx8)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/feb-17-2022)

-   Topics/Highlights:
_ We talk about using deprecations for static blocks.
_ We learn how to convert a static block to a dynamic one
</details>

<details>
<summary>Creating a Block Based Theme with Daisy Olsen. Part 3.</summary>
* Date: Feb 10, 2022
* [Watch on YouTube](https://www.youtube.com/watch?v=kmbiQ6TsYd0)
* [Branch](https://github.com/ryanwelcher/twitch/tree/stream/feb-10-2022)

-   Topics/Highlights:
_ Final stream with Daisy 😞
_ We create a single post with a sidebar
_ We create a 404 page
_ Demo the upcoming style pattern changes
</details>

<details>
<summary>Looking at Block locking, create-block, and script packages updates.</summary>

-   Date: Feb 3, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=kmbiQ6TsYd0)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/feb-3-2022)

-   Topics/Highlights:
_ Demo'd block-level locking using this [repo/plugin.](https://github.com/ryanwelcher/gutenberg-block-level-locking)
_ Demo'd how `@wordpress/scripts` now supports multiple blocks by default.
_ Went through the updates to the `@wordpress/create-block` package.
_ Create a template for the `@wordpress/create-block` package for Dynamic blocks. \* Published the template to [npm.](https://www.npmjs.com/package/@ryanwelcher/dynamic-block-template)
</details>

<details>
<summary>Converting a widget to a custom block. Part 2</summary>

-   Date: Jan 27, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=3E4pcubPkEo&t=2s)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/jan-27-2022)

-   Topics/Highlights:
_ Used the `useEffect` and `useState` hooks
_ Added caching for the front end via the [Transient API](https://developer.wordpress.org/apis/handbook/transients/)
</details>

<details>
<summary>Converting a widget to a custom block. Part 1</summary>

-   Date: Jan 20, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=ls1_XTfQJmg)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/jan-20-2022)

-   Topics/Highlights:
_ Daisy was feeling under the weather so we switched topics
_ Explored an existing widget to convert into a blocks
_ Scaffolded the files with the `@wordpress/create-block` package
_ Started with retrieving Gutenberg props via their [API](https://docs.github.com/en/rest/reference/commits). \* Created the attributes and controls to manage the params for the query
</details>

<details>
<summary>Creating a block-based theme part 2</summary>

-   Date: Jan 13, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=NX_7P2lvuwU)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/jan-13-2022)

-   Topics/Highlights:
_ Joined by Daisy Olsen
_ Created a header.html and footer.html template parts
_ Discovered an issue with the Navigation block that has [already been fixed](https://github.com/WordPress/gutenberg/pull/37718) and will be released with the next version of the Gutenberg plugin.
_ Defined a custom gradient in theme.json
</details>

<details>
<summary>Creating a block-based theme part 1</summary>

-   Date: Jan 6, 2022
-   [Watch on YouTube](https://www.youtube.com/watch?v=NX_7P2lvuwU)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/jan-6-2022)

-   Topics/Highlights:
_ Joined by Daisy Olsen
_ Went through how Block Based Themes are structure by examining the TwentyTwentyTwo theme
_ Started creating a theme from scratch
_ Created a couple of templates \* Used theme.json to define some settings and styles.
</details>

# 2021

<details>
<summary>First steam! Let's mess with some custom blocks</summary>

-   Date: Sept 17, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=riqDs7nBMGg)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/sept-17-2021)

-   Topics/Highlights:
_ We talked about creating blocks from scratch using [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
_ Demonstrated the differences between Dynamic and Static blocks
_ Showed how to save attributes in a block.
_ Used the [`@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) package to scaffold a new block. 🔥🔥🔥🔥
_ Talked about using how to get multiple blocks in a plugin ( code was never completed)
_ Audio issues 😞
_ Ryan not able to type while people watch ( recurring theme...)
_ Worked with `getEntityRecords`, `isResolving`, and `invalidateResolver` to display posts in the Block Editor. Inspired by [this blog post](https://ryanwelcher.com/2021/08/requesting-data-in-gutenberg-with-getentityrecords/).
</details>

<details>
<summary>Updating the block examples at https://github.com/WordPress/gutenberg-examples</summary>

-   Date: Sept 23, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=-Twnr1oFnJQ)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/sept-23-2021)

-   Topics/Highlights:
_ No code in this repos, as we updated some of the blocks in the [Gutenberg Examples](https://github.com/WordPress/gutenberg-examples) repo.
_ Discussed that if a block isn't using [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) for a build process, that we need to manually add the `index.asset.php` file. \* Figured out how the useBlockProps hook worked when passing items. Thanks to everyone who helped on that one!
</details>

<details>
<summary>Converting a shortcode to a custom block</summary>

-   Date: Sept 30, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=mVuGLI9kbcc)
-   [Branch]((https://github.com/ryanwelcher/twitch/tree/stream/sept-30-2021)

-   Topics/Highlights:
    -   Talked about custom entry points when using `@wordpress/scripts`
    -   Converted a shortcode to a custom block.
    -   Learned that Transforms are very confusing and the docs aren't that helpful.
    -   Ryan's first day with JS `for` loops and React 🤦‍♂️

</details>

<details>
<summary>Creating a plugin with @wordpress/create-blocks that has multiple blocks</summary>

-   Date: Oct 7, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=lwXXckW3dT0)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/oct-7-2021)

-   Topics/Highlights:
    -   Used the @wordpress/create-block package to scaffold a new plugin with a single block.
    -   Restructured the plugin to allow for registering multiple blocks.
    -   Added a custom `webpack.config.js` to set up one entry point per block.
    -   Demo'd a custom template that uses the same structure: `npx @wordpress/create-block --template @ryanwelcher/multiple-blocks-template`.
    -   https://www.npmjs.com/package/@ryanwelcher/multiple-blocks-template

</details>

<details>
<summary>Creating an accordion block that uses the InnerBlock component</summary>

-   Date: Oct 14, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=ZjYgdf6RKPU)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/oct-14-2021)

-   Topics/Highlights:
    -   Used the @wordpress/create-block along with the my `@ryanwelcher/multiple-blocks-template` to setup the plugin.

</details>

<details>
<summary>Building a pre-publish checklist plugin for Gutenberg</summary>

-   Date: Oct 21, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=ZHmiI1p26Vc)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/oct-21-2021)

-   Topics/Highlights:
_ Inspired by [this WordPress Stack Exchange question](https://wordpress.stackexchange.com/questions/339138/add-pre-publish-conditions-to-the-block-editor/) and [this article by Rich Tabor](https://richtabor.com/gutenberg-publishing-checklist/)
_ Introduced [registerPlugin](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/) and some of the [slots available in Gutenberg](https://developer.wordpress.org/block-editor/reference-guides/slotfills/).
_ Learned how to disabled the Publish button
_ Added requirements for word count, having a featured image, and having at least one category selected that is not Uncategorized
</details>

<details>
<summary>The @wordpress/create-blocks package now supports local templates - let's give it a spin!</summary>

-   Date: Oct 28, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=aH2KK-6kKCM)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/oct-28-2021)

-   Topics/Highlights:
_ Discussed new feature in `@wordpress/create-block` that allows using local directories for templates.
_ Created custom template to build out additional blocks.
_ Showed how the $scheme property in block.json is 🔥🔥🔥
_ Linked to great article by Marcus Kazmierczak on how to [create your own custom template](https://mkaz.blog/wordpress/make-your-own-create-block-templates/)
</details>

<details>
<summary>Adding e2e tests to blocks</summary>

-   Date: Nov 4, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=pI1hGE3IFqc)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/nov-4-2021)

-   Topics/Highlights:
_ Discussed how the `@wordpress/scripts` package contains the e2e testing tools
_ Discussed how we also need `@wordpress/env` to run them.
_ Created a basic e2e test suite to test if the block was inserted and that the content was correct
_ Discussed using snapshots and the difference between `toMatchSnapshot` and `toMatchInlineSnapshot`
_ Discussed how to pre-populate the test database with content using npm [`pre` commands](https://docs.npmjs.com/cli/v7/using-npm/scripts) and the [`wp-env run` command](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#wp-env-run-container-command)
_ Created a test to ensure that the block saved test input by the user as the `message` attribute.
</details>

<details>
<summary>Creating a Poll block for Gutenberg. Part 1</summary>

-   Date: Nov 18, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=G6sxo9tpRvA)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/nov-18-2021)

-   Topics/Highlights:
    -   Started the Poll block using an external React library ( Google Charts) to display the content.

</details>

<details>
<summary>Creating a Poll block for Gutenberg Part 2: The Poll-ening</summary>

-   Date: Nov 25, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=Tu3QPaJOS7I)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/nov-24-2021)

-   Topics/Highlights:
_ Decided that I hated the approach from the last stream and moved to using InnerBlocks.
_ Used block context to pass the color from the main Poll block to the child Poll Item block. \* CSS hates me and I have removed it from my Christmas card list.
</details>

<details>
<summary>Creating a Poll block for Gutenberg Part 3: The Final Chapter</summary>

-   Date: Dec 2, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=4bfxzdVVm1o)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/dec-1-2021)

-   Topics/Highlights:
_ Finished the Poll Block
_ Wrote the JavaScript to allow the voting and display to happen
_ Used `getThemeSupports()` to retrieve the color palette.
_ I learned about `mix-blend-mode` and LOVE IT. @props to floridaCoderMan 🔥🔥🔥🔥
</details>

<details>
<summary>Creating a Meme Generator block</summary>

-   Date: Dec 9, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=9bE3J64brps)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/dec-9-2021)

-   Topics/Highlights:
_ Worked with the `@wordpress/create-block` package
_ Used the useEffect hook to retrieve meme data from an external API and stored it using useState
_ Leveraged the `supports` object in block.json to introduce color and font controls.
_ Leverage the `BlockControls` component to add a custom button to the block toolbar.
</details>

<details>
<summary>Expanding the Meme Generator plugin</summary>

-   Date: Dec 16, 2021
-   [Watch on YouTube](https://www.youtube.com/watch?v=fTT_ZIpU-Fk)
-   [Branch](https://github.com/ryanwelcher/twitch/tree/stream/dec-16-2021)

-   Topics/Highlights:
_ Added `TabPanel` to the existing `Placeholder` component to be able to choose being images provided by the API or from the Media Library
_ Added the ability to upload and use an image from the Media Library using the `MediaUpload` and `MediaUploadCheck` components.
_ Display the images that are associated with the current post in the same way we're showing the API images.
_ Talked about some great ways to get started with contributing to WordPress \* Happy Holidays!
</details>

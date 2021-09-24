# Twitch Streams Code
This repo stores all of the code I create during streaming. For each stream, I'll create a branch and then merge it into `trunk` at the end and push both. That should keep things from getting too messy should. Hopefully it's useful 😎

[https://www.twitch.tv/ryanwelchercodes](https://www.twitch.tv/ryanwelchercodes)


## Sept 17, 2021
Watch: [First steam! Let's mess with some custom blocks](https://www.twitch.tv/videos/1151309353)

Branch: [stream/sept-17-2021](https://github.com/ryanwelcher/twitch/tree/]stream/sept-17-2021)


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

Branch:[stream/sept-23-2021](https://github.com/ryanwelcher/twitch/tree/]stream/sept-23-2021)

<details>
<summary>Click for topics/highlights</summary>
* No code in this repos, as we updated some of the blocks in the [Gutenberg Examples](https://github.com/WordPress/gutenberg-examples) repo.
* Discussed that if a block isn't using [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) for a build process, that we need to manually add the `index.asset.php` file.
* Figured out how the useBlockProps hook worked when passing items. Thanks to everyone who helped on that one!
</details>
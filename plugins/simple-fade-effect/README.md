# Overview

In this recipe, you will load custom JavaScript and CSS files for the cover and image blocks to create a simple fade-in effect when the block is scrolled into view. You don't want to load files unless they are needed so you will only enqueue them when the block(s) are on the page.

## Step 1 - Registering the files to be loaded

Typically when enqueueing a file, you would use `wp_enqueue_script` to both register and enqueue the file. For this recipe, you will need to break that out into two steps: registering first and then enqueueing later.

In the main PHP file for the plugin, add the following code:

```php
// Hooks.
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\register_custom_js_script' );

/**
 * Register the script we want to load with the core blocks
 */
function register_custom_js_script() {

	$js_file = plugin_dir_path( __FILE__ ) . '/build/index.asset.php';

	if ( file_exists( $js_file ) ) {
		// Register the custom script to be used later.
		$js_assets = include $js_file;
		wp_register_script(
			'custom-script-for-core-block',
			plugin_dir_url( __FILE__ ) . '/build/index.js',
			$js_assets['dependencies'],
			$js_assets['version'],
			true
		);

		wp_register_style(
			'test-styles',
			plugin_dir_url( __FILE__ ) . '/build/index.css',
			array(),
			$js_assets['version'],
		);
	}
}
```

This code does a number of things. First it checks to make sure that the `index.asset.php` generated when you ran the build process is in place. Then if that file exists, it registers the JS and CSS.

## Step 2 - Enqueuing the files only when needed

Now that you have the files registered, you need to enqueue them only when the block(s) are on the page. As of WordPress 6.4, there is no dedicated hook for this so the best place way to do this is to use either the `render_block` or `render_block_{name}` filters.

Add the following to the main PHP file:

```php
add_filter( 'render_block', __NAMESPACE__ . '\enqueue_files_for_core_blocks', 10, 2 );

/**
 * Enqueue our custom script for the core blocks.
 *
 * @see https://developer.wordpress.org/reference/hooks/render_block/
 *
 * @param string $block_content The block content.
 * @param array  $block         The full block, including name and attributes.
 */
function enqueue_files_for_core_blocks( $block_content, $block ) {

	// Enqueue the same script for more than one block type.
	if ( 'core/cover' === $block['blockName'] || 'core/image' === $block['blockName'] ) {

		// Append the the fader class to to the block wrapper.
		$tag = new WP_HTML_Tag_Processor( $block_content );
		if ( $tag->next_tag() ) {
			$tag->add_class( 'fader' );
		}
		$block_content = $tag->get_updated_html();


		wp_enqueue_script( 'custom-script-for-core-block' );
		wp_enqueue_style( 'test-styles' );
	}
	// Be sure to sure the return the block content.
	return $block_content;
}
```

This code adds a filter to `render_block` and then checks to see if the block being rendered is either the `core/cover` or `core/image` block. If it is, it then uses the HTML Tag Processor to add a new class to the main wrapper (this is only to achieve the effect of the fade-in). It then enqueues the JS and CSS we need to complete the effect.

## Step 3 (Optional) - Using dedicated block filters

This recipe is complete but you could also use dedicated filter for each block instead of doing the check

```php
add_filter( 'render_block_core/cover', __NAMESPACE__ . '\enqueue_files_for_one_core_block' );
add_filter( 'render_block_core/image', __NAMESPACE__ . '\enqueue_files_for_one_core_block' );

/**
 * Enqueue our custom script for a single core block by using the specific hook
 *
 * @see https://developer.wordpress.org/reference/hooks/render_block_this-name/
 *
 * @param string $block_content The block content.
 * @param array  $block         The full block, including name and attributes.
 */
function enqueue_files_for_one_core_block( $block_content ) {
	// Enqueue the script for a single block type.
	// Append the the fader class to to the block wrapper.
	$tag = new WP_HTML_Tag_Processor( $block_content );
	if ( $tag->next_tag() ) {
		$tag->add_class( 'fader' );
	}
	$block_content = $tag->get_updated_html();
	wp_enqueue_script( 'custom-script-for-core-block' );
	wp_enqueue_style( 'test-styles' );
	// Be sure to sure the return the block content.
	return $block_content;
}
```

Run the build command add Cover and Image blocks to test. Bon appetit!

<?php
/**
 * Plugin Name:       Htm No Build
 * Description:       A block that uses the HTM package instead of JSX.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       htm-no-build
 *
 * @package TwitchStreams
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
add_action(
	'init',
	function() {
		register_block_type(
			'twitch-streams/htm-no-build',
			[
				'render_callback' => function( $attributes ) {
					ob_start();
					?>
					<p <?php echo get_block_wrapper_attributes(); ?> >
						<?php echo $attributes['message']; ?>
					</p>
					<?php
					return ob_get_clean();
				},
			]
		);
	}
);

/**
 * Enqueue our module in the block editor.
 */
function enqueue_block_module() {
	wp_enqueue_script( 'htm-block', plugin_dir_url( __FILE__ ) . 'src/index.js' );
}

add_action(
	'enqueue_block_editor_assets',
	'enqueue_block_module'
);

/**
 * Filter the script, add an importmap, and set it to type "module".
 */
function change_block_script_type( $tag, $handle, $src ) {
	// If this is our script, add the importmap and change the type to module
	if ( 'htm-block' === $handle ) {

		$imports = json_encode([
			'edit' => plugin_dir_url( __FILE__ ) . 'src/edit.js',
			'htm' => "https://unpkg.com/htm?module"
		]);

		return <<<SCRIPT
<script type="importmap">
	{
		"imports": $imports
	}
</script>
<script type="module" src="$src"></script>
SCRIPT;
	}
	// return the tag o
	return $tag;
}

add_filter(
	'script_loader_tag',
	'change_block_script_type',
	10,
	3
);

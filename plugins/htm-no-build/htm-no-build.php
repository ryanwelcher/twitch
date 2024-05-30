<?php
/**
 * Plugin Name:       Htm No Build
 * Description:       Example block scaffolded with Create Block tool.
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


add_action(
	'wp_footer',
	'enqueue_block_module'
);

add_action(
	'admin_footer',
	'enqueue_block_module'
);

/**
 * Hack to get our module loaded.
 */
function enqueue_block_module() {
?>
	<script type="module" src="<?php echo esc_url( plugin_dir_url( __FILE__ ) . 'src/index.js' ); ?>"></script>
<?php
}


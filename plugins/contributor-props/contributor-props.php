<?php
/**
 * Plugin Name:       Contributor Props
 * Description:       Displays props for WordPress and Gutenberg
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       contributor-props
 *
 * @package           twitch-streams
 */
namespace Twitch\ContributorProps;
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function twitch_streams_contributor_props_block_init() {
	register_block_type( __DIR__, array(
		'render_callback' => __NAMESPACE__ . '\contributor_props'
	));
}
add_action( 'init', __NAMESPACE__ . '\twitch_streams_contributor_props_block_init' );


/**
 * Contributor block render callback.
 */
function contributor_props( $attributes, $content, $block_instance) {

	$gb_response = wp_remote_get('https://api.github.com/repos/WordPress/Gutenberg/commits?author=' . $attributes['username']);
	if ( ! is_wp_error( $gb_response  ) ) {
		$props = wp_remote_retrieve_body( $gb_response );
	}

	?>
	<section>
		<?php if ( !empty( $attributes["title"] ) ) : ?>
			<h2><?php echo esc_html( $attributes["title"] ); ?></h2>
		<?php endif;?>
		<ul>
		<?php
		$decoded_props = json_decode( $props );
		for( $i = 0; $i < $attributes['propCount']; $i++ ) {
			// $message = (string) $decoded_props[$i]->commit->message;
			$url     = (string) $decoded_props[$i]->html_url;
			preg_match('/(#[0-9]*)/',$message, $matches);
			echo "<li><a href='$url'>$matches[0]</a></li>";
		}
		?>
		</ul>
		<a
			target="blank"
			href="https://github.com/WordPress/gutenberg/commits?author=<?php echo $attributes['username'];?>"
			rel="noopener noreferrer"
		>View all props</a>
	</section>
	<?php
	$content = ob_get_clean();
	return $content;
}

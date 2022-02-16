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
	register_block_type(
		__DIR__,
		array(
			'render_callback' => __NAMESPACE__ . '\contributor_props',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\twitch_streams_contributor_props_block_init' );


/**
 * Contributor block render callback.
 */
function contributor_props( $attributes, $content, $block_instance ) {
	$title      = isset( $attributes['title'] ) ? $attributes['title'] : '';
	$username   = isset( $attributes['username'] ) ? $attributes['username'] : false;
	$prop_count = isset( $attributes['propCount'] ) ? $attributes['propCount'] : false;

	if ( ! $username ) {
		// Nothing to see here.
		return;
	}
	// 1. Check the cache for something to display.
	$cache_key = "{$username}_{$prop_count}";
	// Check for transient.
	$props = get_transient( $cache_key );
	if ( false === $props ) {
		// Make the query.
		$url = add_query_arg(
			array(
				'author'  => esc_attr( $username ),
				'perPage' => esc_attr( $prop_count ),
			),
			'https://api.github.com/repos/WordPress/Gutenberg/commits'
		);

		$gb_response = wp_remote_get( $url );
		if ( ! is_wp_error( $gb_response ) ) {
			$props = wp_remote_retrieve_body( $gb_response );
		}
		// Put the results in a transient. Expire after 12 hours.
		set_transient( $cache_key, $props, 12 * HOUR_IN_SECONDS );
	}

	?>
	<section class="<?php echo esc_attr( get_block_wrapper_attributes() ); ?>">
		<?php if ( ! empty( $title ) ) : ?>
			<h2><?php echo esc_html( $title ); ?></h2>
		<?php endif; ?>
		<ul>
		<?php
		$decoded_props = json_decode( $props );
		for ( $i = 0; $i < $attributes['propCount']; $i++ ) {
			$message = (string) $decoded_props[ $i ]->commit->message;
			$url     = (string) $decoded_props[ $i ]->html_url;
			?>
				<li><a href=<?php echo esc_url( $url ); ?> target="blank" rel="noopener noreferrer"><?php echo esc_html( $message ); ?></a></li>
			<?php
		}
		?>
		</ul>
		<?php
		$all_props_link = add_query_arg(
			array(
				'author' => esc_attr( $username ),
			),
			'https://api.github.com/repos/WordPress/Gutenberg/commits'
		);
		?>
		<a
			target="blank"
			href="<?php echo esc_url( $all_props_link ); ?>"
			rel="noopener noreferrer"
		><?php esc_html_e( 'View all props', 'contributor-props' ); ?></a>
	</section>
	<?php
	$content = ob_get_clean();
	return $content;
}

<?php
/**
 * Plugin to embed the WordPress playground.
 *
 * @package PlaygroundEmbedder
 * @version 1.1
 *
 * Plugin Name: Playground embedder
 * Plugin URI: https://wordpress.org/plugins/playground-embedder/
 * Description: Embeds the WordPress playground through a shortcode.
 * Version: 1.1
 * Minimum WordPress Version: 6.0
 * Minimum PHP Version: 7.4
 * Author: Joost de Valk
 * Author URI: https://joost.blog
 * License: GPL v3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.en.html
 */

/**
 * Main class for the plugin.
 */
class PlaygroundEmbedder {
	/**
	 * Class constructor.
	 */
	public function __construct() {
		add_action( 'plugins_loaded', [ $this, 'init' ] );
	}

	/**
	 * Initializes the shortcode.
	 *
	 * @return void
	 */
	public function init() {
		add_shortcode( 'wp_playground', [ $this, 'shortcode_output' ] );
	}

	/**
	 * Returns the shortcode output, adding the attributes to the URL.
	 *
	 * @param array  $attributes An array of attributes.
	 * @param string $blueprint The blueprint to use.
	 *
	 * @return string Shortcode output.
	 */
	public function shortcode_output( $attributes, $blueprint = '' ) {
		$attributes = shortcode_atts(
			[
				'width'  => 800,
				'height' => 600,
				'lazy'   => 1,
			],
			$attributes
		);

		if ( isset( $attributes['start_button'] ) ) {
			$attributes['lazy'] = $attributes['start_button'];
			unset( $attributes['start_button'] );
		}

		$width     = (int) $attributes['width'];
		$height    = (int) $attributes['height'];
		$random_id = wp_rand( 0, 5000 );
		$url       = 'https://playground.wordpress.net/remote.html';
		$wh_string = '';
		if ( $width !== 0 && $height !== 0 ) {
			$wh_string = 'style="width: ' . $width . 'px; height: ' . $height . 'px"';
		}

		// Remove line breaks.
		$blueprint = preg_replace( '/<br\s*\/?>/i', "\n", $blueprint );

		// Replace nice typography quotes with double quotes.
		$blueprint = trim( str_replace( [ '&#8220;', '&#8221;' ], '"', $blueprint ) );
		// Remove unneeded newlines etc.
		$blueprint = preg_replace( '/\s+/', ' ', $blueprint );

		// Parse as JSON.
		$blueprint = json_decode( $blueprint );
		// Decoding failed, turn blueprint into an empty object.
		if ( $blueprint === null ) {
			$blueprint = (object) [];
		}
		// Re-encode to make sure it's valid JSON and escaped properly.
		$blueprint = wp_json_encode( $blueprint, JSON_PRETTY_PRINT );

		if ( $attributes['lazy'] ) {
			return sprintf(
				'<button class="wp-element-button" id="wp-%1$s-button">Click to load playground.</button>
				<iframe class="wp-playground" id="wp-%1$s" %2$s></iframe>
				<script type="text/javascript">
				document.getElementById(\'wp-%1$s\').style.display = "none";
				document.getElementById(\'wp-%1$s-button\').addEventListener(\'click\', function() {
					document.getElementById(\'wp-%1$s-button\').style.display = "none";
					console.log(\'Loading WP playground\');
					s = document.createElement("script");
					s.type = "module";
					s.id = "playground-module";
					console.log(\'Step 2\');
					s.innerHTML = `import {
						startPlaygroundWeb
					} from "https://unpkg.com/@wp-playground/client/index.js";
					const client = await startPlaygroundWeb({
						iframe: document.getElementById(\'wp-%1$s\'),
						remoteUrl: \'%3$s\',
						blueprint: %4$s
					});`;
					document.getElementById(\'wp-%1$s\').style.display = "block";
					document.body.appendChild(s);
				});
				</script>',
				$random_id,
				$wh_string,
				$url,
				$blueprint
			);
		} else {
			return sprintf(
				'<iframe class="wp-playground" id="wp-%1$s" %2$s></iframe>
	<script type="module">
	import {
		startPlaygroundWeb
	} from "https://unpkg.com/@wp-playground/client/index.js";
	const client = await startPlaygroundWeb({
				iframe: document.getElementById(\'wp-%1$s\'),
					remoteUrl: \'%3$s\',
					blueprint: %4$s,
				}
			);
	</script>',
				$random_id,
				$wh_string,
				$url,
				$blueprint
			);
		}
	}
}

new PlaygroundEmbedder();

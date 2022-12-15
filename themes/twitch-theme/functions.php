<?php

function twitch_fonts() {
	wp_enqueue_style(
		'twitch-theme-google-fonts',
		'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
		false
	);
	wp_enqueue_style(
		'theme-styles',
		get_stylesheet_uri(),
		false
	);
}


add_action( 'wp_enqueue_scripts', 'twitch_fonts' );


// Require the CPT file.
require get_stylesheet_directory() . '/includes/streams-post-type.php';
// Require the enqueues file.
require get_stylesheet_directory() . '/includes/enqueues.php';
require get_stylesheet_directory() . '/includes/blocks.php';


add_action(
	'init',
	function() {

		$content_type = 'post';

		register_block_pattern(
			'demo/my-example',
			array(
				'title'         => __( 'Demo pattern', 'textdomain' ),
				'description'   => _x( 'This is my first block pattern', 'Block pattern description', 'textdomain' ),
				'content'       => '
					<!-- wp:query {"query":{"perPage":4,"pages":0,"offset":0,"postType":"' . $content_type . '","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"namespace":"twitch-streams-variation","backgroundColor":"black","textColor":"luminous-vivid-amber"} -->
			<div class="wp-block-query has-luminous-vivid-amber-color has-black-background-color has-text-color has-background"><!-- wp:post-template -->
			<!-- wp:post-title /-->

			<!-- wp:paragraph -->
			<p>My Query Loop variation pattern!!!!</p>
			<!-- /wp:paragraph -->

			<!-- wp:post-date /-->
			<!-- /wp:post-template -->

			<!-- wp:query-pagination -->
			<!-- wp:query-pagination-previous /-->

			<!-- wp:query-pagination-numbers /-->

			<!-- wp:query-pagination-next /-->
			<!-- /wp:query-pagination -->

			<!-- wp:query-no-results -->
			<!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
			<p></p>
			<!-- /wp:paragraph -->
			<!-- /wp:query-no-results --></div>
			<!-- /wp:query -->',
				'categories'    => array( 'text', 'query' ),
				'viewportWidth' => 800,
				'blockTypes'    => array( 'core/query' ),
			)
		);
	}
);

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

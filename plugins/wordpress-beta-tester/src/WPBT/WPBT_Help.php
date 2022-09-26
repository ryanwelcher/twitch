<?php
/**
 * WordPress Beta Tester
 *
 * @package WordPress_Beta_Tester
 * @author Andy Fragen and Paul Biron, original author Peter Westwood.
 * @license GPLv2+
 * @copyright 2009-2016 Peter Westwood (email : peter.westwood@ftwr.co.uk)
 */

/**
 * WPBT Help
 */
class WPBT_Help {
	/**
	 * Load hooks for screen help tabs.
	 *
	 * @return void
	 */
	public function load_hooks() {
		add_action( 'current_screen', array( $this, 'add_help_tabs' ) );
	}

	/**
	 * Add individual help tabs.
	 *
	 * @return bool|void
	 */
	public function add_help_tabs() {
		$current_screen = get_current_screen();
		if ( false === strpos( $current_screen->id, 'wp-beta-tester' ) ) {
			return false;
		}

		get_current_screen()->set_help_sidebar(
			'<p><strong>' . __( 'For more information:' ) . '</strong></p>' .
			'<p>' . __( '<a href="https://make.wordpress.org/core/handbook/testing/beta-testing/">Beta Testing</a>', 'wordpress-beta-tester' ) . '</p>'
		);

		get_current_screen()->add_help_tab(
			array(
				'id'      => 'overview',
				'title'   => __( 'Overview', 'wordpress-beta-tester' ),
				'content' => '<p>' .
				sprintf(
					/* translators: 1: link to backing up database, 2: link to make.wp.org/core, 3: link to beta support forum */
					__( 'By their nature, these releases are unstable and should not be used any place where your data is important. So please <a href="%1$s">back up your database</a> before upgrading to a test release. In order to hear about the latest beta releases, your best bet is to watch the <a href="%2$s">development blog</a> and the <a href="%3$s">beta forum</a>.', 'wordpress-beta-tester' ),
					_x( 'https://wordpress.org/support/article/wordpress-backups/', 'URL to database backup instructions on HelpHub', 'wordpress-beta-tester' ),
					'https://make.wordpress.org/core/',
					_x( 'https://wordpress.org/support/forum/alphabeta', 'URL to beta support forum', 'wordpress-beta-tester' )
				) . '</p>',
			)
		);

		get_current_screen()->add_help_tab(
			array(
				'id'      => 'beta/RC',
				'title'   => __( 'Beta/RC', 'wordpress-beta-tester' ),
				'content' => '<p>' .
					__( 'You must select either the <em>Point release</em> or <em>Bleeding edge</em> channel. Then select the <em>Beta/RC Only</em> or <em>Release Candidates Only</em> stream. Once saved you will only see an update notice when the next release, RC, or beta is available.', 'wordpress-beta-tester' ) . '</p><p>' .
					__( '<em>Point release</em> channel only has the <em>Nightlies</em> stream available at this time.', 'wordpress-beta-tester' ) . '</p>',
			)
		);

		get_current_screen()->add_help_tab(
			array(
				'id'      => 'dashboard',
				'title'   => __( 'Dashboard Widget', 'wordpress-beta-tester' ),
				'content' => '<p>' . __( 'A dashboard widget is displayed when the plugin is active. It will contain links to milestone commits and filing a bug report. It may contain links to Dev Notes, the Field Guide, and beta/RC release posts.', 'wordpress-beta-tester' ) . '</p>',
			)
		);
	}
}

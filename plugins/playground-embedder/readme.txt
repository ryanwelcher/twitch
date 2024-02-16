=== Playground Embedder ===
Contributors: joostdevalk
Tested up to: 6.2
Stable tag: 1.1
Requires at least: 6.0
Requires PHP: 7.4
License: GPL v3
License URI: https://www.gnu.org/licenses/gpl-3.0.en.html

Embeds the WordPress playground through a shortcode.

== Description ==
Add the WordPress playground by adding a `[wp_playground]` shortcode to your pages. This plugin supports all the attributes the playground supports, which [you can find here](https://wordpress.github.io/wordpress-playground/docs/query-api#available-options).

By default, the plugin lazy loads the playground, so it's only loaded after a button click. An additional feature is that you 
can decide not to lazy load the playground by adding `lazy=0` to the shortcode, like so:

    [wp_playground lazy=0]

At this point the plugin renders the playground immediately.

=== Blueprints ===

You can load entire blueprints into the shortcode by putting them in the content between the shortcode, like this:

	[wp_playground]
	{
		"landingPage": "/wp-admin/",
		"preferredVersions": {
			"php": "8.0",
			"wp": "latest"
		},
		"steps": [
			{
				"step": "login",
				"username": "admin",
				"password": "password"
			}
		]
	}
	[/wp_playground]

These blueprints allow you to install themes, plugins and more. To learn about them, read the [Playground documentation](https://wordpress.github.io/wordpress-playground/blueprints-api/index).

== Screenshots ==

1. A default button loaded when the playground is inserted into a page.
2. The playground in action, this time loaded with `lazy=0`.

== Changelog ==

= 1.1 =

Added the lazy loading option.

= 1.0 =

Initial release.

== Installation ==
1. Install & activate the plugin.
2. Add a `[wp_playground]` shortcode to one of your pages.
3. You're done.

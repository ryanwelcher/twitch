[unreleased]

#### 3.2.2 / 2022-06-23
* correctly use `sanitize_url()` and `esc_url()`
* fix `WP_Config_Transformer` to get anchor if wp-config.php has been modified

#### 3.2.1 / 2022-04-13
* update composer to work with PHP 5.6

#### 3.2.0 / 2022-04-12
* use `sanitize_key()` for nonces
* fix for transition from WP x.9 to WP x.0 to display correct next versions

#### 3.1.5 / 2022-01-28
* use `sanitize_title_with_dashes()` as `sanitize_file_name()` maybe have attached filter that changes output
* fix variable docblocks
* update nonce checks

#### 3.1.4 / 2021-09-24 **Hotfix**
* don't load `pluggable.php` for `wp_create_nonce()`, load in `plugins_loaded` hook

#### 3.1.3 / 2021-09-23
* nonce, escape, and sanitize all the things

#### 3.1.2 / 2021-09-04
* only use `esc_attr_e` for translating strings

#### 3.1.1 / 2021-07-11
* add @10up GitHub Actions WordPress SVN integration
* update Codex links for HelpHub links @audrasjb

#### 3.1.0 / 2021-02-08
* update for working correctly if new `WP_AUTO_UPDATE_CORE` constant is used.
* update `WP_Beta_Tester::channel_switching_modification()` to update past current release if appropriate
* tweak next versions when coming from point release to bleeding edge

#### 3.0.10 / 2021-01-11
* re-write `WP_Beta_Tester::get_current_wp_release()` to check https://api.wordpress.org/core/stable-check/1.0/
* fix `WPBT_Core::get_next_versions()` if user on current release
* tweak `WP_Beta_Tester::channel_switching_modification()` to work correctly with $wp_version <= $current_release and if on current release

#### 3.0.9 / 2020-12-01
* add conditional for filter to fix `core_update_footer()`, fixed in [r49708](https://core.trac.wordpress.org/changeset/49708)
* simplify some `preg_match()` calls
* fix PHP warning

#### 3.0.8 / 2020-11-28
* fix some PHP errors when using older versions of WP, for testing updates directly from these older versions like when using Core Rollback plugin

#### 3.0.7 / 2020-11-24
* tweak to `channel_switching_modification()`

#### 3.0.6 / 2020-11-21
* improved flow between _Bleeding edge_ and _Point release_

#### 3.0.5 / 2020-11-18
* don't show beta as a next version when on RC

#### 3.0.4 / 2020-11-17
* fix to correctly downgrade from _Bleeding edge_ to _Point release nightlies_.
* hide stream options other than _Nightlies_ for _Point release_ channel until [new Updates API changes](https://meta.trac.wordpress.org/ticket/5511)
* add settings for future Updates API above
* added `channel_settings_migrator()` for switching between `Bleeding edge` and `Point release` channels

#### 3.0.1 - 3.0.3 / 2020-10-27
* fixed regex to get next versions
* really didn't need to use `ReflectionClass` 🤦‍♂️, thanks @pbiron
* use `ReflectionClass` to get static variable `$core_update_constant` from `class WP_Beta_Tester` into `class WPBT_Core`

#### 3.0.0 / 2020-10-23
* major refactor for new core update API, thanks @dd32!
* now requires PHP >5.6
* allows for overrides when using the `WP_AUTO_UPDATE_CORE` constant
* update on-screen help

#### 2.2.13 / 2020-09-05
* enclose `WPConfigTransformer` in try/catch

#### 2.2.12 / 2020-08-10
* fix intermittent PHP warning [#21](https://github.com/afragen/wordpress-beta-tester/issues/21)
* deactivate and die if user attempting to run with `wordpress-develop`

#### 2.2.11 / 2020-08-01
* minor cleanup

#### 2.2.10 / 2020-05-01
* sanitize, escape & ignore
* move multiline boolean operator to front of line, new guidelines in WPCS
* fix `correct_versions_for_downgrade()` for being on current release version

#### 2.2.9 / 2020-03-24
* delete development RSS feed transient after core upgrade

#### 2.2.8 / 2020-03-17 🍀
* add Dev Notes and Field Guide links to dashboard
* add text/link for bug reporting to trac
* add help tabs to screen
* arbitrarily changed settings page id from `wp_beta_tester` to `wp-beta-tester` 😏

#### 2.2.7 / 2020-03-02
* update trac link in callout for _closed_ or _reopened_ tickets on the milestone
* only show Beta Tester Settings page link in callout with appropriate privileges, using `manage_network_options` and `manage_options`
* menu to Settings page also checks privileges as above

#### 2.2.6 / 2020-02-25
* removed extra `</li>` in dashboard callout, 4th time's the charm 😭

#### 2.2.5 / 2020-02-25
* less greedy regex for matching release posts in RSS for dashboard callout

#### 2.2.4 / 2020-02-25 🤦‍♂️
* added dashboard widget for network dashboard

#### 2.2.3 / 2020-02-25
* add dashboard widget callout for testing

#### 2.2.2 / 2020-02-22
* fix for strange Core API response where preferred version response contained the word 'version'. We now grab the last word of that response

#### 2.2.1 / 2020-02-20
* fix some i18n strings, thanks @pedro-mendonca

#### 2.2.0 / 2020-02-19
* added support for updating to the _beta/RC offer_. Based on and with tons of help from @pbrion, thanks Paul 👏🏻
* fixed so a downgrade from 'unstable' to 'point' serves the correct download
* test and exit from **Extra Settings** if `wp-config.php` is not writeable

#### 2.1.0 / 2019-09-17
* add extra setting to skip successful autoupdate emails
* add description to checkbox settings
* composer update

#### 2.0.4
* add update version information to settings page text

#### 2.0.3
* a11y fixes for settings tabs
* update `wp-cli/wp-config-transformer`

#### 2.0.2
* a11y fixes for checkbox, thanks @audrasjb

#### 2.0.1
* fix for incorrect last updated message

#### 2.0.0
* near complete re-write to use more OOPy practices
* put distinct process into separate classes
* allows for multiple settings tabs for addtional settings

#### 1.2.6
* remove extraneous code
* add GitHub Plugin URI header

#### 1.2.5
* fixed error message for downgrading version, thanks @andreas-andersson

#### 1.2.4
* don't use $GLOBALS

#### 1.2.3
* updated a few strings and correct typos
* run through WPCS linter
* fixed translation strings to include HTML in context and properly escape with `wp_kses_post()`
* fixed link to settings page under Multisite

#### 1.2.2
* change wording from blog to website

#### 1.2.0
* Escape output
* Indicate that _Bleeding edge nightlies_ are _trunk_
* new screenshot
* code improvements from linter

#### 1.1.2
* Remove anonymous function for PHP 5.2 compatibility.

#### 1.1.1
* fixed PHP notice for PHP 7.1
* made URL scheme agnostic

#### 1.1.0
* Fixed to work properly under Multisite.

#### 1.0.2
* Update tested up to version to 4.7.
* Fix the location of the settings screen in Multisite (moved under Settings in Network Admin).
* Minor text fixes.

#### 1.0.1
* Update tested up to version to 4.5.
* Fix PHP7 deprecated constructor notice.
* Change text domain to match the plugin slug.
* Update WordPress.org links to use HTTPS.
* Remove outdated bundled translations in favor of language packs.

#### 1.0
* Update tested up to version to 4.2.
* Update screenshot.
* Fix a couple typos.

/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { registerPlugin } from '@wordpress/plugins';
import { useSelect, useDispatch } from '@wordpress/data';
import { count } from '@wordpress/wordcount';
import { serialize } from '@wordpress/blocks';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import WordCountDisplayComponent from './components/wordCountDisplay';
import FeaturedImageDisplay from './components/featuredImageDisplay';
import CategoriesDisplay from './components/categoriesDisplay';
// Pull the store into the plugin
import '../admin/datastore';
import { STORE_NAME } from '../admin/datastore/constants';

const Render = () => {
	const [wordCountDisplay, setWordCountDisplay] = useState('');
	// Gets all settings from the custom store.
	const settings = useSelect((select) => select(STORE_NAME).getSettings());

	// The useSelect hook is better for retrieving data from the store.
	const { blocks, categories, featuredImageID } = useSelect((select) => {
		return {
			blocks: select('core/block-editor').getBlocks(),
			categories:
				select('core/editor').getEditedPostAttribute('categories'),
			featuredImageID:
				select('core/editor').getEditedPostAttribute('featured_media'),
		};
	});

	// The useDispatch hook is better for dispatching actions.
	const {
		lockPostSaving,
		unlockPostSaving,
		enablePublishSidebar,
		disablePublishSidebar,
	} = useDispatch('core/editor');

	useEffect(() => {
		// Get the WordCount
		const currentWordCount = count(serialize(blocks), 'words');
		setWordCountDisplay(currentWordCount);
		const { wordcount, requiredFeaturedImage, requiredCategory } = settings;
		let lockPost = false;

		// if (!wordcount) return;
		if (currentWordCount < wordcount) {
			// If the word count is less than the required, lock the post saving.
			lockPost = true;
		}
		// Does the post have a featured image?
		if (requiredFeaturedImage && featuredImageID === 0) {
			lockPost = true;
		}

		// Check that there a category assigned to the post.
		// if (!categories.length || categories.includes(1)) {
		if (requiredCategory && !categories.length) {
			lockPost = true;
		}

		//Lock or enable saving
		if (lockPost === true) {
			lockPostSaving();
			disablePublishSidebar();
		} else {
			unlockPostSaving();
			enablePublishSidebar();
		}
	}, [settings, blocks]);

	return (
		<PluginDocumentSettingPanel
			name="prepublish-checklist"
			title={__('Prepublish Checklist', 'pre-publish-checklist')}
			className="prepublish-checklist"
		>
			<WordCountDisplayComponent
				wordCount={wordCountDisplay}
				required={settings.wordcount}
			/>
			{settings.requiredFeaturedImage && (
				<FeaturedImageDisplay featuredImageID={featuredImageID} />
			)}
			{settings.requiredCategory && (
				<CategoriesDisplay categories={categories} />
			)}
		</PluginDocumentSettingPanel>
	);
};

registerPlugin('twitch-prepublish-checklist', {
	icon: 'forms',
	render: Render,
});

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/**
 * WordPress dependencies
 */
import { Fragment, useEffect, useState } from '@wordpress/element';
import { registerPlugin } from '@wordpress/plugins';
import {
	PluginDocumentSettingPanel,
	PluginPrePublishPanel,
} from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { count } from '@wordpress/wordcount';
import { serialize } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import WordCountDisplayComponent from './wordCountDisplay';
import FeaturedImageDisplay from './featuredImageDisplay';
import CategoriesDisplay from './categoriesDisplay';
import { REQUIRED_WORD_COUNT } from './constants.';

const Render = () => {
	const [wordCountDisplay, setWordCountDisplay] = useState('');

	// The useSelect hook is better for retrieving data from the store.
	const { blocks, cats, tags, featuredImageID } = useSelect((select) => {
		return {
			blocks: select('core/block-editor').getBlocks(),
			cats: select('core/editor').getEditedPostAttribute('categories'),
			tags: select('core/editor').getEditedPostAttribute('tags'),
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
		// Assume the best.
		let lockPost = false;

		// Get the WordCount
		const wordCount = count(
			serialize(
				blocks.filter((block) => block.name === 'core/paragraph') // only allow paragraphs
			),
			'words'
		);
		setWordCountDisplay(wordCount);
		if (wordCount < REQUIRED_WORD_COUNT) {
			// If the word count is less than 250, lock the post saving.
			lockPost = true;
		}
		// Does the post have a featured image?
		if (featuredImageID === 0) {
			lockPost = true;
		}

		// Check that there a category assigned to the post.
		if (!cats.length || cats.includes(1)) {
			lockPost = true;
		}

		// Lock or enable saving
		if (lockPost === true) {
			lockPostSaving();
			disablePublishSidebar();
		} else {
			unlockPostSaving();
			enablePublishSidebar();
		}
	}, [blocks, featuredImageID, cats]);

	return (
		<Fragment>
			<PluginDocumentSettingPanel
				name="prepublish-checklist"
				title={__('Prepublish Checklist', 'oct-21-2021')}
				className="prepublish-checklist"
			>
				<WordCountDisplayComponent
					wordCount={wordCountDisplay}
					required={REQUIRED_WORD_COUNT}
				/>
				<FeaturedImageDisplay featuredImageID={featuredImageID} />
				<CategoriesDisplay categories={cats} />
			</PluginDocumentSettingPanel>
			<PluginPrePublishPanel>
				<WordCountDisplayComponent
					wordCount={wordCountDisplay}
					required={REQUIRED_WORD_COUNT}
				/>
				<FeaturedImageDisplay featuredImageID={featuredImageID} />
				<CategoriesDisplay categories={cats} />
			</PluginPrePublishPanel>
		</Fragment>
	);
};
registerPlugin('twitchstreams-prepublish', {
	icon: 'forms',
	render: Render,
});

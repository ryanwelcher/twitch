/* eslint-disable import/no-extraneous-dependencies */
/*global fetch*/
/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';

import { PanelBody, RangeControl, TextControl } from '@wordpress/components';

import { useEffect, useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { STORAGE_KEY, COMMIT_COUNT_MAX, COMMIT_COUNT_MIN } from './constants';
import commits from './commits';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.setAttributes
 * @param  root0.attributes
 * @param  root0.attributes.title
 * @param  root0.attributes.username
 * @param  root0.attributes.propCount
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({
	attributes: { title, username, propCount },
	setAttributes,
}) {
	// Full list of commits
	const [props, setProps] = useState();
	const [propsToDisplay, setPropsToDisplay] = useState();

	// Initial call to hydrate the commit list for a users.
	useEffect(() => {
		// A fresh block just inserted
		if (!username) {
			return;
		}
		const storedData = window.sessionStorage.getItem(
			`${STORAGE_KEY}_${username}`
		);
		if (storedData) {
			setProps(JSON.parse(storedData));
		} else {
			// Make the query
			// because I hit the limit
			// window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(commits));
			fetch(
				`https://api.github.com/repos/WordPress/Gutenberg/commits?author=${username}&per_page=${COMMIT_COUNT_MAX}`
			)
				.then((response) => response.json())
				.then((data) => {
					//set the data
					setProps(data);
					//Set the storage key
					window.sessionStorage.setItem(
						`${STORAGE_KEY}_${username}`,
						JSON.stringify(data)
					);
				});
		}
	}, [username]);

	useEffect(() => {
		if (props) {
			setPropsToDisplay(props.slice(0, propCount));
		}
	}, [props, propCount]);

	return (
		<section {...useBlockProps()}>
			<RichText
				tagName="h2"
				value={title}
				onChange={(newTitle) => setAttributes({ title: newTitle })}
				allowedFormats={['core/bold', 'core/italic']}
			/>
			{propsToDisplay ? (
				<ul>
					{propsToDisplay.map(({ sha, commit: { message } }) => {
						return (
							<li key={sha}>
								<a href="#">[#{message}]</a>
							</li>
						);
					})}
				</ul>
			) : (
				<p>Loading ...</p>
			)}

			<a href="#">View all tickets on Trac</a>
			<InspectorControls>
				<PanelBody title={__('Options', 'contributor-props')}>
					<TextControl
						label={__('Username', 'contributor-props')}
						value={username}
						onChange={(newUserName) =>
							setAttributes({ username: newUserName })
						}
					/>
					<RangeControl
						label="Prop count"
						value={propCount}
						onChange={(newPropCount) =>
							setAttributes({ propCount: newPropCount })
						}
						min={COMMIT_COUNT_MIN}
						max={COMMIT_COUNT_MAX}
					/>
				</PanelBody>
			</InspectorControls>
		</section>
	);
}

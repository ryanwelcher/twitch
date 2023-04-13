/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { useEntityRecords, store as coreStore } from '@wordpress/core-data';
import { SelectControl } from '@wordpress/components';

/**
 * FrontEnd
 */
const FrontEnd = () => {
	// Store the selected post type in state.
	const [ category, setCategory ] = useState();
	const [ tag, setTag ] = useState();

	// Categories
	const { records: cats, isResolving: catsIsResolving } = useEntityRecords(
		'taxonomy',
		'category'
	);

	// Tags
	const { records: tags, isResolving: tagsIsResolving } = useEntityRecords(
		'taxonomy',
		'post_tag'
	);

	//Main query
	const { records, isResolving } = useEntityRecords( 'postType', 'post', {
		per_page: 100,
		categories: [ category ],
		tags: [ tag ],
	} );

	return (
		<>
			{ records && (
				<div className="results">
					Results
					<ul>
						{ records.map( ( post ) => (
							<li key={ post.id }>{ post.title.rendered }</li>
						) ) }
					</ul>
				</div>
			) }
			{ cats && tags ? (
				<div className="controls">
					<SelectControl
						placeholder="Test"
						label={ __(
							'Categories',
							' bring-me-your-issues-mar-23-2023'
						) }
						value={ category }
						options={ [
							{ label: 'Choose', value: '' },
							...cats.map( ( { name, id } ) => {
								return { label: name, value: id };
							} ),
						] }
						onChange={ ( newCat ) => setCategory( newCat ) }
						__nextHasNoMarginBottom
					/>
					<SelectControl
						placeholder="Test"
						label={ __(
							'Tags',
							' bring-me-your-issues-mar-23-2023'
						) }
						value={ tag }
						options={ [
							{ label: 'Choose', value: '' },
							...tags.map( ( { name, id } ) => {
								return { label: name, value: id };
							} ),
						] }
						onChange={ ( newTag ) => setTag( newTag ) }
						__nextHasNoMarginBottom
					/>
				</div>
			) : (
				<div>Loading</div>
			) }
		</>
	);
};
export default FrontEnd;

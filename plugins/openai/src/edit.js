/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	Placeholder,
	TextControl,
	Spinner,
} from '@wordpress/components';

import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './editor.scss';
import { makeRequest } from './helpers';
import { ImagePreviews } from './components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const [ imageSrcs, setImageSrcs ] = useState( [] );
	const [ prompt, setPrompt ] = useState( '' );
	const [ isLoading, setIsLoading ] = useState( false );
	const [ firstRun, setFirstRun ] = useState( true );

	const placeHolderText = isLoading
		? __( 'Generating images...' )
		: __( 'Generate images' );

	const buttonText = firstRun
		? __( 'Generate images' )
		: __( 'Generate more images' );

	return (
		<div { ...useBlockProps() }>
			<ImagePreviews imageSrcs={ imageSrcs } />
			<Placeholder label={ placeHolderText } className="test">
				<div className="controls">
					{ isLoading ? (
						<Spinner />
					) : (
						<>
							<TextControl
								value={ prompt }
								onChange={ ( newPrompt ) =>
									setPrompt( newPrompt )
								}
							/>
							<Button
								variant="secondary"
								onClick={ async () => {
									if ( prompt ) {
										setIsLoading( true );
										const imageRequest = await makeRequest(
											{
												prompt,
												size: '1024x1024',
											}
										);
										setImageSrcs( imageRequest );
										setIsLoading( false );
										setFirstRun( false );
									}
								} }
							>
								{ buttonText }
							</Button>
						</>
					) }
				</div>
			</Placeholder>
		</div>
	);
}

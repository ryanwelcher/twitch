/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import { Button, TextControl, Spinner, PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { cloud } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { makeRequest } from './helpers';
import { ImagePreviews } from './components';
import './editor.scss';

const OpenAIUserInterface = () => {
	const [ imageSrcs, setImageSrcs ] = useState( [] );
	const [ prompt, setPrompt ] = useState( '' );
	const [ isLoading, setIsLoading ] = useState( false );
	const [ firstRun, setFirstRun ] = useState( true );

	const placeHolderText = isLoading
		? __( 'Generating images…' )
		: __( 'Generate images' );

	const buttonText = firstRun
		? __( 'Generate images' )
		: __( 'Generate more images' );

	return (
		<PluginSidebar
			title={ __( 'OpenAI Image Generator', 'openai' ) }
			name="openai-image-generator"
			className="openai-image-generator"
			icon={ cloud }
		>
			<PanelBody>
				{ isLoading ? (
					<Spinner />
				) : (
					<>
						<h2>{ placeHolderText }</h2>
						<TextControl
							placeholder={ __(
								'Enter a prompt to generate images from',
								'openai'
							) }
							value={ prompt }
							onChange={ ( newPrompt ) => setPrompt( newPrompt ) }
						/>
						<Button
							variant="secondary"
							onClick={ async () => {
								if ( prompt ) {
									setIsLoading( true );
									const imageRequest = await makeRequest( {
										prompt,
										size: '1024x1024',
									} );
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
				<ImagePreviews imageSrcs={ imageSrcs } prompt={ prompt } />
			</PanelBody>
		</PluginSidebar>
	);
};

// registers the slotfill.
registerPlugin( 'openai', { render: OpenAIUserInterface } );

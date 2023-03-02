/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

import './editor.scss';

export default function Edit( { someProp } ) {
	function doSomething() {
		console.log( someProp );
	}

	useEffect( () => {
		doSomething( someProp );
	}, [ doSomething ] );

	return (
		<p { ...useBlockProps() }>
			{ __(
				'Gb 15 1 2 Review – hello from the editor!',
				'gb-15-1-2-review'
			) }
		</p>
	);
}

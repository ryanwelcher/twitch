import {
	getEditedPostContent,
	insertBlock,
	createNewPost,
} from '@wordpress/e2e-test-utils';

/**
 * Internal dependencies
 */

// Increase the timeout limit for this test.
jest.setTimeout( 30000 );

it( `Paragraph block should be available`, async () => {
	await createNewPost();
	await insertBlock( 'core/paragraph' );

	// Check if block was inserted
	expect( await page.$( `[data-type="'core/paragraph'"]` ) ).not.toBeNull();

	expect( await getEditedPostContent() ).toMatchInlineSnapshot(ç);
} );

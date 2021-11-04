/**
 * WordPress dependencies
 */
import {
	createNewPost,
	insertBlock,
	getEditedPostContent,
	getAllBlocks,
} from '@wordpress/e2e-test-utils';

// Increase the timeout limit for this test.
jest.setTimeout(30000);

describe('Block 1 Tests', () => {
	beforeAll(async () => {
		// Create a post
		await createNewPost();
		await insertBlock('Oct 28 2021');
	});

	it('block is inserted with empty message attribute', async () => {
		// Was the block inserted?
		expect(
			await page.$('[data-type="create-block/oct-28-2021"]')
		).not.toBeNull();

		// Check the contents of the block output.
		expect(await getEditedPostContent()).toMatchInlineSnapshot(`
		"<!-- wp:create-block/oct-28-2021 -->
		<p class=\\"wp-block-create-block-oct-28-2021\\"></p>
		<!-- /wp:create-block/oct-28-2021 -->"
	`);
	});

	it('updates the message attribute', async () => {
		// const blocks = await wpDataSelect("core/block-editor", "getBlocks");
		// In the live stream, I used the code above to get the blocks, turns out that getAllBlocks does the same thing.
		const blocks = await getAllBlocks();

		const { clientId } = blocks.shift();

		await page.waitForSelector(`#block-${clientId}`);
		await page.focus(`#block-${clientId}`);
		await page.keyboard.type('This is a test!');

		// Was the block inserted?
		expect(blocks).not.toBeNull();

		// Check the contents of the block output.
		expect(await getEditedPostContent()).toMatchInlineSnapshot(`
		"<!-- wp:create-block/oct-28-2021 {\\"message\\":\\"This is a test!\\"} -->
		<p class=\\"wp-block-create-block-oct-28-2021\\">This is a test!</p>
		<!-- /wp:create-block/oct-28-2021 -->"
	`);
	});
});

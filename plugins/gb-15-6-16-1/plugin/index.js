import { __ } from '@wordpress/i18n';
import { store } from '@wordpress/commands';
import { dispatch } from '@wordpress/data';
import { plus } from '@wordpress/icons';

const command = {
	name: 'add new post',
	label: __('Custom context command'),
	icon: plus,
	context: 'site-editor',
	callback: () => {
		document.location.href = 'post-new.php';
	},
};

console.log('asdfa');

dispatch(store).registerCommand(command);

// wp.commands.useCommand({
// 	name: 'add new post',
// 	label: __('Add new post'),
// 	icon: 'smiley',
// 	callback: () => {
// 		document.location.href = 'post-new.php';
// 	},
// });

import { Icon, check, closeSmall } from '@wordpress/icons';

const CategoriesDisplay = ({ categories }) => {
	const locked = !categories.length || categories.includes(1);

	const generateMessage = () => {
		if (locked) {
			if (!categories.length) {
				return 'Please assign a category.';
			}

			// if (categories.includes(1)) {
			// 	return 'Categories cannot include Uncategorized';
			// }
		}
		return 'Categories assigned correctly';
	};
	return (
		<div style={{ display: 'flex' }}>
			{!locked && <Icon icon={check} />}
			{locked && <Icon icon={closeSmall} />}
			<span style={{ marginTop: '3px' }}>{generateMessage()}</span>
		</div>
	);
};

export default CategoriesDisplay;

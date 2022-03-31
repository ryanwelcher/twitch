/**
 * WordPress dependencies
 */
import { TextControl } from '@wordpress/components';

const WordCount = () => {
	return (
		<TextControl
			label="Additional CSS Class"
			value={className}
			onChange={(value) => setClassName(value)}
		/>
	);
};
export default WordCount;

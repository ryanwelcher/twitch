import { Icon, check, closeSmall } from '@wordpress/icons';
const WordCountDisplayComponent = ({ wordCount, required }) => {
	const locked = wordCount < required;
	return (
		<div style={{ display: 'flex' }}>
			{!locked && <Icon icon={check} />}
			{locked && <Icon icon={closeSmall} />}
			<span
				style={{ marginTop: '3px' }}
			>{`WordCount: ${wordCount}`}</span>
		</div>
	);
};

export default WordCountDisplayComponent;

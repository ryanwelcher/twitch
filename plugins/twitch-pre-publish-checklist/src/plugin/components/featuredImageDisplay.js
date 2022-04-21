import { Icon, check, closeSmall } from '@wordpress/icons';

const FeaturedImageDisplay = ({ featuredImageID }) => {
	const locked = featuredImageID === 0;
	return (
		<div style={{ display: 'flex' }}>
			{!locked && <Icon icon={check} />}
			{locked && <Icon icon={closeSmall} />}
			<span style={{ marginTop: '3px' }}>{`Featured Image`}</span>
		</div>
	);
};

export default FeaturedImageDisplay;

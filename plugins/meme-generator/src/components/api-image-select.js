/**
 *  WordPress dependencies
 */
import { Spinner } from '@wordpress/components';

const ApiImageSelect = ({ storedImages, setAttributes }) => {
	if (storedImages.length < 1) {
		return <Spinner />;
	}

	return (
		<div className="image-select-wrapper">
			{storedImages.map((meme) => {
				const { id, url, name } = meme;
				return (
					<button
						className="image-select"
						key={id}
						onClick={() =>
							setAttributes({
								image: meme,
							})
						}
					>
						<img src={url} width="100" alt={name} />
					</button>
				);
			})}
		</div>
	);
};

export default ApiImageSelect;

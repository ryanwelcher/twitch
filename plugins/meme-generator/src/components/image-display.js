const ImageDisplay = ({ images, setAttributes }) => {
	if (!images) {
		return null;
	}
	return (
		<div className="image-select-wrapper">
			{images.map((meme) => {
				const {
					id,
					source_url: url,
					title: { rendered: imageAlt },
					media_details: { width, height },
				} = meme;
				return (
					<button
						className="image-select"
						key={id}
						onClick={() =>
							setAttributes({
								image: {
									id,
									url,
									name: imageAlt,
									width,
									height,
								},
							})
						}
					>
						<img src={url} width="100" alt={imageAlt} />
					</button>
				);
			})}
		</div>
	);
};
export default ImageDisplay;

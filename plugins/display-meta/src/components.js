/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import {
	Draggable,
	Panel,
	PanelBody,
	DropZone,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { Icon, more } from '@wordpress/icons';

const Box = (props) => {
	return <div {...props} />;
};

export const MyDraggable = ({ onDragStart, onDragEnd }) => {
	const [isDragging, setDragging] = useState(false);
	return (
		<div>
			<p>Is Dragging? {isDragging ? 'Yes' : 'No'}</p>
			<div id="draggable-example-box">
				<Draggable elementId="draggable-example-box">
					{({ onDraggableStart, onDraggableEnd }) => {
						const handleOnDragStart = (event) => {
							setDragging(true);
							onDraggableStart(event);
						};
						const handleOnDragEnd = (event) => {
							setDragging(false);
							onDraggableEnd(event);
						};

						return (
							<Box
								onDragStart={handleOnDragStart}
								onDragEnd={handleOnDragEnd}
								draggable
							>
								<Icon icon={more} />
							</Box>
						);
					}}
				</Draggable>
			</div>
		</div>
	);
};

const MyDropZone = () => {
	const [hasDropped, setHasDropped] = useState(false);

	return (
		<div>
			{hasDropped ? 'Dropped!' : 'Drop something here'}
			<DropZone
				onFilesDrop={() => setHasDropped(true)}
				onHTMLDrop={() => setHasDropped(true)}
				onDrop={() => setHasDropped(true)}
			/>
		</div>
	);
};

export const MetaInterfaceType = ({
	metaKey,
	metaType,
	nativeMeta,
	acfMeta,
	acfTypes,
	onChange,
}) => {
	if (!acfTypes || !metaKey) {
		return null;
	}

	const determineFormat = (metaKey) => {
		if (acfTypes[metaKey].format) {
			return acfTypes[metaKey].format;
		}

		if (acfTypes[metaKey].type.includes('string')) {
			return 'text';
		}

		if (acfTypes[metaKey].type.includes('number')) {
			return 'number';
		}

		return null;
	};

	const format = determineFormat(metaKey);

	if (['uri', 'text', 'email'].includes(format)) {
		return (
			<RichText
				value={
					metaType && metaType === 'native'
						? nativeMeta[metaKey]
						: acfMeta[metaKey]
				}
				onChange={onChange}
			/>
		);
	}

	if (format === 'number') {
		return (
			<NumberControl
				value={
					metaType && metaType === 'native'
						? nativeMeta[metaKey]
						: acfMeta[metaKey]
				}
				onChange={onChange}
			/>
		);
	}

	return null;
};

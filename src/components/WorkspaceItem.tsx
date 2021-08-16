import { useState } from 'react';
import faker from 'faker';

import { applyClassNameByBoolean } from '@/lib/style';
import Icon from '@/lib/icon';

interface Props {}

const WorkspaceItem: React.FC<Props> = () => {
	const dummyWord = faker.lorem.word();
	const [isHovered, setHovered] = useState(false);
	const onItemMouseEnter = () => {
		setHovered(true);
	};

	const onItemMouseLeave = () => {
		setHovered(false);
	};

	const classes = applyClassNameByBoolean(
		isHovered,
		'bg-gray-200',
		'bg-white',
		'cursor-pointer py-2.5 px-6 font-light flex flex-row items-center',
	);

	const [isIconHovered, setIconHovered] = useState(false);

	const onIconMouseEnter = () => {
		setIconHovered(true);
	};
	const onIconMouseLeave = () => {
		setIconHovered(false);
	};

	const iconClasses = applyClassNameByBoolean(
		isIconHovered,
		'bg-gray-300',
		'bg-gray-200',
		'w-10 ml-2 px-1 rounded-sm',
	);

	return (
		<div
			className={classes}
			onMouseEnter={onItemMouseEnter}
			onMouseLeave={onItemMouseLeave}
		>
			<div className="truncate select-none">
				{`WorkspaceWorkspaceWorkspaceWorkspace - ${dummyWord}`}
			</div>
			{isHovered && (
				<Icon
					name="dotsMore"
					className={iconClasses}
					onClick={() => console.log('헤으응')}
					onMouseEnter={onIconMouseEnter}
					onMouseLeave={onIconMouseLeave}
				/>
			)}
		</div>
	);
};

export default WorkspaceItem;

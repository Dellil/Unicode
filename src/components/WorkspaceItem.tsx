import React, { useState } from 'react';
import faker from 'faker';
import { Menu, Item, Separator, useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';
import { applyClassNameByBoolean } from '@/lib/style';
import Icon from '@/lib/icon';

const MENU_ID = 'TEMP';

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

	const { show } = useContextMenu({
		id: MENU_ID,
	});

	function handleContextMenu(
		e:
			| React.MouseEvent<HTMLDivElement, MouseEvent>
			| React.MouseEvent<HTMLElement>,
	) {
		e.preventDefault();
		show(e);
	}

	return (
		<div
			className={classes}
			onMouseEnter={onItemMouseEnter}
			onMouseLeave={onItemMouseLeave}
			onContextMenu={handleContextMenu}
		>
			<div className="truncate select-none">
				{`WorkspaceWorkspaceWorkspaceWorkspace - ${dummyWord}`}
			</div>
			{isHovered && (
				<Icon
					name="dotsMore"
					className={iconClasses}
					onClick={handleContextMenu}
					onMouseEnter={onIconMouseEnter}
					onMouseLeave={onIconMouseLeave}
				/>
			)}
			<Menu id={MENU_ID}>
				<Item className="text-red-300">삭제</Item>
				<Separator />
				<Item>이름 바꾸기</Item>
			</Menu>
		</div>
	);
};

export default WorkspaceItem;

import React, { useState } from 'react';
import { Menu, Item, Separator, useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';
import Modal from 'react-modal';

import { applyClassNameByBoolean } from '@/lib/style';
import Icon from '@/lib/icon';
import { useStores } from '@/stores';

const MENU_ID = 'TEMP';

interface Props {
	title: string;
	id: number;
}

const WorkspaceItem: React.FC<Props> = ({ title, id }) => {
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
		'cursor-pointer py-2.5 px-6 font-light flex flex-row items-center justify-between',
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

	// id must be unique!
	const { show } = useContextMenu({
		id: `${MENU_ID}+${id}`,
	});

	function handleContextMenu(
		e:
			| React.MouseEvent<HTMLDivElement, MouseEvent>
			| React.MouseEvent<HTMLElement>,
	) {
		e.preventDefault();
		console.log('---우클릭---');
		console.log(title, id);
		show(e);
	}

	const { workspaceStore } = useStores();

	const [renameModal, setRenameModal] = useState(false);
	const onRenameClick = () => {
		console.log('---이름변경---');
		console.log(title, id);
		setRenameModal(true);
	};
	const [renameInput, setRenameInput] = useState('');
	const onRenameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRenameInput(e.currentTarget.value);
	};
	const onRenameButtonClick = () => {
		setRenameModal(false);
		setRenameInput('');
		workspaceStore.renameWorkspace({ title: renameInput, id });
	};

	return (
		<div
			className={classes}
			onMouseEnter={onItemMouseEnter}
			onMouseLeave={onItemMouseLeave}
			onContextMenu={handleContextMenu}
		>
			<div className="truncate select-none">{title}</div>
			{isHovered && (
				<Icon
					name="dotsMore"
					className={iconClasses}
					onClick={handleContextMenu}
					onMouseEnter={onIconMouseEnter}
					onMouseLeave={onIconMouseLeave}
				/>
			)}
			<Menu id={`${MENU_ID}+${id}`}>
				<Item className="text-red-300">삭제</Item>
				<Separator />
				<Item onClick={onRenameClick}>이름 바꾸기</Item>
			</Menu>
			<Modal isOpen={renameModal} onRequestClose={() => setRenameModal(false)}>
				<div>
					<input
						type="text"
						value={renameInput}
						onChange={onRenameChange}
						className="border-2"
					/>
					<button className="ml-2 border-2" onClick={onRenameButtonClick}>
						워크스페이스 이름 변경하기
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default WorkspaceItem;

import React, { useState } from 'react';
import { Menu, Item, Separator, useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';
import Modal from 'react-modal';

import { applyClassNameByBoolean } from '@/lib/style';
import Icon from '@/lib/icon';
import { useStores } from '@/stores';
import Subjects from '@/components/Subjects';

const MENU_ID = 'TEMP';

interface Props {
	title: string;
	id: number;
	currentWorkspaceId: number;
	onItemClick: () => void;
}

const WorkspaceItem: React.FC<Props> = ({
	title,
	id,
	currentWorkspaceId,
	onItemClick,
}) => {
	const isCurrentWorkspace = currentWorkspaceId === id;
	const [isHovered, setHovered] = useState(false);
	const onItemMouseEnter = () => {
		setHovered(true);
	};

	const onItemMouseLeave = () => {
		setHovered(false);
	};

	const classes = applyClassNameByBoolean(
		isHovered,
		'bg-gray-300',
		isCurrentWorkspace ? 'bg-gray-200' : 'bg-white',
		'cursor-pointer py-2.5 px-6 font-light',
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
		'bg-gray-400',
		'bg-gray-300',
		'w-10 ml-2 px-1 rounded-sm',
	);

	/*
	 * @todo id must be unique!
	 */
	const { show } = useContextMenu({
		id: `${MENU_ID}+${id}`,
	});

	function handleContextMenu(
		e:
			| React.MouseEvent<HTMLDivElement, MouseEvent>
			| React.MouseEvent<HTMLElement>,
	) {
		e.preventDefault();
		show(e);
	}

	const { workspaceStore } = useStores();

	const [renameModal, setRenameModal] = useState(false);
	const onRenameClick = () => {
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

	const [deleteModal, setDeleteModal] = useState(false);
	const onDeleteClick = () => {
		setDeleteModal(true);
	};
	const onDeleteButtonClick = () => {
		setDeleteModal(false);
		workspaceStore.deleteWorkspace(id);
	};

	return (
		<div
			className={classes}
			onMouseEnter={onItemMouseEnter}
			onMouseLeave={onItemMouseLeave}
			onContextMenu={handleContextMenu}
			onClick={onItemClick}
		>
			<div className="flex flex-row items-center justify-between">
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
			</div>
			{isCurrentWorkspace && <Subjects workspaceId={id} />}

			<Menu id={`${MENU_ID}+${id}`}>
				<Item className="text-red-300" onClick={onDeleteClick}>
					삭제
				</Item>
				<Separator />
				<Item onClick={onRenameClick}>이름 바꾸기</Item>
			</Menu>

			<Modal isOpen={deleteModal} onRequestClose={() => setDeleteModal(false)}>
				<div>
					<div>진짜 삭제할꼬야?</div>
					<button className="ml-2 border-2" onClick={onDeleteButtonClick}>
						삭제하기
					</button>
				</div>
			</Modal>
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

import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Menu, Item, Separator, useContextMenu } from 'react-contexify';
import Modal from 'react-modal';

import Icon from '@/lib/icon';
import { applyClassNameByBoolean } from '@/lib/style';
import { useStores } from '@/stores';

const MENU_ID = 'SUBJECTS';
interface Props {
	workspaceId: string;
}

const Subjects: React.FC<Props> = ({ workspaceId }) => {
	const { subjectStore } = useStores();
	const subjects = subjectStore.getSubjects(workspaceId);

	const containerClasses = applyClassNameByBoolean(
		subjects.length > 0,
		'pt-4',
		'',
		'select-none',
	);
	return (
		<div className={containerClasses}>
			<ul>
				{subjects.map(subject => (
					<SubjectItem
						key={subject.id}
						id={subject.id}
						workspaceId={workspaceId}
					>
						{subject.title}
					</SubjectItem>
				))}
			</ul>
		</div>
	);
};

interface ItemProps {
	workspaceId: string;
	id: string;
}
const SubjectItem: React.FC<ItemProps> = ({ id, workspaceId, children }) => {
	const { testPaperStore } = useStores();
	const onSubjectItemClick = () => {
		testPaperStore.setSelectedSubjectIdForFindingTestPapers(id);
	};
	/**
	 * @todo hover hooks로 만들기
	 */
	const [isHovered, setHovered] = useState(false);
	const onItemMouseEnter = () => {
		setHovered(true);
	};

	const onItemMouseLeave = () => {
		setHovered(false);
	};

	const classes = applyClassNameByBoolean(
		isHovered,
		'bg-gray-50',
		'bg-gray-transparent',
		'text-sm h-10 flex flex-row justify-between items-center',
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
		'bg-gray-200',
		'bg-gray-50',
		'w-10 ml-2 px-1 mr-3 rounded-sm',
	);

	const { show } = useContextMenu({
		id: `${MENU_ID}_${id}`,
	});

	function handleContextMenu(
		e:
			| React.MouseEvent<HTMLDivElement, MouseEvent>
			| React.MouseEvent<HTMLElement>,
	) {
		e.preventDefault();
		e.stopPropagation();
		show(e);
	}

	const { subjectStore } = useStores();

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
		subjectStore.renameSubject(id, renameInput, workspaceId);
	};

	const [deleteModal, setDeleteModal] = useState(false);
	const onDeleteClick = () => {
		setDeleteModal(true);
	};
	const onDeleteButtonClick = () => {
		setDeleteModal(false);
		subjectStore.deleteSubject(id, workspaceId);
	};

	const [createTestInput, setCreateTestInput] = useState('');
	const onCreateTestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCreateTestInput(e.currentTarget.value);
	};

	const [createTestModal, setCreateTestModal] = useState(false);
	const onCreateTestClick = () => {
		setCreateTestModal(true);
	};
	const onCreateTestButtonClick = () => {
		setCreateTestModal(false);
		testPaperStore.createTestPaper(createTestInput);
		setCreateTestInput('');
	};

	return (
		<li
			onMouseEnter={onItemMouseEnter}
			onMouseLeave={onItemMouseLeave}
			onContextMenu={handleContextMenu}
		>
			<div onClick={onSubjectItemClick} className={classes}>
				<span className="px-6 truncate block">{children}</span>
				{isHovered && (
					<Icon
						onMouseEnter={onIconMouseEnter}
						onClick={handleContextMenu}
						onMouseLeave={onIconMouseLeave}
						className={iconClasses}
						name="dotsMore"
					/>
				)}
			</div>
			<Menu id={`${MENU_ID}_${id}`}>
				<Item className="text-red-300" onClick={onDeleteClick}>
					삭제
				</Item>
				<Separator />
				<Item onClick={onRenameClick}>이름 바꾸기</Item>
				<Separator />
				<Item onClick={onCreateTestClick}>테스트 생성하기</Item>
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
						주제 이름 변경하기
					</button>
				</div>
			</Modal>
			<Modal
				isOpen={createTestModal}
				onRequestClose={() => setCreateTestModal(false)}
			>
				<div>
					<input
						type="text"
						value={createTestInput}
						onChange={onCreateTestChange}
						className="border-2"
					/>
					<button className="ml-2 border-2" onClick={onCreateTestButtonClick}>
						테스트 생성하기
					</button>
				</div>
			</Modal>
		</li>
	);
};

export default observer(Subjects);

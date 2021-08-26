import { useState } from 'react';
import { Menu, Item, Separator, useContextMenu } from 'react-contexify';
import Modal from 'react-modal';

import { useStores } from '@/stores';
import Icon from '@/lib/icon';

const MENU_ID = 'SUBJECTS';
interface Props {
	testPaper: { id: string; title: string };
}

const TestPaperItem: React.FC<Props> = ({ testPaper }) => {
	const { testPaperStore } = useStores();

	// 이름 변경
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
		testPaperStore.renameTestPaper(testPaper.id, renameInput);
	};

	// 삭제
	const [deleteModal, setDeleteModal] = useState(false);
	const onDeleteClick = () => {
		setDeleteModal(true);
	};
	const onDeleteButtonClick = () => {
		setDeleteModal(false);
		testPaperStore.deleteTestPaper(testPaper.id);
	};

	const { show } = useContextMenu({
		id: `${MENU_ID}_${testPaper.id}`,
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

	return (
		<>
			<div
				className="w-52 h-60 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
				onContextMenu={handleContextMenu}
			>
				<div className="w-full h-48 bg-transparent flex flex-row justify-center items-center border-b-2 px-6">
					<div className="truncate">{`${testPaper.title}`}</div>
				</div>
				<div className="h-12 bg-transparent flex flex-row flex-row-reverse items-center">
					<div onClick={handleContextMenu}>
						<Icon name="dotsMore" className="mr-3 text-gray-700" />
					</div>
				</div>
				<Menu id={`${MENU_ID}_${testPaper.id}`}>
					<Item className="text-red-300" onClick={onDeleteClick}>
						삭제
					</Item>
					<Separator />
					<Item onClick={onRenameClick}>이름 바꾸기</Item>
				</Menu>
			</div>
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
						테스트지 이름 변경하기
					</button>
				</div>
			</Modal>
		</>
	);
};

export default TestPaperItem;

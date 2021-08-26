import { useState } from 'react';
import Modal from 'react-modal';

import { useStores } from '@/stores';
import Icon from '@/lib/icon';

interface Props {}

const TestPaperCreateButton: React.FC<Props> = () => {
	const { testPaperStore } = useStores();

	const [createTestPaperInput, setCreateTestPaperInput] = useState('');
	const onCreateTestPaperChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCreateTestPaperInput(e.currentTarget.value);
	};

	const [createTestPaperModal, setCreateTestPaperModal] = useState(false);
	const onCreateTestClick = () => {
		setCreateTestPaperModal(true);
	};
	const onCreateTestButtonClick = () => {
		setCreateTestPaperModal(false);
		testPaperStore.createTestPaper(createTestPaperInput);
		setCreateTestPaperInput('');
	};
	return (
		<>
			<div
				className="w-52 h-60 bg-transparent shadow-md rounded-lg border-dashed border-4 cursor-pointer hover:shadow-lg transition-shadow"
				onClick={onCreateTestClick}
			>
				<div className="h-full flex flex-row justify-center items-center">
					<Icon name="plus" className="text-gray-600" />
				</div>
			</div>
			<Modal
				isOpen={createTestPaperModal}
				onRequestClose={() => setCreateTestPaperModal(false)}
			>
				<div>
					<input
						type="text"
						value={createTestPaperInput}
						onChange={onCreateTestPaperChange}
						className="border-2"
					/>
					<button className="ml-2 border-2" onClick={onCreateTestButtonClick}>
						테스트지 생성하기
					</button>
				</div>
			</Modal>
		</>
	);
};

export default TestPaperCreateButton;

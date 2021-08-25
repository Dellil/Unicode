import { useState } from 'react';
import Modal from 'react-modal';

import { useStores } from '@/stores';
import Icon from '@/lib/icon';

interface Props {}

const TestCreateButton: React.FC<Props> = () => {
	const { testStore } = useStores();

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
		testStore.createTest(createTestInput);
		setCreateTestInput('');
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
		</>
	);
};

export default TestCreateButton;

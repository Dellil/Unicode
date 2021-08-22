import { useState } from 'react';
import Modal from 'react-modal';

import Icon from '@/lib/icon';
import { useStores } from '@/stores';

interface Props {}

const EmptyExam: React.FC<Props> = () => {
	const [isModalOpened, setModalOpened] = useState(false);
	const onEmptyExamClick = () => {
		setModalOpened(true);
	};

	const { testStore } = useStores();
	const [createInput, setCreateInput] = useState('');
	const onCreateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCreateInput(e.currentTarget.value);
	};
	const onCreateButtonClick = () => {
		setModalOpened(false);
		testStore.createTest(createInput);
		setCreateInput('');
	};

	return (
		<>
			<div
				className="w-full h-full flex flex-col justify-center items-center cursor-pointer"
				onClick={onEmptyExamClick}
			>
				<IllustrationContainer>
					<Icon
						name="emptyStateIllustration"
						className="filter grayscale w-1/2"
					/>
				</IllustrationContainer>
				<span className="text-gray-800 select-none">Add New Test!</span>
			</div>
			<Modal
				isOpen={isModalOpened}
				onRequestClose={() => setModalOpened(false)}
				shouldCloseOnOverlayClick
			>
				<div>
					<div>무슨 테스트야?</div>
					<input
						type="text"
						value={createInput}
						onChange={onCreateInputChange}
						className="border-2"
					/>
					<button onClick={onCreateButtonClick}>생성하기!</button>
				</div>
			</Modal>
		</>
	);
};

const IllustrationContainer: React.FC<{}> = ({ children }) => {
	return (
		<div className="flex flex-row w-full justify-center items-center">
			{children}
		</div>
	);
};

export default EmptyExam;

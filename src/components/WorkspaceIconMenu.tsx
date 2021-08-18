import { useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';

import Icon from '@/lib/icon';
import { useStores } from '@/stores';

interface Props {}

const WorkspaceIconMenu: React.FC<Props> = () => {
	const [onPlusButtonClicked, setPlusButtonClicked] = useState(false);
	const [input, setInput] = useState('');

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.currentTarget.value);
	};

	const { workspaceStore, subjectStore } = useStores();
	const onCreateButtonClick = () => {
		const id = uuidv4();
		workspaceStore.addWorkspace(input, id);
		subjectStore.addEmptySubject(id);
		setInput('');
		setPlusButtonClicked(false);
	};

	return (
		<div className="flex flex-row">
			<div
				className="p-3 hover:bg-gray-200 rounded-sm cursor-pointer transition"
				onClick={() => setPlusButtonClicked(true)}
			>
				<Icon name="plus" className="w-4 h-4 text-gray-500" />
			</div>
			<div className="p-3 hover:bg-gray-200 rounded-sm cursor-pointer transition">
				<Icon name="search" className="w-4 h-4 text-gray-500" />
			</div>

			<Modal
				isOpen={onPlusButtonClicked}
				onRequestClose={() => setPlusButtonClicked(false)}
			>
				<div>
					<input
						type="text"
						value={input}
						onChange={onInputChange}
						className="border-2"
					/>
					<button className="ml-2 border-2" onClick={onCreateButtonClick}>
						워크스페이스 만들기
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default WorkspaceIconMenu;

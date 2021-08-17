import { useState } from 'react';
import Modal from 'react-modal';

import Icon from '@/lib/icon';
import { useStores } from '@/stores';

interface Props {}

const WorkspaceIconMenu: React.FC<Props> = () => {
	const [onPlusButtonClicked, setPlusButtonClicked] = useState(false);
	const [input, setInput] = useState('');

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.currentTarget.value);
	};

	const { workspaceStore } = useStores();
	const onCreateButtonClick = () => {
		workspaceStore.addWorkspace(input);
		setInput('');
		setPlusButtonClicked(false);
	};

	return (
		<div className="flex flex-row">
			<div className="p-3 hover:bg-gray-200 rounded-sm cursor-pointer transition">
				<Icon
					name="plus"
					className="w-4 h-4 text-gray-500"
					onClick={() => setPlusButtonClicked(true)}
				/>
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

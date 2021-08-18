import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/stores';
import WorkspaceTop from '@/components/WorkspaceTop';
import WorkspaceItem from '@/components/WorkspaceItem';

interface Props {}

const Workspaces: React.FC<Props> = () => {
	const { workspaceStore, subjectStore } = useStores();
	const [currentWorkspace, setCurrentWorkspace] = useState('');
	const onWorkspaceItemClick = (itemId: string) => () => {
		setCurrentWorkspace(itemId);
	};

	useEffect(() => {
		subjectStore.initSubjects(workspaceStore.workspaces);
	}, []);

	return (
		<div className="w-72 border-r-2 h-full">
			<WorkspaceTop />
			<WorkspaceContainer>
				{workspaceStore.workspaces.map(workspace => (
					<WorkspaceItem
						{...workspace}
						key={workspace.id}
						onItemClick={onWorkspaceItemClick(workspace.id)}
						currentWorkspaceId={currentWorkspace}
					/>
				))}
			</WorkspaceContainer>
		</div>
	);
};

const WorkspaceContainer: React.FC<Props> = ({ children }) => {
	return <div className="mt-7">{children}</div>;
};

export default observer(Workspaces);

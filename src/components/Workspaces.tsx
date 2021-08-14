import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '@/stores';
import WorkspaceTop from '@/components/WorkspaceTop';
import WorkspaceContainer from '@/components/WorkspaceContainer';
import Workspace from '@/components/Workspace';

interface Props {}

const START = 1;
const END = 4;

const Workspaces: React.FC<Props> = () => {
	const { workspaceStore } = useStores();
	const [workspaces] = useState(
		Array.from({ length: END }, (_, i) => `${i + START}번째 Workspace`),
	);
	const [currentWorkspace, setCurrentWorkspace] = useState('');

	useEffect(() => {
		workspaceStore.setWorkspaces(workspaces);
	}, [workspaceStore, workspaces]);

	const onWorkspaceClick = (workspaceName: string) => () => {
		setCurrentWorkspace(workspaceName);
	};

	return (
		<div className="w-72 border-r-2 h-full">
			<WorkspaceTop />
			<WorkspaceContainer>
				{workspaceStore.workspaces.map(v => (
					<Workspace
						title={v}
						key={v}
						onWorkspaceClick={onWorkspaceClick(v)}
						currentWorkspace={currentWorkspace}
					/>
				))}
			</WorkspaceContainer>
		</div>
	);
};

export default observer(Workspaces);

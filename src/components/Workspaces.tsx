import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '@/stores';
import WorkspaceTop from '@/components/WorkspaceTop';
import Workspace from '@/components/Workspace';

interface Props {}

const Workspaces: React.FC<Props> = () => {
	const onWorkspaceClick = (workspaceName: string) => () => {};

	return (
		<div className="w-72 border-r-2 h-full">
			<WorkspaceTop />
			<WorkspaceContainer>
				{/* {workspaceStore.workspaces.map(v => (
					<Workspace
						title={v}
						key={v}
						onWorkspaceClick={onWorkspaceClick(v)}
						currentWorkspace={currentWorkspace}
					/>
				))} */}
			</WorkspaceContainer>
		</div>
	);
};

const WorkspaceContainer: React.FC<Props> = ({ children }) => {
	return <div className="mt-7">{children}</div>;
};

export default observer(Workspaces);

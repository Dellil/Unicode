import { useState } from 'react';

import WorkspaceTop from '@/components/WorkspaceTop';
import WorkspaceContainer from '@/components/WorkspaceContainer';
import Workspace from '@/components/Workspace';

interface Props {}

const START = 1;
const END = 4;

const Workspaces: React.FC<Props> = () => {
	const [workspaces, setWorkspaces] = useState(
		Array.from({ length: END }, (_, i) => `${i + START}번째 Workspace`),
	);

	return (
		<div className="w-80 border-r-2 h-full">
			<WorkspaceTop />
			<WorkspaceContainer>
				{workspaces.map(v => (
					<Workspace title={v} key={v} />
				))}
			</WorkspaceContainer>
		</div>
	);
};

export default Workspaces;

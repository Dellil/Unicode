import WorkspaceTitle from '@/components/WorkspaceTitle';
import Workspace from '@/components/Workspace';

interface Props {}

const Workspaces: React.FC<Props> = () => {
	return (
		<div className="w-80 border-r-2 px-6 h-full">
			<WorkspaceTitle />
			<Workspace />
		</div>
	);
};

export default Workspaces;

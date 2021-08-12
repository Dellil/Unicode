import WorkspaceIconMenu from '@/components/WorkspaceIconMenu';

interface Props {}

const WorkspaceTitle: React.FC<Props> = () => {
	return (
		<div className="pt-10">
			<div className="font-mono text-lg">Workspaces</div>
			<WorkspaceIconMenu />
		</div>
	);
};

export default WorkspaceTitle;

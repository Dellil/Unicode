import WorkspaceIconMenu from '@/components/WorkspaceIconMenu';

interface Props {}

const WorkspaceTitle: React.FC<Props> = () => {
	return (
		<div className="pt-10 flex flex-row items-center justify-between">
			<div className="font-mono text-base text-gray-900">Workspaces</div>
			<WorkspaceIconMenu />
		</div>
	);
};

export default WorkspaceTitle;

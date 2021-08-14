import WorkspaceIconMenu from '@/components/WorkspaceIconMenu';

interface Props {}

const WorkspaceTop: React.FC<Props> = () => {
	return (
		<div className="pt-11 flex flex-row items-center justify-between px-6">
			<div className="font-mono text-base font-bold text-gray-900">
				Workspaces
			</div>
			<WorkspaceIconMenu />
		</div>
	);
};

export default WorkspaceTop;

import WorkspaceTop from '@/components/WorkspaceTop';
import WorkspaceItem from '@/components/WorkspaceItem';

interface Props {}

const Workspaces: React.FC<Props> = () => {
	return (
		<div className="w-72 border-r-2 h-full">
			<WorkspaceTop />
			<WorkspaceContainer>
				{/* WORKSPACE ITEM */}
				<WorkspaceItem />
			</WorkspaceContainer>
		</div>
	);
};

const WorkspaceContainer: React.FC<Props> = ({ children }) => {
	return <div className="mt-7">{children}</div>;
};

export default Workspaces;

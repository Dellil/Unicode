import { observer } from 'mobx-react-lite';
import { useStores } from '@/stores';
import WorkspaceTop from '@/components/WorkspaceTop';
import WorkspaceItem from '@/components/WorkspaceItem';

interface Props {}

const Workspaces: React.FC<Props> = () => {
	const { workspaceStore } = useStores();
	return (
		<div className="w-72 border-r-2 h-full">
			<WorkspaceTop />
			<WorkspaceContainer>
				{/* WORKSPACE ITEM */}
				{workspaceStore.workspaces.map(title => (
					<WorkspaceItem title={title} key={title} />
				))}
			</WorkspaceContainer>
		</div>
	);
};

const WorkspaceContainer: React.FC<Props> = ({ children }) => {
	return <div className="mt-7">{children}</div>;
};

export default observer(Workspaces);

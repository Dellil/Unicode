import Icon from '@/lib/icon';

interface Props {}

const WorkspaceIconMenu: React.FC<Props> = () => {
	return (
		<div className="flex flex-row">
			<div className="p-3 hover:bg-gray-200 rounded-sm cursor-pointer">
				<Icon name="plus" className="w-4 h-4" />
			</div>
			<div className="p-3 hover:bg-gray-200 rounded-sm cursor-pointer">
				<Icon name="search" className="w-4 h-4" />
			</div>
		</div>
	);
};

export default WorkspaceIconMenu;

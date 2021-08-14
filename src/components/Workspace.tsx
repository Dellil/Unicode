import clsx from 'clsx';

import List from '@/components/List';

interface Props {
	title: string;
	onWorkspaceClick: () => void;
	currentWorkspace: string;
}

const Workspace: React.FC<Props> = ({
	title,
	onWorkspaceClick,
	currentWorkspace,
}) => {
	const isCurrent = title === currentWorkspace;

	const style = 'transition py-2.5 cursor-pointer select-none';
	const classes = clsx(
		isCurrent ? `bg-gray-200 ${style}` : `hover:bg-gray-200 ${style}`,
	);
	return (
		<>
			<div className={classes} onClick={onWorkspaceClick}>
				<div className="px-6 truncate font-light">{title}</div>
			</div>
			{isCurrent && <List />}
		</>
	);
};

export default Workspace;

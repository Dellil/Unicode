import { applyClassNameByBoolean } from '@/lib/style';

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
	const style = 'transition py-2.5 cursor-pointer select-none';
	const classes = applyClassNameByBoolean(
		title === currentWorkspace,
		'bg-gray-200',
		'hover:bg-gray-200',
		style,
	);

	return (
		<>
			<div className={classes} onClick={onWorkspaceClick}>
				<div className="px-6 truncate font-light">{title}</div>
			</div>
		</>
	);
};

export default Workspace;

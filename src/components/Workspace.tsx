interface Props {
	title: string;
}

const Workspace: React.FC<Props> = ({ title }) => {
	return (
		<div className="hover:bg-gray-200 transition py-2.5 cursor-pointer select-none">
			<div className="px-6 truncate font-light">{title}</div>
		</div>
	);
};

export default Workspace;

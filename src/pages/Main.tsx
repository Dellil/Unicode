import Workspaces from '@/components/Workspaces';
import Exams from '@/components/Exams';

interface Props {}

const Main: React.FC<Props> = () => {
	return (
		<div className="flex flex-row w-full h-body-without-header">
			<Workspaces />
			<Exams />
		</div>
	);
};

export default Main;

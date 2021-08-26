import { useEffect } from 'react';

import { useStores } from '@/stores';
import Workspaces from '@/components/Workspaces';
import TestPapers from '@/components/TestPapers';

interface Props {}

const Main: React.FC<Props> = () => {
	const { workspaceStore, subjectStore } = useStores();
	useEffect(() => {
		subjectStore.initSubjects(workspaceStore.workspaces);
	}, []);

	return (
		<div className="flex flex-row w-full h-body-without-header">
			<Workspaces />
			<TestPapers />
		</div>
	);
};

export default Main;

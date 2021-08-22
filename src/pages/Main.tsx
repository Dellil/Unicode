import { useEffect } from 'react';
import { toJS } from 'mobx';

import { useStores } from '@/stores';
import Workspaces from '@/components/Workspaces';
import Exams from '@/components/Exams';

interface Props {}

const Main: React.FC<Props> = () => {
	const { workspaceStore, subjectStore, examStore } = useStores();
	useEffect(() => {
		subjectStore.initSubjects(workspaceStore.workspaces);
		console.log(toJS(subjectStore.getAllSubjects()));
	}, []);

	return (
		<div className="flex flex-row w-full h-body-without-header">
			<Workspaces />
			<Exams />
		</div>
	);
};

export default Main;

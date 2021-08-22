import { observer } from 'mobx-react-lite';

import { useStores } from '@/stores';
import EmptyExam from '@/components/EmptyExam';

interface Props {}

const Exams: React.FC<Props> = () => {
	const { examStore } = useStores();
	const exams = examStore.getExams();

	return (
		<div className="w-exams border-r-2 bg-gray-100 select-none">
			{exams.length === 0 && <EmptyExam />}
		</div>
	);
};

export default observer(Exams);

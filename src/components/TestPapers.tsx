import { observer } from 'mobx-react-lite';

import { useStores } from '@/stores';
import EmptyTestPaper from '@/components/EmptyTestPaper';
import TestPaperList from '@/components/TestPaperList';

interface Props {}

const TestPapers: React.FC<Props> = () => {
	const { testPaperStore } = useStores();
	const testPapers = testPaperStore.getTestPapers();

	return (
		<div className="w-test-papers border-r-2 bg-gray-100 select-none flex flex-row p-2 space-x-4 flex-wrap">
			{testPapers.length === 0 && <EmptyTestPaper />}
			{testPapers.length > 0 && <TestPaperList testPapers={testPapers} />}
		</div>
	);
};

export default observer(TestPapers);

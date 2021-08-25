import { observer } from 'mobx-react-lite';

import { useStores } from '@/stores';
import EmptyTest from '@/components/EmptyTest';
import TestList from '@/components/TestList';

interface Props {}

const Tests: React.FC<Props> = () => {
	const { testStore } = useStores();
	const tests = testStore.getTests();

	return (
		<div className="w-tests border-r-2 bg-gray-100 select-none flex flex-row p-2 space-x-4">
			{tests.length === 0 && <EmptyTest />}
			{tests.length > 0 && <TestList tests={tests} />}
		</div>
	);
};

export default observer(Tests);

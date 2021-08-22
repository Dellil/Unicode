import { observer } from 'mobx-react-lite';

import { useStores } from '@/stores';
import EmptyTest from '@/components/EmptyTest';

interface Props {}

const Tests: React.FC<Props> = () => {
	const { testStore } = useStores();
	const tests = testStore.getTests();

	return (
		<div className="w-tests border-r-2 bg-gray-100 select-none">
			{tests.length === 0 && <EmptyTest />}
		</div>
	);
};

export default observer(Tests);

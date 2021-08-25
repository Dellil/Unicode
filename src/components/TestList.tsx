import TestCreateButton from '@/components/TestCreateButton';
import TestItem from '@/components/TestItem';

interface Props {
	tests: Array<{ id: string; title: string }>;
}

const TestList: React.FC<Props> = ({ tests }) => {
	return (
		<>
			<TestCreateButton />
			{tests.map(test => (
				<TestItem key={test.id} test={test} />
			))}
		</>
	);
};

export default TestList;

import TestPaperCreateButton from '@/components/TestPaperCreateButton';
import TestPaperItem from '@/components/TestPaperItem';

interface Props {
	testPapers: Array<{ id: string; title: string }>;
}

const TestPaperList: React.FC<Props> = ({ testPapers }) => {
	return (
		<>
			<TestPaperCreateButton />
			{testPapers.map(testPaper => (
				<TestPaperItem key={testPaper.id} testPaper={testPaper} />
			))}
		</>
	);
};

export default TestPaperList;

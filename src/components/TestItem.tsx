import Icon from '@/lib/icon';

interface Props {
	test: { id: string; title: string };
}

const TestItem: React.FC<Props> = ({ test }) => {
	return (
		<div className="w-52 h-60 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow">
			<div className="w-full h-48 bg-transparent flex flex-row justify-center items-center border-b-2 px-6">
				<div className="truncate">{`${test.title}asdasfsadsafsadsafasdsa`}</div>
			</div>
			<div className="h-12 bg-transparent flex flex-row flex-row-reverse items-center">
				<Icon name="dotsMore" className="mr-3 text-gray-700" />
			</div>
		</div>
	);
};

export default TestItem;

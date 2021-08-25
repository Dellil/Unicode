import Icon from '@/lib/icon';

interface Props {}

const TestCreateButton: React.FC<Props> = () => {
	return (
		<div className="w-52 h-60 bg-transparent shadow-md rounded-lg border-dashed border-4 cursor-pointer hover:shadow-lg transition-shadow">
			<div className="h-full flex flex-row justify-center items-center">
				<Icon name="plus" className="text-gray-600" />
			</div>
		</div>
	);
};

export default TestCreateButton;

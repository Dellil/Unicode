import Icon from '@/lib/icon';

interface Props {}

const EmptyExam: React.FC<Props> = () => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<IllustrationContainer>
				<Icon
					name="emptyStateIllustration"
					className="filter grayscale w-1/2"
				/>
			</IllustrationContainer>
			<span className="text-gray-800 select-none">Add New Test!</span>
		</div>
	);
};

const IllustrationContainer: React.FC<{}> = ({ children }) => {
	return (
		<div className="flex flex-row w-full justify-center items-center">
			{children}
		</div>
	);
};

export default EmptyExam;

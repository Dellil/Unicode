import { useStores } from '@/stores';

interface Props {
	workspaceId: number;
}

const Subjects: React.FC<Props> = ({ workspaceId }) => {
	const { subjectStore } = useStores();
	const subjects = subjectStore.getSubjects(workspaceId);
	return (
		<div>
			<ul>
				{subjects.map(subject => (
					<SubjectItem key={subject.id}>{subject.title}</SubjectItem>
				))}
			</ul>
		</div>
	);
};

interface ItemProps {}
const SubjectItem: React.FC<ItemProps> = ({ children }) => {
	return <li className="text-sm">{children}</li>;
};

export default Subjects;

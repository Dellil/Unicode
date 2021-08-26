import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

import { useStores } from '@/stores';
import EditTestPreview from '@/components/EditTestPreview';
import EditTestContent from '@/components/EditTestContent';
import EditTestOptions from '@/components/EditTestOptions';

interface Props {}

const EditTest: React.FC<Props> = () => {
	const { id } = useParams<{ id: string }>();

	const { testPaperStore, testStore } = useStores();

	useEffect(() => {
		console.log(toJS(testPaperStore.getTestPaper(id)));
	}, []);

	return (
		<Container>
			<EditTestPreview />
			<EditTestContent />
			<EditTestOptions />
		</Container>
	);
};

const Container: React.FC<{}> = ({ children }) => {
	return <div className="h-body-without-header flex flex-row">{children}</div>;
};

export default observer(EditTest);

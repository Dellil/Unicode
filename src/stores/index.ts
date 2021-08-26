import React from 'react';

import WorkspaceStore from '@/stores/WorkspaceStore';
import SubjectStore from '@/stores/SubjectStore';
import TestPaperStore from '@/stores/TestPaperStore';
import TestStore from '@/stores/TestStore';

type MobxStores = {
	workspaceStore: WorkspaceStore;
	subjectStore: SubjectStore;
	testPaperStore: TestPaperStore;
	testStore: TestStore;
};

export const Stores: MobxStores = {
	workspaceStore: new WorkspaceStore(),
	subjectStore: new SubjectStore(),
	testPaperStore: new TestPaperStore(),
	testStore: new TestStore(),
};

export const useStores = () => {
	const stores = React.useContext(StoreContext);
	if (!stores) {
		throw new Error('useStores must be used within a StoreProvider.');
	}
	return stores;
};

const StoreContext = React.createContext<MobxStores | null>(null);
StoreContext.displayName = 'Mobx Context';
export default StoreContext;

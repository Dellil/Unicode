import React from 'react';

import WorkspaceStore from '@/stores/WorkspaceStore';
import SubjectStore from '@/stores/SubjectStore';
import TestPaperStore from '@/stores/TestPaperStore';

type MobxStores = {
	workspaceStore: WorkspaceStore;
	subjectStore: SubjectStore;
	testPaperStore: TestPaperStore;
};

export const Stores: MobxStores = {
	workspaceStore: new WorkspaceStore(),
	subjectStore: new SubjectStore(),
	testPaperStore: new TestPaperStore(),
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

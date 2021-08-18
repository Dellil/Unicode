import React from 'react';

import WorkspaceStore from '@/stores/WorkspaceStore';
import SubjectStore from '@/stores/SubjectStore';

type MobxStores = {
	workspaceStore: WorkspaceStore;
	subjectStore: SubjectStore;
};

export const Stores: MobxStores = {
	workspaceStore: new WorkspaceStore(),
	subjectStore: new SubjectStore(),
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

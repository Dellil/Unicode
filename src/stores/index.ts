import React from 'react';

type Stores = {
	// userStore: UserStore;
};

export const stores: Stores = {
	// userStore: new UserStore(),
};

const StoreContext = React.createContext<Stores | null>(null);
StoreContext.displayName = 'Mobx Context';
export default StoreContext;

/**
 * 
 class UserStore {
	constructor() {
		makeObservable(this, {
			isLogined: computed,
		});
	}

		get isLogined(): boolean {
			return false;
		}
	}
 */

import { makeAutoObservable } from 'mobx';

export default class TestStore {
	constructor() {
		makeAutoObservable(this);
	}

	private testTable = '';
}

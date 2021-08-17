import { makeAutoObservable, observable, action } from 'mobx';

export default class WorkspaceStore {
	constructor() {
		makeAutoObservable(this, {
			workspaces: observable,
			addWorkspace: action,
			setWorkspaces: action,
		});
	}

	workspaces: Array<string> = [];

	addWorkspace(workspace: string) {
		this.workspaces.push(workspace);
	}

	setWorkspaces(workspaces: Array<string>) {
		this.workspaces = workspaces;
	}
}

import { makeAutoObservable, observable, action } from 'mobx';

export default class WorkspaceStore {
	constructor() {
		makeAutoObservable(this, {
			workspaces: observable,
			addWorkspace: action,
			setWorkspaces: action,
		});
	}

	workspaces: Array<{ title: string; id: number }> = [];

	addWorkspace(workspace: string) {
		this.workspaces.push({ title: workspace, id: this.workspaces.length });
	}

	setWorkspaces(workspaces: Array<{ title: string; id: number }>) {
		this.workspaces = workspaces;
	}

	renameWorkspace(workspace: { title: string; id: number }) {
		console.log(workspace);
		const idx = this.workspaces.findIndex(w => w.id === workspace.id);
		this.workspaces[idx] = workspace;
	}
}

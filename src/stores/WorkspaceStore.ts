import { makeAutoObservable, observable, action, computed } from 'mobx';

export default class WorkspaceStore {
	constructor() {
		makeAutoObservable(this, {
			_workspaces: observable,
			workspaces: computed,
			addWorkspace: action,
		});
	}

	_workspaces: Array<{ title: string; id: number }> = [
		{ id: 0, title: 'Language workspace' },
		{ id: 1, title: 'juuuuust workspace' },
	];

	get workspaces() {
		return this._workspaces;
	}

	addWorkspace(workspace: string) {
		this._workspaces.push({ title: workspace, id: this.workspaces.length });
	}

	renameWorkspace(workspace: { title: string; id: number }) {
		const idx = this.workspaces.findIndex(w => w.id === workspace.id);
		this._workspaces[idx] = workspace;
	}

	deleteWorkspace(id: number) {
		this._workspaces = this.workspaces.filter(workspace => workspace.id !== id);
	}
}

import { makeAutoObservable, observable, action, computed } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export default class WorkspaceStore {
	constructor() {
		makeAutoObservable(this, {
			_workspaces: observable,
			workspaces: computed,
			addWorkspace: action,
		});
	}

	_workspaces: Array<{ title: string; id: string }> = [
		{ id: uuidv4(), title: 'Language workspace' },
		{ id: uuidv4(), title: 'juuuuust workspace' },
	];

	get workspaces() {
		return this._workspaces;
	}

	addWorkspace(workspace: string, id: string) {
		this._workspaces.push({ title: workspace, id });
	}

	renameWorkspace(workspace: { title: string; id: string }) {
		const idx = this.workspaces.findIndex(w => w.id === workspace.id);
		this._workspaces[idx] = workspace;
	}

	deleteWorkspace(id: string) {
		this._workspaces = this.workspaces.filter(workspace => workspace.id !== id);
	}
}

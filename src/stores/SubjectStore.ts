import { makeAutoObservable, observable, action } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export default class SubjectStore {
	constructor() {
		makeAutoObservable(this, {
			subjectTable: observable,
			getSubjects: action,
			addSubject: action,
			renameSubject: action,
			deleteSubject: action,
		});
	}

	subjectTable: {
		[workspaceId: string]: Array<{ id: string; title: string }>;
	} = {};

	/**
	 * @todo 백엔드 붙이면 더 자세히 만들기
	 * 1. workspace 없을 때
	 * 2. workspace 있을 때
	 * 3. workspace가 있고, subject도 있을 때
	 */
	initSubjects(
		workspaces: Array<{
			title: string;
			id: string;
		}>,
	) {
		workspaces.map(w => {
			this.subjectTable[w.id] = [
				{ id: uuidv4(), title: 'TOEIC' },
				{ id: uuidv4(), title: 'TOPIC' },
				{ id: uuidv4(), title: 'JLPT' },
			];
		});
	}

	getSubjects(workspaceId: string) {
		return this.subjectTable[workspaceId];
	}

	addSubject(title: string, workspaceId: string) {
		this.subjectTable[workspaceId].push({
			id: uuidv4(),
			title,
		});
	}

	addEmptySubject(workspaceId: string) {
		this.subjectTable[workspaceId] = [];
	}

	renameSubject(subjectId: string, title: string, workspaceId: string) {
		const idx = this.subjectTable[workspaceId].findIndex(
			s => s.id === subjectId,
		);
		this.subjectTable[workspaceId][idx].title = title;
	}

	deleteSubject(subjectId: string, workspaceId: string) {
		const idx = this.subjectTable[workspaceId].findIndex(
			s => s.id === subjectId,
		);
		this.subjectTable[workspaceId].splice(idx, 1);
	}
}

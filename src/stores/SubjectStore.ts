import { makeAutoObservable, observable, action } from 'mobx';

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

	/**
	 * @todo 백엔드 붙이면 {} (빈 객체)로 바꾸기
	 */
	subjectTable: {
		[workspaceId: number]: Array<{ id: number; title: string }>;
	} = {
		0: [
			{ id: 0, title: 'TOEIC' },
			{ id: 1, title: 'TOPIC' },
			{ id: 2, title: 'JLPT' },
		],
		1: [],
	};

	/**
	 * @todo 백엔드 붙이면 더 자세히 만들기
	 * 1. workspace 없을 때
	 * 2. workspace 있을 때
	 * 3. workspace가 있고, subject도 있을 때
	 */
	// initSubjects(workspaceIds: Array<number>) {
	// 	workspaceIds.map(id => {
	// 		this.subjectTable[id] = [];
	// 	});
	// }

	getSubjects(workspaceId: number) {
		return this.subjectTable[workspaceId];
	}

	addSubject(title: string, workspaceId: number) {
		this.subjectTable[workspaceId].push({
			id: this.subjectTable[workspaceId].length,
			title,
		});
	}

	renameSubject(subjectId: number, title: string, workspaceId: number) {
		const idx = this.subjectTable[workspaceId].findIndex(
			s => s.id === subjectId,
		);
		this.subjectTable[workspaceId][idx].title = title;
	}

	deleteSubject(subjectId: number, workspaceId: number) {
		const idx = this.subjectTable[workspaceId].findIndex(
			s => s.id === subjectId,
		);
		this.subjectTable[workspaceId].splice(idx, 1);
	}
}

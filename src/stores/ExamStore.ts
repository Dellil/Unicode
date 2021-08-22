import { makeAutoObservable } from 'mobx';

export default class SubjectStore {
	constructor() {
		makeAutoObservable(this);
	}

	private examTable: {
		[subjectId: string]: Array<{ id: string; title: string }>;
	} = {};

	initExams(
		subjects: Array<{
			title: string;
			id: string;
		}>,
	) {
		/**
		 * @todo 나중에 구현!
		 */
		console.log(subjects);
		console.log('호출됨!');

		subjects.map(s => {
			this.examTable[s.id] = [];
		});
	}

	getSubjects(subjectId: string) {
		return this.examTable[subjectId];
	}
}

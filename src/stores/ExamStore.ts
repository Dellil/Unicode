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
			id: string;
			title: string;
		}>,
	) {
		/**
		 * @todo 나중에 구현!
		 */
		console.log(subjects);
		console.log('호출됨!');

		this.examTable['SELECTED'] = [];
		subjects.map(s => {
			this.examTable[s.id] = [];
		});
	}

	getExams() {
		const isExamsExisted = this.examTable[this.selectedSubjectId];
		if (!isExamsExisted) this.examTable[this.selectedSubjectId] = [];
		return this.examTable[this.selectedSubjectId];
	}

	private selectedSubjectId = 'SELECTED';

	setSelectedSubjectIdForFindingExams(subjectId: string) {
		this.selectedSubjectId = subjectId;
	}
}

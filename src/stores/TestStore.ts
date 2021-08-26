import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export default class SubjectStore {
	constructor() {
		makeAutoObservable(this);
	}

	private testTable: {
		[subjectId: string]: Array<{ id: string; title: string }>;
	} = {};

	initTestStore(
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

		this.testTable['SELECTED'] = [];
		subjects.map(s => {
			this.testTable[s.id] = [];
		});
	}

	getTests() {
		const isExamsExisted = this.testTable[this.selectedSubjectId];
		if (!isExamsExisted) this.testTable[this.selectedSubjectId] = [];
		return this.testTable[this.selectedSubjectId];
	}

	/**
	 * @todo 책임 분리 필요(subject store로)
	 */
	private selectedSubjectId = 'SELECTED';

	setSelectedSubjectIdForFindingTests(subjectId: string) {
		this.selectedSubjectId = subjectId;
	}

	createTest(testTitle: string) {
		this.testTable[this.selectedSubjectId].push({
			id: uuidv4(),
			title: testTitle,
		});
	}
}

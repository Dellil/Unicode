import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export default class TestPaperStore {
	constructor() {
		makeAutoObservable(this);
	}

	private testPaperTable: {
		[subjectId: string]: Array<{ id: string; title: string }>;
	} = {};

	initTestPaperStore(
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

		this.testPaperTable['SELECTED'] = [];
		subjects.map(s => {
			this.testPaperTable[s.id] = [];
		});
	}

	getTestPapers() {
		const isExamsExisted = this.testPaperTable[this.selectedSubjectId];
		if (!isExamsExisted) this.testPaperTable[this.selectedSubjectId] = [];
		return this.testPaperTable[this.selectedSubjectId];
	}

	/**
	 * @todo 책임 분리 필요(subject store로)
	 */
	private selectedSubjectId = 'SELECTED';

	setSelectedSubjectIdForFindingTestPapers(subjectId: string) {
		this.selectedSubjectId = subjectId;
	}

	createTestPaper(testPaperTitle: string) {
		this.testPaperTable[this.selectedSubjectId].push({
			id: uuidv4(),
			title: testPaperTitle,
		});
	}

	renameTestPaper(selectedId: string, testPapertitle: string) {
		const idx = this.testPaperTable[this.selectedSubjectId].findIndex(
			test => test.id === selectedId,
		);
		this.testPaperTable[this.selectedSubjectId][idx].title = testPapertitle;
	}

	deleteTestPaper(selectedId: string) {
		const idx = this.testPaperTable[this.selectedSubjectId].findIndex(
			test => test.id === selectedId,
		);
		this.testPaperTable[this.selectedSubjectId].splice(idx, 1);
	}
}

import faker from 'faker';

export function dummyWorkspaceList(length: number) {
	return new Array(length).fill('').map(() => faker.lorem.word());
}

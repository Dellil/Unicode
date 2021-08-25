import { Menu, Item, Separator, useContextMenu } from 'react-contexify';
import Modal from 'react-modal';

import Icon from '@/lib/icon';

const MENU_ID = 'SUBJECTS';
interface Props {
	test: { id: string; title: string };
}

const TestItem: React.FC<Props> = ({ test }) => {
	const { show } = useContextMenu({
		id: `${MENU_ID}_${test.id}`,
	});

	function handleContextMenu(
		e:
			| React.MouseEvent<HTMLDivElement, MouseEvent>
			| React.MouseEvent<HTMLElement>,
	) {
		e.preventDefault();
		e.stopPropagation();
		show(e);
	}

	return (
		<div
			className="w-52 h-60 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
			onContextMenu={handleContextMenu}
		>
			<div className="w-full h-48 bg-transparent flex flex-row justify-center items-center border-b-2 px-6">
				<div className="truncate">{`${test.title}asdasfsadsafsadsafasdsa`}</div>
			</div>
			<div className="h-12 bg-transparent flex flex-row flex-row-reverse items-center">
				<div onClick={handleContextMenu}>
					<Icon name="dotsMore" className="mr-3 text-gray-700" />
				</div>
			</div>
			<Menu id={`${MENU_ID}_${test.id}`}>
				<Item className="text-red-300">삭제</Item>
				<Separator />
				<Item>이름 바꾸기</Item>
			</Menu>
		</div>
	);
};

export default TestItem;

import { Link } from 'react-router-dom';

interface Props {}

const PopoverProfileMenu: React.FC<Props> = () => {
	return (
		<div className=" absolute right-0 w-64 mr-6 flex flex-col justify-between shadow-xl rounded-lg ring-1 ring-black ring-opacity-5 divide-y-2 z-10 bg-white">
			<div className="my-2">
				<Link
					to="/profile"
					className="flex flex-row items-center p-2 hover:bg-gray-100 hover:cursor-pointer"
				>
					<div className="rounded-full bg-indigo-400 text-white h-8 w-8 flex flex-row items-center justify-center">
						Ch
					</div>
					<div className="ml-3 font-light text-sm">
						<div>Chanhee Jang</div>
						<div>내 프로필 보기</div>
					</div>
				</Link>
			</div>
			<div className="mb-2 pt-2 text-sm">
				<Link to="/option" className="px-3 py-2 hover:bg-gray-100 block">
					환경설정
				</Link>
			</div>

			<div className="mb-2 pt-2">
				<Link
					to="/logout"
					className="px-3 py-2 hover:bg-gray-100 block text-red-500 text-sm"
				>
					로그아웃
				</Link>
			</div>
		</div>
	);
};

export default PopoverProfileMenu;

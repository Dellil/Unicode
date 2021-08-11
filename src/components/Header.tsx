import { Link } from 'react-router-dom';

import Icon from '@/lib/icon';

interface Props {}

const Header: React.FC<Props> = () => {
	return (
		<header className="h-12 border-gray-200 border-b-2 flex flex-row select-none">
			<div className="flex flex-row items-center justify-between w-full px-6">
				<div className="font-mono font-bold text-lg">
					<Link to="/">Unicode</Link>
				</div>
				<div className="flex flex-row items-center py-1">
					<div className="rounded-full bg-indigo-400 text-white h-8 w-8 flex flex-row items-center justify-center mr-2.5">
						Ch
					</div>
					<div className="font-light text-sm">Chanhee Jang</div>
					<div className="">
						<Icon name="expandMore" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

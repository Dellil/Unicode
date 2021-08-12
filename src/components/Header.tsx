import { useState } from 'react';
import { Link } from 'react-router-dom';

import Icon from '@/lib/icon';
import PopoverMenu from '@/components/PopoverMenu';

interface Props {}

const Header: React.FC<Props> = () => {
	const [isProfileClicked, setClicked] = useState(false);

	const onProfileClick = () => {
		setClicked(prev => !prev);
	};

	return (
		<>
			<header className="h-12 border-gray-200 border-b-2 flex flex-row select-none">
				<div className="flex flex-row items-center justify-between w-full px-6">
					<div className="font-mono font-bold text-lg">
						<Link to="/">Unicode</Link>
					</div>
					<div
						className="flex flex-row items-center py-1 cursor-pointer"
						onClick={onProfileClick}
					>
						<div className="rounded-full bg-indigo-400 text-white h-8 w-8 flex flex-row items-center justify-center mr-2.5">
							Ch
						</div>
						<div className="font-light text-sm">Chanhee Jang</div>
						<div>
							<Icon name="expandMore" className="text-gray-400" />
						</div>
					</div>
				</div>
			</header>
			{isProfileClicked && <PopoverMenu />}
		</>
	);
};

export default Header;

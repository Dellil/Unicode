import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

import Icon from '@/lib/icon';
import PopoverProfileMenu from '@/components/PopoverProfileMenu';

interface Props {}

const Header: React.FC<Props> = () => {
	return (
		<>
			<header className="h-12 border-gray-200 border-b-2 flex flex-row select-none">
				<div className="flex flex-row items-center justify-between w-full px-6">
					<div className="font-mono font-bold text-lg">
						<Link to="/">Unicode</Link>
					</div>
					<Popup
						trigger={
							<div className="flex flex-row items-center py-1 cursor-pointer">
								<div className="rounded-full bg-indigo-400 text-white h-8 w-8 flex flex-row items-center justify-center mr-2.5">
									Ch
								</div>
								<div className="font-light text-sm">Chanhee Jang</div>
								<div>
									<Icon name="expandMore" className="text-gray-400" />
								</div>
							</div>
						}
					>
						<PopoverProfileMenu />
					</Popup>
				</div>
			</header>
		</>
	);
};

export default Header;

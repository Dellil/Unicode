import { useEffect } from 'react';

interface Props {
	title: string;
}

const Workspace: React.FC<Props> = ({ title }) => {
	return (
		<div className="hover:bg-gray-200 transition py-2.5 cursor-pointer select-none">
			<div className="px-6 truncate font-light">
				{title}Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Suscipit, fuga est? Numquam, totam quaerat! Ipsam eaque necessitatibus
				possimus rerum sint similique facere atque dolorum. Ex cupiditate fuga
				itaque animi consequuntur?
			</div>
		</div>
	);
};

export default Workspace;

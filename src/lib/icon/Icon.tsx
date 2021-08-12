import React from 'react';
import clsx from 'clsx';

import * as svg from './svg';

export type Icons = keyof typeof svg;

type IconProps = {
	name: Icons;
	className?: string;
	style?: React.CSSProperties;
};

const Icon = ({ name, className, style }: IconProps) => {
	const combinedClasses = clsx(className, 'fill-current');
	return React.createElement(svg[name], {
		className: combinedClasses,
		style,
	});
};

export default Icon;

import React from 'react';

import * as svg from './svg';

export type Icons = keyof typeof svg;

type IconProps = {
	name: Icons;
	className?: string;
	style?: React.CSSProperties;
};

const Icon = ({ name, className, style }: IconProps) => {
	return React.createElement(svg[name], {
		className,
		style,
	});
};

export default Icon;

import React from 'react';
import clsx from 'clsx';

import * as svg from './svg';

export type Icons = keyof typeof svg;

type IconProps = {
	name: Icons;
	className?: string;
	style?: React.CSSProperties;
	onClick?: (e: any) => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
};

const Icon = ({
	name,
	className,
	style,
	onClick,
	onMouseEnter,
	onMouseLeave,
}: IconProps) => {
	const combinedClasses = clsx(className, 'fill-current');
	return React.createElement(svg[name], {
		className: combinedClasses,
		style,
		onClick,
		onMouseEnter,
		onMouseLeave,
	});
};

export default Icon;

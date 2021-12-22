import React from 'react';
import { IconButton, Icon } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';

export interface LinkedinBtnProps {
	profile: string;
	size: 'sm' | 'md' | 'lg';
}

export const LinkedinBtn: React.FC<LinkedinBtnProps> = ({
	profile = 'nicolasrosendo',
	size = 'md',
}) => {
	const linkedinUrl = 'https://www.linkedin.com/in/';
	const goToLinkedin = () => {
		window.open(`${linkedinUrl}/${profile}`, '_blank');
	};
	const sizes = {
		sm: { h: '.75rem', w: '.75rem' },
		md: { h: '1.5rem', w: '1.5rem' },
		lg: { h: '3rem', w: '3rem' },
	};
	const currentSize = sizes[size];

	return (
		<IconButton
			title="open linkedin"
			aria-label="open linkedin"
			size={size}
			icon={<Icon as={FaLinkedin} {...currentSize} />}
			onClick={goToLinkedin}
		/>
	);
};

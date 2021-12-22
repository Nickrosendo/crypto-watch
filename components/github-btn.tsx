import React from 'react';
import { IconButton, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export interface GithubBtnProps {
	repository?: string;
	size?: 'sm' | 'md' | 'lg';
}

export const GithubBtn: React.FC<GithubBtnProps> = ({
	repository = 'crypto-watch',
	size = 'md',
}) => {
	const githubUrl = 'https://github.com/nickrosendo';
	const goToGithub = () => {
		window.open(`${githubUrl}/${repository}`, '_blank');
	};

	const sizes = {
		sm: { h: '.75rem', w: '.75rem' },
		md: { h: '1.5rem', w: '1.5rem' },
		lg: { h: '3rem', w: '3rem' },
	};
	const currentSize = sizes[size];

	return (
		<IconButton
			title="open github"
			aria-label="open github"
			size={size}
			icon={<Icon as={FaGithub} {...currentSize} />}
			onClick={goToGithub}
		/>
	);
};

import React from 'react';
import { IconButton, Icon, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export interface ColorModeToggleProps {
	colorMode?: string;
}

export const ColorModeToggle: React.FC<ColorModeToggleProps> = ({
	colorMode = 'dark',
}) => {
	const { toggleColorMode } = useColorMode();
	const switchColor = () => {
		updateColorModeCookieValue();
		toggleColorMode();
	};

	const updateColorModeCookieValue = () => {
		const storageKey = 'chakra-ui-color-mode';
		const currentCookie = document?.cookie?.match(
			new RegExp(`(^| )${storageKey}=([^;]+)`),
		);
		const currentModeOnCookie = (currentCookie && currentCookie[2]) ?? 'dark';
		const toggledValue = currentModeOnCookie === 'dark' ? 'light' : 'dark';
		document.cookie = `${storageKey}=${toggledValue}; max-age=31536000; path=/`;
	};

	const CurrentIcon = colorMode === 'dark' ? FaSun : FaMoon;

	return (
		<IconButton
			aria-label={`${colorMode}-mode-icon`}
			label={`${colorMode}-mode-icon`}
			role="button"
			title="switch color mode"
			icon={<Icon as={CurrentIcon} h={'1.5rem'} w={'1.5rem'} />}
			onClick={switchColor}
		/>
	);
};

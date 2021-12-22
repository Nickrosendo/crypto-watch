import React from 'react';
import {
	ChakraProvider,
	cookieStorageManager,
	localStorageManager,
} from '@chakra-ui/react';

import { defaultTheme } from '@root/themes';

export interface ThemeContainerProps {
	children: any;
	cookies: string;
}

export const ThemeContainer: React.FC<ThemeContainerProps> = ({
	children = <></>,
	cookies = '',
}) => {

	return (
		<ChakraProvider
			theme={defaultTheme}
			colorModeManager={
				typeof cookies === 'string'
					? cookieStorageManager(cookies)
					: localStorageManager
			}
		>
			{children}
		</ChakraProvider>
	);
};

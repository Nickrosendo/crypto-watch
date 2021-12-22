import { extendTheme } from '@chakra-ui/react';

// Global Theming configs
import { config } from './config';
//
// Global style overrides
import { styles } from './styles';

// Global colors overrides
import { colors } from './colors';

// Components overrides
import { Input } from './components';

export const defaultTheme = extendTheme({
	config,
	styles,
	colors,
	components: {
		Input,
	},
});

export const styles = {
	global: ({ colorMode }) => ({
		body: {
			fontFamily: "'Lato', sans-serif",
			color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
			bg: colorMode === 'dark' ? 'gray.800' : 'whiteAlpha.900',
			lineHeight: 'base',
		},
	}),
};

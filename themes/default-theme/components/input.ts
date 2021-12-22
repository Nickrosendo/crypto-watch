export const Input = {
	baseStyle: ({ colorMode }) => ({
		color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.500',
		_placeholder: {
			color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.500',
		},
	}),
};

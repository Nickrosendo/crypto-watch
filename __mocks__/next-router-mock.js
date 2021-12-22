/* global jest */
const next_router = jest.genMockFromModule('next/router');

const useRouter = () => {
	return {
		locale: 'en',
	};
};

next_router.useRouter = useRouter;

module.exports = next_router;

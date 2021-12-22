/* global jest */
import React from 'react';

const next_i18next = jest.genMockFromModule('next-i18next');

const translate = () => (Component) => (props) =>
	<Component t={() => ''} {...props} />;

const useTranslation = () => {
	return {
		t: (str) => str,
		i18n: {
			changeLanguage: () => new Promise(() => {}),
		},
	};
};

next_i18next.translate = translate;
next_i18next.useTranslation = useTranslation;

module.exports = next_i18next;

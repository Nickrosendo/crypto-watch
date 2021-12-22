import React from 'react';
import {
	Button,
	Icon,
	Flex,
	Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { FaLanguage } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface CountryItem {
	language: string;
	code: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
	const countriesMap = {
		en: 'us',
		pt: 'br',
		de: 'de',
	};

	const countriesList: Array<CountryItem> = [
		{
			language: 'en',
			code: 'us',
		},
		{
			language: 'pt',
			code: 'br',
		},
		{
			language: 'de',
			code: 'de',
		},
	];

	const { locale: currentLocale, pathname: currentPath } = useRouter();
	const currentCountry = countriesMap[currentLocale];

	return (
		<Menu isLazy>
			<MenuButton as={Button} aria-label="switch language">
				<Flex>
					<Text mr="2" title="language-code">
						{' '}
						{currentLocale}{' '}
					</Text>
					<Flex mr="2" w="1.5rem" h="1.5rem" alignItems="center">
						<ReactCountryFlag
							countryCode={currentCountry}
							svg
							cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
							cdnSuffix="svg"
							style={{
								width: '100%',
								height: '100%',
								borderRadius: '.25rem',
							}}
							title={currentCountry}
						/>
					</Flex>
					<Icon
						title="languages-icon"
						as={FaLanguage}
						h={'1.5rem'}
						w={'1.5rem'}
					/>
				</Flex>
			</MenuButton>
			<MenuList minWidth="auto">
				{countriesList
					.filter((ct: CountryItem) => ct.code !== currentCountry)
					.map((ct: CountryItem) => (
						<Link
							href={currentPath}
							passHref
							locale={ct.language}
							key={ct.code}
						>
							<MenuItem>
								<Text mr="2">{ct.language}</Text>
								<Flex mr="2" w="1.5rem" h="1.5rem" alignItems="center">
									<ReactCountryFlag
										countryCode={ct.code}
										svg
										cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
										cdnSuffix="svg"
										style={{
											width: '100%',
											height: '100%',
											borderRadius: '.25rem',
										}}
										title={ct.code}
									/>
								</Flex>
							</MenuItem>
						</Link>
					))}
			</MenuList>
		</Menu>
	);
};

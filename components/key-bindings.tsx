import React from 'react';
import { Kbd } from '@chakra-ui/react';

export interface KeyBindingsProps {
	keys: Array<string>;
}

export const KeyBindings: React.FC<KeyBindingsProps> = ({ keys = [] }) => {
	return (
		<span>
			{keys.map((key: string, index: number) => (
				<React.Fragment key={key}>
					<Kbd>{key}</Kbd> {index !== keys.length - 1 ? '+' : ''}
				</React.Fragment>
			))}
		</span>
	);
};

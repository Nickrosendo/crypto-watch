import {
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export interface SearchModalDialogProps {
	onOpen: () => void;
	onClose: () => void;
	isOpen: boolean;
}

export const SearchModalDialog: React.FC<SearchModalDialogProps> = ({
	onOpen = () => null,
	onClose = () => null,
	isOpen = false,
}) => {
	const { t } = useTranslation();

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
				<ModalOverlay />
				<ModalContent role="dialog" title="search-content-dialog">
					<ModalCloseButton />
					<ModalBody padding="4">
						<Heading> {t('search-bar.input.placeholder')} </Heading>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

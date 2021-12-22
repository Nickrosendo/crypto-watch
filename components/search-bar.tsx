import React from "react";
import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useEventListener,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";

import { MdSearch } from "react-icons/md";
import { useTranslation } from "next-i18next";

import { KeyBindings } from "@root/components";

export interface SearchBarProps {
  searchKeys?: Array<string>;
  onSearch?: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchKeys = ["ctrl", "k"],
  onSearch = () => null,
}) => {
  const inputRef = React.useRef(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEventListener("keydown", (event) => {
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator?.platform);
    const hotkey = isMac ? "metaKey" : "ctrlKey";
    if (event?.key?.toLowerCase() === "k" && event[hotkey]) {
      event.preventDefault();
      if (!isMobile) {
        inputRef?.current?.focus();
      }
    }
  });

  const { t } = useTranslation();
  return (
    <Container>
      <InputGroup>
        <InputLeftElement pointerEvents="none" title="left-element">
          <Icon as={MdSearch} h={"1.5rem"} w={"1.5rem"} />
        </InputLeftElement>
        <Input
          ref={inputRef}
          placeholder={t("search-bar.input.placeholder")}
          onChange={onSearch}
          type="text"
        />
        {!isMobile && (
          <InputRightElement width="6rem" title="right-element">
            <KeyBindings keys={searchKeys} />
          </InputRightElement>
        )}
      </InputGroup>
    </Container>
  );
};

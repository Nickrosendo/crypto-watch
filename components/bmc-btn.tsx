import React from "react";
import { IconButton, Icon } from "@chakra-ui/react";
import { SiBuymeacoffee } from "react-icons/si";

export interface BuyMeACoffeBtnProps {
  profile: string;
  size: "sm" | "md" | "lg";
}

export const BuyMeACoffeBtn: React.FC<BuyMeACoffeBtnProps> = ({
  profile = "nickrosendo",
  size = "md",
}) => {
  const buyMeACoffeeUrl = "https://www.buymeacoffee.com";
  const goToGithub = () => {
    window.open(`${buyMeACoffeeUrl}/${profile}`, "_blank");
  };

  const sizes = {
    sm: { h: ".75rem", w: ".75rem" },
    md: { h: "1.5rem", w: "1.5rem" },
    lg: { h: "3rem", w: "3rem" },
  };
  const currentSize = sizes[size];

  return (
    <IconButton
      title="open buymeacoffee"
      aria-label="open buymeacoffee"
      size={size}
      icon={<Icon as={SiBuymeacoffee} {...currentSize} />}
      onClick={goToGithub}
    />
  );
};

import { IconComponentProps } from "@app/types/icon-component-props";

import { SearchIcon } from "./SearchIcon";

/**
 * SOCIAL MEDI ICONS
 */
import { GoogleIcon } from "./GoogleIcon";

/**
 * TYPES
 */
type IconVariants = "search" | "google";

/**
 * ICON ROOT
 */
interface IconProps extends IconComponentProps {
  icon: IconVariants;
}

const Icon: React.FC<IconProps> = ({ size = 16, icon }) => {
  switch (icon) {
    case "search":
      return <SearchIcon size={size} />;
    case "google":
      return <GoogleIcon size={size} />;
  }
};

export { Icon };

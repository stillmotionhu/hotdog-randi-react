import { HugeIconComponentProps } from "@/types/huge-icon-component-props";

/**
 * STANDALONE ICONS
 */
import { HomeIcon } from "./HomeIcon";
import { PlusIcon } from "./PlusIcon";
import { ProfileIcon } from "./ProfileIcon";
import { RatingsIcon } from "./RatingsIcon";
import { SearchIcon } from "./SearchIcon";

/**
 * SOCIAL MEDIA ICONS
 */
import { GoogleIcon } from "./GoogleIcon";

/**
 * TYPES
 */
export type IconVariants =
  | "home"
  | "plus"
  | "profile"
  | "ratings"
  | "search"
  | "google";

/**
 * ICON ROOT
 */
interface IconProps extends HugeIconComponentProps {
  icon: IconVariants;
}

const Icon: React.FC<IconProps> = ({
  size = 16,
  stroke = "black",
  strokeWidth = 1,
  icon,
}) => {
  switch (icon) {
    case "home":
      return <HomeIcon size={size} stroke={stroke} strokeWidth={strokeWidth} />;
    case "plus":
      return <PlusIcon size={size} stroke={stroke} strokeWidth={strokeWidth} />;
    case "profile":
      return (
        <ProfileIcon size={size} stroke={stroke} strokeWidth={strokeWidth} />
      );
    case "ratings":
      return (
        <RatingsIcon size={size} stroke={stroke} strokeWidth={strokeWidth} />
      );
    case "search":
      return (
        <SearchIcon size={size} stroke={stroke} strokeWidth={strokeWidth} />
      );
    case "google":
      return <GoogleIcon size={size} />;
  }
};

export { Icon };

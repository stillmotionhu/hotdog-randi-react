import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import Link from "next/link";

import { styles } from "./Link.stylex";

/**
 * TYPES
 */
type LinkColors = "default" | "primary";

/**
 * LINK
 */
interface LinkProps extends ParentComponentProps {
  href: string;
  color?: LinkColors;
  isUnderlinedOnHover?: boolean;
}

const LinkRoot: React.FC<LinkProps> = ({
  children,
  href,
  color = "default",
  isUnderlinedOnHover = false,
}) => {
  return (
    <Link
      href={href}
      {...props(
        styles.link,
        color === "primary" && styles.linkPrimaryColor,
        isUnderlinedOnHover && styles.linkUnderlinedOnHover,
      )}
    >
      {children}
    </Link>
  );
};

export { LinkRoot as Link };

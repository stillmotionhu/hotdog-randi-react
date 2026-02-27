import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import Link from "next/link";

import { styles } from "./Link.stylex";
import { RefObject } from "react";

/**
 * TYPES
 */
type LinkColors = "default" | "primary";

/**
 * LINK
 */
interface LinkProps extends ParentComponentProps {
  href: string;
  label?: string;
  color?: LinkColors;
  isUnderlinedOnHover?: boolean;
  ref?: RefObject<HTMLAnchorElement | null>;
}

const LinkRoot: React.FC<LinkProps> = ({
  children,
  href,
  label,
  color = "default",
  isUnderlinedOnHover = false,
  ref,
  ...additionalStyles
}) => {
  return (
    <Link
      href={href}
      aria-label={label}
      {...props(
        styles.link,
        color === "primary" && styles.linkPrimaryColor,
        isUnderlinedOnHover && styles.linkUnderlinedOnHover,
      )}
      {...additionalStyles}
      ref={ref}
    >
      {children}
    </Link>
  );
};

export { LinkRoot as Link };

import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./RatingsHeader.stylex";

/**
 * RATINGS HEADER
 */
const RatingsHeader: React.FC<ParentComponentProps> = ({ children }) => {
  return <header {...props(styles.header)}>{children}</header>;
};

/**
 * RATINGS HEADER CONTAINER
 */
const RatingsHeaderContainer: React.FC<ParentComponentProps> = ({
  children,
}) => {
  return <div {...props(styles.container)}>{children}</div>;
};

export { RatingsHeader, RatingsHeaderContainer };

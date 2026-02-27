import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./RatingsContainer.stylex";

/**
 * RATINGS CONTAINER
 */
const RatingsContainer: React.FC<ParentComponentProps> = ({ children }) => {
  return <div {...props(styles.container)}>{children}</div>;
};

export { RatingsContainer };

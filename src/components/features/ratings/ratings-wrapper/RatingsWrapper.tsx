import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./RatingsWrapper.stylex";

/**
 * RATINGS WRAPPER
 */
const RatingsWrapper: React.FC<ParentComponentProps> = ({ children }) => {
  return <div {...props(styles.wrapper)}>{children}</div>;
};

export { RatingsWrapper };

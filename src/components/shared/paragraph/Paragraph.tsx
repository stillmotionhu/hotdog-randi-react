import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./Paragraph.stylex";

/**
 * PARAGRAPH ROOT
 */
const Paragraph: React.FC<ParentComponentProps> = ({ children }) => {
  return <p {...props(styles.paragraph)}>{children}</p>;
};

export { Paragraph };

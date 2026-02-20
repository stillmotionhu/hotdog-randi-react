import { ParentComponentProps } from "@app/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./Form.stylex";

/**
 * FORM WRAPPER
 */
interface FormProps extends ParentComponentProps {
  noValidate?: boolean;
}

const Form: React.FC<FormProps> = ({ children, noValidate = false }) => {
  return (
    <form {...props(styles.wrapper)} noValidate={noValidate}>
      {children}
    </form>
  );
};

/**
 * FORM SEPARATOR
 */
const FormSeparator: React.FC = () => {
  return (
    <div {...props(styles.separatorWrapper)}>
      <span {...props(styles.separatorText)}>or</span>
    </div>
  );
};

export { Form, FormSeparator };

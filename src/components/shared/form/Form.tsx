import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./Form.stylex";

/**
 * FORM WRAPPER
 */
interface FormProps extends ParentComponentProps {
  noValidate?: boolean;
  onChange?: () => void;
  onSubmit?: () => void;
}

const Form: React.FC<FormProps> = ({
  children,
  noValidate = false,
  onChange,
  onSubmit,
}) => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (typeof onSubmit === "undefined") {
      return;
    }

    onSubmit();
  };

  return (
    <form
      {...props(styles.wrapper)}
      noValidate={noValidate}
      onSubmit={handleFormSubmit}
      onChange={onChange}
    >
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

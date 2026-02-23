import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./Form.stylex";
import { createContext, useContext, useState } from "react";
import { FormError } from "@/types/form-error";
import { FormResponse } from "@/types/form-response";

/**
 * FORM CONTEXT
 */
interface FormContextType {
  errors: FormError[];
  pushError: (error: FormError) => void;
  reduceError: (target: string) => void;
}

const FormContext = createContext<FormContextType>({} as FormContextType);

/**
 * FORM WRAPPER
 */
interface FormProps extends ParentComponentProps {
  noValidate?: boolean;
  onChange?: () => void;
  onSubmit: () => Promise<FormResponse>;
  resetFormStatus: () => void;
}

const Form: React.FC<FormProps> = ({
  children,
  noValidate = false,
  onChange,
  onSubmit,
  resetFormStatus,
}) => {
  const [errors, setErrors] = useState<FormError[]>([]);

  const filterTargetFromErrors = (target: string): FormError[] => {
    return errors.filter(
      (filteredError: FormError) =>
        filteredError.target !== target &&
        filteredError.secondaryTarget !== target,
    );
  };

  const pushError = (error: FormError): void => {
    const filteredErrors = filterTargetFromErrors(error.target);

    setErrors([...filteredErrors, error]);
  };

  const reduceError = (target: string): void => {
    const filteredErrors = filterTargetFromErrors(target);

    if (filteredErrors.length === 0) {
      resetFormStatus();
    }

    setErrors(filteredErrors);
  };

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (typeof onSubmit === "undefined") {
      return;
    }

    const response: FormResponse = await onSubmit();

    if (response.success) {
      return;
    }

    if (typeof response.error === "undefined") {
      // TODO: Better error handling.
      console.error(response.error);
      return;
    }

    pushError(response.error);
  };

  return (
    <FormContext.Provider value={{ errors, pushError, reduceError }}>
      <form
        {...props(styles.wrapper)}
        noValidate={noValidate}
        onSubmit={handleFormSubmit}
        onChange={onChange}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

/**
 * FORM SEPARATOR
 */
const FormSeparator: React.FC = () => {
  return (
    <div {...props(styles.separatorWrapper)}>
      <span {...props(styles.separatorLine)}></span>
      <span {...props(styles.separatorText)}>or</span>
      <span {...props(styles.separatorLine)}></span>
    </div>
  );
};

export { Form, FormContext, FormSeparator };

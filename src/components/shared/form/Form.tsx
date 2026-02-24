import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./Form.stylex";
import { createContext, FocusEventHandler, useContext, useState } from "react";
import { FormError } from "@/types/form-error";
import { FormResponse } from "@/types/form-response";

/**
 * FORM CONTEXT
 */
interface FormContextType {
  errors: FormError[];
  pushError: (error: FormError) => void;
  reduceError: (target: string) => void;
  resetErrors: () => void;
}

const FormContext = createContext<FormContextType>({} as FormContextType);

/**
 * FORM WRAPPER
 */
interface FormProps extends ParentComponentProps {
  noValidate?: boolean;
  onChange?: () => void;
  onSubmit: () => Promise<FormResponse>;
  validate?: (targetName: string) => FormError | boolean;
  setFormIdleStatus: () => void;
  setFormLoadingStatus: () => void;
  setFormFailedStatus: () => void;
}

const Form: React.FC<FormProps> = ({
  children,
  noValidate = false,
  onChange,
  onSubmit,
  validate,
  setFormIdleStatus,
  setFormLoadingStatus,
  setFormFailedStatus,
}) => {
  const [errors, setErrors] = useState<FormError[]>([]);

  const pushError = (error: FormError): void => {
    const filteredErrors = errors.filter(
      (filteredError: FormError) => filteredError.target !== error.target,
    );

    setErrors([...filteredErrors, error]);
  };

  const reduceError = (target: string): void => {
    const filteredErrors = errors.filter(
      (filteredError: FormError) =>
        filteredError.target !== target &&
        filteredError.secondaryTarget !== target,
    );

    if (filteredErrors.length === 0) {
      setFormIdleStatus();
    }

    setErrors(filteredErrors);
  };

  const resetErrors = (): void => {
    setErrors([]);
  };

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    setFormLoadingStatus();

    if (typeof onSubmit === "undefined") {
      return;
    }

    const response: FormResponse = await onSubmit();

    if (response.success) {
      resetErrors();

      return;
    }

    if (typeof response.error === "undefined") {
      // TODO: Better error handling. Like a popup toast.

      return;
    }

    pushError(response.error);
    setFormFailedStatus();
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLFormElement>): void => {
    if (typeof validate === "undefined") {
      return;
    }

    const validationResponse = validate(event.target.id);

    if (typeof validationResponse === "boolean") {
      return;
    }

    pushError(validationResponse);
  };

  return (
    <FormContext.Provider
      value={{
        errors,
        pushError,
        reduceError,
        resetErrors,
      }}
    >
      <form
        {...props(styles.wrapper)}
        noValidate={noValidate}
        onSubmit={handleFormSubmit}
        onChange={onChange}
        onBlur={handleInputBlur}
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

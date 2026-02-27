import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { props } from "@stylexjs/stylex";

import { Icon } from "@components/shared/icons";

import { styles } from "./Input.stylex";
import { PayloadAction } from "@reduxjs/toolkit";
import { FormContext } from "../form/Form";
import { FormError } from "@/types/form-error";

/**
 * TYPES
 */
type InputType = "text" | "email" | "password" | "search";
type InputAutocompleteType =
  | "off"
  | "given-name"
  | "family-name"
  | "tel"
  | "email"
  | "new-password"
  | "current-password";

interface InputError {
  primary: FormError | undefined;
  secondary: FormError | undefined;
}

/**
 * INPUT
 */
interface InputProps {
  type?: InputType;
  name: string;
  label: string;
  autocomplete?: InputAutocompleteType;
  maxlength?: number;
  required?: boolean;
  value: string;
  onValueChange?:
    | Dispatch<SetStateAction<string>>
    | ((value: string) => PayloadAction<string>);
  error?: string | null;
  resetError?: () => PayloadAction<void>;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  label,
  autocomplete = "off",
  maxlength,
  required = false,
  value,
  onValueChange,
}) => {
  const { errors, reduceError } = useContext(FormContext);
  const [error, setError] = useState<InputError | null>();

  useEffect(() => {
    const errorAsPrimary = errors.find(
      (error: FormError) => error.target === name,
    );
    const errorAsSecondary = errors.find(
      (error: FormError) => error.secondaryTarget === name,
    );

    if (
      typeof errorAsPrimary === "undefined" &&
      typeof errorAsSecondary === "undefined"
    ) {
      setError(null);
      return;
    }

    setError({
      primary: errorAsPrimary,
      secondary: errorAsSecondary,
    });
  }, [errors]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (typeof onValueChange === "undefined") {
      return;
    }

    onValueChange(event.target.value);

    if (
      !error ||
      (typeof error.primary === "undefined" &&
        typeof error.secondary === "undefined")
    ) {
      return;
    }

    reduceError(name);
  };

  return (
    <div {...props(styles.wrapper)}>
      <div
        {...props(styles.fieldWrapper, error && styles.fieldWrapperHasError)}
      >
        <input
          {...props(styles.field, error && styles.fieldHasError)}
          type={type}
          id={name}
          placeholder={label}
          autoComplete={autocomplete}
          maxLength={maxlength}
          value={value}
          onChange={handleInputChange}
        />

        <label {...props(styles.fieldLabel)} htmlFor={name}>
          {type === "search" && <Icon icon="search" />}
          <span
            {...props(
              styles.fieldLabelText,
              value !== "" && styles.fieldLabelTextHidden,
              required && styles.fieldLabelTextRequired,
              error && styles.fieldLabelTextHasError,
            )}
          >
            {label}
          </span>
        </label>
      </div>

      {error && error.primary && (
        <div {...props(styles.errorWrapper)}>
          <span {...props(styles.errorText)}>{error.primary.message}</span>
        </div>
      )}
    </div>
  );
};

export { Input };

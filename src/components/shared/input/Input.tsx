import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { props } from "@stylexjs/stylex";

import { SearchIcon } from "@components/shared/icons";

import { styles } from "./Input.stylex";
import { PayloadAction } from "@reduxjs/toolkit";

/**
 * TYPES
 */
type InputType = "text" | "email" | "password" | "search";
type InputAutocompleteType = "off" | "name" | "tel" | "email" | "password";

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
  errors?: string[];
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
  errors = [],
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (typeof onValueChange === "undefined") {
      return;
    }

    onValueChange(event.target.value);
  };

  return (
    <div {...props(styles.wrapper)}>
      <input
        {...props(styles.field)}
        type={type}
        id={name}
        placeholder={label}
        autoComplete={autocomplete}
        maxLength={maxlength}
        value={value}
        onChange={handleInputChange}
      />

      <label {...props(styles.label)} htmlFor={name}>
        {type === "search" && <SearchIcon />}
        <span
          {...props(
            styles.labelText,
            value !== "" && styles.labelTextHidden,
            required && styles.labelTextRequired,
          )}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export { Input };

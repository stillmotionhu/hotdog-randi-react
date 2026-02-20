import { ParentComponentProps } from "@app/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { Spinner } from "@components/shared/spinner";

import { styles } from "./Button.stylex";

/**
 * TYPES
 */
type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "default" | "google";
type ButtonColor = "primary" | "danger";
type ButtonSize = "default" | "compact";

/**
 * BUTTON
 */
interface ButtonProps extends ParentComponentProps {
  type?: ButtonType;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "default",
  color = "primary",
  size = "default",
  isDisabled = false,
  isLoading,
  onClick,
}) => {
  const ButtonLabel: React.FC<ParentComponentProps> = ({ children }) => {
    return (
      <span
        {...props(styles.label, size === "compact" && styles.labelCompactSize)}
      >
        {children}
      </span>
    );
  };

  return (
    <button
      {...props(
        styles.wrapper,
        variant === "google" && styles.wrapperGoogleVariant,
        variant === "default" &&
          (color === "primary"
            ? styles.wrapperPrimaryColor
            : color === "danger" && styles.wrapperDangerColor),
        size === "compact" && styles.wrapperCompactSize,
      )}
      type={type}
      disabled={isDisabled}
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      <div
        {...props(
          styles.container,
          isLoading
            ? size === "default"
              ? styles.containerLoadingState
              : styles.containerLoadingStateCompactSize
            : styles.containerIdleState,
        )}
      >
        <ButtonLabel>{children}</ButtonLabel>
        {typeof isLoading !== "undefined" && (
          <ButtonLabel>
            <Spinner color="foreground" size="small" isIconOnly />
          </ButtonLabel>
        )}
      </div>
    </button>
  );
};

export { Button };

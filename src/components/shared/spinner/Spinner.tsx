import { props } from "@stylexjs/stylex";

import { styles } from "./Spinner.stylex";

/**
 * TYPES
 */
type SpinnerColor = "primary" | "foreground";
type SpinnerSize = "small" | "medium" | "large";

/**
 * SPINNER
 */
interface SpinnerProps {
  color?: SpinnerColor;
  size?: SpinnerSize;
  isIconOnly?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({
  color = "primary",
  size = "medium",
  isIconOnly = false,
}) => {
  const SpinnerIcon: React.FC = () => {
    return (
      <span
        {...props(
          styles.icon,
          color === "primary" && styles.iconPrimaryColor,
          color === "foreground" && styles.iconForegroundColor,
          size === "small" && styles.iconSmallSize,
          size === "medium" && styles.iconMediumSize,
          size === "large" && styles.iconLargeSize,
        )}
      ></span>
    );
  };

  if (isIconOnly) {
    return <SpinnerIcon />;
  }

  return (
    <div {...props(styles.container)}>
      <SpinnerIcon />
    </div>
  );
};

export { Spinner };

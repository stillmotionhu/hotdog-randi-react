import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./Card.stylex";

/**
 * CARD WRAPPER
 */
interface CardProps extends ParentComponentProps {}

const Card: React.FC<CardProps> = ({ children }) => {
  return <section {...props(styles.wrapper)}>{children}</section>;
};

/**
 * CARD CONTAINER
 */
interface CardContainerProps extends ParentComponentProps {}

const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return <div {...props(styles.container)}>{children}</div>;
};

/**
 * CARD HEADER
 */
interface CardHeaderProps extends ParentComponentProps {}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <header {...props(styles.header)}>{children}</header>;
};

/**
 * CARD TITLE
 */
interface CardTitleProps extends ParentComponentProps {
  size?: "large" | "small";
  casing?: "default" | "uppercase";
}

const CardTitle: React.FC<CardTitleProps> = ({
  size = "large",
  casing = "default",
  children,
}) => {
  return (
    <h2
      {...props(
        styles.title,
        size === "large" && styles.titleLargeSize,
        size === "small" && styles.titleSmallSize,
        casing === "uppercase" && styles.titleUppercase,
      )}
    >
      {children}
    </h2>
  );
};

/**
 * CARD SUBTITLE
 */
const CardSubtitle: React.FC<ParentComponentProps> = ({ children }) => {
  return <h3 {...props(styles.subtitle)}>{children}</h3>;
};

/**
 * CARD CONTENT
 */
interface CardContentProps extends ParentComponentProps {}

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <main {...props(styles.content)}>{children}</main>;
};

/**
 * CARD FOOTER
 */
interface CardFooterProps extends ParentComponentProps {}

const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <footer {...props(styles.footer)}>{children}</footer>;
};

export {
  Card,
  CardContainer,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardContent,
  CardFooter,
};

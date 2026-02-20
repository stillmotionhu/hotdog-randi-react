import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./Card.stylex";

/**
 * CARD WRAPPER
 */
interface CardProps extends ParentComponentProps {}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div {...props(styles.wrapper)}>{children}</div>;
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
interface CardTitleProps extends ParentComponentProps {}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <h2 {...props(styles.title)}>{children}</h2>;
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

export { Card, CardContainer, CardHeader, CardTitle, CardContent, CardFooter };

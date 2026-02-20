import { ParentComponentProps } from "@app/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./Page.stylex";

/**
 * PAGE WRAPPER
 */
interface PageWrapperProps extends ParentComponentProps {}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <div {...props(styles.wrapper)}>{children}</div>;
};

/**
 * PAGE CONTAINER
 */
interface PageContainerProps extends ParentComponentProps {
  isCentered?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  isCentered = false,
}) => {
  return (
    <div {...props(styles.container, isCentered && styles.containerCentered)}>
      {children}
    </div>
  );
};

/**
 * PAGE TITLE
 */
interface PageTitleProps extends ParentComponentProps {}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return <h1 {...props(styles.title)}>{children}</h1>;
};

export { PageWrapper, PageContainer, PageTitle };

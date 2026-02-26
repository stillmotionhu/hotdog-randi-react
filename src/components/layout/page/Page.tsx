"use client";

import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { styles } from "./Page.stylex";
import { useFirebaseAuth } from "@/providers/FirebaseAuthProvider";

/**
 * PAGE WRAPPER
 */
interface PageWrapperProps extends ParentComponentProps {}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { isAuthenticated } = useFirebaseAuth();

  return (
    <>
      {isAuthenticated && "navbar"}
      <div {...props(styles.wrapper)}>{children}</div>
    </>
  );
};

/**
 * PAGE CONTAINER
 */
interface PageContainerProps extends ParentComponentProps {
  id?: string;
  isCentered?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  id,
  isCentered = false,
}) => {
  return (
    <main
      {...props(styles.container, isCentered && styles.containerCentered)}
      id={id}
    >
      {children}
    </main>
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

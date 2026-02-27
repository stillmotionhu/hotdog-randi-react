import { ParentComponentProps } from "@/types/parent-component-props";
import { props } from "@stylexjs/stylex";

import { Icon } from "@/components/shared/icons";

import { styles } from "./Navbar.stylex";
import { AnimationEvent, createRef, useEffect } from "react";
import { useNavigation } from "@/providers/NavigationProvider";
import { Link } from "@/components/shared/link";
import { NAVIGATION_ROUTES } from "@/constants/navigation-routes";
import { NavigationRoute } from "@/types/navigation-route";

/**
 * NAVBAR WRAPPER
 */
const NavbarWrapper: React.FC<ParentComponentProps> = ({ children }) => {
  const { setRevealAnimationEnded } = useNavigation();

  const handleAnimationEnd = (): void => {
    setRevealAnimationEnded(true);
  };

  return (
    <nav {...props(styles.wrapper)} onAnimationEnd={handleAnimationEnd}>
      {children}
    </nav>
  );
};

/**
 * NAVBAR CONTAINER
 */
const NavbarContainer: React.FC<ParentComponentProps> = ({ children }) => {
  return <div {...props(styles.container)}>{children}</div>;
};

/**
 * NAVBAR ACTIVE ROUTE INDICATOR PILL
 */
const NavbarActiveRouteIndicatorPill: React.FC = () => {
  const { activeRouteIndicatorPill, revealAnimationEnded } = useNavigation();

  return (
    <span
      {...props(
        styles.activeRouteIndicatorPill,
        styles.activeRouteIndicatorPillLeft(activeRouteIndicatorPill.left),
        styles.activeRouteIndicatorPillWidth(activeRouteIndicatorPill.width),
        !revealAnimationEnded && styles.activeRouteIndicatorPillStandBy,
      )}
    ></span>
  );
};

/**
 * NAVBAR LIST
 */
const NavbarList: React.FC<ParentComponentProps> = ({ children }) => {
  return <ul {...props(styles.list)}>{children}</ul>;
};

/**
 * NAVBAR LIST ITEM
 */
const NavbarListItem: React.FC<ParentComponentProps> = ({ children }) => {
  return <li {...props(styles.item)}>{children}</li>;
};

/**
 * NAVBAR LINK
 */
interface NavbarLinkProps extends ParentComponentProps {
  href: string;
  label: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label, children }) => {
  const linkRef = createRef<HTMLAnchorElement>();

  const { pushRouteElement } = useNavigation();

  useEffect(() => {
    if (linkRef.current === null) {
      return;
    }

    pushRouteElement(linkRef.current);
  }, []);

  return (
    <Link href={href} label={label} ref={linkRef} {...props(styles.link)}>
      {children}
    </Link>
  );
};

/**
 * NAVBAR ROOT
 */
const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarActiveRouteIndicatorPill />

        <NavbarList>
          {NAVIGATION_ROUTES.map((route: NavigationRoute) => (
            <NavbarListItem key={route.href}>
              <NavbarLink href={route.href} label={route.label}>
                <Icon icon={route.icon} size={32} strokeWidth={0.4} />
              </NavbarLink>
            </NavbarListItem>
          ))}
        </NavbarList>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export { Navbar };

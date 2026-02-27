import { ParentComponentProps } from "@/types/parent-component-props";
import { usePathname } from "next/navigation";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ActiveRouteIndicatorPill {
  left: number;
  width: number;
}

interface NavigationContextState {
  routeElements: HTMLAnchorElement[];
  pushRouteElement: (routeElement: HTMLAnchorElement) => void;
  activeRouteIndicatorPill: ActiveRouteIndicatorPill;
  revealAnimationEnded: boolean;
  setRevealAnimationEnded: Dispatch<SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextState>(
  {} as NavigationContextState,
);

export const useNavigation = (): NavigationContextState => {
  const context: NavigationContextState = useContext(NavigationContext);

  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  return context;
};

export const NavigationProvider: React.FC<ParentComponentProps> = ({
  children,
}) => {
  const [routeElements, setRouteElements] = useState<HTMLAnchorElement[]>([]);
  const [activeRouteIndicatorPill, setActiveRouteIndicatorPill] =
    useState<ActiveRouteIndicatorPill>({ left: 0, width: 0 });
  const [revealAnimationEnded, setRevealAnimationEnded] =
    useState<boolean>(false);

  const pathname = usePathname();

  const pushRouteElement = (routeElement: HTMLAnchorElement): void => {
    setRouteElements((previousRoutes: HTMLAnchorElement[]) => {
      if (previousRoutes.includes(routeElement)) {
        return previousRoutes;
      }

      return [...previousRoutes, routeElement];
    });
  };

  useEffect(() => {
    const currentRoute = routeElements.filter(
      (routeElement: HTMLAnchorElement) => routeElement.pathname === pathname,
    )[0];

    if (typeof currentRoute === "undefined") {
      return;
    }

    setActiveRouteIndicatorPill({
      left: currentRoute.offsetLeft,
      width: currentRoute.offsetWidth,
    });
  }, [pathname, routeElements]);

  return (
    <NavigationContext
      value={{
        routeElements,
        pushRouteElement,
        activeRouteIndicatorPill,
        revealAnimationEnded,
        setRevealAnimationEnded,
      }}
    >
      {children}
    </NavigationContext>
  );
};

import { create, keyframes } from "@stylexjs/stylex";

const navbarRevealKeyframes = keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(0.6, 0.8) translateY(15px)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1) translateY(0)",
  },
});

const navbarStyles = create({
  wrapper: {
    position: "fixed",
    bottom: 25,
    left: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    zIndex: 999,
    animationName: navbarRevealKeyframes,
    animationDuration: "0.5s",
    animationTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  },
  container: {
    width: "95vw",
    height: 70,
    padding: 5,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 35,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, .3)",
    boxShadow: `
      0 0 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
      inset 0 0 30px 5px rgba(255, 255, 255, 0.2)`,
    backdropFilter: "blur(5px)",
  },
  activeRouteIndicatorPill: {
    display: "block",
    position: "absolute",
    top: "50%",
    height: 60,
    backgroundImage: `
      linear-gradient(
        145deg,
        color-mix(in srgb, rgb(var(--primary-color)), white 15%),
        color-mix(in srgb, rgb(var(--primary-color)), black 5%)
      )`,
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, .3)",
    boxShadow: `
      0 0 32px rgba(0, 0, 0, 0.07),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
      inset 0 0 30px 5px rgba(255, 255, 255, 0.2)`,
    backdropFilter: "blur(5px)",
    transform: "translateY(-50%)",
    zIndex: -1,
    transition:
      "left 0.8s cubic-bezier(0.28, 1.47, 0.13, 0.97), width 0.7s cubic-bezier(0.28, 1.47, 0.13, 0.97)",
  },
  activeRouteIndicatorPillStandBy: {
    transition: "none",
  },
  activeRouteIndicatorPillLeft: (left) => ({
    left,
  }),
  activeRouteIndicatorPillWidth: (width) => ({
    width,
  }),
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width: "100%",
    height: 60,
    color: "rgba(var(--foreground), 0.9)",
  },
});

export { navbarStyles as styles };

import { create, keyframes } from "@stylexjs/stylex";

const ratingsHeaderRevealKeyframes = keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(0.6, 0.8) translateY(-15px)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1) translateY(0)",
  },
});

const ratingsHeaderStyles = create({
  header: {
    position: "fixed",
    top: 25,
    left: 0,
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    width: "100%",
    zIndex: 999,
    animationName: ratingsHeaderRevealKeyframes,
    animationDuration: "0.4s",
    animationTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    width: "95vw",
  },
});

export { ratingsHeaderStyles as styles };

import { create, keyframes } from "@stylexjs/stylex";

const bodyBackgroundPositionKeyframes = keyframes({
  "0%": {
    backgroundPosition: "0% 50%",
  },
  "50%": {
    backgroundPosition: "100% 50%",
  },
  "100%": {
    backgroundPosition: "0% 50%",
  },
});

const layoutStyles = create({
  body: {
    maxWidth: "100vw",
    minHeight: "100vh",
    overflowX: "hidden",
    backgroundImage:
      "linear-gradient(300deg, #e3ecf7, #e3e3f7, #e9e3f7, #efe3f7)",
    backgroundSize: "360% 360%",
    animationName: bodyBackgroundPositionKeyframes,
    animationDuration: "30s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
    fontFamily: `"Stack Sans Text", Helvetica, sans-serif`,
    fontSize: 16,
    color: "rgb(var(--foreground))",
    padding: 0,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
});

export { layoutStyles as styles };

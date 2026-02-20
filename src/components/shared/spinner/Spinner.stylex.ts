import { create, keyframes } from "@stylexjs/stylex";

const spinnerClipPathKeyframes = keyframes({
  "0%": {
    clipPath: "polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)",
  },
  "12.5%": {
    clipPath:
      "polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)",
  },
  "25%": {
    clipPath:
      "polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%)",
  },
  "50%": {
    clipPath:
      "polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)",
  },
  "62.5%": {
    clipPath:
      "polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)",
  },
  "75%": {
    clipPath:
      "polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%)",
  },
  "100%": {
    clipPath:
      "polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%)",
  },
});

const spinnerTransformKeyframes = keyframes({
  "0%": {
    transform: "scaleY(1) rotate(0deg)",
  },
  "49.99%": {
    transform: "scaleY(1) rotate(135deg)",
  },
  "50%": {
    transform: "scaleY(-1) rotate(0deg)",
  },
  "100%": {
    transform: "scaleY(-1) rotate(-135deg)",
  },
});

const spinnerStyles = create({
  container: {
    display: "block",
    aspectRatio: 1,
    width: "fit-content",
    padding: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "35px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: `
      0 0px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
      inset 0 0 30px 5px rgba(255, 255, 255, 0.2)`,
    backdropFilter: "blur(5px)",
  },
  icon: {
    display: "block",
    aspectRatio: 1,
    width: "50px",
    borderRadius: "50%",
    borderStyle: "solid",
    animationName: `${spinnerClipPathKeyframes}, ${spinnerTransformKeyframes}`,
    animationDuration: ".8s, 1.6s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationDirection: "alternate, normal",
  },
  iconPrimaryColor: {
    borderColor: "rgb(var(--primary-color))",
  },
  iconForegroundColor: {
    borderColor: "rgb(var(--foreground))",
  },
  iconSmallSize: {
    width: 25,
    borderWidth: 3,
  },
  iconMediumSize: {
    width: 40,
    borderWidth: 5,
  },
  iconLargeSize: {
    width: 50,
    borderWidth: 6,
  },
});

export { spinnerStyles as styles };

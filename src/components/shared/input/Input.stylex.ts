import { create, keyframes } from "@stylexjs/stylex";

const inputErrorRevealKeyframes = keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(.85, .9)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1)",
  },
});

const inputStyles = create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: ".65rem",
    width: "100%",
  },
  fieldWrapper: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    height: "60px",
    backgroundColor: "rgba(255, 255, 255, .7)",
    borderRadius: "30px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, .3)",
    boxShadow: `
      0 0 32px rgba(0, 0, 0, 0.075),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
      inset 0 0 30px 5px rgba(0, 0, 0, 0.02)`,
    backdropFilter: "blur(5px)",
    transition:
      "transform .35s cubic-bezier(0.44, 1.14, 0.43, 1.32), background-color 0.25s ease-out, border-color 0.25s ease-out",
    ":has(input:focus)": {
      transform: "scale(.95)",
      transition: "transform 0.45s cubic-bezier(0.44, 1.14, 0.43, 1.32)",
    },
  },
  fieldWrapperHasError: {
    backgroundColor: "color-mix(in srgb, rgb(var(--danger-color)), white 98%)",
    borderColor: "color-mix(in srgb, rgb(var(--danger-color)), white 93%)",
  },
  field: {
    position: "absolute",
    top: 0,
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1rem",
    color: "rgb(var(--foreground))",
    width: "100%",
    height: "60px",
    padding: "15px 25px",
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: "30px",
    outline: "none",
    "::placeholder": {
      visibility: "hidden",
    },
    ":has(~ svg)": {
      paddingLeft: "calc(25px + 1rem + 6px)",
    },
    transition: "color .25s ease-out",
  },
  fieldWithIcon: {
    paddingLeft: 52,
  },
  fieldHasError: {
    color: "color-mix(in srgb, rgb(var(--danger-color)), black 10%)",
  },
  fieldLabel: {
    position: "absolute",
    top: 0,
    left: 1,
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: "6px",
    padding: "15px 25px",
    cursor: "text",
  },
  fieldLabelText: {
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: "1rem",
    color: "rgba(100, 100, 100, 0.8)",
    marginTop: 2,
    transition: "color .22s ease-out",
  },
  fieldLabelTextHidden: {
    visibility: "hidden",
  },
  fieldLabelTextRequired: {
    "::after": {
      content: "*",
      color: "rgba(var(--danger-color), 0.8)",
      marginLeft: "2px",
    },
  },
  fieldLabelTextHasError: {
    color: "color-mix(in srgb, rgb(var(--danger-color)), black 10%)",
  },
  fieldLabelIcon: {
    marginTop: 2,
  },
  errorWrapper: {
    display: "block",
    marginLeft: 2,
    marginBottom: 5,
    transformOrigin: "top left",
    animationName: inputErrorRevealKeyframes,
    animationDuration: "0.35s",
    animationTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    animationFillMode: "backwards",
  },
  errorText: {
    fontSize: ".875rem",
    fontWeight: 500,
    color: "rgb(var(--danger-color))",
  },
});

export { inputStyles as styles };

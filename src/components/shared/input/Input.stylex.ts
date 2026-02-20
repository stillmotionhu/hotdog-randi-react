import { create } from "@stylexjs/stylex";

const inputStyles = create({
  wrapper: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    height: "60px",
    backgroundColor: "rgba(255, 255, 255, .6)",
    borderRadius: "30px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, .3)",
    boxShadow: `
      0 0 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
      inset 0 0 30px 5px rgba(255, 255, 255, 0.2)`,
    backdropFilter: "blur(5px)",
    transition: "transform .35s cubic-bezier(0.44, 1.14, 0.43, 1.32)",
    ":has(input:focus)": {
      transform: "scale(.95)",
      transition: "transform 0.45s cubic-bezier(0.44, 1.14, 0.43, 1.32)",
    },
  },
  field: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1rem",
    color: "rgb(var(--foreground))",
    width: "100%",
    height: "60px",
    padding: "15px 25px",
    borderWidth: 0,
    borderRadius: "30px",
    backgroundColor: "transparent",
    outline: "none",
    "::placeholder": {
      visibility: "hidden",
    },
    ":has(~ svg)": {
      paddingLeft: "calc(25px + 1rem + 6px)",
    },
  },
  label: {
    position: "absolute",
    top: "7px",
    left: "1px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: "6px",
    padding: "15px 25px",
    cursor: "text",
  },
  labelText: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: "1rem",
    color: "rgb(100, 100, 100)",
  },
  labelTextHidden: {
    visibility: "hidden",
  },
  labelTextRequired: {
    "::after": {
      content: "*",
      color: "rgb(var(--danger-color))",
      marginLeft: "2px",
    },
  },
});

export { inputStyles as styles };

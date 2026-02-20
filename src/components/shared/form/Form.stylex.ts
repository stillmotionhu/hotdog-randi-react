import { create } from "@stylexjs/stylex";

const formStyles = create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
  separatorWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "1rem 0",
    "::before": {
      content: "",
      position: "absolute",
      display: "block",
      top: "50%",
      width: "100%",
      height: "2px",
      backgroundColor: "rgb(150, 150, 150)",
      transform: "translateY(-50%)",
      zIndex: "-1",
    },
  },
  separatorText: {
    color: "rgb(150, 150, 150)",
    fontSize: "0.875rem",
    textTransform: "uppercase",
    backgroundColor: "rgb(var(--background))",
    padding: "0 6px",
  },
});

export { formStyles as styles };

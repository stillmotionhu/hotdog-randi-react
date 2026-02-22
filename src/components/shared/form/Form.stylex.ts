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
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "1rem 0",
    "::before": {
      content: "",
      display: "block",
      position: "absolute",
      top: "50%",
      left: 0,
      width: "calc(50% - 20px)",
      height: "2px",
      backgroundColor: "rgba(var(--foreground), 0.35)",
      transform: "translateY(-50%)",
    },
    "::after": {
      content: "",
      display: "block",
      position: "absolute",
      top: "50%",
      right: 0,
      width: "calc(50% - 20px)",
      height: "2px",
      backgroundColor: "rgba(var(--foreground), 0.35)",
      transform: "translateY(-50%)",
    },
  },
  separatorText: {
    color: "rgba(var(--foreground), 0.35)",
    fontSize: "0.875rem",
    textTransform: "uppercase",
  },
});

export { formStyles as styles };

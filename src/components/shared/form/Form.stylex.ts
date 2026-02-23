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
    alignItems: "center",
    gap: ".75rem",
    width: "100%",
    padding: "1rem 0",
  },
  separatorLine: {
    content: "",
    display: "block",
    width: "100%",
    height: "2px",
    backgroundColor: "rgba(var(--foreground), 0.35)",
  },
  separatorText: {
    color: "rgba(var(--foreground), 0.35)",
    fontSize: "0.875rem",
    textTransform: "uppercase",
  },
});

export { formStyles as styles };

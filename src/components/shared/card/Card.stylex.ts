import { create } from "@stylexjs/stylex";

const cardStyles = create({
  wrapper: {
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  header: {
    display: "flex",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: "2rem",
    color: "rgb(var(--foreground))",
    margin: 0,
    marginBottom: "0.75rem",
  },
  content: {
    width: "100%",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "1rem",
    fontSize: "0.875rem",
  },
});

export { cardStyles as styles };

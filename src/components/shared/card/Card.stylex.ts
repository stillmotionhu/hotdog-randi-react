import { create } from "@stylexjs/stylex";

const cardStyles = create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "40px",
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
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
  header: {
    display: "flex",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: "2rem",
    color: "rgba(var(--foreground), 0.9)",
    marginTop: "0.5rem",
    marginLeft: "5px",
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

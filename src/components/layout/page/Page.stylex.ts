import { create } from "@stylexjs/stylex";

const pageStyles = create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    padding: "calc((100vw - var(--container-width)) / 2) 0",
  },
  container: {
    width: "var(--container-width)",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  containerCentered: {
    justifyContent: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
  },
});

export { pageStyles as styles };

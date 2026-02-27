import { create } from "@stylexjs/stylex";

const ratingsContainerStyles = create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 35,
    width: "95%",
  },
});

export { ratingsContainerStyles as styles };

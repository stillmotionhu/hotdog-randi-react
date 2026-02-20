import { create } from "@stylexjs/stylex";

const iconStyles = create({
  icon: {
    aspectRatio: 1,
  },
  size: (height) => ({
    height,
  }),
});

export { iconStyles as styles };

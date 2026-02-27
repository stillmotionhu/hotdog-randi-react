import { create } from "@stylexjs/stylex";

const iconStyles = create({
  icon: {
    aspectRatio: 1,
  },
  size: (height) => ({
    height,
  }),
  stroke: (stroke) => ({
    stroke,
  }),
  strokeWidth: (strokeWidth) => ({
    strokeWidth,
  }),
});

export { iconStyles as styles };

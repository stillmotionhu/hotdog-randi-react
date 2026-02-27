import { create, keyframes } from "@stylexjs/stylex";

const revealRatingCardKeyframes = keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(0.6, 0.8)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1)",
  },
});

const ratingCardStyles = create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: 25,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
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
  wrapperHidden: {
    opacity: 0,
  },
  wrapperRevealAnimation: {
    animationName: revealRatingCardKeyframes,
    animationDuration: "0.4s",
    animationTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    animationFillMode: "backwards",
    animationDelay: "0.05s",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    width: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "20px",
    textTransform: "uppercase",
    color: "rgba(var(--foreground), 0.9)",
    marginTop: 5,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: "14px",
    fontWeight: 500,
    margin: 0,
  },
  sliderWrapper: {
    position: "relative",
  },
  sliderProgress: {
    width: "100%",
    height: 12,
    borderRadius: 6,
    boxShadow: `
      0 0px 32px rgba(0, 0, 0, 0.07),
			inset 0 1px 0 rgba(255, 255, 255, 0.5),
			inset 0 -1px 0 rgba(255, 255, 255, 0.1),
			inset 0 0 30px 5px rgba(255, 255, 255, 0.2)`,
    backdropFilter: "blur(5px)",
    "::-webkit-progress-bar": {
      backgroundColor: "rgba(205, 205, 205, 0.5)",
      borderRadius: 6,
    },
    "::-webkit-progress-value": {
      backgroundColor: "rgb(var(--primary-color))",
      borderRadius: 6,
    },
  },
  sliderThumb: {
    position: "absolute",
    top: 3,
    aspectRatio: 1,
    height: 30,
    transform: "translate(calc(-100% + 2px), -7px)",
    fill: "rgba(255, 255, 255, 0.9)",
    stroke: "rgb(var(--primary-color))",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  sliderThumbLeft: (left) => ({
    left,
  }),
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  itemWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  itemHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: 600,
  },
  itemScore: {
    fontSize: 16,
    fontWeight: 600,
  },
  itemNotes: {
    fontSize: 14,
    fontWeight: 600,
    color: "rgba(127, 127, 127, 0.9)",
    marginTop: 3,
  },
});

export { ratingCardStyles as styles };

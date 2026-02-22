import { create } from "@stylexjs/stylex";

const buttonStyles = create({
  wrapper: {
    display: "block",
    width: "100%",
    height: "60px",
    padding: 0,
    borderRadius: "30px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, .3)",
    boxShadow: `0 0 32px rgba(0, 0, 0, 0.07),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
      inset 0 0 30px 5px rgba(255, 255, 255, 0.2)`,
    backdropFilter: "blur(5px)",
    cursor: {
      default: "pointer",
      ":disabled": "text",
    },
    overflow: "hidden",
    outline: 0,
    transform: {
      ":not(:disabled):active": "scale(.95)",
    },
    transition: `transform .25s cubic-bezier(0.44, 1.14, 0.43, 1.32),
      color .25s ease-in-out,
      background .25s ease-in-out`,
  },
  wrapperGoogleVariant: {
    color: "rgb(var(--background))",
    backgroundColor: "rgba(var(--foreground), 0.93)",
  },
  wrapperPrimaryColor: {
    color: {
      default: "rgb(var(--foreground))",
      ":disabled": "color-mix(in srgb, rgba(var(--foreground)), white 25%)",
    },
    backgroundColor: {
      default: "rgba(var(--primary-color), 0.75)",
      ":disabled":
        "color-mix(in srgb, rgba(var(--primary-color), 0.75), white 15%)",
    },
  },
  wrapperDangerColor: {
    color: {
      default: "rgb(var(--background))",
      ":disabled": "color-mix(in srgb, rgb(var(--background)), black 5%)",
    },
    backgroundColor: {
      default: "rgb(var(--danger-color), 0.75)",
      ":disabled":
        "color-mix(in srgb, rgba(var(--danger-color), 0.75), white 20%)",
    },
  },
  wrapperCompactSize: {
    height: "40px",
    borderRadius: "20px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.35s cubic-bezier(0.6, 0.5, 0.05, 1)",
  },
  containerIdleState: {
    transform: "translateY(0)",
  },
  containerLoadingState: {
    transform: "translateY(-60px)",
  },
  containerLoadingStateCompactSize: {
    transform: "translateY(-40px)",
  },
  containerFailedState: {
    transform: "translateY(-120px)",
  },
  containerFailedStateCompactSize: {
    transform: "translateY(-80px)",
  },
  label: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "60px",
    fontSize: "1rem",
    fontWeight: 600,
    transform: "translateY(0)",
    ":has(svg)": {
      justifyContent: "flex-start",
      gap: "0.8rem",
      padding: "0 calc((60px - 22px) / 2)",
    },
  },
  labelCompactSize: {
    height: "40px",
    ":has(svg)": {
      padding: "0 calc((40px - 22px) / 2)",
    },
  },
});

export { buttonStyles as styles };

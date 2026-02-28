import { create } from "@stylexjs/stylex";

const ratingsFilterStyles = create({
  wrapper: {
    position: "relative",
  },
  triggerWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: `
      0 0px 32px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.5),
			inset 0 -1px 0 rgba(255, 255, 255, 0.1),
			inset 0 0 30px 5px rgba(255, 255, 255, 0.2)`,
    backdropFilter: "blur(5px)",
    cursor: "pointer",
    transition: "transform 0.35s cubic-bezier(0.44, 1.14, 0.43, 1.32)",
  },
  triggerWrapperOpen: {
    transform: "scale(0.9)",
    transition: "transform 0.45s cubic-bezier(0.44, 1.14, 0.43, 1.32)",
  },
  triggerContainer: {
    position: "relative",
    width: 25,
    height: 16,
  },
  triggerLine: {
    position: "absolute",
    display: "block",
    height: 2,
    backgroundColor: "rgba(var(--foreground), 0.9)",
    transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
    ":nth-child(1)": {
      top: 0,
      left: 0,
      width: 25,
      transform: "rotate(0)",
    },
    ":nth-child(2)": {
      top: 7,
      left: 4,
      width: 17,
    },
    ":nth-child(3)": {
      top: 14,
      left: 8,
      width: 9,
      transform: "rotate(0)",
    },
  },
  triggerLineOpen: {
    ":nth-child(1)": {
      top: 7,
      transform: "rotate(135deg)",
    },
    ":nth-child(2)": {
      left: 12,
      width: 0,
    },
    ":nth-child(3)": {
      top: 7,
      left: 0,
      width: 25,
      transform: "rotate(-135deg)",
    },
  },
  dropdownWrapper: {
    position: "absolute",
    top: 70,
    right: 0,
    width: 275,
    padding: 5,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: `
      0 0px 32px rgba(0, 0, 0, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.5),
			inset 0 -1px 0 rgba(255, 255, 255, 0.1),
			inset 0 0 30px 5px rgba(255, 255, 255, 0.2)`,
    backdropFilter: "blur(5px)",
    visibility: "hidden",
    transformOrigin: "top right",
    transform: "scale(0.3, 0.6) rotateX(-90deg) translateY(-10px)",
    opacity: 0,
    transition:
      "visibility 0.5s linear, transform 0.25s ease-out, opacity 0.15s ease-out",
    transitionDelay: 0,
  },
  dropdownWrapperOpen: {
    visibility: "visible",
    transform: "scale(1) rotateX(0) translateY(0)",
    opacity: 1,
    transition:
      "visibility 0.5s linear, transform 0.5s cubic-bezier(0.28, 1.47, 0.13, 0.97), opacity 0.25s ease",
    transitionDelay: "0.1s",
  },
  dropdownContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    margin: 0,
    padding: 0,
  },
  dropdownItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingBlock: 17,
    paddingInline: 20,
    borderRadius: 30,
    listStyle: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease-out",
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  },
  dropdownItemLabel: {
    display: "flex",
  },
  dropdownItemLabelText: {
    fontSize: 16,
    fontWeight: 500,
    color: "rgba(var(--foreground), 0.9)",
  },
  dropdownItemLabelTextSelected: {
    fontWeight: 700,
  },
  dropdownItemCheckmark: {
    width: 12,
    height: 9,
    fill: "none",
    stroke: "rgba(var(--foreground), 0.9)",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: 16,
    strokeDashoffset: 16,
    transition: "all 0.1s ease-out",
    transitionDelay: 0,
  },
  dropdownItemCheckmarkSelected: {
    strokeDashoffset: 0,
    transition: "all 0.2s ease-out",
    transitionDelay: "0.1s",
  },
});

export { ratingsFilterStyles as styles };

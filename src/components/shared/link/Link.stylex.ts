import { create } from "@stylexjs/stylex";

const linkStyles = create({
  link: {
    color: "rgb(var(--foreground))",
    textDecoration: "none",
  },
  linkPrimaryColor: {
    color: "rgb(var(--primary-color))",
  },
  linkUnderlinedOnHover: {
    textDecoration: {
      default: "none",
      ":hover": "underline",
    },
  },
});

export { linkStyles as styles };

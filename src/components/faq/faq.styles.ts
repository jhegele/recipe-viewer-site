import { sva } from "@styles/css";

export const faqSlotStyles = sva({
  className: "faq",
  slots: ["root", "item", "header", "trigger", "content", "chevron", "text"],
  base: {
    root: {
      w: "full",
    },
    item: {
      overflow: "hidden",
      mt: "1px",
      "&:focus-within": {
        position: "relative",
        zIndex: 1,
        boxShadow: "0 0 0 2px token(colors.sky.300)",
      },
    },
    header: {
      display: "flex",
    },
    trigger: {
      fontFamily: "inherit",
      bg: "sky.100",
      color: "sky.600",
      p: "0 20px",
      h: "75px",
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      lineHeight: 1,
      _hover: {
        bg: "slate.100",
      },
      "&[data-state='open']": {
        "& .faq__chevron": {
          transform: "rotate(180deg)",
        },
      },
      borderBottom: "1px solid token(colors.sky.300)",
    },
    content: {
      overflow: "hidden",
      bg: "transparent",
      "&[data-state='open']": {
        animation: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
      "&[data-state='closed']": {
        animation: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
    text: {
      p: "15px 20px",
    },
    chevron: {
      color: "sky.500",
      transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    },
  },
});

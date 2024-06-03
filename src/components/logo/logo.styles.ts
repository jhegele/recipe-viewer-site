import { type RecipeVariantProps, sva } from "@styles/css";

export const variantsLogo = sva({
  slots: ["recipe", "fixe"],
  base: {
    recipe: {
      fontFamily: "inter",
      fontWeight: 300,
      letterSpacing: "tight",
      color: "slate.600",
      fontSize: "1.5em",
    },
    fixe: {
      fontFamily: "inter",
      fontWeight: 900,
      letterSpacing: "tight",
      color: "sky.500",
      fontSize: "1.5em",
    },
  },
});

export type VariantsLogo = RecipeVariantProps<typeof variantsLogo>;

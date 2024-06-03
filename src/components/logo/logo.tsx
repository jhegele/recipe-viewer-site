import { Flex, styled } from "@styles/jsx";
import { HTMLStyledProps } from "@styles/types";
import { variantsLogo, type VariantsLogo } from "./logo.styles";

export type LogoProps = VariantsLogo & HTMLStyledProps<"span">;

export const Logo = ({ ...props }: LogoProps) => {
  const classes = variantsLogo();
  return (
    <Flex direction="row">
      <styled.span {...props} className={classes.recipe}>
        Recipe
      </styled.span>
      <styled.span {...props} className={classes.fixe}>
        Fixe
      </styled.span>
    </Flex>
  );
};

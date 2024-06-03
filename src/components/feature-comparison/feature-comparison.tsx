import { Grid, GridItem, styled } from "@styles/jsx";
import { ArrowArcRight, Check, Prohibit } from "@phosphor-icons/react/dist/ssr";
import { css } from "@styles/css";
import React from "react";

type Feature = {
  text: string;
  available: boolean;
};

export type FeatureComparisonProps = {
  features: [Feature, ...Feature[]];
};

const IsAvailable = () => {
  return <Check size={24} className={css({ color: "emerald.500" })} />;
};

const NotAvailable = () => {
  return <Prohibit size={24} className={css({ color: "rose.500" })} />;
};

export const FeatureComparison = ({ features }: FeatureComparisonProps) => {
  return (
    <Grid
      gridTemplateColumns="1fr 50px"
      gridGap="1px"
      bg="slate.300"
      border="1px solid token(colors.slate.300)"
    >
      <GridItem colSpan={2} px={2}>
        <styled.span fontSize="sm" color="sky.800" fontWeight="semibold">
          Features
        </styled.span>
      </GridItem>
      {features.map((feat) => (
        <React.Fragment key={feat.text}>
          <GridItem bg="slate.50" p={1}>
            <styled.span fontSize="sm">{feat.text}</styled.span>
          </GridItem>
          <GridItem
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="slate.50"
          >
            {feat.available ? <IsAvailable /> : <NotAvailable />}
          </GridItem>
        </React.Fragment>
      ))}
    </Grid>
  );
};

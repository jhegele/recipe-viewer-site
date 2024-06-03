"use client";

import * as RAccordion from "@radix-ui/react-accordion";
import { faqSlotStyles } from "./faq.styles";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { styled } from "@styles/jsx";

export type FaqProps = {
  questions: {
    q: string;
    a: string;
  }[];
};

export const Faq = ({ questions }: FaqProps) => {
  const classes = faqSlotStyles({});

  return (
    <RAccordion.Root
      className={classes.root}
      type="single"
      collapsible
      defaultValue="item-0"
    >
      {questions.map((question, idx) => (
        <RAccordion.Item
          key={question.q}
          className={classes.item}
          value={`item-${idx}`}
        >
          <RAccordion.Header className={classes.header}>
            <RAccordion.Trigger className={classes.trigger}>
              {question.q}
              <CaretDown size={12} className={classes.chevron} />
            </RAccordion.Trigger>
          </RAccordion.Header>
          <RAccordion.Content className={classes.content}>
            <styled.div className={classes.text}>{question.a}</styled.div>
          </RAccordion.Content>
        </RAccordion.Item>
      ))}
    </RAccordion.Root>
  );
};

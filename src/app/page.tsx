import { Logo } from "@/components/logo/logo";
import { Flex, styled } from "@styles/jsx";
import Image from "next/image";
import { ArrowArcRight } from "@phosphor-icons/react/dist/ssr";
import { css } from "@styles/css";
import { FeatureComparison } from "@/components/feature-comparison/feature-comparison";
import { Faq } from "@/components/faq/faq";

const Home = () => {
  return (
    <Flex h="full" w="full" direction="column" px={12} pt={8} mb={16}>
      <Logo />
      <Flex
        flex={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={16}
      >
        <styled.span fontSize="xl">
          Sometimes you just want to get cooking...
        </styled.span>
        <Flex direction="row" gap={2} alignItems="center">
          <Flex
            p={6}
            borderRadius="sm"
            border="1px solid token(colors.slate.300)"
            direction="column"
            position="relative"
            w="350px"
            alignItems="center"
            gap={8}
          >
            <styled.span
              fontWeight="semibold"
              color="sky.600"
              position="absolute"
              top={-3}
              left={2}
              bg="slate.50"
              px={2}
              fontSize="lg"
            >
              Before
            </styled.span>
            <Image
              src="/img/rf-before.gif"
              width={300}
              height={304}
              alt="Before animation"
            />
            <FeatureComparison
              features={[
                { text: "Just cooking", available: false },
                {
                  text: "Long-winded recipes in the style of Herman Melville",
                  available: true,
                },
                {
                  text: `The world's most unnecessary photography exhibition`,
                  available: true,
                },
                {
                  text: `Embedded advertising`,
                  available: true,
                },
                {
                  text: `Page layout constantly changing as images and ads load`,
                  available: true,
                },
              ]}
            />
          </Flex>
          <ArrowArcRight
            size={64}
            weight="bold"
            className={css({ color: "sky.500", mx: 4 })}
          />
          <Flex
            p={6}
            borderRadius="sm"
            border="1px solid token(colors.slate.300)"
            direction="column"
            position="relative"
            w="350px"
            alignItems="center"
            gap={8}
          >
            <styled.span
              fontWeight="semibold"
              color="sky.600"
              position="absolute"
              top={-3}
              left={2}
              bg="slate.50"
              px={2}
              fontSize="lg"
            >
              After
            </styled.span>
            <Image
              src="/img/rf-after.gif"
              width={300}
              height={304}
              alt="Before animation"
            />
            <FeatureComparison
              features={[
                { text: "Just cooking", available: true },
                {
                  text: "Long-winded recipes in the style of Herman Melville",
                  available: false,
                },
                {
                  text: `The world's most unnecessary photography exhibition`,
                  available: false,
                },
                {
                  text: `Embedded advertising`,
                  available: false,
                },
                {
                  text: `Page layout constantly changing as images and ads load`,
                  available: false,
                },
              ]}
            />
          </Flex>
        </Flex>
        <Flex w="800px" pb={16} direction="column" gap={4}>
          <styled.span fontSize="lg" fontWeight="semibold">
            Frequently Asked Questions
          </styled.span>
          <Faq
            questions={[
              {
                q: "What is RecipeFixe?",
                a: `RecipeFixe is a browser extension that provides quick access to recipes for most recipe sites. No more scrolling through pages of text and photos. No more waiting for the page to load to avoid everything jumping around. Just the information that you need, at the click of a button.`,
              },
              {
                q: "Who built this thing and why?",
                a: `I did. I'm just a regular guy with a job and a family. My wife and I spend time each week planning meals for our family and one of the most frustrating parts of planning and cooking meals is dealing with recipe sites.`,
              },
              {
                q: "Should I use this?",
                a: `🤷 Totally up to you! Give it a whirl and if you like it, great, if not, no hurt feelings.`,
              },
            ]}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;

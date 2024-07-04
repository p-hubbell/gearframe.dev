'use client';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Container,
  Heading,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Box,
  ChakraProvider,
} from '@chakra-ui/react';
import Image from 'next/image';

const designDirectionImgs = [
  '/imgs/design-1.png',
  '/imgs/design-2.png',
  '/imgs/design-3.png',
  '/imgs/design-4.png',
];

const ImageWrap = (imgs: string[]) => {
  return (
    <Wrap spacing="16px" justify="center">
      {imgs.map((img, idx) => (
        <WrapItem key={`img-${idx}`}>
          <Image src={img} width={200} height={200} alt={`img ${idx}`} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default function Index() {
  return (
    <ChakraProvider>
      <Box marginY="32px">
        <VStack spacing="32px">
          <VStack spacing="16px">
            <Heading as="h1">gearframe - stay tuned...</Heading>
            <Image
              src="/imgs/logo-square.png"
              width={250}
              height={250}
              alt="gearframe logo"
            />
            <Container>
              <Text fontSize="lg">
                an evolving playground for implementing project and design ideas
              </Text>
            </Container>
            <Link href="https://github.com/p-hubbell/gearframe.dev" isExternal>
              codebase on github <ExternalLinkIcon mx="2px" />
            </Link>
          </VStack>
          <VStack spacing="16px">
            <Heading as="h2">design direction</Heading>
            {ImageWrap(designDirectionImgs)}
          </VStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

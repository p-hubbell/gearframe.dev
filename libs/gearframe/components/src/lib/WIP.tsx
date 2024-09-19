'use client';

import { Box, Container, Text } from '@chakra-ui/react';
import { fontStyles } from '@gearframe.dev/styles';
import { ReactNode } from 'react';

interface WIPProps {
  children: ReactNode;
}

export default function WIP(props: WIPProps) {
  const { children } = props;
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      mt="16px"
      w="100%"
    >
      <Box
        borderWidth="1px"
        borderColor="green.500"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="75%"
        bgImage="
        // linear-gradient(to right, green.800 1px, transparent 1px),
        // linear-gradient(to bottom, green.800 1px, transparent 1px)"
        bgSize="20px 20px"
      >
        <Text className={fontStyles.blueScreen} color="gray.100" fontSize={'large'}>
          <Container maxW="container.md">
            <Box paddingY="12px">{children}</Box>
          </Container>
        </Text>
      </Box>
    </Box>
  );
}

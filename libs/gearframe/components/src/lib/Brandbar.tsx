'use client';

import {
  Box,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { fontStyles } from '@gearframe.dev/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Brandbar() {
  const pathname = usePathname();

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
        linear-gradient(to right, green.800 1px, transparent 1px),
        linear-gradient(to bottom, green.800 1px, transparent 1px)"
        bgSize="20px 20px"
      >
        <Heading
          className={fontStyles.blueScreen}
          color="green.500"
          as="h1"
          size="4xl"
          mb="5px"
        >
          GEARFRAME
        </Heading>
      </Box>
      <Box
        borderWidth="1px"
        borderTop="0px"
        borderColor="green.500"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w="75%"
      >
        <Box bg="green.500" className={fontStyles.blueScreen} pl="8px" pr="8px">
          {`https://gearframe.dev` + pathname}
        </Box>
        <HStack
          className={fontStyles.blueScreen}
          color="green.500"
          mr="8px"
          spacing="16px"
        >
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            HOME
          </Link>
          <Menu>
            <MenuButton>TOOLS</MenuButton>
            <MenuList color="gray.800">
              <MenuItem>
                <Link
                  className={`link ${pathname === '/ascii-code' ? 'active' : ''}`}
                  href="/ascii-code"
                >
                  ASCII CODE
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className={`link ${pathname === '/fl-themes' ? 'active' : ''}`}
                  href="/fl-themes"
                >
                  FL THEMES
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className={`link ${pathname === '/chord-lab' ? 'active' : ''}`}
                  href="/chord-lab"
                >
                  CHORD LAB
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="/about"
          >
            ABOUT
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}

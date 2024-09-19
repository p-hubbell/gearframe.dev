'use client';

import {
  Box,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { fontStyles, typoStyles } from '@gearframe.dev/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Brandbar() {
  const pathname = usePathname();
  const { activeLinkStyle } = typoStyles;

  return (
    <>
      <Heading className={fontStyles.blueScreen} as="h1" size="4xl" mb="5px">
        GEARFRAME
      </Heading>

      {`https://gearframe.dev` + pathname}

      <Link className={`${pathname === '/' ? activeLinkStyle : ''}`} href="/">
        <Text fontSize="xl">HOME</Text>
      </Link>
      <Menu>
        <MenuButton fontSize="xl">TOOLS</MenuButton>
        <MenuList color="bg1.500">
          <MenuItem>
            <Link href="/ascii-code">ASCII CODE</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/fl-themes">FL THEMES</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/chord-lab">CHORD LAB</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Link
        className={`${pathname === '/about' ? activeLinkStyle : ''}`}
        href="/about"
      >
        <Text fontSize="xl">ABOUT</Text>
      </Link>
    </>
  );
}

'use client';
import {
  ChakraProvider,
  ColorModeScript,
  StyleFunctionProps,
  ThemeConfig,
  extendTheme,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('gray.900', 'gray.900')(props),
      },
    }),
  },
  colors: {
    green: {
      '50': '#F0F8ED',
      '100': '#D6EBCB',
      '200': '#BCDFAA',
      '300': '#A2D289',
      '400': '#88C568',
      '500': '#6DB847',
      '600': '#579339',
      '700': '#426F2A',
      '800': '#2C4A1C',
      '900': '#16250E',
    },
    gray: {
      '50': '#F2F2F2',
      '100': '#DBDBDB',
      '200': '#C4C4C4',
      '300': '#ADADAD',
      '400': '#969696',
      '500': '#808080',
      '600': '#666666',
      '700': '#4D4D4D',
      '800': '#333333',
      '900': '#1A1A1A',
    },
    orange: {
      '50': '#FDEBE8',
      '100': '#F8C8BE',
      '200': '#F4A495',
      '300': '#F0816B',
      '400': '#EC5E41',
      '500': '#E73A18',
      '600': '#B92E13',
      '700': '#8B230E',
      '800': '#5D1709',
      '900': '#2E0C05',
    },
    teal: {
      '50': '#F0F4F5',
      '100': '#D4E0E3',
      '200': '#B8CCD1',
      '300': '#9CB8BE',
      '400': '#81A4AC',
      '500': '#658F9A',
      '600': '#51737B',
      '700': '#3D565C',
      '800': '#28393E',
      '900': '#141D1F',
    },
    blue: {
      '50': '#F0F2F4',
      '100': '#D6DAE1',
      '200': '#BBC2CE',
      '300': '#A0ABBB',
      '400': '#8693A7',
      '500': '#6B7B94',
      '600': '#566276',
      '700': '#404A59',
      '800': '#2B313B',
      '900': '#15191E',
    },
  },
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}

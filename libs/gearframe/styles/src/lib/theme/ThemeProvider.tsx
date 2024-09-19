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

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('themeLight.bg', 'themeDark.bg')(props), // light, dark
        color: mode('themeLight.fg', 'themeDark.fg')(props),
      },
    }),
  },
  colors: {
    themeLight: {
      bg: '#00366b',
      fg: '#fff',
    },
    themeDark: {
      bg: '#fff',
      fg: '#00366b',
    },
  },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}

import { Brandbar } from '@gearframe.dev/components';
import './global.css';
import { ThemeProvider, blueScreenFont } from '@gearframe.dev/styles';
import {combineClasses} from '@gearframe.dev/utils';

export const metadata = {
  title: 'GEARFRAME.DEV',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={combineClasses(blueScreenFont.variable)}>
        <ThemeProvider>
          <Brandbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

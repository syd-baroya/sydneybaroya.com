import "@/styles/globals.css";
import ThemeRegistry from "./ThemeRegistry";
import FooterWrapper from "@/components/FooterWrapper";
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

export const metadata = {
  title: "Sydney Baroya",
  description: "Sydney Baroya's Portfolio",
  other: {
    'grammarly': 'false',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.variable}>
      <head>
        <link rel="icon" href="/images/dolphin.png" type="image/png" />
      </head>
      <body>
        <ThemeRegistry>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '94vh' }}>
            <main style={{ flex: 1 }}>{children}</main>
            <FooterWrapper />
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}

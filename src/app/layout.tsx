import "./globals.css";
import { Nunito } from 'next/font/google';

    const nunito = Nunito({
      subsets: ['latin'], 
      display: 'swap', 
      variable: '--font-nunito', 
    });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}

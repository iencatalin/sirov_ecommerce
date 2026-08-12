import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata = {
  title: 'Sirov - Magazin Artizanal',
  description: 'Produse premium făcute cu suflet',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ro' className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

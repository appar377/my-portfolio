import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import Background from '@/components/Background';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Yusuke Portfolio',
  description: 'Creative Developer & Designer Portfolio',
};

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${playfair.variable} min-h-screen`}>
        <Background />
        <div className="relative z-20">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
} 
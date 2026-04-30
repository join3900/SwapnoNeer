import type {Metadata} from 'next';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';
import MobileBottomNav from '@/components/MobileBottomNav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PropertyBuild Hub',
  description: 'A comprehensive real estate and construction platform for listing properties and requesting house construction services.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <MobileBottomNav />
        </LanguageProvider>
      </body>
    </html>
  );
}

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingSocialBar from '@/components/FloatingSocialBar';
import FloatingCallBtn from '@/components/FloatingCallBtn';

export const metadata = {
  title: 'Orange Virtual Connect | AI, Technology & BPO for Mid-Size Enterprises',
  description: 'Orange Virtual Connect - Bespoke technology, AI agents, WhatsApp automation and SaaS products for mid-size organizations worldwide.',
  keywords: ['AI agents', 'Technology', 'BPO', 'Software Development', 'SaaS', 'WhatsApp Automation', 'Orange Virtual Connect'],
  authors: [{ name: 'Orange Virtual Connect' }],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Handlee&family=Inter:wght@400;500;600;700;800&family=Lexend+Exa:wght@100..900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingSocialBar />
        <FloatingCallBtn />
      </body>
    </html>
  );
}

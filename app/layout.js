import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap'
});

export const metadata = {
  title: {
    template: '%s | Campusify',
    default: 'Campusify - Data-Driven Campus Management',
  },
  description: "Data-driven decisions made easy with Campusify. Explore our latest updates and insights.",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/icon.png',
    shortcut: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

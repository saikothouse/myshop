import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My E-commerce Site',
  description: 'Buy the best products online.',
  openGraph: {
    title: 'My E-commerce Site',
    description: 'Buy the best products online.',
    url: 'https://your-domain.com',
    siteName: 'My E-commerce Site',
    images: [
      {
        url: 'https://your-domain.com/image.jpg',
        width: 800,
        height: 600,
        alt: 'Site image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold">My E-Commerce</a>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-700">Home</a></li>
              <li><a href="/about" className="text-gray-700">About</a></li>
              <li><a href="/contact" className="text-gray-700">Contact</a></li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto my-8">
          {children}
        </main>
        <footer className="bg-white p-4 shadow-t-md mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 My E-Commerce. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

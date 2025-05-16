import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trek for Teens - Supporting Homeless Youth Across Canada',
  description: 'Join Trek for Teens in making a difference for homeless youth across Canada through volunteering, donations, and community support.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Trek for Teens
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
                <Link href="/regions" className="text-gray-600 hover:text-blue-600">
                  Our Regions
                </Link>
                <Link href="/partners" className="text-gray-600 hover:text-blue-600">
                  Our Partners
                </Link>
                <Link href="/impact" className="text-gray-600 hover:text-blue-600">
                  Our Impact
                </Link>
                <Link 
                  href="/donate" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
                >
                  Donate
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {children}

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Trek for Teens</h3>
                <p className="text-gray-400">
                  Making a difference in the lives of homeless youth across Canada.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link href="/regions" className="text-gray-400 hover:text-white">Our Regions</Link></li>
                  <li><Link href="/partners" className="text-gray-400 hover:text-white">Our Partners</Link></li>
                  <li><Link href="/impact" className="text-gray-400 hover:text-white">Our Impact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
                <ul className="space-y-2">
                  <li><Link href="/volunteer" className="text-gray-400 hover:text-white">Volunteer</Link></li>
                  <li><Link href="/donate" className="text-gray-400 hover:text-white">Donate</Link></li>
                  <li><Link href="/partner" className="text-gray-400 hover:text-white">Become a Partner</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <p className="text-gray-400">
                  Email: hello@trekforteens.com
                </p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    {/* Add Facebook icon */}
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    {/* Add Twitter icon */}
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    {/* Add LinkedIn icon */}
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© 2024 Trek for Teens Foundation | Charitable Number: 840352066RR0001</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 
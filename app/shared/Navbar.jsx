import Link from 'next/link';
import { Phone } from 'lucide-react';
import Image from 'next/image';


const navLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Careers', href: '/careers' },
  { label: 'News & Blog', href: '/news' },
  { label: 'Partners', href: '/partners' },
];

const Navbar = () => {
  return (
    <header className="bg-[#8A1538] sticky top-0 z-50 ">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between text-white">

        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Another description"
            width={800}
            height={300}
            className="h-full w-full"
          />
          <div>

            <Link href="/" className="text-lg font-semibold">
              Educare
            </Link>
          </div>
        </div>


        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm hover:text-gray-300 transition"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center text-sm">
            <Phone size={16} className="mr-1" />
            <span>+800 8080 8080</span>
          </div>
          <Link href="/contact">
            <button className="bg-white text-[#8A1538] hover:bg-gray-100 transition px-4 py-1 rounded-md text-sm">
              Contact us
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

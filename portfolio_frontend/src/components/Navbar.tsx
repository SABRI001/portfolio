// src/components/Navbar.tsx
import Link from 'next/link';
import { HomeIcon, DocumentIcon } from '@heroicons/react/outline';
import ThemeSwitcher from "../components/ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full p-4 z-10 shadow-md">
      <div className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li className="flex items-center">
            <HomeIcon className="h-5 w-5 text-white mr-1" />
            <Link href="/" className="text-white hover:text-blue-800 transition duration-200">Home</Link>
          </li>
          <li className="flex items-center">
            <DocumentIcon className="h-5 w-5 text-white mr-1" />
            <Link href="/form" className="text-white hover:text-blue-800 transition duration-200">Form</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
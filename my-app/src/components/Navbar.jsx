import { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons
import logo from '../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
                <img
                    src={logo}
                    alt="My Logo"
                    className="h-16 w-auto"
                />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                Home
                </a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                About
                </a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                Services
                </a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                Contact
                </a>
            </div>
        </div>
    
    </nav>
  );
}

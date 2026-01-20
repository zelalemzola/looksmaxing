"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Centered Logo */}
          <Link
            href="/home"
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <span className="text-2xl  text-black">luvly</span>
          </Link>

          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="md:hidden absolute right-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Sheet */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/home"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/quiz"
                className="block px-3 py-2 rounded-md bg-black text-white font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Start Quiz
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

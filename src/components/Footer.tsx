import React from "react";
import { Link } from "react-router-dom";
import { Diamond, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-green-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://res.cloudinary.com/dcidvttvz/image/upload/v1740777244/logo_ohh01b.jpg"
                alt="RB Jewellers"
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-contain rounded-full"
              />
              <span className="text-2xl font-serif font-bold">RB JEWELERS</span>
            </div>
            <p className="text-gray-300 mb-6">
              Crafting timeless pieces of elegance since 1990. Each piece tells
              a unique story of luxury and sophistication.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/collections"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/care-guide"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Jewelry Care Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/size-guide"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 RB JEWELERS. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

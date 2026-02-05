'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl text-white mb-4">Cafe Nine</h3>
            <p className="mb-6 text-gray-400">
              Experience the finest in global cuisine with our carefully curated menu and exceptional service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/menu" className="hover:text-gold-500 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-gold-500 transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-gold-500 transition-colors">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-gold-500 transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="hover:text-gold-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-gold-500 transition-colors">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gold-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhone className="text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+1234567890" className="hover:text-gold-500 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@cafenine.com" className="hover:text-gold-500 transition-colors">
                    info@cafenine.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  123 Culinary Street<br />
                  Fine Dining District<br />
                  New York, NY 10001
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Cafe Nine. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/terms" className="hover:text-gold-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-gold-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-gold-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

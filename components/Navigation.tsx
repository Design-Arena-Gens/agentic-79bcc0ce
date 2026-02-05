'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { FaSun, FaMoon, FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { data: session } = useSession()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const cartItems = useCartStore((state) => state.items)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/reservations', label: 'Reservations' },
    { href: '/locations', label: 'Locations' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={`font-serif text-3xl font-bold transition-colors ${
                isScrolled
                  ? 'text-gray-900 dark:text-white'
                  : 'text-white'
              }`}
            >
              Cafe Nine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-gold-500 ${
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-300'
                    : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    : 'hover:bg-white/20 text-white'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            )}

            {/* Cart */}
            <Link
              href="/cart"
              className={`p-2 rounded-full transition-colors relative ${
                isScrolled
                  ? 'hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  : 'hover:bg-white/20 text-white'
              }`}
            >
              <FaShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {session ? (
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="/profile"
                  className={`p-2 rounded-full transition-colors ${
                    isScrolled
                      ? 'hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                      : 'hover:bg-white/20 text-white'
                  }`}
                >
                  <FaUser size={20} />
                </Link>
                {session.user?.role === 'admin' && (
                  <Link
                    href="/admin"
                    className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white rounded-full transition-colors font-medium"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => signOut()}
                  className={`px-4 py-2 rounded-full transition-colors font-medium ${
                    isScrolled
                      ? 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/auth/signin"
                className={`hidden lg:block px-6 py-2 rounded-full transition-colors font-medium ${
                  isScrolled
                    ? 'bg-gold-500 hover:bg-gold-600 text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-900'
                }`}
              >
                Sign In
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  : 'hover:bg-white/20 text-white'
              }`}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gold-500 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                {session ? (
                  <>
                    <Link
                      href="/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gold-500 font-medium"
                    >
                      Profile
                    </Link>
                    {session.user?.role === 'admin' && (
                      <Link
                        href="/admin"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-gold-500 hover:text-gold-600 font-medium"
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        signOut()
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full py-2 text-left text-gray-700 dark:text-gray-300 hover:text-gold-500 font-medium"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    href="/auth/signin"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-lg text-center font-medium"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

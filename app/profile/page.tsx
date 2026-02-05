'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FaUser, FaShoppingBag, FaHeart, FaCalendar, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa'
import Link from 'next/link'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    router.push('/auth/signin')
    return null
  }

  const menuItems = [
    { icon: FaUser, label: 'Personal Information', href: '/profile/edit' },
    { icon: FaShoppingBag, label: 'Order History', href: '/profile/orders' },
    { icon: FaCalendar, label: 'Reservations', href: '/profile/reservations' },
    { icon: FaHeart, label: 'Favorites', href: '/profile/favorites' },
    { icon: FaMapMarkerAlt, label: 'Saved Addresses', href: '/profile/addresses' },
    { icon: FaCreditCard, label: 'Payment Methods', href: '/profile/payment' },
  ]

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 elegant-shadow">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gold-500 flex items-center justify-center text-white text-4xl font-serif">
                {session?.user?.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="font-serif text-4xl mb-2">Welcome back, {session?.user?.name}!</h1>
                <p className="text-gray-600 dark:text-gray-400">{session?.user?.email}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className="block bg-white dark:bg-gray-800 rounded-xl p-6 elegant-shadow hover:shadow-2xl transition-all hover:scale-105 duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.label}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center elegant-shadow">
            <div className="text-4xl font-bold text-gold-500 mb-2">12</div>
            <p className="text-gray-600 dark:text-gray-400">Total Orders</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center elegant-shadow">
            <div className="text-4xl font-bold text-gold-500 mb-2">8</div>
            <p className="text-gray-600 dark:text-gray-400">Favorite Dishes</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center elegant-shadow">
            <div className="text-4xl font-bold text-gold-500 mb-2">5</div>
            <p className="text-gray-600 dark:text-gray-400">Reservations Made</p>
          </div>
        </motion.div>

        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="font-serif text-3xl mb-6">Recent Orders</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 elegant-shadow">
            <div className="space-y-4">
              {[
                { id: '1234', date: '2024-01-15', total: 48.50, status: 'Delivered' },
                { id: '1235', date: '2024-01-10', total: 62.00, status: 'Delivered' },
                { id: '1236', date: '2024-01-05', total: 35.75, status: 'Delivered' },
              ].map((order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-0"
                >
                  <div>
                    <p className="font-semibold">Order #{order.id}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gold-500">${order.total.toFixed(2)}</p>
                    <p className="text-sm text-green-500">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/profile/orders"
              className="block mt-6 text-center text-gold-500 hover:text-gold-600 font-medium"
            >
              View All Orders
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

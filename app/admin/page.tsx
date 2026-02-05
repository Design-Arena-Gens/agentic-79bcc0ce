'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaUtensils, FaShoppingBag, FaCalendar, FaUsers, FaMapMarkerAlt, FaChartLine, FaComments, FaTags } from 'react-icons/fa'

export default function AdminDashboard() {
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

  if (status === 'unauthenticated' || session?.user?.role !== 'admin') {
    router.push('/')
    return null
  }

  const menuItems = [
    { icon: FaUtensils, label: 'Manage Menu', href: '/admin/menu', color: 'bg-blue-500' },
    { icon: FaShoppingBag, label: 'Orders', href: '/admin/orders', color: 'bg-green-500' },
    { icon: FaCalendar, label: 'Reservations', href: '/admin/reservations', color: 'bg-purple-500' },
    { icon: FaUsers, label: 'Customers', href: '/admin/customers', color: 'bg-orange-500' },
    { icon: FaMapMarkerAlt, label: 'Locations', href: '/admin/locations', color: 'bg-red-500' },
    { icon: FaChartLine, label: 'Analytics', href: '/admin/analytics', color: 'bg-indigo-500' },
    { icon: FaComments, label: 'Support', href: '/admin/support', color: 'bg-teal-500' },
    { icon: FaTags, label: 'Promotions', href: '/admin/promotions', color: 'bg-pink-500' },
  ]

  const stats = [
    { label: 'Total Orders Today', value: '45', change: '+12%', color: 'text-green-500' },
    { label: 'Revenue Today', value: '$2,340', change: '+8%', color: 'text-green-500' },
    { label: 'Active Reservations', value: '28', change: '+5%', color: 'text-blue-500' },
    { label: 'Total Customers', value: '1,247', change: '+23%', color: 'text-purple-500' },
  ]

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-serif text-5xl mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back, {session?.user?.name}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 elegant-shadow"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className={`text-sm ${stat.color}`}>{stat.change} from yesterday</p>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className="block bg-white dark:bg-gray-800 rounded-xl p-6 elegant-shadow hover:shadow-2xl transition-all hover:scale-105 duration-300"
              >
                <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center text-white mb-4`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-semibold text-lg">{item.label}</h3>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Recent Orders */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 elegant-shadow">
            <h2 className="font-serif text-2xl mb-6">Recent Orders</h2>
            <div className="space-y-4">
              {[
                { id: '5678', customer: 'John Doe', amount: 48.50, status: 'Preparing' },
                { id: '5679', customer: 'Jane Smith', amount: 62.00, status: 'Ready' },
                { id: '5680', customer: 'Bob Johnson', amount: 35.75, status: 'Delivered' },
              ].map((order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
                >
                  <div>
                    <p className="font-semibold">#{order.id}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${order.amount.toFixed(2)}</p>
                    <p className="text-sm text-gold-500">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Reservations */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 elegant-shadow">
            <h2 className="font-serif text-2xl mb-6">Upcoming Reservations</h2>
            <div className="space-y-4">
              {[
                { name: 'Sarah Wilson', guests: 4, time: '7:00 PM', table: 'A12' },
                { name: 'Mike Brown', guests: 2, time: '7:30 PM', table: 'B5' },
                { name: 'Emily Davis', guests: 6, time: '8:00 PM', table: 'C8' },
              ].map((reservation, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
                >
                  <div>
                    <p className="font-semibold">{reservation.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {reservation.guests} guests • Table {reservation.table}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gold-500">{reservation.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

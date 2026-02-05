'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCalendar, FaClock, FaUsers, FaChair, FaCheckCircle } from 'react-icons/fa'

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    tablePreference: 'any',
    specialRequests: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl"
        >
          <div className="text-6xl text-green-500 mb-6">
            <FaCheckCircle className="inline" />
          </div>
          <h2 className="font-serif text-5xl mb-4">Reservation Confirmed!</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Thank you, {formData.name}! Your table for {formData.guests} guests on{' '}
            {formData.date} at {formData.time} has been confirmed.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We&apos;ve sent a confirmation email to {formData.email}. We look forward to
            serving you!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-full transition-all duration-300 font-medium"
          >
            Make Another Reservation
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
            alt="Reservations"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-serif text-6xl md:text-7xl mb-4">Reservations</h1>
          <p className="text-xl md:text-2xl font-light">
            Reserve your table for an unforgettable experience
          </p>
        </motion.div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 elegant-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="+1 (234) 567-8900"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="date">
                  <FaCalendar className="inline mr-2" />
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="time">
                  <FaClock className="inline mr-2" />
                  Time *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                >
                  <option value="">Select time</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="12:30">12:30 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="13:30">1:30 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="guests">
                  <FaUsers className="inline mr-2" />
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                  <option value="10+">10+ Guests (Special Event)</option>
                </select>
              </div>
            </div>

            {/* Table Preference */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="tablePreference">
                <FaChair className="inline mr-2" />
                Table Preference
              </label>
              <select
                id="tablePreference"
                name="tablePreference"
                value={formData.tablePreference}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
              >
                <option value="any">No Preference</option>
                <option value="window">Window Seating</option>
                <option value="booth">Booth</option>
                <option value="patio">Patio</option>
                <option value="private">Private Room</option>
              </select>
            </div>

            {/* Special Requests */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2" htmlFor="specialRequests">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                placeholder="Any dietary restrictions, allergies, or special occasions we should know about?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-lg transition-all duration-300 font-semibold text-lg"
            >
              Confirm Reservation
            </button>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              By submitting this form, you agree to our cancellation policy. Please give
              us at least 24 hours notice for cancellations.
            </p>
          </motion.form>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center elegant-shadow"
            >
              <div className="text-4xl mb-3">🕒</div>
              <h3 className="font-serif text-xl mb-2">Operating Hours</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mon-Thu: 11am - 10pm<br />
                Fri-Sat: 11am - 11pm<br />
                Sun: 10am - 9pm
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center elegant-shadow"
            >
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-serif text-xl mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-400">
                For same-day reservations<br />
                or groups of 10+:<br />
                <a href="tel:+1234567890" className="text-gold-500 hover:text-gold-600">
                  +1 (234) 567-890
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center elegant-shadow"
            >
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-serif text-xl mb-2">Private Events</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Host your special event<br />
                with us. Contact our<br />
                events team for details.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

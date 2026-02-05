'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
          <h2 className="font-serif text-5xl mb-4">Message Sent!</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Thank you for contacting us, {formData.name}! We&apos;ve received your message
            and will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-full transition-all duration-300 font-medium"
          >
            Send Another Message
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
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
            alt="Contact"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-serif text-6xl md:text-7xl mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl font-light">
            We&apos;d love to hear from you
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center elegant-shadow"
            >
              <div className="text-5xl text-gold-500 mb-4">
                <FaPhone className="inline" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Mon-Fri: 9am - 6pm
              </p>
              <a
                href="tel:+1234567890"
                className="text-gold-500 hover:text-gold-600 font-medium text-lg"
              >
                +1 (234) 567-890
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center elegant-shadow"
            >
              <div className="text-5xl text-gold-500 mb-4">
                <FaEnvelope className="inline" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                We&apos;ll respond within 24 hours
              </p>
              <a
                href="mailto:info@cafenine.com"
                className="text-gold-500 hover:text-gold-600 font-medium text-lg"
              >
                info@cafenine.com
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center elegant-shadow"
            >
              <div className="text-5xl text-gold-500 mb-4">
                <FaMapMarkerAlt className="inline" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Visit Us</h3>
              <p className="text-gray-600 dark:text-gray-400">
                123 Culinary Street<br />
                Fine Dining District<br />
                New York, NY 10001
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 elegant-shadow"
            >
              <h2 className="font-serif text-4xl mb-8 text-center">Send Us a Message</h2>

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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="subject">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="reservation">Reservation</option>
                    <option value="feedback">Feedback</option>
                    <option value="catering">Catering & Events</option>
                    <option value="careers">Careers</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-lg transition-all duration-300 font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-5xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Find quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What are your operating hours?',
                a: 'We are open Monday-Thursday 11am-10pm, Friday-Saturday 11am-11pm, and Sunday 10am-9pm.',
              },
              {
                q: 'Do you accept walk-ins?',
                a: 'Yes, we welcome walk-ins based on availability. However, we recommend making a reservation to guarantee a table.',
              },
              {
                q: 'Do you offer private dining or event spaces?',
                a: 'Yes! We have private dining rooms available for events. Please contact our events team at events@cafenine.com.',
              },
              {
                q: 'What is your cancellation policy?',
                a: 'We require at least 24 hours notice for cancellations. Same-day cancellations may be subject to a fee.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6"
              >
                <h3 className="font-serif text-xl mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

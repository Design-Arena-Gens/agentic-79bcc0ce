'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'

export default function LocationsPage() {
  const locations = [
    {
      id: 1,
      name: 'Cafe Nine Downtown',
      address: '123 Culinary Street, Fine Dining District, New York, NY 10001',
      phone: '+1 (234) 567-8901',
      hours: 'Mon-Thu: 11am-10pm, Fri-Sat: 11am-11pm, Sun: 10am-9pm',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      coordinates: { lat: 40.7589, lng: -73.9851 },
      features: ['Private Dining', 'Outdoor Seating', 'Bar', 'Valet Parking'],
    },
    {
      id: 2,
      name: 'Cafe Nine Waterfront',
      address: '456 Harbor Avenue, Marina District, New York, NY 10002',
      phone: '+1 (234) 567-8902',
      hours: 'Mon-Thu: 11am-10pm, Fri-Sat: 11am-11pm, Sun: 10am-9pm',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
      coordinates: { lat: 40.7484, lng: -73.9857 },
      features: ['Waterfront Views', 'Rooftop Bar', 'Live Music', 'Event Space'],
    },
    {
      id: 3,
      name: 'Cafe Nine Uptown',
      address: '789 Elegance Boulevard, Upper District, New York, NY 10003',
      phone: '+1 (234) 567-8903',
      hours: 'Mon-Thu: 11am-10pm, Fri-Sat: 11am-11pm, Sun: 10am-9pm',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      coordinates: { lat: 40.7794, lng: -73.9632 },
      features: ['Wine Cellar', 'Private Events', 'Chef\'s Table', 'Garden Patio'],
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920"
            alt="Locations"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-serif text-6xl md:text-7xl mb-4">Our Locations</h1>
          <p className="text-xl md:text-2xl font-light">
            Find a Cafe Nine near you
          </p>
        </motion.div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden elegant-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 lg:h-auto">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="font-serif text-4xl mb-6">{location.name}</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-gold-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium mb-1">Address</p>
                        <p className="text-gray-600 dark:text-gray-400">{location.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaPhone className="text-gold-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium mb-1">Phone</p>
                        <a
                          href={`tel:${location.phone}`}
                          className="text-gray-600 dark:text-gray-400 hover:text-gold-500"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaClock className="text-gold-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium mb-1">Hours</p>
                        <p className="text-gray-600 dark:text-gray-400">{location.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-medium mb-3">Features</p>
                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-lg transition-colors font-medium text-center"
                    >
                      Get Directions
                    </a>
                    <a
                      href="/reservations"
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors font-medium text-center"
                    >
                      Make Reservation
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-5xl mb-4">Find Us on the Map</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              All our locations in one convenient view
            </p>
          </motion.div>

          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden elegant-shadow">
            <div className="relative h-[500px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center p-8">
                <FaMapMarkerAlt className="text-6xl text-gold-500 mb-4 mx-auto" />
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  Interactive Map
                </p>
                <p className="text-gray-500 dark:text-gray-500">
                  Map integration would be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl mb-6">Visit Us Today</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Experience the finest dining at any of our three locations. We look forward to serving you.
            </p>
            <a
              href="/reservations"
              className="inline-block px-10 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-full transition-all duration-300 font-semibold text-lg"
            >
              Reserve Your Table
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar, FaArrowRight } from 'react-icons/fa'

export default function Home() {
  const featuredDishes = [
    {
      id: 1,
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with lemon butter sauce',
      image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800',
      price: '$32',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Wagyu Steak',
      description: 'Premium Japanese wagyu with truffle reduction',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
      price: '$68',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Lobster Risotto',
      description: 'Creamy arborio rice with fresh Maine lobster',
      image: 'https://images.unsplash.com/photo-1534939268298-e7dfc30c00ad?w=800',
      price: '$45',
      rating: 4.7,
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'An absolutely extraordinary dining experience. The attention to detail is unmatched.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'The finest restaurant in the city. Every dish is a masterpiece.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      comment: 'Impeccable service and cuisine that exceeds all expectations.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
            alt="Fine Dining"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tight">
            Cafe Nine
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Where Culinary Art Meets Global Excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-full transition-all duration-300 font-medium"
            >
              Explore Menu
            </Link>
            <Link
              href="/reservations"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full transition-all duration-300 font-medium border border-white/30"
            >
              Reserve Table
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <div className="text-sm">Scroll to explore</div>
        </motion.div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl mb-4">Chef&apos;s Recommendations</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Handpicked selections from our culinary maestro
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 mb-4 overflow-hidden rounded-lg elegant-shadow">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold">{dish.rating}</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2">{dish.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold text-gold-500">{dish.price}</span>
                  <Link
                    href="/menu"
                    className="text-gold-500 hover:text-gold-600 flex items-center gap-2 font-medium"
                  >
                    View Details <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:scale-105 transition-transform duration-300 font-medium"
            >
              View Full Menu <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/order"
            className="group relative h-64 overflow-hidden rounded-lg elegant-shadow"
          >
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
              alt="Order Online"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-serif text-3xl mb-2">Order Online</h3>
              <p className="text-white/80">Delivered to your doorstep</p>
            </div>
          </Link>

          <Link
            href="/reservations"
            className="group relative h-64 overflow-hidden rounded-lg elegant-shadow"
          >
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
              alt="Reservations"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-serif text-3xl mb-2">Book a Table</h3>
              <p className="text-white/80">Reserve your perfect evening</p>
            </div>
          </Link>

          <Link
            href="/locations"
            className="group relative h-64 overflow-hidden rounded-lg elegant-shadow"
          >
            <Image
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800"
              alt="Locations"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-serif text-3xl mb-2">Our Branches</h3>
              <p className="text-white/80">Find us near you</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl mb-4">Guest Experiences</h2>
            <p className="text-gray-400 text-lg">
              What our guests say about their dining experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">&quot;{testimonial.comment}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gold-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl mb-6">Reserve Your Experience</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us for an unforgettable culinary journey. Book your table today.
          </p>
          <Link
            href="/reservations"
            className="inline-block px-10 py-4 bg-white text-gold-600 rounded-full hover:scale-105 transition-transform duration-300 font-semibold text-lg"
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  const chefs = [
    {
      name: 'Chef Alessandro Romano',
      title: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800',
      bio: 'With over 20 years of culinary excellence, Chef Alessandro brings authentic Italian techniques combined with modern innovation.',
    },
    {
      name: 'Chef Yuki Tanaka',
      title: 'Head Sushi Chef',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800',
      bio: 'Trained in Tokyo for 15 years, Chef Yuki is a master of traditional Japanese cuisine and brings unparalleled expertise.',
    },
    {
      name: 'Chef Marie Dubois',
      title: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=800',
      bio: 'A graduate of Le Cordon Bleu Paris, Chef Marie creates exquisite desserts that are true works of art.',
    },
  ]

  const values = [
    {
      icon: '🌟',
      title: 'Quality Excellence',
      description: 'We source only the finest ingredients from trusted suppliers around the world.',
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to sustainable practices and supporting local farmers and producers.',
    },
    {
      icon: '❤️',
      title: 'Passion',
      description: 'Every dish is crafted with love, care, and dedication to culinary artistry.',
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Building lasting relationships with our guests and being part of the community.',
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920"
            alt="About"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-serif text-6xl md:text-7xl mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            A journey of culinary excellence spanning over two decades
          </p>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl mb-6">The Cafe Nine Philosophy</h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <p>
                Founded in 2003, Cafe Nine began with a simple vision: to create a dining experience
                that celebrates the rich diversity of global cuisine while maintaining the highest
                standards of quality and service.
              </p>
              <p>
                Our name, &quot;Nine,&quot; represents the nine essential elements we believe define exceptional
                dining: Quality, Creativity, Service, Atmosphere, Sustainability, Community, Passion,
                Innovation, and Excellence.
              </p>
              <p>
                Today, with three locations across the city, we continue to honor this vision by
                sourcing the finest ingredients, employing world-class culinary talent, and creating
                memorable experiences for every guest who walks through our doors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl mb-4">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center elegant-shadow"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-2xl mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chefs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl mb-4">Meet Our Chefs</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              World-class culinary artists dedicated to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden elegant-shadow group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-1">{chef.name}</h3>
                  <p className="text-gold-500 font-medium mb-4">{chef.title}</p>
                  <p className="text-gray-600 dark:text-gray-400">{chef.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 bg-gold-500 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-5xl mb-6">Our Commitment</h2>
            <p className="text-xl mb-8 opacity-90">
              At Cafe Nine, we are committed to providing not just a meal, but an experience.
              Every ingredient is carefully selected, every dish is thoughtfully prepared, and
              every guest is warmly welcomed. We believe that exceptional dining is about more
              than just food—it&apos;s about creating memories that last a lifetime.
            </p>
            <a
              href="/menu"
              className="inline-block px-10 py-4 bg-white text-gold-600 rounded-full hover:scale-105 transition-transform duration-300 font-semibold text-lg"
            >
              Explore Our Menu
            </a>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-5xl mb-12">Awards & Recognition</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="text-5xl mb-3">⭐</div>
                <p className="font-semibold">Michelin Star</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2020-2024</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl mb-3">🏆</div>
                <p className="font-semibold">Best Fine Dining</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">City Awards 2023</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl mb-3">🍷</div>
                <p className="font-semibold">Wine Spectator</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Award of Excellence</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl mb-3">👨‍🍳</div>
                <p className="font-semibold">James Beard</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Nominee 2023</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

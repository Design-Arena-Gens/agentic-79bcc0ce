'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaStar, FaLeaf, FaShoppingCart } from 'react-icons/fa'
import { useCartStore } from '@/store/cartStore'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  dietary: string[]
  ingredients: string[]
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const addItem = useCartStore((state) => state.addItem)
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'bar', name: 'Bar Menu' },
  ]

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Caesar Salad Supreme',
      description: 'Crisp romaine lettuce with parmesan, croutons, and house Caesar dressing',
      price: 14,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800',
      category: 'appetizers',
      rating: 4.6,
      dietary: ['vegetarian'],
      ingredients: ['Romaine lettuce', 'Parmesan', 'Croutons', 'Caesar dressing'],
    },
    {
      id: '2',
      name: 'Truffle Mushroom Soup',
      description: 'Creamy wild mushroom soup infused with black truffle oil',
      price: 16,
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800',
      category: 'appetizers',
      rating: 4.8,
      dietary: ['vegetarian', 'gluten-free'],
      ingredients: ['Wild mushrooms', 'Truffle oil', 'Cream', 'Fresh herbs'],
    },
    {
      id: '3',
      name: 'Grilled Atlantic Salmon',
      description: 'Fresh salmon fillet with lemon butter sauce and seasonal vegetables',
      price: 32,
      image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800',
      category: 'mains',
      rating: 4.8,
      dietary: ['gluten-free'],
      ingredients: ['Atlantic salmon', 'Lemon butter', 'Seasonal vegetables', 'Herbs'],
    },
    {
      id: '4',
      name: 'Wagyu Beef Steak',
      description: 'Premium Japanese wagyu with truffle mash and red wine reduction',
      price: 68,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
      category: 'mains',
      rating: 4.9,
      dietary: ['gluten-free'],
      ingredients: ['Wagyu beef', 'Truffle mash', 'Red wine sauce', 'Asparagus'],
    },
    {
      id: '5',
      name: 'Lobster Risotto',
      description: 'Creamy arborio rice with fresh Maine lobster and saffron',
      price: 45,
      image: 'https://images.unsplash.com/photo-1534939268298-e7dfc30c00ad?w=800',
      category: 'mains',
      rating: 4.7,
      dietary: ['gluten-free'],
      ingredients: ['Maine lobster', 'Arborio rice', 'Saffron', 'Parmesan'],
    },
    {
      id: '6',
      name: 'Vegan Buddha Bowl',
      description: 'Quinoa, roasted vegetables, avocado, and tahini dressing',
      price: 22,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
      category: 'mains',
      rating: 4.5,
      dietary: ['vegan', 'gluten-free'],
      ingredients: ['Quinoa', 'Mixed vegetables', 'Avocado', 'Tahini'],
    },
    {
      id: '7',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center, vanilla ice cream',
      price: 12,
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800',
      category: 'desserts',
      rating: 4.9,
      dietary: ['vegetarian'],
      ingredients: ['Dark chocolate', 'Butter', 'Eggs', 'Vanilla ice cream'],
    },
    {
      id: '8',
      name: 'Tiramisu',
      description: 'Classic Italian dessert with espresso-soaked ladyfingers',
      price: 11,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800',
      category: 'desserts',
      rating: 4.7,
      dietary: ['vegetarian'],
      ingredients: ['Mascarpone', 'Espresso', 'Ladyfingers', 'Cocoa'],
    },
    {
      id: '9',
      name: 'Artisan Coffee',
      description: 'Single-origin espresso prepared by our master barista',
      price: 5,
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800',
      category: 'beverages',
      rating: 4.8,
      dietary: ['vegan', 'gluten-free'],
      ingredients: ['Single-origin coffee beans'],
    },
    {
      id: '10',
      name: 'French Champagne',
      description: 'Premium vintage champagne from Reims',
      price: 85,
      image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800',
      category: 'bar',
      rating: 4.9,
      dietary: ['vegan', 'gluten-free'],
      ingredients: ['Champagne grapes', 'Aged to perfection'],
    },
  ]

  const filteredItems =
    selectedCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
    setAddedItems(new Set(addedItems).add(item.id))
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(item.id)
        return newSet
      })
    }, 2000)
  }

  const getDietaryIcon = (dietary: string) => {
    const icons: Record<string, string> = {
      vegetarian: '🥬',
      vegan: '🌱',
      'gluten-free': '🌾',
    }
    return icons[dietary] || ''
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920"
            alt="Menu"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-serif text-6xl md:text-7xl mb-4">Our Menu</h1>
          <p className="text-xl md:text-2xl font-light">
            Curated flavors from around the world
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gray-50 dark:bg-gray-800 sticky top-20 z-40 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gold-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden elegant-shadow hover:shadow-2xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.dietary.map((diet) => (
                      <span
                        key={diet}
                        className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                        title={diet}
                      >
                        {getDietaryIcon(diet)}
                        {diet}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold">{item.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl">{item.name}</h3>
                    <span className="text-2xl font-bold text-gold-500">
                      ${item.price}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-2 font-medium">
                      Ingredients:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ingredient, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      addedItems.has(item.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-gold-500 hover:bg-gold-600 text-white'
                    }`}
                  >
                    <FaShoppingCart />
                    {addedItems.has(item.id) ? 'Added to Cart!' : 'Add to Cart'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

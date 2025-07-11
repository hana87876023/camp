'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  User,
  Heart,
  Mountain
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { 
      label: 'テント・シェルター', 
      href: '/products/tents',
      subcategories: [
        { label: 'ワンタッチテント', href: '/products/tents/one-touch' },
        { label: 'ドームテント', href: '/products/tents/dome' },
        { label: 'タープ', href: '/products/tents/tarps' },
        { label: 'スクリーンテント', href: '/products/tents/screen' },
      ]
    },
    { 
      label: '寝具・リラックス', 
      href: '/products/sleeping',
      subcategories: [
        { label: 'シュラフ', href: '/products/sleeping/sleeping-bags' },
        { label: 'マット', href: '/products/sleeping/mats' },
        { label: 'ピロー', href: '/products/sleeping/pillows' },
        { label: 'ハンモック', href: '/products/sleeping/hammocks' },
      ]
    },
    { 
      label: '調理・キッチン', 
      href: '/products/cooking',
      subcategories: [
        { label: 'バーナー', href: '/products/cooking/stoves' },
        { label: 'クッカー', href: '/products/cooking/cookware' },
        { label: '食器', href: '/products/cooking/tableware' },
        { label: 'クーラーボックス', href: '/products/cooking/coolers' },
      ]
    },
    { 
      label: 'ファニチャー', 
      href: '/products/furniture',
      subcategories: [
        { label: 'チェア', href: '/products/furniture/chairs' },
        { label: 'テーブル', href: '/products/furniture/tables' },
        { label: 'ラック', href: '/products/furniture/racks' },
        { label: '収納', href: '/products/furniture/storage' },
      ]
    },
    { 
      label: '照明・電源', 
      href: '/products/lighting',
      subcategories: [
        { label: 'ランタン', href: '/products/lighting/lanterns' },
        { label: 'ヘッドライト', href: '/products/lighting/headlamps' },
        { label: 'ポータブル電源', href: '/products/lighting/power-stations' },
        { label: 'ソーラーパネル', href: '/products/lighting/solar-panels' },
      ]
    },
    { 
      label: 'アパレル・ギア', 
      href: '/products/gear',
      subcategories: [
        { label: 'アウトドアウェア', href: '/products/gear/clothing' },
        { label: 'バックパック', href: '/products/gear/backpacks' },
        { label: 'シューズ', href: '/products/gear/shoes' },
        { label: 'アクセサリー', href: '/products/gear/accessories' },
      ]
    },
  ]

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center">
                <Mountain className="w-5 h-5" />
              </div>
              <span className="text-xl font-heading font-heading-bold text-primary">
                CampGear
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
                {/* Mega Menu */}
                <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-gray-100 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4 space-y-2">
                    {item.subcategories.map((subcat) => (
                      <Link
                        key={subcat.label}
                        href={subcat.href}
                        className="block text-sm text-gray-600 hover:text-primary hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                      >
                        {subcat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Wishlist */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Heart className="w-5 h-5" />
            </motion.button>

            {/* User Account */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <User className="w-5 h-5" />
            </motion.button>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 bg-white"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="商品を検索..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <Link
                      href={item.href}
                      className="block text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <div className="pl-4 space-y-2">
                      {item.subcategories.map((subcat) => (
                        <Link
                          key={subcat.label}
                          href={subcat.href}
                          className="block text-sm text-gray-600 hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subcat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
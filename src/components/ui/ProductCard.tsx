'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/store/CartContext'

interface ProductCardProps {
  product: Product
  variant?: 'grid' | 'list' | 'featured'
  showQuickView?: boolean
  showCompare?: boolean
  showWishlist?: boolean
  onClick?: () => void
}

export default function ProductCard({ 
  product,
  showQuickView = true,
  showWishlist = true,
  onClick
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addItem, openCart } = useCart()

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleQuickView = () => {
    if (onClick) {
      onClick()
    }
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1)
    openCart()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Sale Badge */}
        {product.comparePrice && (
          <div className="absolute top-3 left-3 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
            {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        {showWishlist && (
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
          >
            <Heart 
              className={`w-4 h-4 transition-colors ${
                isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`}
            />
          </button>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-2">
            {showQuickView && (
              <button
                onClick={handleQuickView}
                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                title="クイックビュー"
              >
                <Eye className="w-4 h-4 text-gray-700" />
              </button>
            )}
            <button
              onClick={handleAddToCart}
              className="p-2 bg-primary text-white rounded-full hover:bg-primary-700 transition-colors"
              title="カートに追加"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stock Status */}
        {product.stock <= 5 && product.stock > 0 && (
          <div className="absolute bottom-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            残り{product.stock}個
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute bottom-3 left-3 bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            在庫切れ
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand & Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 font-medium">{product.brand}</span>
          <span className="text-xs text-gray-400">{product.subcategory}</span>
        </div>

        {/* Product Name */}
        <Link 
          href={`/products/${product.slug}`}
          className="block mb-2 hover:text-primary transition-colors"
        >
          <h3 className="font-semibold text-gray-900 line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.comparePrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.comparePrice)}
              </span>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mt-3 flex flex-wrap gap-1">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
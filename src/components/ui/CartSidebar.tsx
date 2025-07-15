'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/store/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartSidebar() {
  const { state, updateQuantity, removeItem, closeCart } = useCart()

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
    exit: { x: '100%' }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  }

  if (state.items.length === 0 && state.isOpen) {
    return (
      <AnimatePresence>
        {state.isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/50 z-50"
              onClick={closeCart}
            />

            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">ショッピングカート</h2>
                <button
                  onClick={closeCart}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Empty State */}
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    カートは空です
                  </h3>
                  <p className="text-gray-500 mb-4">
                    お気に入りの商品を追加してください
                  </p>
                  <Link href="/products">
                    <button
                      onClick={closeCart}
                      className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      商品を見る
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 z-50"
            onClick={closeCart}
          />

          {/* Sidebar */}
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">
                ショッピングカート ({state.totalItems})
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                <AnimatePresence>
                  {state.items.map((item, index) => (
                    <motion.div
                      key={`${item.product.id}-${item.variant || 'default'}`}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 text-sm line-clamp-2">
                          {item.product.name}
                        </h3>
                        {item.variant && (
                          <p className="text-xs text-gray-500 mt-1">
                            {item.variant}
                          </p>
                        )}
                        <p className="text-sm font-semibold text-primary mt-1">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(
                            item.product.id,
                            item.quantity - 1,
                            item.variant
                          )}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(
                            item.product.id,
                            item.quantity + 1,
                            item.variant
                          )}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.product.id, item.variant)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t p-6 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>合計</span>
                <span>{formatPrice(state.totalPrice)}</span>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link href="/cart">
                  <button
                    onClick={closeCart}
                    className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                  >
                    カートを見る
                  </button>
                </Link>
                <Link href="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeCart}
                    className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>レジに進む</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>

              {/* Free Shipping Notice */}
              {state.totalPrice < 5000 && (
                <div className="text-center text-sm text-gray-500">
                  あと{formatPrice(5000 - state.totalPrice)}で送料無料
                </div>
              )}
              {state.totalPrice >= 5000 && (
                <div className="text-center text-sm text-green-600 font-medium">
                  送料無料対象です！
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
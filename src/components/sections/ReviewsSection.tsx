'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, User, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'
import { mockProducts } from '@/data/products'

interface Review {
  id: string
  customerName: string
  customerAvatar?: string
  rating: number
  title: string
  comment: string
  productName: string
  date: string
  verified: boolean
  images?: string[]
}

const mockReviews: Review[] = [
  {
    id: '1',
    customerName: '田中 太郎',
    customerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    title: '最高のテントです！',
    comment: '設営が簡単で、雨の日でも全く問題ありませんでした。軽量で持ち運びも楽で、初心者の私でも安心して使えました。',
    productName: 'アルパイン ドームテント 2人用',
    date: '2024-01-10',
    verified: true,
    images: [
      'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    ]
  },
  {
    id: '2',
    customerName: '佐藤 花子',
    customerAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b950?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    title: '暖かくて快適',
    comment: '寒い夜でもとても暖かく眠ることができました。コンパクトに収納できるのも魅力的です。',
    productName: 'プレミアム マミー型 シュラフ',
    date: '2024-01-08',
    verified: true
  },
  {
    id: '3',
    customerName: '山田 次郎',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 4,
    title: '火力が強くて便利',
    comment: '風の強い日でも安定した火力で料理できました。軽量で持ち運びも楽です。',
    productName: 'ポータブル バーナー ストーブ',
    date: '2024-01-05',
    verified: true
  },
  {
    id: '4',
    customerName: '鈴木 美咲',
    customerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    title: '明るくて長持ち',
    comment: '一晩中明るく照らしてくれて、USB充電もできるので便利です。デザインもおしゃれで気に入りました。',
    productName: 'LED ランタン 充電式',
    date: '2024-01-03',
    verified: true
  }
]

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const featuredProducts = mockProducts.filter(product => product.isFeatured).slice(0, 4)

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % mockReviews.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isPlaying])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % mockReviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + mockReviews.length) % mockReviews.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-heading-bold text-gray-900 mb-4">
            お客様の声
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            実際にご利用いただいたお客様からの貴重なレビューをご紹介します
          </p>

          {/* Reviews Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < mockReviews[currentReview].rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                    {mockReviews[currentReview].title}
                  </h3>

                  {/* Review Comment */}
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {mockReviews[currentReview].comment}
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      {mockReviews[currentReview].customerAvatar ? (
                        <Image
                          src={mockReviews[currentReview].customerAvatar!}
                          alt={mockReviews[currentReview].customerName}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      ) : (
                        <User className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">
                        {mockReviews[currentReview].customerName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {mockReviews[currentReview].productName}
                      </p>
                    </div>
                    {mockReviews[currentReview].verified && (
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        購入済み
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <button
                onClick={prevReview}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextReview}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {mockReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentReview 
                      ? 'bg-primary' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recommended Products Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-heading-bold text-gray-900 mb-4">
              おすすめ商品
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              お客様に人気の厳選アイテムをご紹介します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
              >
                全商品を見る
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">満足度98%</h3>
            <p className="text-gray-600">お客様からの高い評価をいただいています</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">平均評価4.5</h3>
            <p className="text-gray-600">厳選された高品質商品のみを取り扱い</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">10,000+</h3>
            <p className="text-gray-600">多くのお客様にご利用いただいています</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Mountain, Tent, Compass } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "自然との特別な時間を",
      subtitle: "最高品質のキャンピング用品",
      description: "アウトドア愛好家のための厳選されたギアで、忘れられない冒険を",
      cta: "商品を見る",
      ctaLink: "/products",
      backgroundImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      icon: Mountain
    },
    {
      title: "快適なキャンプ体験",
      subtitle: "プロ仕様の本格ギア",
      description: "初心者からベテランまで、すべてのキャンパーに最適な装備を",
      cta: "カテゴリーを見る", 
      ctaLink: "/categories",
      backgroundImage: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      icon: Tent
    },
    {
      title: "冒険への第一歩",
      subtitle: "信頼できる品質保証",
      description: "厳しい自然環境でも安心して使える、耐久性抜群のアイテム",
      cta: "ガイドを見る",
      ctaLink: "/guide",
      backgroundImage: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      icon: Compass
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            custom={index - currentSlide}
            variants={slideVariants}
            initial="enter"
            animate={index === currentSlide ? "center" : "exit"}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.backgroundImage})`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Parallax Mountains */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/20 to-transparent"
        />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-0 right-0 w-full h-48 bg-gradient-to-t from-primary/10 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center text-white"
          >
            {/* Icon */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center mb-6"
            >
              <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                {slides[currentSlide].icon && 
                  React.createElement(slides[currentSlide].icon, { className: "w-8 h-8 text-primary" })
                }
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-heading-bold mb-4"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl font-heading font-heading-light mb-6 text-accent"
            >
              {slides[currentSlide].subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <Link
                href={slides[currentSlide].ctaLink}
                className="group relative overflow-hidden"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-primary-700 hover:shadow-xl"
                >
                  <span className="relative z-10">{slides[currentSlide].cta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-white hover:text-primary"
                >
                  詳しく見る
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 right-8 text-white"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">スクロール</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-secondary/40 rounded-full blur-sm"
        />
      </div>
    </section>
  )
}
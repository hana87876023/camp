'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Mountain, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ChevronRight
} from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    products: [
      { label: 'テント・シェルター', href: '/products/tents' },
      { label: '寝具・リラックス', href: '/products/sleeping' },
      { label: '調理・キッチン', href: '/products/cooking' },
      { label: 'ファニチャー', href: '/products/furniture' },
      { label: '照明・電源', href: '/products/lighting' },
      { label: 'アパレル・ギア', href: '/products/gear' },
    ],
    company: [
      { label: '会社概要', href: '/about' },
      { label: 'ブランドストーリー', href: '/story' },
      { label: 'キャンプガイド', href: '/guide' },
      { label: 'お客様の声', href: '/testimonials' },
      { label: 'ニュース', href: '/news' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
    support: [
      { label: '配送について', href: '/shipping' },
      { label: '返品・交換', href: '/returns' },
      { label: 'サイズガイド', href: '/size-guide' },
      { label: 'よくある質問', href: '/faq' },
      { label: 'メンテナンス', href: '/maintenance' },
      { label: 'サポート', href: '/support' },
    ],
    legal: [
      { label: '利用規約', href: '/terms' },
      { label: 'プライバシーポリシー', href: '/privacy' },
      { label: 'Cookie ポリシー', href: '/cookies' },
      { label: '特定商取引法', href: '/legal' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

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
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                <Mountain className="w-6 h-6" />
              </div>
              <span className="text-2xl font-heading font-heading-bold">
                CampGear
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              アウトドア愛好家のための最高品質なキャンピング用品を提供します。
              自然との特別な時間を、より快適で思い出深いものにするお手伝いをします。
            </p>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-heading font-heading-normal text-lg">
                メールマガジン
              </h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  登録
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-heading-normal text-lg mb-6">
              商品カテゴリー
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:ml-2 transition-all">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-heading-normal text-lg mb-6">
              会社情報
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:ml-2 transition-all">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-heading-normal text-lg mb-6">
              サポート
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:ml-2 transition-all">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-medium">メール</h5>
                <p className="text-gray-400">info@campgear.jp</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-medium">電話</h5>
                <p className="text-gray-400">0120-123-456</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-medium">住所</h5>
                <p className="text-gray-400">東京都渋谷区...</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 CampGear. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
'use client'

import React, { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ProductDetail from '@/components/ui/ProductDetail'
import { mockProducts } from '@/data/products'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params)
  const product = mockProducts.find(p => p.slug === resolvedParams.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
              ホーム
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-primary transition-colors">
              商品一覧
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetail product={product} />
      </div>

      {/* Related Products */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">関連商品</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts
              .filter(p => p.category.id === product.category.id && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-square bg-gray-100 relative">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      ¥{relatedProduct.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
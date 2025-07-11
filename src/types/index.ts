export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  comparePrice?: number
  images: string[]
  category: Category
  subcategory: string
  brand: string
  sku: string
  stock: number
  variants: ProductVariant[]
  features: string[]
  specifications: Record<string, string>
  reviews: Review[]
  rating: number
  reviewCount: number
  tags: string[]
  createdAt: Date
  updatedAt: Date
  isActive: boolean
  isFeatured: boolean
}

export interface ProductVariant {
  id: string
  name: string
  value: string
  type: 'color' | 'size' | 'material'
  price?: number
  priceModifier?: number
  stock: number
  image?: string
  isDefault?: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  parentId?: string
  subcategories: Category[]
  isActive: boolean
  sortOrder: number
}

export interface Review {
  id: string
  userId: string
  productId: string
  rating: number
  title: string
  comment: string
  images?: string[]
  verified: boolean
  helpful: number
  createdAt: Date
  user: {
    name: string
    avatar?: string
  }
}

export interface CartItem {
  id: string
  productId: string
  variantId?: string
  quantity: number
  price: number
  customizations?: {
    color?: string
    size?: string
    engraving?: string
  }
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  phone?: string
  dateOfBirth?: Date
  preferences: {
    newsletter: boolean
    promotions: boolean
    recommendations: boolean
  }
  addresses: Address[]
  orders: Order[]
  wishlist: string[]
  recentlyViewed: string[]
  role: 'customer' | 'admin'
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  id: string
  type: 'billing' | 'shipping'
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
  isDefault: boolean
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  subtotal: number
  tax: number
  shipping: number
  discount: number
  total: number
  status: OrderStatus
  paymentStatus: PaymentStatus
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: string
  trackingNumber?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  id: string
  productId: string
  variantId?: string
  quantity: number
  price: number
  name: string
  image: string
  variant?: {
    name: string
    value: string
  }
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export type PaymentStatus = 
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded'
  | 'partially_refunded'

export interface SearchFilters {
  category?: string
  subcategory?: string
  brand?: string
  priceRange?: {
    min: number
    max: number
  }
  rating?: number
  inStock?: boolean
  onSale?: boolean
  sortBy?: 'relevance' | 'price_asc' | 'price_desc' | 'rating' | 'newest'
  tags?: string[]
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  errors?: string[]
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export interface Toast {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
}

export interface MenuLink {
  href: string
  label: string
  children?: MenuLink[]
  external?: boolean
}

export interface SiteSettings {
  siteName: string
  siteUrl: string
  description: string
  logo: string
  favicon: string
  social: {
    twitter?: string
    facebook?: string
    instagram?: string
    youtube?: string
  }
  contact: {
    email: string
    phone: string
    address: string
  }
}
'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product } from '@/types'

interface CartItem {
  product: Product
  quantity: number
  variant?: string
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  totalItems: number
  totalPrice: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity?: number; variant?: string } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; variant?: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number; variant?: string } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }

const initialState: CartState = {
  items: [],
  isOpen: false,
  totalItems: 0,
  totalPrice: 0,
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity = 1, variant } = action.payload
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id && item.variant === variant
      )

      let newItems: CartItem[]

      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        newItems = [...state.items, { product, quantity, variant }]
      }

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

      return {
        ...state,
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case 'REMOVE_ITEM': {
      const { productId, variant } = action.payload
      const newItems = state.items.filter(
        item => !(item.product.id === productId && item.variant === variant)
      )

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

      return {
        ...state,
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity, variant } = action.payload
      
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { productId, variant } })
      }

      const newItems = state.items.map(item =>
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

      return {
        ...state,
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalPrice: 0,
      }

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      }

    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true,
      }

    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      }

    default:
      return state
  }
}

interface CartContextType {
  state: CartState
  addItem: (product: Product, quantity?: number, variant?: string) => void
  removeItem: (productId: string, variant?: string) => void
  updateQuantity: (productId: string, quantity: number, variant?: string) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (product: Product, quantity = 1, variant?: string) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity, variant } })
  }

  const removeItem = (productId: string, variant?: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } })
  }

  const updateQuantity = (productId: string, quantity: number, variant?: string) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity, variant } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' })
  }

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' })
  }

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
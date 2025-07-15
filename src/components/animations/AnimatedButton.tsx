'use client'

import { useRef, ReactNode } from 'react'
import anime from 'animejs'

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  animation?: 'bounce' | 'pulse' | 'shake' | 'swing' | 'tada'
  disabled?: boolean
}

export default function AnimatedButton({
  children,
  className = '',
  onClick,
  variant = 'primary',
  animation = 'bounce',
  disabled = false
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleRef = useRef<HTMLDivElement>(null)

  const baseClasses = {
    primary: 'bg-primary text-white hover:bg-primary-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-white hover:bg-secondary-700 shadow-lg hover:shadow-xl',
    ghost: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return

    const button = buttonRef.current
    if (!button) return

    // リップル効果
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (rippleRef.current) {
      rippleRef.current.style.left = `${x}px`
      rippleRef.current.style.top = `${y}px`
    }

    anime({
      targets: rippleRef.current,
      scale: [0, 4],
      opacity: [0.5, 0],
      duration: 600,
      easing: 'easeOutQuart'
    })

    // ボタンアニメーション
    const animations = {
      bounce: {
        scale: [1, 1.1, 1],
        duration: 400,
        easing: 'easeOutBounce'
      },
      pulse: {
        scale: [1, 1.05, 1],
        duration: 200,
        easing: 'easeInOutQuad'
      },
      shake: {
        translateX: [0, -10, 10, -10, 10, 0],
        duration: 500,
        easing: 'easeInOutQuad'
      },
      swing: {
        rotate: [0, 5, -5, 5, 0],
        duration: 600,
        easing: 'easeInOutQuad'
      },
      tada: {
        scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
        rotate: [0, -3, -3, -3, -3, -3, -3, -3, -3, 0],
        duration: 1000,
        easing: 'easeInOutQuad'
      }
    }

    anime({
      targets: button,
      ...animations[animation]
    })

    if (onClick) {
      setTimeout(() => onClick(), 100)
    }
  }

  const handleMouseEnter = () => {
    if (disabled) return

    anime({
      targets: buttonRef.current,
      scale: 1.02,
      duration: 200,
      easing: 'easeOutQuad'
    })
  }

  const handleMouseLeave = () => {
    if (disabled) return

    anime({
      targets: buttonRef.current,
      scale: 1,
      duration: 200,
      easing: 'easeOutQuad'
    })
  }

  return (
    <button
      ref={buttonRef}
      className={`
        relative overflow-hidden px-6 py-3 rounded-lg font-medium transition-all duration-300
        ${baseClasses[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      {/* リップル効果 */}
      <div
        ref={rippleRef}
        className="absolute w-4 h-4 bg-white rounded-full pointer-events-none"
        style={{
          transform: 'scale(0)',
          opacity: 0
        }}
      />
      
      {/* ボタンコンテンツ */}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
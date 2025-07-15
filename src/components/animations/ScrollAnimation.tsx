'use client'

import { useEffect, useRef, ReactNode } from 'react'
import anime from 'animejs'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' | 'rotateIn'
  delay?: number
  duration?: number
  threshold?: number
}

export default function ScrollAnimation({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 800,
  threshold = 0.2
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          
          // アニメーション設定
          const animations = {
            fadeInUp: {
              opacity: [0, 1],
              translateY: [50, 0],
              easing: 'easeOutQuart'
            },
            fadeInLeft: {
              opacity: [0, 1],
              translateX: [-50, 0],
              easing: 'easeOutQuart'
            },
            fadeInRight: {
              opacity: [0, 1],
              translateX: [50, 0],
              easing: 'easeOutQuart'
            },
            scaleIn: {
              opacity: [0, 1],
              scale: [0.8, 1],
              easing: 'easeOutBack'
            },
            slideInUp: {
              opacity: [0, 1],
              translateY: [100, 0],
              easing: 'easeOutCubic'
            },
            rotateIn: {
              opacity: [0, 1],
              rotate: [45, 0],
              scale: [0.5, 1],
              easing: 'easeOutBack'
            }
          }

          // アニメーション実行
          anime({
            targets: element,
            ...animations[animation],
            duration,
            delay,
          })
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [animation, delay, duration, threshold])

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  )
}
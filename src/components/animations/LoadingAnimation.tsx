'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

interface LoadingAnimationProps {
  onComplete?: () => void
  duration?: number
}

export default function LoadingAnimation({ onComplete, duration = 3000 }: LoadingAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750,
      complete: () => {
        setTimeout(() => {
          if (onComplete) onComplete()
        }, 500)
      }
    })

    // ロゴアニメーション
    timeline
      .add({
        targets: logoRef.current,
        scale: [0, 1],
        opacity: [0, 1],
        rotate: [180, 0],
        duration: 1000,
        easing: 'easeOutBounce'
      })
      .add({
        targets: textRef.current,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuart'
      }, '-=500')
      .add({
        targets: progressRef.current,
        width: ['0%', '100%'],
        duration: 1200,
        easing: 'easeInOutQuart'
      }, '-=400')

    // プログレスバーのパルス効果
    anime({
      targets: progressRef.current,
      opacity: [0.5, 1, 0.5],
      duration: 1000,
      loop: true,
      easing: 'easeInOutSine'
    })

    // 背景の粒子効果
    const particles = containerRef.current.querySelectorAll('.particle')
    particles.forEach((particle, index) => {
      anime({
        targets: particle,
        translateY: [
          { value: -30, duration: 1000 },
          { value: 30, duration: 1000 }
        ],
        translateX: [
          { value: 30, duration: 1500 },
          { value: -30, duration: 1500 }
        ],
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        delay: index * 200,
        loop: true,
        easing: 'easeInOutSine'
      })
    })

    // フェードアウト
    setTimeout(() => {
      anime({
        targets: containerRef.current,
        opacity: [1, 0],
        duration: 800,
        easing: 'easeOutQuart'
      })
    }, duration - 800)

  }, [onComplete, duration])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-primary-600 to-primary-800 flex items-center justify-center"
    >
      {/* 背景の粒子 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center">
        {/* ロゴ */}
        <div
          ref={logoRef}
          className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <div className="text-4xl font-bold text-primary">🏔️</div>
        </div>

        {/* テキスト */}
        <div ref={textRef} className="text-white mb-8">
          <h1 className="text-4xl font-heading font-bold mb-2">CampGear</h1>
          <p className="text-xl opacity-90">キャンプの準備をしています...</p>
        </div>

        {/* プログレスバー */}
        <div className="w-64 h-1 bg-white/30 rounded-full mx-auto overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-white rounded-full"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  )
}
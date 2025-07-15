'use client'

import { useState, useEffect, ReactNode } from 'react'
import LoadingAnimation from '@/components/animations/LoadingAnimation'

interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 初回訪問時のみローディングを表示
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (hasVisited) {
      setIsLoading(false)
    } else {
      sessionStorage.setItem('hasVisited', 'true')
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      {children}
    </>
  )
}
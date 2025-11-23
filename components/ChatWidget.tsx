'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { X, MessageCircle } from 'lucide-react'
import { analytics } from '@/lib/analytics'

declare global {
  interface Window {
    Tawk_API: any
    Tawk_LoadStart: Date
  }
}

export default function ChatWidget() {
  const pathname = usePathname()
  const [showBadge, setShowBadge] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Reset badge state on navigation
    setShowBadge(false)
    setShouldRender(false)

    // Show badge after 10 seconds
    const timer = setTimeout(() => {
      setShouldRender(true)
      // Slight delay to allow render before animation
      setTimeout(() => setShowBadge(true), 50)
    }, 10000)

    return () => clearTimeout(timer)
  }, [pathname])

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowBadge(false)
    // Wait for animation to finish before unmounting
    setTimeout(() => setShouldRender(false), 500)
  }

  const handleChatOpen = () => {
    if (typeof window !== 'undefined' && window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
      window.Tawk_API.maximize()
    }
    analytics.chatInitiated();
    setShowBadge(false)
    setTimeout(() => setShouldRender(false), 500)
  }

  // Tawk.to configuration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.Tawk_API = window.Tawk_API || {}
      window.Tawk_LoadStart = new Date()
    }
  }, [])

  // Note: Replace these placeholders with your actual Tawk.to Property ID and Widget ID
  // You can also use environment variables like process.env.NEXT_PUBLIC_TAWK_SRC
  const TAWK_SRC = 'https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID'

  return (
    <>
      {/* Tawk.to Script */}
      <Script
        id="tawk-to"
        strategy="lazyOnload"
        src={TAWK_SRC}
      />

      {/* "Chat with us" Badge */}
      {shouldRender && (
        <div
          className={`fixed bottom-24 right-4 z-50 flex items-center transition-all duration-500 ease-out transform ${
            showBadge ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div
            className="bg-teal-600 text-white rounded-lg shadow-lg p-4 pr-10 cursor-pointer relative hover:bg-teal-700 transition-colors"
            onClick={handleChatOpen}
          >
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <span className="font-medium whitespace-nowrap">Questions? Chat now!</span>
            </div>

            <button
              onClick={handleDismiss}
              className="absolute top-1 right-1 p-1 hover:bg-teal-800 rounded-full transition-colors opacity-70 hover:opacity-100"
              aria-label="Dismiss chat prompt"
            >
              <X size={14} />
            </button>

            {/* Triangle pointer/tail */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-teal-600 transform rotate-45" />
          </div>
        </div>
      )}
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="bg-red-800 text-white">
      <div className="container mx-auto">
        <nav className="relative flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="p-4 flex justify-between items-center md:w-auto">
            <h1 className="text-xl md:text-2xl font-bold">
              アートワインバー コンペ
            </h1>
            {isMobile && (
              <button
                onClick={toggleMenu}
                className="md:hidden"
                aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
          
          <div 
            className={`
              md:flex md:space-x-8 md:p-4 md:items-center
              ${isMobile ? (isOpen ? 'block' : 'hidden') : 'flex'}
              ${isMobile ? 'border-t border-white' : ''}
            `}
          >
            <Link 
              href="#about" 
              className="block p-4 md:p-0 hover:bg-red-700 md:hover:bg-transparent md:hover:underline"
              onClick={closeMenu}
            >
              概要
            </Link>
            <Link 
              href="#entry" 
              className="block p-4 md:p-0 hover:bg-red-700 md:hover:bg-transparent md:hover:underline"
              onClick={closeMenu}
            >
              参加
            </Link>
            <Link 
              href="#access" 
              className="block p-4 md:p-0 hover:bg-red-700 md:hover:bg-transparent md:hover:underline"
              onClick={closeMenu}
            >
              アクセス
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
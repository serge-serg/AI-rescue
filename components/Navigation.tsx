'use client';

import React from 'react';
import Link from 'next/link'
import { useState, useEffect } from 'react'
import menuItems from '@/components/menuItems'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768)

  useEffect(() => {
    const savedIsOpen = localStorage.getItem('menuIsOpen')
    setIsOpen(savedIsOpen === 'true' || window.innerWidth > 768)

    const handleResize = () => {
      const newIsOpen = window.innerWidth > 768
      setIsOpen(newIsOpen)
      localStorage.setItem('menuIsOpen', newIsOpen.toString())
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const shouldBeOpen = window.innerWidth > 768
    setIsOpen(shouldBeOpen)
    localStorage.setItem('menuIsOpen', (shouldBeOpen).toString())
  }, [isOpen])

  const LogoText = () => <Link href="/" className="logo-text">/ <span style={{ fontWeight: 600 }}>Super-AI Challenge</span> /</Link>;

  const renderMenuItem = (item: string | (string | JSX.Element)[]) => {
    if (Array.isArray(item)) {
      return item.map((textPart, index) => (
        <React.Fragment key={index}>
          {textPart}
          {index < item.length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return item;
  };

  return (
    <div className="md:max-w-[500px] sidebar-container">
      {/* Hamburger menu для мобильных устройств */}
      <div className="md:hidden p-4 flex justify-between items-center bg-[#333]">
        <LogoText />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <aside className={`sidebar ${isOpen ? 'flex' : 'hidden'}`}>
        <div className="sidebar-header">
          <LogoText />
        </div>
        {isOpen && <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {renderMenuItem(item.text)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>}
      </aside>
    </div>
  )
}

export default Navigation
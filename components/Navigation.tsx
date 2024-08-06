'use client';

import React from 'react';
import Link from 'next/link'
import { useState, useEffect } from 'react'
import menuItems from '@/components/menuItems'

const Navigation = () => {
  const ww = 1200
  const windowIsWide = window.innerWidth > ww
  const [isOpen, setIsOpen] = useState(windowIsWide)

  useEffect(() => {
    const savedIsOpen = localStorage.getItem('menuIsOpen')
    setIsOpen(savedIsOpen === 'true' || windowIsWide)

    const handleResize = () => {
      const newIsOpen = window.innerWidth > ww
      setIsOpen(newIsOpen)
      localStorage.setItem('menuIsOpen', newIsOpen.toString())
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('menuIsOpen', (isOpen).toString())
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
    <div className="lg+:max-w-[500px] sidebar-container">
      <div className="lg+:hidden p-4 flex justify-between items-center bg-[#333]">
        <LogoText />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          {/* {isOpen ? 'Close' : 'Menu'} */}
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
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
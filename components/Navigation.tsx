'use client';

import Link from 'next/link'
import { useState } from 'react'
import menuItems from '@/components/menuItems'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const LogoText = () => <p className="logo-text">/ <span style={{ fontWeight: 600 }}>Super AI Challenge</span> /</p>;

  return (
    <div className="md:max-w-[500px] sidebar-container">
      {/* Hamburger menu для мобильных устройств */}
      <div className="md:hidden p-4 flex justify-between items-center bg-[#333]">
        <LogoText/>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Содержимое меню (как для мобильных, так и для десктопа) */}
      {<aside className={`sidebar ${isOpen ? 'flex' : 'hidden'}`}>
        <div className="sidebar-header">
        <LogoText/>
        </div>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>}
    </div>
  )
}

export default Navigation
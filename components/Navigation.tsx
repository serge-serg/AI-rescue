'use client'
import React, { ReactNode, useCallback, useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import menuItems, { MenuItems } from '@/components/menuItems'
import img13Floor from '@/assets/images/view-pix/13th-floor.png'
import imgRobotAndPeople from '@/assets/images/view-pix/robot-ai-leadership-crowd-black.jpg'
import imgAiRisks from '@/assets/images/view-pix/ai-risks.webp'
import imgGreatFilter from '@/assets/images/view-pix/great-filter-monolith.jpg'
import imgHalVsHuman from '@/assets/images/view-pix/HALvsHuman-black.jpg'
import imgMatrixIncubator from '@/assets/images/view-pix/matrix-incubator-black.jpg'
import imgFriendlyAI from '@/assets/images/view-pix/friendly-ai-black.jpg'
import imgSurvey from '@/assets/images/view-pix/survey.jpg'
import imgLetsConnect from '@/assets/images/view-pix/lets-call.jpg'

const Navigation = () => {
  const currentPath = usePathname()
  /*
    background-position: right -80px;
    Rendered size: 691 x 857 px
  */

  let bgImg = img13Floor
  switch (currentPath) {
    case '/why-we-will-not-refuse-creating-superintelligence':
      bgImg = imgRobotAndPeople
      break
    case '/deep-dive-into-fundamental-ai-risks':
      bgImg = imgAiRisks
      break
    case '/will-superintelligence-become-the-great-filter-for-humanity':
      bgImg = imgGreatFilter
      break
    case '/why-hal-9000-intended-to-kill-all-astronauts-aboard-discovery':
      bgImg = imgHalVsHuman
      break
    case '/why-could-not-the-matrix-exist-without-humans':
      bgImg = imgMatrixIncubator
      break
    case '/can-we-create-inherently-friendly-superintelligence':
      bgImg = imgFriendlyAI
      break
    case '/we-need-your-opinion':
      bgImg = imgSurvey
      break
    case '/lets-connect':
      bgImg = imgLetsConnect
      break
    default:
      break
  }

  const style = {
    bgImage: {
      backgroundImage: `url(${bgImg.src})`
    }
  }

  const wideWindowValue = 1200
  const [windowIsWide, setWindowIsWide] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const asideRef = useRef<HTMLElement>(null)

  // Function to handle resize events
  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      const newIsOpen = window.innerWidth > wideWindowValue
      setIsOpen(newIsOpen)
      localStorage.setItem('menuIsOpen', newIsOpen.toString())
    }
  }, [])

  // Set the initial window width and isOpen state
  const setInitialWindow = () => {
    let windowIsWideInitial = false
    if (typeof window !== 'undefined') {
      windowIsWideInitial = window.innerWidth > wideWindowValue
      setWindowIsWide(windowIsWideInitial)
    }
    return windowIsWideInitial
  }

  // Effect to handle initialization and listening to resize events
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedIsOpen = localStorage.getItem('menuIsOpen')
      const windowIsWideInitial = setInitialWindow()
      setIsOpen(savedIsOpen === 'true' || windowIsWideInitial)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  // Effect to handle currentPath changes and window resizing
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const windowIsWideInitial = setInitialWindow()
      setIsOpen(windowIsWideInitial)
    }
    localStorage.setItem('menuIsOpen', isOpen.toString())
  }, [currentPath])

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
    localStorage.setItem('menuIsOpen', isOpen.toString())
  }

  // Handle menu position for wide screens
  const handleMenuPosition = () => {
    if (typeof window !== 'undefined' && navRef.current !== null && asideRef.current !== null) {
      const asideTop = asideRef.current.getBoundingClientRect().top
      const navRect = navRef.current.getBoundingClientRect()
      let topLimit = (window.innerHeight - navRect.height) / 2

      if ((asideTop) * -1 > topLimit) {
        if (navRef.current.style.position !== 'fixed') navRef.current.style.position = 'fixed'
        if (topLimit < 10) topLimit = 10
        navRef.current.style.top = `${topLimit}px`
      } else {
        if (navRef.current.style.position !== 'fixed') return
        navRef.current.style.position = 'static'
      }
    }
  }

  // Effect to handle scrolling and resizing for menu positioning
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= wideWindowValue) return
    
    handleMenuPosition()

    const addMultipleListeners = (
      element: Window | HTMLElement,
      events: (keyof DocumentEventMap)[],
      handler: EventListener
    ) => {
      events.forEach(event => element.addEventListener(event, handler))
    }

    const removeMultipleListeners = (
      element: Window | HTMLElement,
      events: (keyof DocumentEventMap)[],
      handler: EventListener
    ) => {
      events.forEach(event => element.removeEventListener(event, handler))
    }

    addMultipleListeners(window, ['scroll', 'resize'], handleMenuPosition)

    return () => {
      removeMultipleListeners(window, ['scroll', 'resize'], handleMenuPosition)
    }
  }, [])

  const LogoText = () => <Link href="/" className="logo-text">/ <span style={{ fontWeight: 600 }}>Super-AI Challenge</span> /</Link>

  const renderMenuItem = (item: string | ReactNode | (string | JSX.Element)[]) => {
    if (Array.isArray(item)) {
      return item.map((textPart, index) => (
        <React.Fragment key={index}>{textPart}</React.Fragment>
      ))
    }
    return item
  }

  const renderLiItem = (item: MenuItems) => (
    <Link href={item.href} onClick={() => setIsOpen(false)}>
      {renderMenuItem(item.text)}
    </Link>
  )

  const renderLiBlock = (item: MenuItems) => (
    <li key={item.href} className={currentPath === item.href ? 'selected' : ''}>
      {renderLiItem(item)}
    </li>
  )

  const renderMenu = () => {
    const menu = menuItems.map((item) => renderLiBlock(item))
    if (!windowIsWide) {
      menu.push(renderLiBlock(
        {
          href: '/lets-connect',
          text: 'Lets Connect',
          key: 'lets-connect'
        })
      )
      return menu
    }
    return menu
  }

  return (
    <div className="lg+:max-w-[500px] sidebar-container">
      <div className="lg+:hidden p-4 flex justify-between items-center bg-[#333]">
        <LogoText />
        <button
          onClick={toggleMobileMenu}
          className="text-white"
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <aside ref={asideRef} style={style.bgImage} className={`sidebar ${!isOpen && 'hidden'}`}>
        <div className="sidebar-header"><LogoText /></div>
        {
          isOpen &&
          <nav ref={navRef} className="lg+:max-w-[500px]">
            <ul>{renderMenu()}</ul>
          </nav>
        }
      </aside>
    </div>
  )
}

export default Navigation

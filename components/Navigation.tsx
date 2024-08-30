'use client'
import React, { ReactNode, useCallback, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import menuItems from '@/components/menuItems'
import img13Floor from '@/assets/images/view-pix/13th-floor.png'
import imgRobotAndPeople from '@/assets/images/view-pix/robot-ai-leadership-crowd.jpg'
import imgAiRisks from '@/assets/images/view-pix/ai-risks-dark.jpg'
import imgGreatFilter from '@/assets/images/view-pix/great-filter-monolith.jpg'
import imgMatrixIncubator from '@/assets/images/view-pix/matrix-incubator.jpg'
import imgSurvey from '@/assets/images/view-pix/survey.jpg'

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
    case '/why-could-not-the-matrix-exist-without-humans':
      bgImg = imgMatrixIncubator
      break
    case '/we-need-your-opinion':
      bgImg = imgSurvey
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
  const windowIsWide = window.innerWidth > wideWindowValue
  const [isOpen, setIsOpen] = useState(windowIsWide)
  const navRef = useRef<HTMLElement>(null)
  const asideRef = useRef<HTMLElement>(null)

  const handleResize = useCallback(() => {
    const newIsOpen = window.innerWidth > wideWindowValue
    setIsOpen(newIsOpen)
    localStorage.setItem('menuIsOpen', newIsOpen.toString())
  }, [])

  useEffect(() => {
    const savedIsOpen = localStorage.getItem('menuIsOpen')
    setIsOpen(savedIsOpen === 'true' || windowIsWide)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  useEffect(() => {
    if (windowIsWide) setIsOpen(true)
    localStorage.setItem('menuIsOpen', (true).toString())
  }, [isOpen])

  useEffect(() => {
    if (window.innerWidth <= wideWindowValue) return
    const handleScroll = () => {
      if (navRef.current !== null && asideRef.current !== null) {
        const asideTop = asideRef.current.getBoundingClientRect().top
        const navRect = navRef.current.getBoundingClientRect()
        const topLimit = (window.innerHeight - navRect.height) / 2
        if ((asideTop) * -1 > topLimit) { // after sticky
          if (navRef.current.style.position === 'fixed') return
          navRef.current.style.position = 'fixed'
          navRef.current.style.top = `${topLimit}px`
        } else { // before sticky
          if (navRef.current.style.position !== 'fixed') return
          navRef.current.style.position = 'static'
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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

  return (
    <div className="lg+:max-w-[500px] sidebar-container">
      <div className="lg+:hidden p-4 flex justify-between items-center bg-[#333]">
        <LogoText />
        <button
          onClick={() => setIsOpen(!isOpen)}
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
            <ul>
              {menuItems.map((item) => (
                <li key={item.href} className={currentPath === item.href ? 'selected' : ''}>
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {renderMenuItem(item.text)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        }
      </aside>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Navigation), { ssr: false })
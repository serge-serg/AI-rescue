import { useEffect, useState } from 'react'
import '@/app/dynamic-menu.css'

const DynamicMenu = () => {
  interface MenuItem {
    element: HTMLElement | null;
    text: string;
    tag: string;
  }

  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [menuItemsIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    const generateMenuItems = () => {
      const headers = document.querySelectorAll('h2, h3, h4')
      const items: MenuItem[] = []

      headers.forEach((header) => {
        items.push({
          element: header as HTMLElement,
          text: header?.textContent || '',
          tag: header.tagName
        })
      })

      setMenuItems(items || [])
    }

    generateMenuItems()
  }, [])

  const handleClick = (element: HTMLElement | null) => {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const renderMenuItems = () => {
    return menuItems.map((item, index) => {
      const paddingLeft = (parseInt(item.tag.replace('H', '')) - 2) * 10
      return (
        <li
          key={index}
          style={{ paddingLeft: `${paddingLeft}px` }}
          onClick={() => handleClick(item.element)}
        >
          <span>{item.text}</span>
        </li>
      )
    })
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        alignItems: 'center',
        backgroundColor: '#4e4e4e',
        borderRadius: '35px',
        cursor: 'pointer',
        display: 'flex',
        fontWeight: '600',
        height: '35px',
        padding: '0 28px 0 17px',
        userSelect: 'none',
      }} onClick={() => setMenuIsOpen(!menuItemsIsOpen)}>
        <span style={{ marginRight: '8px', transform: `rotate(${menuItemsIsOpen ? 0 : -90}deg)`, transition: 'transform 0.3s ease' }}>
          &#9662;
        </span>
        Contents
      </div>
      <ul className={`dynamic-menu ${menuItemsIsOpen ? 'open' : ''}`}>
        {renderMenuItems()}
      </ul>
    </div>
  )
}

export default DynamicMenu

import Link from 'next/link'
import menuItems from '@/components/menuItems';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <p className="logo-text">AI Rescue</p>
      </div>
      <nav>
        <ul>{menuItems.map((item) => (
          <li>
            <Link key={item.href} href={item.href}>{item.text}</Link>
          </li>
        ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
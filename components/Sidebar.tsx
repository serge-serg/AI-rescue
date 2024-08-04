import Link from 'next/link'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <p className="logo-text">AI Rescue</p>
      </div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/what-is-super-ai">What is Super AI</Link></li>
          <li><Link href="/why-is-it-needed">Why is it needed?</Link></li>
          <li><Link href="/perilous-scenarios">Perilous scenarios</Link></li>
          <li><Link href="/rescue-approaches">Rescue approaches</Link></li>
          <li><Link href="/hall9000">HALL-9000 vs Matrix</Link></li>
          <li><Link href="/opinion">We need your opinion!</Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
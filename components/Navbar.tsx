'use client';

import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
  { href: '/', text: 'Home' },
  { href: '/what-is-super-ai', text: 'What is Super AI' },
  { href: '/dangers', text: 'Dangers' },
  { href: '/rescue-approaches', text: 'Rescue approaches' },
];

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Link href={href} className="text-white block py-2 px-4 hover-bg-rgb">
    {text}
  </Link>
);

const Menu = ({ className }: { className?: string }) => (
  <div className={className}>
    {menuItems.map((item) => (
      <NavLink key={item.href} href={item.href} text={item.text} />
    ))}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-menu p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">AI Rescue</Link>
        <Menu className="hidden md:flex space-x-4" />
        <button
          className="md:hidden text-white bg-secondary-accent px-3 py-1 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && <Menu className="md:hidden mt-2" />}
    </nav>
  );
};

export default Navbar;
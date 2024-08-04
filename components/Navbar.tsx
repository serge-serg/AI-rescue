'use client';

import Link from 'next/link';
import menuItems from '@/components/menuItems';


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

const Navbar = () => (
    <nav className="top-menu p-4">
      <Menu className="md:hidden mt-2" />
    </nav>
  );

export default Navbar;
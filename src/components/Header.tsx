'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import React, { useState } from 'react';

import {
  FaHome,
  FaInfoCircle,
  FaTools,
  FaBlog,
  FaEnvelope,
} from 'react-icons/fa';

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: <FaHome className="h-5 w-5" />,
  },
  {
    name: 'About',
    href: '/',
    icon: <FaInfoCircle className="h-5 w-5" />,
  },
  {
    name: 'Services',
    href: '/',
    icon: <FaTools className="h-5 w-5" />,
  },
  {
    name: 'Blog',
    href: '/',
    icon: <FaBlog className="h-5 w-5" />,
  },
  {
    name: 'Contact',
    href: '/',
    icon: <FaEnvelope className="h-5 w-5" />,
  },
];

const Header = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <header className="flex items-center justify-between gap-5 p-4">
      <div className="">
        <span className="text-slate-950"> Next.js + TailwindCSS + Motion</span>
      </div>
      <nav className="flex gap-10">
        {navigation.map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            key={item.name}
            href={item.href}
            className="group relative flex items-center rounded-md px-3 py-2 text-sm font-medium"
          >
            <span
              className={`z-50 flex items-center text-slate-950 group-hover:text-blue-100`}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.name}
            </span>
            {hovered === idx && (
              <motion.div
                className="absolute inset-0 h-full w-full rounded-lg bg-black"
                layoutId="nav-hover"
              />
            )}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;

'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaHome } from "react-icons/fa";
import classnames from 'classnames';


const NavBar = () => {
    const currPath = usePathname()

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Issues', href: '/issues' }
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/"><FaHome /></Link>
            <ul className='flex space-x-6'>
                {links.map(link =>
                    <Link
                        key={link.href}
                        className={classnames({
                            'text-zinc-900': link.href === currPath,
                            'text-zinc-500': link.href !== currPath,
                            'hover:text-zinc-900 transition-colors': true,
                        })}
                        href={link.href}>
                        {link.label}
                    </Link>
                )}
            </ul>
        </nav>
    )
}

export default NavBar
'use client';

import { usePathname } from 'next/navigation';
import classes from './appNavbar.module.scss';
import Link from 'next/link';

const appLinks = [
    {
        label: 'Home',
        href: '/',
        active: false
    },
    {
        label: 'Discover',
        href: '/discover',
        active: false
    },
    {
        label: 'Leaderboard',
        href: '/leaderboard',
        active: false
    },
    {
        label: 'Help',
        href: '/help',
        active: false
    }
]

function AppNavbarLinks() {
    const pathname = usePathname();
    appLinks.forEach((link) => {
        link.active = link.href === pathname;
    })
  return (
    <ul className={classes.appNavbar_links}>
        {
            appLinks.map((link, index) => (
                <li className={ link.active ? classes.appNavbar_link_active : classes.appNavbar_link} key={index}>
                <Link href={link.href}>{link.label}</Link>
                </li>
            ))
        }
            
            
        </ul>
  )
}

export default AppNavbarLinks

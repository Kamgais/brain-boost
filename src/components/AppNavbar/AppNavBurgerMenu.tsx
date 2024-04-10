'use client';

import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import classes from './appNavbar.module.scss';
import { useState } from "react";
import Button from "@/sharedui/Button/Button";
import Image from "next/image";
import Link from "next/link";


const links = [
    {
        label: 'Home',
        href: '/',
        icon: '3d-house.png'
    },
    {
        label: 'Discover',
        href: '/discover',
        icon: 'loupe.png'
    },

    {
        label: 'Leaderboard',
        href: '/leaderboard',
        icon: 'dice.png'
    },
    {
        label: 'Help',
        href: '/help',
        icon: 'customer-service.png'
    },

]

function AppNavBurgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
        <Popover placement="bottom" offset={30}>
            <PopoverTrigger>
            <button>
            <GiHamburgerMenu  size={20} className={classes.burger}/>
            </button>
            </PopoverTrigger>
            <PopoverContent className={classes.popOverContent}>
            <ul className={classes.navBurgerMenu_links}>
                {
                    links.map((link,index) => (
                        <li className={classes.navBurgerMenu_link} key={index}>
                            <Link href={link.href} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            <Image src={`/images/${link.icon}`} width={20} height={20} alt=""/>
                                {link.label}
                                </Link>
                        </li>
                    ))
                }
            
            
            </ul>
            <div style={{width: '100%', display: 'flex', gap: '20px', flexDirection: 'column'}}>
            <Button size="large" rounded="lg" variant="outline-primary">My Account</Button>
            <Button size="large" rounded="lg">
                Create quiz
            </Button>
            </div>
            
            </PopoverContent>
        </Popover>
 
    </>
  )
}

export default AppNavBurgerMenu

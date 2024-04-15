'use client'

import Image from "next/image"
import { FaAngleDown } from "react-icons/fa";
import classes from './appNavbar.module.scss';
import Button from "@/sharedui/Button/Button";
import AppNavbarLinks from "./AppNavbarLinks";
import AppNavLogo from "./AppNavLogo";
import AppNavBurgerMenu from "./AppNavBurgerMenu";
import { useRouter } from "next/navigation";



function AppNavbar() {
  const router = useRouter();
  return (
    <nav className={classes.appNavbar_container}>
       <AppNavLogo/>

        <AppNavbarLinks/>

        <div className={classes.appNavbar_actions}>
            <Button size="small" rounded="lg" handleClick={() => router.push('/quizz/create')}>Create quiz</Button>
            <div className={classes.appNavbar_userdetails}>
                <Image src='/images/bussiness-man.png' width={40} height={40} alt="user photo" />
                <FaAngleDown />
            </div>
        </div>
        <div className={classes.navBurgerMenu}>
        <AppNavBurgerMenu/>
        </div>
    </nav>
  )
}

export default AppNavbar

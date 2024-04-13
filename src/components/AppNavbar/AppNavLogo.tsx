'use client';
import Image from "next/image"
import classes from './appNavbar.module.scss';
import { useRouter } from "next/navigation";

export default function AppNavLogo() {
    const router = useRouter();

    const goToHome = () => {
        router.push('/')
    }
  return (
    <div className={classes.appNavbar_logo} onClick={goToHome}>
    <Image src='/images/bblanding.png' width={100} height={100} alt="logo"/>
    </div>
  )
}

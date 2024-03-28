'use client';

import classes from './register.module.scss';
import Typography from '@/sharedui/Typography/Typography';
import Button from '@/sharedui/Button/Button';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [showPwd, setShowPwd] = useState(false);
    const router = useRouter();
  return (
    <div className={classes.register_container} onClick={() => router.push('/')}>
      <div className={classes.bblogo}>
        <Image src='/images/bblogo.png' width={50} height={50} alt=''/>
      </div>
      <div className={classes.register_box}>
        <div className={classes.register_box_left}>
            <form action="">
                <Typography variant='headline' component='h1' theme='gray'>
                    Get started🚀
                </Typography>

                <div className={classes.register_box_formcontrol}>
                    <label htmlFor="">Enter your email or number</label>
                    <input type="text" placeholder='Ex: johndoe@brainboost.com or 0134556776' />
                </div>

                <div className={classes.register_box_formcontrol}>
                    <label htmlFor="">Enter a password</label>
                    <input type={showPwd ? 'text' : 'password'} placeholder='Ex: madameBovary09@' />
                    {
                        showPwd ? (
                            <FiEyeOff className={classes.register_box_formcontrol_showpwd}  onClick={() => setShowPwd(false)} />
                        ) : (
                            <FiEye className={classes.register_box_formcontrol_showpwd}  onClick={() => setShowPwd(true)}/>
                        )
                    }
                   
                   
                </div>

                <div className={classes.register_box_actions}>
                    <Button size='large' rounded='md' variant='secondary'>
                        Sign up
                    </Button>
                    <Button size='large' rounded='md' variant='gray' >
                        Sign up with Google
                    </Button>
                </div>

            </form>
        </div>
        <div className={classes.register_box_right}>
            <Image src='/images/register_image.jpg' width={400} height={500} alt=''/>
        </div>
      </div>
      <div className={classes.register_box_linked}>
        <Typography variant='paragraph' theme='white' component='p'>Already have an account?</Typography>
        <Link href='/signin'>Sign in</Link>
      </div>
    </div>
  )
}

export default Register



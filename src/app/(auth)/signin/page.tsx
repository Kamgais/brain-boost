'use client';

import Typography from '@/sharedui/Typography/Typography';
import classes from './signin.module.scss';
import Image from 'next/image';
import Button from '@/sharedui/Button/Button';
import Link from 'next/link';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
    const [showPwd, setShowPwd] = useState(false);
    const router = useRouter();
  return (
    <div className={classes.signin_container}>
    <div className={classes.bblogo} onClick={() => router.push('/')}>
      <Image src='/images/bblogo.png' width={50} height={50} alt=''/>
    </div>
    <div className={classes.signin_box}>
      <div className={classes.signin_box_left}>
          <form action="">
              <Typography variant='headline' component='h1' theme='gray'>
                  Hello There 👋
              </Typography>

              <div className={classes.signin_box_formcontrol}>
                  <label htmlFor="">Enter your email or number</label>
                  <input type="text" placeholder='Ex: johndoe@brainboost.com or 0134556776' />
              </div>

              <div className={classes.signin_box_formcontrol}>
                  <label htmlFor="">Enter your password</label>
                  <input type={showPwd ? 'text' : 'password'} placeholder='Ex: madameBovary09@' />
                  {
                      showPwd ? (
                          <FiEyeOff className={classes.signin_box_formcontrol_showpwd}  onClick={() => setShowPwd(false)} />
                      ) : (
                          <FiEye className={classes.signin_box_formcontrol_showpwd}  onClick={() => setShowPwd(true)}/>
                      )
                  }
                 
                 
              </div>

              <div className={classes.signin_box_actions}>
                  <Button size='large' rounded='md' variant='secondary'>
                      Sign in
                  </Button>
                  <Button size='large' rounded='md' variant='gray' >
                      Sign in with Google
                  </Button>
              </div>

          </form>
      </div>
      <div className={classes.signin_box_right}>
          <Image src='/images/login_image.jpg' width={400} height={500} alt=''/>
      </div>
    </div>
    <div className={classes.signin_box_linked}>
      <Typography variant='paragraph' theme='white' component='p'>You don&apos;t have an account?</Typography>
      <Link href='/register'>Sign up</Link>
    </div>
  </div>
  )
}

export default SignInPage
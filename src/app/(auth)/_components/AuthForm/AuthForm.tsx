'use client';

import Image from 'next/image'
import Button from '@/sharedui/Button/Button'
import Typography from '@/sharedui/Typography/Typography'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { IoLockOpen } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import classes from './authForm.module.scss'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {Tooltip} from "@nextui-org/tooltip";
import { passwordStrength } from 'check-password-strength';
import PasswordStrength from '../PasswordStrength/PasswordStrength';
import { User } from '@/types/user';
import { registerUser } from '@/lib/actions/register';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import Alert from '@/sharedui/Alert/Alert';
import { sendActivateMail } from '@/lib/actions/sendActivateMail';


interface AuthFormProps {
    type: 'SIGNIN' | 'SIGNUP'
}

const AuthForm = ({type}: AuthFormProps) => {
    const [showPwd, setShowPwd] = useState(false);
    const [username, setUsername] = useState('');
    const [passStrength, setPassStrength] = useState(0);
    const [isAlertModalOpen, setAlertModalOpen] = useState(false);
    const router = useRouter();
  //  const defaultValues = type === 'SIGNIN' ? {username: '', password: ''} : {username: '', password: '', email: ''}


 
    

    const signInFormSchema = z.object({
        username: z.string().trim()
           .min(6, "Username must be at least 6 characters")
           .max(20, "Username must be less than 20 characters")
           .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed !"),
        password: z.string().trim()
           .min(6, "Password must be at least 6 characters")
           .max(20, "Password must be less than 50 characters"),
       });

       const signUpFormSchema = signInFormSchema.extend({
            email: z.string().trim()
            .email("Please enter a valid email address"),
          })
      

    
   // type FormFields =  z.output<typeof signUpFormSchema> | z.output<typeof signInFormSchema>;

    const {register, handleSubmit, formState: {errors, isSubmitting} , reset, watch} = useForm({
        
        resolver: zodResolver(type === 'SIGNUP' ? signUpFormSchema : signInFormSchema)
    });

    useEffect(() => {
        setPassStrength(passwordStrength(watch().password).id)
    },[watch().password])
    
    const onSubmit = async (data:any) => {
        if(type === 'SIGNUP') {
        await createUser(data);
        } 
        if(type === 'SIGNIN') {
            await loginAsUser(data);
        }
       
    }

    const createUser = async(user: User) => {
        try {
            const newUser = await registerUser(user);
            toast.success('User registered successfully.')
            console.log(newUser)
            reset();
        } catch (error:any) {
            toast.error(error.message)
            console.log(error)
        }
    }

    const loginAsUser = async(user: User) => {
       
            const result = await signIn("credentials", {
                redirect: false,
                username: user.username,
                password: user.password
            })
            if(!result?.ok) {
                if(result?.error?.includes('Please verify')) {
                    setUsername(user.username);
                    setAlertModalOpen(true);
                    return;
                }
                toast.error(result?.error)
                return ;
            }
            toast.success('Welcome 👋 to Brainboost')
            reset();
            router.push('/')
        
       }



       const sendActivationMail = async(userName: string) => {
            try {
                await sendActivateMail(userName);
                toast.success('Check your inbox and confirm your email')
            } catch (error:any) {
                toast.error(error.message)
            }
       }
    
  return (
    <div className={classes.auth_container}>
       
      <div className={classes.bblogo} onClick={() => router.push('/')}>
        <Image src='/images/bblogo.png' width={50} height={50} alt=''/>
      </div>
      <div className={classes.auth_box}>
        <div className={classes.auth_box_left}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant='headline' component='h1' theme='gray'>
                   {
                    type === 'SIGNIN' ? 'Hello There 👋': 'Get started🚀'
                   } 
                </Typography>

                {
                    type === 'SIGNUP' && (
                        
                        <div className={classes.auth_box_formcontrol}>
                            <label htmlFor="email" style={{color: !!errors.email?.message ? '#f54180' : ''}}>Enter your email</label>
                            <Tooltip color='danger' content={errors.email?.message as string}  isOpen={!!errors.email?.message} showArrow>
                            <input id='email' type="text" placeholder='Ex: johndoe@brainboost.com' {...register('email')} style={{borderColor: !!errors.email?.message ? '#f54180' : ''}} />
                            </Tooltip>
                            <MdOutlineEmail className={classes.auth_box_formcontrol_icon} />
                        </div>
                        
                    )
                 
                }
               

                <div className={classes.auth_box_formcontrol}>
                    <label htmlFor="username" style={{color: !!errors.username?.message ? '#f54180' : ''}}>{type === 'SIGNUP' ? 'Enter a username': 'Enter your username'} </label>
                    <Tooltip color='danger' content={errors.username?.message as string}  isOpen={!!errors.username?.message} showArrow>
                    <input id='username' type="text" placeholder='Ex: johndoe' {...register('username')} style={{borderColor: !!errors.username?.message ? '#f54180' : ''}}/>
                    </Tooltip>
                    <FaRegUser  className={classes.auth_box_formcontrol_icon}/>
                </div>

                <div className={classes.auth_box_formcontrol}>
                    <label htmlFor="password" style={{color: !!errors.password?.message ? '#f54180' : ''}}>{type === 'SIGNUP' ? 'Enter a password': 'Enter your password'}</label>
                    <Tooltip color='danger' content={errors.password?.message as string}  isOpen={!!errors.password?.message} showArrow>
                    <input id='password' type={showPwd ? 'text' : 'password'} placeholder='Ex: madameBovary09@' {...register('password')} style={{borderColor: !!errors.password?.message ? '#f54180' : ''}}/>
                    </Tooltip>
                    {
                        type === 'SIGNUP' && (
                            <PasswordStrength passStrength={passStrength}/>
                        )
                    }
                    <IoLockOpen  className={type === 'SIGNIN' ? classes.auth_box_formcontrol_icon : classes.auth_box_formcontrol_icon_pwd}/>
                    {
                        showPwd ? (
                            <FiEyeOff className={ type === 'SIGNUP' ? classes.auth_box_formcontrol_showpwd_register : classes.auth_box_formcontrol_showpwd_login}  onClick={() => setShowPwd(false)} />
                        ) : (
                            <FiEye className={ type === 'SIGNUP' ? classes.auth_box_formcontrol_showpwd_register : classes.auth_box_formcontrol_showpwd_login}  onClick={() => setShowPwd(true)}/>
                        )
                    }
                   
                   
                </div>

                <div className={classes.auth_box_actions}>
                    <Button size='large' rounded='md' variant={isSubmitting ? 'disabled': 'secondary'} type='submit' disabled={isSubmitting}>
                        {
                           isSubmitting ? 'Loading...' : type === 'SIGNIN' ? 'Sign in' : 'Sign up'
                        }
                    </Button>
                    <Button size='large' rounded='md' variant='gray' type='button'>
                        {
                            type === 'SIGNUP' ? 'Sign up with Google' : 'Sign in with Google'
                        }
                    </Button>

                   {
                    type === 'SIGNIN' && (
                        <Link href='/forgot' className={classes.auth_box_forgotLink}>Forgot password ?</Link>
                    )
                   }
                </div>

            </form>
        </div>
        <div className={classes.auth_box_right}>
            <Image src={type === 'SIGNUP' ? '/images/register_image.jpg': '/images/login_image.jpg'} width={400} height={500} alt=''/>
        </div>
      </div>
      <div className={classes.auth_box_linked}>
        <Typography variant='paragraph' theme='white' component='p'>
            {
                type === 'SIGNUP' ? 'Already have an account?' : "You don't have an account ?"
            }
        </Typography>
        <Link href={type === 'SIGNUP' ? '/signin': '/register'} >
            {
                type === 'SIGNUP' ? 'Sign in' : 'Sign up'
            }
        </Link>
      </div>
      <Alert 
      isOpen={isAlertModalOpen} 
      setAlertModalOpen={setAlertModalOpen}
      content='🚀 Before you can access BrainBoost, please verify your email address. 📧 We sent you an 🔐activation mail. Check your Dms🔎.' 
      title='📧 Verify your Email' 
      action={
        {
            title: 'send confirmation email', 
            func: () => sendActivationMail(username)
            }
            }/>
    </div>
  )
}

export default AuthForm
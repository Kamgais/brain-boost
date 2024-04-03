'use client';

import Typography from '@/sharedui/Typography/Typography';
import classes from './resetForm.module.scss';
import Image from 'next/image';
import Button from '@/sharedui/Button/Button';
import { IoLockOpen } from 'react-icons/io5';
import { useState } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Tooltip } from '@nextui-org/tooltip';
import { resetPassword } from '@/lib/actions/resetPassword';
import { toast } from 'react-toastify';


interface Props {
    token: string;
}


function ResetForm({token}: Props) {

    const resetPasswordSchema = z.object({
        password: z.string()
        .min(6, 'Password must be at least 6 characters')
        .max(50, 'Password must be less than 50 characters'),
        confirmPassword: z.string()
        .min(6, 'Password must be at least 6 characters')
        .max(50, 'Password must be less than 50 characters')
    }).refine(
        (data) => data.password === data.confirmPassword, {
            message: 'Password and confirm password do not match',
            path: ['confirmPassword']
        }
    )

    type ResetPasswordFields = z.infer<typeof resetPasswordSchema>;

    const resetPasswordDefaultValues: ResetPasswordFields = {
        password: '',
        confirmPassword: ''
    }

    const {register, formState: {isSubmitting, errors}, handleSubmit} = useForm<ResetPasswordFields>({
        defaultValues: resetPasswordDefaultValues,
        resolver: zodResolver(resetPasswordSchema)
    })

  
    const [showPwd, setShowPwd] = useState(false);


    const onSubmit: SubmitHandler<ResetPasswordFields> = async (data: ResetPasswordFields) => {
        try {
            const result = await resetPassword(token, data.password);
           if(result === 'sucess') toast.success('Your password has been reset successfully')
        } catch (error:any) {
            console.log(error);
            toast.error(error.message);
        }
    }
  return (
    <div className={classes.reset_container}>
     <div className={classes.bblogo}>
     <Image src='/images/bblogo.png' width={50} height={50} alt=''/>
     </div>
     <div className={classes.reset_box}>
        <Image src='/images/reset.jpg' width={150} height={150} alt=''/>
        <Typography variant='headline' component='h1' theme='gray'>
            Reset password 
        </Typography>
        <Typography variant='paragraph'>
        Don&apos;t worry we got you recovered. Enter the email address or phone number associated with this account.
        </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.reset_input}>
            <label htmlFor="password" style={{color: !!errors.password?.message ? '#f54180' : ''}}>Enter your new password</label>
            <Tooltip color='danger' content={errors.password?.message as string}  isOpen={!!errors.password?.message} showArrow>
            <input  type={showPwd ? 'text': 'password'} placeholder='Ex: madameBovary09@'   {...register('password')} style={{borderColor: !!errors.password?.message ? '#f54180' : ''}} />
            </Tooltip>
            <IoLockOpen  className={classes.auth_box_formcontrol_icon}/>
            {
                        showPwd ? (
                            <FiEyeOff className={classes.auth_box_formcontrol_showpwd}  onClick={() => setShowPwd(false)} />
                        ) : (
                            <FiEye className={classes.auth_box_formcontrol_showpwd}  onClick={() => setShowPwd(true)}/>
                        )
                    }
        </div>
        <div className={classes.reset_input}>
            <label htmlFor="confirm_pwd" style={{color: !!errors.confirmPassword?.message ? '#f54180' : ''}}>Confirm your new password</label>
            <Tooltip color='danger' content={errors.confirmPassword?.message as string}  isOpen={!!errors.confirmPassword?.message} showArrow>
            <input type={showPwd ? 'text': 'password'} placeholder='Ex: madameBovary09@'  {...register('confirmPassword')}  style={{borderColor: !!errors.confirmPassword?.message ? '#f54180' : ''}}/>
            </Tooltip>
            <IoLockOpen  className={classes.auth_box_formcontrol_icon}/>
        </div>
        <Button size='large' rounded='md' type='submit' disabled={isSubmitting} variant={isSubmitting? 'disabled': 'secondary'}>
           Reset password
        </Button>
        </form>
     </div>
    </div>
  )
}

export default ResetForm

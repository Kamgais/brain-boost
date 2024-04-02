'use client';

import Typography from '@/sharedui/Typography/Typography';
import classes from './forgot.module.scss';
import Image from 'next/image';
import Button from '@/sharedui/Button/Button';
import Link from 'next/link';
import { MdOutlineEmail } from 'react-icons/md';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Tooltip } from '@nextui-org/tooltip';

function ForgotPasswordPage() {
    const forgotPasswordSchema = z.object({
        email: z.string()
                .email("😰Please enter a valid email")
    })

    type ForgotPasswordFields = z.infer<typeof forgotPasswordSchema>;
    const forgotFormDefaultValues = {
        email: ''
    }
    const {register, handleSubmit, reset , formState: {isSubmitting, errors}} = useForm<ForgotPasswordFields>({
        defaultValues: forgotFormDefaultValues,
        resolver: zodResolver(forgotPasswordSchema)
    });

    const onSubmit: SubmitHandler<ForgotPasswordFields> = (data: ForgotPasswordFields) => {
        console.log(data)
    }
  return (
    <div className={classes.forgot_container}>
     <div className={classes.bblogo}>
     <Image src='/images/bblogo.png' width={50} height={50} alt=''/>
     </div>
     <div className={classes.forgot_box}>
        <Image src='/images/forgot.png' width={150} height={150} alt=''/>
        <Typography variant='headline' component='h1' theme='gray'>
            Forgot password ?
        </Typography>
        <Typography variant='paragraph'>
        Don&apos;t worry we got you recovered. Enter the email address or phone number associated with this account.
        </Typography>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.forgot_input}>
            <label htmlFor="email">Enter your email</label>
            <Tooltip color='danger' content={errors.email?.message as string}  isOpen={!!errors.email?.message} showArrow>
            <input {...register('email')} type="text" placeholder='Ex: johndoe@brainboost.com' style={{borderColor: !!errors.email?.message ? '#f54180' : ''}}/>
            </Tooltip>
            <MdOutlineEmail className={classes.auth_box_formcontrol_icon} />
        </div>
        <Button size='large' rounded='md' disabled={isSubmitting} variant={isSubmitting? 'disabled': 'secondary'}  type='submit'>
            Request reset link
        </Button>
        <Link href='/signin'>
        Back to login
        </Link>
        </form>
     </div>
    </div>
  )
}

export default ForgotPasswordPage

'use server';

import prisma from "../prisma";
import { sendMail } from "../sendMail";

export async function requestResetPassLink(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(!user) throw new Error('No User found with this email')

        // Send Reset password mail with Reset Link
        await sendMail({
            to: user.email,
            subject: 'Reset Password',
            user,
            type: 'reset'
        })
    } catch (error:any) {
        console.log(error)
        throw new Error(error.message)
    }
}
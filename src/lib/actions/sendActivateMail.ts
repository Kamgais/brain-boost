'use server';

import prisma from "../prisma";
import { sendMail } from "../sendMail";

export async function sendActivateMail(userName: string) {
    try {
        const userFromDB = await prisma.user.findUnique({
            where: {
                username: userName
            }
        })

        if(!userFromDB) throw new Error('No User found with this email')

        await sendMail({
            to: userFromDB.email,
            subject: 'Confirm your account',
            user: userFromDB,
            type: 'confirm'
        })
    } catch (error) {
        console.log('Internal server Error')
        throw new Error('Internal Server Error')
    }
}
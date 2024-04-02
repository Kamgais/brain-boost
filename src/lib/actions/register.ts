'use server';

import { User } from "@/types/user";
import prisma from "../prisma";
import *  as bcrypt from 'bcrypt';
import { sendMail } from "../sendMail";


export const registerUser = async (credentials: User) => {

    // check if the user already exists
    const userFromDB = await prisma.user.findMany({
       where: {
        OR: [
            {email: credentials.email},
            {username: credentials.username}
        ]
       }
    })
    // if yes throw error
    if(userFromDB.length !== 0) throw new Error("Username or email already taken")
    // if no hash the password 
    const passwordHash = await bcrypt.hash(credentials.password, 10);
    // save the user in the db
    const savedUser = await prisma.user.create({
        data: {
            username: credentials.username,
            email: credentials.email,
            passwordHash,

        }
    })
    // send the welcome email
    await sendMail({
        to: savedUser.email!,
        subject: 'Welcome to Brainboost',
        user: savedUser,
        type: 'welcome'
    })

    await sendMail({
        to: savedUser.email!,
        subject: 'Welcome to Brainboost',
        user: savedUser,
        type: 'confirm'
    })
    
    return savedUser;
}
"use server";

import { verifyJWT } from "../jwt";
import prisma from "../prisma";
import * as bcrypt from 'bcrypt';

type ResetPasswordFunc = (jwtUserId: string, password: string) => Promise<"userNotExist" | "sucess">


export const resetPassword: ResetPasswordFunc = async(jwtUserId, password) => {
    const payload = verifyJWT(jwtUserId);
    if(!payload) throw new Error('Not Allowed');

    const userId = payload.id;
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    if(!user) return "userNotExist"

    const updatedUser = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            passwordHash: bcrypt.hashSync(password,10)
        }
    })

    if(updatedUser) return "sucess";
    throw new Error('Internal Server Error')
}
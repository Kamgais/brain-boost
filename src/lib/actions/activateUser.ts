"use server";

import { verifyJWT } from "../jwt";
import prisma from "../prisma";

type ActivateUserFunc = (jwtUserId: string) => Promise<"userNotExist" | "alreadyActivated" | "success">;


export const activateUser:ActivateUserFunc = async(jwtUserID: string) => {
    const payload = verifyJWT(jwtUserID);
    if(!payload) throw new Error('Not Allowed');
    const userId = payload?.id;
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });
    
    if(!user) return "userNotExist";

    if(user.emailVerified) return "alreadyActivated";

    const result = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            emailVerified: true
        }
    })

    return "success";

  

}
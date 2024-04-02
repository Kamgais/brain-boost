import { User } from "@/types/user";
import prisma from "./prisma"
import * as bcrypt from 'bcrypt';


export const authenticate = async(credentials: Omit<User, "email" | "id" | "pic" | "role">) => {
    const {username, password} = credentials;

    try {
         // retrieve the user if exists
    const userFromDB = await prisma.user.findFirst({
        where: {
            username
        }
    })

    if(!userFromDB) {
        
        throw new Error('No User found with this username');
    } 
    const matches = await bcrypt.compare(password,userFromDB.passwordHash);
    if(!matches) throw new Error('Wrong password');
    if(!userFromDB.emailVerified) throw new Error('Please verify your email')
    return userFromDB;
    } catch (error:any) {
        throw new Error(error.message)
    }
   

}
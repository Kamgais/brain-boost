import { authenticate } from "@/lib/authenticate";
import { User, UserDetails } from "@/types/user";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET ,
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {

                },
                password: {

                }
            },
            async authorize (credentials) {
                try {
                    const user = await authenticate(credentials!);
                    return {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        pic: user.pic,
                        role: user.role,
                    } as UserDetails;
                } catch (error:any) {
                    throw new Error(error.message)
                }
               
                
            }
        })
    ],
    callbacks: {
        async jwt({token,user}) {
            if(user) token.user = user as UserDetails;
          //  console.log(token.user)
            return token;
        },
        
        async session({token, session}) {
            session.user = token.user
          //  console.log(session.user)
            return session;
        }
    }
}
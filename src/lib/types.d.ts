import { UserDetails } from "@/types/user";

declare module "next-auth" {
    interface Session {
        user: UserDetails;
    }
}


declare module "next-auth/jwt" {
    interface JWT {
        user: UserDetails;
    }
}
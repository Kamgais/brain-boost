import { Role } from "./role"


export type User = {
 id: string,
 username: string,
 email: string,
 password: string,
 pic: string,
 role: Role | null
}

export type SignUpUser = Pick<User, 'username' | 'email' | 'password'>;

export type SignInUser = Pick<User, 'username' | 'password'>;

export type UserDetails = Omit<User, "password">;
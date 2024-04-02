import ConfirmEmail from '@/emails/confirm';
import {WelcomeEmail} from '@/emails/welcome';
import { User } from '@prisma/client';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { signJWT } from './jwt';
type Params = {
    to: string,
    subject: string,
    type: "confirm" | "welcome",
    user: User
}


export async function sendMail({to, subject, user, type}: Params) {

    const {NEXTAUTH_URL} = process.env
    let html;
    const jwtUserId = signJWT({
        id: user.id
    })
    const activationURL = `${NEXTAUTH_URL}/activation/${jwtUserId}`

    switch(type) {
        case "welcome": 
            html = render(WelcomeEmail({userFirstname: user.username!}));
        break;

        case "confirm":
            html = render(ConfirmEmail({userFirstname: user.username!, activationURL}));
        break;
    }
   
    const {SMTP_EMAIL, SMTP_PASS} = process.env;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASS
        }
    })

    try {
        const testResult = await transport.verify();
    } catch (error) {
       console.error(error)
    }

    

    try {
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to,
            subject,
            html

        })
    } catch (error) {
        console.error(error);
    }
}
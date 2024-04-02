import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/_options";
import styles from "./page.module.css";
import { sendMail } from "@/lib/sendMail";


export default async function Home() {
  // await sendMail({
  //   to: 'cyrilheike@yahoo.com',
  //   subject: 'test',
  //   body: 'hello world'
  // })
  const session = await getServerSession(authOptions)
  return (
    <>
   {
    session?.user?.username ? (
      <div>{session.user.username}</div>
    ) : (
      <div>No logged in</div>
    )
   }
    </>
  );
}

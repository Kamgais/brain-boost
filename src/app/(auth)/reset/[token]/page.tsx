import { verifyJWT } from "@/lib/jwt"
import ResetForm from "../../_components/ResetForm/ResetForm"
import { notFound } from "next/navigation";



interface Props {
    params: {
        token: string
    }
}

async function ResetPasswordPage({params}: Props) {
    const payload = verifyJWT(params.token);
    if(!payload) return notFound();

  return (
   <ResetForm token={params.token}/>
  )
}

export default ResetPasswordPage

'use client'

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider} from "next-auth/react";


interface Props {
    children: React.ReactNode
}

const Providers = ({children}: Props) => {
  return (
    <>
   <SessionProvider>
    {children}
   </SessionProvider>
    <ToastContainer/>
    </>
  )
}

export default Providers
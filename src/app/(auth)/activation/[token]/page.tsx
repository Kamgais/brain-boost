import { activateUser } from "@/lib/actions/activateUser"
import classes from './activation.module.scss';


interface Props {
    params: {
        token: string
    }
}

async function ActivationPage({params}: Props) {
  const result = await activateUser(params.token);
  return (
    <div className={classes.container}>
      {
        result === 'userNotExist'? <p>The user does not exist</p>:
        result === 'alreadyActivated' ? <p>The User is already activated</p>:
        result === 'success' ? <p>Sucess! The user is now activated</p>:
        <p>Oops! Something went wrong</p>
      }
    </div>
  )
}

export default ActivationPage

import classes from './appFooter.module.scss';
import Typography from '@/sharedui/Typography/Typography';
import Button from '@/sharedui/Button/Button';
import Image from 'next/image';

function AppFooter() {
  return (
    <div className={classes.appFooter_container}>
        <div className={classes.appFooter_top}>
        <div>
            <Image src='/images/bblogo.png' width={50} height={50} alt=''/>
            <Typography variant='headline' component='h3' theme='white'>Brain Boost</Typography>
            <Typography variant='middleline' component='p' theme='white'>Upgrade your IQ</Typography>
        </div>
        <div className={classes.appFooter_mainMenu}>
            <Typography variant='menu' component='p' theme='white'>Main menu</Typography>
            <Typography variant='paragraph' component='p' theme='white'>Home</Typography>
            <Typography variant='paragraph' component='p' theme='white'>Discover</Typography>
            <Typography variant='paragraph' component='p' theme='white'>Leaderboard</Typography>
        </div>
        <div className={classes.appFooter_utilities}>
        <Typography variant='menu' component='p' theme='white'>Utilities</Typography>
            <Typography variant='paragraph' component='p' theme='white'>Profile</Typography>
            <Typography variant='paragraph' component='p' theme='white'>Categories</Typography>
            <Typography variant='paragraph' component='p' theme='white'>Reset password</Typography>
            <Typography variant='paragraph' component='p' theme='white'>Help</Typography>

        </div>
        <div className={classes.appFooter_stayTuned}>
        <Typography variant='menu' component='p' theme='white'>Stay tuned</Typography>
        <form className={classes.appFooter_stayTuned_input}>
          <label htmlFor="email">Email address</label>
          <input type="text" placeholder='Enter your email' />
          <Button size='medium' rounded='md' style={{backgroundColor: '#E5A900'}}>Subscribe to our newsletter</Button>
        </form>
          
        </div>
        </div>
        <div className={classes.appFooter_down}>
        <Typography variant='paragraph' component='p' theme='white' style={{fontStyle: 'italic'}}>@2024 All rigths reserved Brainboost</Typography>
        
        </div>
    </div>
  )
}

export default AppFooter
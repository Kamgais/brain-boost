import classes from './getStartedSection.module.scss';
import Image from 'next/image';
import Typography from '@/sharedui/Typography/Typography';
import Button from '@/sharedui/Button/Button';

function GetStartedSection() {
  return (
    <div className={classes.getStartedSection_container}>
        <Image src='/images/get_started.png' width={200} height={250}  alt='' className={classes.getStartedSection_image}/>
        <Typography variant='headline' theme='secondary-dark' component='h3'>Create your own quizzes for free</Typography>
        <Button size='small' rounded='md' variant='secondary'>Get started 🚀</Button>
    </div>
  )
}

export default GetStartedSection
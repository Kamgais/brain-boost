

import classes from './tip.module.scss';
import Image from 'next/image';
import Typography from '@/sharedui/Typography/Typography';
import DraggableEl from '@/sharedui/Draggable/DraggableEl';

function TipSection() {
    const badgeStyle = {
        position: 'absolute',
        top: '-6%',
        left: '7%',
        width: 62,
        height: 40,
        backgroundColor: '#E5A900',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        fontWeight: 'bold'
    }

    const textStyle = {
        width: '80%'
    }
  return (
    <div className={classes.tipSection_container}>
        <div className={classes.tipSection_blue_div}>
            <Typography variant='headline' theme='secondary-dark' style={textStyle}>
            Taking quizzes helps you earn points and move up the rankings
            </Typography>
        </div>
        <div className={classes.tipSection_gray_div}>
            <Typography variant='headline' theme='gray' style={textStyle}>
            Stay consistent can help you progress in the rankings.
            </Typography>
        </div>
        <DraggableEl>
        <div className={classes.tipSection_image}>
            <Image src='/images/tip.png' width={300} height={300} alt=''/>
        </div>
        </DraggableEl>
      <Typography variant='paragraph' component='span' style={badgeStyle}>
        Tips
      </Typography>
    </div>
  )
}

export default TipSection
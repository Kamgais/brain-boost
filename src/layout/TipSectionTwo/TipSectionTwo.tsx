import classes from './tipSectionTwo.module.scss';
import Typography from '@/sharedui/Typography/Typography';
import Image from 'next/image';
import DraggableEl from '@/sharedui/Draggable/DraggableEl';



function TipSectionTwo() {

    const badgeStyle = {
        position: 'absolute',
        top: '-6%',
        right: '7%',
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
            <Typography variant='headline' theme='black' style={textStyle}>
            Taking quizzes helps you earn points and move up the rankings
            </Typography>
        </div>
        <div className={classes.tipSection_gray_div}>
            <Typography variant='headline' theme='white' style={textStyle}>
            Stay consistent can help you progress in the rankings.
            </Typography>
        </div>
        <DraggableEl>
        <div className={classes.tipSection_image}>
            <Image src='/images/tip2.png' width={300} height={300} alt=''/>
        </div>
        </DraggableEl>
      <Typography variant='paragraph' component='span' style={badgeStyle}>
        Tips
      </Typography>
    </div>
  )
}

export default TipSectionTwo
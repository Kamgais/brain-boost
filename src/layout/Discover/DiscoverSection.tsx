import { GoArrowRight } from "react-icons/go";
import classes from './discoverSection.module.scss';
import Typography from '@/sharedui/Typography/Typography';
import Link from 'next/link';
import Image from "next/image";
import Avatar from "@/sharedui/Avatar/Avatar";




function DiscoverSection() {
    const quizLabelStyle = {
        position: 'absolute',
        right: '5%',
        bottom: '5%',
        width: 48,
        height: 24,
        backgroundColor: '#E5A900',
        textAlign: 'center',
        borderRadius: '50px',
        color: 'white',
        fontWeight: 'bold'
    }

    const abbrStyle = {
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: '#047D99',
        textAlign: 'center',
        color: 'white'

    }
  return (
   <section className={classes.discoverSection_container}>
    <div className={classes.discoverSection_top}>
        <Typography component='p' variant='middleline'>
            Discover
        </Typography>
        <Link href='/discover' style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
         <Typography variant="paragraph" theme="primary" component="p">See more</Typography>
        <GoArrowRight color="#029FC8"/>
        </Link>
    </div>
    <div className={classes.discoverSection_down}>
         {
            [1,2,3,4,5].map((_,index) => {
                return (
                    <div className={classes.discoverSection_down_quiz_item} key={index}>
                        <div className={classes.discoverSection_down_quiz_item_imageBox} >
                            <Image src={`/images/quiz_test${index+1}.jpg`} width={300} height={300} alt=""/>
                            <Typography variant="paragraph" component="span" style={quizLabelStyle}>7 Qs</Typography>
                        </div>
                        <div className={classes.discoverSection_down_quiz_item_title}>
                            <Typography variant="subtitle" component="h5">The attraction law with Dr Nozman</Typography>
                        </div>
                        <div className={classes.discoverSection_down_quiz_item_author}>
                            <Avatar/>
                            <Typography variant="paragraph" component="p">Anna Regan</Typography>
                        </div>
                    </div>
                )
            })
         }
    </div>
   </section>
  )
}

export default DiscoverSection
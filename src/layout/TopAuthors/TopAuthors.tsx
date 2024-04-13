import Avatar from '@/sharedui/Avatar/Avatar';
import classes from './topAuthor.module.scss';
import Typography from '@/sharedui/Typography/Typography';
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";

function TopAuthors() {
  return (
    <div className={classes.topAuthors_container}>
        <div className={classes.topAuthors_top}>
        <Typography component='p' variant='middleline'>
            Top authors
        </Typography>
        <Link href='/leaderboard' style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
        <Typography variant="paragraph" theme="primary" component="p">See more</Typography>
        <GoArrowRight color="#029FC8"/>
        </Link>
        </div>
        <div className={classes.topAuthors_down}>
            <div className={classes.topAuthors_down_items}>
               {
                [1,2,3,4,5,6,7].map((_,index) => {
                    return (
                        <div className={classes.topAuthors_down_item}>
                            <Avatar/>
                            <Typography variant="paragraph" component="p" theme='gray'>Anna Regan</Typography>
                        </div>
                       
                    )
                })
               }
            </div>
            <button className={classes.topAuthors_down_button}>
                Become a top user 🚀
            </button>
        </div>
    </div>
  )
}

export default TopAuthors
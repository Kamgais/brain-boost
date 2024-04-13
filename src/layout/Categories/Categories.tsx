import classes from './categories.module.scss';
import Image from 'next/image';
import Typography from '@/sharedui/Typography/Typography';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';

const categories = [
    {
        image: '/images/math.png',
        label: 'Mathematics',
        color: '#F5F5F580'

    },
    {
        image: '/images/science.png',
        label: 'Science',
        color: '#E4617F80'
    },
    {
        image: '/images/art.png',
        label: 'Art',
        color: '#E0AD4680'
    },
    {
        image: '/images/history.png',
        label: 'History',
        color: '#E0954880'
    }
]

function Categories() {
  return (
    <div className={classes.categorySection_container}>
        <div className={classes.categorySection_top}>
        <Typography component='p' variant='middleline'>
            Categories
        </Typography>
        <Link href='/discover' style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
         <Typography variant="paragraph" theme="primary" component="p">See more</Typography>
        <GoArrowRight color="#029FC8"/>
        </Link>
        </div>

        <div className={classes.categorySection_down}>
            {
                categories.map((category,index) => (
                    <div className={classes.categorySection_down_item} style={{backgroundColor: category.color}}>
                        <Image src={category.image} width={150} height={142} alt='category image'/>
                        <Typography variant='paragraph' component='p' theme='gray' >{category.label}</Typography>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories
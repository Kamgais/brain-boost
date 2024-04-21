'use client';

import classes from './quizzForm.module.scss';
import Typography from '@/sharedui/Typography/Typography';
import Button from '@/sharedui/Button/Button';
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import QuizzInfosForm from './QuizzInfosForm';
import AddQuestionStep from './AddQuestionStep';
import QuizzFormProvider from '../_context/QuizzFormProvider';
import QuizzFormActions from './QuizzFormActions';
import { useRouter } from 'next/navigation';



const steps = [
    {
        id: 1, name: 'Quiz infos'
    },
    {
        id: 2, name: 'Add Questions'
    }
]


function QuizzForm() {
    const [currentStep,setCurrentStep] = useState(1);
    const router = useRouter();
  return (
    <QuizzFormProvider>
    <form className={classes.quizzForm_container}>

        <div className={classes.quizzForm_head}>
            <Typography variant='subtitle' component='h4' theme='black'>Create a Quiz</Typography>
            <Button variant='danger' size='small' rounded='lg' icon={<IoMdClose/>} iconPosition='right' handleClick={router.back}>Cancel</Button>
        </div>

        <div className={classes.quizzForm_step_shower}>
            {
                steps.map((step, index)=> (
                    <div className={classes.quizzForm_step_shower_item} key={index}>
                <div className={classes.quizzForm_step_shower_item_top}>
                    <span style={{backgroundColor: currentStep === step.id ? '#E5A900' : '#B0B0B0'}}>{step.id}</span>
                    <Typography variant='paragraph' component='p' theme='black' weight='regular'>{step.name}</Typography>
                </div>
                <div className={classes.quizzForm_step_shower_bar} style={{backgroundColor: currentStep === step.id ? '#E5A900' : '#B0B0B0'}}></div>
            </div>
                ))
            }
        </div>

       {
        currentStep === 1 && (
            <QuizzInfosForm/>
        )
       }

       {
        currentStep === 2 && (
           <AddQuestionStep/>
        )
       }
        <div className={classes.quizzForm_actions}>
          <QuizzFormActions currentStep={currentStep} setCurrentStep={setCurrentStep}/>
        </div>
    </form>
    </QuizzFormProvider>
  )
}

export default QuizzForm
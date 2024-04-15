'use client';

import classes from './quizzForm.module.scss';
import Typography from '@/sharedui/Typography/Typography';
import Button from '@/sharedui/Button/Button';
import FormControl from '@/sharedui/FormControl/FormControl';
import { GrPowerReset } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import Image from 'next/image';

import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";

import { useState } from 'react';



const steps = [
    {
        id: 1, name: 'Quiz infos'
    },
    {
        id: 2, name: 'Add Questions'
    }
]


const QUESTION_TYPE_OPTIONS = [
    {
        id: 1,
        src: '/images/quiz_type_check.gif',
        label: 'Multiple Choice (QCM)'
    },
    {
        id: 2,
        src: '/images/quiz_type_write.gif',
        label: 'Fill in the Blank'
    },
    {
        id:3,
        src: '/images/quiz_type_boolean.gif',
        label: 'True or False'
    }
]

function QuizzForm() {
    const [currentStep,setCurrentStep] = useState(2);

    const currentStepBarStyle = {
        backgroundColor: '#E5A900'
    }


    const next = () => {
        setCurrentStep(currentStep => currentStep+1)
    }

    const prev = () => {
        setCurrentStep(currentStep => currentStep - 1)
    }
  return (
    <form className={classes.quizzForm_container}>

        <div className={classes.quizzForm_head}>
            <Typography variant='subtitle' component='h4' theme='black'>Create a Quiz</Typography>
            <Button variant='danger' size='small' rounded='lg' icon={<IoMdClose/>} iconPosition='right'>Cancel</Button>
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
                <>
            <FormControl type='file' />
            <FormControl type='text' placeholder='Enter a title' label='Title' required={true} size='large' />
            <FormControl type='longtext' placeholder='Write a description' label='Description' required={true} size='large' />
            <div className={classes.quizzForm_select}>
            <FormControl type='select' required={true} size='small' label='Category' options={['Select a category...', 'Mathematics', 'Science', 'Art', 'History']}  />
            <FormControl type='select' required={true} size='small' label='Visiblity' options={['Select a category...', 'Mathematics', 'Science', 'Art', 'History']}  />
            </div>
                </>
        )
       }

       {
        currentStep === 2 && (
            <>

              <FormControl type='file' />
              <FormControl type='text' placeholder='Type the question' label='Question' required={true} size='large' />
              <FormControl type='radio'  label='Question type' required={true} size='large' options={QUESTION_TYPE_OPTIONS} /> 
              <div className={classes.quizzForm_select}>
              <FormControl type='number' placeholder='Type the type limit in second' label='Set a time limit' required={true} size='small' />
              <FormControl type='number' placeholder='Type the reward value of the question' label='Set the reward' required={true} size='small' />
             
              </div>
              <div className={classes.quizzForm_answers}>
                <Typography theme='gray' component='div'>Answers</Typography>
                <div className={classes.quizForm_answer_item}>
                    {
                        [0,1,2,3].map((_,index) => (
                            <div className={classes.quizForm_answer_item_box} key={index}>
                            fdgfhfghfghf
                        <Image src='/images/edit_icon.png' width={25} height={25} alt='' className={classes.quizForm_answer_item_box_icon}/>
                        <Image src='/images/delete_icon.png' width={25} height={25} alt='' className={classes.quizForm_answer_item_box_icon}/>
                        </div>
                        ))
                    }
                <Button size='small' rounded='md' variant='ico' icon={<FaPlus />}/>
                </div>
                
              </div>
              
            </>
        )
       }
        <div className={classes.quizzForm_actions}>
            {
                currentStep === 1 &&
                <>
                 <Button variant='outline-primary' size='medium' rounded='md' icon={<GrPowerReset />} iconPosition='right'>Reset</Button>
                 <Button variant='accent' size='medium' rounded='md' icon={<GrFormNextLink />} iconPosition='right'>Next</Button>
                 </>
            }

            {
                currentStep === 2 && 
                <>
                <Button variant='outline-primary' size='medium' rounded='md' icon={<GrFormPreviousLink />} iconPosition='left'>Prev</Button>
                <Button variant='accent' size='medium' rounded='md' icon={<GoGoal />} iconPosition='right'>Create</Button>
                </>
            }
        </div>
    </form>
  )
}

export default QuizzForm
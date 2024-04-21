'use client';

import classes from './quizzForm.module.scss';
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { useQuizzForm } from "../_hooks/useQuizzForm";
import { useFieldArray } from "react-hook-form";
import QuestionForm from "./QuestionForm";
import Button from '@/sharedui/Button/Button';
import { defaultQuestion } from '../_hooks/useCreateQuizzForm';
import { useState } from 'react';
import { FaQuestionCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from 'react-icons/ri';
import QuestionBlockItem from './QuestionBlockItem';
import Typography from '@/sharedui/Typography/Typography';
import { GrUpdate } from 'react-icons/gr';



function AddQuestionStep() {
    const [openedItem, setOpenedItem] = useState("0");
    const [isOpen, setOpen] = useState(true);
    const {register, setValue,trigger, control, formState: {errors}, getValues} = useQuizzForm();
    const {append, remove, fields:questions} = useFieldArray({
        name: 'questions',
        control,
    })

    const getDefaultQuestionFormData = () => defaultQuestion

    const addEmptyNewQuestion = async () => {
        const index = questions.length - 1 ;
       console.log(getValues(`questions.${index}`));
        const output = await trigger([`questions.${index}.cover`,`questions.${index}.label`,`questions.${index}.type`,`questions.${index}.options`, 'questions']);
        if(!output) return ;
        append(getDefaultQuestionFormData())
      
    }
  return (
    <div className={classes.add_question_step_container}>

       <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
    {
        questions.map((question,questionIndex) => (

    //         <div className={classes.question_block_item_container}>

    //     <div className={classes.question_block_item_top}>
    //         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    //         <Typography variant='paragraph' component='p' theme='black' weight='regular'>Question {questionIndex+1}</Typography>
    //         <FaQuestionCircle onClick={() => setOpen(!isOpen)}/>
    //         </div>
    //        {
    //         isOpen && (
    //             <QuestionForm questionIndex={questionIndex}/>
    //         )
    //        }
    //     </div>
    //         <div className={classes.question_block_item_bottom}>
    //         <Button size='small' variant='outline-primary' rounded='md' icon={<GrUpdate/>} iconPosition='left'>Edit</Button>
    //         <Button size='small' variant='danger' rounded='md' icon={<RiDeleteBin5Line/>} iconPosition='left' handleClick={() => remove(questionIndex)} type='button'>Delete</Button>
    //         </div>
    // </div>

            <QuestionBlockItem questionIndex={questionIndex} remove={remove} key={question.id}/>
          
        ))
    }
    </div>

    <Button handleClick={addEmptyNewQuestion}>Add new question</Button>
    </div>
  )
}

export default AddQuestionStep
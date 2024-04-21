'use client';
import Typography from '@/sharedui/Typography/Typography';
import classes from './quizzForm.module.scss';
import { FaQuestionCircle } from 'react-icons/fa';
import QuestionForm from './QuestionForm';
import Button from '@/sharedui/Button/Button';
import { GrUpdate } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useState } from 'react';
import { useQuizzForm } from '../_hooks/useQuizzForm';
import { useFieldArray } from 'react-hook-form';
import { toast } from 'react-toastify';


interface Props {
    questionIndex: number;
    remove: (index: number) => void;
}

function QuestionBlockItem({questionIndex, remove}: Props) {
    const [isOpen, setOpen] = useState(true);
    const {control} = useQuizzForm();
    const {fields: questions} = useFieldArray({
      name: 'questions',
      control
    })

    const handleRemoveQuestion = () => {
      if(questions.length === 1) {
        console.log(questions.length)
        toast.error("You can't delete this question")
    } else {
      remove(questionIndex);
  }
}

  return (
    <div className={classes.question_block_item_container}>

        <div className={classes.question_block_item_top}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography variant='paragraph' component='p' theme='black' weight='regular'>Question {questionIndex+1}</Typography>
            <FaQuestionCircle onClick={() => setOpen(!isOpen)}/>
            </div>
           {
            isOpen && (
                <QuestionForm questionIndex={questionIndex}/>
            )
           }
        </div>
            <div className={classes.question_block_item_bottom}>
            <Button size='small' variant='outline-primary' rounded='md' icon={<GrUpdate/>} iconPosition='left'>Edit</Button>
            <Button size='small' variant='danger' rounded='md' icon={<RiDeleteBin5Line/>} iconPosition='left' handleClick={handleRemoveQuestion} type='button'>Delete</Button>
            </div>
    </div>
  )
}

export default QuestionBlockItem
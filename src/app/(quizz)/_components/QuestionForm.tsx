
'use client';

import FormControl from "@/sharedui/FormControl/FormControl"
import Typography from "@/sharedui/Typography/Typography"
import Button from "@/sharedui/Button/Button"
import { FaPlus } from "react-icons/fa"
import Image from "next/image"
import classes from './quizzForm.module.scss';
import { useQuizzForm } from "../_hooks/useQuizzForm"
import { useFieldArray } from "react-hook-form"
import OptionFormModal from "./OptionFormModal"
import {  useState } from "react";
import { defaultOption } from "../_hooks/useCreateQuizzForm";



const QUESTION_TYPE_OPTIONS = [
    {
        id: 1,
        src: '/images/quiz_type_check.gif',
        label: 'Multiple Choice (QCM)',
        value: 'QCM'
    },
    {
        id: 2,
        src: '/images/quiz_type_write.gif',
        label: 'Fill in the Blank',
        value: 'FIB'
    },
    {
        id:3,
        src: '/images/quiz_type_boolean.gif',
        label: 'True or False',
        value: 'TOF'
    }
]


interface Props {
    questionIndex: number;
}



function QuestionForm({questionIndex}: Props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [indexOfOption, setIndexOfOption] = useState(0);
    const [modalType, setModalType] = useState<string>('');
    const {register, setValue,trigger, control, formState: {errors}} = useQuizzForm();
    const { fields:options, append,remove, update} = useFieldArray({
        name:  `questions.${questionIndex}.options`,
        control,
    })



    const getDefaultOptionFormData = () => defaultOption;

    const addNewOption = () => {
      // append(getDefaultOptionFormData());
       console.log(options.length)
        setModalType('NEW')
        setIndexOfOption(options.length);
        setModalOpen(true);
}


    const openEditOptionModal = (index: number) => {
        setModalType('EDIT');
        setIndexOfOption(index);
        setModalOpen(true);
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <OptionFormModal 
        isOpen={isModalOpen} 
        setModalOpen={setModalOpen} 
        questionIndex={questionIndex} 
        optionIndex={indexOfOption} 
        update={update}
        remove={remove}
        type={modalType}
        />
    <FormControl type='file' register={register} name={`questions.${questionIndex}.cover`} error={errors.questions && errors.questions[questionIndex]?.cover} trigger={trigger} setValue={setValue} />
    <FormControl type='text' placeholder='Type the question' label='Question' required={true} size='large'  name={`questions.${questionIndex}.label`} error={errors.questions && errors.questions[questionIndex]?.label} register={register}/>
    <FormControl type='radio'  label='Question type' required={true} size='large' options={QUESTION_TYPE_OPTIONS} name={`questions.${questionIndex}.type`} error={errors.questions && errors.questions[questionIndex]?.type} register={register} /> 
    <div className={classes.quizzForm_answers}>
      <Typography theme='gray' component='div'>Answers</Typography>
      <div className={classes.quizForm_answer_item}>
          {
              options?.map((option,optionIndex) => (
                  <div className={classes.quizForm_answer_item_box} key={option.id} style={{backgroundColor: option.isCorrect ? '#1abc9c': '#e74c3c'}}>
                    {option.label}
                     
              <Image src='/images/edit_icon.png' width={25} height={25} alt='' className={classes.quizForm_answer_item_box_icon} onClick={() => openEditOptionModal(optionIndex)}/>
              <Image src='/images/delete_icon.png' width={25} height={25} alt='' className={classes.quizForm_answer_item_box_icon} onClick={() => remove(optionIndex)}/>
              </div>
              ))
          }
      <Button size='small' rounded='md' variant='ico' icon={<FaPlus />} handleClick={addNewOption}/>
      </div>
      {
           errors.questions && errors.questions[questionIndex]?.options && ( <p style={{color: '#ff7675'}}>{errors.questions[questionIndex]?.options?.message}</p>
                    )
                }

                {
                    errors.questions && (<p style={{color: '#ff7675'}}>{errors.questions[questionIndex]?.root?.message}</p>)
                }
    </div>
    </div>
  )
}

export default QuestionForm
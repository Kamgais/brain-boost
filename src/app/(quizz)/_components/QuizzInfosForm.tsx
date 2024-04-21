'use client'

import FormControl from "@/sharedui/FormControl/FormControl"
import classes from './quizzForm.module.scss';
import { useQuizzForm } from "../_hooks/useQuizzForm";


function QuizzInfosForm() {
    const {register, setValue,trigger, formState: {errors}} = useQuizzForm();
  return (
    <>
    <FormControl type='file' register={register} name="cover" error={errors.cover} trigger={trigger} setValue={setValue}/>
    <FormControl type='text' placeholder='Enter a title' label='Title' required={true} size='large' register={register}  name="title" error={errors.title}/>
    <FormControl type='longtext' placeholder='Write a description' label='Description' required={true} size='large' register={register} name="description" error={errors.description} />
    <div className={classes.quizzForm_select}>
    <FormControl type='select' required={true} size='small' label='Category' options={['Select a category...', 'Mathematics', 'Science', 'Art', 'History']} register={register} name="category" error={errors.category} />
    <FormControl type='select' required={true} size='small' label='Visiblity' options={['Select a visibility...', 'Private', 'Public']} register={register} error={errors.visibility} name="visibility" />
    </div>
    <div className={classes.quizzForm_select}>
      <FormControl type='number' placeholder='Type the type limit in second' label='Set a time limit' required={true} size='small' register={register} name="duration" error={errors.duration}/>
      <FormControl type='select' required={true} size='small' label='Level' options={['Select a level...', 'Easy', 'Medium', 'Hard', 'Expert']} register={register} name="level" error={errors.level} />
     
      </div>
        </>
  )
}

export default QuizzInfosForm
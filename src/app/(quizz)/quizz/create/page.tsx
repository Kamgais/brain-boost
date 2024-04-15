import FormControl from '@/sharedui/FormControl/FormControl';
import classes from './createQuizz.module.scss';
import QuizzForm from '../../_components/QuizzForm';

function CreateQuizzPage() {
  return (
   <div className={classes.createQuizzPage_container}>

     <QuizzForm/>
   </div>
  )
}

export default CreateQuizzPage;
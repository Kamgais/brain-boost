import Button from "@/sharedui/Button/Button"
import { GoGoal } from "react-icons/go"
import { GrPowerReset, GrFormNextLink, GrFormPreviousLink } from "react-icons/gr"
import { useQuizzForm } from "../_hooks/useQuizzForm"


interface Props {
    currentStep: number;
    setCurrentStep: any
}


const QUIZZ_INFOS_FIELDS:string[] = [
  'cover',
  'title',
  "description",
  "category",
  "visibility",
  "duration",
  "level"
]

function QuizzFormActions({currentStep, setCurrentStep}: Props) {
const {trigger, getValues} = useQuizzForm();

const next = async() => {
const output = await trigger(["cover", "title", "description", "category", "visibility","duration", "level"] , {shouldFocus: true});

if(!output) {
  return;
}
setCurrentStep((current: number) => current+1)
}

const prev = () => {
  setCurrentStep((current: number) => current-1)
}
  return (
    <>
     {
                currentStep === 1 &&
                <>
                 <Button variant='outline-primary' size='medium' rounded='md' icon={<GrPowerReset />} iconPosition='right' handleClick={() => trigger('description')}>Reset</Button>
                 <Button variant='accent' size='medium' rounded='md' icon={<GrFormNextLink />} iconPosition='right' handleClick={next}>Next</Button>
                 </>
            }

            {
                currentStep === 2 && 
                <>
                <Button variant='outline-primary' size='medium' rounded='md' icon={<GrFormPreviousLink />} iconPosition='left' handleClick={prev}>Prev</Button>
                <Button variant='accent' size='medium' rounded='md' icon={<GoGoal />} iconPosition='right'>Create</Button>
                </>
            }
    </>
  )
}

export default QuizzFormActions
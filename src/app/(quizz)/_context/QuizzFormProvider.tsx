import { FormProvider } from "react-hook-form";
import { useCreateQuizzForm } from "../_hooks/useCreateQuizzForm"


interface Props {
    children: React.ReactNode
}

function QuizzFormProvider({children}: Props) {
    const methods = useCreateQuizzForm();
  return (
    <FormProvider {...methods}>
        {children}
    </FormProvider>
  )
}

export default QuizzFormProvider
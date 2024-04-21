
import { useFormContext } from "react-hook-form"
import { TQuizzFormFields } from "../_formTypes"

export const useQuizzForm = () => {
    return useFormContext<TQuizzFormFields>()
}
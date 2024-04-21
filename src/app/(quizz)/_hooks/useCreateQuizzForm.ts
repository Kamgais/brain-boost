import { useForm } from "react-hook-form";
import { TQuizzFormFields } from "../_formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { quizzFormSchema } from "../_schema/quizzFormSchema";


export const useCreateQuizzForm = () => useForm<TQuizzFormFields>({
    mode: 'onBlur',
    resolver: zodResolver(quizzFormSchema),
    defaultValues: getDefaultQuizzFormData()
})


export const defaultOption = {
    label: '',
    isCorrect: false,
  };
  
 export  const defaultQuestion = {
    cover: undefined,
    label: '',
    type: '',
    options: [],
  };
  
  export const defaultQuizz = {
    cover: undefined,
    title: '',
    description: '',
    category: '',
    visibility: '',
    duration: 0,
    level: '',
    questions: [defaultQuestion],
  };
  
  export function getDefaultQuizzFormData() {
    return defaultQuizz;
  }
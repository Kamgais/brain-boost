import {z} from 'zod';
import { quizzFormSchema } from './_schema/quizzFormSchema';

export type TQuizzFormFields = z.infer<typeof quizzFormSchema>
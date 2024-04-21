import { z } from "zod"


const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = [
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/bmp',
  'image/tiff',
  'image/webp',
  'image/svg+xml',
  'image/x-icon', // Icon files
  'image/vnd.microsoft.icon', // Icon files
  'image/vnd.djvu', // DjVu files
  'image/avif', // AVIF image format
  'image/heic', // HEIC (High Efficiency Image Format) files
  'image/heif', // HEIF (High Efficiency Image Format) files

  ];

const imageSchema = z
  .instanceof(File)
  .optional()
  .refine((file) => {
    return !file || file.size <= MAX_UPLOAD_SIZE;
  }, 'File size must be less than 3MB')
  .refine((file) => {
    return ACCEPTED_FILE_TYPES.includes(file!.type);
  }, 'File must be an image');


export const optionFormSchema = z.object({
    label: z.string().min(1, "The answer label must be at least one character"),
    isCorrect: z.boolean(),
})

export const questionFormSchema = z.object({
  cover: z
    .any()
    .optional()
    .refine((file) => {
      return !file || file![0].size <= MAX_UPLOAD_SIZE;
    }, 'File size must be less than 3MB')
    .refine((file) => {
        
      return file &&  ACCEPTED_FILE_TYPES.includes(file[0].type);
    }, 'File must be an image'),
    label: z.string()
    .min(10, {message: '⛔The question label must be at least 10 characters'})
    .max(100, {message: '⛔The question label must be less than 100 characters'}),

    type: z.string().refine((value) => ['QCM', 'FIB', 'TOF'].includes(value), '⛔You must choose a type'),

    options: z.array(optionFormSchema).min(1, "⛔You must set at least 1 answer option")
    .refine((options) => {
      const correctOptions = options.filter(option => option.isCorrect)
      return correctOptions.length === 1;
    }, "⛔You have to set  one option as correct")

}).refine((question) => {
  if(question.type === "TOF") {
   return  question.options.length === 2
  }
  return true;
}, "⛔You can't set more than 2 options  for type TRUE OR FALSE ")
.refine((question) => {
  if(question.type === "TOF") {
    return question.options.filter(option => !option.isCorrect).length === 1;
  }
  return true;
}, "⛔You must set one option as FALSE for type TRUE OR FALSE")
.refine((question) => {
  if(question.type === "QCM") {
    return question.options.length > 1
  }
  return true
}, "⛔You must set more than one option for type QCM")
.refine((question) => {
  if(question.type === "FIB") {
    return question.options.length === 1;
  }
  return true;
},"⛔You have to set only one option for type FILL IN THE BLANK (This one have to be set as correct)")

export const quizzFormSchema = z.object({
    cover: z
    .any()
    .optional()
    .refine((file) => {
      return !file || file![0].size <= MAX_UPLOAD_SIZE;
    }, 'File size must be less than 3MB')
    .refine((file) => {
        
      return file &&  ACCEPTED_FILE_TYPES.includes(file[0].type);
    }, 'File must be an image'),
    title: z.string().trim()
    .min(6,  '⛔Title must be at least 6 characters')
    .max(30, {message: '⛔Title must be less than 30 characters'}),

    description: z.string().trim()
    .min(20, {message: '⛔The quizz description must be at least 20 characters'})
    .max(300, {message: '⛔The quizz description must be less than 300 characters'}),

    category: z.string().refine((value) => ['mathematics', 'science', 'art', 'history'].includes(value), {
        message: '⛔Choose a correct category'
    }),

    visibility: z.string().refine((value) => ['private', 'public'].includes(value), {
        message: '⛔Choose a correct visiblity option'
    }),

    duration: z.number({invalid_type_error: '⛔Duration is required'})
    .min(20, {message: '⛔A quiz should last a minimum of 20 seconds'})
    .max(3600, {message: '⛔A quiz should last a maximum of one hour'}),
    
    level: z.string().refine((value) => ['easy', 'medium', 'hard', 'expert'].includes(value)),

    questions: z.array(questionFormSchema)
})






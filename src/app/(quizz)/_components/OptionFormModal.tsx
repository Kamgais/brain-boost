'use client';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal"
import Button from "@/sharedui/Button/Button"
import FormControl from "@/sharedui/FormControl/FormControl"
import { useQuizzForm } from "../_hooks/useQuizzForm";
import { useEffect } from "react";



interface Props {
    isOpen: boolean;
    setModalOpen: (isOpen: boolean) => void;
    update: any;
    remove: any;
    type: string;
    questionIndex: number;
    optionIndex: number;

}


function OptionFormModal({isOpen, setModalOpen,questionIndex,optionIndex, remove, update, type}: Props) {
    const {isOpen: open, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        if(isOpen) {
            onOpen()
        } else {
            onClose()
        }
    },[isOpen])
    const {register, trigger, getValues,formState: {errors}} = useQuizzForm();


    const handleAddAnswer = async() => {
        const output = await trigger([`questions.${questionIndex}.options.${optionIndex}.label`, `questions.${questionIndex}.options.${optionIndex}.isCorrect`],{shouldFocus: true})
        // console.log(output)
        // console.log(questionIndex)
        // console.log(optionIndex)
        if(!output) return;
        update(optionIndex, {
            label: getValues(`questions.${questionIndex}.options.${optionIndex}.label`),
            isCorrect: getValues(`questions.${questionIndex}.options.${optionIndex}.isCorrect`)
        })
        setModalOpen(false);
    }

    const handleCancelAnswerModal = () => {

    }


    const handleClose = () => {
        setModalOpen(false)
    }
  return (
    <Modal 
    backdrop="blur"
    size="lg"
    isOpen={open} 
    onClose={handleClose} 
  >
    <ModalContent>
      {(handleClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Add an answer</ModalHeader>
          <ModalBody>
           <FormControl 
           type="text" 
           label="Answer text" 
           placeholder="Write an answer" 
           size="large" 
           register={register} 
           name={`questions.${questionIndex}.options.${optionIndex}.label`}
           error={errors.questions && errors.questions[questionIndex]?.options && errors.questions[questionIndex]?.options![optionIndex]?.label}
           />
           <FormControl 
           type="checkbox" 
           label="Correct answer"
            placeholder="Write an answer" 
            size="large" 
            register={register} 
            name={`questions.${questionIndex}.options.${optionIndex}.isCorrect`}
            error={errors.questions && errors.questions[questionIndex]?.options && errors.questions[questionIndex]?.options![optionIndex]?.isCorrect}
            />
          </ModalBody>
          <ModalFooter>
            <Button size="large" rounded="md" variant="danger" handleClick={handleClose}>
              Cancel
            </Button>
            <Button size="large" rounded="md" handleClick={handleAddAnswer}>
              Save
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}

export default OptionFormModal
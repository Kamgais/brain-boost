'use client';

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import {Button} from "@nextui-org/button";
import { useEffect } from "react";


interface Props {
    isOpen: boolean;
    action?: {
        title: string;
        func: () => void
    }
    content: string;
    title: string;
    setAlertModalOpen: (open: boolean) => void

}

const Alert = ({isOpen, action, content, title, setAlertModalOpen}: Props) => {
    const {onClose, isOpen:open, onOpen} = useDisclosure();

    useEffect(() => {
        if(isOpen) {
            onOpen()
        } else {
            onClose()
        }
    },[isOpen])


    const actionFunc = () =>  {
        action?.func();
        onClose();
    }

    const closeModal = () => {
      setAlertModalOpen(false);
      onClose();
    }
  return (
    <Modal 
    backdrop="blur"
    isOpen={open} 
    onClose={closeModal} 
  >
    <ModalContent>
      {(closeModal) => (
        <>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody>
            <p> 
              {content}
            </p>
          </ModalBody>
          <ModalFooter>
                <Button color="danger" variant="light" onPress={closeModal}>
                  Close
                </Button>
                <Button color="primary" onPress={actionFunc}>
                  {action?.title}
                </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}

export default Alert
import { Modal, ModalBody, ModalCloseButton, ModalOverlay, ModalContent, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { DetailsUserCard } from "./DetailsUserCard";


export const DisplayModal = ({ open, close, person }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();


    const closeModal = () => {
        close(!open);
    };

    useEffect(() => {
        if (open) {
            // console.log("person", person);
            onOpen();
        }
    }, []);
    return (
        <>
            <Modal closeOnOverlayClick={ false } isOpen={ isOpen } onClose={ onClose } size='sm' p="40px">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton onClick={ closeModal } />
                    <ModalBody pb={ 6 } >
                        <DetailsUserCard person={ person } />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
/* Thirds-party Import */
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

import { IModalAppProps } from '.';

const ModalApp: React.FC<IModalAppProps> = ({ onSave, initialRef, finalRef, isOpen, onClose }) => {
  const handleOnSave = () => {
    onSave({
      timestamp: new Date(),
      is_active: true,
    });
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}>
      <span onClick={onClose}>&times;</span>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Alarm</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl mt={4}>
            <FormLabel>Select a timing</FormLabel>
            <Input placeholder="Alarm" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={handleOnSave}
            colorScheme="blue"
            mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalApp;

/* Thirds-party Import */
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Text,
  Flex,
  IconButton,
  Box,
  Input,
  CardHeader,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
/* CSS Import */
import '../../../styles/modal.css';

import { IAlarmModalProps } from '.';

const AlarmModal: React.FC<IAlarmModalProps> = ({ toggleModal, onSave, initialData }) => {
  const [date, setDate] = useState<any>(
    initialData ? initialData.timestamp : new Date().getHours(),
  );

  const handleChange = (event: any) => setDate(event.target.value);

  const handleOnSave = () => {
    const [hours, minutes] = date.split(':');
    const newDate = new Date();
    newDate.setHours(hours, minutes);

    if (initialData?.id) {
      onSave({
        id: initialData.id,
        timestamp: new Date(newDate),
        is_active: true,
      });
    } else {
      onSave({
        timestamp: new Date(newDate),
        is_active: true,
      });
    }
  };

  return (
    <div className="modal">
      <div className="modal_content">
        <Card
          maxW="md"
          overflow="hidden"
          variant="outline">
          <CardHeader>
            <Flex>
              <Flex
                flex="1"
                gap="4"
                alignItems="center"
                flexWrap="wrap">
                <Box>
                  <Text
                    color="black.800"
                    fontSize="2xl">
                    Set Alarm
                  </Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                onClick={toggleModal}
                icon={<CloseIcon />}
              />
            </Flex>
          </CardHeader>
          <Box padding="5" />
          <CardBody>
            <Input
              placeholder="Select Time"
              size="lg"
              type="time"
              value={date}
              onChange={handleChange}
            />
          </CardBody>
          <Box padding="5" />
          <CardFooter
            flexDirection="row"
            justify="space-between"
            flexWrap="wrap">
            <Button
              flex="1"
              variant="solid"
              colorScheme="blue"
              onClick={handleOnSave}>
              Save
            </Button>
            <Button
              flex="1"
              variant="ghost"
              colorScheme="blue"
              onClick={toggleModal}>
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AlarmModal;

/* Thirds-party Import */
import React from 'react';
import { Button, Center, Box, Text, Flex, ButtonGroup } from '@chakra-ui/react';
import Switch from 'react-switch';
/* Utils Import */
import { getHourAlarm } from '../../../utils/date-utils';

import { IAlarmItemProps } from '.';

const AlarmItem: React.FC<IAlarmItemProps> = ({ alarm, onChange, onDelete, onEdit, idAlarm }) => {
  const handleCheck = () => idAlarm && onChange(idAlarm);
  const handleEdit = () => idAlarm && onEdit(idAlarm);
  const handleDelete = () => idAlarm && onDelete(idAlarm);


  return (
    <Box>
      <Flex justify="space-between">
        <Flex
          direction={'column'}
          justify="space-between">
          <Text
            color="whiteAlpha.800"
            fontSize="5xl">
            {getHourAlarm(alarm.timestamp)}
          </Text>
          <ButtonGroup spacing="2">
            <Button
              bg="red.500"
              onClick={handleDelete}>
              Delete
            </Button>
            <Button
              bg="blue.300"
              onClick={handleEdit}>
              Edit
            </Button>
          </ButtonGroup>
        </Flex>
        <Center marginLeft="10px">
          <Switch
            onChange={handleCheck}
            checked={alarm.is_active === 0 ? false : true}
          />
        </Center>
      </Flex>
      <Box
        position="relative"
        padding="1"></Box>
    </Box>
  );
};

export default AlarmItem;

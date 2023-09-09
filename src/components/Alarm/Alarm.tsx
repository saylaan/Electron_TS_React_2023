/* Thirds-party Import */
import React from 'react';
import { Center, Box, Text, Flex } from '@chakra-ui/react';
/* Components Import */
import { AlarmList } from './AlarmList';

import { IAlarmProps } from '.';

const Alarm: React.FC<IAlarmProps> = () => {
  return (
    <Box
      margin="auto"
      w="100%"
      maxW="md">
      <Flex direction="column">
        <Center>
          <Text
            color="whiteAlpha.800"
            fontSize="6xl">
            Alarm
          </Text>
        </Center>
        <AlarmList />
      </Flex>
    </Box>
  );
};

export default Alarm;

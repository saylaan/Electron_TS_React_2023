/* Thirds-party Import */
import React from 'react';
import { Container, Center, Text, Flex } from '@chakra-ui/react';
/* Components Import */
import { AlarmList } from './AlarmList';

import { IAlarmProps } from '.';

const Alarm: React.FC<IAlarmProps> = () => {
  return (
    <Container>
      <Center>
        <Flex direction="column">
          <Text
            color="whiteAlpha.800"
            fontSize="6xl">
            Alarm
          </Text>
          <AlarmList />
        </Flex>
      </Center>
    </Container>
  );
};

export default Alarm;

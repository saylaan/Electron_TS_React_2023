/* Thirds-party Import */
import React from 'react';
import { Box, Container, Center } from '@chakra-ui/react';
/* Components Import */
import { Clock } from '../Clock';

import { IHeaderProps } from '.';

const Header: React.FC<IHeaderProps> = () => {
  return (
    <Container
      as="header"
      margin="10"
      maxH="100px">
      <Box>
        <Center>
          <Clock />
        </Center>
      </Box>
      <hr />
    </Container>
  );
};

export default Header;

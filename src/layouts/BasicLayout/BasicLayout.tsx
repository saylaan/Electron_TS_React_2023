/* Thirds-party Import */
import React from 'react';
import { Box, AbsoluteCenter, Container } from '@chakra-ui/react';

import { IBasicLayoutProps } from '.';

const BasicLayout: React.FC<IBasicLayoutProps> = ({ children }) => {
  return (
    <Box h="100vh">
      <AbsoluteCenter
        p="4"
        color="white"
        axis="both">
        <Container
          maxW="md"
          color="grey">
          <div>{children}</div>
        </Container>
      </AbsoluteCenter>
    </Box>
  );
};

export default BasicLayout;

/* Thirds-party Import */
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
/* Components Import */
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { IBasicLayoutProps } from '.';

const BasicLayout: React.FC<IBasicLayoutProps> = ({ children }) => {
  return (
    <Box
      bg="blackAlpha.900"
      h="100vh">
      <Flex
        minHeight="100%"
        justify="space-between"
        direction="column">
        <Header />
        {children}
        <Footer />
      </Flex>
    </Box>
  );
};

export default BasicLayout;

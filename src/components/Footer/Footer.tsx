/* Thirds-party Import */
import React from 'react';
import { ButtonGroup, Box, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { IFooterProps } from '.';

const Footer: React.FC<IFooterProps> = () => {
  return (
    <Box
      as="footer"
      maxH="100px"
      bg="whiteAlpha.600">
      <Stack margin="5">
        <Stack
          justify="space-between"
          direction="row"
          align="center">
          <ButtonGroup variant="tertiary">
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/geoffroy-huck/"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              as="a"
              href="https://github.com/saylaan"
              aria-label="GitHub"
              icon={<FaGithub />}
            />
          </ButtonGroup>
        </Stack>
        <Text
          fontSize="sm"
          color="fg.subtle">
          &copy; {new Date().getFullYear()} Huck Geoffroy All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;

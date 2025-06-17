import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Box bg="blue.500" px={4} py={3} color="white">
    <Flex align="center">
      <Heading size="md">Book Finder</Heading>
      <Spacer />
      <Flex gap={4}>
        <Link as={NavLink} to="/" _hover={{ textDecoration: "underline" }}>
          Book Finder
        </Link>
        <Link as={NavLink} to="/about" _hover={{ textDecoration: "underline" }}>
          About
        </Link>
      </Flex>
    </Flex>
  </Box>
);
export default Header;

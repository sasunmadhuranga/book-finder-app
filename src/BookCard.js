import { Box, Image, Text, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const BookCard = ({ book }) => {
  const info = book.volumeInfo;

  return (
    <Box 
      borderWidth="2px"
      borderColor="gray.300"
      borderRadius="lg"
      p={4}
      bg="white"
      _hover={{ borderColor: "blue.400", boxShadow: "xl" }}
    >
      <Image 
        src={info.imageLinks?.thumbnail}
        alt={`${info.title} cover image`}
        boxSize="150px"
        mx="auto"
      />
      <Stack mt={2} textAlign="center">
        <Text fontWeight="bold">{info.title}</Text>
        <Text fontSize="sm" color="gray.600">{info.authors?.join(', ') || 'Unknown'}</Text>
        <Text fontSize="sm">Published: {info.publishedDate}</Text>
        <Text fontSize="sm">Pages: {info.pageCount}</Text>
      </Stack>
      <Button
        as={RouterLink}
        to={`/book/${book.id}`}
        colorScheme="blue"
        size="sm"
        mt={2}
      >
        View Details
      </Button>
    </Box>
  );
};
export default BookCard;

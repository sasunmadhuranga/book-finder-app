import React from 'react';
import { Box, Input, Button, SimpleGrid, Center } from '@chakra-ui/react';
import axios from 'axios';
import BookCard from './BookCard';
import { useOutletContext } from 'react-router-dom';
import './index.css';

function BookFinder() {
  const {
    query, setQuery,
    books, setBooks,
    startIndex, setStartIndex
  } = useOutletContext();

  const searchBooks = async (index = 0) => {
    if (!query.trim()) return;
    try {
      const res = await axios.get(
        //link goes here
      );
      setBooks(res.data.items || []);
      setStartIndex(index);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box p={4}>
      <Center mb={4}>
        <Input
          id="searchInput"
          type="text"
          value={query}
          placeholder="Search books..."
          onChange={(e) => {
            setQuery(e.target.value);
            setStartIndex(0);
          }}
          maxW="400px"
          mr={2}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchBooks(0);
          }}
        />
        <Button id="searchButton" onClick={() => searchBooks(0)}>
          Search
        </Button>
        <Button
          className="paginationButton"
          id="prevButton"
          onClick={() => searchBooks(startIndex - 12)}
          isDisabled={startIndex === 0}
        >
          Previous
        </Button>
        <Button
          className="paginationButton"
          id="nextButton"
          onClick={() => searchBooks(startIndex + 12)}
          ml={2}
        >
          Next
        </Button>
      </Center>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
export default BookFinder;

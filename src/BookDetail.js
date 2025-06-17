import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Spinner, Image } from '@chakra-ui/react';
import axios from 'axios';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) return <Spinner size="xl" />;

  const info = book.volumeInfo;

  return (
    <Box p={4}>
      <Heading mb={2}>{info.title}</Heading>
      <Image src={info.imageLinks?.thumbnail} alt={info.title} mb={4} />
      <Text><strong>Author:</strong> {info.authors?.join(', ')}</Text>
      <Text><strong>Published:</strong> {info.publishedDate}</Text>
      <Text><strong>Pages:</strong> {info.pageCount}</Text>
      <Text mt={2}>{info.description}</Text>
      <Text mt={2}>
        <a href={info.previewLink} target="_blank" rel="noopener noreferrer">
          View on Google Books
        </a>
      </Text>
    </Box>
  );
};
export default BookDetail;

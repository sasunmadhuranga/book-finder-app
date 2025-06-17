import {Box, Heading, Text} from '@chakra-ui/react';
const About = () =>{
    return(
        <Box p={4}>
        <Heading mb={2}>About Book Finder</Heading>
        <Text fontSize="md">
            This application helps users to search books using the Google Books API. 
        </Text>
        </Box>
    );
};
export default About;
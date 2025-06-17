import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import BookFinder from './BookFinder'
import BookDetail from "./BookDetail";
import About from './About'
import Header from "./Header";
import AppLayout from "./AppLayout";

function App(){
  return(
    <ChakraProvider>
      <Router>
        <Header/>
        <Routes>
          <Route element={<AppLayout />}> 
            <Route path="/" element={<BookFinder/>}></Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/book/:id" element={<BookDetail />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
export default App;

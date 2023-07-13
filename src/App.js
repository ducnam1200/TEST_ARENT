import Footer from './components/Footer';
import Nav from './components/Nav';
import React, { useRef } from 'react';
import { useDisclosure, Box } from '@chakra-ui/react';
import DrawerComponent from './components/DrawerComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Record from './components/Record/Record';
import Recommended from './components/Recommended/Recommended';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box>
      <Nav ref={btnRef} onOpen={onOpen} />

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/record" element={<Record />} />
          <Route path="/recommended" element={<Recommended />} />

        </Routes>
        <ScrollToTop />
      </BrowserRouter>

      <Footer />
      {/* <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} /> */}

    </Box>
  );
}

export default App;
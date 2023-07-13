import AboutUs from './AboutUs';
import Hero from './Hero';
import Testimonials from './Testimonials';
import React, { useRef } from 'react';
import { useDisclosure, Box } from '@chakra-ui/react';

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    return (
        <Box>
            <Hero />
            <AboutUs />
            <Testimonials />
        </Box>
    );
}

export default App;
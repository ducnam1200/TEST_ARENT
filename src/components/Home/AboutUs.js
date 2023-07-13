import { Box, Flex, Image, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaTools, FaHandshake, FaStar } from 'react-icons/fa';
import React from 'react';
import { images } from '../../constant';

const AboutUs = () => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const array = [
    {
      id: 1,
      text: 'Morning',
      icon: images.knife,
    },
    {
      id: 2,
      text: 'Lunch',
      icon: images.knife,
    },
    {
      id: 3,
      text: 'Dinner',
      icon: images.knife,
    },
    {
      id: 4,
      text: 'Snack',
      icon: images.drink,
    },
  ];
  return (
    <Flex
      minH="26vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      px={isLargerThanMD ? '400' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThanMD ? 'row' : 'column'}
    >
      {array.map((arr) => (
        <>
          <Flex
            width={isLargerThanMD ? '20%' : 'full'}
            alignItems="center"
            flexDirection="column"
            textAlign="center"
            justify="center"
          >
            <Flex w="100px" position="absolute" justify="center" alignItems="center" flexDirection="column">
              <Image src={arr.icon} />
              <Text fontFamily="Inter" color="#fff" fontSize="20px" fontWeight="400">{arr.text}</Text>
            </Flex>
            <svg xmlns="http://www.w3.org/2000/svg" width="116" height="134" viewBox="0 0 116 134" fill="none">
              <path d="M0 33.5L58 0L116 33.5V100.5L58 134L0 100.5L0 33.5Z" fill="url(#paint0_linear_0_711)" />
              <defs>
                <linearGradient id="paint0_linear_0_711" x1="25.9565" y1="165.202" x2="147.019" y2="118.302" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFCC21" />
                  <stop offset="1" stop-color="#FF963C" />
                </linearGradient>
              </defs>
            </svg>
          </Flex>



          <Spacer />
        </>
      ))}
    </Flex>
  );
};

export default AboutUs;
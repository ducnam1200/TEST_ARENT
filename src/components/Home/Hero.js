import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Image,
  Img,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { COLORS, images } from '../../constant';
import ChartLine from './ChartLine';

const Hero = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThanLG ? '0' : '6'}
      justifyContent="space-between"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
    >
      <Box mr={isLargerThanLG ? '0' : '0'} w={isLargerThanLG ? '35%' : 'full'}>
        <Flex
          w='full'
          alignItems="center"
          justifyContent="center"
        >
          <Image src={images.img1} w="540px" h="316px" fill="linear-gradient(225deg, #FFCC21 0%, #FF963C 100%)"
            opacity="0.9987779855728149" />
          <CircularProgress value={75} size='181px' thickness='2px' position="absolute" color='#FC7400' trackColor="null">
            <CircularProgressLabel>
              <Flex w="full" justify="center" alignItems="center">
                <Text color="#fff" fontFamily="Inter" fontSize="18px" fontWeight="400" textShadow="#FC7400">
                  05/21
                </Text>
                <Text color="#fff" fontFamily="Inter" fontSize="25px" fontWeight="400" textShadow="#FC7400" mb="4px" ml="2px">
                  75%
                </Text>
              </Flex>
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>



      </Box>
      <Spacer />
      <Flex
        w={isLargerThanLG ? '65%' : 'full'}
        alignItems="center"
        justifyContent="center"
        bg={COLORS.bg_graph}
      >
        {/* <Img src={images.img1} alt="Chakra UI" w="540px" h="316px" /> */}
        <ChartLine />
      </Flex>
    </Flex>
  );
};

export default Hero;
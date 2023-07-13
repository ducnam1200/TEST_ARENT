import {
  Flex,
  Spacer,
  Text,
  Wrap,
  WrapItem,
  Avatar,
  Box,
  useMediaQuery,
  Grid,
  GridItem,
  Image,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { images } from '../../constant';

const Testimonials = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  const array = [
    {
      id: 1,
      text: '05.21.Morning',
      icon: images.img2,
    },
    {
      id: 2,
      text: '05.21.Lunch',
      icon: images.img3,
    },
    {
      id: 3,
      text: '05.21.Dinner',
      icon: images.img4,
    },
    {
      id: 4,
      text: '05.21.Snack',
      icon: images.img5,
    },
    {
      id: 5,
      text: '05.20.Morning',
      icon: images.img6,
    },
    {
      id: 6,
      text: '05.20.Lunch',
      icon: images.img7,
    },
    {
      id: 7,
      text: '05.20.Dinner',
      icon: images.img8,
    },
    {
      id: 8,
      text: '05.21.Snack',
      icon: images.img9,
    },
  ];

  return (
    <Flex maxWidth={isLargerThanLG ? '1400px' : 'full'}
      justifyContent="center"
      alignItems="center"
      mx="auto"
      flexDirection={'column'}
      gap="28px"
    >
      <Flex
        maxWidth={isLargerThanLG ? '1400px' : 'full'}
        justifyContent="center"
        alignItems="center"
        mx="auto"
        flexDirection={isLargerThanLG ? 'row' : 'column'}
      >
        <Grid templateColumns='repeat(4, 1fr)' gap={2}>
          {array.map((item) => (
            <Flex
              width={isLargerThanLG ? '234px' : 'full'}
              shadow="md"
              height="234px"
              flexDirection="column"
              justifyContent="end"
              bgImg={item.icon}
            >
              <Flex w="120px" h="32px" bg="#FFCC21" alignItems="center" justifyContent="center">
                <Text fontFamily="Inter" fontSize="15px" fontWeight="400" color="#fff" letterSpacing="0.15px">
                  {item.text}
                </Text>
              </Flex>

            </Flex>

          ))

          }
        </Grid>


      </Flex>
      <Button bg="linear-gradient(33deg, #FFCC21 0%, #FF963C 100%)" w="296px" h="56px">
        <Text fontFamily="ZenKakuGothicAntique" color="#fff" fontSize="18px" fontWeight="300">
          記録をもっと見る
        </Text>
      </Button>
    </Flex>
  );
};
export default Testimonials
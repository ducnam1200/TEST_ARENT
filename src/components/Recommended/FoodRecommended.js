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

const FoodRecommended = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  const array = [
    {
      id: 1,
      text: '2021.05.17',
      time: "23:25",
      icon: images.img2,
      description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: "#魚料理  #和食  #DHA"
    },
    {
      id: 2,
      text: '2021.05.17',
      time: "23:25",
      icon: images.img3,
      description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: "#魚料理  #和食  #DHA"
    },
    {
      id: 3,
      text: '2021.05.17',
      time: "23:25",
      icon: images.img4,
      description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: "#魚料理  #和食  #DHA"
    },
    {
      id: 4,
      text: '2021.05.17',
      time: "23:25",
      icon: images.img5,
      description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: "#魚料理  #和食  #DHA"
    },
    {
      id: 5,
      text: '2021.05.17',
      time: "23:25",
      icon: images.img6,
      description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: "#魚料理  #和食  #DHA"
    },
    {
      id: 6,
      text: '2021.05.17',
      time: "23:25",
      icon: images.img7,
      description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: "#魚料理  #和食  #DHA"
    },
    {
      id: 7,
      text: '2021.05.17',
      time: "23:25",
      icon: images.img8,
      description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: "#魚料理  #和食  #DHA"
    },
    {
      id: 8,
      text: '2021.05.17',
      time: "23:25",
      icon: images.img9,
      description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      hashtag: "#魚料理  #和食  #DHA"
    },
  ];

  return (
    <Flex w={'full'}
      justifyContent="center"
      alignItems="center"
      flexDirection={'column'}
      gap="28px"
    >
      <Flex
        w={'full'}
        justifyContent="center"
        alignItems="center"
        flexDirection={isLargerThanLG ? 'row' : 'column'}
      >
        <Grid templateColumns='repeat(4, 1fr)' gap={5}>
          {array.map((item) => (
            <Flex
              mb="18px"
              width={isLargerThanLG ? '234px' : 'full'}
              flexDirection="column"
              gap="7px">
              <Flex
                width={isLargerThanLG ? '234px' : 'full'}
                shadow="md"
                height="115px"
                flexDirection="column"
                justifyContent="end"
                bgImg={item.icon}

              >
                <Flex w="144px" h="24px" bg="#FFCC21" p="8px" alignItems="center" justifyContent="space-between">
                  <Text fontFamily="Inter" fontSize="15px" fontWeight="400" color="#fff" lineHeight="30px">
                    {item.text}
                  </Text>
                  <Text fontFamily="Inter" fontSize="15px" fontWeight="400" color="#fff"  lineHeight="30px">
                    {item.time}
                  </Text>
                </Flex>

              </Flex>

              <Text fontFamily="ZenKakuGothicAntique" color="#414141" fontSize="15px" fontWeight="300" lineHeight="22px" letterSpacing="0.075px">
                魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
              </Text>
              <Text fontFamily="ZenKakuGothicAntique" color="#FF963C" fontSize="12px" fontWeight="300" lineHeight="22px" letterSpacing="0.06px">
                #魚料理  #和食  #DHA
              </Text>
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
export default FoodRecommended
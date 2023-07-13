import { Flex, Text, Link, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const footer = [
    {
      id: 1,
      text: "会員登録"
    },
    {
      id: 2,
      text: "運営会社"
    },
    {
      id: 3,
      text: "利用規約"
    },
    {
      id: 4,
      text: "個人情報の取扱について"
    },
    {
      id: 5,
      text: "特定商取引法に基づく表記"
    },
    {
      id: 6,
      text: "お問い合わせ"
    },
  ]
  return (
    <Flex
      w="full"
      bg="#414141"
      mt="64px"
      minHeight="128px"
      flexDirection="column"
      justifyContent="center"
    >


      <Flex ml={isLargerThanMD ? "280px" : "160px" } flexDirection="row" gap="45px">
        {footer.map((item) => (
          <Text fontFamily="ZenKakuGothicAntique" color="#fff" fontSize="11px" fontWeight="300">{item.text}</Text>
        ))}
      </Flex>


    </Flex>
  );
};

export default Footer;
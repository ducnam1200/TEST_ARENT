import React, { useState } from 'react';
import {
  Text,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useMediaQuery,
  Image,
  Button,
  Link,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaAlignJustify } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import { COLORS, images } from '../constant';
import Dropdown from './dropdown';

const Nav = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  return (
    <Flex
      h="64px"
      alignItems="center"
      p="6"
      boxShadow={scroll ? 'base' : 'none'}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={COLORS.bg_nav}
      justify="center"
    >
      <Flex mr="307px">
        <Link href='/'>
          <Image src={images.logo} w="109px" h="40px" mt="16px" mb="8px" />
        </Link>
      </Flex>



      <Flex alignItems="center">
        {isLargerThanMD ? (
          <>
            <Link href='/record'>
              <Flex alignItems="center" w="160px" h="48px">
                <Image src={images.file} w="32px" h="32px" mr="8px" />
                <Text fontFamily="ZenKakuGothicAntique" color="#fff" fontSize="16px" fontWeight="300" lineHeight="23px">自分の記録</Text>
              </Flex>
            </Link>

            <Flex alignItems="center" w="160px" h="48px">
              <Image src={images.medal} w="32px" h="32px" mr="8px" />
              <Text fontFamily="ZenKakuGothicAntique" color="#fff" fontSize="16px" fontWeight="300" lineHeight="23px">チャレンジ</Text>
            </Flex>
            <Flex alignItems="center" w="160px" h="48px">
              <Image src={images.info} w="32px" h="32px" mr="8px" />
              <Text fontFamily="ZenKakuGothicAntique" color="#fff" fontSize="16px" fontWeight="300" lineHeight="23px">お知らせ</Text>
              <Flex position="absolute" w="16px" h="16px" bg="#EA6C00" borderRadius="100px" alignItems="center" justify="center" ml="22px" mt="-16px">
                  <Text color="#fff" fontSize="10px" fontFamily="Inter">1</Text>
              </Flex>
            </Flex>
            <Dropdown />
          </>) : (
          <Button ref={ref} onClick={onOpen}>
            <Image src={images.menu} w="32px" h="32px" />
          </Button>

        )}
      </Flex>
    </Flex>
  );
};

export default Nav;
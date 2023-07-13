import {
    Flex,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import Topic from './Topic';
import Exercise from './Exercise';
import Diary from './Diary';
import ChartLine from '../Home/ChartLine';
import { COLORS } from '../../constant';

const Record = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const arr = [
        {
            id: 1,
            title: "日",
            bg: "#fff"
        },
        {
            id: 2,
            title: "週",
            bg: "#fff"
        },
        {
            id: 3,
            title: "月",
            bg: "#fff"
        },
        {
            id: 1,
            title: "年",
            bg: "#FFCC21"
        },
    ]
    return (
        <Flex
            w="full"
            minHeight="90vh"
            py="16"
            px={isLargerThanLG ? '260' : '6'}
            alignItems="center"
            flexDirection="column"
            gap="56px"
        >
            <Topic />
            <Flex flexDirection="column" w="full" h="304px" bg={COLORS.bg_graph} pl="24px" pt="16px">
                <Flex w="full" h="36px" flexDirection="row">
                    <Text w="96px" fontFamily="Inter" color="#fff" fontSize="15px" fontWeight="400" lineHeight="18px">BODY{<br />}RECORD</Text>
                    <Text fontFamily="Inter" color="#fff" fontSize="22px" fontWeight="400" letterSpacing="0.11px" lineHeight="27px">2021.05.21</Text>
                </Flex>
                <Flex w="full" h="185px" pl="54px" pr="54px">
                    <ChartLine />
                </Flex>
                <Flex w="272px" flexDirection="row" h="64px" alignItems="center" justifyContent="space-between" ml="32px">
                    {arr.map(item =>
                        <Flex w="56px" h="24px" bg={item.bg} borderRadius="11px" alignItems="center" justifyContent="center">
                            <Text fontFamily="ZenKakuGothicAntique" fontSize="15px" lineHeight="22px" letterSpacing="0.075px" color={item.title === "年" ? "#fff" : "#FFCC21"}>
                                {item.title}
                            </Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <Exercise />
            <Diary />
        </Flex>
    );
};

export default Record;


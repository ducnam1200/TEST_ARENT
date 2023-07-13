import {
    Flex,
    Grid,
    GridItem,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import "./record.css"

const Exercise = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const arr = [
        {
            id: 1,
            title: "家事全般（立位・軽い）",
            time: "10 min",
            kcal: "26kcal"
        },
        {
            id: 2,
            title: "家事全般（立位・軽い）",
            time: "10 min",
            kcal: "26kcal"
        },
        {
            id: 3,
            title: "家事全般（立位・軽い）",
            time: "10 min",
            kcal: "26kcal"
        },
        {
            id: 4,
            title: "家事全般（立位・軽い）",
            time: "10 min",
            kcal: "26kcal"
        },
        {
            id: 5,
            title: "家事全般（立位・軽い）",
            time: "10 min",
            kcal: "26kcal"
        },
        {
            id: 6,
            title: "家事全般（立位・軽い）",
            time: "10 min",
            kcal: "26kcal"
        },
        {
            id: 7,
            title: "家事全般（立位・軽い）",
            time: "10 min",
            kcal: "26kcal"
        },
        {
            id: 8,
            title: "家事全般（立位・軽い）",
            time: "10 min",
            kcal: "26kcal"
        },
        {
            id: 9,
            title: "家事全般（立位・軽い）",
            time: "10 min",
            kcal: "26kcal"
        },
        {
            id: 10,
            title: "家事全般（立位・軽い）",
            time: "10 min",
            kcal: "26kcal"
        }
    ]
    return (
        <Flex
            w="full"
            minHeight="264px"
            pt="16px"
            pl="24px"
            flexDirection="column"
            bg="#414141"
            gap="4px"

        >
            <Flex w="full" h="36px" flexDirection="row">
                <Text w="96px" fontFamily="Inter" color="#fff" fontSize="15px" fontWeight="400" lineHeight="18px">MY{<br />}EXERCISE</Text>
                <Text fontFamily="Inter" color="#fff" fontSize="22px" fontWeight="400" letterSpacing="0.11px" lineHeight="27px">2021.05.21</Text>
            </Flex>
            <Grid templateColumns='repeat(2, 1fr)' w="98%" h="192px" gap="8px" overflow="scroll" className="scrollView">
                {
                    arr.map((item) => (
                        <Flex w="90%" flexDirection="row" justifyContent="space-between" h="40px" borderBottomColor="#777777" borderBottomWidth="1px">
                            <Flex flexDirection="row">
                                <Text lineHeight="24px" color="#fff" w="13px" fontFamily="ZenKakuGothicAntique" fontSize="5px" fontWeight="300" letterSpacing="0.015px">●</Text>
                                <Flex flexDirection="column">
                                    <Text fontFamily="ZenKakuGothicAntique" color="#fff" fontSize="15px" fontWeight="300" letterSpacing="0.015px">{item.title}</Text>
                                    <Text fontFamily="Inter" color="#FFCC21" fontSize="15px" fontWeight="400" lineHeight="18px" letterSpacing="0.09px">{item.kcal}</Text>
                                </Flex>
                            </Flex>

                            <Text fontFamily="Inter" color="#FFCC21" fontSize="18px" fontWeight="400" lineHeight="22px" letterSpacing="0.09px">{item.time}</Text>
                        </Flex>
                    ))
                }

            </Grid>

        </Flex>
    );
};

export default Exercise;


import {
    Flex,
    FormControl,
    Text,
    Input,
    Textarea,
    Button,
    useMediaQuery,
    useToast,
    Image,
    Box,
} from '@chakra-ui/react';
import React from 'react';
import { images } from '../../constant';

const TopicRecommend = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const arr = [
        {
            id: 1,
            title: "RECOMMENDED COLUMN",
            description: "オススメ"
        },
        {
            id: 2,
            title: "RECOMMENDED DIET",
            description: "ダイエット"
        },
        {
            id: 3,
            title: "RECOMMENDED BEAUTY",
            description: "美容"
        },
        {
            id: 4,
            title: "RECOMMENDED HEALTH",
            description: "健康"
        },
    ]
    return (

        <Flex w="full" justifyContent="space-between">
            {
                arr.map((item) => (
                <Flex flexDirection="column" w="216px" h="144px" bg="#2E2E2E" alignItems="center" justifyContent="center" gap="8px">
                    <Text w="200px" h="54px" textAlign="center" fontFamily="Inter" color="#FFCC21" fontSize="22px" fontWeight="400" lineHeight="27px" >{item.title}</Text>
                    <Flex bg="#fff" h="1px" w="56px" />
                    <Text w="200px" h="26px" textAlign="center" fontFamily="ZenKakuGothicAntique" color="#fff" fontSize="18px" fontWeight="400" lineHeight="26px" >{item.description}</Text>
                </Flex>
                ))
            }
        </Flex>
    );
};

export default TopicRecommend;


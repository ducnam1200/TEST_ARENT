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
} from '@chakra-ui/react';
import React from 'react';
import { images } from '../../constant';

const Topic = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const arr = [
        {
            id: 1,
            bg: images.img10,
            title: "BODY RECORD",
            description: "自分のカラダの記録"
        },
        {
            id: 2,
            bg: images.img11,
            title: "MY EXERCISE",
            description: "自分の運動の記録"
        },
        {
            id: 3,
            bg: images.img12,
            title: "MY DIARY",
            description: "自分の日記"
        },
    ]
    return (

        <Flex w="full" justifyContent="space-between">
            {
                arr.map((item) => (
                    <Flex w="288px" h="288px" bg="#FFCC21" alignItems="center" justifyContent="center">
                        <Flex w="240px" h="240px" bg="#000" >
                            <Image src={item.bg} w="240px" h="240px" />
                            <Flex position="absolute" gap="10px" w="240px" h="240px" flexDirection="column" alignItems="center" justifyContent="center">
                                <Text color="#FFCC21" fontSize="25px" fontFamily="Inter" fontWeight="400">{item.title}</Text>
                                <Flex w="160px" h="24px" bg="#FF963C" alignItems="center" justifyContent="center">
                                    <Text fontFamily="ZenKakuGothicAntique" color="#fff" fontSize="14px" fontWeight="300">{item.description}</Text>
                                </Flex>
                            </Flex>

                        </Flex>
                    </Flex>
                ))
            }
        </Flex>
    );
};

export default Topic;


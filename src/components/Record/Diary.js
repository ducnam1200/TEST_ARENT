import {
    Button,
    Flex,
    Grid,
    GridItem,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import "./record.css"

const Diary = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const arr = [
        {
            id: 1,
            time: `2021.05.21 ${<br />}23:25`,
            description: `私の日記の記録が一部表示されます。${<br />}
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
        },
        {
            id: 2,
            time: `2021.05.21 ${<br />}23:25`,
            description: `私の日記の記録が一部表示されます。${<br />}
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
        },
        {
            id: 3,
            time: `2021.05.21 ${<br />}23:25`,
            description: `私の日記の記録が一部表示されます。${<br />}
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
        },
        {
            id: 4,
            time: `2021.05.21 ${<br />}23:25`,
            description: `私の日記の記録が一部表示されます。${<br />}
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
        },
        {
            id: 5,
            time: `2021.05.21 ${<br />}23:25`,
            description: `私の日記の記録が一部表示されます。${<br />}
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
        },
        {
            id: 6,
            time: `2021.05.21 ${<br />}23:25`,
            description: `私の日記の記録が一部表示されます。${<br />}
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
        },
        {
            id: 7,
            time: `2021.05.21 ${<br />}23:25`,
            description: `私の日記の記録が一部表示されます。${<br />}
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
        },
        {
            id: 8,
            time: `2021.05.21 ${<br />}23:25`,
            description: `私の日記の記録が一部表示されます。${<br />}
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
        },
    ]
    return (
        <Flex
            w="full"
            minHeight="264px"
            flexDirection="column"

        >
            <Flex w="full" h="32px">
                <Text fontFamily="Inter" color="#414141" fontSize="22px" fontWeight="400" lineHeight="27px">MY DIARY</Text>
            </Flex>

            <Flex
                w="full"

                justifyContent="center"
                alignItems="center"
                flexDirection={'column'}
                gap="28px"
            >
                <Flex
                    w="full"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection={isLargerThanLG ? 'row' : 'column'}
                >
                    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                        {arr.map((item) => (
                            <Flex
                                w={isLargerThanLG ? '231px' : 'full'}
                                h="231px"
                                borderWidth="2px"
                                borderColor="#707070"
                                p="16px"
                                gap="8px"
                                flexDirection="column"
                            >
                                <Text fontFamily="Inter" color="#414141" fontSize="18px" fontWeight="400" lineHeight="22px" letterSpacing="0.09px">
                                    2021.05.21{<br />}23:25
                                </Text>
                                <Text fontFamily="ZenKakuGothicAntique" color="#414141" fontSize="12px" fontWeight="300" lineHeight="17px" letterSpacing="0.06px">
                                    私の日記の記録が一部表示されます。{<br />}
                                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
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

        </Flex>


    );
};

export default Diary;


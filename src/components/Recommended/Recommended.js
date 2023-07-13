import {
    Flex,
    useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import TopicRecommend from './TopicRecommend';
import FoodRecommended from './FoodRecommended';

const Recommended = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
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
            <TopicRecommend />
            <FoodRecommended/>
        </Flex>
    );
};

export default Recommended;


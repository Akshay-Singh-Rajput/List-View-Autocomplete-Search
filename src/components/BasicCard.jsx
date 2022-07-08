import React, { useState } from 'react';
import { DisplayModal } from './Modal';
import { Avatar, Box, Flex, SkeletonCircle, Text } from '@chakra-ui/react';

export const BasicCard = ({ currentPosts }) => {

    const [ modalState, setModalState ] = useState(false);
    const [ person, setPerson ] = useState();


    //* Open Modal
    const openModal = (user) => {
        setPerson(user);
        setModalState(!modalState);

    };
    return (
        <>
            <Box w="40%" m="auto">
                { currentPosts && currentPosts.map((user) => (
                    <Flex m="2" bg='white' justify="space-between" align="center" p='3' onClick={ () => openModal(user) } key={ user.id }>

                        <Flex align="center" gap='4'>
                            <Avatar name={ user.name } src={ user.image } />
                            <Text>{ user.name }</Text>
                        </Flex>

                        <Flex gap='1' align='center'>
                            <SkeletonCircle colorScheme="green" size={ 3 } startColor='green' />
                            <Text>{ user.status }</Text>
                            <Text> - { user.species }</Text>
                        </Flex>

                    </Flex>
                )) }
            </Box>
            { modalState && <DisplayModal open={ modalState } close={ setModalState } person={ person } /> }
        </>
    );
};

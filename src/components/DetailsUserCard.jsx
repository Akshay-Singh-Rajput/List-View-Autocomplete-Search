import React from 'react';
import { Avatar, Box, Divider, Flex, SkeletonCircle, Text } from "@chakra-ui/react";
export const DetailsUserCard = ({ person }) => {
    // console.log({person})
    const { image, name, status, species, gender, location, origin } = person;
    return (
        <Box >
            <Flex align='center'>
                <Avatar name={ name } src={ image } w="25%" h="25%" mr="20px" />
                <Box>
                    <Text fontSize='2xl' as='abbr' >{ name }</Text>
                    <Flex align='center' gap='1'>
                        { status == "unknown" ? <SkeletonCircle size='3' /> : <SkeletonCircle size='3' color={ "red.900" } /> }
                        <Text>{ status }</Text>
                        { '-' }
                        <Text>{ species }</Text>
                    </Flex>
                </Box>
            </Flex>

            <Divider m="10px 0" borderColor="silver" />

            <Flex justify={ 'space-between' }>

                <Box >
                    <Box mt='4'>
                        <Text fontSize='sm' color='gray'>Gender</Text>
                        <Text >{ gender }</Text>
                    </Box>
                    <Box mt='4'>
                        <Text fontSize='sm' color='gray'>{ "Species" }</Text>
                        <Text>{ species }</Text>
                    </Box>
                </Box>

                <Box>
                    <Box mt='4'>
                        <Text fontSize='sm' color='gray'>{ "Location" }</Text>
                        <Text >{ location.name }</Text>
                    </Box>
                    <Box mt='4'>
                        <Text fontSize='sm' color='gray'>{ "Origin" }</Text>
                        <Text>{ origin.name }</Text>
                    </Box>
                </Box>

            </Flex>
        </Box>
    );
};

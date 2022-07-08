import React from 'react';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const SearchInput = ({ setSearchName }) => {
    return (
        <>
        <Box w="40%" m="auto" bg='whiteAlpha.900'>
            <InputGroup >
                <InputLeftElement
                    pointerEvents='none'
                    children={ <SearchIcon color='gray.300' /> }
                />
                <Input type='tel' placeholder='Search for a contact' onKeyUp={ (e) => console.log(e.key) } onChange={ (e) => setSearchName(e.target.value) }  />

            </InputGroup>
        </Box>
        </>
    );
};


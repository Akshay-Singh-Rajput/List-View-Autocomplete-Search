import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BasicCard } from './BasicCard';
import { DebounceSearch } from './DebounceSearch';
import { SearchInput } from './SearchInput';

export const BasicUserCards = () => {
    const [ contactList, setContactList ] = useState([]);
    const [ searchName, setSearchName ] = useState('rick');


    
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerpage, setPostsPerPgae ] = useState(4);
    
    const indexOfLastPost = currentPage * postsPerpage;
    const indexOfFirstPost = indexOfLastPost - postsPerpage;
    
    
    //* Infinite scroll
    var scrollableElement = document.body;
    scrollableElement.addEventListener('wheel', checkScrollDirection);

    function checkScrollDirection(event) {
        if (checkScrollDirectionIsUp(event)) {
            console.log('UP');
            if (currentPage === 1)

                return;
            setCurrentPage(currentPage - 1);
        } else {
            let size = contactList.length / postsPerpage;
            console.log('Down');
            if (currentPage === size) return;
            setCurrentPage(currentPage + 1);
        }

    };
//* checkScrollDirectionIsUp 
    function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    }


    //* Limit of data per page
    const currentPosts = contactList.slice(indexOfFirstPost, indexOfLastPost);


    //* Debouncing
    const nameToRequest = DebounceSearch(searchName, 1000);



    //* Api call for data
    const getApiCallContactList = async () => {
        await axios(`https://rickandmortyapi.com/api/character/?name=${searchName}&page=1&limit=1`)
            .then(data => (
                setContactList(data.data.results)),
            )
            .then(err => console.log(err));


    };
    
  


//*UseEffect
    useEffect(() => {
        getApiCallContactList();
    }, [ nameToRequest ]);


    return (
        <>
            <SearchInput setSearchName={ setSearchName } />
            <BasicCard currentPosts={ currentPosts } />
        </>
    );
};

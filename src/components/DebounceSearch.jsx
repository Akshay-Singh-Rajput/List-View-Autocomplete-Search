import React, { useEffect, useState } from 'react'

export const DebounceSearch = (inputValue, delay = 0) => {
    const [ value, setValue ] = useState(inputValue);
    useEffect(() => {
        const timer = setTimeout(
            () => setValue(inputValue),
            delay
        );
        return () => clearTimeout(timer);
    }, [ inputValue, delay ]);

    return value;
  
}
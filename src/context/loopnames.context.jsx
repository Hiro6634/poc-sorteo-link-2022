import { labeledStatement } from '@babel/types';
import { createContext, useState } from 'react';

export const LoopNamesContext  = createContext();

export const LoopNamesProvider = ({children}) => {
    const [loopNames, setLoopNames] = useState();

    const value = {
        loopNames,
        setLoopNames
    };

    return(
        <LoopNamesContext.Provider value={value}>{children}</LoopNamesContext.Provider>
    )
}
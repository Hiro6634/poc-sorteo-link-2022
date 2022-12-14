import { labeledStatement } from '@babel/types';
import { createContext, useState } from 'react';

export const LoopNamesContext  = createContext();

export const LoopNamesProvider = ({children}) => {
    const [loopNames, setLoopNames] = useState();

    const loadNewNames = (newNames) => {
        setLoopNames(newNames.slice());
    }

    const findNameById = (id) =>{
        return loopNames.find(element=>element.id===id);
    }

    const removeNameByIndex = (index) => {
        if( index > 0 && index < loopNames.length){
            loopNames.splice(index,1);
            setLoopNames(loopNames);
        }
    }
    const rotateNames = (n) => {
        for(let x=0; x<n; x++){
            loopNames.push(loopNames.shift());
        }
    }

    const value = {
        loopNames,
        setLoopNames,
        loadNewNames,
        rotateNames,
        findNameById,
        removeNameByIndex
    };

    return(
        <LoopNamesContext.Provider value={value}>{children}</LoopNamesContext.Provider>
    )
}
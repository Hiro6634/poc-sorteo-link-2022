import { createContext, useState } from 'react';

import SORTEOS from './sorteos.json';

export const SorteoContext = createContext({

});

export const SorteosProvider = ({children}) => {
    const [sorteos, setSorteos] = useState(SORTEOS);
    const value = { sorteos };
    return(
        <SorteoContext.Provider value={value}>{children}</SorteoContext.Provider>
    )
}
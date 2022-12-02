import { createContext, useState } from 'react';

import EMPLOYEES from './employees.json';

export const EmployeeContext = createContext({});

export const EmployeesProvider = ({children}) =>  {
    const [employees, setEmployees] = useState(EMPLOYEES);
    const value = { employees };
    return(
        <EmployeeContext.Provider value={value}> {children} </EmployeeContext.Provider>
    )
}  


import { createContext, useState } from 'react';

// import EMPLOYEES from './employees.json';    


export const EmployeeContext = createContext({
    employees: [{}],
    addEmployee: ()=>{}
});

export const EmployeesProvider = ({children}) =>  {
    const [employees, setEmployees] = useState([]);
    
    const loadEmployees = (newEmployee) => {
        setEmployees(newEmployee);
    }

    const getEmployeeByIndex = (index) => {
        return employees[index];
    }

    const removeEmployeeByIndex = (index) => {
        if( index >= 0 && index < employees.length){
            employees.splice(index,1);
            setEmployees(employees);
        }
    }


    const value = { 
        employees,
        loadEmployees,
        getEmployeeByIndex,
        removeEmployeeByIndex
    };
    return(
        <EmployeeContext.Provider value={value}> {children} </EmployeeContext.Provider>
    )
}  


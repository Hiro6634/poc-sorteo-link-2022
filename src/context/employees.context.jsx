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

    const selectPreviousEmployeesbyIndex = (index, n) => {
        const employeesLen = employees.length;
        const maxIdx = employeesLen - 1;
        const preWinners = [];
        let startIx = index - n - 1;
        let range = n;
        console.log("MAXIDX:" + maxIdx);
        
        if((index - 1) < n){
            startIx = index + 1
        }
        for( let ix = startIx; ix < index -1; ix++){
            console.log("IX="+ix);
        }         

        return {
            index: index,
            n:  n
        };
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
        removeEmployeeByIndex,
        selectPreviousEmployeesbyIndex
    };
    return(
        <EmployeeContext.Provider value={value}> {children} </EmployeeContext.Provider>
    )
}  


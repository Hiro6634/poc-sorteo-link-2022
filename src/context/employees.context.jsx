import { createContext, useState } from 'react';

// import EMPLOYEES from './employees.json';


export const EmployeeContext = createContext({
    employees: [{}],
    addEmployee: ()=>{}
});

export const EmployeesProvider = ({children}) =>  {
    const [employees, setEmployees] = useState([]);
    
    const loadEmployees = (newEmployee) => {
        console.log("PRE");
        console.log("Employees", employees);
        console.log("EmployeeToAdd", newEmployee);
        setEmployees(newEmployee);
        console.log("POS");
        console.log("Employees", employees);
    }

    const value = { 
        employees,
        loadEmployees
    };
    return(
        <EmployeeContext.Provider value={value}> {children} </EmployeeContext.Provider>
    )
}  


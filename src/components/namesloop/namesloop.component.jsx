import { useContext } from 'react';

import TextLoop from 'react-text-loop';

import { EmployeeContext } from '../../context/employees.context';

import { 
    NameLoopContainer 
} from './namesloop.style';

const NamesLoop = () => {
    const {employees} = useContext(EmployeeContext);

    console.log("Employees:", employees);
    console.log("Employees:", employees.length);
    return(
        <NameLoopContainer>
            <TextLoop interval={200}>
                {
                    employees.length ? (employees.map((employee)=>(
                    <span id={employee.id}>{employee.lastName}, {employee.firstName}</span>
    ))): (null)}
            </TextLoop>
        </NameLoopContainer>
    );
}

export default NamesLoop;
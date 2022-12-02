import { useContext } from 'react';

import TextLoop from 'react-text-loop';

import { EmployeeContext } from '../../context/employees.context';

import { 
    NameLoopContainer 
} from './namesloop.style';

const NamesLoop = () => {
    const {employees} = useContext(EmployeeContext);

    return(
        <NameLoopContainer>
            <TextLoop interval={200}>
                {employees.map((employee)=>(
                    <sapn id={employee.id}>{employee.lastName}, {employee.firstName}</sapn>
    ))}
            </TextLoop>
        </NameLoopContainer>
    );
}

export default NamesLoop;
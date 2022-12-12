import { useContext } from 'react';

import TextLoop from 'react-text-loop';

import { EmployeeContext } from '../../context/employees.context';

import { 
    NameLoopContainer 
} from './namesloop.style';

const NamesLoop = ({interval=200}) => {
    const {employees} = useContext(EmployeeContext);

    return(
        <NameLoopContainer>
            <TextLoop interval={interval}>
                {
                    employees.length ? (employees.map((employee)=>(
                    <span key={employee.id}>{employee.Apellido}, {employee.Nombre}</span>
    ))): (null)}
            </TextLoop>
        </NameLoopContainer>
    );
}

export default NamesLoop;
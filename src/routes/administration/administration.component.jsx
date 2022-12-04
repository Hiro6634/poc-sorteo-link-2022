import Raffles from '../../components/raffles/raffles.component';

import { useContext } from 'react';
import { EmployeeContext } from '../../context/employees.context';
import Button from '../../components/button/button.component';

import EMPLOYEES from '../../context/employees.json';

import { 
    AdministratorContainer, 
    LoadingButtonContainer
} from './administration.styles';

const Administration = () => {
    const {loadEmployees, employees} = useContext(EmployeeContext);
    
    const handleButton = () => {
        console.log(employees);
        loadEmployees(EMPLOYEES);
        console.log(employees);
    }

    return(
        <AdministratorContainer>
            <LoadingButtonContainer>
                <Button>CARGAR PARTICIPANTES</Button>            
            </LoadingButtonContainer>
            <div>
                <Raffles/>
            </div>
        </AdministratorContainer>
    );


}


export default Administration;
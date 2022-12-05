import Raffles from '../../components/raffles/raffles.component';

import { useContext } from 'react';
import { EmployeeContext } from '../../context/employees.context';
import Button from '../../components/button/button.component';

import EMPLOYEES from '../../context/employees.json';

import { 
    AdministratorContainer, 
    LoadingButtonContainer
} from './administration.styles';

import { SaveWinners } from '../../utils/save-winners';
import { WinnerContext } from '../../context/winners.context';

const Administration = () => {
    const {loadEmployees, employees} = useContext(EmployeeContext);
    const {winners} = useContext(WinnerContext);
    const handleButton = () => {
        loadEmployees(EMPLOYEES);
    }

    const handleWinners = () => {
        SaveWinners(winners);
    }

    return(
        <AdministratorContainer>
            <LoadingButtonContainer>
                <Button onClick={handleButton}>CARGAR PARTICIPANTES</Button> 
           
            </LoadingButtonContainer>
            <LoadingButtonContainer>
                <Button onClick={handleWinners}>DESCARGAR GANADORES</Button>            
           
            </LoadingButtonContainer>
            <div>
                <Raffles/>
            </div>
        </AdministratorContainer>
    );


}


export default Administration;

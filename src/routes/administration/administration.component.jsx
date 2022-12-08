import { useContext, useRef } from 'react';
import { RaffleContext } from '../../context/raffles.context'; 
import { EmployeeContext } from '../../context/employees.context';
import Raffles from '../../components/raffles/raffles.component';
import Button from '../../components/button/button.component';

import { RaffleProcess, RunRaffleProcess } from '../../business/raffle-process';

import { 
    AdministratorContainer, 
    LoadingButtonContainer
} from './administration.styles';

import { SaveWinners, excelAjson } from '../../utils/filesutils';
import { WinnerContext } from '../../context/winners.context';

const Administration = () => {
    const {
        employees,
        loadEmployees, 
    } = useContext(EmployeeContext);

    const {winners} = useContext(WinnerContext);

    // const apiRaffleContext = useContext(RaffleContext);
    // const apiWinnerContext = useContext(WinnerContext);
    // const apiEmployeeContext = useContext(EmployeeContext);

    const inputRef = useRef(null);

    const handleWinners = () => {
        SaveWinners(winners);
    }

    const handleLoadEmployees = () => {
        inputRef.current.click();
    }

    const handleFileChange = async event => {
        const fileObj = event.target.files && event.target.files[0];
        if(!fileObj){
            return;
        }
        // reset file input
        event.target.value = null;

        loadEmployees(await excelAjson(fileObj));
    }


    const handleTest =  () => {
        RaffleProcess()
    }   

    return(
        <AdministratorContainer>
            <LoadingButtonContainer>
                <input
                    style={{display:'none'}}
                    ref={inputRef}
                    type='file'
                    onChange={handleFileChange}
                    accept=".xls, .xlsx"
                />
                <Button  onClick={handleLoadEmployees}>CARGAR EMPLEADOS</Button>
            </LoadingButtonContainer>
            <LoadingButtonContainer>
                <Button onClick={handleWinners}>DESCARGAR GANADORES</Button>            
           
            </LoadingButtonContainer>
            <div>
                <Raffles/>
            </div>
            <div>
            <Button  onClick={()=>console.log("EMPLOYEES:", employees)}>Employees</Button>
            <Button  onClick={handleTest}>SORTEO</Button>
            </div>
        </AdministratorContainer>
    );


}


export default Administration;

import Raffles from '../../components/raffles/raffles.component';
import { useContext, useEffect, useState } from 'react';
import { RaffleContext } from '../../context/raffles.context'; 
import { EmployeeContext } from '../../context/employees.context';
import Button from '../../components/button/button.component';
import { RaffleStates } from '../../context/raffles.context';
import { Sleep } from '../../utils/utils';
import { RunRaffleProcess } from '../../business/raffle-process';

import EMPLOYEES from '../../context/employees.json';

import { 
    AdministratorContainer, 
    LoadingButtonContainer
} from './administration.styles';

import { SaveWinners, excelAjson } from '../../utils/filesutils';
import { WinnerContext } from '../../context/winners.context';
import { GetWinner } from '../../business/raffle-process';

const Administration = () => {
    const [myArray, setMyArray] = useState([]);
    const {
        loadEmployees, 
        employees, 
        getEmployeeByIndex,
        removeEmployeeByIndex,
        selectPreviousEmployeesbyIndex
    } = useContext(EmployeeContext);

    const {winners, addWinner} = useContext(WinnerContext);
    const { 
        running, 
        setRunning,
        raffles,
        getNextRaffle,
        setRaffleState
    } = useContext( RaffleContext);

    const apiRaffleContext = useContext(RaffleContext);
    const apiWinnerContext = useContext(WinnerContext);
    const apiEmployeeContext = useContext(EmployeeContext);

    useEffect(()=>{
    });


    const handleEmployees = () => {
        const tmpEmployees = excelAjson();
        //TODO: Aca cargamos los datos de EXCELL y el json obtenido lo pasamos al loadEmployees
        loadEmployees(tmpEmployees);
    }

    const handleWinners = () => {
        SaveWinners(winners);
    }

    const handleWinner = () => {
        // GetWinner(employees,removeEmployeeByIndex,getEmployeeByIndex);
        console.log("WINNERS:", winners);
        console.log("EMPLOYEES:", employees);
    }

    const handleTest =  () => {
        RunRaffleProcess(apiRaffleContext, apiWinnerContext, apiEmployeeContext);

        // let winner = GetWinner(apiEmployeeContext);
        // console.log("THE WINNER IS:", winner);

        // addWinner(winner);
        // console.log("WINNERS:", winners);

        // winner = GetWinner(apiEmployeeContext);
        // addWinner(winner);
        // console.log("WINNERS:", winners);
    }   

    return(
        <AdministratorContainer>
            <LoadingButtonContainer>
                <input

                id="exportButton"

                color="primary"

                type="file"

                accept=".xls, .xlsx"

                onClick={excelAjson}

              />
            </LoadingButtonContainer>
            <LoadingButtonContainer>
                <Button onClick={handleWinners}>DESCARGAR GANADORES</Button>            
           
            </LoadingButtonContainer>
            <LoadingButtonContainer>
                <Button onClick={handleWinner}>TEST GANADOR</Button>            
           
            </LoadingButtonContainer>
            <div>
                <Raffles/>
            </div>

            <Button onClick={handleTest}>TEST</Button>
        </AdministratorContainer>
    );


}


export default Administration;

import Raffles from '../../components/raffles/raffles.component';
import { useContext, useEffect } from 'react';
import { RaffleContext } from '../../context/raffles.context'; 
import { EmployeeContext } from '../../context/employees.context';
import Button from '../../components/button/button.component';
import { RaffleStates } from '../../context/raffles.context';
import { Sleep } from '../../utils/utils';

import EMPLOYEES from '../../context/employees.json';

import { 
    AdministratorContainer, 
    LoadingButtonContainer
} from './administration.styles';

import { SaveWinners } from '../../utils/save-winners';
import { WinnerContext } from '../../context/winners.context';

const Administration = () => {
    const {
        loadEmployees, 
        employees, 
        getEmployeeByIndex,
        removeEmployeeByIndex,
        selectPreviousEmployeesbyIndex
    } = useContext(EmployeeContext);
    const {winners} = useContext(WinnerContext);
    const { 
        running, 
        setRunning,
        raffles,
        getNextRaffle,
        setRaffleState
    } = useContext( RaffleContext);

    useEffect(()=>{
        console.log("ADMIN PAGE RUNNING:" + running.running);
        if(running.running){ 
            setRunning({running: false}); 
        }
        // setRunning({running: false});
        console.log("ADMIN PAGE RUNNING:" + running.running);
    });


    const handleEmployees = () => {
        //TODO: Aca cargamos los datos de EXCELL y el json obtenido lo pasamos al loadEmployees
        loadEmployees(EMPLOYEES);
    }

    const handleWinners = () => {
        SaveWinners(winners);
    }

    const handleTest = async () => {
        // const employee = getEmployeeByIndex(2);
        // console.log("EMPLOYEE[2]", employee);


        // console.log("EMPLOYEES:", employees);
        // removeEmployeeByIndex(3);
        // console.log("EMPLOYEES:", employees);

        // const preWinners = selectPreviousEmployeesbyIndex(5,3);
        // console.log("PRE WINNERS:", preWinners);
        let raffle = getNextRaffle();
        console.log("RAFFLE:", raffle);

        while( raffle !== undefined ){
            setRaffleState(raffle, RaffleStates.ENPROGRESO);
            console.log("PRE");
            await Sleep(raffle.tiempos.pre*1000)
            console.log("SORTEO");
            await Sleep(raffle.tiempos.duracion*1000);
            console.log("FIN DEL SORTEO");
            setRaffleState(raffle, RaffleStates.SORTEADO);
            
            raffle = getNextRaffle();
            console.log("RAFFLE:", raffle);
        }

        console.log("BYE:", raffles);
    }   

    return(
        <AdministratorContainer>
            <LoadingButtonContainer>
                <Button onClick={handleEmployees}>CARGAR PARTICIPANTES</Button> 
           
            </LoadingButtonContainer>
            <LoadingButtonContainer>
                <Button onClick={handleWinners}>DESCARGAR GANADORES</Button>            
           
            </LoadingButtonContainer>
            <div>
                <Raffles/>
            </div>

            <Button onClick={handleTest}>TEST</Button>
        </AdministratorContainer>
    );


}


export default Administration;

import { useContext, useEffect, useRef, useState } from 'react';
import { RaffleContext } from '../../context/raffles.context'; 
import { EmployeeContext } from '../../context/employees.context';
import Raffles from '../../components/raffles/raffles.component';
import Button from '../../components/button/button.component';

import { RaffleProcess, RunRaffleProcess, getWinners } from '../../business/raffle-process';

import { 
    AdministratorContainer, 
    LoadingButtonContainer
} from './administration.styles';

import { SaveWinners, excelAjson } from '../../utils/filesutils';
import { WinnerContext } from '../../context/winners.context';
import WinnersView from '../../components/winners-view/winners-view.component';
import { Sleep } from '../../utils/utils';

const Administration = () => {
    const [showWinner, setShowWinner] = useState({
        timer: 0,
        winners: []
    }); 
    const {
        employees,
        loadEmployees, 
    } = useContext(EmployeeContext);

    const {
        getWinnersToSave, 
        setWinners, 
        winners
    } = useContext(WinnerContext);

    const { 
        raffles, 
        addRaffleWinner,
        setRafflePaused,
        getNextRaffle
    } = useContext(RaffleContext);

    const { getWinnerByRaffleId }  = useContext(WinnerContext);
    const apiEmployeeContext = useContext(EmployeeContext);
    const apiRaffleContext = useContext(RaffleContext);
    
    const inputRef = useRef(null);

    const handleWinners = () => {
        SaveWinners(getWinnersToSave());
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

    const RaffleProcess = async (raffleTime)=> {
        const awaitTime = raffleTime * 1000;
        console.log("AWAIT TIME:", awaitTime);
        Sleep(awaitTime);
        console.log("Start Raffle");
    }

    const Process = async () => {
        console.log("START");
        // await Sleep(raffles[0].tiempos.pre * 1000);
        // console.log("Raffle ID:", raffles[0].id);
        setShowWinner({
            timer:2, 
            winners: raffles[0].winners
        });
        // await Sleep(raffles[1].tiempos.pre * 1000);
        // console.log("Raffle ID:", raffles[1].id);


        // await Sleep(raffles[2].tiempos.pre * 1000);
        // console.log("Raffle ID:", raffles[2].id);

        // raffles.map(async (raffle)=>{
        //     // RaffleProcess(2);
        //     delayedGreating();


        // //         console.log("Start Lottery");
        // //     });
        // //     // Sleep(raffle.tiempos.pre * 1000);
        // // //     console.log("Start Lottery");
        // // //     const winList = raffle.winners;
        // // //     const playTime = raffle.tiempos.duracion / raffle.ganadores;
        // // //     winList.map(async(winner)=>{
        // // //         await Sleep(playTime);
        // // //         console.log("Update Winner")
        // // //         setShowWinner(prevState => [...prevState, winner]);
        // // //     })
        // // //     console.log("Reset List");
        // // //     setShowWinner([]);
        //  });           
        console.log("BYE") ;
    }

    const delayedGreating = async () => {
        console.log("HELLO ");
        await Sleep(2000);
        console.log("World!");
        await Sleep(2000);
        console.log("Goodbye!");
    }

    const handleTest =  async () => {
        setWinners(getWinners( raffles, addRaffleWinner, apiEmployeeContext ))
        console.log("RAFFLES:", raffles);
        setRafflePaused(true);
        Process();
        // setShowWinner(["UNO","DOS"]);
        // RunRaffleProcess( apiRaffleContext);
        // RunRaffleProcess(apiRaffleContext, apiWinnerContext, apiEmployeeContext);
        // const columns = getWinnersColumns();
        // console.log("COLUMNS:" + columns);
        // setWinnersColumns(columns + 1);
        // text = getWinnersColumns();
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
            <WinnersView winnersList={showWinner}/>
            </div>
        </AdministratorContainer>
    );
}


export default Administration;

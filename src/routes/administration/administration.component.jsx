import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RaffleContext } from '../../context/raffles.context'; 
import { EmployeeContext } from '../../context/employees.context';
import Raffles from '../../components/raffles/raffles.component';
import Button from '../../components/button/button.component';

import { getWinners } from '../../business/raffle-process';

import { 
    AdministratorContainer, 
    LoadingButtonContainer
} from './administration.styles';

import { SaveWinners, excelAjson } from '../../utils/filesutils';
import { WinnerContext } from '../../context/winners.context';
import { Sleep } from '../../utils/utils';

const Administration = () => {
    const [loadButtonText, setLoadButtonText] = useState('CARGAR EMPLEADOS ');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { employees, loadEmployees } = useContext(EmployeeContext);

    const {
        getWinnersToSave, 
        setWinners 
    } = useContext(WinnerContext);

    const { 
        raffles, 
        addRaffleWinner,
        setIsRunning,
    } = useContext(RaffleContext);

    const apiEmployeeContext = useContext(EmployeeContext);
    const inputRef = useRef(null);

    const handleWinners = () => {
        SaveWinners(getWinnersToSave());
    }

    const handleLoadEmployees = () => {
        setIsLoading(true);
        inputRef.current.click();
    }

    const handleFileChange = async event => {
        const fileObj = event.target.files && event.target.files[0];
        if(!fileObj){
            return;
        }
        // reset file input
        event.target.value = null;
        console.log("LoadEmployees:", fileObj);
        loadEmployees(await excelAjson(fileObj));
        await Sleep(2000);
        console.log("EMPLOYEES", employees);
        setIsLoading(false);
        setLoadButtonText("CARGAR EMPLEADOS *")
    }

    const handleStartLottery =  async () => {
        console.log("EMPLOYEES", employees);
        console.log("getWinners");
        setWinners(getWinners( raffles, addRaffleWinner, apiEmployeeContext ))
        console.log("RAFFLES:", raffles);
        setIsRunning(true);
        navigate('/lottery');
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
                <Button  onClick={handleLoadEmployees} isLoading={isLoading}>
                    {loadButtonText}
                </Button>
            </LoadingButtonContainer>
            <LoadingButtonContainer>
                <Button onClick={handleWinners}>DESCARGAR GANADORES</Button>            
            </LoadingButtonContainer>
            <div>
                <Raffles/>
            </div>
            <div style={{display: "flex"}}>
            <Button  onClick={handleStartLottery}>INICIAR SORTEO</Button>
            <Button  onClick={()=>{console.log("RAFFLES:",raffles)}}>TEST</Button>
            </div>
        </AdministratorContainer>
    );
}


export default Administration;

import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RaffleContext, RaffleStates } from '../../context/raffles.context'; 
import Raffles from '../../components/raffles/raffles.component';
import Button from '../../components/button/button.component';
import DownloadIcon from '../../assets/download-icon-png-4388.png'
import { SaveWinners, excelAjson, GetUrlConfig } from '../../utils/filesutils';
import { getWinners } from '../../business/raffle-process';

import { 
    AdministratorContainer, 
    LoadingButtonContainer,
    BottomButtonContainer,
    IconButton
} from './administration.styles';

import { WinnerContext } from '../../context/winners.context';
import { EmployeeContext } from '../../context/employees.context';
import { LoopNamesContext } from '../../context/loopnames.context';

const Administration = () => {
    const [loadButtonText, setLoadButtonText] = useState('CARGAR EMPLEADOS ');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { employees, loadEmployees } = useContext(EmployeeContext);
    const { loopNames, loadNewNames } = useContext(LoopNamesContext);

    const {
        getWinnersToSave, 
        setWinners,
        winners
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
            setIsLoading(false);
            return;
        }
        // reset file input
        event.target.value = null;
        loadEmployees(await excelAjson(fileObj));
        setIsLoading(false);
        setLoadButtonText("CARGAR EMPLEADOS *")
    }

    const handleStartLottery =  async () => {
        loadNewNames(employees);
        setWinners(getWinners( raffles, addRaffleWinner, apiEmployeeContext ))
        console.log("RAFFLES:", raffles);
        setIsRunning(true);
        navigate('/lottery');
    }   

    var hrefData = GetUrlConfig(raffles);
    useEffect(()=>{
        console.log("CFG:", raffles);
        hrefData = GetUrlConfig(raffles);
    },[raffles]);
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
            <BottomButtonContainer>
                <Button  onClick={handleStartLottery}>INICIAR SORTEO</Button>
                <a href={hrefData} download='config.json'><IconButton src={DownloadIcon} alt="downoload"/></a>
            </BottomButtonContainer>
        </AdministratorContainer>
    );
}


export default Administration;

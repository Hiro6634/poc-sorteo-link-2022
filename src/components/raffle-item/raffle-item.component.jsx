import { useContext, useEffect, useState } from 'react';
import { RaffleContext } from '../../context/raffles.context';
import { fmtMSS } from '../../utils/utils';
import editIcon from '../../assets/edit-icon-png-3602.png';
import saveIcon from '../../assets/save-icon-5404.png';

import { 
    RaffleItemContainer,
    RaffleViewContainer,
    RaffleEditContainer,
    IdContainer,
    RewardContainer,
    WinnersContainer,StatusContainer,
    TimerContainer,
    IconEditContainer,
    TimerInputContainer,
    WinnersInputContainer,
    StatusInputContainer
} from './raffle-item.styles';

const RaffleItem = ({raffle}) => {
    const {
        setRaffleTimers, 
        setRaffleWinners,
        setRaffleState,
        raffles,
        rafflesTime,
        setRafflestime
    } = useContext(RaffleContext);
    const { id, premio, ganadores, estado, tiempos } = raffle;
    const [isEditable, setIsEditable] = useState(false);
    const [totalTime, setTotaltime] = useState(fmtMSS(tiempos.placa+tiempos.pre+tiempos.duracion+tiempos.pos));
    const [rowFields, setRowFields] = useState({
        id: id,
        premio: premio,
        ganadores: ganadores,
        estado: estado,
        placa: tiempos.placa,
        pre: tiempos.pre,
        duracion: tiempos.duracion,
        pos: tiempos.pos,
        total: totalTime
    });

    const handleLaunchButton = () => {
        console.log("SET RUNNING");
    };

    const handleToggleEdit = () => {
        setIsEditable(last=>!last);
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setRowFields({...rowFields, [name]: value});
        // setRowFields({...rowFields, [name]: value, total: fmtMSS(parseInt(rowFields.placa)+parseInt(rowFields.pre)+parseInt(rowFields.duracion)+parseInt(rowFields.pos))});
        //  setRowFields({...rowFields, total: fmtMSS(parseInt(rowFields.placa)+parseInt(rowFields.pre)+parseInt(rowFields.duracion)+parseInt(rowFields.pos))});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsEditable(false);
        const total = parseInt(rowFields.placa) + parseInt(rowFields.pre) +  parseInt(rowFields.duracion) + parseInt(rowFields.pos);
        const timmers = {
            placa: parseInt(rowFields.placa),
            pre: parseInt(rowFields.pre),
            duracion: parseInt(rowFields.duracion),
            pos: parseInt(rowFields.pos),
            total: total
            };
        setRaffleTimers(raffle, timmers);
        setRaffleWinners(raffle, ganadores);
        setRaffleState(raffle, estado);
        console.log("RAFFLES" , raffles);
    }

    useEffect(()=>{
        const sumTimes = parseInt(rowFields.placa) + parseInt(rowFields.pre) + parseInt(rowFields.duracion) + parseInt(rowFields.pos);
    //TODO: sumarizar todas las lineas
        rowFields.total = fmtMSS(sumTimes);
    },[rowFields]);
    //TODO: Crear una linea con imputs para editar
    // <WinnersInputContainer name='ganadores' value={rowFields.ganadores} onChange={handleChange}/>
    // <StatusInputContainer name='estado' value={rowFields.estado} onChange={handleChange}/>
return(
        <RaffleItemContainer>
        { 
            isEditable ? (
                <RaffleEditContainer onSubmit={handleSubmit}>
                    <IdContainer>{rowFields.id}</IdContainer>
                    <RewardContainer>{rowFields.premio}</RewardContainer>
                    <WinnersContainer>{rowFields.ganadores}</WinnersContainer>
                    <StatusContainer>{rowFields.estado}</StatusContainer>
                    <TimerInputContainer name='placa' value={rowFields.placa}  onChange={handleChange}/>
                    <TimerInputContainer name='pre' value={rowFields.pre} onChange={handleChange}/>
                    <TimerInputContainer name='duracion' value={rowFields.duracion} onChange={handleChange}/>
                    <TimerInputContainer name='pos' value={rowFields.pos}  onChange={handleChange}/>
                    <TimerContainer>{rowFields.total}</TimerContainer>
                    <button><IconEditContainer src={saveIcon} alt='edit' type='submit'/></button>
                </RaffleEditContainer>
            ):(
                <RaffleViewContainer>
                    <IdContainer>{rowFields.id}</IdContainer>
                    <RewardContainer>{rowFields.premio}</RewardContainer>
                    <WinnersContainer>{rowFields.ganadores}</WinnersContainer>
                    <StatusContainer>{rowFields.estado}</StatusContainer>
                    <TimerContainer>{rowFields.placa}</TimerContainer>
                    <TimerContainer>{rowFields.pre}</TimerContainer>
                    <TimerContainer>{rowFields.duracion}</TimerContainer>
                    <TimerContainer>{rowFields.pos}</TimerContainer>
                    <TimerContainer>{rowFields.total}</TimerContainer>
                    <IconEditContainer src={editIcon} alt='edit' onClick={handleToggleEdit}/>
                </RaffleViewContainer>
            )
        }
        </RaffleItemContainer>
    );
}

export default RaffleItem;

            // <ItemButton 
            //     enable={state==="PENDIENTE"} 
            //     onClick={() =>{
            //         (state==="PENDIENTE") ?(                    
            //             window.confirm("QUIERE LANZAR EL SORTEO NRO: " + id + " ?" ) ?
            //             handleLaunchButton() 
            //             :
            //             console.log(""))
            //         :
            //         console.log("")
            //     } }
            //     to={(state==="PENDIENTE" )?'/lottery':''}
            //     >
            //         LANZAR SORTEO
            //     </ItemButton>

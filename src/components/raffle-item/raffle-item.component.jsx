import { useContext, useState } from 'react';
import { RaffleContext } from '../../context/raffles.context';

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
    TimerInputContainer
} from './raffle-item.styles';

const RaffleItem = ({raffle}) => {
    const {setRaffleTimers, raffles} = useContext(RaffleContext);
    const { id, premio, ganadores, estado, tiempos } = raffle;
    const [isEditable, setIsEditable] = useState(false);
    const [rowFields, setRowFields] = useState({
        id: id,
        premio: premio,
        ganadores: ganadores,
        estado: estado,
        placa: tiempos.placa,
        pre: tiempos.pre,
        duracion: tiempos.duracion,
        pos: tiempos.pos
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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Hey its me!");
        setIsEditable(false);
        const timmers = {
            placa: rowFields.placa,
            pre: rowFields.pre,
            duracion: rowFields.duracion,
            pos: rowFields.pos
            };
        setRaffleTimers(raffle, timmers);
        console.log("RAFFLES" , raffles);
    }

    //TODO: Crear una linea con imputs para editar
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

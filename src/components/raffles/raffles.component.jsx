import { useContext } from 'react';

import RaffleItem from '../raffle-item/raffle-item.component';

import { RaffleContext } from '../../context/raffles.context';

import { 
    RafflesContainer,
    RafflesItems,
    RafflesTitle,
    RaffleHdrTableContainer,
    IdHdrContainer,
    RewardHdrContainer,
    WinnersHdrContainer,
    StatusHdrContainer,
    PauseHdrContainer
} from './raffles.styles';

const Raffles = () => {
    const {raffles} = useContext(RaffleContext);

    return(
        <RafflesContainer>
            <RafflesTitle>SORTEOS</RafflesTitle>
            <RaffleHdrTableContainer>
                <IdHdrContainer>ID</IdHdrContainer>
                <RewardHdrContainer>Premio</RewardHdrContainer>
                <WinnersHdrContainer>Ganadores</WinnersHdrContainer>
                <StatusHdrContainer>Estado</StatusHdrContainer>
                <PauseHdrContainer>Pausa</PauseHdrContainer>
            </RaffleHdrTableContainer>
            <RafflesItems>
            {
                raffles.map(raffle=>(<RaffleItem key={raffle.id} raffle={raffle}/>))
            }            
            </RafflesItems>
        </RafflesContainer>
    );
}

export default Raffles;
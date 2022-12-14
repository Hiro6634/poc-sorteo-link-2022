import { useContext, useEffect, useState } from 'react';

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
    TimerHdrContainer
} from './raffles.styles';

const Raffles = () => {
    // const total = getRafflesTotalTime();
    const {raffles, getRafflesTotalTime} = useContext(RaffleContext);

    // console.log("Total Time:" + total);

    return(
        <RafflesContainer>
            <RafflesTitle>SORTEOS</RafflesTitle>
            <RaffleHdrTableContainer>
                <IdHdrContainer>ID</IdHdrContainer>
                <RewardHdrContainer>Premio</RewardHdrContainer>
                <WinnersHdrContainer>Ganadores</WinnersHdrContainer>
                <StatusHdrContainer>Estado</StatusHdrContainer>
                <TimerHdrContainer>Placa</TimerHdrContainer>
                <TimerHdrContainer>Pre</TimerHdrContainer>
                <TimerHdrContainer>Duracion</TimerHdrContainer>
                <TimerHdrContainer>Pos</TimerHdrContainer>
                <TimerHdrContainer>Total</TimerHdrContainer>
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
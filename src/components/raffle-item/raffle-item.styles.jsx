import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RaffleItemContainer = styled.div`
    width: 100%;
`;

export const RaffleViewContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 5px;
`;

export const RaffleEditContainer = styled.form`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 5px;
`;

export const ItemButton = styled(Link)`
    width:auto;
    background-color: ${props => props.enable?"black":"grey"};
    color: white;
`;

export const IdContainer = styled.span`
    width: 10%;
    text-align: center;
`;

export const RewardContainer = styled.span`
    width: 30%;
    text-align: left;
`;

export const WinnersContainer = styled.span`
    width: 15%;
    text-align: center;
`;

export const StatusContainer = styled.span`
    width: 20%;
    text-align: left;
`;

export const TimerContainer = styled.span`
    width: 5%;
    text-align: left;
`;

export const IconEditContainer = styled.img`
    width: auto;
    height: 18px;
`;
export const TimerInputContainer = styled.input`
    width: 5%;  
`;
export const WinnersInputContainer = styled.input`
    width: 15%;
    text-align: center;
`;

export const StatusInputContainer = styled.input`
    width: 20%;
    text-align: left;
`;

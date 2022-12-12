import styled from 'styled-components';

export const LotteryContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;
export const RaffleTransitionContainer = styled.div`
    width: auto;
`;

export const RaffleFixScreenContainer = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0px;
`;

export const CountdownContainer = styled.span`
    color: white;
    opacity: ${props=>props.isCountdown?'35%':'0%'};
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-weight: bold;
    font-size: 18px;
`;

export const PrizeContainer = styled.div`
    width: 60%;
    height: 40px;
    position: absolute;
    top: 15%;
    left: 17%;
`;

export const PrizeImgContainer = styled.img`
    position: relative;
    width: 80%;
    left: 10%;
`;

export const NamesLoopContainer = styled.div`
    width: 60%;
    height: 120px;
    position: absolute;
    top: 27%;
    left: 17%;

`;


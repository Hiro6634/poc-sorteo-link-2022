import styled from 'styled-components';

export const LotteryContainer = styled.div`
    width: 100%;
`;

export const RewardContainer = styled.div`
    width: 100%;
`;

export const NamesLoopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -160px 650px;
    width: 30%;

    @media  (max-width: 1536px) {
        
        display:block;
        width: 100%;
        margin: -140px -40px ;
        
    }
`;

export const WinnersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -160px 650px;
    width: 30%;

    @media  (max-width: 1536px) {
        
        display:block;
        width: 100%;
        heigth: 20%;
        margin: 280px 20px ;
        
    }
`;

export const RewardImgContainer = styled.img`

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 200px 650px;
    width: 30%;

    @media  (max-width: 1536px) {
        
          display:block;
          width: 35%;
          margin: 160px 460px ;
        
    }

`;


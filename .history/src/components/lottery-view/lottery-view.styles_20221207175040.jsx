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
        margin: -130px -10px ;
        
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
        margin: 300px -10px ;
        
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
          margin: 160px 500px ;
        
    }

`;


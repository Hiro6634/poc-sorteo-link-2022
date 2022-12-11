import styled from 'styled-components';

export const LotteryContainer = styled.div`
    width: auto;
`;

export const RaffleFixScreenContainer = styled.img`

display: flex;
    justify-content: center;
    align-items: center;
    margin: 200px 630px;
    width: 30%;

    @media  (max-width: 1536px) {
          display:block;
          width: 35%;
          margin: 160px 460px ;
    }
    @media  (max-width: 1366px) {
          display:block;
          width: 1000px;
          margin:auto ;
        
    }
`;


import styled from 'styled-components';
import imagen from '../../assets/PantallasPremio_Fija.jpg';

export const LotteryContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const RaffleFixScreenContainer = styled.img`
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

// export const RaffleFixScreenContainer = styled.img`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 200px 630px;
//     width: 30%;

//     @media  (max-width: 1536px) {
//           display:block;
//           width: 35%;
//           margin: 160px 460px ;
//     }
//     @media  (max-width: 1366px) {
//           display:block;
//           width: 1000px;
//           margin:auto ;
        
//     }
// `;

export const RewardContainer = styled.div`
    width: 60%;
    height: 40px;
    position: absolute;
    top: 13%;
    left: 17%;
`;

export const RewardImgContainer = styled.img`
    position: relative;
    width: 80%;
    left: 10%;
`;
// export const RewardImgContainer = styled.img`

//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 200px 630px;
//     width: 30%;

//     @media  (max-width: 1536px) {
//           display:block;
//           width: 35%;
//           margin: 160px 460px ;
//     }
//     @media  (max-width: 1366px) {
//           display:block;
//           width: 35%;
//           margin: 100px 460px ;
        
//     }

// `;

export const NamesLoopContainer = styled.div`
    width: 60%;
    height: 120px;
    position: absolute;
    top: 23%;
    left: 17%;

`;

export const WinnersViewContainer = styled.div`
    width:80%;
    height: 200px;
    border: 1px solid white;
    border-radius: 25px;
    position: absolute;
    padding: 10px;
    margin-top: 32%;
    margin-left: 10%;
`; 

// export const NamesLoopContainer = styled.div`
//     display:block;
//     justify-content: center;
//     align-items: center;
// //    margin: -160px 625px;
//     margin: -160px 625px;
//     width: 100%;

//     @media  (max-width: 1536px) {
        
//         display:block;
//         width: 100%;
//         margin: -140px -40px ;
        
//     }
// `;




// export const WinnersContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 320px 600px;
//     width: 30%;
//     background-color: white;
//     opacity: .75;

//     @media  (max-width: 1536px) {
        
//         display:block;
//         width: 100%;
//         heigth: 20%;
//         margin: 280px 20px ;
        
//     }
//     @media  (max-width: 1366px) {
        
//         display:block;
//         width: 100%;
//         heigth: auto;
//         margin: 210px 20px ;
//     }
// `;


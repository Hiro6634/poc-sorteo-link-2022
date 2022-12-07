import styled from 'styled-components';
import img from '../../assets/PantallasPremio_Fija.jpg'
export const LotteryContainer = styled.div`
    width: auto;
`;

export const Title = styled.div`
    width: auto;
`;

export const RaffleContainer = styled.div`
    position: relative;
    width: 100% ;
    margin-top:15%;
    left: -20px;
`;

export const RaffleTitle = styled.div`
    width: auto;
`;

export const RaffleStaticImage = styled.div`
    width: auto;
    height: auto;
    background-image: url(${img});
`;


const Column = styled.div`
    float: left;
    width: 100%;

    @media only screen and (min-width: 768px) {
        width: ${props => (props.span ? props.span / 12 * 100 : "8.33")}%;
    }
`;











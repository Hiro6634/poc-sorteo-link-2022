import TextLoop from 'react-text-loop';

import { 
    LotteryContainer,
    Title 
} from './lottery.styles';

const Lottery = () => {
    const players = [
        {
            id: 1,
            legajo: 1,
            Nombre: 'Paula',
            Apellido: 'Rodriguez'
        },
        {
            id: 2,
            legajo: 11,
            Nombre: 'Pedro',
            Apellido: 'Alvarez'
        },
        {
            id: 3,
            legajo: 15,
            Nombre: 'Joaquin',
            Apellido: 'Perez'
        },
        {
            id: 4,
            legajo: 21,
            Nombre: 'Alejandro',
            Apellido: 'William'
        }
    ];
    return(
        <div>
            <Title>SORTEO LINK</Title>
            <LotteryContainer>
                <TextLoop interval={250} springConfig={{stiffness: 180, damping: 8}}>
                    <span>Paula RODRIGUEZ</span>
                    <span>Pedro ALVAREZ</span>
                    <span>Joaquin PEREZ</span>
                    <span>Alejandro</span>
                    <span>Marcela</span>
                    <span>Abril</span>
                    <span>Dante</span>
                    <span>Mariel</span>
                    <span>Gustavo</span>
                    <span>Nicolas</span>
                    <span>Lautaro</span>
                    <span>Eduardo</span>
                </TextLoop>
            </LotteryContainer>       
        </div>
    );
}

export default Lottery;
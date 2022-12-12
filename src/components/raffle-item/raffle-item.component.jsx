import { 
    RaffleItemContainer,
    IdContainer,
    RewardContainer,
    WinnersContainer,StatusContainer,
    TimerContainer
} from './raffle-item.styles';

const RaffleItem = ({raffle}) => {
    const { id, premio, ganadores, estado, tiempos } = raffle;

    const handleLaunchButton = () => {
        console.log("SET RUNNING");
    };

    return(
        <RaffleItemContainer>
            <IdContainer>{id}</IdContainer>
            <RewardContainer>{premio}</RewardContainer>
            <WinnersContainer>{ganadores}</WinnersContainer>
            <StatusContainer>{estado}</StatusContainer>
            <TimerContainer>{tiempos.placa}</TimerContainer>
            <TimerContainer>{tiempos.pre}</TimerContainer>
            <TimerContainer>{tiempos.duracion}</TimerContainer>
            <TimerContainer>{tiempos.pos}</TimerContainer>
        </RaffleItemContainer>
    );
}

export default RaffleItem;

            // <ItemButton 
            //     enable={state==="PENDIENTE"} 
            //     onClick={() =>{
            //         (state==="PENDIENTE") ?(                    
            //             window.confirm("QUIERE LANZAR EL SORTEO NRO: " + id + " ?" ) ?
            //             handleLaunchButton() 
            //             :
            //             console.log(""))
            //         :
            //         console.log("")
            //     } }
            //     to={(state==="PENDIENTE" )?'/lottery':''}
            //     >
            //         LANZAR SORTEO
            //     </ItemButton>

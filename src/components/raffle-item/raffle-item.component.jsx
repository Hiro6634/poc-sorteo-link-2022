import { 
    RaffleItemContainer,
    IdContainer,
    RewardContainer,
    WinnersContainer,StatusContainer,
    PauseContainer
} from './raffle-item.styles';

const RaffleItem = ({raffle}) => {
    const { id, premio, ganadores, estado, pausa } = raffle;

    const handleLaunchButton = () => {
        console.log("SET RUNNING");
    };

    return(
        <RaffleItemContainer>
            <IdContainer>{id}</IdContainer>
            <RewardContainer>{premio}</RewardContainer>
            <WinnersContainer>{ganadores}</WinnersContainer>
            <StatusContainer>{estado}</StatusContainer>
            <PauseContainer>{pausa}</PauseContainer>
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

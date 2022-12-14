import { WinnersViewContainer } from './winners-view.styles';

const WinnersView = (props) => {
    const {winnersList = [], columns} = props;
    console.log("WINNERS LIST",winnersList);
    console.log("COL:" + columns );
    return(
        <WinnersViewContainer columns={columns}>
        {
            winnersList.map((winner) =>{
                return(<div key={winner.id}>{(winner.apellido + ", " + winner.nombre).substring(0,(columns===3?26:100))}</div>);
            })
        }
        </WinnersViewContainer>
    );
} 

export default WinnersView;
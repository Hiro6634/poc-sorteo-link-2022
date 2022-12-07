import NamesLoop from '../../components/namesloop/namesloop.component';

import { useContext, useEffect } from 'react';
import { WinnerContext } from '../../context/winners.context';
import { RaffleContext } from '../../context/raffles.context';
import WinnersView from '../../components/winners-view/winners-view.component';
import lotteryMask from '../../assets/PantallasPremio_Fija.jpg';

import { 
    LotteryContainer,
    Title,
    RaffleTitle,
    RaffleContainer,
    RaffleStaticImage
} from './lottery.styles';

const Lottery = ({award}) => {
    const {winners} = useContext(WinnerContext);
    const {running, setRunning, isLoading, setLoadingValue, raffles} = useContext(RaffleContext);
    var starting = true;

    function sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time))
    }

    useEffect(() => { 
        const fetchData = async () => {
            await sleep(5000);
            console.log("Time Out!");
            setLoadingValue(false);
        }

        setLoadingValue(true);

        fetchData()
        .catch(console.error);
    },[]);

    console.log("Running:" + running.running);

    const lotteryPage = (
    <div>
        <Row>            
            <LotteryContainer>
                <Column>
                    <RaffleContainer>
                        <h1></h1>
                        <NamesLoop/>
                    </RaffleContainer>
                </Column>
                <WinnersView/>
            </LotteryContainer>
        </Row>
    </div>
);

    return(
        isLoading?(
            <RaffleStaticImage img={lotteryMask}></RaffleStaticImage>
        ) :
        (lotteryPage)
        );
    
}

export default Lottery;
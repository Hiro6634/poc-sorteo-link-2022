import NamesLoop from '../../components/namesloop/namesloop.component';

import { 
    LotteryContainer,
    Title 
} from './lottery.styles';

const Lottery = () => {
    return(
        <div>
            <Title>SORTEO LINK</Title>
            <LotteryContainer>
                <NamesLoop/>
            </LotteryContainer>
        </div>
    );
}

export default Lottery;
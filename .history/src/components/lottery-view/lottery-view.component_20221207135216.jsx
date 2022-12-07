import WinnersView from '../winners-view/winners-view.component';
import NamesLoop from '../namesloop/namesloop.component';

import { 
    LotteryContainer,
    RewardContainer,
    NamesLoopContainer,
    WinnersContainer 
} from './lottery-view.styles';

const LotteryView = (props) => {
    const {img} = props;
    return(
        <LotteryContainer>
            <RewardContainer>
                <img src="" alt="imagen del sorteo"/>
            </RewardContainer>
            <NamesLoopContainer>
                <NamesLoop/>
            </NamesLoopContainer>
            <WinnersContainer>
                <WinnersView/>
            </WinnersContainer>
        </LotteryContainer>
    );
}

export default LotteryView;
import { useContext } from 'react';
import { WinnerContext } from '../../context/winners.context';

import WinnersView from '../winners-view/winners-view.component';
import NamesLoop from '../namesloop/namesloop.component';
import tituloPremio from '../../assets/PantallasPremios-15mil.jpg'


import { 
    LotteryContainer,
    RewardContainer,
    NamesLoopContainer,
    WinnersContainer,
    RewardImgContainer 
} from './lottery-view.styles';

const LotteryView = (props) => {
    const { winColumns} = useContext(WinnerContext);
    const {img} = props;
    return(
        <LotteryContainer>
            <RewardContainer>
                <RewardImgContainer src={tituloPremio} alt="imagen del sorteo"/>
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
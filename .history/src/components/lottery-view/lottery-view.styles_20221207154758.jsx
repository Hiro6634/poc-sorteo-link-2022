import styled from 'styled-components';

export const LotteryContainer = styled.div`
    width: 100%;
`;

export const RewardContainer = styled.div`
    width: 100%;
`;

export const NamesLoopContainer = styled.div`
    width: 100%;
`;

export const WinnersContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    margin: 0.5rem;

    @media ${device.laptop} {
        max-width: 800px;
      }
    
    @media ${device.desktop} {
    max-width: 1400px;
    }


`;

export const RewardImgContainer = styled.img`

    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 90%;

`;

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  };

export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
};



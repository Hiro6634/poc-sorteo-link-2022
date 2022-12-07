import styled from 'styled-components';

export const WinnersViewContainer = styled.div`
    margin: 10px;
    padding: 10px;
    border: 1px solid white;
    border-radius: 15px;
    text-align:center;
    align-items: center;
    max-width: ${props=>props.width};
    max-height:  ${props=>props.height};
`;
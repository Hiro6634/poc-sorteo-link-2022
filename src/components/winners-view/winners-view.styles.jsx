import styled from 'styled-components';

// export const WinnersViewContainer = styled.div`
//     /* margin: 50px; */
//     width: 90%;
//     padding: 90px;
//     border: 1px solid white;
//     border-radius: 15px;
//     text-align:left;
//     align-items: left;
//     `;

export const WinnersViewContainer = styled.div`
    column-count: ${props => props.columns ? props.columns : 1};
    column-gap: 40px;
    column-span: all;
    font-size: 14px;
    font-weight: bold;
    color: blue;

`;
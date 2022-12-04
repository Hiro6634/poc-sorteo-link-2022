import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RaffleItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 5px 0px;

`;

export const ItemButton = styled(Link)`
    width:auto;
    background-color: black;
    color: white;
`;
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 15px;
    width: 100%;
    /* position: absolute; */
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

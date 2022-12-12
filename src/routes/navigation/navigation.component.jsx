import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { RaffleContext } from '../../context/raffles.context';

import { 
    NavigationContainer,
    NavLink
} from './navigation.styles';

const Navigation = () => {
    const {setIsRunning} = useContext(RaffleContext);
    return(
        <Fragment>
            <NavigationContainer>
                <NavLink to = '/' onClick={()=>{setIsRunning(false)}}>ADMIN</NavLink>
                <NavLink to = '/lottery'>SORTEO</NavLink>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { 
    NavigationContainer,
    NavLink
} from './navigation.styles';

const Navigation = () => {
    return(
        <Fragment>
            <NavigationContainer>
                <NavLink to = '/'>ADMIN</NavLink>
                <NavLink to = '/lottery'>SORTEO</NavLink>
                <NavLink to = '/test'>TEST</NavLink>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;
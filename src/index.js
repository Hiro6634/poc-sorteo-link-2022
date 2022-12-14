import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { EmployeesProvider } from './context/employees.context';
import { RafflesProvider } from './context/raffles.context';
import { WinnersProvider } from './context/winners.context';
import { UserProvider } from './context/user.context';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <EmployeesProvider>
                <RafflesProvider>
                    <WinnersProvider>
                        <UserProvider>
                            <App /> 
                        </UserProvider>
                    </WinnersProvider>
                </RafflesProvider>
            </EmployeesProvider>
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

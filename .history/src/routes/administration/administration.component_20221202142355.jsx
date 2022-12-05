import Raffles from '../../components/raffles/raffles.component';

import { useContext } from 'react';
import { EmployeeContext } from '../../context/employees.context';

import EMPLOYEES from '../../context/employees.json';

import { SaveWinners } from '../../utils/save-winners';


const Administration = () => {
    const {loadEmployees, employees} = useContext(EmployeeContext);

    const handleButton = () => {
        console.log(employees);
        loadEmployees(EMPLOYEES);
        console.log(employees);
    }

    return(
        <div>
            <h1>SORTEOS</h1>
            <div>
                <Raffles/>
            </div>
            <button onClick={handleButton}>BOTON</button>
            <button onClick={() =>SaveWinners()}>Cargar Ganadores</button>

        </div>
    );


}


export default Administration;
import { useContext } from "react";
import { EmployeeContext } from "../context/employees.context";



export const GetWinner = (employees) => {
    //TODO: obtener un ganador del listado y eliminarlo del mismo. Pasar el ganador (nombre, apellido, nro del legajo)

    console.log(employees);
    indice = Math.floor(Math.random() * length(employees));
    console.log('indice '+ indice);
    

}
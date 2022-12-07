import { useContext } from "react";
import { EmployeeContext } from "../context/employees.context";



export const GetWinner = (employees) => {
    //TODO: obtener un ganador del listado y eliminarlo del mismo. Pasar el ganador (nombre, apellido, nro del legajo)

    console.log(employees);
    let indice = Math.floor(Math.random() * employees.length);
    console.log('indice '+ indice);
    employees.removeEmployeeByIndex(indice);
    console.log(employees);

}
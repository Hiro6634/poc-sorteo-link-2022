import TextLoop from 'react-text-loop';

const NamesLoop = () => {
    const employes =  [
        { 
            id: 1967,
            lastName: "GETTE",
            firstName: "EVELYN DESIREE",
        },
        { 
            id: 1968,
            lastName: "PERASSO",
            firstName: "GERARDO MARTIN",
        },
        { 
            id: 1969,
            lastName: "SEGOVIA",
            firstName: "NOELIA FERNANDA",
        },
        { 
            id: 1971,
            lastName: "LOPEZ",
            firstName: "ARIEL DARIO",
        },
        { 
            id: 1972,
            lastName: "RUEDA",
            firstName: "SANTIAGO",
        },
        { 
            id: 1975,
            lastName: "NIELSEN",
            firstName: "HERNAN EZEQUIEL",
        },
        { 
            id: 1977,
            lastName: "SOLDATI",
            firstName: "MARIA LAURA",
        },
        { 
            id: 1978,
            lastName: "MORALES",
            firstName: "CAROLINA",
        },
        {
            id: 1981,
            lastName:"ALVAREZ PRIETO",
            firstName:"RODRIGO"
        },
        {   
            id: 1982,	
            lastName:"CARABALLO ZAMORA",
            firstName:"LISMAR DAYANA",
        }
    ];

    return(
        <div>
            <TextLoop>
                { employees.map((employee) =>{
                    <span>{employee.lastName}</span>
                })}
            </TextLoop>
        </div>
    );
}
import * as xlsx from 'xlsx';
// const fs = require('fs');

const readExcelAsync = (inputFile) => {
    const reader = new FileReader();
    console.log("readExcelAsync");
    return new Promise((resolve, reject)=>{
        reader.onerror = () => {
            console.error("Some ERROR");
            reader.abort();
            reject(new DOMException("Problem parsing input file: " + inputFile));
        };
        reader.onload = () => {
            console.log("Loading success");
            resolve(reader.result);
        };

        reader.readAsBinaryString(inputFile);
    });
}



export const excelAjson = async (inputFile) => {
    let result = null;
    try{
        const data = await readExcelAsync(inputFile);
        const workbook = xlsx.read(data, {type:'binary'});
        workbook.SheetNames.forEach( sheet => {
            const rowObject = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
            const datos = JSON.stringify(rowObject, undefined,4);
            result = JSON.parse(datos);
            result.forEach(element => {
                Object.keys(element).forEach( key => {
                    if (key === 'TipoDocumento' || key === 'Activo' || key === 'Email' || key === 'Email Corporativo' || key === 'Fecha Ingreso' || key === 'Gerencia' || key === 'LoginName' || key === 'UsuarioSP') {
                      delete element[key];                         
                    }
                    if (key === 'Legajo') {
                        element['id'] = element[key];
                        delete element[key];
                    }  
                });
            });
        }); 
    } catch(err){
        console.log(err);
    }
    return result;
}

export const SaveWinners = (winners) => {
    console.log(winners);
   
    let filename='Ganadores.xlsx';   
    var ws = xlsx.utils.json_to_sheet(winners);
    var wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Ganadores");
    xlsx.writeFile(wb,filename);
    return;
}

export const GetUrlConfig = (config) => {
    const configStr = new Blob([JSON.stringify(config)],{type:'text/plain'});
    return URL.createObjectURL(configStr);
}

// export const SaveConfig = (config) => {
//     fs.writeFile('codngi.json', JSON.stringify(config), (err)=>{
//         if (err) alert('Error writing file:', err);
//     });
// }
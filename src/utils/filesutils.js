import * as xlsx from 'xlsx';


const readExcelAsync = (inputFile) => {
    return new Promise((resolve, reject)=>{
        let reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        }

        reader.onerror = reject;

        reader.readAsBinaryString(inputFile);
    });
}

export const excelAjson = async (inputFile) => {
    let result = null;
    try{
        const data = await readExcelAsync(inputFile);
        console.log("DATA READY!");
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
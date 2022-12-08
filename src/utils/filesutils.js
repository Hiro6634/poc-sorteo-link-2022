var xlsx = require('xlsx');


export const excelAjson = () => {
    let datos;
    let selectedFile;
    console.log('hola');
    var archivo = document.getElementById('exportButton');
    if (archivo) {
        archivo.addEventListener("change",(event)=>{
            
            selectedFile = event.target.files[0];
            let fileReader = new FileReader();
            fileReader.readAsBinaryString(selectedFile);
            fileReader.onload = (event) => {
               let data = event.target.result;
               let workbook = xlsx.read(data, {type:"binary"});
               //console.log(workbook);
               workbook.SheetNames.forEach(sheet => {
                let rowObject = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
                
                let datos = JSON.stringify(rowObject,undefined,4);
                let datos1 = JSON.parse(datos);
                console.log(datos);
                datos1.forEach(element => {
                    Object.keys(element).forEach(function(key){
                        if (key === 'TipoDocumento' || key === 'Activo' || key === 'Email' || key === 'Email Corporativo' || key === 'Fecha Ingreso' || key === 'Gerencia' || key === 'LoginName' || key === 'UsuarioSP') {
                          delete element[key];                         
                        }
                        if (key === 'Legajo') {
                            element['id'] = element[key];
                            delete element[key];
                        }    

                      });
                });
                console.log(datos1);

                  

               });
            }

        });
    
    }
    
    //fileReader.readAsBinaryString(selectedFile);
    //fileReader.onload = (event) => {
    //    console.log(event.target.result);
    //}


};

export const SaveWinners = (winners) => {
    console.log(winners);
   
    let filename='Ganadores.xlsx';   
    var ws = xlsx.utils.json_to_sheet(winners);
    var wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Ganadores");
    xlsx.writeFile(wb,filename);
    return;
}
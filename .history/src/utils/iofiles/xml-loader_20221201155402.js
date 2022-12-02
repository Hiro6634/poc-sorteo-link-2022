const fs = require('fs');
var xlsx = require('xlsx');

/*if (process.argv[2] == undefined) {
    console.error('Usar: node csv2json.js <file.csv>');
    process.exit(1);
}

const filename = process.argv[2];
const fileText = fs.readFileSync(filename).toString();
const allLines = fileText.split('\n');
const header = allLines[0];
const dataLines = allLines.slice(1);

const fieldNames = header.split(',');

let objList = [];

for (let i = 0; i<dataLines.length; i++) {
    let obj = {};
    const data = dataLines[i].split(',');
    for (let j = 0; i<fieldNames.length; j++) {
        obj[fieldNames[j]] = data[j];

    }
    objList.push(obj)
}
const jsonText = JSON.stringify(objList);
fs.writeFileSync(filename.replace(".csv",".json"), jsonText);

*/


export const excelAjson = () => {
    const excel = xlsx.readFile("C:\\Users\\sm_i01785\\Downloads\\201993- ReportePortalCH Internos.xlsx");
    var nombreHoja = excel.SheetNames;

    let datos = xlsx.sheet_to_json(excel.Sheets[nombreHoja[0]], {
        cellDates: true
    });

};

//excelAjson();
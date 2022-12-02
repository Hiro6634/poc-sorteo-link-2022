const fs = require('fs');

if (process.argv[2] == undefined) {
    console.error('Usar: node csv2json.js <file.csv>');
    process.exit(1);
}

const filename = process.argv[2];
const fileText = fs.readFileSync(filename).toString();

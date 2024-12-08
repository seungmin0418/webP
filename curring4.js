const fs = require('fs');
const openFileAndPrint = path => fileName => fs.readFile(path + fileName, (err, data) => {
if (err) throw err;
console.log(data.toString());
});
const thisDirOpenFileAndPrint = openFileAndPrint('./');
const parentDirOpenFileAndPrint = openFileAndPrint('../');
//thisDirOpenFileAndPrint('curring3.js');
parentDirOpenFileAndPrint('add1to10.js');
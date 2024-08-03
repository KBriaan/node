//Globals -no window!!!

//_dirname -path to current directory
//_filename -file name
//require -function to use modules
//module-info about the current module
//proces -info about where the program is being executed


//Modules
// COMON JSON, every file in node is a module
//modules - these are encapsulated code


const names = require('./names');
const sayHi= require('./utils')
console.log(names)

sayHi('peter')
sayHi(names.john)
sayHi(names.susan)
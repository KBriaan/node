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
const sayHi= require('./utils');
const data =require ('./alternative')
require('./grenade')

sayHi('peter')
sayHi(names.john)
sayHi(names.susan)


//3:os  modules

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()}` )

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemen:os.freemem(),

}
console.log(currentOS)
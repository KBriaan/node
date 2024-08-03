//Globals -no window!!!

//_dirname -path to current directory
//_filename -file name
//require -function to use modules
//module-info about the current module
//proces -info about where the program is being executed


//Modules
// COMON JSON, every file in node is a module
//modules - these are encapsulated code

const secret = "SUPER SECRET"
const john ='john'
const susan ='susan'
const sayHi =(name)=>{
    console.log(`Hello there ${name}`)
}
sayHi('peter')
sayHi(john)
sayHi(susan)
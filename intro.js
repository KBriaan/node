const amount = 9
if (amount <10){
    console.log("small number")
} else{
    console.log ("large number")
}
console.log("hello, this is my first node application")


//_dirname -path to current directory
console.log(__dirname)

setInterval(()=>{
console.log("Hello world")
}, 10)

// intro to modules
const john ='john'
const susan ='susan'
const sayHi =(name)=>{
    console.log(`Hello there ${name}`)
}
sayHi('peter')
sayHi(john)
sayHi(susan)

//modules